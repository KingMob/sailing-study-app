// Compiled by ClojureScript 0.0-3123 {:elide-asserts false}
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
var seq__28961_28973 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28962_28974 = null;
var count__28963_28975 = (0);
var i__28964_28976 = (0);
while(true){
if((i__28964_28976 < count__28963_28975)){
var f_28977 = cljs.core._nth.call(null,chunk__28962_28974,i__28964_28976);
cljs.core.println.call(null,"  ",f_28977);

var G__28978 = seq__28961_28973;
var G__28979 = chunk__28962_28974;
var G__28980 = count__28963_28975;
var G__28981 = (i__28964_28976 + (1));
seq__28961_28973 = G__28978;
chunk__28962_28974 = G__28979;
count__28963_28975 = G__28980;
i__28964_28976 = G__28981;
continue;
} else {
var temp__4126__auto___28982 = cljs.core.seq.call(null,seq__28961_28973);
if(temp__4126__auto___28982){
var seq__28961_28983__$1 = temp__4126__auto___28982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28961_28983__$1)){
var c__18431__auto___28984 = cljs.core.chunk_first.call(null,seq__28961_28983__$1);
var G__28985 = cljs.core.chunk_rest.call(null,seq__28961_28983__$1);
var G__28986 = c__18431__auto___28984;
var G__28987 = cljs.core.count.call(null,c__18431__auto___28984);
var G__28988 = (0);
seq__28961_28973 = G__28985;
chunk__28962_28974 = G__28986;
count__28963_28975 = G__28987;
i__28964_28976 = G__28988;
continue;
} else {
var f_28989 = cljs.core.first.call(null,seq__28961_28983__$1);
cljs.core.println.call(null,"  ",f_28989);

var G__28990 = cljs.core.next.call(null,seq__28961_28983__$1);
var G__28991 = null;
var G__28992 = (0);
var G__28993 = (0);
seq__28961_28973 = G__28990;
chunk__28962_28974 = G__28991;
count__28963_28975 = G__28992;
i__28964_28976 = G__28993;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17646__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
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
var seq__28965 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28966 = null;
var count__28967 = (0);
var i__28968 = (0);
while(true){
if((i__28968 < count__28967)){
var vec__28969 = cljs.core._nth.call(null,chunk__28966,i__28968);
var name = cljs.core.nth.call(null,vec__28969,(0),null);
var map__28970 = cljs.core.nth.call(null,vec__28969,(1),null);
var map__28970__$1 = ((cljs.core.seq_QMARK_.call(null,map__28970))?cljs.core.apply.call(null,cljs.core.hash_map,map__28970):map__28970);
var arglists = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28994 = seq__28965;
var G__28995 = chunk__28966;
var G__28996 = count__28967;
var G__28997 = (i__28968 + (1));
seq__28965 = G__28994;
chunk__28966 = G__28995;
count__28967 = G__28996;
i__28968 = G__28997;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28965);
if(temp__4126__auto__){
var seq__28965__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28965__$1)){
var c__18431__auto__ = cljs.core.chunk_first.call(null,seq__28965__$1);
var G__28998 = cljs.core.chunk_rest.call(null,seq__28965__$1);
var G__28999 = c__18431__auto__;
var G__29000 = cljs.core.count.call(null,c__18431__auto__);
var G__29001 = (0);
seq__28965 = G__28998;
chunk__28966 = G__28999;
count__28967 = G__29000;
i__28968 = G__29001;
continue;
} else {
var vec__28971 = cljs.core.first.call(null,seq__28965__$1);
var name = cljs.core.nth.call(null,vec__28971,(0),null);
var map__28972 = cljs.core.nth.call(null,vec__28971,(1),null);
var map__28972__$1 = ((cljs.core.seq_QMARK_.call(null,map__28972))?cljs.core.apply.call(null,cljs.core.hash_map,map__28972):map__28972);
var arglists = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29002 = cljs.core.next.call(null,seq__28965__$1);
var G__29003 = null;
var G__29004 = (0);
var G__29005 = (0);
seq__28965 = G__29002;
chunk__28966 = G__29003;
count__28967 = G__29004;
i__28968 = G__29005;
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