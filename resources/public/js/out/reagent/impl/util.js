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
var vec__19138 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__19138,(0),null);
var parts = cljs.core.nthnext.call(null,vec__19138,(1));
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
var G__19140__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__13176__auto___19141 = self__.p;
if(cljs.core.truth_(or__13176__auto___19141)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__19140 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__19142__i = 0, G__19142__a = new Array(arguments.length -  1);
while (G__19142__i < G__19142__a.length) {G__19142__a[G__19142__i] = arguments[G__19142__i + 1]; ++G__19142__i;}
  a = new cljs.core.IndexedSeq(G__19142__a,0);
} 
return G__19140__delegate.call(this,self__,a);};
G__19140.cljs$lang$maxFixedArity = 1;
G__19140.cljs$lang$applyTo = (function (arglist__19143){
var self__ = cljs.core.first(arglist__19143);
var a = cljs.core.rest(arglist__19143);
return G__19140__delegate(self__,a);
});
G__19140.cljs$core$IFn$_invoke$arity$variadic = G__19140__delegate;
return G__19140;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args19139){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19139)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__19144__delegate = function (a){
var _ = this;
var or__13176__auto___19145 = self__.p;
if(cljs.core.truth_(or__13176__auto___19145)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__19144 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__19146__i = 0, G__19146__a = new Array(arguments.length -  0);
while (G__19146__i < G__19146__a.length) {G__19146__a[G__19146__i] = arguments[G__19146__i + 0]; ++G__19146__i;}
  a = new cljs.core.IndexedSeq(G__19146__a,0);
} 
return G__19144__delegate.call(this,a);};
G__19144.cljs$lang$maxFixedArity = 0;
G__19144.cljs$lang$applyTo = (function (arglist__19147){
var a = cljs.core.seq(arglist__19147);
return G__19144__delegate(a);
});
G__19144.cljs$core$IFn$_invoke$arity$variadic = G__19144__delegate;
return G__19144;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){
var or__13176__auto__ = cljs.core.ifn_QMARK_.call(null,x);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var G__19151 = x;
if(G__19151){
var bit__13857__auto__ = (G__19151.cljs$lang$protocol_mask$partition1$ & (256));
if((bit__13857__auto__) || (G__19151.cljs$core$IMultiFn$)){
return true;
} else {
if((!G__19151.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__19151);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__19151);
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
var G__19153 = reagent.impl.util.get_react_node.call(null,cont);
var G__19153__$1 = (((G__19153 == null))?null:(G__19153["getAttribute"])(reagent.impl.util.react_id_name));
return G__19153__$1;
});
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
try{return (React["renderComponent"])(comp.call(null),container);
}catch (e19156){if((e19156 instanceof Object)){
var e = e19156;
try{(React["unmountComponentAtNode"])(container);
}catch (e19157){if((e19157 instanceof Object)){
var e_19158__$1 = e19157;
if(typeof console !== 'undefined'){
console.log(e_19158__$1);
} else {
}
} else {
throw e19157;

}
}
var temp__4126__auto___19159 = reagent.impl.util.get_react_node.call(null,container);
if(cljs.core.truth_(temp__4126__auto___19159)){
var n_19160 = temp__4126__auto___19159;
(n_19160["removeAttribute"])(reagent.impl.util.react_id_name);

(n_19160["innerHTML"] = "");
} else {
}

throw e;
} else {
throw e19156;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
return (React["renderComponent"])(comp.call(null),container,(function (){
var id_19161 = reagent.impl.util.get_root_id.call(null,container);
if((id_19161 == null)){
} else {
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,id_19161,((function (id_19161){
return (function (){
return reagent.impl.util.re_render_component.call(null,comp,container);
});})(id_19161))
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
var id_19162 = reagent.impl.util.get_root_id.call(null,container);
if((id_19162 == null)){
} else {
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,id_19162);
}

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var _STAR_always_update_STAR_19168_19173 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{var seq__19169_19174 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__19170_19175 = null;
var count__19171_19176 = (0);
var i__19172_19177 = (0);
while(true){
if((i__19172_19177 < count__19171_19176)){
var f_19178 = cljs.core._nth.call(null,chunk__19170_19175,i__19172_19177);
f_19178.call(null);

var G__19179 = seq__19169_19174;
var G__19180 = chunk__19170_19175;
var G__19181 = count__19171_19176;
var G__19182 = (i__19172_19177 + (1));
seq__19169_19174 = G__19179;
chunk__19170_19175 = G__19180;
count__19171_19176 = G__19181;
i__19172_19177 = G__19182;
continue;
} else {
var temp__4126__auto___19183 = cljs.core.seq.call(null,seq__19169_19174);
if(temp__4126__auto___19183){
var seq__19169_19184__$1 = temp__4126__auto___19183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19169_19184__$1)){
var c__13963__auto___19185 = cljs.core.chunk_first.call(null,seq__19169_19184__$1);
var G__19186 = cljs.core.chunk_rest.call(null,seq__19169_19184__$1);
var G__19187 = c__13963__auto___19185;
var G__19188 = cljs.core.count.call(null,c__13963__auto___19185);
var G__19189 = (0);
seq__19169_19174 = G__19186;
chunk__19170_19175 = G__19187;
count__19171_19176 = G__19188;
i__19172_19177 = G__19189;
continue;
} else {
var f_19190 = cljs.core.first.call(null,seq__19169_19184__$1);
f_19190.call(null);

var G__19191 = cljs.core.next.call(null,seq__19169_19184__$1);
var G__19192 = null;
var G__19193 = (0);
var G__19194 = (0);
seq__19169_19174 = G__19191;
chunk__19170_19175 = G__19192;
count__19171_19176 = G__19193;
i__19172_19177 = G__19194;
continue;
}
} else {
}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19168_19173;
}
return "Updated";
});
reagent.impl.util._not_found = (function (){var obj19196 = {};
return obj19196;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){
return (cljs.core.keyword_identical_QMARK_.call(null,x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type.call(null,x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){
var or__13176__auto__ = (x === y);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var and__13164__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__13164__auto__){
var and__13164__auto____$1 = cljs.core.map_QMARK_.call(null,y);
if(and__13164__auto____$1){
var and__13164__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));
if(and__13164__auto____$2){
return cljs.core.reduce_kv.call(null,((function (and__13164__auto____$2,and__13164__auto____$1,and__13164__auto__,or__13176__auto__){
return (function (res,k,v){
var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);
if(cljs.core.truth_((function (){var or__13176__auto____$1 = (v === yv);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
var or__13176__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,yv);
if(or__13176__auto____$2){
return or__13176__auto____$2;
} else {
var and__13164__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736));
if(and__13164__auto____$3){
return shallow_equal_maps.call(null,v,yv);
} else {
return and__13164__auto____$3;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__13164__auto____$2,and__13164__auto____$1,and__13164__auto__,or__13176__auto__))
,true,x);
} else {
return and__13164__auto____$2;
}
} else {
return and__13164__auto____$1;
}
} else {
return and__13164__auto__;
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

var or__13176__auto__ = (v1 === v2);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var and__13164__auto__ = (cljs.core.count.call(null,v1) === cljs.core.count.call(null,v2));
if(and__13164__auto__){
return cljs.core.reduce_kv.call(null,((function (and__13164__auto__,or__13176__auto__){
return (function (res,k,v){
var v_SINGLEQUOTE_ = cljs.core.nth.call(null,v2,k);
if(cljs.core.truth_((function (){var or__13176__auto____$1 = (v === v_SINGLEQUOTE_);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
var or__13176__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,v_SINGLEQUOTE_);
if(or__13176__auto____$2){
return or__13176__auto____$2;
} else {
var and__13164__auto____$1 = cljs.core.map_QMARK_.call(null,v);
if(and__13164__auto____$1){
return reagent.impl.util.shallow_equal_maps.call(null,v,v_SINGLEQUOTE_);
} else {
return and__13164__auto____$1;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__13164__auto__,or__13176__auto__))
,true,v1);
} else {
return and__13164__auto__;
}
}
});

//# sourceMappingURL=util.js.map