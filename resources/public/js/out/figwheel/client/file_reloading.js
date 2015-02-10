// Compiled by ClojureScript 0.0-2816 {:elide-asserts false}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31066_SHARP_,p2__31067_SHARP_){
var and__13219__auto__ = p1__31066_SHARP_;
if(cljs.core.truth_(and__13219__auto__)){
return p2__31067_SHARP_;
} else {
return and__13219__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__13231__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__13231__auto__){
return or__13231__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31069_SHARP_,p2__31068_SHARP_){
return [cljs.core.str(p2__31068_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__13231__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__13231__auto__){
return or__13231__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__13231__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__14128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14129__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14130__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14132__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14132__auto__,method_table__14128__auto__,prefer_table__14129__auto__,method_cache__14130__auto__,cached_hierarchy__14131__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31070){
var map__31071 = p__31070;
var map__31071__$1 = ((cljs.core.seq_QMARK_.call(null,map__31071))?cljs.core.apply.call(null,cljs.core.hash_map,map__31071):map__31071);
var file = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31072){
var map__31073 = p__31072;
var map__31073__$1 = ((cljs.core.seq_QMARK_.call(null,map__31073))?cljs.core.apply.call(null,cljs.core.hash_map,map__31073):map__31073);
var namespace = cljs.core.get.call(null,map__31073__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__14128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14129__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14130__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14132__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14132__auto__,method_table__14128__auto__,prefer_table__14129__auto__,method_cache__14130__auto__,cached_hierarchy__14131__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31074){if((e31074 instanceof Error)){
var e = e31074;
return false;
} else {
throw e31074;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__31075,callback){
var map__31077 = p__31075;
var map__31077__$1 = ((cljs.core.seq_QMARK_.call(null,map__31077))?cljs.core.apply.call(null,cljs.core.hash_map,map__31077):map__31077);
var file_msg = map__31077__$1;
var request_url = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31077,map__31077__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31077,map__31077__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__31078){
var map__31080 = p__31078;
var map__31080__$1 = ((cljs.core.seq_QMARK_.call(null,map__31080))?cljs.core.apply.call(null,cljs.core.hash_map,map__31080):map__31080);
var file_msg = map__31080__$1;
var meta_data = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__13231__auto__ = meta_data;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__13219__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__13219__auto__){
var or__13231__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__13231__auto____$1)){
return or__13231__auto____$1;
} else {
var and__13219__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__13219__auto____$1){
var or__13231__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__13231__auto____$2){
return or__13231__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__13219__auto____$1;
}
}
}
} else {
return and__13219__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__31081,callback){
var map__31083 = p__31081;
var map__31083__$1 = ((cljs.core.seq_QMARK_.call(null,map__31083))?cljs.core.apply.call(null,cljs.core.hash_map,map__31083):map__31083);
var file_msg = map__31083__$1;
var namespace = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__15889__auto___31170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___31170,out){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___31170,out){
return (function (state_31152){
var state_val_31153 = (state_31152[(1)]);
if((state_val_31153 === (7))){
var inst_31136 = (state_31152[(7)]);
var inst_31142 = (state_31152[(2)]);
var inst_31143 = cljs.core.async.put_BANG_.call(null,out,inst_31142);
var inst_31132 = inst_31136;
var state_31152__$1 = (function (){var statearr_31154 = state_31152;
(statearr_31154[(8)] = inst_31143);

(statearr_31154[(9)] = inst_31132);

return statearr_31154;
})();
var statearr_31155_31171 = state_31152__$1;
(statearr_31155_31171[(2)] = null);

(statearr_31155_31171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (6))){
var inst_31148 = (state_31152[(2)]);
var state_31152__$1 = state_31152;
var statearr_31156_31172 = state_31152__$1;
(statearr_31156_31172[(2)] = inst_31148);

(statearr_31156_31172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (5))){
var inst_31146 = cljs.core.async.close_BANG_.call(null,out);
var state_31152__$1 = state_31152;
var statearr_31157_31173 = state_31152__$1;
(statearr_31157_31173[(2)] = inst_31146);

(statearr_31157_31173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (4))){
var inst_31135 = (state_31152[(10)]);
var inst_31140 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31135);
var state_31152__$1 = state_31152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31152__$1,(7),inst_31140);
} else {
if((state_val_31153 === (3))){
var inst_31150 = (state_31152[(2)]);
var state_31152__$1 = state_31152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31152__$1,inst_31150);
} else {
if((state_val_31153 === (2))){
var inst_31135 = (state_31152[(10)]);
var inst_31132 = (state_31152[(9)]);
var inst_31135__$1 = cljs.core.nth.call(null,inst_31132,(0),null);
var inst_31136 = cljs.core.nthnext.call(null,inst_31132,(1));
var inst_31137 = (inst_31135__$1 == null);
var inst_31138 = cljs.core.not.call(null,inst_31137);
var state_31152__$1 = (function (){var statearr_31158 = state_31152;
(statearr_31158[(10)] = inst_31135__$1);

(statearr_31158[(7)] = inst_31136);

return statearr_31158;
})();
if(inst_31138){
var statearr_31159_31174 = state_31152__$1;
(statearr_31159_31174[(1)] = (4));

} else {
var statearr_31160_31175 = state_31152__$1;
(statearr_31160_31175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (1))){
var inst_31130 = cljs.core.nth.call(null,files,(0),null);
var inst_31131 = cljs.core.nthnext.call(null,files,(1));
var inst_31132 = files;
var state_31152__$1 = (function (){var statearr_31161 = state_31152;
(statearr_31161[(11)] = inst_31130);

(statearr_31161[(9)] = inst_31132);

(statearr_31161[(12)] = inst_31131);

return statearr_31161;
})();
var statearr_31162_31176 = state_31152__$1;
(statearr_31162_31176[(2)] = null);

(statearr_31162_31176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__15889__auto___31170,out))
;
return ((function (switch__15833__auto__,c__15889__auto___31170,out){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_31166 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31166[(0)] = state_machine__15834__auto__);

(statearr_31166[(1)] = (1));

return statearr_31166;
});
var state_machine__15834__auto____1 = (function (state_31152){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_31152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e31167){if((e31167 instanceof Object)){
var ex__15837__auto__ = e31167;
var statearr_31168_31177 = state_31152;
(statearr_31168_31177[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31178 = state_31152;
state_31152 = G__31178;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_31152){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_31152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___31170,out))
})();
var state__15891__auto__ = (function (){var statearr_31169 = f__15890__auto__.call(null);
(statearr_31169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___31170);

return statearr_31169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___31170,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31179,p__31180){
var map__31183 = p__31179;
var map__31183__$1 = ((cljs.core.seq_QMARK_.call(null,map__31183))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183):map__31183);
var opts = map__31183__$1;
var url_rewriter = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31184 = p__31180;
var map__31184__$1 = ((cljs.core.seq_QMARK_.call(null,map__31184))?cljs.core.apply.call(null,cljs.core.hash_map,map__31184):map__31184);
var file_msg = map__31184__$1;
var file = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__31185){
var map__31188 = p__31185;
var map__31188__$1 = ((cljs.core.seq_QMARK_.call(null,map__31188))?cljs.core.apply.call(null,cljs.core.hash_map,map__31188):map__31188);
var file = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__13219__auto__ = eval_body__$1;
if(cljs.core.truth_(and__13219__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__13219__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31189){var e = e31189;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31194,p__31195){
var map__31396 = p__31194;
var map__31396__$1 = ((cljs.core.seq_QMARK_.call(null,map__31396))?cljs.core.apply.call(null,cljs.core.hash_map,map__31396):map__31396);
var opts = map__31396__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31396__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31396__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31396__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31397 = p__31195;
var map__31397__$1 = ((cljs.core.seq_QMARK_.call(null,map__31397))?cljs.core.apply.call(null,cljs.core.hash_map,map__31397):map__31397);
var msg = map__31397__$1;
var files = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (7))){
var inst_31409 = (state_31521[(7)]);
var inst_31408 = (state_31521[(8)]);
var inst_31410 = (state_31521[(9)]);
var inst_31411 = (state_31521[(10)]);
var inst_31416 = cljs.core._nth.call(null,inst_31409,inst_31411);
var inst_31417 = figwheel.client.file_reloading.eval_body.call(null,inst_31416);
var inst_31418 = (inst_31411 + (1));
var tmp31523 = inst_31409;
var tmp31524 = inst_31408;
var tmp31525 = inst_31410;
var inst_31408__$1 = tmp31524;
var inst_31409__$1 = tmp31523;
var inst_31410__$1 = tmp31525;
var inst_31411__$1 = inst_31418;
var state_31521__$1 = (function (){var statearr_31526 = state_31521;
(statearr_31526[(7)] = inst_31409__$1);

(statearr_31526[(8)] = inst_31408__$1);

(statearr_31526[(9)] = inst_31410__$1);

(statearr_31526[(11)] = inst_31417);

(statearr_31526[(10)] = inst_31411__$1);

return statearr_31526;
})();
var statearr_31527_31596 = state_31521__$1;
(statearr_31527_31596[(2)] = null);

(statearr_31527_31596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (20))){
var inst_31453 = (state_31521[(12)]);
var inst_31458 = (state_31521[(13)]);
var inst_31454 = (state_31521[(14)]);
var inst_31457 = (state_31521[(15)]);
var inst_31460 = (state_31521[(16)]);
var inst_31463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31465 = (function (){var files_not_loaded = inst_31460;
var res = inst_31458;
var res_SINGLEQUOTE_ = inst_31457;
var files_SINGLEQUOTE_ = inst_31454;
var all_files = inst_31453;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31458,inst_31454,inst_31457,inst_31460,inst_31463,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (p__31464){
var map__31528 = p__31464;
var map__31528__$1 = ((cljs.core.seq_QMARK_.call(null,map__31528))?cljs.core.apply.call(null,cljs.core.hash_map,map__31528):map__31528);
var file = cljs.core.get.call(null,map__31528__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31458,inst_31454,inst_31457,inst_31460,inst_31463,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
})();
var inst_31466 = cljs.core.map.call(null,inst_31465,inst_31458);
var inst_31467 = cljs.core.pr_str.call(null,inst_31466);
var inst_31468 = figwheel.client.utils.log.call(null,inst_31467);
var inst_31469 = (function (){var files_not_loaded = inst_31460;
var res = inst_31458;
var res_SINGLEQUOTE_ = inst_31457;
var files_SINGLEQUOTE_ = inst_31454;
var all_files = inst_31453;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31458,inst_31454,inst_31457,inst_31460,inst_31463,inst_31465,inst_31466,inst_31467,inst_31468,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31458,inst_31454,inst_31457,inst_31460,inst_31463,inst_31465,inst_31466,inst_31467,inst_31468,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
})();
var inst_31470 = setTimeout(inst_31469,(10));
var state_31521__$1 = (function (){var statearr_31529 = state_31521;
(statearr_31529[(17)] = inst_31468);

(statearr_31529[(18)] = inst_31463);

return statearr_31529;
})();
var statearr_31530_31597 = state_31521__$1;
(statearr_31530_31597[(2)] = inst_31470);

(statearr_31530_31597[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (27))){
var inst_31480 = (state_31521[(19)]);
var state_31521__$1 = state_31521;
var statearr_31531_31598 = state_31521__$1;
(statearr_31531_31598[(2)] = inst_31480);

(statearr_31531_31598[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (1))){
var inst_31400 = (state_31521[(20)]);
var inst_31398 = before_jsload.call(null,files);
var inst_31399 = (function (){return ((function (inst_31400,inst_31398,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (p1__31190_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31190_SHARP_);
});
;})(inst_31400,inst_31398,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
})();
var inst_31400__$1 = cljs.core.filter.call(null,inst_31399,files);
var inst_31401 = cljs.core.not_empty.call(null,inst_31400__$1);
var state_31521__$1 = (function (){var statearr_31532 = state_31521;
(statearr_31532[(21)] = inst_31398);

(statearr_31532[(20)] = inst_31400__$1);

return statearr_31532;
})();
if(cljs.core.truth_(inst_31401)){
var statearr_31533_31599 = state_31521__$1;
(statearr_31533_31599[(1)] = (2));

} else {
var statearr_31534_31600 = state_31521__$1;
(statearr_31534_31600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (24))){
var state_31521__$1 = state_31521;
var statearr_31535_31601 = state_31521__$1;
(statearr_31535_31601[(2)] = null);

(statearr_31535_31601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (4))){
var inst_31445 = (state_31521[(2)]);
var inst_31446 = (function (){return ((function (inst_31445,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (p1__31191_SHARP_){
var and__13219__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31191_SHARP_);
if(cljs.core.truth_(and__13219__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31191_SHARP_));
} else {
return and__13219__auto__;
}
});
;})(inst_31445,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
})();
var inst_31447 = cljs.core.filter.call(null,inst_31446,files);
var state_31521__$1 = (function (){var statearr_31536 = state_31521;
(statearr_31536[(22)] = inst_31445);

(statearr_31536[(23)] = inst_31447);

return statearr_31536;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31537_31602 = state_31521__$1;
(statearr_31537_31602[(1)] = (16));

} else {
var statearr_31538_31603 = state_31521__$1;
(statearr_31538_31603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (15))){
var inst_31435 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31539_31604 = state_31521__$1;
(statearr_31539_31604[(2)] = inst_31435);

(statearr_31539_31604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (21))){
var state_31521__$1 = state_31521;
var statearr_31540_31605 = state_31521__$1;
(statearr_31540_31605[(2)] = null);

(statearr_31540_31605[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (31))){
var inst_31488 = (state_31521[(24)]);
var inst_31498 = (state_31521[(2)]);
var inst_31499 = cljs.core.not_empty.call(null,inst_31488);
var state_31521__$1 = (function (){var statearr_31541 = state_31521;
(statearr_31541[(25)] = inst_31498);

return statearr_31541;
})();
if(cljs.core.truth_(inst_31499)){
var statearr_31542_31606 = state_31521__$1;
(statearr_31542_31606[(1)] = (32));

} else {
var statearr_31543_31607 = state_31521__$1;
(statearr_31543_31607[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (32))){
var inst_31488 = (state_31521[(24)]);
var inst_31501 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31488);
var inst_31502 = cljs.core.pr_str.call(null,inst_31501);
var inst_31503 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31502)].join('');
var inst_31504 = figwheel.client.utils.log.call(null,inst_31503);
var state_31521__$1 = state_31521;
var statearr_31544_31608 = state_31521__$1;
(statearr_31544_31608[(2)] = inst_31504);

(statearr_31544_31608[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (33))){
var state_31521__$1 = state_31521;
var statearr_31545_31609 = state_31521__$1;
(statearr_31545_31609[(2)] = null);

(statearr_31545_31609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (13))){
var inst_31421 = (state_31521[(26)]);
var inst_31425 = cljs.core.chunk_first.call(null,inst_31421);
var inst_31426 = cljs.core.chunk_rest.call(null,inst_31421);
var inst_31427 = cljs.core.count.call(null,inst_31425);
var inst_31408 = inst_31426;
var inst_31409 = inst_31425;
var inst_31410 = inst_31427;
var inst_31411 = (0);
var state_31521__$1 = (function (){var statearr_31546 = state_31521;
(statearr_31546[(7)] = inst_31409);

(statearr_31546[(8)] = inst_31408);

(statearr_31546[(9)] = inst_31410);

(statearr_31546[(10)] = inst_31411);

return statearr_31546;
})();
var statearr_31547_31610 = state_31521__$1;
(statearr_31547_31610[(2)] = null);

(statearr_31547_31610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (22))){
var inst_31460 = (state_31521[(16)]);
var inst_31473 = (state_31521[(2)]);
var inst_31474 = cljs.core.not_empty.call(null,inst_31460);
var state_31521__$1 = (function (){var statearr_31548 = state_31521;
(statearr_31548[(27)] = inst_31473);

return statearr_31548;
})();
if(cljs.core.truth_(inst_31474)){
var statearr_31549_31611 = state_31521__$1;
(statearr_31549_31611[(1)] = (23));

} else {
var statearr_31550_31612 = state_31521__$1;
(statearr_31550_31612[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (36))){
var state_31521__$1 = state_31521;
var statearr_31551_31613 = state_31521__$1;
(statearr_31551_31613[(2)] = null);

(statearr_31551_31613[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (29))){
var inst_31489 = (state_31521[(28)]);
var inst_31492 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31489);
var inst_31493 = cljs.core.pr_str.call(null,inst_31492);
var inst_31494 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31493)].join('');
var inst_31495 = figwheel.client.utils.log.call(null,inst_31494);
var state_31521__$1 = state_31521;
var statearr_31552_31614 = state_31521__$1;
(statearr_31552_31614[(2)] = inst_31495);

(statearr_31552_31614[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (6))){
var inst_31442 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31553_31615 = state_31521__$1;
(statearr_31553_31615[(2)] = inst_31442);

(statearr_31553_31615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (28))){
var inst_31489 = (state_31521[(28)]);
var inst_31486 = (state_31521[(2)]);
var inst_31487 = cljs.core.get.call(null,inst_31486,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31488 = cljs.core.get.call(null,inst_31486,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31489__$1 = cljs.core.get.call(null,inst_31486,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31490 = cljs.core.not_empty.call(null,inst_31489__$1);
var state_31521__$1 = (function (){var statearr_31554 = state_31521;
(statearr_31554[(29)] = inst_31487);

(statearr_31554[(28)] = inst_31489__$1);

(statearr_31554[(24)] = inst_31488);

return statearr_31554;
})();
if(cljs.core.truth_(inst_31490)){
var statearr_31555_31616 = state_31521__$1;
(statearr_31555_31616[(1)] = (29));

} else {
var statearr_31556_31617 = state_31521__$1;
(statearr_31556_31617[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (25))){
var inst_31519 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31521__$1,inst_31519);
} else {
if((state_val_31522 === (34))){
var inst_31487 = (state_31521[(29)]);
var inst_31507 = (state_31521[(2)]);
var inst_31508 = cljs.core.not_empty.call(null,inst_31487);
var state_31521__$1 = (function (){var statearr_31557 = state_31521;
(statearr_31557[(30)] = inst_31507);

return statearr_31557;
})();
if(cljs.core.truth_(inst_31508)){
var statearr_31558_31618 = state_31521__$1;
(statearr_31558_31618[(1)] = (35));

} else {
var statearr_31559_31619 = state_31521__$1;
(statearr_31559_31619[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (17))){
var inst_31447 = (state_31521[(23)]);
var state_31521__$1 = state_31521;
var statearr_31560_31620 = state_31521__$1;
(statearr_31560_31620[(2)] = inst_31447);

(statearr_31560_31620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (3))){
var state_31521__$1 = state_31521;
var statearr_31561_31621 = state_31521__$1;
(statearr_31561_31621[(2)] = null);

(statearr_31561_31621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (12))){
var inst_31438 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31562_31622 = state_31521__$1;
(statearr_31562_31622[(2)] = inst_31438);

(statearr_31562_31622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (2))){
var inst_31400 = (state_31521[(20)]);
var inst_31407 = cljs.core.seq.call(null,inst_31400);
var inst_31408 = inst_31407;
var inst_31409 = null;
var inst_31410 = (0);
var inst_31411 = (0);
var state_31521__$1 = (function (){var statearr_31563 = state_31521;
(statearr_31563[(7)] = inst_31409);

(statearr_31563[(8)] = inst_31408);

(statearr_31563[(9)] = inst_31410);

(statearr_31563[(10)] = inst_31411);

return statearr_31563;
})();
var statearr_31564_31623 = state_31521__$1;
(statearr_31564_31623[(2)] = null);

(statearr_31564_31623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (23))){
var inst_31453 = (state_31521[(12)]);
var inst_31458 = (state_31521[(13)]);
var inst_31454 = (state_31521[(14)]);
var inst_31480 = (state_31521[(19)]);
var inst_31457 = (state_31521[(15)]);
var inst_31460 = (state_31521[(16)]);
var inst_31476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31479 = (function (){var files_not_loaded = inst_31460;
var res = inst_31458;
var res_SINGLEQUOTE_ = inst_31457;
var files_SINGLEQUOTE_ = inst_31454;
var all_files = inst_31453;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31458,inst_31454,inst_31480,inst_31457,inst_31460,inst_31476,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (p__31478){
var map__31565 = p__31478;
var map__31565__$1 = ((cljs.core.seq_QMARK_.call(null,map__31565))?cljs.core.apply.call(null,cljs.core.hash_map,map__31565):map__31565);
var meta_data = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31458,inst_31454,inst_31480,inst_31457,inst_31460,inst_31476,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
})();
var inst_31480__$1 = cljs.core.group_by.call(null,inst_31479,inst_31460);
var inst_31481 = cljs.core.seq_QMARK_.call(null,inst_31480__$1);
var state_31521__$1 = (function (){var statearr_31566 = state_31521;
(statearr_31566[(31)] = inst_31476);

(statearr_31566[(19)] = inst_31480__$1);

return statearr_31566;
})();
if(inst_31481){
var statearr_31567_31624 = state_31521__$1;
(statearr_31567_31624[(1)] = (26));

} else {
var statearr_31568_31625 = state_31521__$1;
(statearr_31568_31625[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (35))){
var inst_31487 = (state_31521[(29)]);
var inst_31510 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31487);
var inst_31511 = cljs.core.pr_str.call(null,inst_31510);
var inst_31512 = [cljs.core.str("not required: "),cljs.core.str(inst_31511)].join('');
var inst_31513 = figwheel.client.utils.log.call(null,inst_31512);
var state_31521__$1 = state_31521;
var statearr_31569_31626 = state_31521__$1;
(statearr_31569_31626[(2)] = inst_31513);

(statearr_31569_31626[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (19))){
var inst_31453 = (state_31521[(12)]);
var inst_31458 = (state_31521[(13)]);
var inst_31454 = (state_31521[(14)]);
var inst_31457 = (state_31521[(15)]);
var inst_31457__$1 = (state_31521[(2)]);
var inst_31458__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31457__$1);
var inst_31459 = (function (){var res = inst_31458__$1;
var res_SINGLEQUOTE_ = inst_31457__$1;
var files_SINGLEQUOTE_ = inst_31454;
var all_files = inst_31453;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31458,inst_31454,inst_31457,inst_31457__$1,inst_31458__$1,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (p1__31193_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31193_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31458,inst_31454,inst_31457,inst_31457__$1,inst_31458__$1,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
})();
var inst_31460 = cljs.core.filter.call(null,inst_31459,inst_31457__$1);
var inst_31461 = cljs.core.not_empty.call(null,inst_31458__$1);
var state_31521__$1 = (function (){var statearr_31570 = state_31521;
(statearr_31570[(13)] = inst_31458__$1);

(statearr_31570[(15)] = inst_31457__$1);

(statearr_31570[(16)] = inst_31460);

return statearr_31570;
})();
if(cljs.core.truth_(inst_31461)){
var statearr_31571_31627 = state_31521__$1;
(statearr_31571_31627[(1)] = (20));

} else {
var statearr_31572_31628 = state_31521__$1;
(statearr_31572_31628[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (11))){
var state_31521__$1 = state_31521;
var statearr_31573_31629 = state_31521__$1;
(statearr_31573_31629[(2)] = null);

(statearr_31573_31629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (9))){
var inst_31440 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31574_31630 = state_31521__$1;
(statearr_31574_31630[(2)] = inst_31440);

(statearr_31574_31630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (5))){
var inst_31410 = (state_31521[(9)]);
var inst_31411 = (state_31521[(10)]);
var inst_31413 = (inst_31411 < inst_31410);
var inst_31414 = inst_31413;
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31414)){
var statearr_31575_31631 = state_31521__$1;
(statearr_31575_31631[(1)] = (7));

} else {
var statearr_31576_31632 = state_31521__$1;
(statearr_31576_31632[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (14))){
var inst_31421 = (state_31521[(26)]);
var inst_31430 = cljs.core.first.call(null,inst_31421);
var inst_31431 = figwheel.client.file_reloading.eval_body.call(null,inst_31430);
var inst_31432 = cljs.core.next.call(null,inst_31421);
var inst_31408 = inst_31432;
var inst_31409 = null;
var inst_31410 = (0);
var inst_31411 = (0);
var state_31521__$1 = (function (){var statearr_31577 = state_31521;
(statearr_31577[(7)] = inst_31409);

(statearr_31577[(8)] = inst_31408);

(statearr_31577[(9)] = inst_31410);

(statearr_31577[(32)] = inst_31431);

(statearr_31577[(10)] = inst_31411);

return statearr_31577;
})();
var statearr_31578_31633 = state_31521__$1;
(statearr_31578_31633[(2)] = null);

(statearr_31578_31633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (26))){
var inst_31480 = (state_31521[(19)]);
var inst_31483 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31480);
var state_31521__$1 = state_31521;
var statearr_31579_31634 = state_31521__$1;
(statearr_31579_31634[(2)] = inst_31483);

(statearr_31579_31634[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (16))){
var inst_31447 = (state_31521[(23)]);
var inst_31449 = (function (){var all_files = inst_31447;
return ((function (all_files,inst_31447,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function (p1__31192_SHARP_){
return cljs.core.update_in.call(null,p1__31192_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31447,state_val_31522,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
})();
var inst_31450 = cljs.core.map.call(null,inst_31449,inst_31447);
var state_31521__$1 = state_31521;
var statearr_31580_31635 = state_31521__$1;
(statearr_31580_31635[(2)] = inst_31450);

(statearr_31580_31635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (30))){
var state_31521__$1 = state_31521;
var statearr_31581_31636 = state_31521__$1;
(statearr_31581_31636[(2)] = null);

(statearr_31581_31636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (10))){
var inst_31421 = (state_31521[(26)]);
var inst_31423 = cljs.core.chunked_seq_QMARK_.call(null,inst_31421);
var state_31521__$1 = state_31521;
if(inst_31423){
var statearr_31582_31637 = state_31521__$1;
(statearr_31582_31637[(1)] = (13));

} else {
var statearr_31583_31638 = state_31521__$1;
(statearr_31583_31638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (18))){
var inst_31453 = (state_31521[(12)]);
var inst_31454 = (state_31521[(14)]);
var inst_31453__$1 = (state_31521[(2)]);
var inst_31454__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31453__$1);
var inst_31455 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31454__$1);
var state_31521__$1 = (function (){var statearr_31584 = state_31521;
(statearr_31584[(12)] = inst_31453__$1);

(statearr_31584[(14)] = inst_31454__$1);

return statearr_31584;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31521__$1,(19),inst_31455);
} else {
if((state_val_31522 === (37))){
var inst_31516 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31585_31639 = state_31521__$1;
(statearr_31585_31639[(2)] = inst_31516);

(statearr_31585_31639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (8))){
var inst_31408 = (state_31521[(8)]);
var inst_31421 = (state_31521[(26)]);
var inst_31421__$1 = cljs.core.seq.call(null,inst_31408);
var state_31521__$1 = (function (){var statearr_31586 = state_31521;
(statearr_31586[(26)] = inst_31421__$1);

return statearr_31586;
})();
if(inst_31421__$1){
var statearr_31587_31640 = state_31521__$1;
(statearr_31587_31640[(1)] = (10));

} else {
var statearr_31588_31641 = state_31521__$1;
(statearr_31588_31641[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
;
return ((function (switch__15833__auto__,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_31592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31592[(0)] = state_machine__15834__auto__);

(statearr_31592[(1)] = (1));

return statearr_31592;
});
var state_machine__15834__auto____1 = (function (state_31521){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_31521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e31593){if((e31593 instanceof Object)){
var ex__15837__auto__ = e31593;
var statearr_31594_31642 = state_31521;
(statearr_31594_31642[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31643 = state_31521;
state_31521 = G__31643;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
})();
var state__15891__auto__ = (function (){var statearr_31595 = f__15890__auto__.call(null);
(statearr_31595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_31595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__,map__31396,map__31396__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31397,map__31397__$1,msg,files))
);

return c__15889__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31646,link){
var map__31648 = p__31646;
var map__31648__$1 = ((cljs.core.seq_QMARK_.call(null,map__31648))?cljs.core.apply.call(null,cljs.core.hash_map,map__31648):map__31648);
var file = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31648,map__31648__$1,file){
return (function (p1__31644_SHARP_,p2__31645_SHARP_){
if(cljs.core._EQ_.call(null,p1__31644_SHARP_,p2__31645_SHARP_)){
return p1__31644_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31648,map__31648__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31652){
var map__31653 = p__31652;
var map__31653__$1 = ((cljs.core.seq_QMARK_.call(null,map__31653))?cljs.core.apply.call(null,cljs.core.hash_map,map__31653):map__31653);
var current_url_length = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31649_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31649_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31654){
var map__31656 = p__31654;
var map__31656__$1 = ((cljs.core.seq_QMARK_.call(null,map__31656))?cljs.core.apply.call(null,cljs.core.hash_map,map__31656):map__31656);
var f_data = map__31656__$1;
var request_url = cljs.core.get.call(null,map__31656__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__13231__auto__ = request_url;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31657,files_msg){
var map__31679 = p__31657;
var map__31679__$1 = ((cljs.core.seq_QMARK_.call(null,map__31679))?cljs.core.apply.call(null,cljs.core.hash_map,map__31679):map__31679);
var opts = map__31679__$1;
var on_cssload = cljs.core.get.call(null,map__31679__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31680_31700 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31681_31701 = null;
var count__31682_31702 = (0);
var i__31683_31703 = (0);
while(true){
if((i__31683_31703 < count__31682_31702)){
var f_31704 = cljs.core._nth.call(null,chunk__31681_31701,i__31683_31703);
figwheel.client.file_reloading.reload_css_file.call(null,f_31704);

var G__31705 = seq__31680_31700;
var G__31706 = chunk__31681_31701;
var G__31707 = count__31682_31702;
var G__31708 = (i__31683_31703 + (1));
seq__31680_31700 = G__31705;
chunk__31681_31701 = G__31706;
count__31682_31702 = G__31707;
i__31683_31703 = G__31708;
continue;
} else {
var temp__4126__auto___31709 = cljs.core.seq.call(null,seq__31680_31700);
if(temp__4126__auto___31709){
var seq__31680_31710__$1 = temp__4126__auto___31709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31680_31710__$1)){
var c__14018__auto___31711 = cljs.core.chunk_first.call(null,seq__31680_31710__$1);
var G__31712 = cljs.core.chunk_rest.call(null,seq__31680_31710__$1);
var G__31713 = c__14018__auto___31711;
var G__31714 = cljs.core.count.call(null,c__14018__auto___31711);
var G__31715 = (0);
seq__31680_31700 = G__31712;
chunk__31681_31701 = G__31713;
count__31682_31702 = G__31714;
i__31683_31703 = G__31715;
continue;
} else {
var f_31716 = cljs.core.first.call(null,seq__31680_31710__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31716);

var G__31717 = cljs.core.next.call(null,seq__31680_31710__$1);
var G__31718 = null;
var G__31719 = (0);
var G__31720 = (0);
seq__31680_31700 = G__31717;
chunk__31681_31701 = G__31718;
count__31682_31702 = G__31719;
i__31683_31703 = G__31720;
continue;
}
} else {
}
}
break;
}

var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__,map__31679,map__31679__$1,opts,on_cssload){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__,map__31679,map__31679__$1,opts,on_cssload){
return (function (state_31690){
var state_val_31691 = (state_31690[(1)]);
if((state_val_31691 === (2))){
var inst_31686 = (state_31690[(2)]);
var inst_31687 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31688 = on_cssload.call(null,inst_31687);
var state_31690__$1 = (function (){var statearr_31692 = state_31690;
(statearr_31692[(7)] = inst_31686);

return statearr_31692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31690__$1,inst_31688);
} else {
if((state_val_31691 === (1))){
var inst_31684 = cljs.core.async.timeout.call(null,(100));
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(2),inst_31684);
} else {
return null;
}
}
});})(c__15889__auto__,map__31679,map__31679__$1,opts,on_cssload))
;
return ((function (switch__15833__auto__,c__15889__auto__,map__31679,map__31679__$1,opts,on_cssload){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_31696 = [null,null,null,null,null,null,null,null];
(statearr_31696[(0)] = state_machine__15834__auto__);

(statearr_31696[(1)] = (1));

return statearr_31696;
});
var state_machine__15834__auto____1 = (function (state_31690){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_31690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e31697){if((e31697 instanceof Object)){
var ex__15837__auto__ = e31697;
var statearr_31698_31721 = state_31690;
(statearr_31698_31721[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31722 = state_31690;
state_31690 = G__31722;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_31690){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_31690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__,map__31679,map__31679__$1,opts,on_cssload))
})();
var state__15891__auto__ = (function (){var statearr_31699 = f__15890__auto__.call(null);
(statearr_31699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_31699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__,map__31679,map__31679__$1,opts,on_cssload))
);

return c__15889__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map