// Compiled by ClojureScript 0.0-3123 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24734 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24734 = (function (f,fn_handler,meta24735){
this.f = f;
this.fn_handler = fn_handler;
this.meta24735 = meta24735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24734.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24736){
var self__ = this;
var _24736__$1 = this;
return self__.meta24735;
});

cljs.core.async.t24734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24736,meta24735__$1){
var self__ = this;
var _24736__$1 = this;
return (new cljs.core.async.t24734(self__.f,self__.fn_handler,meta24735__$1));
});

cljs.core.async.t24734.cljs$lang$type = true;

cljs.core.async.t24734.cljs$lang$ctorStr = "cljs.core.async/t24734";

cljs.core.async.t24734.cljs$lang$ctorPrWriter = (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t24734");
});

cljs.core.async.__GT_t24734 = (function cljs$core$async$fn_handler_$___GT_t24734(f__$1,fn_handler__$1,meta24735){
return (new cljs.core.async.t24734(f__$1,fn_handler__$1,meta24735));
});

}

return (new cljs.core.async.t24734(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24738 = buff;
if(G__24738){
var bit__18320__auto__ = null;
if(cljs.core.truth_((function (){var or__17646__auto__ = bit__18320__auto__;
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
} else {
return G__24738.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24738.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24738);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24738);
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
var val_24739 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24739);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24739,ret){
return (function (){
return fn1.call(null,val_24739);
});})(val_24739,ret))
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
var n__18531__auto___24740 = n;
var x_24741 = (0);
while(true){
if((x_24741 < n__18531__auto___24740)){
(a[x_24741] = (0));

var G__24742 = (x_24741 + (1));
x_24741 = G__24742;
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

var G__24743 = (i + (1));
i = G__24743;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24747 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24747 = (function (flag,alt_flag,meta24748){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24748 = meta24748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24747.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24749){
var self__ = this;
var _24749__$1 = this;
return self__.meta24748;
});})(flag))
;

cljs.core.async.t24747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24749,meta24748__$1){
var self__ = this;
var _24749__$1 = this;
return (new cljs.core.async.t24747(self__.flag,self__.alt_flag,meta24748__$1));
});})(flag))
;

cljs.core.async.t24747.cljs$lang$type = true;

cljs.core.async.t24747.cljs$lang$ctorStr = "cljs.core.async/t24747";

cljs.core.async.t24747.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t24747");
});})(flag))
;

cljs.core.async.__GT_t24747 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24747(flag__$1,alt_flag__$1,meta24748){
return (new cljs.core.async.t24747(flag__$1,alt_flag__$1,meta24748));
});})(flag))
;

}

return (new cljs.core.async.t24747(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24753 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24753 = (function (cb,flag,alt_handler,meta24754){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24754 = meta24754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24755){
var self__ = this;
var _24755__$1 = this;
return self__.meta24754;
});

cljs.core.async.t24753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24755,meta24754__$1){
var self__ = this;
var _24755__$1 = this;
return (new cljs.core.async.t24753(self__.cb,self__.flag,self__.alt_handler,meta24754__$1));
});

cljs.core.async.t24753.cljs$lang$type = true;

cljs.core.async.t24753.cljs$lang$ctorStr = "cljs.core.async/t24753";

cljs.core.async.t24753.cljs$lang$ctorPrWriter = (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t24753");
});

cljs.core.async.__GT_t24753 = (function cljs$core$async$alt_handler_$___GT_t24753(cb__$1,flag__$1,alt_handler__$1,meta24754){
return (new cljs.core.async.t24753(cb__$1,flag__$1,alt_handler__$1,meta24754));
});

}

