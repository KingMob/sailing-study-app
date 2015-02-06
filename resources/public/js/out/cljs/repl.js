// Compiled by ClojureScript 0.0-2760 {:elide-asserts false}
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
var seq__30714_30718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30715_30719 = null;
var count__30716_30720 = (0);
var i__30717_30721 = (0);
while(true){
if((i__30717_30721 < count__30716_30720)){
var f_30722 = cljs.core._nth.call(null,chunk__30715_30719,i__30717_30721);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30722);

var G__30723 = seq__30714_30718;
var G__30724 = chunk__30715_30719;
var G__30725 = count__30716_30720;
var G__30726 = (i__30717_30721 + (1));
seq__30714_30718 = G__30723;
chunk__30715_30719 = G__30724;
count__30716_30720 = G__30725;
i__30717_30721 = G__30726;
continue;
} else {
var temp__4126__auto___30727 = cljs.core.seq.call(null,seq__30714_30718);
if(temp__4126__auto___30727){
var seq__30714_30728__$1 = temp__4126__auto___30727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30714_30728__$1)){
var c__13963__auto___30729 = cljs.core.chunk_first.call(null,seq__30714_30728__$1);
var G__30730 = cljs.core.chunk_rest.call(null,seq__30714_30728__$1);
var G__30731 = c__13963__auto___30729;
var G__30732 = cljs.core.count.call(null,c__13963__auto___30729);
var G__30733 = (0);
seq__30714_30718 = G__30730;
chunk__30715_30719 = G__30731;
count__30716_30720 = G__30732;
i__30717_30721 = G__30733;
continue;
} else {
var f_30734 = cljs.core.first.call(null,seq__30714_30728__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30734);

var G__30735 = cljs.core.next.call(null,seq__30714_30728__$1);
var G__30736 = null;
var G__30737 = (0);
var G__30738 = (0);
seq__30714_30718 = G__30735;
chunk__30715_30719 = G__30736;
count__30716_30720 = G__30737;
i__30717_30721 = G__30738;
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