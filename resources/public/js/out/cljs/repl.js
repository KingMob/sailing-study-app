// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
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
var seq__28890_28894 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28891_28895 = null;
var count__28892_28896 = (0);
var i__28893_28897 = (0);
while(true){
if((i__28893_28897 < count__28892_28896)){
var f_28898 = cljs.core._nth.call(null,chunk__28891_28895,i__28893_28897);
cljs.core.println.call(null,"  ",f_28898);

var G__28899 = seq__28890_28894;
var G__28900 = chunk__28891_28895;
var G__28901 = count__28892_28896;
var G__28902 = (i__28893_28897 + (1));
seq__28890_28894 = G__28899;
chunk__28891_28895 = G__28900;
count__28892_28896 = G__28901;
i__28893_28897 = G__28902;
continue;
} else {
var temp__4126__auto___28903 = cljs.core.seq.call(null,seq__28890_28894);
if(temp__4126__auto___28903){
var seq__28890_28904__$1 = temp__4126__auto___28903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28890_28904__$1)){
var c__18381__auto___28905 = cljs.core.chunk_first.call(null,seq__28890_28904__$1);
var G__28906 = cljs.core.chunk_rest.call(null,seq__28890_28904__$1);
var G__28907 = c__18381__auto___28905;
var G__28908 = cljs.core.count.call(null,c__18381__auto___28905);
var G__28909 = (0);
seq__28890_28894 = G__28906;
chunk__28891_28895 = G__28907;
count__28892_28896 = G__28908;
i__28893_28897 = G__28909;
continue;
} else {
var f_28910 = cljs.core.first.call(null,seq__28890_28904__$1);
cljs.core.println.call(null,"  ",f_28910);

var G__28911 = cljs.core.next.call(null,seq__28890_28904__$1);
var G__28912 = null;
var G__28913 = (0);
var G__28914 = (0);
seq__28890_28894 = G__28911;
chunk__28891_28895 = G__28912;
count__28892_28896 = G__28913;
i__28893_28897 = G__28914;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
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