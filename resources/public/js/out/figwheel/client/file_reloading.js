// Compiled by ClojureScript 0.0-3123 {:elide-asserts false}
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
return cljs.core.reduce.call(null,(function (p1__29020_SHARP_,p2__29021_SHARP_){
var and__17634__auto__ = p1__29020_SHARP_;
if(cljs.core.truth_(and__17634__auto__)){
return p2__29021_SHARP_;
} else {
return and__17634__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17646__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17646__auto__){
return or__17646__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29023_SHARP_,p2__29022_SHARP_){
return [cljs.core.str(p2__29022_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__17646__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17646__auto__){
return or__17646__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17646__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18545__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18545__auto__,method_table__18541__auto__,prefer_table__18542__auto__,method_cache__18543__auto__,cached_hierarchy__18544__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29024){
var map__29025 = p__29024;
var map__29025__$1 = ((cljs.core.seq_QMARK_.call(null,map__29025))?cljs.core.apply.call(null,cljs.core.hash_map,map__29025):map__29025);
var file = cljs.core.get.call(null,map__29025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29026){
var map__29027 = p__29026;
var map__29027__$1 = ((cljs.core.seq_QMARK_.call(null,map__29027))?cljs.core.apply.call(null,cljs.core.hash_map,map__29027):map__29027);
var namespace = cljs.core.get.call(null,map__29027__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__18541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18545__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18545__auto__,method_table__18541__auto__,prefer_table__18542__auto__,method_cache__18543__auto__,cached_hierarchy__18544__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29028){if((e29028 instanceof Error)){
var e = e29028;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29028;

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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29029,callback){
var map__29031 = p__29029;
var map__29031__$1 = ((cljs.core.seq_QMARK_.call(null,map__29031))?cljs.core.apply.call(null,cljs.core.hash_map,map__29031):map__29031);
var file_msg = map__29031__$1;
var request_url = cljs.core.get.call(null,map__29031__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29031,map__29031__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29031,map__29031__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29032){
var map__29034 = p__29032;
var map__29034__$1 = ((cljs.core.seq_QMARK_.call(null,map__29034))?cljs.core.apply.call(null,cljs.core.hash_map,map__29034):map__29034);
var file_msg = map__29034__$1;
var meta_data = cljs.core.get.call(null,map__29034__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29034__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17646__auto__ = meta_data;
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17634__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17634__auto__){
var or__17646__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
} else {
var or__17646__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17646__auto____$1)){
return or__17646__auto____$1;
} else {
var and__17634__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17634__auto____$1){
var or__17646__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17646__auto____$2){
return or__17646__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17634__auto____$1;
}
}
}
} else {
return and__17634__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29035,callback){
var map__29037 = p__29035;
var map__29037__$1 = ((cljs.core.seq_QMARK_.call(null,map__29037))?cljs.core.apply.call(null,cljs.core.hash_map,map__29037):map__29037);
var file_msg = map__29037__$1;
var namespace = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__19828__auto___29124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___29124,out){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___29124,out){
return (function (state_29106){
var state_val_29107 = (state_29106[(1)]);
if((state_val_29107 === (7))){
var inst_29090 = (state_29106[(7)]);
var inst_29096 = (state_29106[(2)]);
var inst_29097 = cljs.core.async.put_BANG_.call(null,out,inst_29096);
var inst_29086 = inst_29090;
var state_29106__$1 = (function (){var statearr_29108 = state_29106;
(statearr_29108[(8)] = inst_29086);

(statearr_29108[(9)] = inst_29097);

return statearr_29108;
})();
var statearr_29109_29125 = state_29106__$1;
(statearr_29109_29125[(2)] = null);

(statearr_29109_29125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (6))){
var inst_29102 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29110_29126 = state_29106__$1;
(statearr_29110_29126[(2)] = inst_29102);

(statearr_29110_29126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (5))){
var inst_29100 = cljs.core.async.close_BANG_.call(null,out);
var state_29106__$1 = state_29106;
var statearr_29111_29127 = state_29106__$1;
(statearr_29111_29127[(2)] = inst_29100);

(statearr_29111_29127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (4))){
var inst_29089 = (state_29106[(10)]);
var inst_29094 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29089);
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29106__$1,(7),inst_29094);
} else {
if((state_val_29107 === (3))){
var inst_29104 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29106__$1,inst_29104);
} else {
if((state_val_29107 === (2))){
var inst_29086 = (state_29106[(8)]);
var inst_29089 = (state_29106[(10)]);
var inst_29089__$1 = cljs.core.nth.call(null,inst_29086,(0),null);
var inst_29090 = cljs.core.nthnext.call(null,inst_29086,(1));
var inst_29091 = (inst_29089__$1 == null);
var inst_29092 = cljs.core.not.call(null,inst_29091);
var state_29106__$1 = (function (){var statearr_29112 = state_29106;
(statearr_29112[(7)] = inst_29090);

(statearr_29112[(10)] = inst_29089__$1);

return statearr_29112;
})();
if(inst_29092){
var statearr_29113_29128 = state_29106__$1;
(statearr_29113_29128[(1)] = (4));

} else {
var statearr_29114_29129 = state_29106__$1;
(statearr_29114_29129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (1))){
var inst_29084 = cljs.core.nth.call(null,files,(0),null);
var inst_29085 = cljs.core.nthnext.call(null,files,(1));
var inst_29086 = files;
var state_29106__$1 = (function (){var statearr_29115 = state_29106;
(statearr_29115[(8)] = inst_29086);

(statearr_29115[(11)] = inst_29085);

(statearr_29115[(12)] = inst_29084);

return statearr_29115;
})();
var statearr_29116_29130 = state_29106__$1;
(statearr_29116_29130[(2)] = null);

(statearr_29116_29130[(1)] = (2));


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
});})(c__19828__auto___29124,out))
;
return ((function (switch__19772__auto__,c__19828__auto___29124,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto____0 = (function (){
var statearr_29120 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29120[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto__);

(statearr_29120[(1)] = (1));

return statearr_29120;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto____1 = (function (state_29106){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_29106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e29121){if((e29121 instanceof Object)){
var ex__19776__auto__ = e29121;
var statearr_29122_29131 = state_29106;
(statearr_29122_29131[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29132 = state_29106;
state_29106 = G__29132;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto__ = function(state_29106){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto____1.call(this,state_29106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___29124,out))
})();
var state__19830__auto__ = (function (){var statearr_29123 = f__19829__auto__.call(null);
(statearr_29123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___29124);

return statearr_29123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___29124,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29133,p__29134){
var map__29137 = p__29133;
var map__29137__$1 = ((cljs.core.seq_QMARK_.call(null,map__29137))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);
var opts = map__29137__$1;
var url_rewriter = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29138 = p__29134;
var map__29138__$1 = ((cljs.core.seq_QMARK_.call(null,map__29138))?cljs.core.apply.call(null,cljs.core.hash_map,map__29138):map__29138);
var file_msg = map__29138__$1;
var file = cljs.core.get.call(null,map__29138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29139){
var map__29142 = p__29139;
var map__29142__$1 = ((cljs.core.seq_QMARK_.call(null,map__29142))?cljs.core.apply.call(null,cljs.core.hash_map,map__29142):map__29142);
var file = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17634__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17634__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17634__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29143){var e = e29143;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29148,p__29149){
var map__29350 = p__29148;
var map__29350__$1 = ((cljs.core.seq_QMARK_.call(null,map__29350))?cljs.core.apply.call(null,cljs.core.hash_map,map__29350):map__29350);
var opts = map__29350__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29351 = p__29149;
var map__29351__$1 = ((cljs.core.seq_QMARK_.call(null,map__29351))?cljs.core.apply.call(null,cljs.core.hash_map,map__29351):map__29351);
var msg = map__29351__$1;
var files = cljs.core.get.call(null,map__29351__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (state_29475){
var state_val_29476 = (state_29475[(1)]);
if((state_val_29476 === (7))){
var inst_29362 = (state_29475[(7)]);
var inst_29364 = (state_29475[(8)]);
var inst_29365 = (state_29475[(9)]);
var inst_29363 = (state_29475[(10)]);
var inst_29370 = cljs.core._nth.call(null,inst_29363,inst_29365);
var inst_29371 = figwheel.client.file_reloading.eval_body.call(null,inst_29370);
var inst_29372 = (inst_29365 + (1));
var tmp29477 = inst_29362;
var tmp29478 = inst_29364;
var tmp29479 = inst_29363;
var inst_29362__$1 = tmp29477;
var inst_29363__$1 = tmp29479;
var inst_29364__$1 = tmp29478;
var inst_29365__$1 = inst_29372;
var state_29475__$1 = (function (){var statearr_29480 = state_29475;
(statearr_29480[(7)] = inst_29362__$1);

(statearr_29480[(11)] = inst_29371);

(statearr_29480[(8)] = inst_29364__$1);

(statearr_29480[(9)] = inst_29365__$1);

(statearr_29480[(10)] = inst_29363__$1);

return statearr_29480;
})();
var statearr_29481_29550 = state_29475__$1;
(statearr_29481_29550[(2)] = null);

(statearr_29481_29550[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (20))){
var inst_29407 = (state_29475[(12)]);
var inst_29408 = (state_29475[(13)]);
var inst_29411 = (state_29475[(14)]);
var inst_29414 = (state_29475[(15)]);
var inst_29412 = (state_29475[(16)]);
var inst_29417 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29419 = (function (){var files_not_loaded = inst_29414;
var res = inst_29412;
var res_SINGLEQUOTE_ = inst_29411;
var files_SINGLEQUOTE_ = inst_29408;
var all_files = inst_29407;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29407,inst_29408,inst_29411,inst_29414,inst_29412,inst_29417,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (p__29418){
var map__29482 = p__29418;
var map__29482__$1 = ((cljs.core.seq_QMARK_.call(null,map__29482))?cljs.core.apply.call(null,cljs.core.hash_map,map__29482):map__29482);
var file = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29407,inst_29408,inst_29411,inst_29414,inst_29412,inst_29417,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
})();
var inst_29420 = cljs.core.map.call(null,inst_29419,inst_29412);
var inst_29421 = cljs.core.pr_str.call(null,inst_29420);
var inst_29422 = figwheel.client.utils.log.call(null,inst_29421);
var inst_29423 = (function (){var files_not_loaded = inst_29414;
var res = inst_29412;
var res_SINGLEQUOTE_ = inst_29411;
var files_SINGLEQUOTE_ = inst_29408;
var all_files = inst_29407;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29407,inst_29408,inst_29411,inst_29414,inst_29412,inst_29417,inst_29419,inst_29420,inst_29421,inst_29422,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29407,inst_29408,inst_29411,inst_29414,inst_29412,inst_29417,inst_29419,inst_29420,inst_29421,inst_29422,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
})();
var inst_29424 = setTimeout(inst_29423,(10));
var state_29475__$1 = (function (){var statearr_29483 = state_29475;
(statearr_29483[(17)] = inst_29417);

(statearr_29483[(18)] = inst_29422);

return statearr_29483;
})();
var statearr_29484_29551 = state_29475__$1;
(statearr_29484_29551[(2)] = inst_29424);

(statearr_29484_29551[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (27))){
var inst_29434 = (state_29475[(19)]);
var state_29475__$1 = state_29475;
var statearr_29485_29552 = state_29475__$1;
(statearr_29485_29552[(2)] = inst_29434);

(statearr_29485_29552[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (1))){
var inst_29354 = (state_29475[(20)]);
var inst_29352 = before_jsload.call(null,files);
var inst_29353 = (function (){return ((function (inst_29354,inst_29352,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (p1__29144_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29144_SHARP_);
});
;})(inst_29354,inst_29352,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
})();
var inst_29354__$1 = cljs.core.filter.call(null,inst_29353,files);
var inst_29355 = cljs.core.not_empty.call(null,inst_29354__$1);
var state_29475__$1 = (function (){var statearr_29486 = state_29475;
(statearr_29486[(20)] = inst_29354__$1);

(statearr_29486[(21)] = inst_29352);

return statearr_29486;
})();
if(cljs.core.truth_(inst_29355)){
var statearr_29487_29553 = state_29475__$1;
(statearr_29487_29553[(1)] = (2));

} else {
var statearr_29488_29554 = state_29475__$1;
(statearr_29488_29554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (24))){
var state_29475__$1 = state_29475;
var statearr_29489_29555 = state_29475__$1;
(statearr_29489_29555[(2)] = null);

(statearr_29489_29555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (4))){
var inst_29399 = (state_29475[(2)]);
var inst_29400 = (function (){return ((function (inst_29399,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (p1__29145_SHARP_){
var and__17634__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29145_SHARP_);
if(cljs.core.truth_(and__17634__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29145_SHARP_));
} else {
return and__17634__auto__;
}
});
;})(inst_29399,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
})();
var inst_29401 = cljs.core.filter.call(null,inst_29400,files);
var state_29475__$1 = (function (){var statearr_29490 = state_29475;
(statearr_29490[(22)] = inst_29399);

(statearr_29490[(23)] = inst_29401);

return statearr_29490;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29491_29556 = state_29475__$1;
(statearr_29491_29556[(1)] = (16));

} else {
var statearr_29492_29557 = state_29475__$1;
(statearr_29492_29557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (15))){
var inst_29389 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
var statearr_29493_29558 = state_29475__$1;
(statearr_29493_29558[(2)] = inst_29389);

(statearr_29493_29558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (21))){
var state_29475__$1 = state_29475;
var statearr_29494_29559 = state_29475__$1;
(statearr_29494_29559[(2)] = null);

(statearr_29494_29559[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (31))){
var inst_29442 = (state_29475[(24)]);
var inst_29452 = (state_29475[(2)]);
var inst_29453 = cljs.core.not_empty.call(null,inst_29442);
var state_29475__$1 = (function (){var statearr_29495 = state_29475;
(statearr_29495[(25)] = inst_29452);

return statearr_29495;
})();
if(cljs.core.truth_(inst_29453)){
var statearr_29496_29560 = state_29475__$1;
(statearr_29496_29560[(1)] = (32));

} else {
var statearr_29497_29561 = state_29475__$1;
(statearr_29497_29561[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (32))){
var inst_29442 = (state_29475[(24)]);
var inst_29455 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29442);
var inst_29456 = cljs.core.pr_str.call(null,inst_29455);
var inst_29457 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29456)].join('');
var inst_29458 = figwheel.client.utils.log.call(null,inst_29457);
var state_29475__$1 = state_29475;
var statearr_29498_29562 = state_29475__$1;
(statearr_29498_29562[(2)] = inst_29458);

(statearr_29498_29562[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (33))){
var state_29475__$1 = state_29475;
var statearr_29499_29563 = state_29475__$1;
(statearr_29499_29563[(2)] = null);

(statearr_29499_29563[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (13))){
var inst_29375 = (state_29475[(26)]);
var inst_29379 = cljs.core.chunk_first.call(null,inst_29375);
var inst_29380 = cljs.core.chunk_rest.call(null,inst_29375);
var inst_29381 = cljs.core.count.call(null,inst_29379);
var inst_29362 = inst_29380;
var inst_29363 = inst_29379;
var inst_29364 = inst_29381;
var inst_29365 = (0);
var state_29475__$1 = (function (){var statearr_29500 = state_29475;
(statearr_29500[(7)] = inst_29362);

(statearr_29500[(8)] = inst_29364);

(statearr_29500[(9)] = inst_29365);

(statearr_29500[(10)] = inst_29363);

return statearr_29500;
})();
var statearr_29501_29564 = state_29475__$1;
(statearr_29501_29564[(2)] = null);

(statearr_29501_29564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (22))){
var inst_29414 = (state_29475[(15)]);
var inst_29427 = (state_29475[(2)]);
var inst_29428 = cljs.core.not_empty.call(null,inst_29414);
var state_29475__$1 = (function (){var statearr_29502 = state_29475;
(statearr_29502[(27)] = inst_29427);

return statearr_29502;
})();
if(cljs.core.truth_(inst_29428)){
var statearr_29503_29565 = state_29475__$1;
(statearr_29503_29565[(1)] = (23));

} else {
var statearr_29504_29566 = state_29475__$1;
(statearr_29504_29566[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (36))){
var state_29475__$1 = state_29475;
var statearr_29505_29567 = state_29475__$1;
(statearr_29505_29567[(2)] = null);

(statearr_29505_29567[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (29))){
var inst_29443 = (state_29475[(28)]);
var inst_29446 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29443);
var inst_29447 = cljs.core.pr_str.call(null,inst_29446);
var inst_29448 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29447)].join('');
var inst_29449 = figwheel.client.utils.log.call(null,inst_29448);
var state_29475__$1 = state_29475;
var statearr_29506_29568 = state_29475__$1;
(statearr_29506_29568[(2)] = inst_29449);

(statearr_29506_29568[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (6))){
var inst_29396 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
var statearr_29507_29569 = state_29475__$1;
(statearr_29507_29569[(2)] = inst_29396);

(statearr_29507_29569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (28))){
var inst_29443 = (state_29475[(28)]);
var inst_29440 = (state_29475[(2)]);
var inst_29441 = cljs.core.get.call(null,inst_29440,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29442 = cljs.core.get.call(null,inst_29440,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29443__$1 = cljs.core.get.call(null,inst_29440,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29444 = cljs.core.not_empty.call(null,inst_29443__$1);
var state_29475__$1 = (function (){var statearr_29508 = state_29475;
(statearr_29508[(29)] = inst_29441);

(statearr_29508[(24)] = inst_29442);

(statearr_29508[(28)] = inst_29443__$1);

return statearr_29508;
})();
if(cljs.core.truth_(inst_29444)){
var statearr_29509_29570 = state_29475__$1;
(statearr_29509_29570[(1)] = (29));

} else {
var statearr_29510_29571 = state_29475__$1;
(statearr_29510_29571[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (25))){
var inst_29473 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29475__$1,inst_29473);
} else {
if((state_val_29476 === (34))){
var inst_29441 = (state_29475[(29)]);
var inst_29461 = (state_29475[(2)]);
var inst_29462 = cljs.core.not_empty.call(null,inst_29441);
var state_29475__$1 = (function (){var statearr_29511 = state_29475;
(statearr_29511[(30)] = inst_29461);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29462)){
var statearr_29512_29572 = state_29475__$1;
(statearr_29512_29572[(1)] = (35));

} else {
var statearr_29513_29573 = state_29475__$1;
(statearr_29513_29573[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (17))){
var inst_29401 = (state_29475[(23)]);
var state_29475__$1 = state_29475;
var statearr_29514_29574 = state_29475__$1;
(statearr_29514_29574[(2)] = inst_29401);

(statearr_29514_29574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (3))){
var state_29475__$1 = state_29475;
var statearr_29515_29575 = state_29475__$1;
(statearr_29515_29575[(2)] = null);

(statearr_29515_29575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (12))){
var inst_29392 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
var statearr_29516_29576 = state_29475__$1;
(statearr_29516_29576[(2)] = inst_29392);

(statearr_29516_29576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (2))){
var inst_29354 = (state_29475[(20)]);
var inst_29361 = cljs.core.seq.call(null,inst_29354);
var inst_29362 = inst_29361;
var inst_29363 = null;
var inst_29364 = (0);
var inst_29365 = (0);
var state_29475__$1 = (function (){var statearr_29517 = state_29475;
(statearr_29517[(7)] = inst_29362);

(statearr_29517[(8)] = inst_29364);

(statearr_29517[(9)] = inst_29365);

(statearr_29517[(10)] = inst_29363);

return statearr_29517;
})();
var statearr_29518_29577 = state_29475__$1;
(statearr_29518_29577[(2)] = null);

(statearr_29518_29577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (23))){
var inst_29407 = (state_29475[(12)]);
var inst_29408 = (state_29475[(13)]);
var inst_29411 = (state_29475[(14)]);
var inst_29414 = (state_29475[(15)]);
var inst_29434 = (state_29475[(19)]);
var inst_29412 = (state_29475[(16)]);
var inst_29430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29433 = (function (){var files_not_loaded = inst_29414;
var res = inst_29412;
var res_SINGLEQUOTE_ = inst_29411;
var files_SINGLEQUOTE_ = inst_29408;
var all_files = inst_29407;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29407,inst_29408,inst_29411,inst_29414,inst_29434,inst_29412,inst_29430,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (p__29432){
var map__29519 = p__29432;
var map__29519__$1 = ((cljs.core.seq_QMARK_.call(null,map__29519))?cljs.core.apply.call(null,cljs.core.hash_map,map__29519):map__29519);
var meta_data = cljs.core.get.call(null,map__29519__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29407,inst_29408,inst_29411,inst_29414,inst_29434,inst_29412,inst_29430,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
})();
var inst_29434__$1 = cljs.core.group_by.call(null,inst_29433,inst_29414);
var inst_29435 = cljs.core.seq_QMARK_.call(null,inst_29434__$1);
var state_29475__$1 = (function (){var statearr_29520 = state_29475;
(statearr_29520[(31)] = inst_29430);

(statearr_29520[(19)] = inst_29434__$1);

return statearr_29520;
})();
if(inst_29435){
var statearr_29521_29578 = state_29475__$1;
(statearr_29521_29578[(1)] = (26));

} else {
var statearr_29522_29579 = state_29475__$1;
(statearr_29522_29579[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (35))){
var inst_29441 = (state_29475[(29)]);
var inst_29464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29441);
var inst_29465 = cljs.core.pr_str.call(null,inst_29464);
var inst_29466 = [cljs.core.str("not required: "),cljs.core.str(inst_29465)].join('');
var inst_29467 = figwheel.client.utils.log.call(null,inst_29466);
var state_29475__$1 = state_29475;
var statearr_29523_29580 = state_29475__$1;
(statearr_29523_29580[(2)] = inst_29467);

(statearr_29523_29580[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (19))){
var inst_29407 = (state_29475[(12)]);
var inst_29408 = (state_29475[(13)]);
var inst_29411 = (state_29475[(14)]);
var inst_29412 = (state_29475[(16)]);
var inst_29411__$1 = (state_29475[(2)]);
var inst_29412__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29411__$1);
var inst_29413 = (function (){var res = inst_29412__$1;
var res_SINGLEQUOTE_ = inst_29411__$1;
var files_SINGLEQUOTE_ = inst_29408;
var all_files = inst_29407;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29407,inst_29408,inst_29411,inst_29412,inst_29411__$1,inst_29412__$1,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (p1__29147_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29147_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29407,inst_29408,inst_29411,inst_29412,inst_29411__$1,inst_29412__$1,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
})();
var inst_29414 = cljs.core.filter.call(null,inst_29413,inst_29411__$1);
var inst_29415 = cljs.core.not_empty.call(null,inst_29412__$1);
var state_29475__$1 = (function (){var statearr_29524 = state_29475;
(statearr_29524[(14)] = inst_29411__$1);

(statearr_29524[(15)] = inst_29414);

(statearr_29524[(16)] = inst_29412__$1);

return statearr_29524;
})();
if(cljs.core.truth_(inst_29415)){
var statearr_29525_29581 = state_29475__$1;
(statearr_29525_29581[(1)] = (20));

} else {
var statearr_29526_29582 = state_29475__$1;
(statearr_29526_29582[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (11))){
var state_29475__$1 = state_29475;
var statearr_29527_29583 = state_29475__$1;
(statearr_29527_29583[(2)] = null);

(statearr_29527_29583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (9))){
var inst_29394 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
var statearr_29528_29584 = state_29475__$1;
(statearr_29528_29584[(2)] = inst_29394);

(statearr_29528_29584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (5))){
var inst_29364 = (state_29475[(8)]);
var inst_29365 = (state_29475[(9)]);
var inst_29367 = (inst_29365 < inst_29364);
var inst_29368 = inst_29367;
var state_29475__$1 = state_29475;
if(cljs.core.truth_(inst_29368)){
var statearr_29529_29585 = state_29475__$1;
(statearr_29529_29585[(1)] = (7));

} else {
var statearr_29530_29586 = state_29475__$1;
(statearr_29530_29586[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (14))){
var inst_29375 = (state_29475[(26)]);
var inst_29384 = cljs.core.first.call(null,inst_29375);
var inst_29385 = figwheel.client.file_reloading.eval_body.call(null,inst_29384);
var inst_29386 = cljs.core.next.call(null,inst_29375);
var inst_29362 = inst_29386;
var inst_29363 = null;
var inst_29364 = (0);
var inst_29365 = (0);
var state_29475__$1 = (function (){var statearr_29531 = state_29475;
(statearr_29531[(7)] = inst_29362);

(statearr_29531[(8)] = inst_29364);

(statearr_29531[(9)] = inst_29365);

(statearr_29531[(32)] = inst_29385);

(statearr_29531[(10)] = inst_29363);

return statearr_29531;
})();
var statearr_29532_29587 = state_29475__$1;
(statearr_29532_29587[(2)] = null);

(statearr_29532_29587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (26))){
var inst_29434 = (state_29475[(19)]);
var inst_29437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29434);
var state_29475__$1 = state_29475;
var statearr_29533_29588 = state_29475__$1;
(statearr_29533_29588[(2)] = inst_29437);

(statearr_29533_29588[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (16))){
var inst_29401 = (state_29475[(23)]);
var inst_29403 = (function (){var all_files = inst_29401;
return ((function (all_files,inst_29401,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function (p1__29146_SHARP_){
return cljs.core.update_in.call(null,p1__29146_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29401,state_val_29476,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
})();
var inst_29404 = cljs.core.map.call(null,inst_29403,inst_29401);
var state_29475__$1 = state_29475;
var statearr_29534_29589 = state_29475__$1;
(statearr_29534_29589[(2)] = inst_29404);

(statearr_29534_29589[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (30))){
var state_29475__$1 = state_29475;
var statearr_29535_29590 = state_29475__$1;
(statearr_29535_29590[(2)] = null);

(statearr_29535_29590[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (10))){
var inst_29375 = (state_29475[(26)]);
var inst_29377 = cljs.core.chunked_seq_QMARK_.call(null,inst_29375);
var state_29475__$1 = state_29475;
if(inst_29377){
var statearr_29536_29591 = state_29475__$1;
(statearr_29536_29591[(1)] = (13));

} else {
var statearr_29537_29592 = state_29475__$1;
(statearr_29537_29592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (18))){
var inst_29407 = (state_29475[(12)]);
var inst_29408 = (state_29475[(13)]);
var inst_29407__$1 = (state_29475[(2)]);
var inst_29408__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29407__$1);
var inst_29409 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29408__$1);
var state_29475__$1 = (function (){var statearr_29538 = state_29475;
(statearr_29538[(12)] = inst_29407__$1);

(statearr_29538[(13)] = inst_29408__$1);

return statearr_29538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29475__$1,(19),inst_29409);
} else {
if((state_val_29476 === (37))){
var inst_29470 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
var statearr_29539_29593 = state_29475__$1;
(statearr_29539_29593[(2)] = inst_29470);

(statearr_29539_29593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (8))){
var inst_29375 = (state_29475[(26)]);
var inst_29362 = (state_29475[(7)]);
var inst_29375__$1 = cljs.core.seq.call(null,inst_29362);
var state_29475__$1 = (function (){var statearr_29540 = state_29475;
(statearr_29540[(26)] = inst_29375__$1);

return statearr_29540;
})();
if(inst_29375__$1){
var statearr_29541_29594 = state_29475__$1;
(statearr_29541_29594[(1)] = (10));

} else {
var statearr_29542_29595 = state_29475__$1;
(statearr_29542_29595[(1)] = (11));

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
});})(c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
;
return ((function (switch__19772__auto__,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto____0 = (function (){
var statearr_29546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29546[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto__);

(statearr_29546[(1)] = (1));

return statearr_29546;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto____1 = (function (state_29475){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_29475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e29547){if((e29547 instanceof Object)){
var ex__19776__auto__ = e29547;
var statearr_29548_29596 = state_29475;
(statearr_29548_29596[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29597 = state_29475;
state_29475 = G__29597;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto__ = function(state_29475){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto____1.call(this,state_29475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
})();
var state__19830__auto__ = (function (){var statearr_29549 = f__19829__auto__.call(null);
(statearr_29549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_29549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__,map__29350,map__29350__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29351,map__29351__$1,msg,files))
);

return c__19828__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29600,link){
var map__29602 = p__29600;
var map__29602__$1 = ((cljs.core.seq_QMARK_.call(null,map__29602))?cljs.core.apply.call(null,cljs.core.hash_map,map__29602):map__29602);
var file = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29602,map__29602__$1,file){
return (function (p1__29598_SHARP_,p2__29599_SHARP_){
if(cljs.core._EQ_.call(null,p1__29598_SHARP_,p2__29599_SHARP_)){
return p1__29598_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29602,map__29602__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29606){
var map__29607 = p__29606;
var map__29607__$1 = ((cljs.core.seq_QMARK_.call(null,map__29607))?cljs.core.apply.call(null,cljs.core.hash_map,map__29607):map__29607);
var current_url_length = cljs.core.get.call(null,map__29607__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29607__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29603_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29603_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29608){
var map__29610 = p__29608;
var map__29610__$1 = ((cljs.core.seq_QMARK_.call(null,map__29610))?cljs.core.apply.call(null,cljs.core.hash_map,map__29610):map__29610);
var f_data = map__29610__$1;
var request_url = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17646__auto__ = request_url;
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29611,files_msg){
var map__29633 = p__29611;
var map__29633__$1 = ((cljs.core.seq_QMARK_.call(null,map__29633))?cljs.core.apply.call(null,cljs.core.hash_map,map__29633):map__29633);
var opts = map__29633__$1;
var on_cssload = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29634_29654 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29635_29655 = null;
var count__29636_29656 = (0);
var i__29637_29657 = (0);
while(true){
if((i__29637_29657 < count__29636_29656)){
var f_29658 = cljs.core._nth.call(null,chunk__29635_29655,i__29637_29657);
figwheel.client.file_reloading.reload_css_file.call(null,f_29658);

var G__29659 = seq__29634_29654;
var G__29660 = chunk__29635_29655;
var G__29661 = count__29636_29656;
var G__29662 = (i__29637_29657 + (1));
seq__29634_29654 = G__29659;
chunk__29635_29655 = G__29660;
count__29636_29656 = G__29661;
i__29637_29657 = G__29662;
continue;
} else {
var temp__4126__auto___29663 = cljs.core.seq.call(null,seq__29634_29654);
if(temp__4126__auto___29663){
var seq__29634_29664__$1 = temp__4126__auto___29663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29634_29664__$1)){
var c__18431__auto___29665 = cljs.core.chunk_first.call(null,seq__29634_29664__$1);
var G__29666 = cljs.core.chunk_rest.call(null,seq__29634_29664__$1);
var G__29667 = c__18431__auto___29665;
var G__29668 = cljs.core.count.call(null,c__18431__auto___29665);
var G__29669 = (0);
seq__29634_29654 = G__29666;
chunk__29635_29655 = G__29667;
count__29636_29656 = G__29668;
i__29637_29657 = G__29669;
continue;
} else {
var f_29670 = cljs.core.first.call(null,seq__29634_29664__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29670);

var G__29671 = cljs.core.next.call(null,seq__29634_29664__$1);
var G__29672 = null;
var G__29673 = (0);
var G__29674 = (0);
seq__29634_29654 = G__29671;
chunk__29635_29655 = G__29672;
count__29636_29656 = G__29673;
i__29637_29657 = G__29674;
continue;
}
} else {
}
}
break;
}

var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__,map__29633,map__29633__$1,opts,on_cssload){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__,map__29633,map__29633__$1,opts,on_cssload){
return (function (state_29644){
var state_val_29645 = (state_29644[(1)]);
if((state_val_29645 === (2))){
var inst_29640 = (state_29644[(2)]);
var inst_29641 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29642 = on_cssload.call(null,inst_29641);
var state_29644__$1 = (function (){var statearr_29646 = state_29644;
(statearr_29646[(7)] = inst_29640);

return statearr_29646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29644__$1,inst_29642);
} else {
if((state_val_29645 === (1))){
var inst_29638 = cljs.core.async.timeout.call(null,(100));
var state_29644__$1 = state_29644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29644__$1,(2),inst_29638);
} else {
return null;
}
}
});})(c__19828__auto__,map__29633,map__29633__$1,opts,on_cssload))
;
return ((function (switch__19772__auto__,c__19828__auto__,map__29633,map__29633__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto____0 = (function (){
var statearr_29650 = [null,null,null,null,null,null,null,null];
(statearr_29650[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto__);

(statearr_29650[(1)] = (1));

return statearr_29650;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto____1 = (function (state_29644){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_29644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e29651){if((e29651 instanceof Object)){
var ex__19776__auto__ = e29651;
var statearr_29652_29675 = state_29644;
(statearr_29652_29675[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29676 = state_29644;
state_29644 = G__29676;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto__ = function(state_29644){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto____1.call(this,state_29644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__,map__29633,map__29633__$1,opts,on_cssload))
})();
var state__19830__auto__ = (function (){var statearr_29653 = f__19829__auto__.call(null);
(statearr_29653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_29653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__,map__29633,map__29633__$1,opts,on_cssload))
);

return c__19828__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map