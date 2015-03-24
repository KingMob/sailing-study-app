// Compiled by ClojureScript 0.0-3148 {:elide-asserts false}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29018_29030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29019_29031 = null;
var count__29020_29032 = (0);
var i__29021_29033 = (0);
while(true){
if((i__29021_29033 < count__29020_29032)){
var f_29034 = cljs.core._nth.call(null,chunk__29019_29031,i__29021_29033);
cljs.core.println.call(null,"  ",f_29034);

var G__29035 = seq__29018_29030;
var G__29036 = chunk__29019_29031;
var G__29037 = count__29020_29032;
var G__29038 = (i__29021_29033 + (1));
seq__29018_29030 = G__29035;
chunk__29019_29031 = G__29036;
count__29020_29032 = G__29037;
i__29021_29033 = G__29038;
continue;
} else {
var temp__4126__auto___29039 = cljs.core.seq.call(null,seq__29018_29030);
if(temp__4126__auto___29039){
var seq__29018_29040__$1 = temp__4126__auto___29039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29018_29040__$1)){
var c__18488__auto___29041 = cljs.core.chunk_first.call(null,seq__29018_29040__$1);
var G__29042 = cljs.core.chunk_rest.call(null,seq__29018_29040__$1);
var G__29043 = c__18488__auto___29041;
var G__29044 = cljs.core.count.call(null,c__18488__auto___29041);
var G__29045 = (0);
seq__29018_29030 = G__29042;
chunk__29019_29031 = G__29043;
count__29020_29032 = G__29044;
i__29021_29033 = G__29045;
continue;
} else {
var f_29046 = cljs.core.first.call(null,seq__29018_29040__$1);
cljs.core.println.call(null,"  ",f_29046);

var G__29047 = cljs.core.next.call(null,seq__29018_29040__$1);
var G__29048 = null;
var G__29049 = (0);
var G__29050 = (0);
seq__29018_29030 = G__29047;
chunk__29019_29031 = G__29048;
count__29020_29032 = G__29049;
i__29021_29033 = G__29050;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17703__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29022 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29023 = null;
var count__29024 = (0);
var i__29025 = (0);
while(true){
if((i__29025 < count__29024)){
var vec__29026 = cljs.core._nth.call(null,chunk__29023,i__29025);
var name = cljs.core.nth.call(null,vec__29026,(0),null);
var map__29027 = cljs.core.nth.call(null,vec__29026,(1),null);
var map__29027__$1 = ((cljs.core.seq_QMARK_.call(null,map__29027))?cljs.core.apply.call(null,cljs.core.hash_map,map__29027):map__29027);
var arglists = cljs.core.get.call(null,map__29027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29051 = seq__29022;
var G__29052 = chunk__29023;
var G__29053 = count__29024;
var G__29054 = (i__29025 + (1));
seq__29022 = G__29051;
chunk__29023 = G__29052;
count__29024 = G__29053;
i__29025 = G__29054;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29022);
if(temp__4126__auto__){
var seq__29022__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29022__$1)){
var c__18488__auto__ = cljs.core.chunk_first.call(null,seq__29022__$1);
var G__29055 = cljs.core.chunk_rest.call(null,seq__29022__$1);
var G__29056 = c__18488__auto__;
var G__29057 = cljs.core.count.call(null,c__18488__auto__);
var G__29058 = (0);
seq__29022 = G__29055;
chunk__29023 = G__29056;
count__29024 = G__29057;
i__29025 = G__29058;
continue;
} else {
var vec__29028 = cljs.core.first.call(null,seq__29022__$1);
var name = cljs.core.nth.call(null,vec__29028,(0),null);
var map__29029 = cljs.core.nth.call(null,vec__29028,(1),null);
var map__29029__$1 = ((cljs.core.seq_QMARK_.call(null,map__29029))?cljs.core.apply.call(null,cljs.core.hash_map,map__29029):map__29029);
var arglists = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29059 = cljs.core.next.call(null,seq__29022__$1);
var G__29060 = null;
var G__29061 = (0);
var G__29062 = (0);
seq__29022 = G__29059;
chunk__29023 = G__29060;
count__29024 = G__29061;
i__29025 = G__29062;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map