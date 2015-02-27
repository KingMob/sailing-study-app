// Compiled by ClojureScript 0.0-2913 {:elide-asserts false}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31316_31320 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31317_31321 = null;
var count__31318_31322 = (0);
var i__31319_31323 = (0);
while(true){
if((i__31319_31323 < count__31318_31322)){
var f_31324 = cljs.core._nth.call(null,chunk__31317_31321,i__31319_31323);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31324);

var G__31325 = seq__31316_31320;
var G__31326 = chunk__31317_31321;
var G__31327 = count__31318_31322;
var G__31328 = (i__31319_31323 + (1));
seq__31316_31320 = G__31325;
chunk__31317_31321 = G__31326;
count__31318_31322 = G__31327;
i__31319_31323 = G__31328;
continue;
} else {
var temp__4126__auto___31329 = cljs.core.seq.call(null,seq__31316_31320);
if(temp__4126__auto___31329){
var seq__31316_31330__$1 = temp__4126__auto___31329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31316_31330__$1)){
var c__14252__auto___31331 = cljs.core.chunk_first.call(null,seq__31316_31330__$1);
var G__31332 = cljs.core.chunk_rest.call(null,seq__31316_31330__$1);
var G__31333 = c__14252__auto___31331;
var G__31334 = cljs.core.count.call(null,c__14252__auto___31331);
var G__31335 = (0);
seq__31316_31320 = G__31332;
chunk__31317_31321 = G__31333;
count__31318_31322 = G__31334;
i__31319_31323 = G__31335;
continue;
} else {
var f_31336 = cljs.core.first.call(null,seq__31316_31330__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31336);

var G__31337 = cljs.core.next.call(null,seq__31316_31330__$1);
var G__31338 = null;
var G__31339 = (0);
var G__31340 = (0);
seq__31316_31320 = G__31337;
chunk__31317_31321 = G__31338;
count__31318_31322 = G__31339;
i__31319_31323 = G__31340;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map