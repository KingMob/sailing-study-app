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
return cljs.core.reduce.call(null,(function (p1__31216_SHARP_,p2__31217_SHARP_){
var and__13316__auto__ = p1__31216_SHARP_;
if(cljs.core.truth_(and__13316__auto__)){
return p2__31217_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31219_SHARP_,p2__31218_SHARP_){
return [cljs.core.str(p2__31218_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31220){
var map__31221 = p__31220;
var map__31221__$1 = ((cljs.core.seq_QMARK_.call(null,map__31221))?cljs.core.apply.call(null,cljs.core.hash_map,map__31221):map__31221);
var file = cljs.core.get.call(null,map__31221__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31222){
var map__31223 = p__31222;
var map__31223__$1 = ((cljs.core.seq_QMARK_.call(null,map__31223))?cljs.core.apply.call(null,cljs.core.hash_map,map__31223):map__31223);
var namespace = cljs.core.get.call(null,map__31223__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e31224){if((e31224 instanceof Error)){
var e = e31224;
return false;
} else {
throw e31224;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__31225,callback){
var map__31227 = p__31225;
var map__31227__$1 = ((cljs.core.seq_QMARK_.call(null,map__31227))?cljs.core.apply.call(null,cljs.core.hash_map,map__31227):map__31227);
var file_msg = map__31227__$1;
var request_url = cljs.core.get.call(null,map__31227__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31227,map__31227__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31227,map__31227__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__31228){
var map__31230 = p__31228;
var map__31230__$1 = ((cljs.core.seq_QMARK_.call(null,map__31230))?cljs.core.apply.call(null,cljs.core.hash_map,map__31230):map__31230);
var file_msg = map__31230__$1;
var meta_data = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__31231,callback){
var map__31233 = p__31231;
var map__31233__$1 = ((cljs.core.seq_QMARK_.call(null,map__31233))?cljs.core.apply.call(null,cljs.core.hash_map,map__31233):map__31233);
var file_msg = map__31233__$1;
var namespace = cljs.core.get.call(null,map__31233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31233__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__15996__auto___31320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___31320,out){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___31320,out){
return (function (state_31302){
var state_val_31303 = (state_31302[(1)]);
if((state_val_31303 === (7))){
var inst_31286 = (state_31302[(7)]);
var inst_31292 = (state_31302[(2)]);
var inst_31293 = cljs.core.async.put_BANG_.call(null,out,inst_31292);
var inst_31282 = inst_31286;
var state_31302__$1 = (function (){var statearr_31304 = state_31302;
(statearr_31304[(8)] = inst_31282);

(statearr_31304[(9)] = inst_31293);

return statearr_31304;
})();
var statearr_31305_31321 = state_31302__$1;
(statearr_31305_31321[(2)] = null);

(statearr_31305_31321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (6))){
var inst_31298 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31306_31322 = state_31302__$1;
(statearr_31306_31322[(2)] = inst_31298);

(statearr_31306_31322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (5))){
var inst_31296 = cljs.core.async.close_BANG_.call(null,out);
var state_31302__$1 = state_31302;
var statearr_31307_31323 = state_31302__$1;
(statearr_31307_31323[(2)] = inst_31296);

(statearr_31307_31323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (4))){
var inst_31285 = (state_31302[(10)]);
var inst_31290 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31285);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31302__$1,(7),inst_31290);
} else {
if((state_val_31303 === (3))){
var inst_31300 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31302__$1,inst_31300);
} else {
if((state_val_31303 === (2))){
var inst_31285 = (state_31302[(10)]);
var inst_31282 = (state_31302[(8)]);
var inst_31285__$1 = cljs.core.nth.call(null,inst_31282,(0),null);
var inst_31286 = cljs.core.nthnext.call(null,inst_31282,(1));
var inst_31287 = (inst_31285__$1 == null);
var inst_31288 = cljs.core.not.call(null,inst_31287);
var state_31302__$1 = (function (){var statearr_31308 = state_31302;
(statearr_31308[(10)] = inst_31285__$1);

(statearr_31308[(7)] = inst_31286);

return statearr_31308;
})();
if(inst_31288){
var statearr_31309_31324 = state_31302__$1;
(statearr_31309_31324[(1)] = (4));

} else {
var statearr_31310_31325 = state_31302__$1;
(statearr_31310_31325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (1))){
var inst_31280 = cljs.core.nth.call(null,files,(0),null);
var inst_31281 = cljs.core.nthnext.call(null,files,(1));
var inst_31282 = files;
var state_31302__$1 = (function (){var statearr_31311 = state_31302;
(statearr_31311[(11)] = inst_31281);

(statearr_31311[(12)] = inst_31280);

(statearr_31311[(8)] = inst_31282);

return statearr_31311;
})();
var statearr_31312_31326 = state_31302__$1;
(statearr_31312_31326[(2)] = null);

(statearr_31312_31326[(1)] = (2));


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
});})(c__15996__auto___31320,out))
;
return ((function (switch__15940__auto__,c__15996__auto___31320,out){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_31316 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31316[(0)] = state_machine__15941__auto__);

(statearr_31316[(1)] = (1));

return statearr_31316;
});
var state_machine__15941__auto____1 = (function (state_31302){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_31302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e31317){if((e31317 instanceof Object)){
var ex__15944__auto__ = e31317;
var statearr_31318_31327 = state_31302;
(statearr_31318_31327[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31328 = state_31302;
state_31302 = G__31328;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_31302){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_31302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___31320,out))
})();
var state__15998__auto__ = (function (){var statearr_31319 = f__15997__auto__.call(null);
(statearr_31319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___31320);

return statearr_31319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___31320,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31329,p__31330){
var map__31333 = p__31329;
var map__31333__$1 = ((cljs.core.seq_QMARK_.call(null,map__31333))?cljs.core.apply.call(null,cljs.core.hash_map,map__31333):map__31333);
var opts = map__31333__$1;
var url_rewriter = cljs.core.get.call(null,map__31333__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31334 = p__31330;
var map__31334__$1 = ((cljs.core.seq_QMARK_.call(null,map__31334))?cljs.core.apply.call(null,cljs.core.hash_map,map__31334):map__31334);
var file_msg = map__31334__$1;
var file = cljs.core.get.call(null,map__31334__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__31335){
var map__31338 = p__31335;
var map__31338__$1 = ((cljs.core.seq_QMARK_.call(null,map__31338))?cljs.core.apply.call(null,cljs.core.hash_map,map__31338):map__31338);
var file = cljs.core.get.call(null,map__31338__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31338__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e31339){var e = e31339;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31344,p__31345){
var map__31546 = p__31344;
var map__31546__$1 = ((cljs.core.seq_QMARK_.call(null,map__31546))?cljs.core.apply.call(null,cljs.core.hash_map,map__31546):map__31546);
var opts = map__31546__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31547 = p__31345;
var map__31547__$1 = ((cljs.core.seq_QMARK_.call(null,map__31547))?cljs.core.apply.call(null,cljs.core.hash_map,map__31547):map__31547);
var msg = map__31547__$1;
var files = cljs.core.get.call(null,map__31547__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (state_31671){
var state_val_31672 = (state_31671[(1)]);
if((state_val_31672 === (7))){
var inst_31561 = (state_31671[(7)]);
var inst_31558 = (state_31671[(8)]);
var inst_31559 = (state_31671[(9)]);
var inst_31560 = (state_31671[(10)]);
var inst_31566 = cljs.core._nth.call(null,inst_31559,inst_31561);
var inst_31567 = figwheel.client.file_reloading.eval_body.call(null,inst_31566);
var inst_31568 = (inst_31561 + (1));
var tmp31673 = inst_31558;
var tmp31674 = inst_31559;
var tmp31675 = inst_31560;
var inst_31558__$1 = tmp31673;
var inst_31559__$1 = tmp31674;
var inst_31560__$1 = tmp31675;
var inst_31561__$1 = inst_31568;
var state_31671__$1 = (function (){var statearr_31676 = state_31671;
(statearr_31676[(11)] = inst_31567);

(statearr_31676[(7)] = inst_31561__$1);

(statearr_31676[(8)] = inst_31558__$1);

(statearr_31676[(9)] = inst_31559__$1);

(statearr_31676[(10)] = inst_31560__$1);

return statearr_31676;
})();
var statearr_31677_31746 = state_31671__$1;
(statearr_31677_31746[(2)] = null);

(statearr_31677_31746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (20))){
var inst_31610 = (state_31671[(12)]);
var inst_31607 = (state_31671[(13)]);
var inst_31603 = (state_31671[(14)]);
var inst_31604 = (state_31671[(15)]);
var inst_31608 = (state_31671[(16)]);
var inst_31613 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31615 = (function (){var files_not_loaded = inst_31610;
var res = inst_31608;
var res_SINGLEQUOTE_ = inst_31607;
var files_SINGLEQUOTE_ = inst_31604;
var all_files = inst_31603;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31610,inst_31607,inst_31603,inst_31604,inst_31608,inst_31613,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (p__31614){
var map__31678 = p__31614;
var map__31678__$1 = ((cljs.core.seq_QMARK_.call(null,map__31678))?cljs.core.apply.call(null,cljs.core.hash_map,map__31678):map__31678);
var file = cljs.core.get.call(null,map__31678__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31610,inst_31607,inst_31603,inst_31604,inst_31608,inst_31613,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
})();
var inst_31616 = cljs.core.map.call(null,inst_31615,inst_31608);
var inst_31617 = cljs.core.pr_str.call(null,inst_31616);
var inst_31618 = figwheel.client.utils.log.call(null,inst_31617);
var inst_31619 = (function (){var files_not_loaded = inst_31610;
var res = inst_31608;
var res_SINGLEQUOTE_ = inst_31607;
var files_SINGLEQUOTE_ = inst_31604;
var all_files = inst_31603;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31610,inst_31607,inst_31603,inst_31604,inst_31608,inst_31613,inst_31615,inst_31616,inst_31617,inst_31618,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31610,inst_31607,inst_31603,inst_31604,inst_31608,inst_31613,inst_31615,inst_31616,inst_31617,inst_31618,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
})();
var inst_31620 = setTimeout(inst_31619,(10));
var state_31671__$1 = (function (){var statearr_31679 = state_31671;
(statearr_31679[(17)] = inst_31618);

(statearr_31679[(18)] = inst_31613);

return statearr_31679;
})();
var statearr_31680_31747 = state_31671__$1;
(statearr_31680_31747[(2)] = inst_31620);

(statearr_31680_31747[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (27))){
var inst_31630 = (state_31671[(19)]);
var state_31671__$1 = state_31671;
var statearr_31681_31748 = state_31671__$1;
(statearr_31681_31748[(2)] = inst_31630);

(statearr_31681_31748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (1))){
var inst_31550 = (state_31671[(20)]);
var inst_31548 = before_jsload.call(null,files);
var inst_31549 = (function (){return ((function (inst_31550,inst_31548,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (p1__31340_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31340_SHARP_);
});
;})(inst_31550,inst_31548,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
})();
var inst_31550__$1 = cljs.core.filter.call(null,inst_31549,files);
var inst_31551 = cljs.core.not_empty.call(null,inst_31550__$1);
var state_31671__$1 = (function (){var statearr_31682 = state_31671;
(statearr_31682[(21)] = inst_31548);

(statearr_31682[(20)] = inst_31550__$1);

return statearr_31682;
})();
if(cljs.core.truth_(inst_31551)){
var statearr_31683_31749 = state_31671__$1;
(statearr_31683_31749[(1)] = (2));

} else {
var statearr_31684_31750 = state_31671__$1;
(statearr_31684_31750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (24))){
var state_31671__$1 = state_31671;
var statearr_31685_31751 = state_31671__$1;
(statearr_31685_31751[(2)] = null);

(statearr_31685_31751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (4))){
var inst_31595 = (state_31671[(2)]);
var inst_31596 = (function (){return ((function (inst_31595,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (p1__31341_SHARP_){
var and__13316__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31341_SHARP_);
if(cljs.core.truth_(and__13316__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31341_SHARP_));
} else {
return and__13316__auto__;
}
});
;})(inst_31595,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
})();
var inst_31597 = cljs.core.filter.call(null,inst_31596,files);
var state_31671__$1 = (function (){var statearr_31686 = state_31671;
(statearr_31686[(22)] = inst_31595);

(statearr_31686[(23)] = inst_31597);

return statearr_31686;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31687_31752 = state_31671__$1;
(statearr_31687_31752[(1)] = (16));

} else {
var statearr_31688_31753 = state_31671__$1;
(statearr_31688_31753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (15))){
var inst_31585 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
var statearr_31689_31754 = state_31671__$1;
(statearr_31689_31754[(2)] = inst_31585);

(statearr_31689_31754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (21))){
var state_31671__$1 = state_31671;
var statearr_31690_31755 = state_31671__$1;
(statearr_31690_31755[(2)] = null);

(statearr_31690_31755[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (31))){
var inst_31638 = (state_31671[(24)]);
var inst_31648 = (state_31671[(2)]);
var inst_31649 = cljs.core.not_empty.call(null,inst_31638);
var state_31671__$1 = (function (){var statearr_31691 = state_31671;
(statearr_31691[(25)] = inst_31648);

return statearr_31691;
})();
if(cljs.core.truth_(inst_31649)){
var statearr_31692_31756 = state_31671__$1;
(statearr_31692_31756[(1)] = (32));

} else {
var statearr_31693_31757 = state_31671__$1;
(statearr_31693_31757[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (32))){
var inst_31638 = (state_31671[(24)]);
var inst_31651 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31638);
var inst_31652 = cljs.core.pr_str.call(null,inst_31651);
var inst_31653 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31652)].join('');
var inst_31654 = figwheel.client.utils.log.call(null,inst_31653);
var state_31671__$1 = state_31671;
var statearr_31694_31758 = state_31671__$1;
(statearr_31694_31758[(2)] = inst_31654);

(statearr_31694_31758[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (33))){
var state_31671__$1 = state_31671;
var statearr_31695_31759 = state_31671__$1;
(statearr_31695_31759[(2)] = null);

(statearr_31695_31759[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (13))){
var inst_31571 = (state_31671[(26)]);
var inst_31575 = cljs.core.chunk_first.call(null,inst_31571);
var inst_31576 = cljs.core.chunk_rest.call(null,inst_31571);
var inst_31577 = cljs.core.count.call(null,inst_31575);
var inst_31558 = inst_31576;
var inst_31559 = inst_31575;
var inst_31560 = inst_31577;
var inst_31561 = (0);
var state_31671__$1 = (function (){var statearr_31696 = state_31671;
(statearr_31696[(7)] = inst_31561);

(statearr_31696[(8)] = inst_31558);

(statearr_31696[(9)] = inst_31559);

(statearr_31696[(10)] = inst_31560);

return statearr_31696;
})();
var statearr_31697_31760 = state_31671__$1;
(statearr_31697_31760[(2)] = null);

(statearr_31697_31760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (22))){
var inst_31610 = (state_31671[(12)]);
var inst_31623 = (state_31671[(2)]);
var inst_31624 = cljs.core.not_empty.call(null,inst_31610);
var state_31671__$1 = (function (){var statearr_31698 = state_31671;
(statearr_31698[(27)] = inst_31623);

return statearr_31698;
})();
if(cljs.core.truth_(inst_31624)){
var statearr_31699_31761 = state_31671__$1;
(statearr_31699_31761[(1)] = (23));

} else {
var statearr_31700_31762 = state_31671__$1;
(statearr_31700_31762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (36))){
var state_31671__$1 = state_31671;
var statearr_31701_31763 = state_31671__$1;
(statearr_31701_31763[(2)] = null);

(statearr_31701_31763[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (29))){
var inst_31639 = (state_31671[(28)]);
var inst_31642 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31639);
var inst_31643 = cljs.core.pr_str.call(null,inst_31642);
var inst_31644 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31643)].join('');
var inst_31645 = figwheel.client.utils.log.call(null,inst_31644);
var state_31671__$1 = state_31671;
var statearr_31702_31764 = state_31671__$1;
(statearr_31702_31764[(2)] = inst_31645);

(statearr_31702_31764[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (6))){
var inst_31592 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
var statearr_31703_31765 = state_31671__$1;
(statearr_31703_31765[(2)] = inst_31592);

(statearr_31703_31765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (28))){
var inst_31639 = (state_31671[(28)]);
var inst_31636 = (state_31671[(2)]);
var inst_31637 = cljs.core.get.call(null,inst_31636,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31638 = cljs.core.get.call(null,inst_31636,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31639__$1 = cljs.core.get.call(null,inst_31636,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31640 = cljs.core.not_empty.call(null,inst_31639__$1);
var state_31671__$1 = (function (){var statearr_31704 = state_31671;
(statearr_31704[(24)] = inst_31638);

(statearr_31704[(29)] = inst_31637);

(statearr_31704[(28)] = inst_31639__$1);

return statearr_31704;
})();
if(cljs.core.truth_(inst_31640)){
var statearr_31705_31766 = state_31671__$1;
(statearr_31705_31766[(1)] = (29));

} else {
var statearr_31706_31767 = state_31671__$1;
(statearr_31706_31767[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (25))){
var inst_31669 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31671__$1,inst_31669);
} else {
if((state_val_31672 === (34))){
var inst_31637 = (state_31671[(29)]);
var inst_31657 = (state_31671[(2)]);
var inst_31658 = cljs.core.not_empty.call(null,inst_31637);
var state_31671__$1 = (function (){var statearr_31707 = state_31671;
(statearr_31707[(30)] = inst_31657);

return statearr_31707;
})();
if(cljs.core.truth_(inst_31658)){
var statearr_31708_31768 = state_31671__$1;
(statearr_31708_31768[(1)] = (35));

} else {
var statearr_31709_31769 = state_31671__$1;
(statearr_31709_31769[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (17))){
var inst_31597 = (state_31671[(23)]);
var state_31671__$1 = state_31671;
var statearr_31710_31770 = state_31671__$1;
(statearr_31710_31770[(2)] = inst_31597);

(statearr_31710_31770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (3))){
var state_31671__$1 = state_31671;
var statearr_31711_31771 = state_31671__$1;
(statearr_31711_31771[(2)] = null);

(statearr_31711_31771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (12))){
var inst_31588 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
var statearr_31712_31772 = state_31671__$1;
(statearr_31712_31772[(2)] = inst_31588);

(statearr_31712_31772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (2))){
var inst_31550 = (state_31671[(20)]);
var inst_31557 = cljs.core.seq.call(null,inst_31550);
var inst_31558 = inst_31557;
var inst_31559 = null;
var inst_31560 = (0);
var inst_31561 = (0);
var state_31671__$1 = (function (){var statearr_31713 = state_31671;
(statearr_31713[(7)] = inst_31561);

(statearr_31713[(8)] = inst_31558);

(statearr_31713[(9)] = inst_31559);

(statearr_31713[(10)] = inst_31560);

return statearr_31713;
})();
var statearr_31714_31773 = state_31671__$1;
(statearr_31714_31773[(2)] = null);

(statearr_31714_31773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (23))){
var inst_31610 = (state_31671[(12)]);
var inst_31607 = (state_31671[(13)]);
var inst_31630 = (state_31671[(19)]);
var inst_31603 = (state_31671[(14)]);
var inst_31604 = (state_31671[(15)]);
var inst_31608 = (state_31671[(16)]);
var inst_31626 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31629 = (function (){var files_not_loaded = inst_31610;
var res = inst_31608;
var res_SINGLEQUOTE_ = inst_31607;
var files_SINGLEQUOTE_ = inst_31604;
var all_files = inst_31603;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31610,inst_31607,inst_31630,inst_31603,inst_31604,inst_31608,inst_31626,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (p__31628){
var map__31715 = p__31628;
var map__31715__$1 = ((cljs.core.seq_QMARK_.call(null,map__31715))?cljs.core.apply.call(null,cljs.core.hash_map,map__31715):map__31715);
var meta_data = cljs.core.get.call(null,map__31715__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31610,inst_31607,inst_31630,inst_31603,inst_31604,inst_31608,inst_31626,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
})();
var inst_31630__$1 = cljs.core.group_by.call(null,inst_31629,inst_31610);
var inst_31631 = cljs.core.seq_QMARK_.call(null,inst_31630__$1);
var state_31671__$1 = (function (){var statearr_31716 = state_31671;
(statearr_31716[(31)] = inst_31626);

(statearr_31716[(19)] = inst_31630__$1);

return statearr_31716;
})();
if(inst_31631){
var statearr_31717_31774 = state_31671__$1;
(statearr_31717_31774[(1)] = (26));

} else {
var statearr_31718_31775 = state_31671__$1;
(statearr_31718_31775[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (35))){
var inst_31637 = (state_31671[(29)]);
var inst_31660 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31637);
var inst_31661 = cljs.core.pr_str.call(null,inst_31660);
var inst_31662 = [cljs.core.str("not required: "),cljs.core.str(inst_31661)].join('');
var inst_31663 = figwheel.client.utils.log.call(null,inst_31662);
var state_31671__$1 = state_31671;
var statearr_31719_31776 = state_31671__$1;
(statearr_31719_31776[(2)] = inst_31663);

(statearr_31719_31776[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (19))){
var inst_31607 = (state_31671[(13)]);
var inst_31603 = (state_31671[(14)]);
var inst_31604 = (state_31671[(15)]);
var inst_31608 = (state_31671[(16)]);
var inst_31607__$1 = (state_31671[(2)]);
var inst_31608__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31607__$1);
var inst_31609 = (function (){var res = inst_31608__$1;
var res_SINGLEQUOTE_ = inst_31607__$1;
var files_SINGLEQUOTE_ = inst_31604;
var all_files = inst_31603;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31607,inst_31603,inst_31604,inst_31608,inst_31607__$1,inst_31608__$1,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (p1__31343_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31343_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31607,inst_31603,inst_31604,inst_31608,inst_31607__$1,inst_31608__$1,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
})();
var inst_31610 = cljs.core.filter.call(null,inst_31609,inst_31607__$1);
var inst_31611 = cljs.core.not_empty.call(null,inst_31608__$1);
var state_31671__$1 = (function (){var statearr_31720 = state_31671;
(statearr_31720[(12)] = inst_31610);

(statearr_31720[(13)] = inst_31607__$1);

(statearr_31720[(16)] = inst_31608__$1);

return statearr_31720;
})();
if(cljs.core.truth_(inst_31611)){
var statearr_31721_31777 = state_31671__$1;
(statearr_31721_31777[(1)] = (20));

} else {
var statearr_31722_31778 = state_31671__$1;
(statearr_31722_31778[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (11))){
var state_31671__$1 = state_31671;
var statearr_31723_31779 = state_31671__$1;
(statearr_31723_31779[(2)] = null);

(statearr_31723_31779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (9))){
var inst_31590 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
var statearr_31724_31780 = state_31671__$1;
(statearr_31724_31780[(2)] = inst_31590);

(statearr_31724_31780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (5))){
var inst_31561 = (state_31671[(7)]);
var inst_31560 = (state_31671[(10)]);
var inst_31563 = (inst_31561 < inst_31560);
var inst_31564 = inst_31563;
var state_31671__$1 = state_31671;
if(cljs.core.truth_(inst_31564)){
var statearr_31725_31781 = state_31671__$1;
(statearr_31725_31781[(1)] = (7));

} else {
var statearr_31726_31782 = state_31671__$1;
(statearr_31726_31782[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (14))){
var inst_31571 = (state_31671[(26)]);
var inst_31580 = cljs.core.first.call(null,inst_31571);
var inst_31581 = figwheel.client.file_reloading.eval_body.call(null,inst_31580);
var inst_31582 = cljs.core.next.call(null,inst_31571);
var inst_31558 = inst_31582;
var inst_31559 = null;
var inst_31560 = (0);
var inst_31561 = (0);
var state_31671__$1 = (function (){var statearr_31727 = state_31671;
(statearr_31727[(7)] = inst_31561);

(statearr_31727[(32)] = inst_31581);

(statearr_31727[(8)] = inst_31558);

(statearr_31727[(9)] = inst_31559);

(statearr_31727[(10)] = inst_31560);

return statearr_31727;
})();
var statearr_31728_31783 = state_31671__$1;
(statearr_31728_31783[(2)] = null);

(statearr_31728_31783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (26))){
var inst_31630 = (state_31671[(19)]);
var inst_31633 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31630);
var state_31671__$1 = state_31671;
var statearr_31729_31784 = state_31671__$1;
(statearr_31729_31784[(2)] = inst_31633);

(statearr_31729_31784[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (16))){
var inst_31597 = (state_31671[(23)]);
var inst_31599 = (function (){var all_files = inst_31597;
return ((function (all_files,inst_31597,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function (p1__31342_SHARP_){
return cljs.core.update_in.call(null,p1__31342_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31597,state_val_31672,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
})();
var inst_31600 = cljs.core.map.call(null,inst_31599,inst_31597);
var state_31671__$1 = state_31671;
var statearr_31730_31785 = state_31671__$1;
(statearr_31730_31785[(2)] = inst_31600);

(statearr_31730_31785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (30))){
var state_31671__$1 = state_31671;
var statearr_31731_31786 = state_31671__$1;
(statearr_31731_31786[(2)] = null);

(statearr_31731_31786[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (10))){
var inst_31571 = (state_31671[(26)]);
var inst_31573 = cljs.core.chunked_seq_QMARK_.call(null,inst_31571);
var state_31671__$1 = state_31671;
if(inst_31573){
var statearr_31732_31787 = state_31671__$1;
(statearr_31732_31787[(1)] = (13));

} else {
var statearr_31733_31788 = state_31671__$1;
(statearr_31733_31788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (18))){
var inst_31603 = (state_31671[(14)]);
var inst_31604 = (state_31671[(15)]);
var inst_31603__$1 = (state_31671[(2)]);
var inst_31604__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31603__$1);
var inst_31605 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31604__$1);
var state_31671__$1 = (function (){var statearr_31734 = state_31671;
(statearr_31734[(14)] = inst_31603__$1);

(statearr_31734[(15)] = inst_31604__$1);

return statearr_31734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31671__$1,(19),inst_31605);
} else {
if((state_val_31672 === (37))){
var inst_31666 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
var statearr_31735_31789 = state_31671__$1;
(statearr_31735_31789[(2)] = inst_31666);

(statearr_31735_31789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (8))){
var inst_31558 = (state_31671[(8)]);
var inst_31571 = (state_31671[(26)]);
var inst_31571__$1 = cljs.core.seq.call(null,inst_31558);
var state_31671__$1 = (function (){var statearr_31736 = state_31671;
(statearr_31736[(26)] = inst_31571__$1);

return statearr_31736;
})();
if(inst_31571__$1){
var statearr_31737_31790 = state_31671__$1;
(statearr_31737_31790[(1)] = (10));

} else {
var statearr_31738_31791 = state_31671__$1;
(statearr_31738_31791[(1)] = (11));

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
});})(c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
;
return ((function (switch__15940__auto__,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_31742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31742[(0)] = state_machine__15941__auto__);

(statearr_31742[(1)] = (1));

return statearr_31742;
});
var state_machine__15941__auto____1 = (function (state_31671){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_31671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e31743){if((e31743 instanceof Object)){
var ex__15944__auto__ = e31743;
var statearr_31744_31792 = state_31671;
(statearr_31744_31792[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31793 = state_31671;
state_31671 = G__31793;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_31671){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_31671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
})();
var state__15998__auto__ = (function (){var statearr_31745 = f__15997__auto__.call(null);
(statearr_31745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto__);

return statearr_31745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto__,map__31546,map__31546__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31547,map__31547__$1,msg,files))
);

return c__15996__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31796,link){
var map__31798 = p__31796;
var map__31798__$1 = ((cljs.core.seq_QMARK_.call(null,map__31798))?cljs.core.apply.call(null,cljs.core.hash_map,map__31798):map__31798);
var file = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31798,map__31798__$1,file){
return (function (p1__31794_SHARP_,p2__31795_SHARP_){
if(cljs.core._EQ_.call(null,p1__31794_SHARP_,p2__31795_SHARP_)){
return p1__31794_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31798,map__31798__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31802){
var map__31803 = p__31802;
var map__31803__$1 = ((cljs.core.seq_QMARK_.call(null,map__31803))?cljs.core.apply.call(null,cljs.core.hash_map,map__31803):map__31803);
var current_url_length = cljs.core.get.call(null,map__31803__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31803__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31799_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31799_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31804){
var map__31806 = p__31804;
var map__31806__$1 = ((cljs.core.seq_QMARK_.call(null,map__31806))?cljs.core.apply.call(null,cljs.core.hash_map,map__31806):map__31806);
var f_data = map__31806__$1;
var request_url = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31807,files_msg){
var map__31829 = p__31807;
var map__31829__$1 = ((cljs.core.seq_QMARK_.call(null,map__31829))?cljs.core.apply.call(null,cljs.core.hash_map,map__31829):map__31829);
var opts = map__31829__$1;
var on_cssload = cljs.core.get.call(null,map__31829__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31830_31850 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31831_31851 = null;
var count__31832_31852 = (0);
var i__31833_31853 = (0);
while(true){
if((i__31833_31853 < count__31832_31852)){
var f_31854 = cljs.core._nth.call(null,chunk__31831_31851,i__31833_31853);
figwheel.client.file_reloading.reload_css_file.call(null,f_31854);

var G__31855 = seq__31830_31850;
var G__31856 = chunk__31831_31851;
var G__31857 = count__31832_31852;
var G__31858 = (i__31833_31853 + (1));
seq__31830_31850 = G__31855;
chunk__31831_31851 = G__31856;
count__31832_31852 = G__31857;
i__31833_31853 = G__31858;
continue;
} else {
var temp__4126__auto___31859 = cljs.core.seq.call(null,seq__31830_31850);
if(temp__4126__auto___31859){
var seq__31830_31860__$1 = temp__4126__auto___31859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31830_31860__$1)){
var c__14115__auto___31861 = cljs.core.chunk_first.call(null,seq__31830_31860__$1);
var G__31862 = cljs.core.chunk_rest.call(null,seq__31830_31860__$1);
var G__31863 = c__14115__auto___31861;
var G__31864 = cljs.core.count.call(null,c__14115__auto___31861);
var G__31865 = (0);
seq__31830_31850 = G__31862;
chunk__31831_31851 = G__31863;
count__31832_31852 = G__31864;
i__31833_31853 = G__31865;
continue;
} else {
var f_31866 = cljs.core.first.call(null,seq__31830_31860__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31866);

var G__31867 = cljs.core.next.call(null,seq__31830_31860__$1);
var G__31868 = null;
var G__31869 = (0);
var G__31870 = (0);
seq__31830_31850 = G__31867;
chunk__31831_31851 = G__31868;
count__31832_31852 = G__31869;
i__31833_31853 = G__31870;
continue;
}
} else {
}
}
break;
}

var c__15996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto__,map__31829,map__31829__$1,opts,on_cssload){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto__,map__31829,map__31829__$1,opts,on_cssload){
return (function (state_31840){
var state_val_31841 = (state_31840[(1)]);
if((state_val_31841 === (2))){
var inst_31836 = (state_31840[(2)]);
var inst_31837 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31838 = on_cssload.call(null,inst_31837);
var state_31840__$1 = (function (){var statearr_31842 = state_31840;
(statearr_31842[(7)] = inst_31836);

return statearr_31842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31840__$1,inst_31838);
} else {
if((state_val_31841 === (1))){
var inst_31834 = cljs.core.async.timeout.call(null,(100));
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31840__$1,(2),inst_31834);
} else {
return null;
}
}
});})(c__15996__auto__,map__31829,map__31829__$1,opts,on_cssload))
;
return ((function (switch__15940__auto__,c__15996__auto__,map__31829,map__31829__$1,opts,on_cssload){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_31846 = [null,null,null,null,null,null,null,null];
(statearr_31846[(0)] = state_machine__15941__auto__);

(statearr_31846[(1)] = (1));

return statearr_31846;
});
var state_machine__15941__auto____1 = (function (state_31840){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_31840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e31847){if((e31847 instanceof Object)){
var ex__15944__auto__ = e31847;
var statearr_31848_31871 = state_31840;
(statearr_31848_31871[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31872 = state_31840;
state_31840 = G__31872;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_31840){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_31840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto__,map__31829,map__31829__$1,opts,on_cssload))
})();
var state__15998__auto__ = (function (){var statearr_31849 = f__15997__auto__.call(null);
(statearr_31849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto__);

return statearr_31849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto__,map__31829,map__31829__$1,opts,on_cssload))
);

return c__15996__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map