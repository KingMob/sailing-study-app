// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
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
var seq__31176_31180 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31177_31181 = null;
var count__31178_31182 = (0);
var i__31179_31183 = (0);
while(true){
if((i__31179_31183 < count__31178_31182)){
var f_31184 = cljs.core._nth.call(null,chunk__31177_31181,i__31179_31183);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31184);

var G__31185 = seq__31176_31180;
var G__31186 = chunk__31177_31181;
var G__31187 = count__31178_31182;
var G__31188 = (i__31179_31183 + (1));
seq__31176_31180 = G__31185;
chunk__31177_31181 = G__31186;
count__31178_31182 = G__31187;
i__31179_31183 = G__31188;
continue;
} else {
var temp__4126__auto___31189 = cljs.core.seq.call(null,seq__31176_31180);
if(temp__4126__auto___31189){
var seq__31176_31190__$1 = temp__4126__auto___31189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31176_31190__$1)){
var c__14115__auto___31191 = cljs.core.chunk_first.call(null,seq__31176_31190__$1);
var G__31192 = cljs.core.chunk_rest.call(null,seq__31176_31190__$1);
var G__31193 = c__14115__auto___31191;
var G__31194 = cljs.core.count.call(null,c__14115__auto___31191);
var G__31195 = (0);
seq__31176_31180 = G__31192;
chunk__31177_31181 = G__31193;
count__31178_31182 = G__31194;
i__31179_31183 = G__31195;
continue;
} else {
var f_31196 = cljs.core.first.call(null,seq__31176_31190__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31196);

var G__31197 = cljs.core.next.call(null,seq__31176_31190__$1);
var G__31198 = null;
var G__31199 = (0);
var G__31200 = (0);
seq__31176_31180 = G__31197;
chunk__31177_31181 = G__31198;
count__31178_31182 = G__31199;
i__31179_31183 = G__31200;
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