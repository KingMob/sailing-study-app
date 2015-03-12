// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__28929_SHARP_,p2__28930_SHARP_){
var and__17582__auto__ = p1__28929_SHARP_;
if(cljs.core.truth_(and__17582__auto__)){
return p2__28930_SHARP_;
} else {
return and__17582__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17594__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17594__auto__){
return or__17594__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__28932_SHARP_,p2__28931_SHARP_){
return [cljs.core.str(p2__28931_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
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
if(cljs.core.truth_((function (){var or__17594__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17594__auto__){
return or__17594__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17594__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18495__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18495__auto__,method_table__18491__auto__,prefer_table__18492__auto__,method_cache__18493__auto__,cached_hierarchy__18494__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28933){
var map__28934 = p__28933;
var map__28934__$1 = ((cljs.core.seq_QMARK_.call(null,map__28934))?cljs.core.apply.call(null,cljs.core.hash_map,map__28934):map__28934);
var file = cljs.core.get.call(null,map__28934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28935){
var map__28936 = p__28935;
var map__28936__$1 = ((cljs.core.seq_QMARK_.call(null,map__28936))?cljs.core.apply.call(null,cljs.core.hash_map,map__28936):map__28936);
var namespace = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__18491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18495__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18495__auto__,method_table__18491__auto__,prefer_table__18492__auto__,method_cache__18493__auto__,cached_hierarchy__18494__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28937){if((e28937 instanceof Error)){
var e = e28937;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28937;

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
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28938,callback){
var map__28940 = p__28938;
var map__28940__$1 = ((cljs.core.seq_QMARK_.call(null,map__28940))?cljs.core.apply.call(null,cljs.core.hash_map,map__28940):map__28940);
var file_msg = map__28940__$1;
var request_url = cljs.core.get.call(null,map__28940__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28940,map__28940__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28940,map__28940__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28941){
var map__28943 = p__28941;
var map__28943__$1 = ((cljs.core.seq_QMARK_.call(null,map__28943))?cljs.core.apply.call(null,cljs.core.hash_map,map__28943):map__28943);
var file_msg = map__28943__$1;
var meta_data = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17594__auto__ = meta_data;
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17582__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17582__auto__){
var or__17594__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17594__auto____$1)){
return or__17594__auto____$1;
} else {
var and__17582__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17582__auto____$1){
var or__17594__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17594__auto____$2){
return or__17594__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17582__auto____$1;
}
}
}
} else {
return and__17582__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28944,callback){
var map__28946 = p__28944;
var map__28946__$1 = ((cljs.core.seq_QMARK_.call(null,map__28946))?cljs.core.apply.call(null,cljs.core.hash_map,map__28946):map__28946);
var file_msg = map__28946__$1;
var namespace = cljs.core.get.call(null,map__28946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__28946__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
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
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19775__auto___29033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___29033,out){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___29033,out){
return (function (state_29015){
var state_val_29016 = (state_29015[(1)]);
if((state_val_29016 === (7))){
var inst_28999 = (state_29015[(7)]);
var inst_29005 = (state_29015[(2)]);
var inst_29006 = cljs.core.async.put_BANG_.call(null,out,inst_29005);
var inst_28995 = inst_28999;
var state_29015__$1 = (function (){var statearr_29017 = state_29015;
(statearr_29017[(8)] = inst_28995);

(statearr_29017[(9)] = inst_29006);

return statearr_29017;
})();
var statearr_29018_29034 = state_29015__$1;
(statearr_29018_29034[(2)] = null);

(statearr_29018_29034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (6))){
var inst_29011 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29019_29035 = state_29015__$1;
(statearr_29019_29035[(2)] = inst_29011);

(statearr_29019_29035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (5))){
var inst_29009 = cljs.core.async.close_BANG_.call(null,out);
var state_29015__$1 = state_29015;
var statearr_29020_29036 = state_29015__$1;
(statearr_29020_29036[(2)] = inst_29009);

(statearr_29020_29036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (4))){
var inst_28998 = (state_29015[(10)]);
var inst_29003 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28998);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29015__$1,(7),inst_29003);
} else {
if((state_val_29016 === (3))){
var inst_29013 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29015__$1,inst_29013);
} else {
if((state_val_29016 === (2))){
var inst_28995 = (state_29015[(8)]);
var inst_28998 = (state_29015[(10)]);
var inst_28998__$1 = cljs.core.nth.call(null,inst_28995,(0),null);
var inst_28999 = cljs.core.nthnext.call(null,inst_28995,(1));
var inst_29000 = (inst_28998__$1 == null);
var inst_29001 = cljs.core.not.call(null,inst_29000);
var state_29015__$1 = (function (){var statearr_29021 = state_29015;
(statearr_29021[(10)] = inst_28998__$1);

(statearr_29021[(7)] = inst_28999);

return statearr_29021;
})();
if(inst_29001){
var statearr_29022_29037 = state_29015__$1;
(statearr_29022_29037[(1)] = (4));

} else {
var statearr_29023_29038 = state_29015__$1;
(statearr_29023_29038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (1))){
var inst_28993 = cljs.core.nth.call(null,files,(0),null);
var inst_28994 = cljs.core.nthnext.call(null,files,(1));
var inst_28995 = files;
var state_29015__$1 = (function (){var statearr_29024 = state_29015;
(statearr_29024[(11)] = inst_28994);

(statearr_29024[(8)] = inst_28995);

(statearr_29024[(12)] = inst_28993);

return statearr_29024;
})();
var statearr_29025_29039 = state_29015__$1;
(statearr_29025_29039[(2)] = null);

(statearr_29025_29039[(1)] = (2));


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
});})(c__19775__auto___29033,out))
;
return ((function (switch__19719__auto__,c__19775__auto___29033,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto____0 = (function (){
var statearr_29029 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29029[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto__);

(statearr_29029[(1)] = (1));

return statearr_29029;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto____1 = (function (state_29015){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_29015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e29030){if((e29030 instanceof Object)){
var ex__19723__auto__ = e29030;
var statearr_29031_29040 = state_29015;
(statearr_29031_29040[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29041 = state_29015;
state_29015 = G__29041;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___29033,out))
})();
var state__19777__auto__ = (function (){var statearr_29032 = f__19776__auto__.call(null);
(statearr_29032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___29033);

return statearr_29032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___29033,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29042,p__29043){
var map__29046 = p__29042;
var map__29046__$1 = ((cljs.core.seq_QMARK_.call(null,map__29046))?cljs.core.apply.call(null,cljs.core.hash_map,map__29046):map__29046);
var opts = map__29046__$1;
var url_rewriter = cljs.core.get.call(null,map__29046__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29047 = p__29043;
var map__29047__$1 = ((cljs.core.seq_QMARK_.call(null,map__29047))?cljs.core.apply.call(null,cljs.core.hash_map,map__29047):map__29047);
var file_msg = map__29047__$1;
var file = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29048){
var map__29051 = p__29048;
var map__29051__$1 = ((cljs.core.seq_QMARK_.call(null,map__29051))?cljs.core.apply.call(null,cljs.core.hash_map,map__29051):map__29051);
var file = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17582__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17582__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17582__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29052){var e = e29052;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29057,p__29058){
var map__29259 = p__29057;
var map__29259__$1 = ((cljs.core.seq_QMARK_.call(null,map__29259))?cljs.core.apply.call(null,cljs.core.hash_map,map__29259):map__29259);
var opts = map__29259__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29259__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29259__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29259__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29260 = p__29058;
var map__29260__$1 = ((cljs.core.seq_QMARK_.call(null,map__29260))?cljs.core.apply.call(null,cljs.core.hash_map,map__29260):map__29260);
var msg = map__29260__$1;
var files = cljs.core.get.call(null,map__29260__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (7))){
var inst_29274 = (state_29384[(7)]);
var inst_29271 = (state_29384[(8)]);
var inst_29272 = (state_29384[(9)]);
var inst_29273 = (state_29384[(10)]);
var inst_29279 = cljs.core._nth.call(null,inst_29272,inst_29274);
var inst_29280 = figwheel.client.file_reloading.eval_body.call(null,inst_29279);
var inst_29281 = (inst_29274 + (1));
var tmp29386 = inst_29271;
var tmp29387 = inst_29272;
var tmp29388 = inst_29273;
var inst_29271__$1 = tmp29386;
var inst_29272__$1 = tmp29387;
var inst_29273__$1 = tmp29388;
var inst_29274__$1 = inst_29281;
var state_29384__$1 = (function (){var statearr_29389 = state_29384;
(statearr_29389[(7)] = inst_29274__$1);

(statearr_29389[(11)] = inst_29280);

(statearr_29389[(8)] = inst_29271__$1);

(statearr_29389[(9)] = inst_29272__$1);

(statearr_29389[(10)] = inst_29273__$1);

return statearr_29389;
})();
var statearr_29390_29459 = state_29384__$1;
(statearr_29390_29459[(2)] = null);

(statearr_29390_29459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (20))){
var inst_29320 = (state_29384[(12)]);
var inst_29321 = (state_29384[(13)]);
var inst_29323 = (state_29384[(14)]);
var inst_29316 = (state_29384[(15)]);
var inst_29317 = (state_29384[(16)]);
var inst_29326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29328 = (function (){var files_not_loaded = inst_29323;
var res = inst_29321;
var res_SINGLEQUOTE_ = inst_29320;
var files_SINGLEQUOTE_ = inst_29317;
var all_files = inst_29316;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29320,inst_29321,inst_29323,inst_29316,inst_29317,inst_29326,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (p__29327){
var map__29391 = p__29327;
var map__29391__$1 = ((cljs.core.seq_QMARK_.call(null,map__29391))?cljs.core.apply.call(null,cljs.core.hash_map,map__29391):map__29391);
var file = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29320,inst_29321,inst_29323,inst_29316,inst_29317,inst_29326,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
})();
var inst_29329 = cljs.core.map.call(null,inst_29328,inst_29321);
var inst_29330 = cljs.core.pr_str.call(null,inst_29329);
var inst_29331 = figwheel.client.utils.log.call(null,inst_29330);
var inst_29332 = (function (){var files_not_loaded = inst_29323;
var res = inst_29321;
var res_SINGLEQUOTE_ = inst_29320;
var files_SINGLEQUOTE_ = inst_29317;
var all_files = inst_29316;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29320,inst_29321,inst_29323,inst_29316,inst_29317,inst_29326,inst_29328,inst_29329,inst_29330,inst_29331,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29320,inst_29321,inst_29323,inst_29316,inst_29317,inst_29326,inst_29328,inst_29329,inst_29330,inst_29331,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
})();
var inst_29333 = setTimeout(inst_29332,(10));
var state_29384__$1 = (function (){var statearr_29392 = state_29384;
(statearr_29392[(17)] = inst_29331);

(statearr_29392[(18)] = inst_29326);

return statearr_29392;
})();
var statearr_29393_29460 = state_29384__$1;
(statearr_29393_29460[(2)] = inst_29333);

(statearr_29393_29460[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (27))){
var inst_29343 = (state_29384[(19)]);
var state_29384__$1 = state_29384;
var statearr_29394_29461 = state_29384__$1;
(statearr_29394_29461[(2)] = inst_29343);

(statearr_29394_29461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (1))){
var inst_29263 = (state_29384[(20)]);
var inst_29261 = before_jsload.call(null,files);
var inst_29262 = (function (){return ((function (inst_29263,inst_29261,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (p1__29053_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29053_SHARP_);
});
;})(inst_29263,inst_29261,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
})();
var inst_29263__$1 = cljs.core.filter.call(null,inst_29262,files);
var inst_29264 = cljs.core.not_empty.call(null,inst_29263__$1);
var state_29384__$1 = (function (){var statearr_29395 = state_29384;
(statearr_29395[(20)] = inst_29263__$1);

(statearr_29395[(21)] = inst_29261);

return statearr_29395;
})();
if(cljs.core.truth_(inst_29264)){
var statearr_29396_29462 = state_29384__$1;
(statearr_29396_29462[(1)] = (2));

} else {
var statearr_29397_29463 = state_29384__$1;
(statearr_29397_29463[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (24))){
var state_29384__$1 = state_29384;
var statearr_29398_29464 = state_29384__$1;
(statearr_29398_29464[(2)] = null);

(statearr_29398_29464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (4))){
var inst_29308 = (state_29384[(2)]);
var inst_29309 = (function (){return ((function (inst_29308,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (p1__29054_SHARP_){
var and__17582__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29054_SHARP_);
if(cljs.core.truth_(and__17582__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29054_SHARP_));
} else {
return and__17582__auto__;
}
});
;})(inst_29308,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
})();
var inst_29310 = cljs.core.filter.call(null,inst_29309,files);
var state_29384__$1 = (function (){var statearr_29399 = state_29384;
(statearr_29399[(22)] = inst_29308);

(statearr_29399[(23)] = inst_29310);

return statearr_29399;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29400_29465 = state_29384__$1;
(statearr_29400_29465[(1)] = (16));

} else {
var statearr_29401_29466 = state_29384__$1;
(statearr_29401_29466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (15))){
var inst_29298 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29402_29467 = state_29384__$1;
(statearr_29402_29467[(2)] = inst_29298);

(statearr_29402_29467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (21))){
var state_29384__$1 = state_29384;
var statearr_29403_29468 = state_29384__$1;
(statearr_29403_29468[(2)] = null);

(statearr_29403_29468[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (31))){
var inst_29351 = (state_29384[(24)]);
var inst_29361 = (state_29384[(2)]);
var inst_29362 = cljs.core.not_empty.call(null,inst_29351);
var state_29384__$1 = (function (){var statearr_29404 = state_29384;
(statearr_29404[(25)] = inst_29361);

return statearr_29404;
})();
if(cljs.core.truth_(inst_29362)){
var statearr_29405_29469 = state_29384__$1;
(statearr_29405_29469[(1)] = (32));

} else {
var statearr_29406_29470 = state_29384__$1;
(statearr_29406_29470[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (32))){
var inst_29351 = (state_29384[(24)]);
var inst_29364 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29351);
var inst_29365 = cljs.core.pr_str.call(null,inst_29364);
var inst_29366 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29365)].join('');
var inst_29367 = figwheel.client.utils.log.call(null,inst_29366);
var state_29384__$1 = state_29384;
var statearr_29407_29471 = state_29384__$1;
(statearr_29407_29471[(2)] = inst_29367);

(statearr_29407_29471[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (33))){
var state_29384__$1 = state_29384;
var statearr_29408_29472 = state_29384__$1;
(statearr_29408_29472[(2)] = null);

(statearr_29408_29472[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (13))){
var inst_29284 = (state_29384[(26)]);
var inst_29288 = cljs.core.chunk_first.call(null,inst_29284);
var inst_29289 = cljs.core.chunk_rest.call(null,inst_29284);
var inst_29290 = cljs.core.count.call(null,inst_29288);
var inst_29271 = inst_29289;
var inst_29272 = inst_29288;
var inst_29273 = inst_29290;
var inst_29274 = (0);
var state_29384__$1 = (function (){var statearr_29409 = state_29384;
(statearr_29409[(7)] = inst_29274);

(statearr_29409[(8)] = inst_29271);

(statearr_29409[(9)] = inst_29272);

(statearr_29409[(10)] = inst_29273);

return statearr_29409;
})();
var statearr_29410_29473 = state_29384__$1;
(statearr_29410_29473[(2)] = null);

(statearr_29410_29473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (22))){
var inst_29323 = (state_29384[(14)]);
var inst_29336 = (state_29384[(2)]);
var inst_29337 = cljs.core.not_empty.call(null,inst_29323);
var state_29384__$1 = (function (){var statearr_29411 = state_29384;
(statearr_29411[(27)] = inst_29336);

return statearr_29411;
})();
if(cljs.core.truth_(inst_29337)){
var statearr_29412_29474 = state_29384__$1;
(statearr_29412_29474[(1)] = (23));

} else {
var statearr_29413_29475 = state_29384__$1;
(statearr_29413_29475[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (36))){
var state_29384__$1 = state_29384;
var statearr_29414_29476 = state_29384__$1;
(statearr_29414_29476[(2)] = null);

(statearr_29414_29476[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (29))){
var inst_29352 = (state_29384[(28)]);
var inst_29355 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29352);
var inst_29356 = cljs.core.pr_str.call(null,inst_29355);
var inst_29357 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29356)].join('');
var inst_29358 = figwheel.client.utils.log.call(null,inst_29357);
var state_29384__$1 = state_29384;
var statearr_29415_29477 = state_29384__$1;
(statearr_29415_29477[(2)] = inst_29358);

(statearr_29415_29477[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (6))){
var inst_29305 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29416_29478 = state_29384__$1;
(statearr_29416_29478[(2)] = inst_29305);

(statearr_29416_29478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (28))){
var inst_29352 = (state_29384[(28)]);
var inst_29349 = (state_29384[(2)]);
var inst_29350 = cljs.core.get.call(null,inst_29349,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29351 = cljs.core.get.call(null,inst_29349,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29352__$1 = cljs.core.get.call(null,inst_29349,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29353 = cljs.core.not_empty.call(null,inst_29352__$1);
var state_29384__$1 = (function (){var statearr_29417 = state_29384;
(statearr_29417[(24)] = inst_29351);

(statearr_29417[(29)] = inst_29350);

(statearr_29417[(28)] = inst_29352__$1);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29353)){
var statearr_29418_29479 = state_29384__$1;
(statearr_29418_29479[(1)] = (29));

} else {
var statearr_29419_29480 = state_29384__$1;
(statearr_29419_29480[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (25))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (34))){
var inst_29350 = (state_29384[(29)]);
var inst_29370 = (state_29384[(2)]);
var inst_29371 = cljs.core.not_empty.call(null,inst_29350);
var state_29384__$1 = (function (){var statearr_29420 = state_29384;
(statearr_29420[(30)] = inst_29370);

return statearr_29420;
})();
if(cljs.core.truth_(inst_29371)){
var statearr_29421_29481 = state_29384__$1;
(statearr_29421_29481[(1)] = (35));

} else {
var statearr_29422_29482 = state_29384__$1;
(statearr_29422_29482[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (17))){
var inst_29310 = (state_29384[(23)]);
var state_29384__$1 = state_29384;
var statearr_29423_29483 = state_29384__$1;
(statearr_29423_29483[(2)] = inst_29310);

(statearr_29423_29483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (3))){
var state_29384__$1 = state_29384;
var statearr_29424_29484 = state_29384__$1;
(statearr_29424_29484[(2)] = null);

(statearr_29424_29484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (12))){
var inst_29301 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29425_29485 = state_29384__$1;
(statearr_29425_29485[(2)] = inst_29301);

(statearr_29425_29485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (2))){
var inst_29263 = (state_29384[(20)]);
var inst_29270 = cljs.core.seq.call(null,inst_29263);
var inst_29271 = inst_29270;
var inst_29272 = null;
var inst_29273 = (0);
var inst_29274 = (0);
var state_29384__$1 = (function (){var statearr_29426 = state_29384;
(statearr_29426[(7)] = inst_29274);

(statearr_29426[(8)] = inst_29271);

(statearr_29426[(9)] = inst_29272);

(statearr_29426[(10)] = inst_29273);

return statearr_29426;
})();
var statearr_29427_29486 = state_29384__$1;
(statearr_29427_29486[(2)] = null);

(statearr_29427_29486[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (23))){
var inst_29320 = (state_29384[(12)]);
var inst_29321 = (state_29384[(13)]);
var inst_29323 = (state_29384[(14)]);
var inst_29343 = (state_29384[(19)]);
var inst_29316 = (state_29384[(15)]);
var inst_29317 = (state_29384[(16)]);
var inst_29339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29342 = (function (){var files_not_loaded = inst_29323;
var res = inst_29321;
var res_SINGLEQUOTE_ = inst_29320;
var files_SINGLEQUOTE_ = inst_29317;
var all_files = inst_29316;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29320,inst_29321,inst_29323,inst_29343,inst_29316,inst_29317,inst_29339,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (p__29341){
var map__29428 = p__29341;
var map__29428__$1 = ((cljs.core.seq_QMARK_.call(null,map__29428))?cljs.core.apply.call(null,cljs.core.hash_map,map__29428):map__29428);
var meta_data = cljs.core.get.call(null,map__29428__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29320,inst_29321,inst_29323,inst_29343,inst_29316,inst_29317,inst_29339,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
})();
var inst_29343__$1 = cljs.core.group_by.call(null,inst_29342,inst_29323);
var inst_29344 = cljs.core.seq_QMARK_.call(null,inst_29343__$1);
var state_29384__$1 = (function (){var statearr_29429 = state_29384;
(statearr_29429[(31)] = inst_29339);

(statearr_29429[(19)] = inst_29343__$1);

return statearr_29429;
})();
if(inst_29344){
var statearr_29430_29487 = state_29384__$1;
(statearr_29430_29487[(1)] = (26));

} else {
var statearr_29431_29488 = state_29384__$1;
(statearr_29431_29488[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (35))){
var inst_29350 = (state_29384[(29)]);
var inst_29373 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29350);
var inst_29374 = cljs.core.pr_str.call(null,inst_29373);
var inst_29375 = [cljs.core.str("not required: "),cljs.core.str(inst_29374)].join('');
var inst_29376 = figwheel.client.utils.log.call(null,inst_29375);
var state_29384__$1 = state_29384;
var statearr_29432_29489 = state_29384__$1;
(statearr_29432_29489[(2)] = inst_29376);

(statearr_29432_29489[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (19))){
var inst_29320 = (state_29384[(12)]);
var inst_29321 = (state_29384[(13)]);
var inst_29316 = (state_29384[(15)]);
var inst_29317 = (state_29384[(16)]);
var inst_29320__$1 = (state_29384[(2)]);
var inst_29321__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29320__$1);
var inst_29322 = (function (){var res = inst_29321__$1;
var res_SINGLEQUOTE_ = inst_29320__$1;
var files_SINGLEQUOTE_ = inst_29317;
var all_files = inst_29316;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29320,inst_29321,inst_29316,inst_29317,inst_29320__$1,inst_29321__$1,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (p1__29056_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29056_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29320,inst_29321,inst_29316,inst_29317,inst_29320__$1,inst_29321__$1,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
})();
var inst_29323 = cljs.core.filter.call(null,inst_29322,inst_29320__$1);
var inst_29324 = cljs.core.not_empty.call(null,inst_29321__$1);
var state_29384__$1 = (function (){var statearr_29433 = state_29384;
(statearr_29433[(12)] = inst_29320__$1);

(statearr_29433[(13)] = inst_29321__$1);

(statearr_29433[(14)] = inst_29323);

return statearr_29433;
})();
if(cljs.core.truth_(inst_29324)){
var statearr_29434_29490 = state_29384__$1;
(statearr_29434_29490[(1)] = (20));

} else {
var statearr_29435_29491 = state_29384__$1;
(statearr_29435_29491[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (11))){
var state_29384__$1 = state_29384;
var statearr_29436_29492 = state_29384__$1;
(statearr_29436_29492[(2)] = null);

(statearr_29436_29492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (9))){
var inst_29303 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29437_29493 = state_29384__$1;
(statearr_29437_29493[(2)] = inst_29303);

(statearr_29437_29493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (5))){
var inst_29274 = (state_29384[(7)]);
var inst_29273 = (state_29384[(10)]);
var inst_29276 = (inst_29274 < inst_29273);
var inst_29277 = inst_29276;
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29277)){
var statearr_29438_29494 = state_29384__$1;
(statearr_29438_29494[(1)] = (7));

} else {
var statearr_29439_29495 = state_29384__$1;
(statearr_29439_29495[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (14))){
var inst_29284 = (state_29384[(26)]);
var inst_29293 = cljs.core.first.call(null,inst_29284);
var inst_29294 = figwheel.client.file_reloading.eval_body.call(null,inst_29293);
var inst_29295 = cljs.core.next.call(null,inst_29284);
var inst_29271 = inst_29295;
var inst_29272 = null;
var inst_29273 = (0);
var inst_29274 = (0);
var state_29384__$1 = (function (){var statearr_29440 = state_29384;
(statearr_29440[(7)] = inst_29274);

(statearr_29440[(32)] = inst_29294);

(statearr_29440[(8)] = inst_29271);

(statearr_29440[(9)] = inst_29272);

(statearr_29440[(10)] = inst_29273);

return statearr_29440;
})();
var statearr_29441_29496 = state_29384__$1;
(statearr_29441_29496[(2)] = null);

(statearr_29441_29496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (26))){
var inst_29343 = (state_29384[(19)]);
var inst_29346 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29343);
var state_29384__$1 = state_29384;
var statearr_29442_29497 = state_29384__$1;
(statearr_29442_29497[(2)] = inst_29346);

(statearr_29442_29497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (16))){
var inst_29310 = (state_29384[(23)]);
var inst_29312 = (function (){var all_files = inst_29310;
return ((function (all_files,inst_29310,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function (p1__29055_SHARP_){
return cljs.core.update_in.call(null,p1__29055_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29310,state_val_29385,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
})();
var inst_29313 = cljs.core.map.call(null,inst_29312,inst_29310);
var state_29384__$1 = state_29384;
var statearr_29443_29498 = state_29384__$1;
(statearr_29443_29498[(2)] = inst_29313);

(statearr_29443_29498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (30))){
var state_29384__$1 = state_29384;
var statearr_29444_29499 = state_29384__$1;
(statearr_29444_29499[(2)] = null);

(statearr_29444_29499[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (10))){
var inst_29284 = (state_29384[(26)]);
var inst_29286 = cljs.core.chunked_seq_QMARK_.call(null,inst_29284);
var state_29384__$1 = state_29384;
if(inst_29286){
var statearr_29445_29500 = state_29384__$1;
(statearr_29445_29500[(1)] = (13));

} else {
var statearr_29446_29501 = state_29384__$1;
(statearr_29446_29501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (18))){
var inst_29316 = (state_29384[(15)]);
var inst_29317 = (state_29384[(16)]);
var inst_29316__$1 = (state_29384[(2)]);
var inst_29317__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29316__$1);
var inst_29318 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29317__$1);
var state_29384__$1 = (function (){var statearr_29447 = state_29384;
(statearr_29447[(15)] = inst_29316__$1);

(statearr_29447[(16)] = inst_29317__$1);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(19),inst_29318);
} else {
if((state_val_29385 === (37))){
var inst_29379 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29448_29502 = state_29384__$1;
(statearr_29448_29502[(2)] = inst_29379);

(statearr_29448_29502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (8))){
var inst_29284 = (state_29384[(26)]);
var inst_29271 = (state_29384[(8)]);
var inst_29284__$1 = cljs.core.seq.call(null,inst_29271);
var state_29384__$1 = (function (){var statearr_29449 = state_29384;
(statearr_29449[(26)] = inst_29284__$1);

return statearr_29449;
})();
if(inst_29284__$1){
var statearr_29450_29503 = state_29384__$1;
(statearr_29450_29503[(1)] = (10));

} else {
var statearr_29451_29504 = state_29384__$1;
(statearr_29451_29504[(1)] = (11));

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
});})(c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
;
return ((function (switch__19719__auto__,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto____0 = (function (){
var statearr_29455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29455[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto__);

(statearr_29455[(1)] = (1));

return statearr_29455;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto____1 = (function (state_29384){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_29384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e29456){if((e29456 instanceof Object)){
var ex__19723__auto__ = e29456;
var statearr_29457_29505 = state_29384;
(statearr_29457_29505[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29506 = state_29384;
state_29384 = G__29506;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
})();
var state__19777__auto__ = (function (){var statearr_29458 = f__19776__auto__.call(null);
(statearr_29458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_29458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__,map__29259,map__29259__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29260,map__29260__$1,msg,files))
);

return c__19775__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29509,link){
var map__29511 = p__29509;
var map__29511__$1 = ((cljs.core.seq_QMARK_.call(null,map__29511))?cljs.core.apply.call(null,cljs.core.hash_map,map__29511):map__29511);
var file = cljs.core.get.call(null,map__29511__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29511,map__29511__$1,file){
return (function (p1__29507_SHARP_,p2__29508_SHARP_){
if(cljs.core._EQ_.call(null,p1__29507_SHARP_,p2__29508_SHARP_)){
return p1__29507_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29511,map__29511__$1,file))
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
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29515){
var map__29516 = p__29515;
var map__29516__$1 = ((cljs.core.seq_QMARK_.call(null,map__29516))?cljs.core.apply.call(null,cljs.core.hash_map,map__29516):map__29516);
var current_url_length = cljs.core.get.call(null,map__29516__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29516__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29512_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29512_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
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
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29517){
var map__29519 = p__29517;
var map__29519__$1 = ((cljs.core.seq_QMARK_.call(null,map__29519))?cljs.core.apply.call(null,cljs.core.hash_map,map__29519):map__29519);
var f_data = map__29519__$1;
var request_url = cljs.core.get.call(null,map__29519__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29519__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17594__auto__ = request_url;
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29520,files_msg){
var map__29542 = p__29520;
var map__29542__$1 = ((cljs.core.seq_QMARK_.call(null,map__29542))?cljs.core.apply.call(null,cljs.core.hash_map,map__29542):map__29542);
var opts = map__29542__$1;
var on_cssload = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29543_29563 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29544_29564 = null;
var count__29545_29565 = (0);
var i__29546_29566 = (0);
while(true){
if((i__29546_29566 < count__29545_29565)){
var f_29567 = cljs.core._nth.call(null,chunk__29544_29564,i__29546_29566);
figwheel.client.file_reloading.reload_css_file.call(null,f_29567);

var G__29568 = seq__29543_29563;
var G__29569 = chunk__29544_29564;
var G__29570 = count__29545_29565;
var G__29571 = (i__29546_29566 + (1));
seq__29543_29563 = G__29568;
chunk__29544_29564 = G__29569;
count__29545_29565 = G__29570;
i__29546_29566 = G__29571;
continue;
} else {
var temp__4126__auto___29572 = cljs.core.seq.call(null,seq__29543_29563);
if(temp__4126__auto___29572){
var seq__29543_29573__$1 = temp__4126__auto___29572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29543_29573__$1)){
var c__18381__auto___29574 = cljs.core.chunk_first.call(null,seq__29543_29573__$1);
var G__29575 = cljs.core.chunk_rest.call(null,seq__29543_29573__$1);
var G__29576 = c__18381__auto___29574;
var G__29577 = cljs.core.count.call(null,c__18381__auto___29574);
var G__29578 = (0);
seq__29543_29563 = G__29575;
chunk__29544_29564 = G__29576;
count__29545_29565 = G__29577;
i__29546_29566 = G__29578;
continue;
} else {
var f_29579 = cljs.core.first.call(null,seq__29543_29573__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29579);

var G__29580 = cljs.core.next.call(null,seq__29543_29573__$1);
var G__29581 = null;
var G__29582 = (0);
var G__29583 = (0);
seq__29543_29563 = G__29580;
chunk__29544_29564 = G__29581;
count__29545_29565 = G__29582;
i__29546_29566 = G__29583;
continue;
}
} else {
}
}
break;
}

var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__,map__29542,map__29542__$1,opts,on_cssload){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__,map__29542,map__29542__$1,opts,on_cssload){
return (function (state_29553){
var state_val_29554 = (state_29553[(1)]);
if((state_val_29554 === (2))){
var inst_29549 = (state_29553[(2)]);
var inst_29550 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29551 = on_cssload.call(null,inst_29550);
var state_29553__$1 = (function (){var statearr_29555 = state_29553;
(statearr_29555[(7)] = inst_29549);

return statearr_29555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29553__$1,inst_29551);
} else {
if((state_val_29554 === (1))){
var inst_29547 = cljs.core.async.timeout.call(null,(100));
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29553__$1,(2),inst_29547);
} else {
return null;
}
}
});})(c__19775__auto__,map__29542,map__29542__$1,opts,on_cssload))
;
return ((function (switch__19719__auto__,c__19775__auto__,map__29542,map__29542__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto____0 = (function (){
var statearr_29559 = [null,null,null,null,null,null,null,null];
(statearr_29559[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto__);

(statearr_29559[(1)] = (1));

return statearr_29559;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto____1 = (function (state_29553){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_29553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e29560){if((e29560 instanceof Object)){
var ex__19723__auto__ = e29560;
var statearr_29561_29584 = state_29553;
(statearr_29561_29584[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29585 = state_29553;
state_29553 = G__29585;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto__ = function(state_29553){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto____1.call(this,state_29553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__,map__29542,map__29542__$1,opts,on_cssload))
})();
var state__19777__auto__ = (function (){var statearr_29562 = f__19776__auto__.call(null);
(statearr_29562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_29562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__,map__29542,map__29542__$1,opts,on_cssload))
);

return c__19775__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map