return (new cljs.core.async.t24753(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24756_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24756_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24757_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24757_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17646__auto__ = wport;
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24758 = (i + (1));
i = G__24758;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17646__auto__ = ret;
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17634__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17634__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17634__auto__;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__24759){
var map__24761 = p__24759;
var map__24761__$1 = ((cljs.core.seq_QMARK_.call(null,map__24761))?cljs.core.apply.call(null,cljs.core.hash_map,map__24761):map__24761);
var opts = map__24761__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__24759 = null;
if (arguments.length > 1) {
var G__24762__i = 0, G__24762__a = new Array(arguments.length -  1);
while (G__24762__i < G__24762__a.length) {G__24762__a[G__24762__i] = arguments[G__24762__i + 1]; ++G__24762__i;}
  p__24759 = new cljs.core.IndexedSeq(G__24762__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__24759);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__24763){
var ports = cljs.core.first(arglist__24763);
var p__24759 = cljs.core.rest(arglist__24763);
return cljs$core$async$alts_BANG___delegate(ports,p__24759);
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
var c__19828__auto___24858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___24858){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___24858){
return (function (state_24834){
var state_val_24835 = (state_24834[(1)]);
if((state_val_24835 === (7))){
var inst_24830 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
var statearr_24836_24859 = state_24834__$1;
(statearr_24836_24859[(2)] = inst_24830);

(statearr_24836_24859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (1))){
var state_24834__$1 = state_24834;
var statearr_24837_24860 = state_24834__$1;
(statearr_24837_24860[(2)] = null);

(statearr_24837_24860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (4))){
var inst_24813 = (state_24834[(7)]);
var inst_24813__$1 = (state_24834[(2)]);
var inst_24814 = (inst_24813__$1 == null);
var state_24834__$1 = (function (){var statearr_24838 = state_24834;
(statearr_24838[(7)] = inst_24813__$1);

return statearr_24838;
})();
if(cljs.core.truth_(inst_24814)){
var statearr_24839_24861 = state_24834__$1;
(statearr_24839_24861[(1)] = (5));

} else {
var statearr_24840_24862 = state_24834__$1;
(statearr_24840_24862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (13))){
var state_24834__$1 = state_24834;
var statearr_24841_24863 = state_24834__$1;
(statearr_24841_24863[(2)] = null);

(statearr_24841_24863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (6))){
var inst_24813 = (state_24834[(7)]);
var state_24834__$1 = state_24834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24834__$1,(11),to,inst_24813);
} else {
if((state_val_24835 === (3))){
var inst_24832 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24834__$1,inst_24832);
} else {
if((state_val_24835 === (12))){
var state_24834__$1 = state_24834;
var statearr_24842_24864 = state_24834__$1;
(statearr_24842_24864[(2)] = null);

(statearr_24842_24864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (2))){
var state_24834__$1 = state_24834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24834__$1,(4),from);
} else {
if((state_val_24835 === (11))){
var inst_24823 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
if(cljs.core.truth_(inst_24823)){
var statearr_24843_24865 = state_24834__$1;
(statearr_24843_24865[(1)] = (12));

} else {
var statearr_24844_24866 = state_24834__$1;
(statearr_24844_24866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (9))){
var state_24834__$1 = state_24834;
var statearr_24845_24867 = state_24834__$1;
(statearr_24845_24867[(2)] = null);

(statearr_24845_24867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (5))){
var state_24834__$1 = state_24834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24846_24868 = state_24834__$1;
(statearr_24846_24868[(1)] = (8));

} else {
var statearr_24847_24869 = state_24834__$1;
(statearr_24847_24869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (14))){
var inst_24828 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
var statearr_24848_24870 = state_24834__$1;
(statearr_24848_24870[(2)] = inst_24828);

(statearr_24848_24870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (10))){
var inst_24820 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
var statearr_24849_24871 = state_24834__$1;
(statearr_24849_24871[(2)] = inst_24820);

(statearr_24849_24871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (8))){
var inst_24817 = cljs.core.async.close_BANG_.call(null,to);
var state_24834__$1 = state_24834;
var statearr_24850_24872 = state_24834__$1;
(statearr_24850_24872[(2)] = inst_24817);

(statearr_24850_24872[(1)] = (10));


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
});})(c__19828__auto___24858))
;
return ((function (switch__19772__auto__,c__19828__auto___24858){
return (function() {
var cljs$core$async$pipe_$_state_machine__19773__auto__ = null;
var cljs$core$async$pipe_$_state_machine__19773__auto____0 = (function (){
var statearr_24854 = [null,null,null,null,null,null,null,null];
(statearr_24854[(0)] = cljs$core$async$pipe_$_state_machine__19773__auto__);

(statearr_24854[(1)] = (1));

return statearr_24854;
});
var cljs$core$async$pipe_$_state_machine__19773__auto____1 = (function (state_24834){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_24834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e24855){if((e24855 instanceof Object)){
var ex__19776__auto__ = e24855;
var statearr_24856_24873 = state_24834;
(statearr_24856_24873[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24874 = state_24834;
state_24834 = G__24874;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__19773__auto__ = function(state_24834){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__19773__auto____1.call(this,state_24834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__19773__auto____0;
cljs$core$async$pipe_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__19773__auto____1;
return cljs$core$async$pipe_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___24858))
})();
var state__19830__auto__ = (function (){var statearr_24857 = f__19829__auto__.call(null);
(statearr_24857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___24858);

return statearr_24857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___24858))
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
return (function (p__25058){
var vec__25059 = p__25058;
var v = cljs.core.nth.call(null,vec__25059,(0),null);
var p = cljs.core.nth.call(null,vec__25059,(1),null);
var job = vec__25059;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19828__auto___25241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___25241,res,vec__25059,v,p,job,jobs,results){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___25241,res,vec__25059,v,p,job,jobs,results){
return (function (state_25064){
var state_val_25065 = (state_25064[(1)]);
if((state_val_25065 === (2))){
var inst_25061 = (state_25064[(2)]);
var inst_25062 = cljs.core.async.close_BANG_.call(null,res);
var state_25064__$1 = (function (){var statearr_25066 = state_25064;
(statearr_25066[(7)] = inst_25061);

return statearr_25066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25064__$1,inst_25062);
} else {
if((state_val_25065 === (1))){
var state_25064__$1 = state_25064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25064__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19828__auto___25241,res,vec__25059,v,p,job,jobs,results))
;
return ((function (switch__19772__auto__,c__19828__auto___25241,res,vec__25059,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0 = (function (){
var statearr_25070 = [null,null,null,null,null,null,null,null];
(statearr_25070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__);

(statearr_25070[(1)] = (1));

return statearr_25070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1 = (function (state_25064){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e25071){if((e25071 instanceof Object)){
var ex__19776__auto__ = e25071;
var statearr_25072_25242 = state_25064;
(statearr_25072_25242[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25243 = state_25064;
state_25064 = G__25243;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = function(state_25064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1.call(this,state_25064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___25241,res,vec__25059,v,p,job,jobs,results))
})();
var state__19830__auto__ = (function (){var statearr_25073 = f__19829__auto__.call(null);
(statearr_25073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___25241);

return statearr_25073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___25241,res,vec__25059,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25074){
var vec__25075 = p__25074;
var v = cljs.core.nth.call(null,vec__25075,(0),null);
var p = cljs.core.nth.call(null,vec__25075,(1),null);
var job = vec__25075;
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
var n__18531__auto___25244 = n;
var __25245 = (0);
while(true){
if((__25245 < n__18531__auto___25244)){
var G__25076_25246 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25076_25246) {
case "async":
var c__19828__auto___25248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25245,c__19828__auto___25248,G__25076_25246,n__18531__auto___25244,jobs,results,process,async){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (__25245,c__19828__auto___25248,G__25076_25246,n__18531__auto___25244,jobs,results,process,async){
return (function (state_25089){
var state_val_25090 = (state_25089[(1)]);
if((state_val_25090 === (7))){
var inst_25085 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25091_25249 = state_25089__$1;
(statearr_25091_25249[(2)] = inst_25085);

(statearr_25091_25249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (6))){
var state_25089__$1 = state_25089;
var statearr_25092_25250 = state_25089__$1;
(statearr_25092_25250[(2)] = null);

(statearr_25092_25250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (5))){
var state_25089__$1 = state_25089;
var statearr_25093_25251 = state_25089__$1;
(statearr_25093_25251[(2)] = null);

(statearr_25093_25251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (4))){
var inst_25079 = (state_25089[(2)]);
var inst_25080 = async.call(null,inst_25079);
var state_25089__$1 = state_25089;
if(cljs.core.truth_(inst_25080)){
var statearr_25094_25252 = state_25089__$1;
(statearr_25094_25252[(1)] = (5));

} else {
var statearr_25095_25253 = state_25089__$1;
(statearr_25095_25253[(1)] = (6));

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
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25089__$1,(4),jobs);
} else {
if((state_val_25090 === (1))){
var state_25089__$1 = state_25089;
var statearr_25096_25254 = state_25089__$1;
(statearr_25096_25254[(2)] = null);

(statearr_25096_25254[(1)] = (2));


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
});})(__25245,c__19828__auto___25248,G__25076_25246,n__18531__auto___25244,jobs,results,process,async))
;
return ((function (__25245,switch__19772__auto__,c__19828__auto___25248,G__25076_25246,n__18531__auto___25244,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null];
(statearr_25100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1 = (function (state_25089){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__19776__auto__ = e25101;
var statearr_25102_25255 = state_25089;
(statearr_25102_25255[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25256 = state_25089;
state_25089 = G__25256;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = function(state_25089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1.call(this,state_25089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__;
})()
;})(__25245,switch__19772__auto__,c__19828__auto___25248,G__25076_25246,n__18531__auto___25244,jobs,results,process,async))
})();
var state__19830__auto__ = (function (){var statearr_25103 = f__19829__auto__.call(null);
(statearr_25103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___25248);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(__25245,c__19828__auto___25248,G__25076_25246,n__18531__auto___25244,jobs,results,process,async))
);


break;
case "compute":
var c__19828__auto___25257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25245,c__19828__auto___25257,G__25076_25246,n__18531__auto___25244,jobs,results,process,async){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (__25245,c__19828__auto___25257,G__25076_25246,n__18531__auto___25244,jobs,results,process,async){
return (function (state_25116){
var state_val_25117 = (state_25116[(1)]);
if((state_val_25117 === (7))){
var inst_25112 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
var statearr_25118_25258 = state_25116__$1;
(statearr_25118_25258[(2)] = inst_25112);

(statearr_25118_25258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25117 === (6))){
var state_25116__$1 = state_25116;
var statearr_25119_25259 = state_25116__$1;
(statearr_25119_25259[(2)] = null);

(statearr_25119_25259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25117 === (5))){
var state_25116__$1 = state_25116;
var statearr_25120_25260 = state_25116__$1;
(statearr_25120_25260[(2)] = null);

(statearr_25120_25260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25117 === (4))){
var inst_25106 = (state_25116[(2)]);
var inst_25107 = process.call(null,inst_25106);
var state_25116__$1 = state_25116;
if(cljs.core.truth_(inst_25107)){
var statearr_25121_25261 = state_25116__$1;
(statearr_25121_25261[(1)] = (5));

} else {
var statearr_25122_25262 = state_25116__$1;
(statearr_25122_25262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25117 === (3))){
var inst_25114 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25116__$1,inst_25114);
} else {
if((state_val_25117 === (2))){
var state_25116__$1 = state_25116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25116__$1,(4),jobs);
} else {
if((state_val_25117 === (1))){
var state_25116__$1 = state_25116;
var statearr_25123_25263 = state_25116__$1;
(statearr_25123_25263[(2)] = null);

(statearr_25123_25263[(1)] = (2));


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
});})(__25245,c__19828__auto___25257,G__25076_25246,n__18531__auto___25244,jobs,results,process,async))
;
return ((function (__25245,switch__19772__auto__,c__19828__auto___25257,G__25076_25246,n__18531__auto___25244,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0 = (function (){
var statearr_25127 = [null,null,null,null,null,null,null];
(statearr_25127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__);

(statearr_25127[(1)] = (1));

return statearr_25127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1 = (function (state_25116){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e25128){if((e25128 instanceof Object)){
var ex__19776__auto__ = e25128;
var statearr_25129_25264 = state_25116;
(statearr_25129_25264[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25265 = state_25116;
state_25116 = G__25265;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = function(state_25116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1.call(this,state_25116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__;
})()
;})(__25245,switch__19772__auto__,c__19828__auto___25257,G__25076_25246,n__18531__auto___25244,jobs,results,process,async))
})();
var state__19830__auto__ = (function (){var statearr_25130 = f__19829__auto__.call(null);
(statearr_25130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___25257);

return statearr_25130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(__25245,c__19828__auto___25257,G__25076_25246,n__18531__auto___25244,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25266 = (__25245 + (1));
__25245 = G__25266;
continue;
} else {
}
break;
}

var c__19828__auto___25267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___25267,jobs,results,process,async){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___25267,jobs,results,process,async){
return (function (state_25152){
var state_val_25153 = (state_25152[(1)]);
if((state_val_25153 === (9))){
var inst_25145 = (state_25152[(2)]);
var state_25152__$1 = (function (){var statearr_25154 = state_25152;
(statearr_25154[(7)] = inst_25145);

return statearr_25154;
})();
var statearr_25155_25268 = state_25152__$1;
(statearr_25155_25268[(2)] = null);

(statearr_25155_25268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (8))){
var inst_25138 = (state_25152[(8)]);
var inst_25143 = (state_25152[(2)]);
var state_25152__$1 = (function (){var statearr_25156 = state_25152;
(statearr_25156[(9)] = inst_25143);

return statearr_25156;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25152__$1,(9),results,inst_25138);
} else {
if((state_val_25153 === (7))){
var inst_25148 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25157_25269 = state_25152__$1;
(statearr_25157_25269[(2)] = inst_25148);

(statearr_25157_25269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (6))){
var inst_25133 = (state_25152[(10)]);
var inst_25138 = (state_25152[(8)]);
var inst_25138__$1 = cljs.core.async.chan.call(null,(1));
var inst_25139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25140 = [inst_25133,inst_25138__$1];
var inst_25141 = (new cljs.core.PersistentVector(null,2,(5),inst_25139,inst_25140,null));
var state_25152__$1 = (function (){var statearr_25158 = state_25152;
(statearr_25158[(8)] = inst_25138__$1);

return statearr_25158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25152__$1,(8),jobs,inst_25141);
} else {
if((state_val_25153 === (5))){
var inst_25136 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25152__$1 = state_25152;
var statearr_25159_25270 = state_25152__$1;
(statearr_25159_25270[(2)] = inst_25136);

(statearr_25159_25270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (4))){
var inst_25133 = (state_25152[(10)]);
var inst_25133__$1 = (state_25152[(2)]);
var inst_25134 = (inst_25133__$1 == null);
var state_25152__$1 = (function (){var statearr_25160 = state_25152;
(statearr_25160[(10)] = inst_25133__$1);

return statearr_25160;
})();
if(cljs.core.truth_(inst_25134)){
var statearr_25161_25271 = state_25152__$1;
(statearr_25161_25271[(1)] = (5));

} else {
var statearr_25162_25272 = state_25152__$1;
(statearr_25162_25272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (3))){
var inst_25150 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25152__$1,inst_25150);
} else {
if((state_val_25153 === (2))){
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(4),from);
} else {
if((state_val_25153 === (1))){
var state_25152__$1 = state_25152;
var statearr_25163_25273 = state_25152__$1;
(statearr_25163_25273[(2)] = null);

(statearr_25163_25273[(1)] = (2));


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
});})(c__19828__auto___25267,jobs,results,process,async))
;
return ((function (switch__19772__auto__,c__19828__auto___25267,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0 = (function (){
var statearr_25167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__);

(statearr_25167[(1)] = (1));

return statearr_25167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1 = (function (state_25152){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e25168){if((e25168 instanceof Object)){
var ex__19776__auto__ = e25168;
var statearr_25169_25274 = state_25152;
(statearr_25169_25274[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25275 = state_25152;
state_25152 = G__25275;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = function(state_25152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1.call(this,state_25152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___25267,jobs,results,process,async))
})();
var state__19830__auto__ = (function (){var statearr_25170 = f__19829__auto__.call(null);
(statearr_25170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___25267);

return statearr_25170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___25267,jobs,results,process,async))
);


var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__,jobs,results,process,async){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__,jobs,results,process,async){
return (function (state_25208){
var state_val_25209 = (state_25208[(1)]);
if((state_val_25209 === (7))){
var inst_25204 = (state_25208[(2)]);
var state_25208__$1 = state_25208;
var statearr_25210_25276 = state_25208__$1;
(statearr_25210_25276[(2)] = inst_25204);

(statearr_25210_25276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (20))){
var state_25208__$1 = state_25208;
var statearr_25211_25277 = state_25208__$1;
(statearr_25211_25277[(2)] = null);

(statearr_25211_25277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (1))){
var state_25208__$1 = state_25208;
var statearr_25212_25278 = state_25208__$1;
(statearr_25212_25278[(2)] = null);

(statearr_25212_25278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (4))){
var inst_25173 = (state_25208[(7)]);
var inst_25173__$1 = (state_25208[(2)]);
var inst_25174 = (inst_25173__$1 == null);
var state_25208__$1 = (function (){var statearr_25213 = state_25208;
(statearr_25213[(7)] = inst_25173__$1);

return statearr_25213;
})();
if(cljs.core.truth_(inst_25174)){
var statearr_25214_25279 = state_25208__$1;
(statearr_25214_25279[(1)] = (5));

} else {
var statearr_25215_25280 = state_25208__$1;
(statearr_25215_25280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (15))){
var inst_25186 = (state_25208[(8)]);
var state_25208__$1 = state_25208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25208__$1,(18),to,inst_25186);
} else {
if((state_val_25209 === (21))){
var inst_25199 = (state_25208[(2)]);
var state_25208__$1 = state_25208;
var statearr_25216_25281 = state_25208__$1;
(statearr_25216_25281[(2)] = inst_25199);

(statearr_25216_25281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (13))){
var inst_25201 = (state_25208[(2)]);
var state_25208__$1 = (function (){var statearr_25217 = state_25208;
(statearr_25217[(9)] = inst_25201);

return statearr_25217;
})();
var statearr_25218_25282 = state_25208__$1;
(statearr_25218_25282[(2)] = null);

(statearr_25218_25282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (6))){
var inst_25173 = (state_25208[(7)]);
var state_25208__$1 = state_25208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25208__$1,(11),inst_25173);
} else {
if((state_val_25209 === (17))){
var inst_25194 = (state_25208[(2)]);
var state_25208__$1 = state_25208;
if(cljs.core.truth_(inst_25194)){
var statearr_25219_25283 = state_25208__$1;
(statearr_25219_25283[(1)] = (19));

} else {
var statearr_25220_25284 = state_25208__$1;
(statearr_25220_25284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (3))){
var inst_25206 = (state_25208[(2)]);
var state_25208__$1 = state_25208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25208__$1,inst_25206);
} else {
if((state_val_25209 === (12))){
var inst_25183 = (state_25208[(10)]);
var state_25208__$1 = state_25208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25208__$1,(14),inst_25183);
} else {
if((state_val_25209 === (2))){
var state_25208__$1 = state_25208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25208__$1,(4),results);
} else {
if((state_val_25209 === (19))){
var state_25208__$1 = state_25208;
var statearr_25221_25285 = state_25208__$1;
(statearr_25221_25285[(2)] = null);

(statearr_25221_25285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (11))){
var inst_25183 = (state_25208[(2)]);
var state_25208__$1 = (function (){var statearr_25222 = state_25208;
(statearr_25222[(10)] = inst_25183);

return statearr_25222;
})();
var statearr_25223_25286 = state_25208__$1;
(statearr_25223_25286[(2)] = null);

(statearr_25223_25286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (9))){
var state_25208__$1 = state_25208;
var statearr_25224_25287 = state_25208__$1;
(statearr_25224_25287[(2)] = null);

(statearr_25224_25287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (5))){
var state_25208__$1 = state_25208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25225_25288 = state_25208__$1;
(statearr_25225_25288[(1)] = (8));

} else {
var statearr_25226_25289 = state_25208__$1;
(statearr_25226_25289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (14))){
var inst_25186 = (state_25208[(8)]);
var inst_25188 = (state_25208[(11)]);
var inst_25186__$1 = (state_25208[(2)]);
var inst_25187 = (inst_25186__$1 == null);
var inst_25188__$1 = cljs.core.not.call(null,inst_25187);
var state_25208__$1 = (function (){var statearr_25227 = state_25208;
(statearr_25227[(8)] = inst_25186__$1);

(statearr_25227[(11)] = inst_25188__$1);

return statearr_25227;
})();
if(inst_25188__$1){
var statearr_25228_25290 = state_25208__$1;
(statearr_25228_25290[(1)] = (15));

} else {
var statearr_25229_25291 = state_25208__$1;
(statearr_25229_25291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (16))){
var inst_25188 = (state_25208[(11)]);
var state_25208__$1 = state_25208;
var statearr_25230_25292 = state_25208__$1;
(statearr_25230_25292[(2)] = inst_25188);

(statearr_25230_25292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (10))){
var inst_25180 = (state_25208[(2)]);
var state_25208__$1 = state_25208;
var statearr_25231_25293 = state_25208__$1;
(statearr_25231_25293[(2)] = inst_25180);

(statearr_25231_25293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (18))){
var inst_25191 = (state_25208[(2)]);
var state_25208__$1 = state_25208;
var statearr_25232_25294 = state_25208__$1;
(statearr_25232_25294[(2)] = inst_25191);

(statearr_25232_25294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (8))){
var inst_25177 = cljs.core.async.close_BANG_.call(null,to);
var state_25208__$1 = state_25208;
var statearr_25233_25295 = state_25208__$1;
(statearr_25233_25295[(2)] = inst_25177);

(statearr_25233_25295[(1)] = (10));


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
});})(c__19828__auto__,jobs,results,process,async))
;
return ((function (switch__19772__auto__,c__19828__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0 = (function (){
var statearr_25237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__);

(statearr_25237[(1)] = (1));

return statearr_25237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1 = (function (state_25208){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e25238){if((e25238 instanceof Object)){
var ex__19776__auto__ = e25238;
var statearr_25239_25296 = state_25208;
(statearr_25239_25296[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25297 = state_25208;
state_25208 = G__25297;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__ = function(state_25208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1.call(this,state_25208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__,jobs,results,process,async))
})();
var state__19830__auto__ = (function (){var statearr_25240 = f__19829__auto__.call(null);
(statearr_25240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_25240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__,jobs,results,process,async))
);

return c__19828__auto__;
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
var c__19828__auto___25398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___25398,tc,fc){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___25398,tc,fc){
return (function (state_25373){
var state_val_25374 = (state_25373[(1)]);
if((state_val_25374 === (7))){
var inst_25369 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25375_25399 = state_25373__$1;
(statearr_25375_25399[(2)] = inst_25369);

(statearr_25375_25399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (1))){
var state_25373__$1 = state_25373;
var statearr_25376_25400 = state_25373__$1;
(statearr_25376_25400[(2)] = null);

(statearr_25376_25400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (4))){
var inst_25350 = (state_25373[(7)]);
var inst_25350__$1 = (state_25373[(2)]);
var inst_25351 = (inst_25350__$1 == null);
var state_25373__$1 = (function (){var statearr_25377 = state_25373;
(statearr_25377[(7)] = inst_25350__$1);

return statearr_25377;
})();
if(cljs.core.truth_(inst_25351)){
var statearr_25378_25401 = state_25373__$1;
(statearr_25378_25401[(1)] = (5));

} else {
var statearr_25379_25402 = state_25373__$1;
(statearr_25379_25402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (13))){
var state_25373__$1 = state_25373;
var statearr_25380_25403 = state_25373__$1;
(statearr_25380_25403[(2)] = null);

(statearr_25380_25403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (6))){
var inst_25350 = (state_25373[(7)]);
var inst_25356 = p.call(null,inst_25350);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25356)){
var statearr_25381_25404 = state_25373__$1;
(statearr_25381_25404[(1)] = (9));

} else {
var statearr_25382_25405 = state_25373__$1;
(statearr_25382_25405[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (3))){
var inst_25371 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25373__$1,inst_25371);
} else {
if((state_val_25374 === (12))){
var state_25373__$1 = state_25373;
var statearr_25383_25406 = state_25373__$1;
(statearr_25383_25406[(2)] = null);

(statearr_25383_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (2))){
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25373__$1,(4),ch);
} else {
if((state_val_25374 === (11))){
var inst_25350 = (state_25373[(7)]);
var inst_25360 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25373__$1,(8),inst_25360,inst_25350);
} else {
if((state_val_25374 === (9))){
var state_25373__$1 = state_25373;
var statearr_25384_25407 = state_25373__$1;
(statearr_25384_25407[(2)] = tc);

(statearr_25384_25407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (5))){
var inst_25353 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25354 = cljs.core.async.close_BANG_.call(null,fc);
var state_25373__$1 = (function (){var statearr_25385 = state_25373;
(statearr_25385[(8)] = inst_25353);

return statearr_25385;
})();
var statearr_25386_25408 = state_25373__$1;
(statearr_25386_25408[(2)] = inst_25354);

(statearr_25386_25408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (14))){
var inst_25367 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25387_25409 = state_25373__$1;
(statearr_25387_25409[(2)] = inst_25367);

(statearr_25387_25409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (10))){
var state_25373__$1 = state_25373;
var statearr_25388_25410 = state_25373__$1;
(statearr_25388_25410[(2)] = fc);

(statearr_25388_25410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (8))){
var inst_25362 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25362)){
var statearr_25389_25411 = state_25373__$1;
(statearr_25389_25411[(1)] = (12));

} else {
var statearr_25390_25412 = state_25373__$1;
(statearr_25390_25412[(1)] = (13));

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
});})(c__19828__auto___25398,tc,fc))
;
return ((function (switch__19772__auto__,c__19828__auto___25398,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__19773__auto__ = null;
var cljs$core$async$split_$_state_machine__19773__auto____0 = (function (){
var statearr_25394 = [null,null,null,null,null,null,null,null,null];
(statearr_25394[(0)] = cljs$core$async$split_$_state_machine__19773__auto__);

(statearr_25394[(1)] = (1));

return statearr_25394;
});
var cljs$core$async$split_$_state_machine__19773__auto____1 = (function (state_25373){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e25395){if((e25395 instanceof Object)){
var ex__19776__auto__ = e25395;
var statearr_25396_25413 = state_25373;
(statearr_25396_25413[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25414 = state_25373;
state_25373 = G__25414;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__19773__auto__ = function(state_25373){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__19773__auto____1.call(this,state_25373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__19773__auto____0;
cljs$core$async$split_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__19773__auto____1;
return cljs$core$async$split_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___25398,tc,fc))
})();
var state__19830__auto__ = (function (){var statearr_25397 = f__19829__auto__.call(null);
(statearr_25397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___25398);

return statearr_25397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___25398,tc,fc))
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
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__){
return (function (state_25461){
var state_val_25462 = (state_25461[(1)]);
if((state_val_25462 === (7))){
var inst_25457 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25463_25479 = state_25461__$1;
(statearr_25463_25479[(2)] = inst_25457);

(statearr_25463_25479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (6))){
var inst_25450 = (state_25461[(7)]);
var inst_25447 = (state_25461[(8)]);
var inst_25454 = f.call(null,inst_25447,inst_25450);
var inst_25447__$1 = inst_25454;
var state_25461__$1 = (function (){var statearr_25464 = state_25461;
(statearr_25464[(8)] = inst_25447__$1);

return statearr_25464;
})();
var statearr_25465_25480 = state_25461__$1;
(statearr_25465_25480[(2)] = null);

(statearr_25465_25480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (5))){
var inst_25447 = (state_25461[(8)]);
var state_25461__$1 = state_25461;
var statearr_25466_25481 = state_25461__$1;
(statearr_25466_25481[(2)] = inst_25447);

(statearr_25466_25481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (4))){
var inst_25450 = (state_25461[(7)]);
var inst_25450__$1 = (state_25461[(2)]);
var inst_25451 = (inst_25450__$1 == null);
var state_25461__$1 = (function (){var statearr_25467 = state_25461;
(statearr_25467[(7)] = inst_25450__$1);

return statearr_25467;
})();
if(cljs.core.truth_(inst_25451)){
var statearr_25468_25482 = state_25461__$1;
(statearr_25468_25482[(1)] = (5));

} else {
var statearr_25469_25483 = state_25461__$1;
(statearr_25469_25483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (3))){
var inst_25459 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25461__$1,inst_25459);
} else {
if((state_val_25462 === (2))){
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25461__$1,(4),ch);
} else {
if((state_val_25462 === (1))){
var inst_25447 = init;
var state_25461__$1 = (function (){var statearr_25470 = state_25461;
(statearr_25470[(8)] = inst_25447);

return statearr_25470;
})();
var statearr_25471_25484 = state_25461__$1;
(statearr_25471_25484[(2)] = null);

(statearr_25471_25484[(1)] = (2));


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
});})(c__19828__auto__))
;
return ((function (switch__19772__auto__,c__19828__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19773__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19773__auto____0 = (function (){
var statearr_25475 = [null,null,null,null,null,null,null,null,null];
(statearr_25475[(0)] = cljs$core$async$reduce_$_state_machine__19773__auto__);

(statearr_25475[(1)] = (1));

return statearr_25475;
});
var cljs$core$async$reduce_$_state_machine__19773__auto____1 = (function (state_25461){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e25476){if((e25476 instanceof Object)){
var ex__19776__auto__ = e25476;
var statearr_25477_25485 = state_25461;
(statearr_25477_25485[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25486 = state_25461;
state_25461 = G__25486;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19773__auto__ = function(state_25461){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19773__auto____1.call(this,state_25461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19773__auto____0;
cljs$core$async$reduce_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19773__auto____1;
return cljs$core$async$reduce_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__))
})();
var state__19830__auto__ = (function (){var statearr_25478 = f__19829__auto__.call(null);
(statearr_25478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_25478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__))
);

return c__19828__auto__;
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
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__){
return (function (state_25560){
var state_val_25561 = (state_25560[(1)]);
if((state_val_25561 === (7))){
var inst_25542 = (state_25560[(2)]);
var state_25560__$1 = state_25560;
var statearr_25562_25585 = state_25560__$1;
(statearr_25562_25585[(2)] = inst_25542);

(statearr_25562_25585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (1))){
var inst_25536 = cljs.core.seq.call(null,coll);
var inst_25537 = inst_25536;
var state_25560__$1 = (function (){var statearr_25563 = state_25560;
(statearr_25563[(7)] = inst_25537);

return statearr_25563;
})();
var statearr_25564_25586 = state_25560__$1;
(statearr_25564_25586[(2)] = null);

(statearr_25564_25586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (4))){
var inst_25537 = (state_25560[(7)]);
var inst_25540 = cljs.core.first.call(null,inst_25537);
var state_25560__$1 = state_25560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25560__$1,(7),ch,inst_25540);
} else {
if((state_val_25561 === (13))){
var inst_25554 = (state_25560[(2)]);
var state_25560__$1 = state_25560;
var statearr_25565_25587 = state_25560__$1;
(statearr_25565_25587[(2)] = inst_25554);

(statearr_25565_25587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (6))){
var inst_25545 = (state_25560[(2)]);
var state_25560__$1 = state_25560;
if(cljs.core.truth_(inst_25545)){
var statearr_25566_25588 = state_25560__$1;
(statearr_25566_25588[(1)] = (8));

} else {
var statearr_25567_25589 = state_25560__$1;
(statearr_25567_25589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (3))){
var inst_25558 = (state_25560[(2)]);
var state_25560__$1 = state_25560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25560__$1,inst_25558);
} else {
if((state_val_25561 === (12))){
var state_25560__$1 = state_25560;
var statearr_25568_25590 = state_25560__$1;
(statearr_25568_25590[(2)] = null);

(statearr_25568_25590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (2))){
var inst_25537 = (state_25560[(7)]);
var state_25560__$1 = state_25560;
if(cljs.core.truth_(inst_25537)){
var statearr_25569_25591 = state_25560__$1;
(statearr_25569_25591[(1)] = (4));

} else {
var statearr_25570_25592 = state_25560__$1;
(statearr_25570_25592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (11))){
var inst_25551 = cljs.core.async.close_BANG_.call(null,ch);
var state_25560__$1 = state_25560;
var statearr_25571_25593 = state_25560__$1;
(statearr_25571_25593[(2)] = inst_25551);

(statearr_25571_25593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (9))){
var state_25560__$1 = state_25560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25572_25594 = state_25560__$1;
(statearr_25572_25594[(1)] = (11));

} else {
var statearr_25573_25595 = state_25560__$1;
(statearr_25573_25595[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (5))){
var inst_25537 = (state_25560[(7)]);
var state_25560__$1 = state_25560;
var statearr_25574_25596 = state_25560__$1;
(statearr_25574_25596[(2)] = inst_25537);

(statearr_25574_25596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (10))){
var inst_25556 = (state_25560[(2)]);
var state_25560__$1 = state_25560;
var statearr_25575_25597 = state_25560__$1;
(statearr_25575_25597[(2)] = inst_25556);

(statearr_25575_25597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25561 === (8))){
var inst_25537 = (state_25560[(7)]);
var inst_25547 = cljs.core.next.call(null,inst_25537);
var inst_25537__$1 = inst_25547;
var state_25560__$1 = (function (){var statearr_25576 = state_25560;
(statearr_25576[(7)] = inst_25537__$1);

return statearr_25576;
})();
var statearr_25577_25598 = state_25560__$1;
(statearr_25577_25598[(2)] = null);

(statearr_25577_25598[(1)] = (2));


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
});})(c__19828__auto__))
;
return ((function (switch__19772__auto__,c__19828__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__19773__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__19773__auto____0 = (function (){
var statearr_25581 = [null,null,null,null,null,null,null,null];
(statearr_25581[(0)] = cljs$core$async$onto_chan_$_state_machine__19773__auto__);

(statearr_25581[(1)] = (1));

return statearr_25581;
});
var cljs$core$async$onto_chan_$_state_machine__19773__auto____1 = (function (state_25560){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e25582){if((e25582 instanceof Object)){
var ex__19776__auto__ = e25582;
var statearr_25583_25599 = state_25560;
(statearr_25583_25599[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25600 = state_25560;
state_25560 = G__25600;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__19773__auto__ = function(state_25560){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__19773__auto____1.call(this,state_25560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__19773__auto____0;
cljs$core$async$onto_chan_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__19773__auto____1;
return cljs$core$async$onto_chan_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__))
})();
var state__19830__auto__ = (function (){var statearr_25584 = f__19829__auto__.call(null);
(statearr_25584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_25584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__))
);

return c__19828__auto__;
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

cljs.core.async.Mux = (function (){var obj25602 = {};
return obj25602;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17634__auto__ = _;
if(and__17634__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17634__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18282__auto__ = (((_ == null))?null:_);
return (function (){var or__17646__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25604 = {};
return obj25604;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17634__auto__ = m;
if(and__17634__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17634__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18282__auto__ = (((m == null))?null:m);
return (function (){var or__17646__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17634__auto__ = m;
if(and__17634__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17634__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18282__auto__ = (((m == null))?null:m);
return (function (){var or__17646__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17634__auto__ = m;
if(and__17634__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17634__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18282__auto__ = (((m == null))?null:m);
return (function (){var or__17646__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
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
if(typeof cljs.core.async.t25826 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25826 = (function (cs,ch,mult,meta25827){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25827 = meta25827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25826.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25826.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25826.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25826.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25826.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25828){
var self__ = this;
var _25828__$1 = this;
return self__.meta25827;
});})(cs))
;

cljs.core.async.t25826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25828,meta25827__$1){
var self__ = this;
var _25828__$1 = this;
return (new cljs.core.async.t25826(self__.cs,self__.ch,self__.mult,meta25827__$1));
});})(cs))
;

cljs.core.async.t25826.cljs$lang$type = true;

cljs.core.async.t25826.cljs$lang$ctorStr = "cljs.core.async/t25826";

cljs.core.async.t25826.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t25826");
});})(cs))
;

cljs.core.async.__GT_t25826 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25826(cs__$1,ch__$1,mult__$1,meta25827){
return (new cljs.core.async.t25826(cs__$1,ch__$1,mult__$1,meta25827));
});})(cs))
;

}

return (new cljs.core.async.t25826(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19828__auto___26047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___26047,cs,m,dchan,dctr,done){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___26047,cs,m,dchan,dctr,done){
return (function (state_25959){
var state_val_25960 = (state_25959[(1)]);
if((state_val_25960 === (7))){
var inst_25955 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_25961_26048 = state_25959__$1;
(statearr_25961_26048[(2)] = inst_25955);

(statearr_25961_26048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (20))){
var inst_25860 = (state_25959[(7)]);
var inst_25870 = cljs.core.first.call(null,inst_25860);
var inst_25871 = cljs.core.nth.call(null,inst_25870,(0),null);
var inst_25872 = cljs.core.nth.call(null,inst_25870,(1),null);
var state_25959__$1 = (function (){var statearr_25962 = state_25959;
(statearr_25962[(8)] = inst_25871);

return statearr_25962;
})();
if(cljs.core.truth_(inst_25872)){
var statearr_25963_26049 = state_25959__$1;
(statearr_25963_26049[(1)] = (22));

} else {
var statearr_25964_26050 = state_25959__$1;
(statearr_25964_26050[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (27))){
var inst_25902 = (state_25959[(9)]);
var inst_25907 = (state_25959[(10)]);
var inst_25831 = (state_25959[(11)]);
var inst_25900 = (state_25959[(12)]);
var inst_25907__$1 = cljs.core._nth.call(null,inst_25900,inst_25902);
var inst_25908 = cljs.core.async.put_BANG_.call(null,inst_25907__$1,inst_25831,done);
var state_25959__$1 = (function (){var statearr_25965 = state_25959;
(statearr_25965[(10)] = inst_25907__$1);

return statearr_25965;
})();
if(cljs.core.truth_(inst_25908)){
var statearr_25966_26051 = state_25959__$1;
(statearr_25966_26051[(1)] = (30));

} else {
var statearr_25967_26052 = state_25959__$1;
(statearr_25967_26052[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (1))){
var state_25959__$1 = state_25959;
var statearr_25968_26053 = state_25959__$1;
(statearr_25968_26053[(2)] = null);

(statearr_25968_26053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (24))){
var inst_25860 = (state_25959[(7)]);
var inst_25877 = (state_25959[(2)]);
var inst_25878 = cljs.core.next.call(null,inst_25860);
var inst_25840 = inst_25878;
var inst_25841 = null;
var inst_25842 = (0);
var inst_25843 = (0);
var state_25959__$1 = (function (){var statearr_25969 = state_25959;
(statearr_25969[(13)] = inst_25843);

(statearr_25969[(14)] = inst_25842);

(statearr_25969[(15)] = inst_25840);

(statearr_25969[(16)] = inst_25841);

(statearr_25969[(17)] = inst_25877);

return statearr_25969;
})();
var statearr_25970_26054 = state_25959__$1;
(statearr_25970_26054[(2)] = null);

(statearr_25970_26054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (39))){
var state_25959__$1 = state_25959;
var statearr_25974_26055 = state_25959__$1;
(statearr_25974_26055[(2)] = null);

(statearr_25974_26055[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (4))){
var inst_25831 = (state_25959[(11)]);
var inst_25831__$1 = (state_25959[(2)]);
var inst_25832 = (inst_25831__$1 == null);
var state_25959__$1 = (function (){var statearr_25975 = state_25959;
(statearr_25975[(11)] = inst_25831__$1);

return statearr_25975;
})();
if(cljs.core.truth_(inst_25832)){
var statearr_25976_26056 = state_25959__$1;
(statearr_25976_26056[(1)] = (5));

} else {
var statearr_25977_26057 = state_25959__$1;
(statearr_25977_26057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (15))){
var inst_25843 = (state_25959[(13)]);
var inst_25842 = (state_25959[(14)]);
var inst_25840 = (state_25959[(15)]);
var inst_25841 = (state_25959[(16)]);
var inst_25856 = (state_25959[(2)]);
var inst_25857 = (inst_25843 + (1));
var tmp25971 = inst_25842;
var tmp25972 = inst_25840;
var tmp25973 = inst_25841;
var inst_25840__$1 = tmp25972;
var inst_25841__$1 = tmp25973;
var inst_25842__$1 = tmp25971;
var inst_25843__$1 = inst_25857;
var state_25959__$1 = (function (){var statearr_25978 = state_25959;
(statearr_25978[(13)] = inst_25843__$1);

(statearr_25978[(14)] = inst_25842__$1);

(statearr_25978[(15)] = inst_25840__$1);

(statearr_25978[(16)] = inst_25841__$1);

(statearr_25978[(18)] = inst_25856);

return statearr_25978;
})();
var statearr_25979_26058 = state_25959__$1;
(statearr_25979_26058[(2)] = null);

(statearr_25979_26058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (21))){
var inst_25881 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_25983_26059 = state_25959__$1;
(statearr_25983_26059[(2)] = inst_25881);

(statearr_25983_26059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (31))){
var inst_25907 = (state_25959[(10)]);
var inst_25911 = done.call(null,null);
var inst_25912 = cljs.core.async.untap_STAR_.call(null,m,inst_25907);
var state_25959__$1 = (function (){var statearr_25984 = state_25959;
(statearr_25984[(19)] = inst_25911);

return statearr_25984;
})();
var statearr_25985_26060 = state_25959__$1;
(statearr_25985_26060[(2)] = inst_25912);

(statearr_25985_26060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (32))){
var inst_25902 = (state_25959[(9)]);
var inst_25899 = (state_25959[(20)]);
var inst_25901 = (state_25959[(21)]);
var inst_25900 = (state_25959[(12)]);
var inst_25914 = (state_25959[(2)]);
var inst_25915 = (inst_25902 + (1));
var tmp25980 = inst_25899;
var tmp25981 = inst_25901;
var tmp25982 = inst_25900;
var inst_25899__$1 = tmp25980;
var inst_25900__$1 = tmp25982;
var inst_25901__$1 = tmp25981;
var inst_25902__$1 = inst_25915;
var state_25959__$1 = (function (){var statearr_25986 = state_25959;
(statearr_25986[(9)] = inst_25902__$1);

(statearr_25986[(20)] = inst_25899__$1);

(statearr_25986[(21)] = inst_25901__$1);

(statearr_25986[(22)] = inst_25914);

(statearr_25986[(12)] = inst_25900__$1);

return statearr_25986;
})();
var statearr_25987_26061 = state_25959__$1;
(statearr_25987_26061[(2)] = null);

(statearr_25987_26061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (40))){
var inst_25927 = (state_25959[(23)]);
var inst_25931 = done.call(null,null);
var inst_25932 = cljs.core.async.untap_STAR_.call(null,m,inst_25927);
var state_25959__$1 = (function (){var statearr_25988 = state_25959;
(statearr_25988[(24)] = inst_25931);

return statearr_25988;
})();
var statearr_25989_26062 = state_25959__$1;
(statearr_25989_26062[(2)] = inst_25932);

(statearr_25989_26062[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (33))){
var inst_25918 = (state_25959[(25)]);
var inst_25920 = cljs.core.chunked_seq_QMARK_.call(null,inst_25918);
var state_25959__$1 = state_25959;
if(inst_25920){
var statearr_25990_26063 = state_25959__$1;
(statearr_25990_26063[(1)] = (36));

} else {
var statearr_25991_26064 = state_25959__$1;
(statearr_25991_26064[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (13))){
var inst_25850 = (state_25959[(26)]);
var inst_25853 = cljs.core.async.close_BANG_.call(null,inst_25850);
var state_25959__$1 = state_25959;
var statearr_25992_26065 = state_25959__$1;
(statearr_25992_26065[(2)] = inst_25853);

(statearr_25992_26065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (22))){
var inst_25871 = (state_25959[(8)]);
var inst_25874 = cljs.core.async.close_BANG_.call(null,inst_25871);
var state_25959__$1 = state_25959;
var statearr_25993_26066 = state_25959__$1;
(statearr_25993_26066[(2)] = inst_25874);

(statearr_25993_26066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (36))){
var inst_25918 = (state_25959[(25)]);
var inst_25922 = cljs.core.chunk_first.call(null,inst_25918);
var inst_25923 = cljs.core.chunk_rest.call(null,inst_25918);
var inst_25924 = cljs.core.count.call(null,inst_25922);
var inst_25899 = inst_25923;
var inst_25900 = inst_25922;
var inst_25901 = inst_25924;
var inst_25902 = (0);
var state_25959__$1 = (function (){var statearr_25994 = state_25959;
(statearr_25994[(9)] = inst_25902);

(statearr_25994[(20)] = inst_25899);

(statearr_25994[(21)] = inst_25901);

(statearr_25994[(12)] = inst_25900);

return statearr_25994;
})();
var statearr_25995_26067 = state_25959__$1;
(statearr_25995_26067[(2)] = null);

(statearr_25995_26067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (41))){
var inst_25918 = (state_25959[(25)]);
var inst_25934 = (state_25959[(2)]);
var inst_25935 = cljs.core.next.call(null,inst_25918);
var inst_25899 = inst_25935;
var inst_25900 = null;
var inst_25901 = (0);
var inst_25902 = (0);
var state_25959__$1 = (function (){var statearr_25996 = state_25959;
(statearr_25996[(9)] = inst_25902);

(statearr_25996[(20)] = inst_25899);

(statearr_25996[(27)] = inst_25934);

(statearr_25996[(21)] = inst_25901);

(statearr_25996[(12)] = inst_25900);

return statearr_25996;
})();
var statearr_25997_26068 = state_25959__$1;
(statearr_25997_26068[(2)] = null);

(statearr_25997_26068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (43))){
var state_25959__$1 = state_25959;
var statearr_25998_26069 = state_25959__$1;
(statearr_25998_26069[(2)] = null);

(statearr_25998_26069[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (29))){
var inst_25943 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_25999_26070 = state_25959__$1;
(statearr_25999_26070[(2)] = inst_25943);

(statearr_25999_26070[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (44))){
var inst_25952 = (state_25959[(2)]);
var state_25959__$1 = (function (){var statearr_26000 = state_25959;
(statearr_26000[(28)] = inst_25952);

return statearr_26000;
})();
var statearr_26001_26071 = state_25959__$1;
(statearr_26001_26071[(2)] = null);

(statearr_26001_26071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (6))){
var inst_25891 = (state_25959[(29)]);
var inst_25890 = cljs.core.deref.call(null,cs);
var inst_25891__$1 = cljs.core.keys.call(null,inst_25890);
var inst_25892 = cljs.core.count.call(null,inst_25891__$1);
var inst_25893 = cljs.core.reset_BANG_.call(null,dctr,inst_25892);
var inst_25898 = cljs.core.seq.call(null,inst_25891__$1);
var inst_25899 = inst_25898;
var inst_25900 = null;
var inst_25901 = (0);
var inst_25902 = (0);
var state_25959__$1 = (function (){var statearr_26002 = state_25959;
(statearr_26002[(9)] = inst_25902);

(statearr_26002[(20)] = inst_25899);

(statearr_26002[(21)] = inst_25901);

(statearr_26002[(30)] = inst_25893);

(statearr_26002[(29)] = inst_25891__$1);

(statearr_26002[(12)] = inst_25900);

return statearr_26002;
})();
var statearr_26003_26072 = state_25959__$1;
(statearr_26003_26072[(2)] = null);

(statearr_26003_26072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (28))){
var inst_25899 = (state_25959[(20)]);
var inst_25918 = (state_25959[(25)]);
var inst_25918__$1 = cljs.core.seq.call(null,inst_25899);
var state_25959__$1 = (function (){var statearr_26004 = state_25959;
(statearr_26004[(25)] = inst_25918__$1);

return statearr_26004;
})();
if(inst_25918__$1){
var statearr_26005_26073 = state_25959__$1;
(statearr_26005_26073[(1)] = (33));

} else {
var statearr_26006_26074 = state_25959__$1;
(statearr_26006_26074[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (25))){
var inst_25902 = (state_25959[(9)]);
var inst_25901 = (state_25959[(21)]);
var inst_25904 = (inst_25902 < inst_25901);
var inst_25905 = inst_25904;
var state_25959__$1 = state_25959;
if(cljs.core.truth_(inst_25905)){
var statearr_26007_26075 = state_25959__$1;
(statearr_26007_26075[(1)] = (27));

} else {
var statearr_26008_26076 = state_25959__$1;
(statearr_26008_26076[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (34))){
var state_25959__$1 = state_25959;
var statearr_26009_26077 = state_25959__$1;
(statearr_26009_26077[(2)] = null);

(statearr_26009_26077[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (17))){
var state_25959__$1 = state_25959;
var statearr_26010_26078 = state_25959__$1;
(statearr_26010_26078[(2)] = null);

(statearr_26010_26078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (3))){
var inst_25957 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25959__$1,inst_25957);
} else {
if((state_val_25960 === (12))){
var inst_25886 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_26011_26079 = state_25959__$1;
(statearr_26011_26079[(2)] = inst_25886);

(statearr_26011_26079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (2))){
var state_25959__$1 = state_25959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25959__$1,(4),ch);
} else {
if((state_val_25960 === (23))){
var state_25959__$1 = state_25959;
var statearr_26012_26080 = state_25959__$1;
(statearr_26012_26080[(2)] = null);

(statearr_26012_26080[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (35))){
var inst_25941 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_26013_26081 = state_25959__$1;
(statearr_26013_26081[(2)] = inst_25941);

(statearr_26013_26081[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (19))){
var inst_25860 = (state_25959[(7)]);
var inst_25864 = cljs.core.chunk_first.call(null,inst_25860);
var inst_25865 = cljs.core.chunk_rest.call(null,inst_25860);
var inst_25866 = cljs.core.count.call(null,inst_25864);
var inst_25840 = inst_25865;
var inst_25841 = inst_25864;
var inst_25842 = inst_25866;
var inst_25843 = (0);
var state_25959__$1 = (function (){var statearr_26014 = state_25959;
(statearr_26014[(13)] = inst_25843);

(statearr_26014[(14)] = inst_25842);

(statearr_26014[(15)] = inst_25840);

(statearr_26014[(16)] = inst_25841);

return statearr_26014;
})();
var statearr_26015_26082 = state_25959__$1;
(statearr_26015_26082[(2)] = null);

(statearr_26015_26082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (11))){
var inst_25840 = (state_25959[(15)]);
var inst_25860 = (state_25959[(7)]);
var inst_25860__$1 = cljs.core.seq.call(null,inst_25840);
var state_25959__$1 = (function (){var statearr_26016 = state_25959;
(statearr_26016[(7)] = inst_25860__$1);

return statearr_26016;
})();
if(inst_25860__$1){
var statearr_26017_26083 = state_25959__$1;
(statearr_26017_26083[(1)] = (16));

} else {
var statearr_26018_26084 = state_25959__$1;
(statearr_26018_26084[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (9))){
var inst_25888 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_26019_26085 = state_25959__$1;
(statearr_26019_26085[(2)] = inst_25888);

(statearr_26019_26085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (5))){
var inst_25838 = cljs.core.deref.call(null,cs);
var inst_25839 = cljs.core.seq.call(null,inst_25838);
var inst_25840 = inst_25839;
var inst_25841 = null;
var inst_25842 = (0);
var inst_25843 = (0);
var state_25959__$1 = (function (){var statearr_26020 = state_25959;
(statearr_26020[(13)] = inst_25843);

(statearr_26020[(14)] = inst_25842);

(statearr_26020[(15)] = inst_25840);

(statearr_26020[(16)] = inst_25841);

return statearr_26020;
})();
var statearr_26021_26086 = state_25959__$1;
(statearr_26021_26086[(2)] = null);

(statearr_26021_26086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (14))){
var state_25959__$1 = state_25959;
var statearr_26022_26087 = state_25959__$1;
(statearr_26022_26087[(2)] = null);

(statearr_26022_26087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (45))){
var inst_25949 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_26023_26088 = state_25959__$1;
(statearr_26023_26088[(2)] = inst_25949);

(statearr_26023_26088[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (26))){
var inst_25891 = (state_25959[(29)]);
var inst_25945 = (state_25959[(2)]);
var inst_25946 = cljs.core.seq.call(null,inst_25891);
var state_25959__$1 = (function (){var statearr_26024 = state_25959;
(statearr_26024[(31)] = inst_25945);

return statearr_26024;
})();
if(inst_25946){
var statearr_26025_26089 = state_25959__$1;
(statearr_26025_26089[(1)] = (42));

} else {
var statearr_26026_26090 = state_25959__$1;
(statearr_26026_26090[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (16))){
var inst_25860 = (state_25959[(7)]);
var inst_25862 = cljs.core.chunked_seq_QMARK_.call(null,inst_25860);
var state_25959__$1 = state_25959;
if(inst_25862){
var statearr_26027_26091 = state_25959__$1;
(statearr_26027_26091[(1)] = (19));

} else {
var statearr_26028_26092 = state_25959__$1;
(statearr_26028_26092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (38))){
var inst_25938 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_26029_26093 = state_25959__$1;
(statearr_26029_26093[(2)] = inst_25938);

(statearr_26029_26093[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (30))){
var state_25959__$1 = state_25959;
var statearr_26030_26094 = state_25959__$1;
(statearr_26030_26094[(2)] = null);

(statearr_26030_26094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (10))){
var inst_25843 = (state_25959[(13)]);
var inst_25841 = (state_25959[(16)]);
var inst_25849 = cljs.core._nth.call(null,inst_25841,inst_25843);
var inst_25850 = cljs.core.nth.call(null,inst_25849,(0),null);
var inst_25851 = cljs.core.nth.call(null,inst_25849,(1),null);
var state_25959__$1 = (function (){var statearr_26031 = state_25959;
(statearr_26031[(26)] = inst_25850);

return statearr_26031;
})();
if(cljs.core.truth_(inst_25851)){
var statearr_26032_26095 = state_25959__$1;
(statearr_26032_26095[(1)] = (13));

} else {
var statearr_26033_26096 = state_25959__$1;
(statearr_26033_26096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (18))){
var inst_25884 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
var statearr_26034_26097 = state_25959__$1;
(statearr_26034_26097[(2)] = inst_25884);

(statearr_26034_26097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (42))){
var state_25959__$1 = state_25959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25959__$1,(45),dchan);
} else {
if((state_val_25960 === (37))){
var inst_25927 = (state_25959[(23)]);
var inst_25918 = (state_25959[(25)]);
var inst_25831 = (state_25959[(11)]);
var inst_25927__$1 = cljs.core.first.call(null,inst_25918);
var inst_25928 = cljs.core.async.put_BANG_.call(null,inst_25927__$1,inst_25831,done);
var state_25959__$1 = (function (){var statearr_26035 = state_25959;
(statearr_26035[(23)] = inst_25927__$1);

return statearr_26035;
})();
if(cljs.core.truth_(inst_25928)){
var statearr_26036_26098 = state_25959__$1;
(statearr_26036_26098[(1)] = (39));

} else {
var statearr_26037_26099 = state_25959__$1;
(statearr_26037_26099[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (8))){
var inst_25843 = (state_25959[(13)]);
var inst_25842 = (state_25959[(14)]);
var inst_25845 = (inst_25843 < inst_25842);
var inst_25846 = inst_25845;
var state_25959__$1 = state_25959;
if(cljs.core.truth_(inst_25846)){
var statearr_26038_26100 = state_25959__$1;
(statearr_26038_26100[(1)] = (10));

} else {
var statearr_26039_26101 = state_25959__$1;
(statearr_26039_26101[(1)] = (11));

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
});})(c__19828__auto___26047,cs,m,dchan,dctr,done))
;
return ((function (switch__19772__auto__,c__19828__auto___26047,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19773__auto__ = null;
var cljs$core$async$mult_$_state_machine__19773__auto____0 = (function (){
var statearr_26043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26043[(0)] = cljs$core$async$mult_$_state_machine__19773__auto__);

(statearr_26043[(1)] = (1));

return statearr_26043;
});
var cljs$core$async$mult_$_state_machine__19773__auto____1 = (function (state_25959){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_25959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e26044){if((e26044 instanceof Object)){
var ex__19776__auto__ = e26044;
var statearr_26045_26102 = state_25959;
(statearr_26045_26102[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26103 = state_25959;
state_25959 = G__26103;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19773__auto__ = function(state_25959){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19773__auto____1.call(this,state_25959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19773__auto____0;
cljs$core$async$mult_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19773__auto____1;
return cljs$core$async$mult_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___26047,cs,m,dchan,dctr,done))
})();
var state__19830__auto__ = (function (){var statearr_26046 = f__19829__auto__.call(null);
(statearr_26046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___26047);

return statearr_26046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___26047,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26105 = {};
return obj26105;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17634__auto__ = m;
if(and__17634__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17634__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18282__auto__ = (((m == null))?null:m);
return (function (){var or__17646__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17634__auto__ = m;
if(and__17634__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17634__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18282__auto__ = (((m == null))?null:m);
return (function (){var or__17646__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17634__auto__ = m;
if(and__17634__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17634__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18282__auto__ = (((m == null))?null:m);
return (function (){var or__17646__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17634__auto__ = m;
if(and__17634__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17634__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18282__auto__ = (((m == null))?null:m);
return (function (){var or__17646__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17634__auto__ = m;
if(and__17634__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17634__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18282__auto__ = (((m == null))?null:m);
return (function (){var or__17646__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26106){
var map__26111 = p__26106;
var map__26111__$1 = ((cljs.core.seq_QMARK_.call(null,map__26111))?cljs.core.apply.call(null,cljs.core.hash_map,map__26111):map__26111);
var opts = map__26111__$1;
var statearr_26112_26115 = state;
(statearr_26112_26115[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26111,map__26111__$1,opts){
return (function (val){
var statearr_26113_26116 = state;
(statearr_26113_26116[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26111,map__26111__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26114_26117 = state;
(statearr_26114_26117[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26106 = null;
if (arguments.length > 3) {
var G__26118__i = 0, G__26118__a = new Array(arguments.length -  3);
while (G__26118__i < G__26118__a.length) {G__26118__a[G__26118__i] = arguments[G__26118__i + 3]; ++G__26118__i;}
  p__26106 = new cljs.core.IndexedSeq(G__26118__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26106);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26119){
var state = cljs.core.first(arglist__26119);
arglist__26119 = cljs.core.next(arglist__26119);
var cont_block = cljs.core.first(arglist__26119);
arglist__26119 = cljs.core.next(arglist__26119);
var ports = cljs.core.first(arglist__26119);
var p__26106 = cljs.core.rest(arglist__26119);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__26106);
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
if(typeof cljs.core.async.t26239 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26239 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26240){
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
this.meta26240 = meta26240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26239.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26239.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26239.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26239.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26239.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26239.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26239.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26241){
var self__ = this;
var _26241__$1 = this;
return self__.meta26240;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26241,meta26240__$1){
var self__ = this;
var _26241__$1 = this;
return (new cljs.core.async.t26239(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26240__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26239.cljs$lang$type = true;

cljs.core.async.t26239.cljs$lang$ctorStr = "cljs.core.async/t26239";

cljs.core.async.t26239.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t26239");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26239 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26239(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26240){
return (new cljs.core.async.t26239(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26240));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26239(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19828__auto___26358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___26358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___26358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26311){
var state_val_26312 = (state_26311[(1)]);
if((state_val_26312 === (7))){
var inst_26255 = (state_26311[(7)]);
var inst_26260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26255);
var state_26311__$1 = state_26311;
var statearr_26313_26359 = state_26311__$1;
(statearr_26313_26359[(2)] = inst_26260);

(statearr_26313_26359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (20))){
var inst_26270 = (state_26311[(8)]);
var state_26311__$1 = state_26311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26311__$1,(23),out,inst_26270);
} else {
if((state_val_26312 === (1))){
var inst_26245 = (state_26311[(9)]);
var inst_26245__$1 = calc_state.call(null);
var inst_26246 = cljs.core.seq_QMARK_.call(null,inst_26245__$1);
var state_26311__$1 = (function (){var statearr_26314 = state_26311;
(statearr_26314[(9)] = inst_26245__$1);

return statearr_26314;
})();
if(inst_26246){
var statearr_26315_26360 = state_26311__$1;
(statearr_26315_26360[(1)] = (2));

} else {
var statearr_26316_26361 = state_26311__$1;
(statearr_26316_26361[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (24))){
var inst_26263 = (state_26311[(10)]);
var inst_26255 = inst_26263;
var state_26311__$1 = (function (){var statearr_26317 = state_26311;
(statearr_26317[(7)] = inst_26255);

return statearr_26317;
})();
var statearr_26318_26362 = state_26311__$1;
(statearr_26318_26362[(2)] = null);

(statearr_26318_26362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (4))){
var inst_26245 = (state_26311[(9)]);
var inst_26251 = (state_26311[(2)]);
var inst_26252 = cljs.core.get.call(null,inst_26251,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26253 = cljs.core.get.call(null,inst_26251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26254 = cljs.core.get.call(null,inst_26251,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26255 = inst_26245;
var state_26311__$1 = (function (){var statearr_26319 = state_26311;
(statearr_26319[(11)] = inst_26252);

(statearr_26319[(7)] = inst_26255);

(statearr_26319[(12)] = inst_26254);

(statearr_26319[(13)] = inst_26253);

return statearr_26319;
})();
var statearr_26320_26363 = state_26311__$1;
(statearr_26320_26363[(2)] = null);

(statearr_26320_26363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (15))){
var state_26311__$1 = state_26311;
var statearr_26321_26364 = state_26311__$1;
(statearr_26321_26364[(2)] = null);

(statearr_26321_26364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (21))){
var inst_26263 = (state_26311[(10)]);
var inst_26255 = inst_26263;
var state_26311__$1 = (function (){var statearr_26322 = state_26311;
(statearr_26322[(7)] = inst_26255);

return statearr_26322;
})();
var statearr_26323_26365 = state_26311__$1;
(statearr_26323_26365[(2)] = null);

(statearr_26323_26365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (13))){
var inst_26307 = (state_26311[(2)]);
var state_26311__$1 = state_26311;
var statearr_26324_26366 = state_26311__$1;
(statearr_26324_26366[(2)] = inst_26307);

(statearr_26324_26366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (22))){
var inst_26305 = (state_26311[(2)]);
var state_26311__$1 = state_26311;
var statearr_26325_26367 = state_26311__$1;
(statearr_26325_26367[(2)] = inst_26305);

(statearr_26325_26367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (6))){
var inst_26309 = (state_26311[(2)]);
var state_26311__$1 = state_26311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26311__$1,inst_26309);
} else {
if((state_val_26312 === (25))){
var state_26311__$1 = state_26311;
var statearr_26326_26368 = state_26311__$1;
(statearr_26326_26368[(2)] = null);

(statearr_26326_26368[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (17))){
var inst_26285 = (state_26311[(14)]);
var state_26311__$1 = state_26311;
var statearr_26327_26369 = state_26311__$1;
(statearr_26327_26369[(2)] = inst_26285);

(statearr_26327_26369[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (3))){
var inst_26245 = (state_26311[(9)]);
var state_26311__$1 = state_26311;
var statearr_26328_26370 = state_26311__$1;
(statearr_26328_26370[(2)] = inst_26245);

(statearr_26328_26370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (12))){
var inst_26285 = (state_26311[(14)]);
var inst_26266 = (state_26311[(15)]);
var inst_26271 = (state_26311[(16)]);
var inst_26285__$1 = inst_26266.call(null,inst_26271);
var state_26311__$1 = (function (){var statearr_26329 = state_26311;
(statearr_26329[(14)] = inst_26285__$1);

return statearr_26329;
})();
if(cljs.core.truth_(inst_26285__$1)){
var statearr_26330_26371 = state_26311__$1;
(statearr_26330_26371[(1)] = (17));

} else {
var statearr_26331_26372 = state_26311__$1;
(statearr_26331_26372[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (2))){
var inst_26245 = (state_26311[(9)]);
var inst_26248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26245);
var state_26311__$1 = state_26311;
var statearr_26332_26373 = state_26311__$1;
(statearr_26332_26373[(2)] = inst_26248);

(statearr_26332_26373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (23))){
var inst_26296 = (state_26311[(2)]);
var state_26311__$1 = state_26311;
if(cljs.core.truth_(inst_26296)){
var statearr_26333_26374 = state_26311__$1;
(statearr_26333_26374[(1)] = (24));

} else {
var statearr_26334_26375 = state_26311__$1;
(statearr_26334_26375[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (19))){
var inst_26293 = (state_26311[(2)]);
var state_26311__$1 = state_26311;
if(cljs.core.truth_(inst_26293)){
var statearr_26335_26376 = state_26311__$1;
(statearr_26335_26376[(1)] = (20));

} else {
var statearr_26336_26377 = state_26311__$1;
(statearr_26336_26377[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (11))){
var inst_26270 = (state_26311[(8)]);
var inst_26276 = (inst_26270 == null);
var state_26311__$1 = state_26311;
if(cljs.core.truth_(inst_26276)){
var statearr_26337_26378 = state_26311__$1;
(statearr_26337_26378[(1)] = (14));

} else {
var statearr_26338_26379 = state_26311__$1;
(statearr_26338_26379[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (9))){
var inst_26263 = (state_26311[(10)]);
var inst_26263__$1 = (state_26311[(2)]);
var inst_26264 = cljs.core.get.call(null,inst_26263__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26265 = cljs.core.get.call(null,inst_26263__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26266 = cljs.core.get.call(null,inst_26263__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26311__$1 = (function (){var statearr_26339 = state_26311;
(statearr_26339[(15)] = inst_26266);

(statearr_26339[(10)] = inst_26263__$1);

(statearr_26339[(17)] = inst_26265);

return statearr_26339;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26311__$1,(10),inst_26264);
} else {
if((state_val_26312 === (5))){
var inst_26255 = (state_26311[(7)]);
var inst_26258 = cljs.core.seq_QMARK_.call(null,inst_26255);
var state_26311__$1 = state_26311;
if(inst_26258){
var statearr_26340_26380 = state_26311__$1;
(statearr_26340_26380[(1)] = (7));

} else {
var statearr_26341_26381 = state_26311__$1;
(statearr_26341_26381[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (14))){
var inst_26271 = (state_26311[(16)]);
var inst_26278 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26271);
var state_26311__$1 = state_26311;
var statearr_26342_26382 = state_26311__$1;
(statearr_26342_26382[(2)] = inst_26278);

(statearr_26342_26382[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (26))){
var inst_26301 = (state_26311[(2)]);
var state_26311__$1 = state_26311;
var statearr_26343_26383 = state_26311__$1;
(statearr_26343_26383[(2)] = inst_26301);

(statearr_26343_26383[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (16))){
var inst_26281 = (state_26311[(2)]);
var inst_26282 = calc_state.call(null);
var inst_26255 = inst_26282;
var state_26311__$1 = (function (){var statearr_26344 = state_26311;
(statearr_26344[(7)] = inst_26255);

(statearr_26344[(18)] = inst_26281);

return statearr_26344;
})();
var statearr_26345_26384 = state_26311__$1;
(statearr_26345_26384[(2)] = null);

(statearr_26345_26384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (10))){
var inst_26270 = (state_26311[(8)]);
var inst_26271 = (state_26311[(16)]);
var inst_26269 = (state_26311[(2)]);
var inst_26270__$1 = cljs.core.nth.call(null,inst_26269,(0),null);
var inst_26271__$1 = cljs.core.nth.call(null,inst_26269,(1),null);
var inst_26272 = (inst_26270__$1 == null);
var inst_26273 = cljs.core._EQ_.call(null,inst_26271__$1,change);
var inst_26274 = (inst_26272) || (inst_26273);
var state_26311__$1 = (function (){var statearr_26346 = state_26311;
(statearr_26346[(8)] = inst_26270__$1);

(statearr_26346[(16)] = inst_26271__$1);

return statearr_26346;
})();
if(cljs.core.truth_(inst_26274)){
var statearr_26347_26385 = state_26311__$1;
(statearr_26347_26385[(1)] = (11));

} else {
var statearr_26348_26386 = state_26311__$1;
(statearr_26348_26386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (18))){
var inst_26266 = (state_26311[(15)]);
var inst_26265 = (state_26311[(17)]);
var inst_26271 = (state_26311[(16)]);
var inst_26288 = cljs.core.empty_QMARK_.call(null,inst_26266);
var inst_26289 = inst_26265.call(null,inst_26271);
var inst_26290 = cljs.core.not.call(null,inst_26289);
var inst_26291 = (inst_26288) && (inst_26290);
var state_26311__$1 = state_26311;
var statearr_26349_26387 = state_26311__$1;
(statearr_26349_26387[(2)] = inst_26291);

(statearr_26349_26387[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26312 === (8))){
var inst_26255 = (state_26311[(7)]);
var state_26311__$1 = state_26311;
var statearr_26350_26388 = state_26311__$1;
(statearr_26350_26388[(2)] = inst_26255);

(statearr_26350_26388[(1)] = (9));


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
});})(c__19828__auto___26358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19772__auto__,c__19828__auto___26358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19773__auto__ = null;
var cljs$core$async$mix_$_state_machine__19773__auto____0 = (function (){
var statearr_26354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26354[(0)] = cljs$core$async$mix_$_state_machine__19773__auto__);

(statearr_26354[(1)] = (1));

return statearr_26354;
});
var cljs$core$async$mix_$_state_machine__19773__auto____1 = (function (state_26311){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_26311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e26355){if((e26355 instanceof Object)){
var ex__19776__auto__ = e26355;
var statearr_26356_26389 = state_26311;
(statearr_26356_26389[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26390 = state_26311;
state_26311 = G__26390;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19773__auto__ = function(state_26311){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19773__auto____1.call(this,state_26311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19773__auto____0;
cljs$core$async$mix_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19773__auto____1;
return cljs$core$async$mix_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___26358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19830__auto__ = (function (){var statearr_26357 = f__19829__auto__.call(null);
(statearr_26357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___26358);

return statearr_26357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___26358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26392 = {};
return obj26392;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17634__auto__ = p;
if(and__17634__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17634__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18282__auto__ = (((p == null))?null:p);
return (function (){var or__17646__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17634__auto__ = p;
if(and__17634__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17634__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18282__auto__ = (((p == null))?null:p);
return (function (){var or__17646__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
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
if((function (){var and__17634__auto__ = p;
if(and__17634__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17634__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18282__auto__ = (((p == null))?null:p);
return (function (){var or__17646__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17634__auto__ = p;
if(and__17634__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17634__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18282__auto__ = (((p == null))?null:p);
return (function (){var or__17646__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18282__auto__)]);
if(or__17646__auto__){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17646__auto____$1){
return or__17646__auto____$1;
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
var or__17646__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17646__auto__,mults){
return (function (p1__26393_SHARP_){
if(cljs.core.truth_(p1__26393_SHARP_.call(null,topic))){
return p1__26393_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26393_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17646__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26516 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26516 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26517){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26517 = meta26517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26516.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26516.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26516.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t26516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26516.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26518){
var self__ = this;
var _26518__$1 = this;
return self__.meta26517;
});})(mults,ensure_mult))
;

cljs.core.async.t26516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26518,meta26517__$1){
var self__ = this;
var _26518__$1 = this;
return (new cljs.core.async.t26516(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26517__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26516.cljs$lang$type = true;

cljs.core.async.t26516.cljs$lang$ctorStr = "cljs.core.async/t26516";

cljs.core.async.t26516.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t26516");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26516 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t26516(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26517){
return (new cljs.core.async.t26516(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26517));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26516(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19828__auto___26638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___26638,mults,ensure_mult,p){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___26638,mults,ensure_mult,p){
return (function (state_26590){
var state_val_26591 = (state_26590[(1)]);
if((state_val_26591 === (7))){
var inst_26586 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26592_26639 = state_26590__$1;
(statearr_26592_26639[(2)] = inst_26586);

(statearr_26592_26639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (20))){
var state_26590__$1 = state_26590;
var statearr_26593_26640 = state_26590__$1;
(statearr_26593_26640[(2)] = null);

(statearr_26593_26640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (1))){
var state_26590__$1 = state_26590;
var statearr_26594_26641 = state_26590__$1;
(statearr_26594_26641[(2)] = null);

(statearr_26594_26641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (24))){
var inst_26569 = (state_26590[(7)]);
var inst_26578 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26569);
var state_26590__$1 = state_26590;
var statearr_26595_26642 = state_26590__$1;
(statearr_26595_26642[(2)] = inst_26578);

(statearr_26595_26642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (4))){
var inst_26521 = (state_26590[(8)]);
var inst_26521__$1 = (state_26590[(2)]);
var inst_26522 = (inst_26521__$1 == null);
var state_26590__$1 = (function (){var statearr_26596 = state_26590;
(statearr_26596[(8)] = inst_26521__$1);

return statearr_26596;
})();
if(cljs.core.truth_(inst_26522)){
var statearr_26597_26643 = state_26590__$1;
(statearr_26597_26643[(1)] = (5));

} else {
var statearr_26598_26644 = state_26590__$1;
(statearr_26598_26644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (15))){
var inst_26563 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26599_26645 = state_26590__$1;
(statearr_26599_26645[(2)] = inst_26563);

(statearr_26599_26645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (21))){
var inst_26583 = (state_26590[(2)]);
var state_26590__$1 = (function (){var statearr_26600 = state_26590;
(statearr_26600[(9)] = inst_26583);

return statearr_26600;
})();
var statearr_26601_26646 = state_26590__$1;
(statearr_26601_26646[(2)] = null);

(statearr_26601_26646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (13))){
var inst_26545 = (state_26590[(10)]);
var inst_26547 = cljs.core.chunked_seq_QMARK_.call(null,inst_26545);
var state_26590__$1 = state_26590;
if(inst_26547){
var statearr_26602_26647 = state_26590__$1;
(statearr_26602_26647[(1)] = (16));

} else {
var statearr_26603_26648 = state_26590__$1;
(statearr_26603_26648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (22))){
var inst_26575 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
if(cljs.core.truth_(inst_26575)){
var statearr_26604_26649 = state_26590__$1;
(statearr_26604_26649[(1)] = (23));

} else {
var statearr_26605_26650 = state_26590__$1;
(statearr_26605_26650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (6))){
var inst_26569 = (state_26590[(7)]);
var inst_26521 = (state_26590[(8)]);
var inst_26571 = (state_26590[(11)]);
var inst_26569__$1 = topic_fn.call(null,inst_26521);
var inst_26570 = cljs.core.deref.call(null,mults);
var inst_26571__$1 = cljs.core.get.call(null,inst_26570,inst_26569__$1);
var state_26590__$1 = (function (){var statearr_26606 = state_26590;
(statearr_26606[(7)] = inst_26569__$1);

(statearr_26606[(11)] = inst_26571__$1);

return statearr_26606;
})();
if(cljs.core.truth_(inst_26571__$1)){
var statearr_26607_26651 = state_26590__$1;
(statearr_26607_26651[(1)] = (19));

} else {
var statearr_26608_26652 = state_26590__$1;
(statearr_26608_26652[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (25))){
var inst_26580 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26609_26653 = state_26590__$1;
(statearr_26609_26653[(2)] = inst_26580);

(statearr_26609_26653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (17))){
var inst_26545 = (state_26590[(10)]);
var inst_26554 = cljs.core.first.call(null,inst_26545);
var inst_26555 = cljs.core.async.muxch_STAR_.call(null,inst_26554);
var inst_26556 = cljs.core.async.close_BANG_.call(null,inst_26555);
var inst_26557 = cljs.core.next.call(null,inst_26545);
var inst_26531 = inst_26557;
var inst_26532 = null;
var inst_26533 = (0);
var inst_26534 = (0);
var state_26590__$1 = (function (){var statearr_26610 = state_26590;
(statearr_26610[(12)] = inst_26533);

(statearr_26610[(13)] = inst_26556);

(statearr_26610[(14)] = inst_26534);

(statearr_26610[(15)] = inst_26531);

(statearr_26610[(16)] = inst_26532);

return statearr_26610;
})();
var statearr_26611_26654 = state_26590__$1;
(statearr_26611_26654[(2)] = null);

(statearr_26611_26654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (3))){
var inst_26588 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26590__$1,inst_26588);
} else {
if((state_val_26591 === (12))){
var inst_26565 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26612_26655 = state_26590__$1;
(statearr_26612_26655[(2)] = inst_26565);

(statearr_26612_26655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (2))){
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26590__$1,(4),ch);
} else {
if((state_val_26591 === (23))){
var state_26590__$1 = state_26590;
var statearr_26613_26656 = state_26590__$1;
(statearr_26613_26656[(2)] = null);

(statearr_26613_26656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (19))){
var inst_26521 = (state_26590[(8)]);
var inst_26571 = (state_26590[(11)]);
var inst_26573 = cljs.core.async.muxch_STAR_.call(null,inst_26571);
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26590__$1,(22),inst_26573,inst_26521);
} else {
if((state_val_26591 === (11))){
var inst_26531 = (state_26590[(15)]);
var inst_26545 = (state_26590[(10)]);
var inst_26545__$1 = cljs.core.seq.call(null,inst_26531);
var state_26590__$1 = (function (){var statearr_26614 = state_26590;
(statearr_26614[(10)] = inst_26545__$1);

return statearr_26614;
})();
if(inst_26545__$1){
var statearr_26615_26657 = state_26590__$1;
(statearr_26615_26657[(1)] = (13));

} else {
var statearr_26616_26658 = state_26590__$1;
(statearr_26616_26658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (9))){
var inst_26567 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26617_26659 = state_26590__$1;
(statearr_26617_26659[(2)] = inst_26567);

(statearr_26617_26659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (5))){
var inst_26528 = cljs.core.deref.call(null,mults);
var inst_26529 = cljs.core.vals.call(null,inst_26528);
var inst_26530 = cljs.core.seq.call(null,inst_26529);
var inst_26531 = inst_26530;
var inst_26532 = null;
var inst_26533 = (0);
var inst_26534 = (0);
var state_26590__$1 = (function (){var statearr_26618 = state_26590;
(statearr_26618[(12)] = inst_26533);

(statearr_26618[(14)] = inst_26534);

(statearr_26618[(15)] = inst_26531);

(statearr_26618[(16)] = inst_26532);

return statearr_26618;
})();
var statearr_26619_26660 = state_26590__$1;
(statearr_26619_26660[(2)] = null);

(statearr_26619_26660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (14))){
var state_26590__$1 = state_26590;
var statearr_26623_26661 = state_26590__$1;
(statearr_26623_26661[(2)] = null);

(statearr_26623_26661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (16))){
var inst_26545 = (state_26590[(10)]);
var inst_26549 = cljs.core.chunk_first.call(null,inst_26545);
var inst_26550 = cljs.core.chunk_rest.call(null,inst_26545);
var inst_26551 = cljs.core.count.call(null,inst_26549);
var inst_26531 = inst_26550;
var inst_26532 = inst_26549;
var inst_26533 = inst_26551;
var inst_26534 = (0);
var state_26590__$1 = (function (){var statearr_26624 = state_26590;
(statearr_26624[(12)] = inst_26533);

(statearr_26624[(14)] = inst_26534);

(statearr_26624[(15)] = inst_26531);

(statearr_26624[(16)] = inst_26532);

return statearr_26624;
})();
var statearr_26625_26662 = state_26590__$1;
(statearr_26625_26662[(2)] = null);

(statearr_26625_26662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (10))){
var inst_26533 = (state_26590[(12)]);
var inst_26534 = (state_26590[(14)]);
var inst_26531 = (state_26590[(15)]);
var inst_26532 = (state_26590[(16)]);
var inst_26539 = cljs.core._nth.call(null,inst_26532,inst_26534);
var inst_26540 = cljs.core.async.muxch_STAR_.call(null,inst_26539);
var inst_26541 = cljs.core.async.close_BANG_.call(null,inst_26540);
var inst_26542 = (inst_26534 + (1));
var tmp26620 = inst_26533;
var tmp26621 = inst_26531;
var tmp26622 = inst_26532;
var inst_26531__$1 = tmp26621;
var inst_26532__$1 = tmp26622;
var inst_26533__$1 = tmp26620;
var inst_26534__$1 = inst_26542;
var state_26590__$1 = (function (){var statearr_26626 = state_26590;
(statearr_26626[(12)] = inst_26533__$1);

(statearr_26626[(14)] = inst_26534__$1);

(statearr_26626[(15)] = inst_26531__$1);

(statearr_26626[(17)] = inst_26541);

(statearr_26626[(16)] = inst_26532__$1);

return statearr_26626;
})();
var statearr_26627_26663 = state_26590__$1;
(statearr_26627_26663[(2)] = null);

(statearr_26627_26663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (18))){
var inst_26560 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26628_26664 = state_26590__$1;
(statearr_26628_26664[(2)] = inst_26560);

(statearr_26628_26664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (8))){
var inst_26533 = (state_26590[(12)]);
var inst_26534 = (state_26590[(14)]);
var inst_26536 = (inst_26534 < inst_26533);
var inst_26537 = inst_26536;
var state_26590__$1 = state_26590;
if(cljs.core.truth_(inst_26537)){
var statearr_26629_26665 = state_26590__$1;
(statearr_26629_26665[(1)] = (10));

} else {
var statearr_26630_26666 = state_26590__$1;
(statearr_26630_26666[(1)] = (11));

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
});})(c__19828__auto___26638,mults,ensure_mult,p))
;
return ((function (switch__19772__auto__,c__19828__auto___26638,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__19773__auto__ = null;
var cljs$core$async$pub_$_state_machine__19773__auto____0 = (function (){
var statearr_26634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26634[(0)] = cljs$core$async$pub_$_state_machine__19773__auto__);

(statearr_26634[(1)] = (1));

return statearr_26634;
});
var cljs$core$async$pub_$_state_machine__19773__auto____1 = (function (state_26590){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_26590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e26635){if((e26635 instanceof Object)){
var ex__19776__auto__ = e26635;
var statearr_26636_26667 = state_26590;
(statearr_26636_26667[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26668 = state_26590;
state_26590 = G__26668;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__19773__auto__ = function(state_26590){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__19773__auto____1.call(this,state_26590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__19773__auto____0;
cljs$core$async$pub_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__19773__auto____1;
return cljs$core$async$pub_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___26638,mults,ensure_mult,p))
})();
var state__19830__auto__ = (function (){var statearr_26637 = f__19829__auto__.call(null);
(statearr_26637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___26638);

return statearr_26637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___26638,mults,ensure_mult,p))
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
var c__19828__auto___26805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___26805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___26805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26775){
var state_val_26776 = (state_26775[(1)]);
if((state_val_26776 === (7))){
var state_26775__$1 = state_26775;
var statearr_26777_26806 = state_26775__$1;
(statearr_26777_26806[(2)] = null);

(statearr_26777_26806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (1))){
var state_26775__$1 = state_26775;
var statearr_26778_26807 = state_26775__$1;
(statearr_26778_26807[(2)] = null);

(statearr_26778_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (4))){
var inst_26739 = (state_26775[(7)]);
var inst_26741 = (inst_26739 < cnt);
var state_26775__$1 = state_26775;
if(cljs.core.truth_(inst_26741)){
var statearr_26779_26808 = state_26775__$1;
(statearr_26779_26808[(1)] = (6));

} else {
var statearr_26780_26809 = state_26775__$1;
(statearr_26780_26809[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (15))){
var inst_26771 = (state_26775[(2)]);
var state_26775__$1 = state_26775;
var statearr_26781_26810 = state_26775__$1;
(statearr_26781_26810[(2)] = inst_26771);

(statearr_26781_26810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (13))){
var inst_26764 = cljs.core.async.close_BANG_.call(null,out);
var state_26775__$1 = state_26775;
var statearr_26782_26811 = state_26775__$1;
(statearr_26782_26811[(2)] = inst_26764);

(statearr_26782_26811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (6))){
var state_26775__$1 = state_26775;
var statearr_26783_26812 = state_26775__$1;
(statearr_26783_26812[(2)] = null);

(statearr_26783_26812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (3))){
var inst_26773 = (state_26775[(2)]);
var state_26775__$1 = state_26775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26775__$1,inst_26773);
} else {
if((state_val_26776 === (12))){
var inst_26761 = (state_26775[(8)]);
var inst_26761__$1 = (state_26775[(2)]);
var inst_26762 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26761__$1);
var state_26775__$1 = (function (){var statearr_26784 = state_26775;
(statearr_26784[(8)] = inst_26761__$1);

return statearr_26784;
})();
if(cljs.core.truth_(inst_26762)){
var statearr_26785_26813 = state_26775__$1;
(statearr_26785_26813[(1)] = (13));

} else {
var statearr_26786_26814 = state_26775__$1;
(statearr_26786_26814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (2))){
var inst_26738 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26739 = (0);
var state_26775__$1 = (function (){var statearr_26787 = state_26775;
(statearr_26787[(9)] = inst_26738);

(statearr_26787[(7)] = inst_26739);

return statearr_26787;
})();
var statearr_26788_26815 = state_26775__$1;
(statearr_26788_26815[(2)] = null);

(statearr_26788_26815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (11))){
var inst_26739 = (state_26775[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26775,(10),Object,null,(9));
var inst_26748 = chs__$1.call(null,inst_26739);
var inst_26749 = done.call(null,inst_26739);
var inst_26750 = cljs.core.async.take_BANG_.call(null,inst_26748,inst_26749);
var state_26775__$1 = state_26775;
var statearr_26789_26816 = state_26775__$1;
(statearr_26789_26816[(2)] = inst_26750);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (9))){
var inst_26739 = (state_26775[(7)]);
var inst_26752 = (state_26775[(2)]);
var inst_26753 = (inst_26739 + (1));
var inst_26739__$1 = inst_26753;
var state_26775__$1 = (function (){var statearr_26790 = state_26775;
(statearr_26790[(10)] = inst_26752);

(statearr_26790[(7)] = inst_26739__$1);

return statearr_26790;
})();
var statearr_26791_26817 = state_26775__$1;
(statearr_26791_26817[(2)] = null);

(statearr_26791_26817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (5))){
var inst_26759 = (state_26775[(2)]);
var state_26775__$1 = (function (){var statearr_26792 = state_26775;
(statearr_26792[(11)] = inst_26759);

return statearr_26792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26775__$1,(12),dchan);
} else {
if((state_val_26776 === (14))){
var inst_26761 = (state_26775[(8)]);
var inst_26766 = cljs.core.apply.call(null,f,inst_26761);
var state_26775__$1 = state_26775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26775__$1,(16),out,inst_26766);
} else {
if((state_val_26776 === (16))){
var inst_26768 = (state_26775[(2)]);
var state_26775__$1 = (function (){var statearr_26793 = state_26775;
(statearr_26793[(12)] = inst_26768);

return statearr_26793;
})();
var statearr_26794_26818 = state_26775__$1;
(statearr_26794_26818[(2)] = null);

(statearr_26794_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (10))){
var inst_26743 = (state_26775[(2)]);
var inst_26744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26775__$1 = (function (){var statearr_26795 = state_26775;
(statearr_26795[(13)] = inst_26743);

return statearr_26795;
})();
var statearr_26796_26819 = state_26775__$1;
(statearr_26796_26819[(2)] = inst_26744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (8))){
var inst_26757 = (state_26775[(2)]);
var state_26775__$1 = state_26775;
var statearr_26797_26820 = state_26775__$1;
(statearr_26797_26820[(2)] = inst_26757);

(statearr_26797_26820[(1)] = (5));


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
});})(c__19828__auto___26805,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19772__auto__,c__19828__auto___26805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__19773__auto__ = null;
var cljs$core$async$map_$_state_machine__19773__auto____0 = (function (){
var statearr_26801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26801[(0)] = cljs$core$async$map_$_state_machine__19773__auto__);

(statearr_26801[(1)] = (1));

return statearr_26801;
});
var cljs$core$async$map_$_state_machine__19773__auto____1 = (function (state_26775){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_26775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e26802){if((e26802 instanceof Object)){
var ex__19776__auto__ = e26802;
var statearr_26803_26821 = state_26775;
(statearr_26803_26821[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26822 = state_26775;
state_26775 = G__26822;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__19773__auto__ = function(state_26775){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__19773__auto____1.call(this,state_26775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__19773__auto____0;
cljs$core$async$map_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__19773__auto____1;
return cljs$core$async$map_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___26805,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19830__auto__ = (function (){var statearr_26804 = f__19829__auto__.call(null);
(statearr_26804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___26805);

return statearr_26804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___26805,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19828__auto___26930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___26930,out){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___26930,out){
return (function (state_26906){
var state_val_26907 = (state_26906[(1)]);
if((state_val_26907 === (7))){
var inst_26885 = (state_26906[(7)]);
var inst_26886 = (state_26906[(8)]);
var inst_26885__$1 = (state_26906[(2)]);
var inst_26886__$1 = cljs.core.nth.call(null,inst_26885__$1,(0),null);
var inst_26887 = cljs.core.nth.call(null,inst_26885__$1,(1),null);
var inst_26888 = (inst_26886__$1 == null);
var state_26906__$1 = (function (){var statearr_26908 = state_26906;
(statearr_26908[(9)] = inst_26887);

(statearr_26908[(7)] = inst_26885__$1);

(statearr_26908[(8)] = inst_26886__$1);

return statearr_26908;
})();
if(cljs.core.truth_(inst_26888)){
var statearr_26909_26931 = state_26906__$1;
(statearr_26909_26931[(1)] = (8));

} else {
var statearr_26910_26932 = state_26906__$1;
(statearr_26910_26932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (1))){
var inst_26877 = cljs.core.vec.call(null,chs);
var inst_26878 = inst_26877;
var state_26906__$1 = (function (){var statearr_26911 = state_26906;
(statearr_26911[(10)] = inst_26878);

return statearr_26911;
})();
var statearr_26912_26933 = state_26906__$1;
(statearr_26912_26933[(2)] = null);

(statearr_26912_26933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (4))){
var inst_26878 = (state_26906[(10)]);
var state_26906__$1 = state_26906;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26906__$1,(7),inst_26878);
} else {
if((state_val_26907 === (6))){
var inst_26902 = (state_26906[(2)]);
var state_26906__$1 = state_26906;
var statearr_26913_26934 = state_26906__$1;
(statearr_26913_26934[(2)] = inst_26902);

(statearr_26913_26934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (3))){
var inst_26904 = (state_26906[(2)]);
var state_26906__$1 = state_26906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26906__$1,inst_26904);
} else {
if((state_val_26907 === (2))){
var inst_26878 = (state_26906[(10)]);
var inst_26880 = cljs.core.count.call(null,inst_26878);
var inst_26881 = (inst_26880 > (0));
var state_26906__$1 = state_26906;
if(cljs.core.truth_(inst_26881)){
var statearr_26915_26935 = state_26906__$1;
(statearr_26915_26935[(1)] = (4));

} else {
var statearr_26916_26936 = state_26906__$1;
(statearr_26916_26936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (11))){
var inst_26878 = (state_26906[(10)]);
var inst_26895 = (state_26906[(2)]);
var tmp26914 = inst_26878;
var inst_26878__$1 = tmp26914;
var state_26906__$1 = (function (){var statearr_26917 = state_26906;
(statearr_26917[(11)] = inst_26895);

(statearr_26917[(10)] = inst_26878__$1);

return statearr_26917;
})();
var statearr_26918_26937 = state_26906__$1;
(statearr_26918_26937[(2)] = null);

(statearr_26918_26937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (9))){
var inst_26886 = (state_26906[(8)]);
var state_26906__$1 = state_26906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26906__$1,(11),out,inst_26886);
} else {
if((state_val_26907 === (5))){
var inst_26900 = cljs.core.async.close_BANG_.call(null,out);
var state_26906__$1 = state_26906;
var statearr_26919_26938 = state_26906__$1;
(statearr_26919_26938[(2)] = inst_26900);

(statearr_26919_26938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (10))){
var inst_26898 = (state_26906[(2)]);
var state_26906__$1 = state_26906;
var statearr_26920_26939 = state_26906__$1;
(statearr_26920_26939[(2)] = inst_26898);

(statearr_26920_26939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (8))){
var inst_26887 = (state_26906[(9)]);
var inst_26885 = (state_26906[(7)]);
var inst_26886 = (state_26906[(8)]);
var inst_26878 = (state_26906[(10)]);
var inst_26890 = (function (){var c = inst_26887;
var v = inst_26886;
var vec__26883 = inst_26885;
var cs = inst_26878;
return ((function (c,v,vec__26883,cs,inst_26887,inst_26885,inst_26886,inst_26878,state_val_26907,c__19828__auto___26930,out){
return (function (p1__26823_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26823_SHARP_);
});
;})(c,v,vec__26883,cs,inst_26887,inst_26885,inst_26886,inst_26878,state_val_26907,c__19828__auto___26930,out))
})();
var inst_26891 = cljs.core.filterv.call(null,inst_26890,inst_26878);
var inst_26878__$1 = inst_26891;
var state_26906__$1 = (function (){var statearr_26921 = state_26906;
(statearr_26921[(10)] = inst_26878__$1);

return statearr_26921;
})();
var statearr_26922_26940 = state_26906__$1;
(statearr_26922_26940[(2)] = null);

(statearr_26922_26940[(1)] = (2));


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
});})(c__19828__auto___26930,out))
;
return ((function (switch__19772__auto__,c__19828__auto___26930,out){
return (function() {
var cljs$core$async$merge_$_state_machine__19773__auto__ = null;
var cljs$core$async$merge_$_state_machine__19773__auto____0 = (function (){
var statearr_26926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26926[(0)] = cljs$core$async$merge_$_state_machine__19773__auto__);

(statearr_26926[(1)] = (1));

return statearr_26926;
});
var cljs$core$async$merge_$_state_machine__19773__auto____1 = (function (state_26906){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_26906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e26927){if((e26927 instanceof Object)){
var ex__19776__auto__ = e26927;
var statearr_26928_26941 = state_26906;
(statearr_26928_26941[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26942 = state_26906;
state_26906 = G__26942;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__19773__auto__ = function(state_26906){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__19773__auto____1.call(this,state_26906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__19773__auto____0;
cljs$core$async$merge_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__19773__auto____1;
return cljs$core$async$merge_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___26930,out))
})();
var state__19830__auto__ = (function (){var statearr_26929 = f__19829__auto__.call(null);
(statearr_26929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___26930);

return statearr_26929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___26930,out))
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
var c__19828__auto___27035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___27035,out){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___27035,out){
return (function (state_27012){
var state_val_27013 = (state_27012[(1)]);
if((state_val_27013 === (7))){
var inst_26994 = (state_27012[(7)]);
var inst_26994__$1 = (state_27012[(2)]);
var inst_26995 = (inst_26994__$1 == null);
var inst_26996 = cljs.core.not.call(null,inst_26995);
var state_27012__$1 = (function (){var statearr_27014 = state_27012;
(statearr_27014[(7)] = inst_26994__$1);

return statearr_27014;
})();
if(inst_26996){
var statearr_27015_27036 = state_27012__$1;
(statearr_27015_27036[(1)] = (8));

} else {
var statearr_27016_27037 = state_27012__$1;
(statearr_27016_27037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (1))){
var inst_26989 = (0);
var state_27012__$1 = (function (){var statearr_27017 = state_27012;
(statearr_27017[(8)] = inst_26989);

return statearr_27017;
})();
var statearr_27018_27038 = state_27012__$1;
(statearr_27018_27038[(2)] = null);

(statearr_27018_27038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (4))){
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27012__$1,(7),ch);
} else {
if((state_val_27013 === (6))){
var inst_27007 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27019_27039 = state_27012__$1;
(statearr_27019_27039[(2)] = inst_27007);

(statearr_27019_27039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (3))){
var inst_27009 = (state_27012[(2)]);
var inst_27010 = cljs.core.async.close_BANG_.call(null,out);
var state_27012__$1 = (function (){var statearr_27020 = state_27012;
(statearr_27020[(9)] = inst_27009);

return statearr_27020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27012__$1,inst_27010);
} else {
if((state_val_27013 === (2))){
var inst_26989 = (state_27012[(8)]);
var inst_26991 = (inst_26989 < n);
var state_27012__$1 = state_27012;
if(cljs.core.truth_(inst_26991)){
var statearr_27021_27040 = state_27012__$1;
(statearr_27021_27040[(1)] = (4));

} else {
var statearr_27022_27041 = state_27012__$1;
(statearr_27022_27041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (11))){
var inst_26989 = (state_27012[(8)]);
var inst_26999 = (state_27012[(2)]);
var inst_27000 = (inst_26989 + (1));
var inst_26989__$1 = inst_27000;
var state_27012__$1 = (function (){var statearr_27023 = state_27012;
(statearr_27023[(10)] = inst_26999);

(statearr_27023[(8)] = inst_26989__$1);

return statearr_27023;
})();
var statearr_27024_27042 = state_27012__$1;
(statearr_27024_27042[(2)] = null);

(statearr_27024_27042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (9))){
var state_27012__$1 = state_27012;
var statearr_27025_27043 = state_27012__$1;
(statearr_27025_27043[(2)] = null);

(statearr_27025_27043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (5))){
var state_27012__$1 = state_27012;
var statearr_27026_27044 = state_27012__$1;
(statearr_27026_27044[(2)] = null);

(statearr_27026_27044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (10))){
var inst_27004 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27027_27045 = state_27012__$1;
(statearr_27027_27045[(2)] = inst_27004);

(statearr_27027_27045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (8))){
var inst_26994 = (state_27012[(7)]);
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27012__$1,(11),out,inst_26994);
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
});})(c__19828__auto___27035,out))
;
return ((function (switch__19772__auto__,c__19828__auto___27035,out){
return (function() {
var cljs$core$async$take_$_state_machine__19773__auto__ = null;
var cljs$core$async$take_$_state_machine__19773__auto____0 = (function (){
var statearr_27031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27031[(0)] = cljs$core$async$take_$_state_machine__19773__auto__);

(statearr_27031[(1)] = (1));

return statearr_27031;
});
var cljs$core$async$take_$_state_machine__19773__auto____1 = (function (state_27012){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_27012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e27032){if((e27032 instanceof Object)){
var ex__19776__auto__ = e27032;
var statearr_27033_27046 = state_27012;
(statearr_27033_27046[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27047 = state_27012;
state_27012 = G__27047;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__19773__auto__ = function(state_27012){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__19773__auto____1.call(this,state_27012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__19773__auto____0;
cljs$core$async$take_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__19773__auto____1;
return cljs$core$async$take_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___27035,out))
})();
var state__19830__auto__ = (function (){var statearr_27034 = f__19829__auto__.call(null);
(statearr_27034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___27035);

return statearr_27034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___27035,out))
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
if(typeof cljs.core.async.t27055 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27055 = (function (ch,f,map_LT_,meta27056){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27056 = meta27056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27058 = (function (fn1,_,meta27056,map_LT_,f,ch,meta27059){
this.fn1 = fn1;
this._ = _;
this.meta27056 = meta27056;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27059 = meta27059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27058.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27048_SHARP_){
return f1.call(null,(((p1__27048_SHARP_ == null))?null:self__.f.call(null,p1__27048_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27060){
var self__ = this;
var _27060__$1 = this;
return self__.meta27059;
});})(___$1))
;

cljs.core.async.t27058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27060,meta27059__$1){
var self__ = this;
var _27060__$1 = this;
return (new cljs.core.async.t27058(self__.fn1,self__._,self__.meta27056,self__.map_LT_,self__.f,self__.ch,meta27059__$1));
});})(___$1))
;

cljs.core.async.t27058.cljs$lang$type = true;

cljs.core.async.t27058.cljs$lang$ctorStr = "cljs.core.async/t27058";

cljs.core.async.t27058.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t27058");
});})(___$1))
;

cljs.core.async.__GT_t27058 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27058(fn1__$1,___$2,meta27056__$1,map_LT___$1,f__$1,ch__$1,meta27059){
return (new cljs.core.async.t27058(fn1__$1,___$2,meta27056__$1,map_LT___$1,f__$1,ch__$1,meta27059));
});})(___$1))
;

}

return (new cljs.core.async.t27058(fn1,___$1,self__.meta27056,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17634__auto__ = ret;
if(cljs.core.truth_(and__17634__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17634__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27055.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27057){
var self__ = this;
var _27057__$1 = this;
return self__.meta27056;
});

cljs.core.async.t27055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27057,meta27056__$1){
var self__ = this;
var _27057__$1 = this;
return (new cljs.core.async.t27055(self__.ch,self__.f,self__.map_LT_,meta27056__$1));
});

cljs.core.async.t27055.cljs$lang$type = true;

cljs.core.async.t27055.cljs$lang$ctorStr = "cljs.core.async/t27055";

cljs.core.async.t27055.cljs$lang$ctorPrWriter = (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t27055");
});

cljs.core.async.__GT_t27055 = (function cljs$core$async$map_LT__$___GT_t27055(ch__$1,f__$1,map_LT___$1,meta27056){
return (new cljs.core.async.t27055(ch__$1,f__$1,map_LT___$1,meta27056));
});

}

return (new cljs.core.async.t27055(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27064 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27064 = (function (ch,f,map_GT_,meta27065){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27065 = meta27065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27064.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27064.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27064.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27066){
var self__ = this;
var _27066__$1 = this;
return self__.meta27065;
});

cljs.core.async.t27064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27066,meta27065__$1){
var self__ = this;
var _27066__$1 = this;
return (new cljs.core.async.t27064(self__.ch,self__.f,self__.map_GT_,meta27065__$1));
});

cljs.core.async.t27064.cljs$lang$type = true;

cljs.core.async.t27064.cljs$lang$ctorStr = "cljs.core.async/t27064";

cljs.core.async.t27064.cljs$lang$ctorPrWriter = (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t27064");
});

cljs.core.async.__GT_t27064 = (function cljs$core$async$map_GT__$___GT_t27064(ch__$1,f__$1,map_GT___$1,meta27065){
return (new cljs.core.async.t27064(ch__$1,f__$1,map_GT___$1,meta27065));
});

}

return (new cljs.core.async.t27064(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27070 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27070 = (function (ch,p,filter_GT_,meta27071){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27071 = meta27071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27070.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27070.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27070.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27070.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27072){
var self__ = this;
var _27072__$1 = this;
return self__.meta27071;
});

cljs.core.async.t27070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27072,meta27071__$1){
var self__ = this;
var _27072__$1 = this;
return (new cljs.core.async.t27070(self__.ch,self__.p,self__.filter_GT_,meta27071__$1));
});

cljs.core.async.t27070.cljs$lang$type = true;

cljs.core.async.t27070.cljs$lang$ctorStr = "cljs.core.async/t27070";

cljs.core.async.t27070.cljs$lang$ctorPrWriter = (function (this__18225__auto__,writer__18226__auto__,opt__18227__auto__){
return cljs.core._write.call(null,writer__18226__auto__,"cljs.core.async/t27070");
});

cljs.core.async.__GT_t27070 = (function cljs$core$async$filter_GT__$___GT_t27070(ch__$1,p__$1,filter_GT___$1,meta27071){
return (new cljs.core.async.t27070(ch__$1,p__$1,filter_GT___$1,meta27071));
});

}

return (new cljs.core.async.t27070(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19828__auto___27155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___27155,out){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___27155,out){
return (function (state_27134){
var state_val_27135 = (state_27134[(1)]);
if((state_val_27135 === (7))){
var inst_27130 = (state_27134[(2)]);
var state_27134__$1 = state_27134;
var statearr_27136_27156 = state_27134__$1;
(statearr_27136_27156[(2)] = inst_27130);

(statearr_27136_27156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (1))){
var state_27134__$1 = state_27134;
var statearr_27137_27157 = state_27134__$1;
(statearr_27137_27157[(2)] = null);

(statearr_27137_27157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (4))){
var inst_27116 = (state_27134[(7)]);
var inst_27116__$1 = (state_27134[(2)]);
var inst_27117 = (inst_27116__$1 == null);
var state_27134__$1 = (function (){var statearr_27138 = state_27134;
(statearr_27138[(7)] = inst_27116__$1);

return statearr_27138;
})();
if(cljs.core.truth_(inst_27117)){
var statearr_27139_27158 = state_27134__$1;
(statearr_27139_27158[(1)] = (5));

} else {
var statearr_27140_27159 = state_27134__$1;
(statearr_27140_27159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (6))){
var inst_27116 = (state_27134[(7)]);
var inst_27121 = p.call(null,inst_27116);
var state_27134__$1 = state_27134;
if(cljs.core.truth_(inst_27121)){
var statearr_27141_27160 = state_27134__$1;
(statearr_27141_27160[(1)] = (8));

} else {
var statearr_27142_27161 = state_27134__$1;
(statearr_27142_27161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (3))){
var inst_27132 = (state_27134[(2)]);
var state_27134__$1 = state_27134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27134__$1,inst_27132);
} else {
if((state_val_27135 === (2))){
var state_27134__$1 = state_27134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27134__$1,(4),ch);
} else {
if((state_val_27135 === (11))){
var inst_27124 = (state_27134[(2)]);
var state_27134__$1 = state_27134;
var statearr_27143_27162 = state_27134__$1;
(statearr_27143_27162[(2)] = inst_27124);

(statearr_27143_27162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (9))){
var state_27134__$1 = state_27134;
var statearr_27144_27163 = state_27134__$1;
(statearr_27144_27163[(2)] = null);

(statearr_27144_27163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (5))){
var inst_27119 = cljs.core.async.close_BANG_.call(null,out);
var state_27134__$1 = state_27134;
var statearr_27145_27164 = state_27134__$1;
(statearr_27145_27164[(2)] = inst_27119);

(statearr_27145_27164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (10))){
var inst_27127 = (state_27134[(2)]);
var state_27134__$1 = (function (){var statearr_27146 = state_27134;
(statearr_27146[(8)] = inst_27127);

return statearr_27146;
})();
var statearr_27147_27165 = state_27134__$1;
(statearr_27147_27165[(2)] = null);

(statearr_27147_27165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (8))){
var inst_27116 = (state_27134[(7)]);
var state_27134__$1 = state_27134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27134__$1,(11),out,inst_27116);
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
});})(c__19828__auto___27155,out))
;
return ((function (switch__19772__auto__,c__19828__auto___27155,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__19773__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__19773__auto____0 = (function (){
var statearr_27151 = [null,null,null,null,null,null,null,null,null];
(statearr_27151[(0)] = cljs$core$async$filter_LT__$_state_machine__19773__auto__);

(statearr_27151[(1)] = (1));

return statearr_27151;
});
var cljs$core$async$filter_LT__$_state_machine__19773__auto____1 = (function (state_27134){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_27134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e27152){if((e27152 instanceof Object)){
var ex__19776__auto__ = e27152;
var statearr_27153_27166 = state_27134;
(statearr_27153_27166[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27167 = state_27134;
state_27134 = G__27167;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__19773__auto__ = function(state_27134){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__19773__auto____1.call(this,state_27134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__19773__auto____0;
cljs$core$async$filter_LT__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__19773__auto____1;
return cljs$core$async$filter_LT__$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___27155,out))
})();
var state__19830__auto__ = (function (){var statearr_27154 = f__19829__auto__.call(null);
(statearr_27154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___27155);

return statearr_27154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___27155,out))
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
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__){
return (function (state_27333){
var state_val_27334 = (state_27333[(1)]);
if((state_val_27334 === (7))){
var inst_27329 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27335_27376 = state_27333__$1;
(statearr_27335_27376[(2)] = inst_27329);

(statearr_27335_27376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (20))){
var inst_27299 = (state_27333[(7)]);
var inst_27310 = (state_27333[(2)]);
var inst_27311 = cljs.core.next.call(null,inst_27299);
var inst_27285 = inst_27311;
var inst_27286 = null;
var inst_27287 = (0);
var inst_27288 = (0);
var state_27333__$1 = (function (){var statearr_27336 = state_27333;
(statearr_27336[(8)] = inst_27285);

(statearr_27336[(9)] = inst_27288);

(statearr_27336[(10)] = inst_27287);

(statearr_27336[(11)] = inst_27286);

(statearr_27336[(12)] = inst_27310);

return statearr_27336;
})();
var statearr_27337_27377 = state_27333__$1;
(statearr_27337_27377[(2)] = null);

(statearr_27337_27377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (1))){
var state_27333__$1 = state_27333;
var statearr_27338_27378 = state_27333__$1;
(statearr_27338_27378[(2)] = null);

(statearr_27338_27378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (4))){
var inst_27274 = (state_27333[(13)]);
var inst_27274__$1 = (state_27333[(2)]);
var inst_27275 = (inst_27274__$1 == null);
var state_27333__$1 = (function (){var statearr_27339 = state_27333;
(statearr_27339[(13)] = inst_27274__$1);

return statearr_27339;
})();
if(cljs.core.truth_(inst_27275)){
var statearr_27340_27379 = state_27333__$1;
(statearr_27340_27379[(1)] = (5));

} else {
var statearr_27341_27380 = state_27333__$1;
(statearr_27341_27380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (15))){
var state_27333__$1 = state_27333;
var statearr_27345_27381 = state_27333__$1;
(statearr_27345_27381[(2)] = null);

(statearr_27345_27381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (21))){
var state_27333__$1 = state_27333;
var statearr_27346_27382 = state_27333__$1;
(statearr_27346_27382[(2)] = null);

(statearr_27346_27382[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (13))){
var inst_27285 = (state_27333[(8)]);
var inst_27288 = (state_27333[(9)]);
var inst_27287 = (state_27333[(10)]);
var inst_27286 = (state_27333[(11)]);
var inst_27295 = (state_27333[(2)]);
var inst_27296 = (inst_27288 + (1));
var tmp27342 = inst_27285;
var tmp27343 = inst_27287;
var tmp27344 = inst_27286;
var inst_27285__$1 = tmp27342;
var inst_27286__$1 = tmp27344;
var inst_27287__$1 = tmp27343;
var inst_27288__$1 = inst_27296;
var state_27333__$1 = (function (){var statearr_27347 = state_27333;
(statearr_27347[(8)] = inst_27285__$1);

(statearr_27347[(14)] = inst_27295);

(statearr_27347[(9)] = inst_27288__$1);

(statearr_27347[(10)] = inst_27287__$1);

(statearr_27347[(11)] = inst_27286__$1);

return statearr_27347;
})();
var statearr_27348_27383 = state_27333__$1;
(statearr_27348_27383[(2)] = null);

(statearr_27348_27383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (22))){
var state_27333__$1 = state_27333;
var statearr_27349_27384 = state_27333__$1;
(statearr_27349_27384[(2)] = null);

(statearr_27349_27384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (6))){
var inst_27274 = (state_27333[(13)]);
var inst_27283 = f.call(null,inst_27274);
var inst_27284 = cljs.core.seq.call(null,inst_27283);
var inst_27285 = inst_27284;
var inst_27286 = null;
var inst_27287 = (0);
var inst_27288 = (0);
var state_27333__$1 = (function (){var statearr_27350 = state_27333;
(statearr_27350[(8)] = inst_27285);

(statearr_27350[(9)] = inst_27288);

(statearr_27350[(10)] = inst_27287);

(statearr_27350[(11)] = inst_27286);

return statearr_27350;
})();
var statearr_27351_27385 = state_27333__$1;
(statearr_27351_27385[(2)] = null);

(statearr_27351_27385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (17))){
var inst_27299 = (state_27333[(7)]);
var inst_27303 = cljs.core.chunk_first.call(null,inst_27299);
var inst_27304 = cljs.core.chunk_rest.call(null,inst_27299);
var inst_27305 = cljs.core.count.call(null,inst_27303);
var inst_27285 = inst_27304;
var inst_27286 = inst_27303;
var inst_27287 = inst_27305;
var inst_27288 = (0);
var state_27333__$1 = (function (){var statearr_27352 = state_27333;
(statearr_27352[(8)] = inst_27285);

(statearr_27352[(9)] = inst_27288);

(statearr_27352[(10)] = inst_27287);

(statearr_27352[(11)] = inst_27286);

return statearr_27352;
})();
var statearr_27353_27386 = state_27333__$1;
(statearr_27353_27386[(2)] = null);

(statearr_27353_27386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (3))){
var inst_27331 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27333__$1,inst_27331);
} else {
if((state_val_27334 === (12))){
var inst_27319 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27354_27387 = state_27333__$1;
(statearr_27354_27387[(2)] = inst_27319);

(statearr_27354_27387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (2))){
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27333__$1,(4),in$);
} else {
if((state_val_27334 === (23))){
var inst_27327 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27355_27388 = state_27333__$1;
(statearr_27355_27388[(2)] = inst_27327);

(statearr_27355_27388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (19))){
var inst_27314 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27356_27389 = state_27333__$1;
(statearr_27356_27389[(2)] = inst_27314);

(statearr_27356_27389[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (11))){
var inst_27285 = (state_27333[(8)]);
var inst_27299 = (state_27333[(7)]);
var inst_27299__$1 = cljs.core.seq.call(null,inst_27285);
var state_27333__$1 = (function (){var statearr_27357 = state_27333;
(statearr_27357[(7)] = inst_27299__$1);

return statearr_27357;
})();
if(inst_27299__$1){
var statearr_27358_27390 = state_27333__$1;
(statearr_27358_27390[(1)] = (14));

} else {
var statearr_27359_27391 = state_27333__$1;
(statearr_27359_27391[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (9))){
var inst_27321 = (state_27333[(2)]);
var inst_27322 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27333__$1 = (function (){var statearr_27360 = state_27333;
(statearr_27360[(15)] = inst_27321);

return statearr_27360;
})();
if(cljs.core.truth_(inst_27322)){
var statearr_27361_27392 = state_27333__$1;
(statearr_27361_27392[(1)] = (21));

} else {
var statearr_27362_27393 = state_27333__$1;
(statearr_27362_27393[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (5))){
var inst_27277 = cljs.core.async.close_BANG_.call(null,out);
var state_27333__$1 = state_27333;
var statearr_27363_27394 = state_27333__$1;
(statearr_27363_27394[(2)] = inst_27277);

(statearr_27363_27394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (14))){
var inst_27299 = (state_27333[(7)]);
var inst_27301 = cljs.core.chunked_seq_QMARK_.call(null,inst_27299);
var state_27333__$1 = state_27333;
if(inst_27301){
var statearr_27364_27395 = state_27333__$1;
(statearr_27364_27395[(1)] = (17));

} else {
var statearr_27365_27396 = state_27333__$1;
(statearr_27365_27396[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (16))){
var inst_27317 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27366_27397 = state_27333__$1;
(statearr_27366_27397[(2)] = inst_27317);

(statearr_27366_27397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (10))){
var inst_27288 = (state_27333[(9)]);
var inst_27286 = (state_27333[(11)]);
var inst_27293 = cljs.core._nth.call(null,inst_27286,inst_27288);
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27333__$1,(13),out,inst_27293);
} else {
if((state_val_27334 === (18))){
var inst_27299 = (state_27333[(7)]);
var inst_27308 = cljs.core.first.call(null,inst_27299);
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27333__$1,(20),out,inst_27308);
} else {
if((state_val_27334 === (8))){
var inst_27288 = (state_27333[(9)]);
var inst_27287 = (state_27333[(10)]);
var inst_27290 = (inst_27288 < inst_27287);
var inst_27291 = inst_27290;
var state_27333__$1 = state_27333;
if(cljs.core.truth_(inst_27291)){
var statearr_27367_27398 = state_27333__$1;
(statearr_27367_27398[(1)] = (10));

} else {
var statearr_27368_27399 = state_27333__$1;
(statearr_27368_27399[(1)] = (11));

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
});})(c__19828__auto__))
;
return ((function (switch__19772__auto__,c__19828__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19773__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19773__auto____0 = (function (){
var statearr_27372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27372[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19773__auto__);

(statearr_27372[(1)] = (1));

return statearr_27372;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19773__auto____1 = (function (state_27333){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_27333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e27373){if((e27373 instanceof Object)){
var ex__19776__auto__ = e27373;
var statearr_27374_27400 = state_27333;
(statearr_27374_27400[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27401 = state_27333;
state_27333 = G__27401;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19773__auto__ = function(state_27333){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19773__auto____1.call(this,state_27333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19773__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19773__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__))
})();
var state__19830__auto__ = (function (){var statearr_27375 = f__19829__auto__.call(null);
(statearr_27375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_27375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__))
);

return c__19828__auto__;
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
var c__19828__auto___27498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___27498,out){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___27498,out){
return (function (state_27473){
var state_val_27474 = (state_27473[(1)]);
if((state_val_27474 === (7))){
var inst_27468 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
var statearr_27475_27499 = state_27473__$1;
(statearr_27475_27499[(2)] = inst_27468);

(statearr_27475_27499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (1))){
var inst_27450 = null;
var state_27473__$1 = (function (){var statearr_27476 = state_27473;
(statearr_27476[(7)] = inst_27450);

return statearr_27476;
})();
var statearr_27477_27500 = state_27473__$1;
(statearr_27477_27500[(2)] = null);

(statearr_27477_27500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (4))){
var inst_27453 = (state_27473[(8)]);
var inst_27453__$1 = (state_27473[(2)]);
var inst_27454 = (inst_27453__$1 == null);
var inst_27455 = cljs.core.not.call(null,inst_27454);
var state_27473__$1 = (function (){var statearr_27478 = state_27473;
(statearr_27478[(8)] = inst_27453__$1);

return statearr_27478;
})();
if(inst_27455){
var statearr_27479_27501 = state_27473__$1;
(statearr_27479_27501[(1)] = (5));

} else {
var statearr_27480_27502 = state_27473__$1;
(statearr_27480_27502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (6))){
var state_27473__$1 = state_27473;
var statearr_27481_27503 = state_27473__$1;
(statearr_27481_27503[(2)] = null);

(statearr_27481_27503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (3))){
var inst_27470 = (state_27473[(2)]);
var inst_27471 = cljs.core.async.close_BANG_.call(null,out);
var state_27473__$1 = (function (){var statearr_27482 = state_27473;
(statearr_27482[(9)] = inst_27470);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27473__$1,inst_27471);
} else {
if((state_val_27474 === (2))){
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27473__$1,(4),ch);
} else {
if((state_val_27474 === (11))){
var inst_27453 = (state_27473[(8)]);
var inst_27462 = (state_27473[(2)]);
var inst_27450 = inst_27453;
var state_27473__$1 = (function (){var statearr_27483 = state_27473;
(statearr_27483[(7)] = inst_27450);

(statearr_27483[(10)] = inst_27462);

return statearr_27483;
})();
var statearr_27484_27504 = state_27473__$1;
(statearr_27484_27504[(2)] = null);

(statearr_27484_27504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (9))){
var inst_27453 = (state_27473[(8)]);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27473__$1,(11),out,inst_27453);
} else {
if((state_val_27474 === (5))){
var inst_27450 = (state_27473[(7)]);
var inst_27453 = (state_27473[(8)]);
var inst_27457 = cljs.core._EQ_.call(null,inst_27453,inst_27450);
var state_27473__$1 = state_27473;
if(inst_27457){
var statearr_27486_27505 = state_27473__$1;
(statearr_27486_27505[(1)] = (8));

} else {
var statearr_27487_27506 = state_27473__$1;
(statearr_27487_27506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (10))){
var inst_27465 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
var statearr_27488_27507 = state_27473__$1;
(statearr_27488_27507[(2)] = inst_27465);

(statearr_27488_27507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (8))){
var inst_27450 = (state_27473[(7)]);
var tmp27485 = inst_27450;
var inst_27450__$1 = tmp27485;
var state_27473__$1 = (function (){var statearr_27489 = state_27473;
(statearr_27489[(7)] = inst_27450__$1);

return statearr_27489;
})();
var statearr_27490_27508 = state_27473__$1;
(statearr_27490_27508[(2)] = null);

(statearr_27490_27508[(1)] = (2));


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
});})(c__19828__auto___27498,out))
;
return ((function (switch__19772__auto__,c__19828__auto___27498,out){
return (function() {
var cljs$core$async$unique_$_state_machine__19773__auto__ = null;
var cljs$core$async$unique_$_state_machine__19773__auto____0 = (function (){
var statearr_27494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27494[(0)] = cljs$core$async$unique_$_state_machine__19773__auto__);

(statearr_27494[(1)] = (1));

return statearr_27494;
});
var cljs$core$async$unique_$_state_machine__19773__auto____1 = (function (state_27473){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_27473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e27495){if((e27495 instanceof Object)){
var ex__19776__auto__ = e27495;
var statearr_27496_27509 = state_27473;
(statearr_27496_27509[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27510 = state_27473;
state_27473 = G__27510;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__19773__auto__ = function(state_27473){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__19773__auto____1.call(this,state_27473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__19773__auto____0;
cljs$core$async$unique_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__19773__auto____1;
return cljs$core$async$unique_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___27498,out))
})();
var state__19830__auto__ = (function (){var statearr_27497 = f__19829__auto__.call(null);
(statearr_27497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___27498);

return statearr_27497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___27498,out))
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
var c__19828__auto___27645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___27645,out){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___27645,out){
return (function (state_27615){
var state_val_27616 = (state_27615[(1)]);
if((state_val_27616 === (7))){
var inst_27611 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27617_27646 = state_27615__$1;
(statearr_27617_27646[(2)] = inst_27611);

(statearr_27617_27646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (1))){
var inst_27578 = (new Array(n));
var inst_27579 = inst_27578;
var inst_27580 = (0);
var state_27615__$1 = (function (){var statearr_27618 = state_27615;
(statearr_27618[(7)] = inst_27579);

(statearr_27618[(8)] = inst_27580);

return statearr_27618;
})();
var statearr_27619_27647 = state_27615__$1;
(statearr_27619_27647[(2)] = null);

(statearr_27619_27647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (4))){
var inst_27583 = (state_27615[(9)]);
var inst_27583__$1 = (state_27615[(2)]);
var inst_27584 = (inst_27583__$1 == null);
var inst_27585 = cljs.core.not.call(null,inst_27584);
var state_27615__$1 = (function (){var statearr_27620 = state_27615;
(statearr_27620[(9)] = inst_27583__$1);

return statearr_27620;
})();
if(inst_27585){
var statearr_27621_27648 = state_27615__$1;
(statearr_27621_27648[(1)] = (5));

} else {
var statearr_27622_27649 = state_27615__$1;
(statearr_27622_27649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (15))){
var inst_27605 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27623_27650 = state_27615__$1;
(statearr_27623_27650[(2)] = inst_27605);

(statearr_27623_27650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (13))){
var state_27615__$1 = state_27615;
var statearr_27624_27651 = state_27615__$1;
(statearr_27624_27651[(2)] = null);

(statearr_27624_27651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (6))){
var inst_27580 = (state_27615[(8)]);
var inst_27601 = (inst_27580 > (0));
var state_27615__$1 = state_27615;
if(cljs.core.truth_(inst_27601)){
var statearr_27625_27652 = state_27615__$1;
(statearr_27625_27652[(1)] = (12));

} else {
var statearr_27626_27653 = state_27615__$1;
(statearr_27626_27653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (3))){
var inst_27613 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27615__$1,inst_27613);
} else {
if((state_val_27616 === (12))){
var inst_27579 = (state_27615[(7)]);
var inst_27603 = cljs.core.vec.call(null,inst_27579);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27615__$1,(15),out,inst_27603);
} else {
if((state_val_27616 === (2))){
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27615__$1,(4),ch);
} else {
if((state_val_27616 === (11))){
var inst_27595 = (state_27615[(2)]);
var inst_27596 = (new Array(n));
var inst_27579 = inst_27596;
var inst_27580 = (0);
var state_27615__$1 = (function (){var statearr_27627 = state_27615;
(statearr_27627[(7)] = inst_27579);

(statearr_27627[(8)] = inst_27580);

(statearr_27627[(10)] = inst_27595);

return statearr_27627;
})();
var statearr_27628_27654 = state_27615__$1;
(statearr_27628_27654[(2)] = null);

(statearr_27628_27654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (9))){
var inst_27579 = (state_27615[(7)]);
var inst_27593 = cljs.core.vec.call(null,inst_27579);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27615__$1,(11),out,inst_27593);
} else {
if((state_val_27616 === (5))){
var inst_27579 = (state_27615[(7)]);
var inst_27588 = (state_27615[(11)]);
var inst_27583 = (state_27615[(9)]);
var inst_27580 = (state_27615[(8)]);
var inst_27587 = (inst_27579[inst_27580] = inst_27583);
var inst_27588__$1 = (inst_27580 + (1));
var inst_27589 = (inst_27588__$1 < n);
var state_27615__$1 = (function (){var statearr_27629 = state_27615;
(statearr_27629[(12)] = inst_27587);

(statearr_27629[(11)] = inst_27588__$1);

return statearr_27629;
})();
if(cljs.core.truth_(inst_27589)){
var statearr_27630_27655 = state_27615__$1;
(statearr_27630_27655[(1)] = (8));

} else {
var statearr_27631_27656 = state_27615__$1;
(statearr_27631_27656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (14))){
var inst_27608 = (state_27615[(2)]);
var inst_27609 = cljs.core.async.close_BANG_.call(null,out);
var state_27615__$1 = (function (){var statearr_27633 = state_27615;
(statearr_27633[(13)] = inst_27608);

return statearr_27633;
})();
var statearr_27634_27657 = state_27615__$1;
(statearr_27634_27657[(2)] = inst_27609);

(statearr_27634_27657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (10))){
var inst_27599 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27635_27658 = state_27615__$1;
(statearr_27635_27658[(2)] = inst_27599);

(statearr_27635_27658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (8))){
var inst_27579 = (state_27615[(7)]);
var inst_27588 = (state_27615[(11)]);
var tmp27632 = inst_27579;
var inst_27579__$1 = tmp27632;
var inst_27580 = inst_27588;
var state_27615__$1 = (function (){var statearr_27636 = state_27615;
(statearr_27636[(7)] = inst_27579__$1);

(statearr_27636[(8)] = inst_27580);

return statearr_27636;
})();
var statearr_27637_27659 = state_27615__$1;
(statearr_27637_27659[(2)] = null);

(statearr_27637_27659[(1)] = (2));


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
});})(c__19828__auto___27645,out))
;
return ((function (switch__19772__auto__,c__19828__auto___27645,out){
return (function() {
var cljs$core$async$partition_$_state_machine__19773__auto__ = null;
var cljs$core$async$partition_$_state_machine__19773__auto____0 = (function (){
var statearr_27641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27641[(0)] = cljs$core$async$partition_$_state_machine__19773__auto__);

(statearr_27641[(1)] = (1));

return statearr_27641;
});
var cljs$core$async$partition_$_state_machine__19773__auto____1 = (function (state_27615){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_27615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e27642){if((e27642 instanceof Object)){
var ex__19776__auto__ = e27642;
var statearr_27643_27660 = state_27615;
(statearr_27643_27660[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27661 = state_27615;
state_27615 = G__27661;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__19773__auto__ = function(state_27615){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__19773__auto____1.call(this,state_27615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__19773__auto____0;
cljs$core$async$partition_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__19773__auto____1;
return cljs$core$async$partition_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___27645,out))
})();
var state__19830__auto__ = (function (){var statearr_27644 = f__19829__auto__.call(null);
(statearr_27644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___27645);

return statearr_27644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___27645,out))
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
var c__19828__auto___27804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___27804,out){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___27804,out){
return (function (state_27774){
var state_val_27775 = (state_27774[(1)]);
if((state_val_27775 === (7))){
var inst_27770 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27776_27805 = state_27774__$1;
(statearr_27776_27805[(2)] = inst_27770);

(statearr_27776_27805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (1))){
var inst_27733 = [];
var inst_27734 = inst_27733;
var inst_27735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27774__$1 = (function (){var statearr_27777 = state_27774;
(statearr_27777[(7)] = inst_27734);

(statearr_27777[(8)] = inst_27735);

return statearr_27777;
})();
var statearr_27778_27806 = state_27774__$1;
(statearr_27778_27806[(2)] = null);

(statearr_27778_27806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (4))){
var inst_27738 = (state_27774[(9)]);
var inst_27738__$1 = (state_27774[(2)]);
var inst_27739 = (inst_27738__$1 == null);
var inst_27740 = cljs.core.not.call(null,inst_27739);
var state_27774__$1 = (function (){var statearr_27779 = state_27774;
(statearr_27779[(9)] = inst_27738__$1);

return statearr_27779;
})();
if(inst_27740){
var statearr_27780_27807 = state_27774__$1;
(statearr_27780_27807[(1)] = (5));

} else {
var statearr_27781_27808 = state_27774__$1;
(statearr_27781_27808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (15))){
var inst_27764 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27782_27809 = state_27774__$1;
(statearr_27782_27809[(2)] = inst_27764);

(statearr_27782_27809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (13))){
var state_27774__$1 = state_27774;
var statearr_27783_27810 = state_27774__$1;
(statearr_27783_27810[(2)] = null);

(statearr_27783_27810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (6))){
var inst_27734 = (state_27774[(7)]);
var inst_27759 = inst_27734.length;
var inst_27760 = (inst_27759 > (0));
var state_27774__$1 = state_27774;
if(cljs.core.truth_(inst_27760)){
var statearr_27784_27811 = state_27774__$1;
(statearr_27784_27811[(1)] = (12));

} else {
var statearr_27785_27812 = state_27774__$1;
(statearr_27785_27812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (3))){
var inst_27772 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27774__$1,inst_27772);
} else {
if((state_val_27775 === (12))){
var inst_27734 = (state_27774[(7)]);
var inst_27762 = cljs.core.vec.call(null,inst_27734);
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27774__$1,(15),out,inst_27762);
} else {
if((state_val_27775 === (2))){
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27774__$1,(4),ch);
} else {
if((state_val_27775 === (11))){
var inst_27738 = (state_27774[(9)]);
var inst_27742 = (state_27774[(10)]);
var inst_27752 = (state_27774[(2)]);
var inst_27753 = [];
var inst_27754 = inst_27753.push(inst_27738);
var inst_27734 = inst_27753;
var inst_27735 = inst_27742;
var state_27774__$1 = (function (){var statearr_27786 = state_27774;
(statearr_27786[(7)] = inst_27734);

(statearr_27786[(8)] = inst_27735);

(statearr_27786[(11)] = inst_27754);

(statearr_27786[(12)] = inst_27752);

return statearr_27786;
})();
var statearr_27787_27813 = state_27774__$1;
(statearr_27787_27813[(2)] = null);

(statearr_27787_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (9))){
var inst_27734 = (state_27774[(7)]);
var inst_27750 = cljs.core.vec.call(null,inst_27734);
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27774__$1,(11),out,inst_27750);
} else {
if((state_val_27775 === (5))){
var inst_27738 = (state_27774[(9)]);
var inst_27735 = (state_27774[(8)]);
var inst_27742 = (state_27774[(10)]);
var inst_27742__$1 = f.call(null,inst_27738);
var inst_27743 = cljs.core._EQ_.call(null,inst_27742__$1,inst_27735);
var inst_27744 = cljs.core.keyword_identical_QMARK_.call(null,inst_27735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27745 = (inst_27743) || (inst_27744);
var state_27774__$1 = (function (){var statearr_27788 = state_27774;
(statearr_27788[(10)] = inst_27742__$1);

return statearr_27788;
})();
if(cljs.core.truth_(inst_27745)){
var statearr_27789_27814 = state_27774__$1;
(statearr_27789_27814[(1)] = (8));

} else {
var statearr_27790_27815 = state_27774__$1;
(statearr_27790_27815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (14))){
var inst_27767 = (state_27774[(2)]);
var inst_27768 = cljs.core.async.close_BANG_.call(null,out);
var state_27774__$1 = (function (){var statearr_27792 = state_27774;
(statearr_27792[(13)] = inst_27767);

return statearr_27792;
})();
var statearr_27793_27816 = state_27774__$1;
(statearr_27793_27816[(2)] = inst_27768);

(statearr_27793_27816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (10))){
var inst_27757 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27794_27817 = state_27774__$1;
(statearr_27794_27817[(2)] = inst_27757);

(statearr_27794_27817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (8))){
var inst_27734 = (state_27774[(7)]);
var inst_27738 = (state_27774[(9)]);
var inst_27742 = (state_27774[(10)]);
var inst_27747 = inst_27734.push(inst_27738);
var tmp27791 = inst_27734;
var inst_27734__$1 = tmp27791;
var inst_27735 = inst_27742;
var state_27774__$1 = (function (){var statearr_27795 = state_27774;
(statearr_27795[(7)] = inst_27734__$1);

(statearr_27795[(8)] = inst_27735);

(statearr_27795[(14)] = inst_27747);

return statearr_27795;
})();
var statearr_27796_27818 = state_27774__$1;
(statearr_27796_27818[(2)] = null);

(statearr_27796_27818[(1)] = (2));


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
});})(c__19828__auto___27804,out))
;
return ((function (switch__19772__auto__,c__19828__auto___27804,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__19773__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__19773__auto____0 = (function (){
var statearr_27800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27800[(0)] = cljs$core$async$partition_by_$_state_machine__19773__auto__);

(statearr_27800[(1)] = (1));

return statearr_27800;
});
var cljs$core$async$partition_by_$_state_machine__19773__auto____1 = (function (state_27774){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_27774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e27801){if((e27801 instanceof Object)){
var ex__19776__auto__ = e27801;
var statearr_27802_27819 = state_27774;
(statearr_27802_27819[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27820 = state_27774;
state_27774 = G__27820;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__19773__auto__ = function(state_27774){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__19773__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__19773__auto____1.call(this,state_27774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__19773__auto____0;
cljs$core$async$partition_by_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__19773__auto____1;
return cljs$core$async$partition_by_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___27804,out))
})();
var state__19830__auto__ = (function (){var statearr_27803 = f__19829__auto__.call(null);
(statearr_27803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___27804);

return statearr_27803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___27804,out))
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