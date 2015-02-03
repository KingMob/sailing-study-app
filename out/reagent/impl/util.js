// Compiled by ClojureScript 0.0-2760 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
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
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__9568 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__9568,(0),null);
var parts = cljs.core.nthnext.call(null,vec__9568,(1));
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
var G__9570__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3252__auto___9571 = self__.p;
if(cljs.core.truth_(or__3252__auto___9571)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__9570 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__9572__i = 0, G__9572__a = new Array(arguments.length -  1);
while (G__9572__i < G__9572__a.length) {G__9572__a[G__9572__i] = arguments[G__9572__i + 1]; ++G__9572__i;}
  a = new cljs.core.IndexedSeq(G__9572__a,0);
} 
return G__9570__delegate.call(this,self__,a);};
G__9570.cljs$lang$maxFixedArity = 1;
G__9570.cljs$lang$applyTo = (function (arglist__9573){
var self__ = cljs.core.first(arglist__9573);
var a = cljs.core.rest(arglist__9573);
return G__9570__delegate(self__,a);
});
G__9570.cljs$core$IFn$_invoke$arity$variadic = G__9570__delegate;
return G__9570;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args9569){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9569)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9574__delegate = function (a){
var _ = this;
var or__3252__auto___9575 = self__.p;
if(cljs.core.truth_(or__3252__auto___9575)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__9574 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__9576__i = 0, G__9576__a = new Array(arguments.length -  0);
while (G__9576__i < G__9576__a.length) {G__9576__a[G__9576__i] = arguments[G__9576__i + 0]; ++G__9576__i;}
  a = new cljs.core.IndexedSeq(G__9576__a,0);
} 
return G__9574__delegate.call(this,a);};
G__9574.cljs$lang$maxFixedArity = 0;
G__9574.cljs$lang$applyTo = (function (arglist__9577){
var a = cljs.core.seq(arglist__9577);
return G__9574__delegate(a);
});
G__9574.cljs$core$IFn$_invoke$arity$variadic = G__9574__delegate;
return G__9574;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){
var or__3252__auto__ = cljs.core.ifn_QMARK_.call(null,x);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var G__9581 = x;
if(G__9581){
var bit__3933__auto__ = (G__9581.cljs$lang$protocol_mask$partition1$ & (256));
if((bit__3933__auto__) || (G__9581.cljs$core$IMultiFn$)){
return true;
} else {
if((!G__9581.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__9581);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__9581);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){
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
reagent.impl.util.merge_style = (function merge_style(p1,p2){
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
reagent.impl.util.merge_props = (function merge_props(p1,p2){
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
reagent.impl.util.doc_node_type = (9);
reagent.impl.util.react_id_name = "data-reactid";
reagent.impl.util.get_react_node = (function get_react_node(cont){
if((cont == null)){
return null;
} else {
if((reagent.impl.util.doc_node_type === (cont["nodeType"]))){
return (cont["documentElement"]);
} else {
return (cont["firstChild"]);
}
}
});
reagent.impl.util.get_root_id = (function get_root_id(cont){
var G__9583 = reagent.impl.util.get_react_node.call(null,cont);
var G__9583__$1 = (((G__9583 == null))?null:(G__9583["getAttribute"])(reagent.impl.util.react_id_name));
return G__9583__$1;
});
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
try{return (React["renderComponent"])(comp.call(null),container);
}catch (e9586){if((e9586 instanceof Object)){
var e = e9586;
try{(React["unmountComponentAtNode"])(container);
}catch (e9587){if((e9587 instanceof Object)){
var e_9588__$1 = e9587;
if(typeof console !== 'undefined'){
console.log(e_9588__$1);
} else {
}
} else {
throw e9587;

}
}
var temp__4126__auto___9589 = reagent.impl.util.get_react_node.call(null,container);
if(cljs.core.truth_(temp__4126__auto___9589)){
var n_9590 = temp__4126__auto___9589;
(n_9590["removeAttribute"])(reagent.impl.util.react_id_name);

(n_9590["innerHTML"] = "");
} else {
}

throw e;
} else {
throw e9586;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
return (React["renderComponent"])(comp.call(null),container,(function (){
var id_9591 = reagent.impl.util.get_root_id.call(null,container);
if((id_9591 == null)){
} else {
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,id_9591,((function (id_9591){
return (function (){
return reagent.impl.util.re_render_component.call(null,comp,container);
});})(id_9591))
);
}

if((callback == null)){
return null;
} else {
return callback.call(null);
}
}));
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
var id_9592 = reagent.impl.util.get_root_id.call(null,container);
if((id_9592 == null)){
} else {
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,id_9592);
}

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var _STAR_always_update_STAR_9598_9603 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{var seq__9599_9604 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__9600_9605 = null;
var count__9601_9606 = (0);
var i__9602_9607 = (0);
while(true){
if((i__9602_9607 < count__9601_9606)){
var f_9608 = cljs.core._nth.call(null,chunk__9600_9605,i__9602_9607);
f_9608.call(null);

var G__9609 = seq__9599_9604;
var G__9610 = chunk__9600_9605;
var G__9611 = count__9601_9606;
var G__9612 = (i__9602_9607 + (1));
seq__9599_9604 = G__9609;
chunk__9600_9605 = G__9610;
count__9601_9606 = G__9611;
i__9602_9607 = G__9612;
continue;
} else {
var temp__4126__auto___9613 = cljs.core.seq.call(null,seq__9599_9604);
if(temp__4126__auto___9613){
var seq__9599_9614__$1 = temp__4126__auto___9613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9599_9614__$1)){
var c__4039__auto___9615 = cljs.core.chunk_first.call(null,seq__9599_9614__$1);
var G__9616 = cljs.core.chunk_rest.call(null,seq__9599_9614__$1);
var G__9617 = c__4039__auto___9615;
var G__9618 = cljs.core.count.call(null,c__4039__auto___9615);
var G__9619 = (0);
seq__9599_9604 = G__9616;
chunk__9600_9605 = G__9617;
count__9601_9606 = G__9618;
i__9602_9607 = G__9619;
continue;
} else {
var f_9620 = cljs.core.first.call(null,seq__9599_9614__$1);
f_9620.call(null);

var G__9621 = cljs.core.next.call(null,seq__9599_9614__$1);
var G__9622 = null;
var G__9623 = (0);
var G__9624 = (0);
seq__9599_9604 = G__9621;
chunk__9600_9605 = G__9622;
count__9601_9606 = G__9623;
i__9602_9607 = G__9624;
continue;
}
} else {
}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9598_9603;
}
return "Updated";
});
reagent.impl.util._not_found = (function (){var obj9626 = {};
return obj9626;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){
return (cljs.core.keyword_identical_QMARK_.call(null,x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type.call(null,x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){
var or__3252__auto__ = (x === y);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var and__3240__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__3240__auto__){
var and__3240__auto____$1 = cljs.core.map_QMARK_.call(null,y);
if(and__3240__auto____$1){
var and__3240__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));
if(and__3240__auto____$2){
return cljs.core.reduce_kv.call(null,((function (and__3240__auto____$2,and__3240__auto____$1,and__3240__auto__,or__3252__auto__){
return (function (res,k,v){
var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);
if(cljs.core.truth_((function (){var or__3252__auto____$1 = (v === yv);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
var or__3252__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,yv);
if(or__3252__auto____$2){
return or__3252__auto____$2;
} else {
var and__3240__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736));
if(and__3240__auto____$3){
return shallow_equal_maps.call(null,v,yv);
} else {
return and__3240__auto____$3;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__3240__auto____$2,and__3240__auto____$1,and__3240__auto__,or__3252__auto__))
,true,x);
} else {
return and__3240__auto____$2;
}
} else {
return and__3240__auto____$1;
}
} else {
return and__3240__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){
if(cljs.core.vector_QMARK_.call(null,v1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v1","v1",-2141311508,null))))].join('')));
}

if(cljs.core.vector_QMARK_.call(null,v2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v2","v2",1875554983,null))))].join('')));
}

var or__3252__auto__ = (v1 === v2);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var and__3240__auto__ = (cljs.core.count.call(null,v1) === cljs.core.count.call(null,v2));
if(and__3240__auto__){
return cljs.core.reduce_kv.call(null,((function (and__3240__auto__,or__3252__auto__){
return (function (res,k,v){
var v_SINGLEQUOTE_ = cljs.core.nth.call(null,v2,k);
if(cljs.core.truth_((function (){var or__3252__auto____$1 = (v === v_SINGLEQUOTE_);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
var or__3252__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,v_SINGLEQUOTE_);
if(or__3252__auto____$2){
return or__3252__auto____$2;
} else {
var and__3240__auto____$1 = cljs.core.map_QMARK_.call(null,v);
if(and__3240__auto____$1){
return reagent.impl.util.shallow_equal_maps.call(null,v,v_SINGLEQUOTE_);
} else {
return and__3240__auto____$1;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__3240__auto__,or__3252__auto__))
,true,v1);
} else {
return and__3240__auto__;
}
}
});

//# sourceMappingURL=util.js.map