// Compiled by ClojureScript 0.0-2843 {:elide-asserts false}
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
var seq__31102_31106 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31103_31107 = null;
var count__31104_31108 = (0);
var i__31105_31109 = (0);
while(true){
if((i__31105_31109 < count__31104_31108)){
var f_31110 = cljs.core._nth.call(null,chunk__31103_31107,i__31105_31109);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31110);

var G__31111 = seq__31102_31106;
var G__31112 = chunk__31103_31107;
var G__31113 = count__31104_31108;
var G__31114 = (i__31105_31109 + (1));
seq__31102_31106 = G__31111;
chunk__31103_31107 = G__31112;
count__31104_31108 = G__31113;
i__31105_31109 = G__31114;
continue;
} else {
var temp__4126__auto___31115 = cljs.core.seq.call(null,seq__31102_31106);
if(temp__4126__auto___31115){
var seq__31102_31116__$1 = temp__4126__auto___31115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31102_31116__$1)){
var c__14110__auto___31117 = cljs.core.chunk_first.call(null,seq__31102_31116__$1);
var G__31118 = cljs.core.chunk_rest.call(null,seq__31102_31116__$1);
var G__31119 = c__14110__auto___31117;
var G__31120 = cljs.core.count.call(null,c__14110__auto___31117);
var G__31121 = (0);
seq__31102_31106 = G__31118;
chunk__31103_31107 = G__31119;
count__31104_31108 = G__31120;
i__31105_31109 = G__31121;
continue;
} else {
var f_31122 = cljs.core.first.call(null,seq__31102_31116__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31122);

var G__31123 = cljs.core.next.call(null,seq__31102_31116__$1);
var G__31124 = null;
var G__31125 = (0);
var G__31126 = (0);
seq__31102_31106 = G__31123;
chunk__31103_31107 = G__31124;
count__31104_31108 = G__31125;
i__31105_31109 = G__31126;
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