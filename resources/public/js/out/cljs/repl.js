// Compiled by ClojureScript 0.0-2816 {:elide-asserts false}
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
var seq__31027_31031 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31028_31032 = null;
var count__31029_31033 = (0);
var i__31030_31034 = (0);
while(true){
if((i__31030_31034 < count__31029_31033)){
var f_31035 = cljs.core._nth.call(null,chunk__31028_31032,i__31030_31034);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31035);

var G__31036 = seq__31027_31031;
var G__31037 = chunk__31028_31032;
var G__31038 = count__31029_31033;
var G__31039 = (i__31030_31034 + (1));
seq__31027_31031 = G__31036;
chunk__31028_31032 = G__31037;
count__31029_31033 = G__31038;
i__31030_31034 = G__31039;
continue;
} else {
var temp__4126__auto___31040 = cljs.core.seq.call(null,seq__31027_31031);
if(temp__4126__auto___31040){
var seq__31027_31041__$1 = temp__4126__auto___31040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31027_31041__$1)){
var c__14018__auto___31042 = cljs.core.chunk_first.call(null,seq__31027_31041__$1);
var G__31043 = cljs.core.chunk_rest.call(null,seq__31027_31041__$1);
var G__31044 = c__14018__auto___31042;
var G__31045 = cljs.core.count.call(null,c__14018__auto___31042);
var G__31046 = (0);
seq__31027_31031 = G__31043;
chunk__31028_31032 = G__31044;
count__31029_31033 = G__31045;
i__31030_31034 = G__31046;
continue;
} else {
var f_31047 = cljs.core.first.call(null,seq__31027_31041__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31047);

var G__31048 = cljs.core.next.call(null,seq__31027_31041__$1);
var G__31049 = null;
var G__31050 = (0);
var G__31051 = (0);
seq__31027_31031 = G__31048;
chunk__31028_31032 = G__31049;
count__31029_31033 = G__31050;
i__31030_31034 = G__31051;
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