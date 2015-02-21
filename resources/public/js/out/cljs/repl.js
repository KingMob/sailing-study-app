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
var seq__31177_31181 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31178_31182 = null;
var count__31179_31183 = (0);
var i__31180_31184 = (0);
while(true){
if((i__31180_31184 < count__31179_31183)){
var f_31185 = cljs.core._nth.call(null,chunk__31178_31182,i__31180_31184);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31185);

var G__31186 = seq__31177_31181;
var G__31187 = chunk__31178_31182;
var G__31188 = count__31179_31183;
var G__31189 = (i__31180_31184 + (1));
seq__31177_31181 = G__31186;
chunk__31178_31182 = G__31187;
count__31179_31183 = G__31188;
i__31180_31184 = G__31189;
continue;
} else {
var temp__4126__auto___31190 = cljs.core.seq.call(null,seq__31177_31181);
if(temp__4126__auto___31190){
var seq__31177_31191__$1 = temp__4126__auto___31190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31177_31191__$1)){
var c__14115__auto___31192 = cljs.core.chunk_first.call(null,seq__31177_31191__$1);
var G__31193 = cljs.core.chunk_rest.call(null,seq__31177_31191__$1);
var G__31194 = c__14115__auto___31192;
var G__31195 = cljs.core.count.call(null,c__14115__auto___31192);
var G__31196 = (0);
seq__31177_31181 = G__31193;
chunk__31178_31182 = G__31194;
count__31179_31183 = G__31195;
i__31180_31184 = G__31196;
continue;
} else {
var f_31197 = cljs.core.first.call(null,seq__31177_31191__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31197);

var G__31198 = cljs.core.next.call(null,seq__31177_31191__$1);
var G__31199 = null;
var G__31200 = (0);
var G__31201 = (0);
seq__31177_31181 = G__31198;
chunk__31178_31182 = G__31199;
count__31179_31183 = G__31200;
i__31180_31184 = G__31201;
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