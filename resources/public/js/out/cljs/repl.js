// Compiled by ClojureScript 0.0-3149 {:elide-asserts false}
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
var seq__29021_29033 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29022_29034 = null;
var count__29023_29035 = (0);
var i__29024_29036 = (0);
while(true){
if((i__29024_29036 < count__29023_29035)){
var f_29037 = cljs.core._nth.call(null,chunk__29022_29034,i__29024_29036);
cljs.core.println.call(null,"  ",f_29037);

var G__29038 = seq__29021_29033;
var G__29039 = chunk__29022_29034;
var G__29040 = count__29023_29035;
var G__29041 = (i__29024_29036 + (1));
seq__29021_29033 = G__29038;
chunk__29022_29034 = G__29039;
count__29023_29035 = G__29040;
i__29024_29036 = G__29041;
continue;
} else {
var temp__4126__auto___29042 = cljs.core.seq.call(null,seq__29021_29033);
if(temp__4126__auto___29042){
var seq__29021_29043__$1 = temp__4126__auto___29042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29021_29043__$1)){
var c__18489__auto___29044 = cljs.core.chunk_first.call(null,seq__29021_29043__$1);
var G__29045 = cljs.core.chunk_rest.call(null,seq__29021_29043__$1);
var G__29046 = c__18489__auto___29044;
var G__29047 = cljs.core.count.call(null,c__18489__auto___29044);
var G__29048 = (0);
seq__29021_29033 = G__29045;
chunk__29022_29034 = G__29046;
count__29023_29035 = G__29047;
i__29024_29036 = G__29048;
continue;
} else {
var f_29049 = cljs.core.first.call(null,seq__29021_29043__$1);
cljs.core.println.call(null,"  ",f_29049);

var G__29050 = cljs.core.next.call(null,seq__29021_29043__$1);
var G__29051 = null;
var G__29052 = (0);
var G__29053 = (0);
seq__29021_29033 = G__29050;
chunk__29022_29034 = G__29051;
count__29023_29035 = G__29052;
i__29024_29036 = G__29053;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17704__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
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
var seq__29025 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29026 = null;
var count__29027 = (0);
var i__29028 = (0);
while(true){
if((i__29028 < count__29027)){
var vec__29029 = cljs.core._nth.call(null,chunk__29026,i__29028);
var name = cljs.core.nth.call(null,vec__29029,(0),null);
var map__29030 = cljs.core.nth.call(null,vec__29029,(1),null);
var map__29030__$1 = ((cljs.core.seq_QMARK_.call(null,map__29030))?cljs.core.apply.call(null,cljs.core.hash_map,map__29030):map__29030);
var arglists = cljs.core.get.call(null,map__29030__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29030__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29054 = seq__29025;
var G__29055 = chunk__29026;
var G__29056 = count__29027;
var G__29057 = (i__29028 + (1));
seq__29025 = G__29054;
chunk__29026 = G__29055;
count__29027 = G__29056;
i__29028 = G__29057;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29025);
if(temp__4126__auto__){
var seq__29025__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29025__$1)){
var c__18489__auto__ = cljs.core.chunk_first.call(null,seq__29025__$1);
var G__29058 = cljs.core.chunk_rest.call(null,seq__29025__$1);
var G__29059 = c__18489__auto__;
var G__29060 = cljs.core.count.call(null,c__18489__auto__);
var G__29061 = (0);
seq__29025 = G__29058;
chunk__29026 = G__29059;
count__29027 = G__29060;
i__29028 = G__29061;
continue;
} else {
var vec__29031 = cljs.core.first.call(null,seq__29025__$1);
var name = cljs.core.nth.call(null,vec__29031,(0),null);
var map__29032 = cljs.core.nth.call(null,vec__29031,(1),null);
var map__29032__$1 = ((cljs.core.seq_QMARK_.call(null,map__29032))?cljs.core.apply.call(null,cljs.core.hash_map,map__29032):map__29032);
var arglists = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29062 = cljs.core.next.call(null,seq__29025__$1);
var G__29063 = null;
var G__29064 = (0);
var G__29065 = (0);
seq__29025 = G__29062;
chunk__29026 = G__29063;
count__29027 = G__29064;
i__29028 = G__29065;
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