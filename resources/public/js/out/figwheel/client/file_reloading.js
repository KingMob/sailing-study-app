// Compiled by ClojureScript 0.0-3149 {:elide-asserts false}
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
return cljs.core.reduce.call(null,(function (p1__29080_SHARP_,p2__29081_SHARP_){
var and__17692__auto__ = p1__29080_SHARP_;
if(cljs.core.truth_(and__17692__auto__)){
return p2__29081_SHARP_;
} else {
return and__17692__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17704__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17704__auto__){
return or__17704__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29083_SHARP_,p2__29082_SHARP_){
return [cljs.core.str(p2__29082_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__17704__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17704__auto__){
return or__17704__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17704__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18603__auto__,method_table__18599__auto__,prefer_table__18600__auto__,method_cache__18601__auto__,cached_hierarchy__18602__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29084){
var map__29085 = p__29084;
var map__29085__$1 = ((cljs.core.seq_QMARK_.call(null,map__29085))?cljs.core.apply.call(null,cljs.core.hash_map,map__29085):map__29085);
var file = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29086){
var map__29087 = p__29086;
var map__29087__$1 = ((cljs.core.seq_QMARK_.call(null,map__29087))?cljs.core.apply.call(null,cljs.core.hash_map,map__29087):map__29087);
var namespace = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__18599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18603__auto__,method_table__18599__auto__,prefer_table__18600__auto__,method_cache__18601__auto__,cached_hierarchy__18602__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29088){if((e29088 instanceof Error)){
var e = e29088;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29088;

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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29089,callback){
var map__29091 = p__29089;
var map__29091__$1 = ((cljs.core.seq_QMARK_.call(null,map__29091))?cljs.core.apply.call(null,cljs.core.hash_map,map__29091):map__29091);
var file_msg = map__29091__$1;
var request_url = cljs.core.get.call(null,map__29091__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29091,map__29091__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29091,map__29091__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29092){
var map__29094 = p__29092;
var map__29094__$1 = ((cljs.core.seq_QMARK_.call(null,map__29094))?cljs.core.apply.call(null,cljs.core.hash_map,map__29094):map__29094);
var file_msg = map__29094__$1;
var meta_data = cljs.core.get.call(null,map__29094__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29094__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17704__auto__ = meta_data;
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17692__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17692__auto__){
var or__17704__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17704__auto____$1)){
return or__17704__auto____$1;
} else {
var and__17692__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17692__auto____$1){
var or__17704__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17704__auto____$2){
return or__17704__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17692__auto____$1;
}
}
}
} else {
return and__17692__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29095,callback){
var map__29097 = p__29095;
var map__29097__$1 = ((cljs.core.seq_QMARK_.call(null,map__29097))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var file_msg = map__29097__$1;
var namespace = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__19886__auto___29184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___29184,out){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___29184,out){
return (function (state_29166){
var state_val_29167 = (state_29166[(1)]);
if((state_val_29167 === (7))){
var inst_29150 = (state_29166[(7)]);
var inst_29156 = (state_29166[(2)]);
var inst_29157 = cljs.core.async.put_BANG_.call(null,out,inst_29156);
var inst_29146 = inst_29150;
var state_29166__$1 = (function (){var statearr_29168 = state_29166;
(statearr_29168[(8)] = inst_29146);

(statearr_29168[(9)] = inst_29157);

return statearr_29168;
})();
var statearr_29169_29185 = state_29166__$1;
(statearr_29169_29185[(2)] = null);

(statearr_29169_29185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (6))){
var inst_29162 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29170_29186 = state_29166__$1;
(statearr_29170_29186[(2)] = inst_29162);

(statearr_29170_29186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (5))){
var inst_29160 = cljs.core.async.close_BANG_.call(null,out);
var state_29166__$1 = state_29166;
var statearr_29171_29187 = state_29166__$1;
(statearr_29171_29187[(2)] = inst_29160);

(statearr_29171_29187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (4))){
var inst_29149 = (state_29166[(10)]);
var inst_29154 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29149);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29166__$1,(7),inst_29154);
} else {
if((state_val_29167 === (3))){
var inst_29164 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29166__$1,inst_29164);
} else {
if((state_val_29167 === (2))){
var inst_29146 = (state_29166[(8)]);
var inst_29149 = (state_29166[(10)]);
var inst_29149__$1 = cljs.core.nth.call(null,inst_29146,(0),null);
var inst_29150 = cljs.core.nthnext.call(null,inst_29146,(1));
var inst_29151 = (inst_29149__$1 == null);
var inst_29152 = cljs.core.not.call(null,inst_29151);
var state_29166__$1 = (function (){var statearr_29172 = state_29166;
(statearr_29172[(10)] = inst_29149__$1);

(statearr_29172[(7)] = inst_29150);

return statearr_29172;
})();
if(inst_29152){
var statearr_29173_29188 = state_29166__$1;
(statearr_29173_29188[(1)] = (4));

} else {
var statearr_29174_29189 = state_29166__$1;
(statearr_29174_29189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (1))){
var inst_29144 = cljs.core.nth.call(null,files,(0),null);
var inst_29145 = cljs.core.nthnext.call(null,files,(1));
var inst_29146 = files;
var state_29166__$1 = (function (){var statearr_29175 = state_29166;
(statearr_29175[(8)] = inst_29146);

(statearr_29175[(11)] = inst_29145);

(statearr_29175[(12)] = inst_29144);

return statearr_29175;
})();
var statearr_29176_29190 = state_29166__$1;
(statearr_29176_29190[(2)] = null);

(statearr_29176_29190[(1)] = (2));


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
});})(c__19886__auto___29184,out))
;
return ((function (switch__19830__auto__,c__19886__auto___29184,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto____0 = (function (){
var statearr_29180 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29180[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto__);

(statearr_29180[(1)] = (1));

return statearr_29180;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto____1 = (function (state_29166){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_29166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e29181){if((e29181 instanceof Object)){
var ex__19834__auto__ = e29181;
var statearr_29182_29191 = state_29166;
(statearr_29182_29191[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29192 = state_29166;
state_29166 = G__29192;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto__ = function(state_29166){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto____1.call(this,state_29166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___29184,out))
})();
var state__19888__auto__ = (function (){var statearr_29183 = f__19887__auto__.call(null);
(statearr_29183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___29184);

return statearr_29183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___29184,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29193,p__29194){
var map__29197 = p__29193;
var map__29197__$1 = ((cljs.core.seq_QMARK_.call(null,map__29197))?cljs.core.apply.call(null,cljs.core.hash_map,map__29197):map__29197);
var opts = map__29197__$1;
var url_rewriter = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29198 = p__29194;
var map__29198__$1 = ((cljs.core.seq_QMARK_.call(null,map__29198))?cljs.core.apply.call(null,cljs.core.hash_map,map__29198):map__29198);
var file_msg = map__29198__$1;
var file = cljs.core.get.call(null,map__29198__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29199){
var map__29202 = p__29199;
var map__29202__$1 = ((cljs.core.seq_QMARK_.call(null,map__29202))?cljs.core.apply.call(null,cljs.core.hash_map,map__29202):map__29202);
var file = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17692__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17692__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17692__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29203){var e = e29203;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29208,p__29209){
var map__29410 = p__29208;
var map__29410__$1 = ((cljs.core.seq_QMARK_.call(null,map__29410))?cljs.core.apply.call(null,cljs.core.hash_map,map__29410):map__29410);
var opts = map__29410__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29411 = p__29209;
var map__29411__$1 = ((cljs.core.seq_QMARK_.call(null,map__29411))?cljs.core.apply.call(null,cljs.core.hash_map,map__29411):map__29411);
var msg = map__29411__$1;
var files = cljs.core.get.call(null,map__29411__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (state_29535){
var state_val_29536 = (state_29535[(1)]);
if((state_val_29536 === (7))){
var inst_29424 = (state_29535[(7)]);
var inst_29425 = (state_29535[(8)]);
var inst_29422 = (state_29535[(9)]);
var inst_29423 = (state_29535[(10)]);
var inst_29430 = cljs.core._nth.call(null,inst_29423,inst_29425);
var inst_29431 = figwheel.client.file_reloading.eval_body.call(null,inst_29430);
var inst_29432 = (inst_29425 + (1));
var tmp29537 = inst_29424;
var tmp29538 = inst_29422;
var tmp29539 = inst_29423;
var inst_29422__$1 = tmp29538;
var inst_29423__$1 = tmp29539;
var inst_29424__$1 = tmp29537;
var inst_29425__$1 = inst_29432;
var state_29535__$1 = (function (){var statearr_29540 = state_29535;
(statearr_29540[(7)] = inst_29424__$1);

(statearr_29540[(11)] = inst_29431);

(statearr_29540[(8)] = inst_29425__$1);

(statearr_29540[(9)] = inst_29422__$1);

(statearr_29540[(10)] = inst_29423__$1);

return statearr_29540;
})();
var statearr_29541_29610 = state_29535__$1;
(statearr_29541_29610[(2)] = null);

(statearr_29541_29610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (20))){
var inst_29468 = (state_29535[(12)]);
var inst_29467 = (state_29535[(13)]);
var inst_29474 = (state_29535[(14)]);
var inst_29471 = (state_29535[(15)]);
var inst_29472 = (state_29535[(16)]);
var inst_29477 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29479 = (function (){var files_not_loaded = inst_29474;
var res = inst_29472;
var res_SINGLEQUOTE_ = inst_29471;
var files_SINGLEQUOTE_ = inst_29468;
var all_files = inst_29467;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29467,inst_29474,inst_29471,inst_29472,inst_29477,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (p__29478){
var map__29542 = p__29478;
var map__29542__$1 = ((cljs.core.seq_QMARK_.call(null,map__29542))?cljs.core.apply.call(null,cljs.core.hash_map,map__29542):map__29542);
var file = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29467,inst_29474,inst_29471,inst_29472,inst_29477,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
})();
var inst_29480 = cljs.core.map.call(null,inst_29479,inst_29472);
var inst_29481 = cljs.core.pr_str.call(null,inst_29480);
var inst_29482 = figwheel.client.utils.log.call(null,inst_29481);
var inst_29483 = (function (){var files_not_loaded = inst_29474;
var res = inst_29472;
var res_SINGLEQUOTE_ = inst_29471;
var files_SINGLEQUOTE_ = inst_29468;
var all_files = inst_29467;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29467,inst_29474,inst_29471,inst_29472,inst_29477,inst_29479,inst_29480,inst_29481,inst_29482,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29467,inst_29474,inst_29471,inst_29472,inst_29477,inst_29479,inst_29480,inst_29481,inst_29482,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
})();
var inst_29484 = setTimeout(inst_29483,(10));
var state_29535__$1 = (function (){var statearr_29543 = state_29535;
(statearr_29543[(17)] = inst_29477);

(statearr_29543[(18)] = inst_29482);

return statearr_29543;
})();
var statearr_29544_29611 = state_29535__$1;
(statearr_29544_29611[(2)] = inst_29484);

(statearr_29544_29611[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (27))){
var inst_29494 = (state_29535[(19)]);
var state_29535__$1 = state_29535;
var statearr_29545_29612 = state_29535__$1;
(statearr_29545_29612[(2)] = inst_29494);

(statearr_29545_29612[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (1))){
var inst_29414 = (state_29535[(20)]);
var inst_29412 = before_jsload.call(null,files);
var inst_29413 = (function (){return ((function (inst_29414,inst_29412,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (p1__29204_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29204_SHARP_);
});
;})(inst_29414,inst_29412,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
})();
var inst_29414__$1 = cljs.core.filter.call(null,inst_29413,files);
var inst_29415 = cljs.core.not_empty.call(null,inst_29414__$1);
var state_29535__$1 = (function (){var statearr_29546 = state_29535;
(statearr_29546[(20)] = inst_29414__$1);

(statearr_29546[(21)] = inst_29412);

return statearr_29546;
})();
if(cljs.core.truth_(inst_29415)){
var statearr_29547_29613 = state_29535__$1;
(statearr_29547_29613[(1)] = (2));

} else {
var statearr_29548_29614 = state_29535__$1;
(statearr_29548_29614[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (24))){
var state_29535__$1 = state_29535;
var statearr_29549_29615 = state_29535__$1;
(statearr_29549_29615[(2)] = null);

(statearr_29549_29615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (4))){
var inst_29459 = (state_29535[(2)]);
var inst_29460 = (function (){return ((function (inst_29459,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (p1__29205_SHARP_){
var and__17692__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29205_SHARP_);
if(cljs.core.truth_(and__17692__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29205_SHARP_));
} else {
return and__17692__auto__;
}
});
;})(inst_29459,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
})();
var inst_29461 = cljs.core.filter.call(null,inst_29460,files);
var state_29535__$1 = (function (){var statearr_29550 = state_29535;
(statearr_29550[(22)] = inst_29461);

(statearr_29550[(23)] = inst_29459);

return statearr_29550;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29551_29616 = state_29535__$1;
(statearr_29551_29616[(1)] = (16));

} else {
var statearr_29552_29617 = state_29535__$1;
(statearr_29552_29617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (15))){
var inst_29449 = (state_29535[(2)]);
var state_29535__$1 = state_29535;
var statearr_29553_29618 = state_29535__$1;
(statearr_29553_29618[(2)] = inst_29449);

(statearr_29553_29618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (21))){
var state_29535__$1 = state_29535;
var statearr_29554_29619 = state_29535__$1;
(statearr_29554_29619[(2)] = null);

(statearr_29554_29619[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (31))){
var inst_29502 = (state_29535[(24)]);
var inst_29512 = (state_29535[(2)]);
var inst_29513 = cljs.core.not_empty.call(null,inst_29502);
var state_29535__$1 = (function (){var statearr_29555 = state_29535;
(statearr_29555[(25)] = inst_29512);

return statearr_29555;
})();
if(cljs.core.truth_(inst_29513)){
var statearr_29556_29620 = state_29535__$1;
(statearr_29556_29620[(1)] = (32));

} else {
var statearr_29557_29621 = state_29535__$1;
(statearr_29557_29621[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (32))){
var inst_29502 = (state_29535[(24)]);
var inst_29515 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29502);
var inst_29516 = cljs.core.pr_str.call(null,inst_29515);
var inst_29517 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29516)].join('');
var inst_29518 = figwheel.client.utils.log.call(null,inst_29517);
var state_29535__$1 = state_29535;
var statearr_29558_29622 = state_29535__$1;
(statearr_29558_29622[(2)] = inst_29518);

(statearr_29558_29622[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (33))){
var state_29535__$1 = state_29535;
var statearr_29559_29623 = state_29535__$1;
(statearr_29559_29623[(2)] = null);

(statearr_29559_29623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (13))){
var inst_29435 = (state_29535[(26)]);
var inst_29439 = cljs.core.chunk_first.call(null,inst_29435);
var inst_29440 = cljs.core.chunk_rest.call(null,inst_29435);
var inst_29441 = cljs.core.count.call(null,inst_29439);
var inst_29422 = inst_29440;
var inst_29423 = inst_29439;
var inst_29424 = inst_29441;
var inst_29425 = (0);
var state_29535__$1 = (function (){var statearr_29560 = state_29535;
(statearr_29560[(7)] = inst_29424);

(statearr_29560[(8)] = inst_29425);

(statearr_29560[(9)] = inst_29422);

(statearr_29560[(10)] = inst_29423);

return statearr_29560;
})();
var statearr_29561_29624 = state_29535__$1;
(statearr_29561_29624[(2)] = null);

(statearr_29561_29624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (22))){
var inst_29474 = (state_29535[(14)]);
var inst_29487 = (state_29535[(2)]);
var inst_29488 = cljs.core.not_empty.call(null,inst_29474);
var state_29535__$1 = (function (){var statearr_29562 = state_29535;
(statearr_29562[(27)] = inst_29487);

return statearr_29562;
})();
if(cljs.core.truth_(inst_29488)){
var statearr_29563_29625 = state_29535__$1;
(statearr_29563_29625[(1)] = (23));

} else {
var statearr_29564_29626 = state_29535__$1;
(statearr_29564_29626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (36))){
var state_29535__$1 = state_29535;
var statearr_29565_29627 = state_29535__$1;
(statearr_29565_29627[(2)] = null);

(statearr_29565_29627[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (29))){
var inst_29503 = (state_29535[(28)]);
var inst_29506 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29503);
var inst_29507 = cljs.core.pr_str.call(null,inst_29506);
var inst_29508 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29507)].join('');
var inst_29509 = figwheel.client.utils.log.call(null,inst_29508);
var state_29535__$1 = state_29535;
var statearr_29566_29628 = state_29535__$1;
(statearr_29566_29628[(2)] = inst_29509);

(statearr_29566_29628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (6))){
var inst_29456 = (state_29535[(2)]);
var state_29535__$1 = state_29535;
var statearr_29567_29629 = state_29535__$1;
(statearr_29567_29629[(2)] = inst_29456);

(statearr_29567_29629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (28))){
var inst_29503 = (state_29535[(28)]);
var inst_29500 = (state_29535[(2)]);
var inst_29501 = cljs.core.get.call(null,inst_29500,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29502 = cljs.core.get.call(null,inst_29500,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29503__$1 = cljs.core.get.call(null,inst_29500,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29504 = cljs.core.not_empty.call(null,inst_29503__$1);
var state_29535__$1 = (function (){var statearr_29568 = state_29535;
(statearr_29568[(28)] = inst_29503__$1);

(statearr_29568[(24)] = inst_29502);

(statearr_29568[(29)] = inst_29501);

return statearr_29568;
})();
if(cljs.core.truth_(inst_29504)){
var statearr_29569_29630 = state_29535__$1;
(statearr_29569_29630[(1)] = (29));

} else {
var statearr_29570_29631 = state_29535__$1;
(statearr_29570_29631[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (25))){
var inst_29533 = (state_29535[(2)]);
var state_29535__$1 = state_29535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29535__$1,inst_29533);
} else {
if((state_val_29536 === (34))){
var inst_29501 = (state_29535[(29)]);
var inst_29521 = (state_29535[(2)]);
var inst_29522 = cljs.core.not_empty.call(null,inst_29501);
var state_29535__$1 = (function (){var statearr_29571 = state_29535;
(statearr_29571[(30)] = inst_29521);

return statearr_29571;
})();
if(cljs.core.truth_(inst_29522)){
var statearr_29572_29632 = state_29535__$1;
(statearr_29572_29632[(1)] = (35));

} else {
var statearr_29573_29633 = state_29535__$1;
(statearr_29573_29633[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (17))){
var inst_29461 = (state_29535[(22)]);
var state_29535__$1 = state_29535;
var statearr_29574_29634 = state_29535__$1;
(statearr_29574_29634[(2)] = inst_29461);

(statearr_29574_29634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (3))){
var state_29535__$1 = state_29535;
var statearr_29575_29635 = state_29535__$1;
(statearr_29575_29635[(2)] = null);

(statearr_29575_29635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (12))){
var inst_29452 = (state_29535[(2)]);
var state_29535__$1 = state_29535;
var statearr_29576_29636 = state_29535__$1;
(statearr_29576_29636[(2)] = inst_29452);

(statearr_29576_29636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (2))){
var inst_29414 = (state_29535[(20)]);
var inst_29421 = cljs.core.seq.call(null,inst_29414);
var inst_29422 = inst_29421;
var inst_29423 = null;
var inst_29424 = (0);
var inst_29425 = (0);
var state_29535__$1 = (function (){var statearr_29577 = state_29535;
(statearr_29577[(7)] = inst_29424);

(statearr_29577[(8)] = inst_29425);

(statearr_29577[(9)] = inst_29422);

(statearr_29577[(10)] = inst_29423);

return statearr_29577;
})();
var statearr_29578_29637 = state_29535__$1;
(statearr_29578_29637[(2)] = null);

(statearr_29578_29637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (23))){
var inst_29468 = (state_29535[(12)]);
var inst_29467 = (state_29535[(13)]);
var inst_29474 = (state_29535[(14)]);
var inst_29471 = (state_29535[(15)]);
var inst_29494 = (state_29535[(19)]);
var inst_29472 = (state_29535[(16)]);
var inst_29490 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29493 = (function (){var files_not_loaded = inst_29474;
var res = inst_29472;
var res_SINGLEQUOTE_ = inst_29471;
var files_SINGLEQUOTE_ = inst_29468;
var all_files = inst_29467;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29467,inst_29474,inst_29471,inst_29494,inst_29472,inst_29490,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (p__29492){
var map__29579 = p__29492;
var map__29579__$1 = ((cljs.core.seq_QMARK_.call(null,map__29579))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579):map__29579);
var meta_data = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29467,inst_29474,inst_29471,inst_29494,inst_29472,inst_29490,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
})();
var inst_29494__$1 = cljs.core.group_by.call(null,inst_29493,inst_29474);
var inst_29495 = cljs.core.seq_QMARK_.call(null,inst_29494__$1);
var state_29535__$1 = (function (){var statearr_29580 = state_29535;
(statearr_29580[(31)] = inst_29490);

(statearr_29580[(19)] = inst_29494__$1);

return statearr_29580;
})();
if(inst_29495){
var statearr_29581_29638 = state_29535__$1;
(statearr_29581_29638[(1)] = (26));

} else {
var statearr_29582_29639 = state_29535__$1;
(statearr_29582_29639[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (35))){
var inst_29501 = (state_29535[(29)]);
var inst_29524 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29501);
var inst_29525 = cljs.core.pr_str.call(null,inst_29524);
var inst_29526 = [cljs.core.str("not required: "),cljs.core.str(inst_29525)].join('');
var inst_29527 = figwheel.client.utils.log.call(null,inst_29526);
var state_29535__$1 = state_29535;
var statearr_29583_29640 = state_29535__$1;
(statearr_29583_29640[(2)] = inst_29527);

(statearr_29583_29640[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (19))){
var inst_29468 = (state_29535[(12)]);
var inst_29467 = (state_29535[(13)]);
var inst_29471 = (state_29535[(15)]);
var inst_29472 = (state_29535[(16)]);
var inst_29471__$1 = (state_29535[(2)]);
var inst_29472__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29471__$1);
var inst_29473 = (function (){var res = inst_29472__$1;
var res_SINGLEQUOTE_ = inst_29471__$1;
var files_SINGLEQUOTE_ = inst_29468;
var all_files = inst_29467;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29467,inst_29471,inst_29472,inst_29471__$1,inst_29472__$1,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (p1__29207_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29207_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29467,inst_29471,inst_29472,inst_29471__$1,inst_29472__$1,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
})();
var inst_29474 = cljs.core.filter.call(null,inst_29473,inst_29471__$1);
var inst_29475 = cljs.core.not_empty.call(null,inst_29472__$1);
var state_29535__$1 = (function (){var statearr_29584 = state_29535;
(statearr_29584[(14)] = inst_29474);

(statearr_29584[(15)] = inst_29471__$1);

(statearr_29584[(16)] = inst_29472__$1);

return statearr_29584;
})();
if(cljs.core.truth_(inst_29475)){
var statearr_29585_29641 = state_29535__$1;
(statearr_29585_29641[(1)] = (20));

} else {
var statearr_29586_29642 = state_29535__$1;
(statearr_29586_29642[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (11))){
var state_29535__$1 = state_29535;
var statearr_29587_29643 = state_29535__$1;
(statearr_29587_29643[(2)] = null);

(statearr_29587_29643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (9))){
var inst_29454 = (state_29535[(2)]);
var state_29535__$1 = state_29535;
var statearr_29588_29644 = state_29535__$1;
(statearr_29588_29644[(2)] = inst_29454);

(statearr_29588_29644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (5))){
var inst_29424 = (state_29535[(7)]);
var inst_29425 = (state_29535[(8)]);
var inst_29427 = (inst_29425 < inst_29424);
var inst_29428 = inst_29427;
var state_29535__$1 = state_29535;
if(cljs.core.truth_(inst_29428)){
var statearr_29589_29645 = state_29535__$1;
(statearr_29589_29645[(1)] = (7));

} else {
var statearr_29590_29646 = state_29535__$1;
(statearr_29590_29646[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (14))){
var inst_29435 = (state_29535[(26)]);
var inst_29444 = cljs.core.first.call(null,inst_29435);
var inst_29445 = figwheel.client.file_reloading.eval_body.call(null,inst_29444);
var inst_29446 = cljs.core.next.call(null,inst_29435);
var inst_29422 = inst_29446;
var inst_29423 = null;
var inst_29424 = (0);
var inst_29425 = (0);
var state_29535__$1 = (function (){var statearr_29591 = state_29535;
(statearr_29591[(7)] = inst_29424);

(statearr_29591[(32)] = inst_29445);

(statearr_29591[(8)] = inst_29425);

(statearr_29591[(9)] = inst_29422);

(statearr_29591[(10)] = inst_29423);

return statearr_29591;
})();
var statearr_29592_29647 = state_29535__$1;
(statearr_29592_29647[(2)] = null);

(statearr_29592_29647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (26))){
var inst_29494 = (state_29535[(19)]);
var inst_29497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29494);
var state_29535__$1 = state_29535;
var statearr_29593_29648 = state_29535__$1;
(statearr_29593_29648[(2)] = inst_29497);

(statearr_29593_29648[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (16))){
var inst_29461 = (state_29535[(22)]);
var inst_29463 = (function (){var all_files = inst_29461;
return ((function (all_files,inst_29461,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function (p1__29206_SHARP_){
return cljs.core.update_in.call(null,p1__29206_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29461,state_val_29536,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
})();
var inst_29464 = cljs.core.map.call(null,inst_29463,inst_29461);
var state_29535__$1 = state_29535;
var statearr_29594_29649 = state_29535__$1;
(statearr_29594_29649[(2)] = inst_29464);

(statearr_29594_29649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (30))){
var state_29535__$1 = state_29535;
var statearr_29595_29650 = state_29535__$1;
(statearr_29595_29650[(2)] = null);

(statearr_29595_29650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (10))){
var inst_29435 = (state_29535[(26)]);
var inst_29437 = cljs.core.chunked_seq_QMARK_.call(null,inst_29435);
var state_29535__$1 = state_29535;
if(inst_29437){
var statearr_29596_29651 = state_29535__$1;
(statearr_29596_29651[(1)] = (13));

} else {
var statearr_29597_29652 = state_29535__$1;
(statearr_29597_29652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (18))){
var inst_29468 = (state_29535[(12)]);
var inst_29467 = (state_29535[(13)]);
var inst_29467__$1 = (state_29535[(2)]);
var inst_29468__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29467__$1);
var inst_29469 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29468__$1);
var state_29535__$1 = (function (){var statearr_29598 = state_29535;
(statearr_29598[(12)] = inst_29468__$1);

(statearr_29598[(13)] = inst_29467__$1);

return statearr_29598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29535__$1,(19),inst_29469);
} else {
if((state_val_29536 === (37))){
var inst_29530 = (state_29535[(2)]);
var state_29535__$1 = state_29535;
var statearr_29599_29653 = state_29535__$1;
(statearr_29599_29653[(2)] = inst_29530);

(statearr_29599_29653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (8))){
var inst_29422 = (state_29535[(9)]);
var inst_29435 = (state_29535[(26)]);
var inst_29435__$1 = cljs.core.seq.call(null,inst_29422);
var state_29535__$1 = (function (){var statearr_29600 = state_29535;
(statearr_29600[(26)] = inst_29435__$1);

return statearr_29600;
})();
if(inst_29435__$1){
var statearr_29601_29654 = state_29535__$1;
(statearr_29601_29654[(1)] = (10));

} else {
var statearr_29602_29655 = state_29535__$1;
(statearr_29602_29655[(1)] = (11));

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
});})(c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
;
return ((function (switch__19830__auto__,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto____0 = (function (){
var statearr_29606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29606[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto__);

(statearr_29606[(1)] = (1));

return statearr_29606;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto____1 = (function (state_29535){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_29535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e29607){if((e29607 instanceof Object)){
var ex__19834__auto__ = e29607;
var statearr_29608_29656 = state_29535;
(statearr_29608_29656[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29657 = state_29535;
state_29535 = G__29657;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto__ = function(state_29535){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto____1.call(this,state_29535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
})();
var state__19888__auto__ = (function (){var statearr_29609 = f__19887__auto__.call(null);
(statearr_29609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto__);

return statearr_29609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto__,map__29410,map__29410__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29411,map__29411__$1,msg,files))
);

return c__19886__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29660,link){
var map__29662 = p__29660;
var map__29662__$1 = ((cljs.core.seq_QMARK_.call(null,map__29662))?cljs.core.apply.call(null,cljs.core.hash_map,map__29662):map__29662);
var file = cljs.core.get.call(null,map__29662__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29662,map__29662__$1,file){
return (function (p1__29658_SHARP_,p2__29659_SHARP_){
if(cljs.core._EQ_.call(null,p1__29658_SHARP_,p2__29659_SHARP_)){
return p1__29658_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29662,map__29662__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29666){
var map__29667 = p__29666;
var map__29667__$1 = ((cljs.core.seq_QMARK_.call(null,map__29667))?cljs.core.apply.call(null,cljs.core.hash_map,map__29667):map__29667);
var current_url_length = cljs.core.get.call(null,map__29667__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29667__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29663_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29663_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29668){
var map__29670 = p__29668;
var map__29670__$1 = ((cljs.core.seq_QMARK_.call(null,map__29670))?cljs.core.apply.call(null,cljs.core.hash_map,map__29670):map__29670);
var f_data = map__29670__$1;
var request_url = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17704__auto__ = request_url;
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29671,files_msg){
var map__29693 = p__29671;
var map__29693__$1 = ((cljs.core.seq_QMARK_.call(null,map__29693))?cljs.core.apply.call(null,cljs.core.hash_map,map__29693):map__29693);
var opts = map__29693__$1;
var on_cssload = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29694_29714 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29695_29715 = null;
var count__29696_29716 = (0);
var i__29697_29717 = (0);
while(true){
if((i__29697_29717 < count__29696_29716)){
var f_29718 = cljs.core._nth.call(null,chunk__29695_29715,i__29697_29717);
figwheel.client.file_reloading.reload_css_file.call(null,f_29718);

var G__29719 = seq__29694_29714;
var G__29720 = chunk__29695_29715;
var G__29721 = count__29696_29716;
var G__29722 = (i__29697_29717 + (1));
seq__29694_29714 = G__29719;
chunk__29695_29715 = G__29720;
count__29696_29716 = G__29721;
i__29697_29717 = G__29722;
continue;
} else {
var temp__4126__auto___29723 = cljs.core.seq.call(null,seq__29694_29714);
if(temp__4126__auto___29723){
var seq__29694_29724__$1 = temp__4126__auto___29723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29694_29724__$1)){
var c__18489__auto___29725 = cljs.core.chunk_first.call(null,seq__29694_29724__$1);
var G__29726 = cljs.core.chunk_rest.call(null,seq__29694_29724__$1);
var G__29727 = c__18489__auto___29725;
var G__29728 = cljs.core.count.call(null,c__18489__auto___29725);
var G__29729 = (0);
seq__29694_29714 = G__29726;
chunk__29695_29715 = G__29727;
count__29696_29716 = G__29728;
i__29697_29717 = G__29729;
continue;
} else {
var f_29730 = cljs.core.first.call(null,seq__29694_29724__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29730);

var G__29731 = cljs.core.next.call(null,seq__29694_29724__$1);
var G__29732 = null;
var G__29733 = (0);
var G__29734 = (0);
seq__29694_29714 = G__29731;
chunk__29695_29715 = G__29732;
count__29696_29716 = G__29733;
i__29697_29717 = G__29734;
continue;
}
} else {
}
}
break;
}

var c__19886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto__,map__29693,map__29693__$1,opts,on_cssload){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto__,map__29693,map__29693__$1,opts,on_cssload){
return (function (state_29704){
var state_val_29705 = (state_29704[(1)]);
if((state_val_29705 === (2))){
var inst_29700 = (state_29704[(2)]);
var inst_29701 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29702 = on_cssload.call(null,inst_29701);
var state_29704__$1 = (function (){var statearr_29706 = state_29704;
(statearr_29706[(7)] = inst_29700);

return statearr_29706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29704__$1,inst_29702);
} else {
if((state_val_29705 === (1))){
var inst_29698 = cljs.core.async.timeout.call(null,(100));
var state_29704__$1 = state_29704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29704__$1,(2),inst_29698);
} else {
return null;
}
}
});})(c__19886__auto__,map__29693,map__29693__$1,opts,on_cssload))
;
return ((function (switch__19830__auto__,c__19886__auto__,map__29693,map__29693__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto____0 = (function (){
var statearr_29710 = [null,null,null,null,null,null,null,null];
(statearr_29710[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto__);

(statearr_29710[(1)] = (1));

return statearr_29710;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto____1 = (function (state_29704){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_29704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e29711){if((e29711 instanceof Object)){
var ex__19834__auto__ = e29711;
var statearr_29712_29735 = state_29704;
(statearr_29712_29735[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29736 = state_29704;
state_29704 = G__29736;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto__ = function(state_29704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto____1.call(this,state_29704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto__,map__29693,map__29693__$1,opts,on_cssload))
})();
var state__19888__auto__ = (function (){var statearr_29713 = f__19887__auto__.call(null);
(statearr_29713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto__);

return statearr_29713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto__,map__29693,map__29693__$1,opts,on_cssload))
);

return c__19886__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map