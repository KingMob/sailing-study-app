// Compiled by ClojureScript 0.0-3148 {:elide-asserts false}
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
return cljs.core.reduce.call(null,(function (p1__29077_SHARP_,p2__29078_SHARP_){
var and__17691__auto__ = p1__29077_SHARP_;
if(cljs.core.truth_(and__17691__auto__)){
return p2__29078_SHARP_;
} else {
return and__17691__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17703__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17703__auto__){
return or__17703__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29080_SHARP_,p2__29079_SHARP_){
return [cljs.core.str(p2__29079_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__17703__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17703__auto__){
return or__17703__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17703__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18598__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18602__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18602__auto__,method_table__18598__auto__,prefer_table__18599__auto__,method_cache__18600__auto__,cached_hierarchy__18601__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29081){
var map__29082 = p__29081;
var map__29082__$1 = ((cljs.core.seq_QMARK_.call(null,map__29082))?cljs.core.apply.call(null,cljs.core.hash_map,map__29082):map__29082);
var file = cljs.core.get.call(null,map__29082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29083){
var map__29084 = p__29083;
var map__29084__$1 = ((cljs.core.seq_QMARK_.call(null,map__29084))?cljs.core.apply.call(null,cljs.core.hash_map,map__29084):map__29084);
var namespace = cljs.core.get.call(null,map__29084__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__18598__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18602__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18602__auto__,method_table__18598__auto__,prefer_table__18599__auto__,method_cache__18600__auto__,cached_hierarchy__18601__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29085){if((e29085 instanceof Error)){
var e = e29085;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29085;

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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29086,callback){
var map__29088 = p__29086;
var map__29088__$1 = ((cljs.core.seq_QMARK_.call(null,map__29088))?cljs.core.apply.call(null,cljs.core.hash_map,map__29088):map__29088);
var file_msg = map__29088__$1;
var request_url = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29088,map__29088__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29088,map__29088__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29089){
var map__29091 = p__29089;
var map__29091__$1 = ((cljs.core.seq_QMARK_.call(null,map__29091))?cljs.core.apply.call(null,cljs.core.hash_map,map__29091):map__29091);
var file_msg = map__29091__$1;
var meta_data = cljs.core.get.call(null,map__29091__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17703__auto__ = meta_data;
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17691__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17691__auto__){
var or__17703__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17703__auto____$1)){
return or__17703__auto____$1;
} else {
var and__17691__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17691__auto____$1){
var or__17703__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17703__auto____$2){
return or__17703__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17691__auto____$1;
}
}
}
} else {
return and__17691__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29092,callback){
var map__29094 = p__29092;
var map__29094__$1 = ((cljs.core.seq_QMARK_.call(null,map__29094))?cljs.core.apply.call(null,cljs.core.hash_map,map__29094):map__29094);
var file_msg = map__29094__$1;
var namespace = cljs.core.get.call(null,map__29094__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29094__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__19885__auto___29181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___29181,out){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___29181,out){
return (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (7))){
var inst_29147 = (state_29163[(7)]);
var inst_29153 = (state_29163[(2)]);
var inst_29154 = cljs.core.async.put_BANG_.call(null,out,inst_29153);
var inst_29143 = inst_29147;
var state_29163__$1 = (function (){var statearr_29165 = state_29163;
(statearr_29165[(8)] = inst_29154);

(statearr_29165[(9)] = inst_29143);

return statearr_29165;
})();
var statearr_29166_29182 = state_29163__$1;
(statearr_29166_29182[(2)] = null);

(statearr_29166_29182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var inst_29159 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29167_29183 = state_29163__$1;
(statearr_29167_29183[(2)] = inst_29159);

(statearr_29167_29183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (5))){
var inst_29157 = cljs.core.async.close_BANG_.call(null,out);
var state_29163__$1 = state_29163;
var statearr_29168_29184 = state_29163__$1;
(statearr_29168_29184[(2)] = inst_29157);

(statearr_29168_29184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (4))){
var inst_29146 = (state_29163[(10)]);
var inst_29151 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29146);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(7),inst_29151);
} else {
if((state_val_29164 === (3))){
var inst_29161 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (2))){
var inst_29146 = (state_29163[(10)]);
var inst_29143 = (state_29163[(9)]);
var inst_29146__$1 = cljs.core.nth.call(null,inst_29143,(0),null);
var inst_29147 = cljs.core.nthnext.call(null,inst_29143,(1));
var inst_29148 = (inst_29146__$1 == null);
var inst_29149 = cljs.core.not.call(null,inst_29148);
var state_29163__$1 = (function (){var statearr_29169 = state_29163;
(statearr_29169[(7)] = inst_29147);

(statearr_29169[(10)] = inst_29146__$1);

return statearr_29169;
})();
if(inst_29149){
var statearr_29170_29185 = state_29163__$1;
(statearr_29170_29185[(1)] = (4));

} else {
var statearr_29171_29186 = state_29163__$1;
(statearr_29171_29186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (1))){
var inst_29141 = cljs.core.nth.call(null,files,(0),null);
var inst_29142 = cljs.core.nthnext.call(null,files,(1));
var inst_29143 = files;
var state_29163__$1 = (function (){var statearr_29172 = state_29163;
(statearr_29172[(11)] = inst_29141);

(statearr_29172[(12)] = inst_29142);

(statearr_29172[(9)] = inst_29143);

return statearr_29172;
})();
var statearr_29173_29187 = state_29163__$1;
(statearr_29173_29187[(2)] = null);

(statearr_29173_29187[(1)] = (2));


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
});})(c__19885__auto___29181,out))
;
return ((function (switch__19829__auto__,c__19885__auto___29181,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto____0 = (function (){
var statearr_29177 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29177[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto__);

(statearr_29177[(1)] = (1));

return statearr_29177;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto____1 = (function (state_29163){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_29163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e29178){if((e29178 instanceof Object)){
var ex__19833__auto__ = e29178;
var statearr_29179_29188 = state_29163;
(statearr_29179_29188[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29189 = state_29163;
state_29163 = G__29189;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___29181,out))
})();
var state__19887__auto__ = (function (){var statearr_29180 = f__19886__auto__.call(null);
(statearr_29180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___29181);

return statearr_29180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___29181,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29190,p__29191){
var map__29194 = p__29190;
var map__29194__$1 = ((cljs.core.seq_QMARK_.call(null,map__29194))?cljs.core.apply.call(null,cljs.core.hash_map,map__29194):map__29194);
var opts = map__29194__$1;
var url_rewriter = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29195 = p__29191;
var map__29195__$1 = ((cljs.core.seq_QMARK_.call(null,map__29195))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);
var file_msg = map__29195__$1;
var file = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29196){
var map__29199 = p__29196;
var map__29199__$1 = ((cljs.core.seq_QMARK_.call(null,map__29199))?cljs.core.apply.call(null,cljs.core.hash_map,map__29199):map__29199);
var file = cljs.core.get.call(null,map__29199__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29199__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17691__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17691__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17691__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29200){var e = e29200;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29205,p__29206){
var map__29407 = p__29205;
var map__29407__$1 = ((cljs.core.seq_QMARK_.call(null,map__29407))?cljs.core.apply.call(null,cljs.core.hash_map,map__29407):map__29407);
var opts = map__29407__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29407__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29407__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29407__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29408 = p__29206;
var map__29408__$1 = ((cljs.core.seq_QMARK_.call(null,map__29408))?cljs.core.apply.call(null,cljs.core.hash_map,map__29408):map__29408);
var msg = map__29408__$1;
var files = cljs.core.get.call(null,map__29408__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (state_29532){
var state_val_29533 = (state_29532[(1)]);
if((state_val_29533 === (7))){
var inst_29422 = (state_29532[(7)]);
var inst_29420 = (state_29532[(8)]);
var inst_29421 = (state_29532[(9)]);
var inst_29419 = (state_29532[(10)]);
var inst_29427 = cljs.core._nth.call(null,inst_29420,inst_29422);
var inst_29428 = figwheel.client.file_reloading.eval_body.call(null,inst_29427);
var inst_29429 = (inst_29422 + (1));
var tmp29534 = inst_29420;
var tmp29535 = inst_29421;
var tmp29536 = inst_29419;
var inst_29419__$1 = tmp29536;
var inst_29420__$1 = tmp29534;
var inst_29421__$1 = tmp29535;
var inst_29422__$1 = inst_29429;
var state_29532__$1 = (function (){var statearr_29537 = state_29532;
(statearr_29537[(11)] = inst_29428);

(statearr_29537[(7)] = inst_29422__$1);

(statearr_29537[(8)] = inst_29420__$1);

(statearr_29537[(9)] = inst_29421__$1);

(statearr_29537[(10)] = inst_29419__$1);

return statearr_29537;
})();
var statearr_29538_29607 = state_29532__$1;
(statearr_29538_29607[(2)] = null);

(statearr_29538_29607[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (20))){
var inst_29468 = (state_29532[(12)]);
var inst_29465 = (state_29532[(13)]);
var inst_29469 = (state_29532[(14)]);
var inst_29464 = (state_29532[(15)]);
var inst_29471 = (state_29532[(16)]);
var inst_29474 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29476 = (function (){var files_not_loaded = inst_29471;
var res = inst_29469;
var res_SINGLEQUOTE_ = inst_29468;
var files_SINGLEQUOTE_ = inst_29465;
var all_files = inst_29464;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29465,inst_29469,inst_29464,inst_29471,inst_29474,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (p__29475){
var map__29539 = p__29475;
var map__29539__$1 = ((cljs.core.seq_QMARK_.call(null,map__29539))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);
var file = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29465,inst_29469,inst_29464,inst_29471,inst_29474,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
})();
var inst_29477 = cljs.core.map.call(null,inst_29476,inst_29469);
var inst_29478 = cljs.core.pr_str.call(null,inst_29477);
var inst_29479 = figwheel.client.utils.log.call(null,inst_29478);
var inst_29480 = (function (){var files_not_loaded = inst_29471;
var res = inst_29469;
var res_SINGLEQUOTE_ = inst_29468;
var files_SINGLEQUOTE_ = inst_29465;
var all_files = inst_29464;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29465,inst_29469,inst_29464,inst_29471,inst_29474,inst_29476,inst_29477,inst_29478,inst_29479,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29465,inst_29469,inst_29464,inst_29471,inst_29474,inst_29476,inst_29477,inst_29478,inst_29479,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
})();
var inst_29481 = setTimeout(inst_29480,(10));
var state_29532__$1 = (function (){var statearr_29540 = state_29532;
(statearr_29540[(17)] = inst_29479);

(statearr_29540[(18)] = inst_29474);

return statearr_29540;
})();
var statearr_29541_29608 = state_29532__$1;
(statearr_29541_29608[(2)] = inst_29481);

(statearr_29541_29608[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (27))){
var inst_29491 = (state_29532[(19)]);
var state_29532__$1 = state_29532;
var statearr_29542_29609 = state_29532__$1;
(statearr_29542_29609[(2)] = inst_29491);

(statearr_29542_29609[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (1))){
var inst_29411 = (state_29532[(20)]);
var inst_29409 = before_jsload.call(null,files);
var inst_29410 = (function (){return ((function (inst_29411,inst_29409,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (p1__29201_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29201_SHARP_);
});
;})(inst_29411,inst_29409,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
})();
var inst_29411__$1 = cljs.core.filter.call(null,inst_29410,files);
var inst_29412 = cljs.core.not_empty.call(null,inst_29411__$1);
var state_29532__$1 = (function (){var statearr_29543 = state_29532;
(statearr_29543[(20)] = inst_29411__$1);

(statearr_29543[(21)] = inst_29409);

return statearr_29543;
})();
if(cljs.core.truth_(inst_29412)){
var statearr_29544_29610 = state_29532__$1;
(statearr_29544_29610[(1)] = (2));

} else {
var statearr_29545_29611 = state_29532__$1;
(statearr_29545_29611[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (24))){
var state_29532__$1 = state_29532;
var statearr_29546_29612 = state_29532__$1;
(statearr_29546_29612[(2)] = null);

(statearr_29546_29612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (4))){
var inst_29456 = (state_29532[(2)]);
var inst_29457 = (function (){return ((function (inst_29456,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (p1__29202_SHARP_){
var and__17691__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29202_SHARP_);
if(cljs.core.truth_(and__17691__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29202_SHARP_));
} else {
return and__17691__auto__;
}
});
;})(inst_29456,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
})();
var inst_29458 = cljs.core.filter.call(null,inst_29457,files);
var state_29532__$1 = (function (){var statearr_29547 = state_29532;
(statearr_29547[(22)] = inst_29458);

(statearr_29547[(23)] = inst_29456);

return statearr_29547;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29548_29613 = state_29532__$1;
(statearr_29548_29613[(1)] = (16));

} else {
var statearr_29549_29614 = state_29532__$1;
(statearr_29549_29614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (15))){
var inst_29446 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29550_29615 = state_29532__$1;
(statearr_29550_29615[(2)] = inst_29446);

(statearr_29550_29615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (21))){
var state_29532__$1 = state_29532;
var statearr_29551_29616 = state_29532__$1;
(statearr_29551_29616[(2)] = null);

(statearr_29551_29616[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (31))){
var inst_29499 = (state_29532[(24)]);
var inst_29509 = (state_29532[(2)]);
var inst_29510 = cljs.core.not_empty.call(null,inst_29499);
var state_29532__$1 = (function (){var statearr_29552 = state_29532;
(statearr_29552[(25)] = inst_29509);

return statearr_29552;
})();
if(cljs.core.truth_(inst_29510)){
var statearr_29553_29617 = state_29532__$1;
(statearr_29553_29617[(1)] = (32));

} else {
var statearr_29554_29618 = state_29532__$1;
(statearr_29554_29618[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (32))){
var inst_29499 = (state_29532[(24)]);
var inst_29512 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29499);
var inst_29513 = cljs.core.pr_str.call(null,inst_29512);
var inst_29514 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29513)].join('');
var inst_29515 = figwheel.client.utils.log.call(null,inst_29514);
var state_29532__$1 = state_29532;
var statearr_29555_29619 = state_29532__$1;
(statearr_29555_29619[(2)] = inst_29515);

(statearr_29555_29619[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (33))){
var state_29532__$1 = state_29532;
var statearr_29556_29620 = state_29532__$1;
(statearr_29556_29620[(2)] = null);

(statearr_29556_29620[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (13))){
var inst_29432 = (state_29532[(26)]);
var inst_29436 = cljs.core.chunk_first.call(null,inst_29432);
var inst_29437 = cljs.core.chunk_rest.call(null,inst_29432);
var inst_29438 = cljs.core.count.call(null,inst_29436);
var inst_29419 = inst_29437;
var inst_29420 = inst_29436;
var inst_29421 = inst_29438;
var inst_29422 = (0);
var state_29532__$1 = (function (){var statearr_29557 = state_29532;
(statearr_29557[(7)] = inst_29422);

(statearr_29557[(8)] = inst_29420);

(statearr_29557[(9)] = inst_29421);

(statearr_29557[(10)] = inst_29419);

return statearr_29557;
})();
var statearr_29558_29621 = state_29532__$1;
(statearr_29558_29621[(2)] = null);

(statearr_29558_29621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (22))){
var inst_29471 = (state_29532[(16)]);
var inst_29484 = (state_29532[(2)]);
var inst_29485 = cljs.core.not_empty.call(null,inst_29471);
var state_29532__$1 = (function (){var statearr_29559 = state_29532;
(statearr_29559[(27)] = inst_29484);

return statearr_29559;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29560_29622 = state_29532__$1;
(statearr_29560_29622[(1)] = (23));

} else {
var statearr_29561_29623 = state_29532__$1;
(statearr_29561_29623[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (36))){
var state_29532__$1 = state_29532;
var statearr_29562_29624 = state_29532__$1;
(statearr_29562_29624[(2)] = null);

(statearr_29562_29624[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (29))){
var inst_29500 = (state_29532[(28)]);
var inst_29503 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29500);
var inst_29504 = cljs.core.pr_str.call(null,inst_29503);
var inst_29505 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29504)].join('');
var inst_29506 = figwheel.client.utils.log.call(null,inst_29505);
var state_29532__$1 = state_29532;
var statearr_29563_29625 = state_29532__$1;
(statearr_29563_29625[(2)] = inst_29506);

(statearr_29563_29625[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (6))){
var inst_29453 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29564_29626 = state_29532__$1;
(statearr_29564_29626[(2)] = inst_29453);

(statearr_29564_29626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (28))){
var inst_29500 = (state_29532[(28)]);
var inst_29497 = (state_29532[(2)]);
var inst_29498 = cljs.core.get.call(null,inst_29497,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29499 = cljs.core.get.call(null,inst_29497,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29500__$1 = cljs.core.get.call(null,inst_29497,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29501 = cljs.core.not_empty.call(null,inst_29500__$1);
var state_29532__$1 = (function (){var statearr_29565 = state_29532;
(statearr_29565[(28)] = inst_29500__$1);

(statearr_29565[(29)] = inst_29498);

(statearr_29565[(24)] = inst_29499);

return statearr_29565;
})();
if(cljs.core.truth_(inst_29501)){
var statearr_29566_29627 = state_29532__$1;
(statearr_29566_29627[(1)] = (29));

} else {
var statearr_29567_29628 = state_29532__$1;
(statearr_29567_29628[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (25))){
var inst_29530 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29532__$1,inst_29530);
} else {
if((state_val_29533 === (34))){
var inst_29498 = (state_29532[(29)]);
var inst_29518 = (state_29532[(2)]);
var inst_29519 = cljs.core.not_empty.call(null,inst_29498);
var state_29532__$1 = (function (){var statearr_29568 = state_29532;
(statearr_29568[(30)] = inst_29518);

return statearr_29568;
})();
if(cljs.core.truth_(inst_29519)){
var statearr_29569_29629 = state_29532__$1;
(statearr_29569_29629[(1)] = (35));

} else {
var statearr_29570_29630 = state_29532__$1;
(statearr_29570_29630[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (17))){
var inst_29458 = (state_29532[(22)]);
var state_29532__$1 = state_29532;
var statearr_29571_29631 = state_29532__$1;
(statearr_29571_29631[(2)] = inst_29458);

(statearr_29571_29631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (3))){
var state_29532__$1 = state_29532;
var statearr_29572_29632 = state_29532__$1;
(statearr_29572_29632[(2)] = null);

(statearr_29572_29632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (12))){
var inst_29449 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29573_29633 = state_29532__$1;
(statearr_29573_29633[(2)] = inst_29449);

(statearr_29573_29633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (2))){
var inst_29411 = (state_29532[(20)]);
var inst_29418 = cljs.core.seq.call(null,inst_29411);
var inst_29419 = inst_29418;
var inst_29420 = null;
var inst_29421 = (0);
var inst_29422 = (0);
var state_29532__$1 = (function (){var statearr_29574 = state_29532;
(statearr_29574[(7)] = inst_29422);

(statearr_29574[(8)] = inst_29420);

(statearr_29574[(9)] = inst_29421);

(statearr_29574[(10)] = inst_29419);

return statearr_29574;
})();
var statearr_29575_29634 = state_29532__$1;
(statearr_29575_29634[(2)] = null);

(statearr_29575_29634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (23))){
var inst_29468 = (state_29532[(12)]);
var inst_29491 = (state_29532[(19)]);
var inst_29465 = (state_29532[(13)]);
var inst_29469 = (state_29532[(14)]);
var inst_29464 = (state_29532[(15)]);
var inst_29471 = (state_29532[(16)]);
var inst_29487 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29490 = (function (){var files_not_loaded = inst_29471;
var res = inst_29469;
var res_SINGLEQUOTE_ = inst_29468;
var files_SINGLEQUOTE_ = inst_29465;
var all_files = inst_29464;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29491,inst_29465,inst_29469,inst_29464,inst_29471,inst_29487,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (p__29489){
var map__29576 = p__29489;
var map__29576__$1 = ((cljs.core.seq_QMARK_.call(null,map__29576))?cljs.core.apply.call(null,cljs.core.hash_map,map__29576):map__29576);
var meta_data = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29491,inst_29465,inst_29469,inst_29464,inst_29471,inst_29487,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
})();
var inst_29491__$1 = cljs.core.group_by.call(null,inst_29490,inst_29471);
var inst_29492 = cljs.core.seq_QMARK_.call(null,inst_29491__$1);
var state_29532__$1 = (function (){var statearr_29577 = state_29532;
(statearr_29577[(31)] = inst_29487);

(statearr_29577[(19)] = inst_29491__$1);

return statearr_29577;
})();
if(inst_29492){
var statearr_29578_29635 = state_29532__$1;
(statearr_29578_29635[(1)] = (26));

} else {
var statearr_29579_29636 = state_29532__$1;
(statearr_29579_29636[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (35))){
var inst_29498 = (state_29532[(29)]);
var inst_29521 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29498);
var inst_29522 = cljs.core.pr_str.call(null,inst_29521);
var inst_29523 = [cljs.core.str("not required: "),cljs.core.str(inst_29522)].join('');
var inst_29524 = figwheel.client.utils.log.call(null,inst_29523);
var state_29532__$1 = state_29532;
var statearr_29580_29637 = state_29532__$1;
(statearr_29580_29637[(2)] = inst_29524);

(statearr_29580_29637[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (19))){
var inst_29468 = (state_29532[(12)]);
var inst_29465 = (state_29532[(13)]);
var inst_29469 = (state_29532[(14)]);
var inst_29464 = (state_29532[(15)]);
var inst_29468__$1 = (state_29532[(2)]);
var inst_29469__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29468__$1);
var inst_29470 = (function (){var res = inst_29469__$1;
var res_SINGLEQUOTE_ = inst_29468__$1;
var files_SINGLEQUOTE_ = inst_29465;
var all_files = inst_29464;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29465,inst_29469,inst_29464,inst_29468__$1,inst_29469__$1,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (p1__29204_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29204_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29468,inst_29465,inst_29469,inst_29464,inst_29468__$1,inst_29469__$1,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
})();
var inst_29471 = cljs.core.filter.call(null,inst_29470,inst_29468__$1);
var inst_29472 = cljs.core.not_empty.call(null,inst_29469__$1);
var state_29532__$1 = (function (){var statearr_29581 = state_29532;
(statearr_29581[(12)] = inst_29468__$1);

(statearr_29581[(14)] = inst_29469__$1);

(statearr_29581[(16)] = inst_29471);

return statearr_29581;
})();
if(cljs.core.truth_(inst_29472)){
var statearr_29582_29638 = state_29532__$1;
(statearr_29582_29638[(1)] = (20));

} else {
var statearr_29583_29639 = state_29532__$1;
(statearr_29583_29639[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (11))){
var state_29532__$1 = state_29532;
var statearr_29584_29640 = state_29532__$1;
(statearr_29584_29640[(2)] = null);

(statearr_29584_29640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (9))){
var inst_29451 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29585_29641 = state_29532__$1;
(statearr_29585_29641[(2)] = inst_29451);

(statearr_29585_29641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (5))){
var inst_29422 = (state_29532[(7)]);
var inst_29421 = (state_29532[(9)]);
var inst_29424 = (inst_29422 < inst_29421);
var inst_29425 = inst_29424;
var state_29532__$1 = state_29532;
if(cljs.core.truth_(inst_29425)){
var statearr_29586_29642 = state_29532__$1;
(statearr_29586_29642[(1)] = (7));

} else {
var statearr_29587_29643 = state_29532__$1;
(statearr_29587_29643[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (14))){
var inst_29432 = (state_29532[(26)]);
var inst_29441 = cljs.core.first.call(null,inst_29432);
var inst_29442 = figwheel.client.file_reloading.eval_body.call(null,inst_29441);
var inst_29443 = cljs.core.next.call(null,inst_29432);
var inst_29419 = inst_29443;
var inst_29420 = null;
var inst_29421 = (0);
var inst_29422 = (0);
var state_29532__$1 = (function (){var statearr_29588 = state_29532;
(statearr_29588[(32)] = inst_29442);

(statearr_29588[(7)] = inst_29422);

(statearr_29588[(8)] = inst_29420);

(statearr_29588[(9)] = inst_29421);

(statearr_29588[(10)] = inst_29419);

return statearr_29588;
})();
var statearr_29589_29644 = state_29532__$1;
(statearr_29589_29644[(2)] = null);

(statearr_29589_29644[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (26))){
var inst_29491 = (state_29532[(19)]);
var inst_29494 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29491);
var state_29532__$1 = state_29532;
var statearr_29590_29645 = state_29532__$1;
(statearr_29590_29645[(2)] = inst_29494);

(statearr_29590_29645[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (16))){
var inst_29458 = (state_29532[(22)]);
var inst_29460 = (function (){var all_files = inst_29458;
return ((function (all_files,inst_29458,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function (p1__29203_SHARP_){
return cljs.core.update_in.call(null,p1__29203_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29458,state_val_29533,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
})();
var inst_29461 = cljs.core.map.call(null,inst_29460,inst_29458);
var state_29532__$1 = state_29532;
var statearr_29591_29646 = state_29532__$1;
(statearr_29591_29646[(2)] = inst_29461);

(statearr_29591_29646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (30))){
var state_29532__$1 = state_29532;
var statearr_29592_29647 = state_29532__$1;
(statearr_29592_29647[(2)] = null);

(statearr_29592_29647[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (10))){
var inst_29432 = (state_29532[(26)]);
var inst_29434 = cljs.core.chunked_seq_QMARK_.call(null,inst_29432);
var state_29532__$1 = state_29532;
if(inst_29434){
var statearr_29593_29648 = state_29532__$1;
(statearr_29593_29648[(1)] = (13));

} else {
var statearr_29594_29649 = state_29532__$1;
(statearr_29594_29649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (18))){
var inst_29465 = (state_29532[(13)]);
var inst_29464 = (state_29532[(15)]);
var inst_29464__$1 = (state_29532[(2)]);
var inst_29465__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29464__$1);
var inst_29466 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29465__$1);
var state_29532__$1 = (function (){var statearr_29595 = state_29532;
(statearr_29595[(13)] = inst_29465__$1);

(statearr_29595[(15)] = inst_29464__$1);

return statearr_29595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29532__$1,(19),inst_29466);
} else {
if((state_val_29533 === (37))){
var inst_29527 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29596_29650 = state_29532__$1;
(statearr_29596_29650[(2)] = inst_29527);

(statearr_29596_29650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (8))){
var inst_29432 = (state_29532[(26)]);
var inst_29419 = (state_29532[(10)]);
var inst_29432__$1 = cljs.core.seq.call(null,inst_29419);
var state_29532__$1 = (function (){var statearr_29597 = state_29532;
(statearr_29597[(26)] = inst_29432__$1);

return statearr_29597;
})();
if(inst_29432__$1){
var statearr_29598_29651 = state_29532__$1;
(statearr_29598_29651[(1)] = (10));

} else {
var statearr_29599_29652 = state_29532__$1;
(statearr_29599_29652[(1)] = (11));

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
});})(c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
;
return ((function (switch__19829__auto__,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto____0 = (function (){
var statearr_29603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29603[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto__);

(statearr_29603[(1)] = (1));

return statearr_29603;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto____1 = (function (state_29532){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_29532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e29604){if((e29604 instanceof Object)){
var ex__19833__auto__ = e29604;
var statearr_29605_29653 = state_29532;
(statearr_29605_29653[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29654 = state_29532;
state_29532 = G__29654;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto__ = function(state_29532){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto____1.call(this,state_29532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
})();
var state__19887__auto__ = (function (){var statearr_29606 = f__19886__auto__.call(null);
(statearr_29606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto__);

return statearr_29606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto__,map__29407,map__29407__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29408,map__29408__$1,msg,files))
);

return c__19885__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29657,link){
var map__29659 = p__29657;
var map__29659__$1 = ((cljs.core.seq_QMARK_.call(null,map__29659))?cljs.core.apply.call(null,cljs.core.hash_map,map__29659):map__29659);
var file = cljs.core.get.call(null,map__29659__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29659,map__29659__$1,file){
return (function (p1__29655_SHARP_,p2__29656_SHARP_){
if(cljs.core._EQ_.call(null,p1__29655_SHARP_,p2__29656_SHARP_)){
return p1__29655_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29659,map__29659__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29663){
var map__29664 = p__29663;
var map__29664__$1 = ((cljs.core.seq_QMARK_.call(null,map__29664))?cljs.core.apply.call(null,cljs.core.hash_map,map__29664):map__29664);
var current_url_length = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29660_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29660_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29665){
var map__29667 = p__29665;
var map__29667__$1 = ((cljs.core.seq_QMARK_.call(null,map__29667))?cljs.core.apply.call(null,cljs.core.hash_map,map__29667):map__29667);
var f_data = map__29667__$1;
var request_url = cljs.core.get.call(null,map__29667__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29667__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17703__auto__ = request_url;
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29668,files_msg){
var map__29690 = p__29668;
var map__29690__$1 = ((cljs.core.seq_QMARK_.call(null,map__29690))?cljs.core.apply.call(null,cljs.core.hash_map,map__29690):map__29690);
var opts = map__29690__$1;
var on_cssload = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29691_29711 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29692_29712 = null;
var count__29693_29713 = (0);
var i__29694_29714 = (0);
while(true){
if((i__29694_29714 < count__29693_29713)){
var f_29715 = cljs.core._nth.call(null,chunk__29692_29712,i__29694_29714);
figwheel.client.file_reloading.reload_css_file.call(null,f_29715);

var G__29716 = seq__29691_29711;
var G__29717 = chunk__29692_29712;
var G__29718 = count__29693_29713;
var G__29719 = (i__29694_29714 + (1));
seq__29691_29711 = G__29716;
chunk__29692_29712 = G__29717;
count__29693_29713 = G__29718;
i__29694_29714 = G__29719;
continue;
} else {
var temp__4126__auto___29720 = cljs.core.seq.call(null,seq__29691_29711);
if(temp__4126__auto___29720){
var seq__29691_29721__$1 = temp__4126__auto___29720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29691_29721__$1)){
var c__18488__auto___29722 = cljs.core.chunk_first.call(null,seq__29691_29721__$1);
var G__29723 = cljs.core.chunk_rest.call(null,seq__29691_29721__$1);
var G__29724 = c__18488__auto___29722;
var G__29725 = cljs.core.count.call(null,c__18488__auto___29722);
var G__29726 = (0);
seq__29691_29711 = G__29723;
chunk__29692_29712 = G__29724;
count__29693_29713 = G__29725;
i__29694_29714 = G__29726;
continue;
} else {
var f_29727 = cljs.core.first.call(null,seq__29691_29721__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29727);

var G__29728 = cljs.core.next.call(null,seq__29691_29721__$1);
var G__29729 = null;
var G__29730 = (0);
var G__29731 = (0);
seq__29691_29711 = G__29728;
chunk__29692_29712 = G__29729;
count__29693_29713 = G__29730;
i__29694_29714 = G__29731;
continue;
}
} else {
}
}
break;
}

var c__19885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto__,map__29690,map__29690__$1,opts,on_cssload){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto__,map__29690,map__29690__$1,opts,on_cssload){
return (function (state_29701){
var state_val_29702 = (state_29701[(1)]);
if((state_val_29702 === (2))){
var inst_29697 = (state_29701[(2)]);
var inst_29698 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29699 = on_cssload.call(null,inst_29698);
var state_29701__$1 = (function (){var statearr_29703 = state_29701;
(statearr_29703[(7)] = inst_29697);

return statearr_29703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29701__$1,inst_29699);
} else {
if((state_val_29702 === (1))){
var inst_29695 = cljs.core.async.timeout.call(null,(100));
var state_29701__$1 = state_29701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29701__$1,(2),inst_29695);
} else {
return null;
}
}
});})(c__19885__auto__,map__29690,map__29690__$1,opts,on_cssload))
;
return ((function (switch__19829__auto__,c__19885__auto__,map__29690,map__29690__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto____0 = (function (){
var statearr_29707 = [null,null,null,null,null,null,null,null];
(statearr_29707[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto__);

(statearr_29707[(1)] = (1));

return statearr_29707;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto____1 = (function (state_29701){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_29701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e29708){if((e29708 instanceof Object)){
var ex__19833__auto__ = e29708;
var statearr_29709_29732 = state_29701;
(statearr_29709_29732[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29733 = state_29701;
state_29701 = G__29733;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto__ = function(state_29701){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto____1.call(this,state_29701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto__,map__29690,map__29690__$1,opts,on_cssload))
})();
var state__19887__auto__ = (function (){var statearr_29710 = f__19886__auto__.call(null);
(statearr_29710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto__);

return statearr_29710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto__,map__29690,map__29690__$1,opts,on_cssload))
);

return c__19885__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map