// Compiled by ClojureScript 0.0-3149 {:elide-asserts false}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__24722 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__24722,(0),null);
var parts = cljs.core.nthnext.call(null,vec__24722,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__24724__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__17704__auto___24725 = self__.p;
if(cljs.core.truth_(or__17704__auto___24725)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__24724 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__24726__i = 0, G__24726__a = new Array(arguments.length -  1);
while (G__24726__i < G__24726__a.length) {G__24726__a[G__24726__i] = arguments[G__24726__i + 1]; ++G__24726__i;}
  a = new cljs.core.IndexedSeq(G__24726__a,0);
} 
return G__24724__delegate.call(this,self__,a);};
G__24724.cljs$lang$maxFixedArity = 1;
G__24724.cljs$lang$applyTo = (function (arglist__24727){
var self__ = cljs.core.first(arglist__24727);
var a = cljs.core.rest(arglist__24727);
return G__24724__delegate(self__,a);
});
G__24724.cljs$core$IFn$_invoke$arity$variadic = G__24724__delegate;
return G__24724;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args24723){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24723)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__24728__delegate = function (a){
var _ = this;
var or__17704__auto___24729 = self__.p;
if(cljs.core.truth_(or__17704__auto___24729)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__24728 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__24730__i = 0, G__24730__a = new Array(arguments.length -  0);
while (G__24730__i < G__24730__a.length) {G__24730__a[G__24730__i] = arguments[G__24730__i + 0]; ++G__24730__i;}
  a = new cljs.core.IndexedSeq(G__24730__a,0);
} 
return G__24728__delegate.call(this,a);};
G__24728.cljs$lang$maxFixedArity = 0;
G__24728.cljs$lang$applyTo = (function (arglist__24731){
var a = cljs.core.seq(arglist__24731);
return G__24728__delegate(a);
});
G__24728.cljs$core$IFn$_invoke$arity$variadic = G__24728__delegate;
return G__24728;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e24733){if((e24733 instanceof Object)){
var e = e24733;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e24733;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_24738 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_24738){
return (function (){
var _STAR_always_update_STAR_24739 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24739;
}});})(_STAR_always_update_STAR_24738))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24738;
}}catch (e24737){if((e24737 instanceof Object)){
var e = e24737;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e24737;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__24744_24748 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__24745_24749 = null;
var count__24746_24750 = (0);
var i__24747_24751 = (0);
while(true){
if((i__24747_24751 < count__24746_24750)){
var v_24752 = cljs.core._nth.call(null,chunk__24745_24749,i__24747_24751);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_24752);

var G__24753 = seq__24744_24748;
var G__24754 = chunk__24745_24749;
var G__24755 = count__24746_24750;
var G__24756 = (i__24747_24751 + (1));
seq__24744_24748 = G__24753;
chunk__24745_24749 = G__24754;
count__24746_24750 = G__24755;
i__24747_24751 = G__24756;
continue;
} else {
var temp__4126__auto___24757 = cljs.core.seq.call(null,seq__24744_24748);
if(temp__4126__auto___24757){
var seq__24744_24758__$1 = temp__4126__auto___24757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24744_24758__$1)){
var c__18489__auto___24759 = cljs.core.chunk_first.call(null,seq__24744_24758__$1);
var G__24760 = cljs.core.chunk_rest.call(null,seq__24744_24758__$1);
var G__24761 = c__18489__auto___24759;
var G__24762 = cljs.core.count.call(null,c__18489__auto___24759);
var G__24763 = (0);
seq__24744_24748 = G__24760;
chunk__24745_24749 = G__24761;
count__24746_24750 = G__24762;
i__24747_24751 = G__24763;
continue;
} else {
var v_24764 = cljs.core.first.call(null,seq__24744_24758__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_24764);

var G__24765 = cljs.core.next.call(null,seq__24744_24758__$1);
var G__24766 = null;
var G__24767 = (0);
var G__24768 = (0);
seq__24744_24748 = G__24765;
chunk__24745_24749 = G__24766;
count__24746_24750 = G__24767;
i__24747_24751 = G__24768;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map