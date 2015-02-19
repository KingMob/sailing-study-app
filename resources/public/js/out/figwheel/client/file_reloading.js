// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
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
return cljs.core.reduce.call(null,(function (p1__31215_SHARP_,p2__31216_SHARP_){
var and__13316__auto__ = p1__31215_SHARP_;
if(cljs.core.truth_(and__13316__auto__)){
return p2__31216_SHARP_;
} else {
return and__13316__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__13328__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__13328__auto__){
return or__13328__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31218_SHARP_,p2__31217_SHARP_){
return [cljs.core.str(p2__31217_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__13328__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__13328__auto__){
return or__13328__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__13328__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__14225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14226__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14227__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14229__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14229__auto__,method_table__14225__auto__,prefer_table__14226__auto__,method_cache__14227__auto__,cached_hierarchy__14228__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31219){
var map__31220 = p__31219;
var map__31220__$1 = ((cljs.core.seq_QMARK_.call(null,map__31220))?cljs.core.apply.call(null,cljs.core.hash_map,map__31220):map__31220);
var file = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31221){
var map__31222 = p__31221;
var map__31222__$1 = ((cljs.core.seq_QMARK_.call(null,map__31222))?cljs.core.apply.call(null,cljs.core.hash_map,map__31222):map__31222);
var namespace = cljs.core.get.call(null,map__31222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__14225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14226__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14227__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14229__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14229__auto__,method_table__14225__auto__,prefer_table__14226__auto__,method_cache__14227__auto__,cached_hierarchy__14228__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31223){if((e31223 instanceof Error)){
var e = e31223;
return false;
} else {
throw e31223;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__31224,callback){
var map__31226 = p__31224;
var map__31226__$1 = ((cljs.core.seq_QMARK_.call(null,map__31226))?cljs.core.apply.call(null,cljs.core.hash_map,map__31226):map__31226);
var file_msg = map__31226__$1;
var request_url = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31226,map__31226__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31226,map__31226__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__31227){
var map__31229 = p__31227;
var map__31229__$1 = ((cljs.core.seq_QMARK_.call(null,map__31229))?cljs.core.apply.call(null,cljs.core.hash_map,map__31229):map__31229);
var file_msg = map__31229__$1;
var meta_data = cljs.core.get.call(null,map__31229__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31229__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__13328__auto__ = meta_data;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__13316__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__13316__auto__){
var or__13328__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__13328__auto____$1)){
return or__13328__auto____$1;
} else {
var and__13316__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__13316__auto____$1){
var or__13328__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__13328__auto____$2){
return or__13328__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__13316__auto____$1;
}
}
}
} else {
return and__13316__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__31230,callback){
var map__31232 = p__31230;
var map__31232__$1 = ((cljs.core.seq_QMARK_.call(null,map__31232))?cljs.core.apply.call(null,cljs.core.hash_map,map__31232):map__31232);
var file_msg = map__31232__$1;
var namespace = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__15997__auto___31319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___31319,out){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___31319,out){
return (function (state_31301){
var state_val_31302 = (state_31301[(1)]);
if((state_val_31302 === (7))){
var inst_31285 = (state_31301[(7)]);
var inst_31291 = (state_31301[(2)]);
var inst_31292 = cljs.core.async.put_BANG_.call(null,out,inst_31291);
var inst_31281 = inst_31285;
var state_31301__$1 = (function (){var statearr_31303 = state_31301;
(statearr_31303[(8)] = inst_31292);

(statearr_31303[(9)] = inst_31281);

return statearr_31303;
})();
var statearr_31304_31320 = state_31301__$1;
(statearr_31304_31320[(2)] = null);

(statearr_31304_31320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (6))){
var inst_31297 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
var statearr_31305_31321 = state_31301__$1;
(statearr_31305_31321[(2)] = inst_31297);

(statearr_31305_31321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (5))){
var inst_31295 = cljs.core.async.close_BANG_.call(null,out);
var state_31301__$1 = state_31301;
var statearr_31306_31322 = state_31301__$1;
(statearr_31306_31322[(2)] = inst_31295);

(statearr_31306_31322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (4))){
var inst_31284 = (state_31301[(10)]);
var inst_31289 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31284);
var state_31301__$1 = state_31301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31301__$1,(7),inst_31289);
} else {
if((state_val_31302 === (3))){
var inst_31299 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31301__$1,inst_31299);
} else {
if((state_val_31302 === (2))){
var inst_31281 = (state_31301[(9)]);
var inst_31284 = (state_31301[(10)]);
var inst_31284__$1 = cljs.core.nth.call(null,inst_31281,(0),null);
var inst_31285 = cljs.core.nthnext.call(null,inst_31281,(1));
var inst_31286 = (inst_31284__$1 == null);
var inst_31287 = cljs.core.not.call(null,inst_31286);
var state_31301__$1 = (function (){var statearr_31307 = state_31301;
(statearr_31307[(7)] = inst_31285);

(statearr_31307[(10)] = inst_31284__$1);

return statearr_31307;
})();
if(inst_31287){
var statearr_31308_31323 = state_31301__$1;
(statearr_31308_31323[(1)] = (4));

} else {
var statearr_31309_31324 = state_31301__$1;
(statearr_31309_31324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (1))){
var inst_31279 = cljs.core.nth.call(null,files,(0),null);
var inst_31280 = cljs.core.nthnext.call(null,files,(1));
var inst_31281 = files;
var state_31301__$1 = (function (){var statearr_31310 = state_31301;
(statearr_31310[(11)] = inst_31279);

(statearr_31310[(9)] = inst_31281);

(statearr_31310[(12)] = inst_31280);

return statearr_31310;
})();
var statearr_31311_31325 = state_31301__$1;
(statearr_31311_31325[(2)] = null);

(statearr_31311_31325[(1)] = (2));


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
});})(c__15997__auto___31319,out))
;
return ((function (switch__15941__auto__,c__15997__auto___31319,out){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_31315 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31315[(0)] = state_machine__15942__auto__);

(statearr_31315[(1)] = (1));

return statearr_31315;
});
var state_machine__15942__auto____1 = (function (state_31301){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_31301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e31316){if((e31316 instanceof Object)){
var ex__15945__auto__ = e31316;
var statearr_31317_31326 = state_31301;
(statearr_31317_31326[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31327 = state_31301;
state_31301 = G__31327;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_31301){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_31301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___31319,out))
})();
var state__15999__auto__ = (function (){var statearr_31318 = f__15998__auto__.call(null);
(statearr_31318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___31319);

return statearr_31318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___31319,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31328,p__31329){
var map__31332 = p__31328;
var map__31332__$1 = ((cljs.core.seq_QMARK_.call(null,map__31332))?cljs.core.apply.call(null,cljs.core.hash_map,map__31332):map__31332);
var opts = map__31332__$1;
var url_rewriter = cljs.core.get.call(null,map__31332__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31333 = p__31329;
var map__31333__$1 = ((cljs.core.seq_QMARK_.call(null,map__31333))?cljs.core.apply.call(null,cljs.core.hash_map,map__31333):map__31333);
var file_msg = map__31333__$1;
var file = cljs.core.get.call(null,map__31333__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__31334){
var map__31337 = p__31334;
var map__31337__$1 = ((cljs.core.seq_QMARK_.call(null,map__31337))?cljs.core.apply.call(null,cljs.core.hash_map,map__31337):map__31337);
var file = cljs.core.get.call(null,map__31337__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31337__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__13316__auto__ = eval_body__$1;
if(cljs.core.truth_(and__13316__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__13316__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31338){var e = e31338;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31343,p__31344){
var map__31545 = p__31343;
var map__31545__$1 = ((cljs.core.seq_QMARK_.call(null,map__31545))?cljs.core.apply.call(null,cljs.core.hash_map,map__31545):map__31545);
var opts = map__31545__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31545__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31545__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31545__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31546 = p__31344;
var map__31546__$1 = ((cljs.core.seq_QMARK_.call(null,map__31546))?cljs.core.apply.call(null,cljs.core.hash_map,map__31546):map__31546);
var msg = map__31546__$1;
var files = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (state_31670){
var state_val_31671 = (state_31670[(1)]);
if((state_val_31671 === (7))){
var inst_31557 = (state_31670[(7)]);
var inst_31558 = (state_31670[(8)]);
var inst_31559 = (state_31670[(9)]);
var inst_31560 = (state_31670[(10)]);
var inst_31565 = cljs.core._nth.call(null,inst_31558,inst_31560);
var inst_31566 = figwheel.client.file_reloading.eval_body.call(null,inst_31565);
var inst_31567 = (inst_31560 + (1));
var tmp31672 = inst_31557;
var tmp31673 = inst_31558;
var tmp31674 = inst_31559;
var inst_31557__$1 = tmp31672;
var inst_31558__$1 = tmp31673;
var inst_31559__$1 = tmp31674;
var inst_31560__$1 = inst_31567;
var state_31670__$1 = (function (){var statearr_31675 = state_31670;
(statearr_31675[(7)] = inst_31557__$1);

(statearr_31675[(11)] = inst_31566);

(statearr_31675[(8)] = inst_31558__$1);

(statearr_31675[(9)] = inst_31559__$1);

(statearr_31675[(10)] = inst_31560__$1);

return statearr_31675;
})();
var statearr_31676_31745 = state_31670__$1;
(statearr_31676_31745[(2)] = null);

(statearr_31676_31745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (20))){
var inst_31606 = (state_31670[(12)]);
var inst_31607 = (state_31670[(13)]);
var inst_31602 = (state_31670[(14)]);
var inst_31609 = (state_31670[(15)]);
var inst_31603 = (state_31670[(16)]);
var inst_31612 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31614 = (function (){var files_not_loaded = inst_31609;
var res = inst_31607;
var res_SINGLEQUOTE_ = inst_31606;
var files_SINGLEQUOTE_ = inst_31603;
var all_files = inst_31602;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31606,inst_31607,inst_31602,inst_31609,inst_31603,inst_31612,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (p__31613){
var map__31677 = p__31613;
var map__31677__$1 = ((cljs.core.seq_QMARK_.call(null,map__31677))?cljs.core.apply.call(null,cljs.core.hash_map,map__31677):map__31677);
var file = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31606,inst_31607,inst_31602,inst_31609,inst_31603,inst_31612,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
})();
var inst_31615 = cljs.core.map.call(null,inst_31614,inst_31607);
var inst_31616 = cljs.core.pr_str.call(null,inst_31615);
var inst_31617 = figwheel.client.utils.log.call(null,inst_31616);
var inst_31618 = (function (){var files_not_loaded = inst_31609;
var res = inst_31607;
var res_SINGLEQUOTE_ = inst_31606;
var files_SINGLEQUOTE_ = inst_31603;
var all_files = inst_31602;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31606,inst_31607,inst_31602,inst_31609,inst_31603,inst_31612,inst_31614,inst_31615,inst_31616,inst_31617,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31606,inst_31607,inst_31602,inst_31609,inst_31603,inst_31612,inst_31614,inst_31615,inst_31616,inst_31617,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
})();
var inst_31619 = setTimeout(inst_31618,(10));
var state_31670__$1 = (function (){var statearr_31678 = state_31670;
(statearr_31678[(17)] = inst_31612);

(statearr_31678[(18)] = inst_31617);

return statearr_31678;
})();
var statearr_31679_31746 = state_31670__$1;
(statearr_31679_31746[(2)] = inst_31619);

(statearr_31679_31746[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (27))){
var inst_31629 = (state_31670[(19)]);
var state_31670__$1 = state_31670;
var statearr_31680_31747 = state_31670__$1;
(statearr_31680_31747[(2)] = inst_31629);

(statearr_31680_31747[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (1))){
var inst_31549 = (state_31670[(20)]);
var inst_31547 = before_jsload.call(null,files);
var inst_31548 = (function (){return ((function (inst_31549,inst_31547,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (p1__31339_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31339_SHARP_);
});
;})(inst_31549,inst_31547,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
})();
var inst_31549__$1 = cljs.core.filter.call(null,inst_31548,files);
var inst_31550 = cljs.core.not_empty.call(null,inst_31549__$1);
var state_31670__$1 = (function (){var statearr_31681 = state_31670;
(statearr_31681[(20)] = inst_31549__$1);

(statearr_31681[(21)] = inst_31547);

return statearr_31681;
})();
if(cljs.core.truth_(inst_31550)){
var statearr_31682_31748 = state_31670__$1;
(statearr_31682_31748[(1)] = (2));

} else {
var statearr_31683_31749 = state_31670__$1;
(statearr_31683_31749[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (24))){
var state_31670__$1 = state_31670;
var statearr_31684_31750 = state_31670__$1;
(statearr_31684_31750[(2)] = null);

(statearr_31684_31750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (4))){
var inst_31594 = (state_31670[(2)]);
var inst_31595 = (function (){return ((function (inst_31594,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (p1__31340_SHARP_){
var and__13316__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31340_SHARP_);
if(cljs.core.truth_(and__13316__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31340_SHARP_));
} else {
return and__13316__auto__;
}
});
;})(inst_31594,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
})();
var inst_31596 = cljs.core.filter.call(null,inst_31595,files);
var state_31670__$1 = (function (){var statearr_31685 = state_31670;
(statearr_31685[(22)] = inst_31594);

(statearr_31685[(23)] = inst_31596);

return statearr_31685;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31686_31751 = state_31670__$1;
(statearr_31686_31751[(1)] = (16));

} else {
var statearr_31687_31752 = state_31670__$1;
(statearr_31687_31752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (15))){
var inst_31584 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31688_31753 = state_31670__$1;
(statearr_31688_31753[(2)] = inst_31584);

(statearr_31688_31753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (21))){
var state_31670__$1 = state_31670;
var statearr_31689_31754 = state_31670__$1;
(statearr_31689_31754[(2)] = null);

(statearr_31689_31754[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (31))){
var inst_31637 = (state_31670[(24)]);
var inst_31647 = (state_31670[(2)]);
var inst_31648 = cljs.core.not_empty.call(null,inst_31637);
var state_31670__$1 = (function (){var statearr_31690 = state_31670;
(statearr_31690[(25)] = inst_31647);

return statearr_31690;
})();
if(cljs.core.truth_(inst_31648)){
var statearr_31691_31755 = state_31670__$1;
(statearr_31691_31755[(1)] = (32));

} else {
var statearr_31692_31756 = state_31670__$1;
(statearr_31692_31756[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (32))){
var inst_31637 = (state_31670[(24)]);
var inst_31650 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31637);
var inst_31651 = cljs.core.pr_str.call(null,inst_31650);
var inst_31652 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31651)].join('');
var inst_31653 = figwheel.client.utils.log.call(null,inst_31652);
var state_31670__$1 = state_31670;
var statearr_31693_31757 = state_31670__$1;
(statearr_31693_31757[(2)] = inst_31653);

(statearr_31693_31757[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (33))){
var state_31670__$1 = state_31670;
var statearr_31694_31758 = state_31670__$1;
(statearr_31694_31758[(2)] = null);

(statearr_31694_31758[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (13))){
var inst_31570 = (state_31670[(26)]);
var inst_31574 = cljs.core.chunk_first.call(null,inst_31570);
var inst_31575 = cljs.core.chunk_rest.call(null,inst_31570);
var inst_31576 = cljs.core.count.call(null,inst_31574);
var inst_31557 = inst_31575;
var inst_31558 = inst_31574;
var inst_31559 = inst_31576;
var inst_31560 = (0);
var state_31670__$1 = (function (){var statearr_31695 = state_31670;
(statearr_31695[(7)] = inst_31557);

(statearr_31695[(8)] = inst_31558);

(statearr_31695[(9)] = inst_31559);

(statearr_31695[(10)] = inst_31560);

return statearr_31695;
})();
var statearr_31696_31759 = state_31670__$1;
(statearr_31696_31759[(2)] = null);

(statearr_31696_31759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (22))){
var inst_31609 = (state_31670[(15)]);
var inst_31622 = (state_31670[(2)]);
var inst_31623 = cljs.core.not_empty.call(null,inst_31609);
var state_31670__$1 = (function (){var statearr_31697 = state_31670;
(statearr_31697[(27)] = inst_31622);

return statearr_31697;
})();
if(cljs.core.truth_(inst_31623)){
var statearr_31698_31760 = state_31670__$1;
(statearr_31698_31760[(1)] = (23));

} else {
var statearr_31699_31761 = state_31670__$1;
(statearr_31699_31761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (36))){
var state_31670__$1 = state_31670;
var statearr_31700_31762 = state_31670__$1;
(statearr_31700_31762[(2)] = null);

(statearr_31700_31762[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (29))){
var inst_31638 = (state_31670[(28)]);
var inst_31641 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31638);
var inst_31642 = cljs.core.pr_str.call(null,inst_31641);
var inst_31643 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31642)].join('');
var inst_31644 = figwheel.client.utils.log.call(null,inst_31643);
var state_31670__$1 = state_31670;
var statearr_31701_31763 = state_31670__$1;
(statearr_31701_31763[(2)] = inst_31644);

(statearr_31701_31763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (6))){
var inst_31591 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31702_31764 = state_31670__$1;
(statearr_31702_31764[(2)] = inst_31591);

(statearr_31702_31764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (28))){
var inst_31638 = (state_31670[(28)]);
var inst_31635 = (state_31670[(2)]);
var inst_31636 = cljs.core.get.call(null,inst_31635,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31637 = cljs.core.get.call(null,inst_31635,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31638__$1 = cljs.core.get.call(null,inst_31635,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31639 = cljs.core.not_empty.call(null,inst_31638__$1);
var state_31670__$1 = (function (){var statearr_31703 = state_31670;
(statearr_31703[(29)] = inst_31636);

(statearr_31703[(28)] = inst_31638__$1);

(statearr_31703[(24)] = inst_31637);

return statearr_31703;
})();
if(cljs.core.truth_(inst_31639)){
var statearr_31704_31765 = state_31670__$1;
(statearr_31704_31765[(1)] = (29));

} else {
var statearr_31705_31766 = state_31670__$1;
(statearr_31705_31766[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (25))){
var inst_31668 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31670__$1,inst_31668);
} else {
if((state_val_31671 === (34))){
var inst_31636 = (state_31670[(29)]);
var inst_31656 = (state_31670[(2)]);
var inst_31657 = cljs.core.not_empty.call(null,inst_31636);
var state_31670__$1 = (function (){var statearr_31706 = state_31670;
(statearr_31706[(30)] = inst_31656);

return statearr_31706;
})();
if(cljs.core.truth_(inst_31657)){
var statearr_31707_31767 = state_31670__$1;
(statearr_31707_31767[(1)] = (35));

} else {
var statearr_31708_31768 = state_31670__$1;
(statearr_31708_31768[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (17))){
var inst_31596 = (state_31670[(23)]);
var state_31670__$1 = state_31670;
var statearr_31709_31769 = state_31670__$1;
(statearr_31709_31769[(2)] = inst_31596);

(statearr_31709_31769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (3))){
var state_31670__$1 = state_31670;
var statearr_31710_31770 = state_31670__$1;
(statearr_31710_31770[(2)] = null);

(statearr_31710_31770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (12))){
var inst_31587 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31711_31771 = state_31670__$1;
(statearr_31711_31771[(2)] = inst_31587);

(statearr_31711_31771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (2))){
var inst_31549 = (state_31670[(20)]);
var inst_31556 = cljs.core.seq.call(null,inst_31549);
var inst_31557 = inst_31556;
var inst_31558 = null;
var inst_31559 = (0);
var inst_31560 = (0);
var state_31670__$1 = (function (){var statearr_31712 = state_31670;
(statearr_31712[(7)] = inst_31557);

(statearr_31712[(8)] = inst_31558);

(statearr_31712[(9)] = inst_31559);

(statearr_31712[(10)] = inst_31560);

return statearr_31712;
})();
var statearr_31713_31772 = state_31670__$1;
(statearr_31713_31772[(2)] = null);

(statearr_31713_31772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (23))){
var inst_31606 = (state_31670[(12)]);
var inst_31607 = (state_31670[(13)]);
var inst_31602 = (state_31670[(14)]);
var inst_31609 = (state_31670[(15)]);
var inst_31603 = (state_31670[(16)]);
var inst_31629 = (state_31670[(19)]);
var inst_31625 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31628 = (function (){var files_not_loaded = inst_31609;
var res = inst_31607;
var res_SINGLEQUOTE_ = inst_31606;
var files_SINGLEQUOTE_ = inst_31603;
var all_files = inst_31602;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31606,inst_31607,inst_31602,inst_31609,inst_31603,inst_31629,inst_31625,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (p__31627){
var map__31714 = p__31627;
var map__31714__$1 = ((cljs.core.seq_QMARK_.call(null,map__31714))?cljs.core.apply.call(null,cljs.core.hash_map,map__31714):map__31714);
var meta_data = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31606,inst_31607,inst_31602,inst_31609,inst_31603,inst_31629,inst_31625,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
})();
var inst_31629__$1 = cljs.core.group_by.call(null,inst_31628,inst_31609);
var inst_31630 = cljs.core.seq_QMARK_.call(null,inst_31629__$1);
var state_31670__$1 = (function (){var statearr_31715 = state_31670;
(statearr_31715[(31)] = inst_31625);

(statearr_31715[(19)] = inst_31629__$1);

return statearr_31715;
})();
if(inst_31630){
var statearr_31716_31773 = state_31670__$1;
(statearr_31716_31773[(1)] = (26));

} else {
var statearr_31717_31774 = state_31670__$1;
(statearr_31717_31774[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (35))){
var inst_31636 = (state_31670[(29)]);
var inst_31659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31636);
var inst_31660 = cljs.core.pr_str.call(null,inst_31659);
var inst_31661 = [cljs.core.str("not required: "),cljs.core.str(inst_31660)].join('');
var inst_31662 = figwheel.client.utils.log.call(null,inst_31661);
var state_31670__$1 = state_31670;
var statearr_31718_31775 = state_31670__$1;
(statearr_31718_31775[(2)] = inst_31662);

(statearr_31718_31775[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (19))){
var inst_31606 = (state_31670[(12)]);
var inst_31607 = (state_31670[(13)]);
var inst_31602 = (state_31670[(14)]);
var inst_31603 = (state_31670[(16)]);
var inst_31606__$1 = (state_31670[(2)]);
var inst_31607__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31606__$1);
var inst_31608 = (function (){var res = inst_31607__$1;
var res_SINGLEQUOTE_ = inst_31606__$1;
var files_SINGLEQUOTE_ = inst_31603;
var all_files = inst_31602;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31606,inst_31607,inst_31602,inst_31603,inst_31606__$1,inst_31607__$1,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (p1__31342_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31342_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31606,inst_31607,inst_31602,inst_31603,inst_31606__$1,inst_31607__$1,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
})();
var inst_31609 = cljs.core.filter.call(null,inst_31608,inst_31606__$1);
var inst_31610 = cljs.core.not_empty.call(null,inst_31607__$1);
var state_31670__$1 = (function (){var statearr_31719 = state_31670;
(statearr_31719[(12)] = inst_31606__$1);

(statearr_31719[(13)] = inst_31607__$1);

(statearr_31719[(15)] = inst_31609);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31610)){
var statearr_31720_31776 = state_31670__$1;
(statearr_31720_31776[(1)] = (20));

} else {
var statearr_31721_31777 = state_31670__$1;
(statearr_31721_31777[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (11))){
var state_31670__$1 = state_31670;
var statearr_31722_31778 = state_31670__$1;
(statearr_31722_31778[(2)] = null);

(statearr_31722_31778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (9))){
var inst_31589 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31723_31779 = state_31670__$1;
(statearr_31723_31779[(2)] = inst_31589);

(statearr_31723_31779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (5))){
var inst_31559 = (state_31670[(9)]);
var inst_31560 = (state_31670[(10)]);
var inst_31562 = (inst_31560 < inst_31559);
var inst_31563 = inst_31562;
var state_31670__$1 = state_31670;
if(cljs.core.truth_(inst_31563)){
var statearr_31724_31780 = state_31670__$1;
(statearr_31724_31780[(1)] = (7));

} else {
var statearr_31725_31781 = state_31670__$1;
(statearr_31725_31781[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (14))){
var inst_31570 = (state_31670[(26)]);
var inst_31579 = cljs.core.first.call(null,inst_31570);
var inst_31580 = figwheel.client.file_reloading.eval_body.call(null,inst_31579);
var inst_31581 = cljs.core.next.call(null,inst_31570);
var inst_31557 = inst_31581;
var inst_31558 = null;
var inst_31559 = (0);
var inst_31560 = (0);
var state_31670__$1 = (function (){var statearr_31726 = state_31670;
(statearr_31726[(7)] = inst_31557);

(statearr_31726[(32)] = inst_31580);

(statearr_31726[(8)] = inst_31558);

(statearr_31726[(9)] = inst_31559);

(statearr_31726[(10)] = inst_31560);

return statearr_31726;
})();
var statearr_31727_31782 = state_31670__$1;
(statearr_31727_31782[(2)] = null);

(statearr_31727_31782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (26))){
var inst_31629 = (state_31670[(19)]);
var inst_31632 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31629);
var state_31670__$1 = state_31670;
var statearr_31728_31783 = state_31670__$1;
(statearr_31728_31783[(2)] = inst_31632);

(statearr_31728_31783[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (16))){
var inst_31596 = (state_31670[(23)]);
var inst_31598 = (function (){var all_files = inst_31596;
return ((function (all_files,inst_31596,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function (p1__31341_SHARP_){
return cljs.core.update_in.call(null,p1__31341_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31596,state_val_31671,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
})();
var inst_31599 = cljs.core.map.call(null,inst_31598,inst_31596);
var state_31670__$1 = state_31670;
var statearr_31729_31784 = state_31670__$1;
(statearr_31729_31784[(2)] = inst_31599);

(statearr_31729_31784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (30))){
var state_31670__$1 = state_31670;
var statearr_31730_31785 = state_31670__$1;
(statearr_31730_31785[(2)] = null);

(statearr_31730_31785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (10))){
var inst_31570 = (state_31670[(26)]);
var inst_31572 = cljs.core.chunked_seq_QMARK_.call(null,inst_31570);
var state_31670__$1 = state_31670;
if(inst_31572){
var statearr_31731_31786 = state_31670__$1;
(statearr_31731_31786[(1)] = (13));

} else {
var statearr_31732_31787 = state_31670__$1;
(statearr_31732_31787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (18))){
var inst_31602 = (state_31670[(14)]);
var inst_31603 = (state_31670[(16)]);
var inst_31602__$1 = (state_31670[(2)]);
var inst_31603__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31602__$1);
var inst_31604 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31603__$1);
var state_31670__$1 = (function (){var statearr_31733 = state_31670;
(statearr_31733[(14)] = inst_31602__$1);

(statearr_31733[(16)] = inst_31603__$1);

return statearr_31733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31670__$1,(19),inst_31604);
} else {
if((state_val_31671 === (37))){
var inst_31665 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31734_31788 = state_31670__$1;
(statearr_31734_31788[(2)] = inst_31665);

(statearr_31734_31788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (8))){
var inst_31557 = (state_31670[(7)]);
var inst_31570 = (state_31670[(26)]);
var inst_31570__$1 = cljs.core.seq.call(null,inst_31557);
var state_31670__$1 = (function (){var statearr_31735 = state_31670;
(statearr_31735[(26)] = inst_31570__$1);

return statearr_31735;
})();
if(inst_31570__$1){
var statearr_31736_31789 = state_31670__$1;
(statearr_31736_31789[(1)] = (10));

} else {
var statearr_31737_31790 = state_31670__$1;
(statearr_31737_31790[(1)] = (11));

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
});})(c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
;
return ((function (switch__15941__auto__,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_31741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31741[(0)] = state_machine__15942__auto__);

(statearr_31741[(1)] = (1));

return statearr_31741;
});
var state_machine__15942__auto____1 = (function (state_31670){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_31670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e31742){if((e31742 instanceof Object)){
var ex__15945__auto__ = e31742;
var statearr_31743_31791 = state_31670;
(statearr_31743_31791[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31792 = state_31670;
state_31670 = G__31792;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
})();
var state__15999__auto__ = (function (){var statearr_31744 = f__15998__auto__.call(null);
(statearr_31744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_31744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__,map__31545,map__31545__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31546,map__31546__$1,msg,files))
);

return c__15997__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31795,link){
var map__31797 = p__31795;
var map__31797__$1 = ((cljs.core.seq_QMARK_.call(null,map__31797))?cljs.core.apply.call(null,cljs.core.hash_map,map__31797):map__31797);
var file = cljs.core.get.call(null,map__31797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31797,map__31797__$1,file){
return (function (p1__31793_SHARP_,p2__31794_SHARP_){
if(cljs.core._EQ_.call(null,p1__31793_SHARP_,p2__31794_SHARP_)){
return p1__31793_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31797,map__31797__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31801){
var map__31802 = p__31801;
var map__31802__$1 = ((cljs.core.seq_QMARK_.call(null,map__31802))?cljs.core.apply.call(null,cljs.core.hash_map,map__31802):map__31802);
var current_url_length = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31798_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31798_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31803){
var map__31805 = p__31803;
var map__31805__$1 = ((cljs.core.seq_QMARK_.call(null,map__31805))?cljs.core.apply.call(null,cljs.core.hash_map,map__31805):map__31805);
var f_data = map__31805__$1;
var request_url = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__13328__auto__ = request_url;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31806,files_msg){
var map__31828 = p__31806;
var map__31828__$1 = ((cljs.core.seq_QMARK_.call(null,map__31828))?cljs.core.apply.call(null,cljs.core.hash_map,map__31828):map__31828);
var opts = map__31828__$1;
var on_cssload = cljs.core.get.call(null,map__31828__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31829_31849 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31830_31850 = null;
var count__31831_31851 = (0);
var i__31832_31852 = (0);
while(true){
if((i__31832_31852 < count__31831_31851)){
var f_31853 = cljs.core._nth.call(null,chunk__31830_31850,i__31832_31852);
figwheel.client.file_reloading.reload_css_file.call(null,f_31853);

var G__31854 = seq__31829_31849;
var G__31855 = chunk__31830_31850;
var G__31856 = count__31831_31851;
var G__31857 = (i__31832_31852 + (1));
seq__31829_31849 = G__31854;
chunk__31830_31850 = G__31855;
count__31831_31851 = G__31856;
i__31832_31852 = G__31857;
continue;
} else {
var temp__4126__auto___31858 = cljs.core.seq.call(null,seq__31829_31849);
if(temp__4126__auto___31858){
var seq__31829_31859__$1 = temp__4126__auto___31858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31829_31859__$1)){
var c__14115__auto___31860 = cljs.core.chunk_first.call(null,seq__31829_31859__$1);
var G__31861 = cljs.core.chunk_rest.call(null,seq__31829_31859__$1);
var G__31862 = c__14115__auto___31860;
var G__31863 = cljs.core.count.call(null,c__14115__auto___31860);
var G__31864 = (0);
seq__31829_31849 = G__31861;
chunk__31830_31850 = G__31862;
count__31831_31851 = G__31863;
i__31832_31852 = G__31864;
continue;
} else {
var f_31865 = cljs.core.first.call(null,seq__31829_31859__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31865);

var G__31866 = cljs.core.next.call(null,seq__31829_31859__$1);
var G__31867 = null;
var G__31868 = (0);
var G__31869 = (0);
seq__31829_31849 = G__31866;
chunk__31830_31850 = G__31867;
count__31831_31851 = G__31868;
i__31832_31852 = G__31869;
continue;
}
} else {
}
}
break;
}

var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__,map__31828,map__31828__$1,opts,on_cssload){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__,map__31828,map__31828__$1,opts,on_cssload){
return (function (state_31839){
var state_val_31840 = (state_31839[(1)]);
if((state_val_31840 === (2))){
var inst_31835 = (state_31839[(2)]);
var inst_31836 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31837 = on_cssload.call(null,inst_31836);
var state_31839__$1 = (function (){var statearr_31841 = state_31839;
(statearr_31841[(7)] = inst_31835);

return statearr_31841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31839__$1,inst_31837);
} else {
if((state_val_31840 === (1))){
var inst_31833 = cljs.core.async.timeout.call(null,(100));
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31839__$1,(2),inst_31833);
} else {
return null;
}
}
});})(c__15997__auto__,map__31828,map__31828__$1,opts,on_cssload))
;
return ((function (switch__15941__auto__,c__15997__auto__,map__31828,map__31828__$1,opts,on_cssload){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_31845 = [null,null,null,null,null,null,null,null];
(statearr_31845[(0)] = state_machine__15942__auto__);

(statearr_31845[(1)] = (1));

return statearr_31845;
});
var state_machine__15942__auto____1 = (function (state_31839){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_31839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e31846){if((e31846 instanceof Object)){
var ex__15945__auto__ = e31846;
var statearr_31847_31870 = state_31839;
(statearr_31847_31870[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31871 = state_31839;
state_31839 = G__31871;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_31839){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_31839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__,map__31828,map__31828__$1,opts,on_cssload))
})();
var state__15999__auto__ = (function (){var statearr_31848 = f__15998__auto__.call(null);
(statearr_31848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_31848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__,map__31828,map__31828__$1,opts,on_cssload))
);

return c__15997__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map