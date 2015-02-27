// Compiled by ClojureScript 0.0-2913 {:elide-asserts false}
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
return cljs.core.reduce.call(null,(function (p1__31355_SHARP_,p2__31356_SHARP_){
var and__13453__auto__ = p1__31355_SHARP_;
if(cljs.core.truth_(and__13453__auto__)){
return p2__31356_SHARP_;
} else {
return and__13453__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__13465__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__13465__auto__){
return or__13465__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31358_SHARP_,p2__31357_SHARP_){
return [cljs.core.str(p2__31357_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__13465__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__13465__auto__){
return or__13465__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__13465__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__14362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14366__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14366__auto__,method_table__14362__auto__,prefer_table__14363__auto__,method_cache__14364__auto__,cached_hierarchy__14365__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31359){
var map__31360 = p__31359;
var map__31360__$1 = ((cljs.core.seq_QMARK_.call(null,map__31360))?cljs.core.apply.call(null,cljs.core.hash_map,map__31360):map__31360);
var file = cljs.core.get.call(null,map__31360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31361){
var map__31362 = p__31361;
var map__31362__$1 = ((cljs.core.seq_QMARK_.call(null,map__31362))?cljs.core.apply.call(null,cljs.core.hash_map,map__31362):map__31362);
var namespace = cljs.core.get.call(null,map__31362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__14362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14366__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14366__auto__,method_table__14362__auto__,prefer_table__14363__auto__,method_cache__14364__auto__,cached_hierarchy__14365__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31363){if((e31363 instanceof Error)){
var e = e31363;
return false;
} else {
throw e31363;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__31364,callback){
var map__31366 = p__31364;
var map__31366__$1 = ((cljs.core.seq_QMARK_.call(null,map__31366))?cljs.core.apply.call(null,cljs.core.hash_map,map__31366):map__31366);
var file_msg = map__31366__$1;
var request_url = cljs.core.get.call(null,map__31366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31366,map__31366__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31366,map__31366__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__31367){
var map__31369 = p__31367;
var map__31369__$1 = ((cljs.core.seq_QMARK_.call(null,map__31369))?cljs.core.apply.call(null,cljs.core.hash_map,map__31369):map__31369);
var file_msg = map__31369__$1;
var meta_data = cljs.core.get.call(null,map__31369__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__13465__auto__ = meta_data;
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__13453__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__13453__auto__){
var or__13465__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__13465__auto____$1)){
return or__13465__auto____$1;
} else {
var and__13453__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__13453__auto____$1){
var or__13465__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__13465__auto____$2){
return or__13465__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__13453__auto____$1;
}
}
}
} else {
return and__13453__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__31370,callback){
var map__31372 = p__31370;
var map__31372__$1 = ((cljs.core.seq_QMARK_.call(null,map__31372))?cljs.core.apply.call(null,cljs.core.hash_map,map__31372):map__31372);
var file_msg = map__31372__$1;
var namespace = cljs.core.get.call(null,map__31372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__16133__auto___31459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___31459,out){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___31459,out){
return (function (state_31441){
var state_val_31442 = (state_31441[(1)]);
if((state_val_31442 === (7))){
var inst_31425 = (state_31441[(7)]);
var inst_31431 = (state_31441[(2)]);
var inst_31432 = cljs.core.async.put_BANG_.call(null,out,inst_31431);
var inst_31421 = inst_31425;
var state_31441__$1 = (function (){var statearr_31443 = state_31441;
(statearr_31443[(8)] = inst_31421);

(statearr_31443[(9)] = inst_31432);

return statearr_31443;
})();
var statearr_31444_31460 = state_31441__$1;
(statearr_31444_31460[(2)] = null);

(statearr_31444_31460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (6))){
var inst_31437 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31445_31461 = state_31441__$1;
(statearr_31445_31461[(2)] = inst_31437);

(statearr_31445_31461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (5))){
var inst_31435 = cljs.core.async.close_BANG_.call(null,out);
var state_31441__$1 = state_31441;
var statearr_31446_31462 = state_31441__$1;
(statearr_31446_31462[(2)] = inst_31435);

(statearr_31446_31462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (4))){
var inst_31424 = (state_31441[(10)]);
var inst_31429 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31424);
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31441__$1,(7),inst_31429);
} else {
if((state_val_31442 === (3))){
var inst_31439 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31441__$1,inst_31439);
} else {
if((state_val_31442 === (2))){
var inst_31424 = (state_31441[(10)]);
var inst_31421 = (state_31441[(8)]);
var inst_31424__$1 = cljs.core.nth.call(null,inst_31421,(0),null);
var inst_31425 = cljs.core.nthnext.call(null,inst_31421,(1));
var inst_31426 = (inst_31424__$1 == null);
var inst_31427 = cljs.core.not.call(null,inst_31426);
var state_31441__$1 = (function (){var statearr_31447 = state_31441;
(statearr_31447[(10)] = inst_31424__$1);

(statearr_31447[(7)] = inst_31425);

return statearr_31447;
})();
if(inst_31427){
var statearr_31448_31463 = state_31441__$1;
(statearr_31448_31463[(1)] = (4));

} else {
var statearr_31449_31464 = state_31441__$1;
(statearr_31449_31464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (1))){
var inst_31419 = cljs.core.nth.call(null,files,(0),null);
var inst_31420 = cljs.core.nthnext.call(null,files,(1));
var inst_31421 = files;
var state_31441__$1 = (function (){var statearr_31450 = state_31441;
(statearr_31450[(11)] = inst_31419);

(statearr_31450[(12)] = inst_31420);

(statearr_31450[(8)] = inst_31421);

return statearr_31450;
})();
var statearr_31451_31465 = state_31441__$1;
(statearr_31451_31465[(2)] = null);

(statearr_31451_31465[(1)] = (2));


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
});})(c__16133__auto___31459,out))
;
return ((function (switch__16077__auto__,c__16133__auto___31459,out){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_31455 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31455[(0)] = state_machine__16078__auto__);

(statearr_31455[(1)] = (1));

return statearr_31455;
});
var state_machine__16078__auto____1 = (function (state_31441){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_31441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e31456){if((e31456 instanceof Object)){
var ex__16081__auto__ = e31456;
var statearr_31457_31466 = state_31441;
(statearr_31457_31466[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31467 = state_31441;
state_31441 = G__31467;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_31441){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_31441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___31459,out))
})();
var state__16135__auto__ = (function (){var statearr_31458 = f__16134__auto__.call(null);
(statearr_31458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___31459);

return statearr_31458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___31459,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31468,p__31469){
var map__31472 = p__31468;
var map__31472__$1 = ((cljs.core.seq_QMARK_.call(null,map__31472))?cljs.core.apply.call(null,cljs.core.hash_map,map__31472):map__31472);
var opts = map__31472__$1;
var url_rewriter = cljs.core.get.call(null,map__31472__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31473 = p__31469;
var map__31473__$1 = ((cljs.core.seq_QMARK_.call(null,map__31473))?cljs.core.apply.call(null,cljs.core.hash_map,map__31473):map__31473);
var file_msg = map__31473__$1;
var file = cljs.core.get.call(null,map__31473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__31474){
var map__31477 = p__31474;
var map__31477__$1 = ((cljs.core.seq_QMARK_.call(null,map__31477))?cljs.core.apply.call(null,cljs.core.hash_map,map__31477):map__31477);
var file = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__13453__auto__ = eval_body__$1;
if(cljs.core.truth_(and__13453__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__13453__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31478){var e = e31478;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31483,p__31484){
var map__31685 = p__31483;
var map__31685__$1 = ((cljs.core.seq_QMARK_.call(null,map__31685))?cljs.core.apply.call(null,cljs.core.hash_map,map__31685):map__31685);
var opts = map__31685__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31685__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31685__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31685__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31686 = p__31484;
var map__31686__$1 = ((cljs.core.seq_QMARK_.call(null,map__31686))?cljs.core.apply.call(null,cljs.core.hash_map,map__31686):map__31686);
var msg = map__31686__$1;
var files = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (state_31810){
var state_val_31811 = (state_31810[(1)]);
if((state_val_31811 === (7))){
var inst_31699 = (state_31810[(7)]);
var inst_31700 = (state_31810[(8)]);
var inst_31697 = (state_31810[(9)]);
var inst_31698 = (state_31810[(10)]);
var inst_31705 = cljs.core._nth.call(null,inst_31698,inst_31700);
var inst_31706 = figwheel.client.file_reloading.eval_body.call(null,inst_31705);
var inst_31707 = (inst_31700 + (1));
var tmp31812 = inst_31699;
var tmp31813 = inst_31697;
var tmp31814 = inst_31698;
var inst_31697__$1 = tmp31813;
var inst_31698__$1 = tmp31814;
var inst_31699__$1 = tmp31812;
var inst_31700__$1 = inst_31707;
var state_31810__$1 = (function (){var statearr_31815 = state_31810;
(statearr_31815[(7)] = inst_31699__$1);

(statearr_31815[(8)] = inst_31700__$1);

(statearr_31815[(9)] = inst_31697__$1);

(statearr_31815[(10)] = inst_31698__$1);

(statearr_31815[(11)] = inst_31706);

return statearr_31815;
})();
var statearr_31816_31885 = state_31810__$1;
(statearr_31816_31885[(2)] = null);

(statearr_31816_31885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (20))){
var inst_31749 = (state_31810[(12)]);
var inst_31742 = (state_31810[(13)]);
var inst_31746 = (state_31810[(14)]);
var inst_31743 = (state_31810[(15)]);
var inst_31747 = (state_31810[(16)]);
var inst_31752 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31754 = (function (){var files_not_loaded = inst_31749;
var res = inst_31747;
var res_SINGLEQUOTE_ = inst_31746;
var files_SINGLEQUOTE_ = inst_31743;
var all_files = inst_31742;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31749,inst_31742,inst_31746,inst_31743,inst_31747,inst_31752,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (p__31753){
var map__31817 = p__31753;
var map__31817__$1 = ((cljs.core.seq_QMARK_.call(null,map__31817))?cljs.core.apply.call(null,cljs.core.hash_map,map__31817):map__31817);
var file = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31749,inst_31742,inst_31746,inst_31743,inst_31747,inst_31752,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
})();
var inst_31755 = cljs.core.map.call(null,inst_31754,inst_31747);
var inst_31756 = cljs.core.pr_str.call(null,inst_31755);
var inst_31757 = figwheel.client.utils.log.call(null,inst_31756);
var inst_31758 = (function (){var files_not_loaded = inst_31749;
var res = inst_31747;
var res_SINGLEQUOTE_ = inst_31746;
var files_SINGLEQUOTE_ = inst_31743;
var all_files = inst_31742;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31749,inst_31742,inst_31746,inst_31743,inst_31747,inst_31752,inst_31754,inst_31755,inst_31756,inst_31757,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31749,inst_31742,inst_31746,inst_31743,inst_31747,inst_31752,inst_31754,inst_31755,inst_31756,inst_31757,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
})();
var inst_31759 = setTimeout(inst_31758,(10));
var state_31810__$1 = (function (){var statearr_31818 = state_31810;
(statearr_31818[(17)] = inst_31752);

(statearr_31818[(18)] = inst_31757);

return statearr_31818;
})();
var statearr_31819_31886 = state_31810__$1;
(statearr_31819_31886[(2)] = inst_31759);

(statearr_31819_31886[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (27))){
var inst_31769 = (state_31810[(19)]);
var state_31810__$1 = state_31810;
var statearr_31820_31887 = state_31810__$1;
(statearr_31820_31887[(2)] = inst_31769);

(statearr_31820_31887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (1))){
var inst_31689 = (state_31810[(20)]);
var inst_31687 = before_jsload.call(null,files);
var inst_31688 = (function (){return ((function (inst_31689,inst_31687,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (p1__31479_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31479_SHARP_);
});
;})(inst_31689,inst_31687,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
})();
var inst_31689__$1 = cljs.core.filter.call(null,inst_31688,files);
var inst_31690 = cljs.core.not_empty.call(null,inst_31689__$1);
var state_31810__$1 = (function (){var statearr_31821 = state_31810;
(statearr_31821[(21)] = inst_31687);

(statearr_31821[(20)] = inst_31689__$1);

return statearr_31821;
})();
if(cljs.core.truth_(inst_31690)){
var statearr_31822_31888 = state_31810__$1;
(statearr_31822_31888[(1)] = (2));

} else {
var statearr_31823_31889 = state_31810__$1;
(statearr_31823_31889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (24))){
var state_31810__$1 = state_31810;
var statearr_31824_31890 = state_31810__$1;
(statearr_31824_31890[(2)] = null);

(statearr_31824_31890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (4))){
var inst_31734 = (state_31810[(2)]);
var inst_31735 = (function (){return ((function (inst_31734,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (p1__31480_SHARP_){
var and__13453__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31480_SHARP_);
if(cljs.core.truth_(and__13453__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31480_SHARP_));
} else {
return and__13453__auto__;
}
});
;})(inst_31734,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
})();
var inst_31736 = cljs.core.filter.call(null,inst_31735,files);
var state_31810__$1 = (function (){var statearr_31825 = state_31810;
(statearr_31825[(22)] = inst_31734);

(statearr_31825[(23)] = inst_31736);

return statearr_31825;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31826_31891 = state_31810__$1;
(statearr_31826_31891[(1)] = (16));

} else {
var statearr_31827_31892 = state_31810__$1;
(statearr_31827_31892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (15))){
var inst_31724 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31828_31893 = state_31810__$1;
(statearr_31828_31893[(2)] = inst_31724);

(statearr_31828_31893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (21))){
var state_31810__$1 = state_31810;
var statearr_31829_31894 = state_31810__$1;
(statearr_31829_31894[(2)] = null);

(statearr_31829_31894[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (31))){
var inst_31777 = (state_31810[(24)]);
var inst_31787 = (state_31810[(2)]);
var inst_31788 = cljs.core.not_empty.call(null,inst_31777);
var state_31810__$1 = (function (){var statearr_31830 = state_31810;
(statearr_31830[(25)] = inst_31787);

return statearr_31830;
})();
if(cljs.core.truth_(inst_31788)){
var statearr_31831_31895 = state_31810__$1;
(statearr_31831_31895[(1)] = (32));

} else {
var statearr_31832_31896 = state_31810__$1;
(statearr_31832_31896[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (32))){
var inst_31777 = (state_31810[(24)]);
var inst_31790 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31777);
var inst_31791 = cljs.core.pr_str.call(null,inst_31790);
var inst_31792 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31791)].join('');
var inst_31793 = figwheel.client.utils.log.call(null,inst_31792);
var state_31810__$1 = state_31810;
var statearr_31833_31897 = state_31810__$1;
(statearr_31833_31897[(2)] = inst_31793);

(statearr_31833_31897[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (33))){
var state_31810__$1 = state_31810;
var statearr_31834_31898 = state_31810__$1;
(statearr_31834_31898[(2)] = null);

(statearr_31834_31898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (13))){
var inst_31710 = (state_31810[(26)]);
var inst_31714 = cljs.core.chunk_first.call(null,inst_31710);
var inst_31715 = cljs.core.chunk_rest.call(null,inst_31710);
var inst_31716 = cljs.core.count.call(null,inst_31714);
var inst_31697 = inst_31715;
var inst_31698 = inst_31714;
var inst_31699 = inst_31716;
var inst_31700 = (0);
var state_31810__$1 = (function (){var statearr_31835 = state_31810;
(statearr_31835[(7)] = inst_31699);

(statearr_31835[(8)] = inst_31700);

(statearr_31835[(9)] = inst_31697);

(statearr_31835[(10)] = inst_31698);

return statearr_31835;
})();
var statearr_31836_31899 = state_31810__$1;
(statearr_31836_31899[(2)] = null);

(statearr_31836_31899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (22))){
var inst_31749 = (state_31810[(12)]);
var inst_31762 = (state_31810[(2)]);
var inst_31763 = cljs.core.not_empty.call(null,inst_31749);
var state_31810__$1 = (function (){var statearr_31837 = state_31810;
(statearr_31837[(27)] = inst_31762);

return statearr_31837;
})();
if(cljs.core.truth_(inst_31763)){
var statearr_31838_31900 = state_31810__$1;
(statearr_31838_31900[(1)] = (23));

} else {
var statearr_31839_31901 = state_31810__$1;
(statearr_31839_31901[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (36))){
var state_31810__$1 = state_31810;
var statearr_31840_31902 = state_31810__$1;
(statearr_31840_31902[(2)] = null);

(statearr_31840_31902[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (29))){
var inst_31778 = (state_31810[(28)]);
var inst_31781 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31778);
var inst_31782 = cljs.core.pr_str.call(null,inst_31781);
var inst_31783 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31782)].join('');
var inst_31784 = figwheel.client.utils.log.call(null,inst_31783);
var state_31810__$1 = state_31810;
var statearr_31841_31903 = state_31810__$1;
(statearr_31841_31903[(2)] = inst_31784);

(statearr_31841_31903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (6))){
var inst_31731 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31842_31904 = state_31810__$1;
(statearr_31842_31904[(2)] = inst_31731);

(statearr_31842_31904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (28))){
var inst_31778 = (state_31810[(28)]);
var inst_31775 = (state_31810[(2)]);
var inst_31776 = cljs.core.get.call(null,inst_31775,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31777 = cljs.core.get.call(null,inst_31775,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31778__$1 = cljs.core.get.call(null,inst_31775,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31779 = cljs.core.not_empty.call(null,inst_31778__$1);
var state_31810__$1 = (function (){var statearr_31843 = state_31810;
(statearr_31843[(28)] = inst_31778__$1);

(statearr_31843[(24)] = inst_31777);

(statearr_31843[(29)] = inst_31776);

return statearr_31843;
})();
if(cljs.core.truth_(inst_31779)){
var statearr_31844_31905 = state_31810__$1;
(statearr_31844_31905[(1)] = (29));

} else {
var statearr_31845_31906 = state_31810__$1;
(statearr_31845_31906[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (25))){
var inst_31808 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31810__$1,inst_31808);
} else {
if((state_val_31811 === (34))){
var inst_31776 = (state_31810[(29)]);
var inst_31796 = (state_31810[(2)]);
var inst_31797 = cljs.core.not_empty.call(null,inst_31776);
var state_31810__$1 = (function (){var statearr_31846 = state_31810;
(statearr_31846[(30)] = inst_31796);

return statearr_31846;
})();
if(cljs.core.truth_(inst_31797)){
var statearr_31847_31907 = state_31810__$1;
(statearr_31847_31907[(1)] = (35));

} else {
var statearr_31848_31908 = state_31810__$1;
(statearr_31848_31908[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (17))){
var inst_31736 = (state_31810[(23)]);
var state_31810__$1 = state_31810;
var statearr_31849_31909 = state_31810__$1;
(statearr_31849_31909[(2)] = inst_31736);

(statearr_31849_31909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (3))){
var state_31810__$1 = state_31810;
var statearr_31850_31910 = state_31810__$1;
(statearr_31850_31910[(2)] = null);

(statearr_31850_31910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (12))){
var inst_31727 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31851_31911 = state_31810__$1;
(statearr_31851_31911[(2)] = inst_31727);

(statearr_31851_31911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (2))){
var inst_31689 = (state_31810[(20)]);
var inst_31696 = cljs.core.seq.call(null,inst_31689);
var inst_31697 = inst_31696;
var inst_31698 = null;
var inst_31699 = (0);
var inst_31700 = (0);
var state_31810__$1 = (function (){var statearr_31852 = state_31810;
(statearr_31852[(7)] = inst_31699);

(statearr_31852[(8)] = inst_31700);

(statearr_31852[(9)] = inst_31697);

(statearr_31852[(10)] = inst_31698);

return statearr_31852;
})();
var statearr_31853_31912 = state_31810__$1;
(statearr_31853_31912[(2)] = null);

(statearr_31853_31912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (23))){
var inst_31749 = (state_31810[(12)]);
var inst_31742 = (state_31810[(13)]);
var inst_31769 = (state_31810[(19)]);
var inst_31746 = (state_31810[(14)]);
var inst_31743 = (state_31810[(15)]);
var inst_31747 = (state_31810[(16)]);
var inst_31765 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31768 = (function (){var files_not_loaded = inst_31749;
var res = inst_31747;
var res_SINGLEQUOTE_ = inst_31746;
var files_SINGLEQUOTE_ = inst_31743;
var all_files = inst_31742;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31749,inst_31742,inst_31769,inst_31746,inst_31743,inst_31747,inst_31765,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (p__31767){
var map__31854 = p__31767;
var map__31854__$1 = ((cljs.core.seq_QMARK_.call(null,map__31854))?cljs.core.apply.call(null,cljs.core.hash_map,map__31854):map__31854);
var meta_data = cljs.core.get.call(null,map__31854__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31749,inst_31742,inst_31769,inst_31746,inst_31743,inst_31747,inst_31765,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
})();
var inst_31769__$1 = cljs.core.group_by.call(null,inst_31768,inst_31749);
var inst_31770 = cljs.core.seq_QMARK_.call(null,inst_31769__$1);
var state_31810__$1 = (function (){var statearr_31855 = state_31810;
(statearr_31855[(19)] = inst_31769__$1);

(statearr_31855[(31)] = inst_31765);

return statearr_31855;
})();
if(inst_31770){
var statearr_31856_31913 = state_31810__$1;
(statearr_31856_31913[(1)] = (26));

} else {
var statearr_31857_31914 = state_31810__$1;
(statearr_31857_31914[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (35))){
var inst_31776 = (state_31810[(29)]);
var inst_31799 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31776);
var inst_31800 = cljs.core.pr_str.call(null,inst_31799);
var inst_31801 = [cljs.core.str("not required: "),cljs.core.str(inst_31800)].join('');
var inst_31802 = figwheel.client.utils.log.call(null,inst_31801);
var state_31810__$1 = state_31810;
var statearr_31858_31915 = state_31810__$1;
(statearr_31858_31915[(2)] = inst_31802);

(statearr_31858_31915[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (19))){
var inst_31742 = (state_31810[(13)]);
var inst_31746 = (state_31810[(14)]);
var inst_31743 = (state_31810[(15)]);
var inst_31747 = (state_31810[(16)]);
var inst_31746__$1 = (state_31810[(2)]);
var inst_31747__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31746__$1);
var inst_31748 = (function (){var res = inst_31747__$1;
var res_SINGLEQUOTE_ = inst_31746__$1;
var files_SINGLEQUOTE_ = inst_31743;
var all_files = inst_31742;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31742,inst_31746,inst_31743,inst_31747,inst_31746__$1,inst_31747__$1,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (p1__31482_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31482_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31742,inst_31746,inst_31743,inst_31747,inst_31746__$1,inst_31747__$1,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
})();
var inst_31749 = cljs.core.filter.call(null,inst_31748,inst_31746__$1);
var inst_31750 = cljs.core.not_empty.call(null,inst_31747__$1);
var state_31810__$1 = (function (){var statearr_31859 = state_31810;
(statearr_31859[(12)] = inst_31749);

(statearr_31859[(14)] = inst_31746__$1);

(statearr_31859[(16)] = inst_31747__$1);

return statearr_31859;
})();
if(cljs.core.truth_(inst_31750)){
var statearr_31860_31916 = state_31810__$1;
(statearr_31860_31916[(1)] = (20));

} else {
var statearr_31861_31917 = state_31810__$1;
(statearr_31861_31917[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (11))){
var state_31810__$1 = state_31810;
var statearr_31862_31918 = state_31810__$1;
(statearr_31862_31918[(2)] = null);

(statearr_31862_31918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (9))){
var inst_31729 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31863_31919 = state_31810__$1;
(statearr_31863_31919[(2)] = inst_31729);

(statearr_31863_31919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (5))){
var inst_31699 = (state_31810[(7)]);
var inst_31700 = (state_31810[(8)]);
var inst_31702 = (inst_31700 < inst_31699);
var inst_31703 = inst_31702;
var state_31810__$1 = state_31810;
if(cljs.core.truth_(inst_31703)){
var statearr_31864_31920 = state_31810__$1;
(statearr_31864_31920[(1)] = (7));

} else {
var statearr_31865_31921 = state_31810__$1;
(statearr_31865_31921[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (14))){
var inst_31710 = (state_31810[(26)]);
var inst_31719 = cljs.core.first.call(null,inst_31710);
var inst_31720 = figwheel.client.file_reloading.eval_body.call(null,inst_31719);
var inst_31721 = cljs.core.next.call(null,inst_31710);
var inst_31697 = inst_31721;
var inst_31698 = null;
var inst_31699 = (0);
var inst_31700 = (0);
var state_31810__$1 = (function (){var statearr_31866 = state_31810;
(statearr_31866[(7)] = inst_31699);

(statearr_31866[(32)] = inst_31720);

(statearr_31866[(8)] = inst_31700);

(statearr_31866[(9)] = inst_31697);

(statearr_31866[(10)] = inst_31698);

return statearr_31866;
})();
var statearr_31867_31922 = state_31810__$1;
(statearr_31867_31922[(2)] = null);

(statearr_31867_31922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (26))){
var inst_31769 = (state_31810[(19)]);
var inst_31772 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31769);
var state_31810__$1 = state_31810;
var statearr_31868_31923 = state_31810__$1;
(statearr_31868_31923[(2)] = inst_31772);

(statearr_31868_31923[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (16))){
var inst_31736 = (state_31810[(23)]);
var inst_31738 = (function (){var all_files = inst_31736;
return ((function (all_files,inst_31736,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function (p1__31481_SHARP_){
return cljs.core.update_in.call(null,p1__31481_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31736,state_val_31811,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
})();
var inst_31739 = cljs.core.map.call(null,inst_31738,inst_31736);
var state_31810__$1 = state_31810;
var statearr_31869_31924 = state_31810__$1;
(statearr_31869_31924[(2)] = inst_31739);

(statearr_31869_31924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (30))){
var state_31810__$1 = state_31810;
var statearr_31870_31925 = state_31810__$1;
(statearr_31870_31925[(2)] = null);

(statearr_31870_31925[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (10))){
var inst_31710 = (state_31810[(26)]);
var inst_31712 = cljs.core.chunked_seq_QMARK_.call(null,inst_31710);
var state_31810__$1 = state_31810;
if(inst_31712){
var statearr_31871_31926 = state_31810__$1;
(statearr_31871_31926[(1)] = (13));

} else {
var statearr_31872_31927 = state_31810__$1;
(statearr_31872_31927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (18))){
var inst_31742 = (state_31810[(13)]);
var inst_31743 = (state_31810[(15)]);
var inst_31742__$1 = (state_31810[(2)]);
var inst_31743__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31742__$1);
var inst_31744 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31743__$1);
var state_31810__$1 = (function (){var statearr_31873 = state_31810;
(statearr_31873[(13)] = inst_31742__$1);

(statearr_31873[(15)] = inst_31743__$1);

return statearr_31873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31810__$1,(19),inst_31744);
} else {
if((state_val_31811 === (37))){
var inst_31805 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31874_31928 = state_31810__$1;
(statearr_31874_31928[(2)] = inst_31805);

(statearr_31874_31928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (8))){
var inst_31710 = (state_31810[(26)]);
var inst_31697 = (state_31810[(9)]);
var inst_31710__$1 = cljs.core.seq.call(null,inst_31697);
var state_31810__$1 = (function (){var statearr_31875 = state_31810;
(statearr_31875[(26)] = inst_31710__$1);

return statearr_31875;
})();
if(inst_31710__$1){
var statearr_31876_31929 = state_31810__$1;
(statearr_31876_31929[(1)] = (10));

} else {
var statearr_31877_31930 = state_31810__$1;
(statearr_31877_31930[(1)] = (11));

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
});})(c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
;
return ((function (switch__16077__auto__,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_31881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31881[(0)] = state_machine__16078__auto__);

(statearr_31881[(1)] = (1));

return statearr_31881;
});
var state_machine__16078__auto____1 = (function (state_31810){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_31810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e31882){if((e31882 instanceof Object)){
var ex__16081__auto__ = e31882;
var statearr_31883_31931 = state_31810;
(statearr_31883_31931[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31932 = state_31810;
state_31810 = G__31932;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_31810){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_31810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
})();
var state__16135__auto__ = (function (){var statearr_31884 = f__16134__auto__.call(null);
(statearr_31884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_31884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__,map__31685,map__31685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31686,map__31686__$1,msg,files))
);

return c__16133__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31935,link){
var map__31937 = p__31935;
var map__31937__$1 = ((cljs.core.seq_QMARK_.call(null,map__31937))?cljs.core.apply.call(null,cljs.core.hash_map,map__31937):map__31937);
var file = cljs.core.get.call(null,map__31937__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31937,map__31937__$1,file){
return (function (p1__31933_SHARP_,p2__31934_SHARP_){
if(cljs.core._EQ_.call(null,p1__31933_SHARP_,p2__31934_SHARP_)){
return p1__31933_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31937,map__31937__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31941){
var map__31942 = p__31941;
var map__31942__$1 = ((cljs.core.seq_QMARK_.call(null,map__31942))?cljs.core.apply.call(null,cljs.core.hash_map,map__31942):map__31942);
var current_url_length = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31938_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31938_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31943){
var map__31945 = p__31943;
var map__31945__$1 = ((cljs.core.seq_QMARK_.call(null,map__31945))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);
var f_data = map__31945__$1;
var request_url = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__13465__auto__ = request_url;
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31946,files_msg){
var map__31968 = p__31946;
var map__31968__$1 = ((cljs.core.seq_QMARK_.call(null,map__31968))?cljs.core.apply.call(null,cljs.core.hash_map,map__31968):map__31968);
var opts = map__31968__$1;
var on_cssload = cljs.core.get.call(null,map__31968__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31969_31989 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31970_31990 = null;
var count__31971_31991 = (0);
var i__31972_31992 = (0);
while(true){
if((i__31972_31992 < count__31971_31991)){
var f_31993 = cljs.core._nth.call(null,chunk__31970_31990,i__31972_31992);
figwheel.client.file_reloading.reload_css_file.call(null,f_31993);

var G__31994 = seq__31969_31989;
var G__31995 = chunk__31970_31990;
var G__31996 = count__31971_31991;
var G__31997 = (i__31972_31992 + (1));
seq__31969_31989 = G__31994;
chunk__31970_31990 = G__31995;
count__31971_31991 = G__31996;
i__31972_31992 = G__31997;
continue;
} else {
var temp__4126__auto___31998 = cljs.core.seq.call(null,seq__31969_31989);
if(temp__4126__auto___31998){
var seq__31969_31999__$1 = temp__4126__auto___31998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31969_31999__$1)){
var c__14252__auto___32000 = cljs.core.chunk_first.call(null,seq__31969_31999__$1);
var G__32001 = cljs.core.chunk_rest.call(null,seq__31969_31999__$1);
var G__32002 = c__14252__auto___32000;
var G__32003 = cljs.core.count.call(null,c__14252__auto___32000);
var G__32004 = (0);
seq__31969_31989 = G__32001;
chunk__31970_31990 = G__32002;
count__31971_31991 = G__32003;
i__31972_31992 = G__32004;
continue;
} else {
var f_32005 = cljs.core.first.call(null,seq__31969_31999__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32005);

var G__32006 = cljs.core.next.call(null,seq__31969_31999__$1);
var G__32007 = null;
var G__32008 = (0);
var G__32009 = (0);
seq__31969_31989 = G__32006;
chunk__31970_31990 = G__32007;
count__31971_31991 = G__32008;
i__31972_31992 = G__32009;
continue;
}
} else {
}
}
break;
}

var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__,map__31968,map__31968__$1,opts,on_cssload){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__,map__31968,map__31968__$1,opts,on_cssload){
return (function (state_31979){
var state_val_31980 = (state_31979[(1)]);
if((state_val_31980 === (2))){
var inst_31975 = (state_31979[(2)]);
var inst_31976 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31977 = on_cssload.call(null,inst_31976);
var state_31979__$1 = (function (){var statearr_31981 = state_31979;
(statearr_31981[(7)] = inst_31975);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31979__$1,inst_31977);
} else {
if((state_val_31980 === (1))){
var inst_31973 = cljs.core.async.timeout.call(null,(100));
var state_31979__$1 = state_31979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31979__$1,(2),inst_31973);
} else {
return null;
}
}
});})(c__16133__auto__,map__31968,map__31968__$1,opts,on_cssload))
;
return ((function (switch__16077__auto__,c__16133__auto__,map__31968,map__31968__$1,opts,on_cssload){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_31985 = [null,null,null,null,null,null,null,null];
(statearr_31985[(0)] = state_machine__16078__auto__);

(statearr_31985[(1)] = (1));

return statearr_31985;
});
var state_machine__16078__auto____1 = (function (state_31979){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_31979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e31986){if((e31986 instanceof Object)){
var ex__16081__auto__ = e31986;
var statearr_31987_32010 = state_31979;
(statearr_31987_32010[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32011 = state_31979;
state_31979 = G__32011;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_31979){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_31979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__,map__31968,map__31968__$1,opts,on_cssload))
})();
var state__16135__auto__ = (function (){var statearr_31988 = f__16134__auto__.call(null);
(statearr_31988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_31988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__,map__31968,map__31968__$1,opts,on_cssload))
);

return c__16133__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map