// Compiled by ClojureScript 0.0-2843 {:elide-asserts false}
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
return cljs.core.reduce.call(null,(function (p1__31141_SHARP_,p2__31142_SHARP_){
var and__13311__auto__ = p1__31141_SHARP_;
if(cljs.core.truth_(and__13311__auto__)){
return p2__31142_SHARP_;
} else {
return and__13311__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__13323__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__13323__auto__){
return or__13323__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31144_SHARP_,p2__31143_SHARP_){
return [cljs.core.str(p2__31143_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__13323__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__13323__auto__){
return or__13323__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__13323__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__14220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14224__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14224__auto__,method_table__14220__auto__,prefer_table__14221__auto__,method_cache__14222__auto__,cached_hierarchy__14223__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31145){
var map__31146 = p__31145;
var map__31146__$1 = ((cljs.core.seq_QMARK_.call(null,map__31146))?cljs.core.apply.call(null,cljs.core.hash_map,map__31146):map__31146);
var file = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31147){
var map__31148 = p__31147;
var map__31148__$1 = ((cljs.core.seq_QMARK_.call(null,map__31148))?cljs.core.apply.call(null,cljs.core.hash_map,map__31148):map__31148);
var namespace = cljs.core.get.call(null,map__31148__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__14220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14224__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14224__auto__,method_table__14220__auto__,prefer_table__14221__auto__,method_cache__14222__auto__,cached_hierarchy__14223__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31149){if((e31149 instanceof Error)){
var e = e31149;
return false;
} else {
throw e31149;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__31150,callback){
var map__31152 = p__31150;
var map__31152__$1 = ((cljs.core.seq_QMARK_.call(null,map__31152))?cljs.core.apply.call(null,cljs.core.hash_map,map__31152):map__31152);
var file_msg = map__31152__$1;
var request_url = cljs.core.get.call(null,map__31152__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31152,map__31152__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31152,map__31152__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__31153){
var map__31155 = p__31153;
var map__31155__$1 = ((cljs.core.seq_QMARK_.call(null,map__31155))?cljs.core.apply.call(null,cljs.core.hash_map,map__31155):map__31155);
var file_msg = map__31155__$1;
var meta_data = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__13323__auto__ = meta_data;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__13311__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__13311__auto__){
var or__13323__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__13323__auto____$1)){
return or__13323__auto____$1;
} else {
var and__13311__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__13311__auto____$1){
var or__13323__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__13323__auto____$2){
return or__13323__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__13311__auto____$1;
}
}
}
} else {
return and__13311__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__31156,callback){
var map__31158 = p__31156;
var map__31158__$1 = ((cljs.core.seq_QMARK_.call(null,map__31158))?cljs.core.apply.call(null,cljs.core.hash_map,map__31158):map__31158);
var file_msg = map__31158__$1;
var namespace = cljs.core.get.call(null,map__31158__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31158__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__15967__auto___31245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___31245,out){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___31245,out){
return (function (state_31227){
var state_val_31228 = (state_31227[(1)]);
if((state_val_31228 === (7))){
var inst_31211 = (state_31227[(7)]);
var inst_31217 = (state_31227[(2)]);
var inst_31218 = cljs.core.async.put_BANG_.call(null,out,inst_31217);
var inst_31207 = inst_31211;
var state_31227__$1 = (function (){var statearr_31229 = state_31227;
(statearr_31229[(8)] = inst_31207);

(statearr_31229[(9)] = inst_31218);

return statearr_31229;
})();
var statearr_31230_31246 = state_31227__$1;
(statearr_31230_31246[(2)] = null);

(statearr_31230_31246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31228 === (6))){
var inst_31223 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
var statearr_31231_31247 = state_31227__$1;
(statearr_31231_31247[(2)] = inst_31223);

(statearr_31231_31247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31228 === (5))){
var inst_31221 = cljs.core.async.close_BANG_.call(null,out);
var state_31227__$1 = state_31227;
var statearr_31232_31248 = state_31227__$1;
(statearr_31232_31248[(2)] = inst_31221);

(statearr_31232_31248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31228 === (4))){
var inst_31210 = (state_31227[(10)]);
var inst_31215 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31210);
var state_31227__$1 = state_31227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31227__$1,(7),inst_31215);
} else {
if((state_val_31228 === (3))){
var inst_31225 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31227__$1,inst_31225);
} else {
if((state_val_31228 === (2))){
var inst_31207 = (state_31227[(8)]);
var inst_31210 = (state_31227[(10)]);
var inst_31210__$1 = cljs.core.nth.call(null,inst_31207,(0),null);
var inst_31211 = cljs.core.nthnext.call(null,inst_31207,(1));
var inst_31212 = (inst_31210__$1 == null);
var inst_31213 = cljs.core.not.call(null,inst_31212);
var state_31227__$1 = (function (){var statearr_31233 = state_31227;
(statearr_31233[(7)] = inst_31211);

(statearr_31233[(10)] = inst_31210__$1);

return statearr_31233;
})();
if(inst_31213){
var statearr_31234_31249 = state_31227__$1;
(statearr_31234_31249[(1)] = (4));

} else {
var statearr_31235_31250 = state_31227__$1;
(statearr_31235_31250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31228 === (1))){
var inst_31205 = cljs.core.nth.call(null,files,(0),null);
var inst_31206 = cljs.core.nthnext.call(null,files,(1));
var inst_31207 = files;
var state_31227__$1 = (function (){var statearr_31236 = state_31227;
(statearr_31236[(8)] = inst_31207);

(statearr_31236[(11)] = inst_31206);

(statearr_31236[(12)] = inst_31205);

return statearr_31236;
})();
var statearr_31237_31251 = state_31227__$1;
(statearr_31237_31251[(2)] = null);

(statearr_31237_31251[(1)] = (2));


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
});})(c__15967__auto___31245,out))
;
return ((function (switch__15911__auto__,c__15967__auto___31245,out){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_31241 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31241[(0)] = state_machine__15912__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var state_machine__15912__auto____1 = (function (state_31227){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_31227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object)){
var ex__15915__auto__ = e31242;
var statearr_31243_31252 = state_31227;
(statearr_31243_31252[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31253 = state_31227;
state_31227 = G__31253;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_31227){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_31227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___31245,out))
})();
var state__15969__auto__ = (function (){var statearr_31244 = f__15968__auto__.call(null);
(statearr_31244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___31245);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___31245,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31254,p__31255){
var map__31258 = p__31254;
var map__31258__$1 = ((cljs.core.seq_QMARK_.call(null,map__31258))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);
var opts = map__31258__$1;
var url_rewriter = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31259 = p__31255;
var map__31259__$1 = ((cljs.core.seq_QMARK_.call(null,map__31259))?cljs.core.apply.call(null,cljs.core.hash_map,map__31259):map__31259);
var file_msg = map__31259__$1;
var file = cljs.core.get.call(null,map__31259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__31260){
var map__31263 = p__31260;
var map__31263__$1 = ((cljs.core.seq_QMARK_.call(null,map__31263))?cljs.core.apply.call(null,cljs.core.hash_map,map__31263):map__31263);
var file = cljs.core.get.call(null,map__31263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31263__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__13311__auto__ = eval_body__$1;
if(cljs.core.truth_(and__13311__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__13311__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31264){var e = e31264;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31269,p__31270){
var map__31471 = p__31269;
var map__31471__$1 = ((cljs.core.seq_QMARK_.call(null,map__31471))?cljs.core.apply.call(null,cljs.core.hash_map,map__31471):map__31471);
var opts = map__31471__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31471__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31471__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31471__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31472 = p__31270;
var map__31472__$1 = ((cljs.core.seq_QMARK_.call(null,map__31472))?cljs.core.apply.call(null,cljs.core.hash_map,map__31472):map__31472);
var msg = map__31472__$1;
var files = cljs.core.get.call(null,map__31472__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15967__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (state_31596){
var state_val_31597 = (state_31596[(1)]);
if((state_val_31597 === (7))){
var inst_31486 = (state_31596[(7)]);
var inst_31485 = (state_31596[(8)]);
var inst_31484 = (state_31596[(9)]);
var inst_31483 = (state_31596[(10)]);
var inst_31491 = cljs.core._nth.call(null,inst_31484,inst_31486);
var inst_31492 = figwheel.client.file_reloading.eval_body.call(null,inst_31491);
var inst_31493 = (inst_31486 + (1));
var tmp31598 = inst_31485;
var tmp31599 = inst_31484;
var tmp31600 = inst_31483;
var inst_31483__$1 = tmp31600;
var inst_31484__$1 = tmp31599;
var inst_31485__$1 = tmp31598;
var inst_31486__$1 = inst_31493;
var state_31596__$1 = (function (){var statearr_31601 = state_31596;
(statearr_31601[(7)] = inst_31486__$1);

(statearr_31601[(8)] = inst_31485__$1);

(statearr_31601[(9)] = inst_31484__$1);

(statearr_31601[(11)] = inst_31492);

(statearr_31601[(10)] = inst_31483__$1);

return statearr_31601;
})();
var statearr_31602_31671 = state_31596__$1;
(statearr_31602_31671[(2)] = null);

(statearr_31602_31671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (20))){
var inst_31528 = (state_31596[(12)]);
var inst_31533 = (state_31596[(13)]);
var inst_31535 = (state_31596[(14)]);
var inst_31532 = (state_31596[(15)]);
var inst_31529 = (state_31596[(16)]);
var inst_31538 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31540 = (function (){var files_not_loaded = inst_31535;
var res = inst_31533;
var res_SINGLEQUOTE_ = inst_31532;
var files_SINGLEQUOTE_ = inst_31529;
var all_files = inst_31528;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31528,inst_31533,inst_31535,inst_31532,inst_31529,inst_31538,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (p__31539){
var map__31603 = p__31539;
var map__31603__$1 = ((cljs.core.seq_QMARK_.call(null,map__31603))?cljs.core.apply.call(null,cljs.core.hash_map,map__31603):map__31603);
var file = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31528,inst_31533,inst_31535,inst_31532,inst_31529,inst_31538,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
})();
var inst_31541 = cljs.core.map.call(null,inst_31540,inst_31533);
var inst_31542 = cljs.core.pr_str.call(null,inst_31541);
var inst_31543 = figwheel.client.utils.log.call(null,inst_31542);
var inst_31544 = (function (){var files_not_loaded = inst_31535;
var res = inst_31533;
var res_SINGLEQUOTE_ = inst_31532;
var files_SINGLEQUOTE_ = inst_31529;
var all_files = inst_31528;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31528,inst_31533,inst_31535,inst_31532,inst_31529,inst_31538,inst_31540,inst_31541,inst_31542,inst_31543,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31528,inst_31533,inst_31535,inst_31532,inst_31529,inst_31538,inst_31540,inst_31541,inst_31542,inst_31543,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
})();
var inst_31545 = setTimeout(inst_31544,(10));
var state_31596__$1 = (function (){var statearr_31604 = state_31596;
(statearr_31604[(17)] = inst_31543);

(statearr_31604[(18)] = inst_31538);

return statearr_31604;
})();
var statearr_31605_31672 = state_31596__$1;
(statearr_31605_31672[(2)] = inst_31545);

(statearr_31605_31672[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (27))){
var inst_31555 = (state_31596[(19)]);
var state_31596__$1 = state_31596;
var statearr_31606_31673 = state_31596__$1;
(statearr_31606_31673[(2)] = inst_31555);

(statearr_31606_31673[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (1))){
var inst_31475 = (state_31596[(20)]);
var inst_31473 = before_jsload.call(null,files);
var inst_31474 = (function (){return ((function (inst_31475,inst_31473,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (p1__31265_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31265_SHARP_);
});
;})(inst_31475,inst_31473,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
})();
var inst_31475__$1 = cljs.core.filter.call(null,inst_31474,files);
var inst_31476 = cljs.core.not_empty.call(null,inst_31475__$1);
var state_31596__$1 = (function (){var statearr_31607 = state_31596;
(statearr_31607[(20)] = inst_31475__$1);

(statearr_31607[(21)] = inst_31473);

return statearr_31607;
})();
if(cljs.core.truth_(inst_31476)){
var statearr_31608_31674 = state_31596__$1;
(statearr_31608_31674[(1)] = (2));

} else {
var statearr_31609_31675 = state_31596__$1;
(statearr_31609_31675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (24))){
var state_31596__$1 = state_31596;
var statearr_31610_31676 = state_31596__$1;
(statearr_31610_31676[(2)] = null);

(statearr_31610_31676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (4))){
var inst_31520 = (state_31596[(2)]);
var inst_31521 = (function (){return ((function (inst_31520,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (p1__31266_SHARP_){
var and__13311__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31266_SHARP_);
if(cljs.core.truth_(and__13311__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31266_SHARP_));
} else {
return and__13311__auto__;
}
});
;})(inst_31520,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
})();
var inst_31522 = cljs.core.filter.call(null,inst_31521,files);
var state_31596__$1 = (function (){var statearr_31611 = state_31596;
(statearr_31611[(22)] = inst_31520);

(statearr_31611[(23)] = inst_31522);

return statearr_31611;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31612_31677 = state_31596__$1;
(statearr_31612_31677[(1)] = (16));

} else {
var statearr_31613_31678 = state_31596__$1;
(statearr_31613_31678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (15))){
var inst_31510 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31614_31679 = state_31596__$1;
(statearr_31614_31679[(2)] = inst_31510);

(statearr_31614_31679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (21))){
var state_31596__$1 = state_31596;
var statearr_31615_31680 = state_31596__$1;
(statearr_31615_31680[(2)] = null);

(statearr_31615_31680[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (31))){
var inst_31563 = (state_31596[(24)]);
var inst_31573 = (state_31596[(2)]);
var inst_31574 = cljs.core.not_empty.call(null,inst_31563);
var state_31596__$1 = (function (){var statearr_31616 = state_31596;
(statearr_31616[(25)] = inst_31573);

return statearr_31616;
})();
if(cljs.core.truth_(inst_31574)){
var statearr_31617_31681 = state_31596__$1;
(statearr_31617_31681[(1)] = (32));

} else {
var statearr_31618_31682 = state_31596__$1;
(statearr_31618_31682[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (32))){
var inst_31563 = (state_31596[(24)]);
var inst_31576 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31563);
var inst_31577 = cljs.core.pr_str.call(null,inst_31576);
var inst_31578 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31577)].join('');
var inst_31579 = figwheel.client.utils.log.call(null,inst_31578);
var state_31596__$1 = state_31596;
var statearr_31619_31683 = state_31596__$1;
(statearr_31619_31683[(2)] = inst_31579);

(statearr_31619_31683[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (33))){
var state_31596__$1 = state_31596;
var statearr_31620_31684 = state_31596__$1;
(statearr_31620_31684[(2)] = null);

(statearr_31620_31684[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (13))){
var inst_31496 = (state_31596[(26)]);
var inst_31500 = cljs.core.chunk_first.call(null,inst_31496);
var inst_31501 = cljs.core.chunk_rest.call(null,inst_31496);
var inst_31502 = cljs.core.count.call(null,inst_31500);
var inst_31483 = inst_31501;
var inst_31484 = inst_31500;
var inst_31485 = inst_31502;
var inst_31486 = (0);
var state_31596__$1 = (function (){var statearr_31621 = state_31596;
(statearr_31621[(7)] = inst_31486);

(statearr_31621[(8)] = inst_31485);

(statearr_31621[(9)] = inst_31484);

(statearr_31621[(10)] = inst_31483);

return statearr_31621;
})();
var statearr_31622_31685 = state_31596__$1;
(statearr_31622_31685[(2)] = null);

(statearr_31622_31685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (22))){
var inst_31535 = (state_31596[(14)]);
var inst_31548 = (state_31596[(2)]);
var inst_31549 = cljs.core.not_empty.call(null,inst_31535);
var state_31596__$1 = (function (){var statearr_31623 = state_31596;
(statearr_31623[(27)] = inst_31548);

return statearr_31623;
})();
if(cljs.core.truth_(inst_31549)){
var statearr_31624_31686 = state_31596__$1;
(statearr_31624_31686[(1)] = (23));

} else {
var statearr_31625_31687 = state_31596__$1;
(statearr_31625_31687[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (36))){
var state_31596__$1 = state_31596;
var statearr_31626_31688 = state_31596__$1;
(statearr_31626_31688[(2)] = null);

(statearr_31626_31688[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (29))){
var inst_31564 = (state_31596[(28)]);
var inst_31567 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31564);
var inst_31568 = cljs.core.pr_str.call(null,inst_31567);
var inst_31569 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31568)].join('');
var inst_31570 = figwheel.client.utils.log.call(null,inst_31569);
var state_31596__$1 = state_31596;
var statearr_31627_31689 = state_31596__$1;
(statearr_31627_31689[(2)] = inst_31570);

(statearr_31627_31689[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (6))){
var inst_31517 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31628_31690 = state_31596__$1;
(statearr_31628_31690[(2)] = inst_31517);

(statearr_31628_31690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (28))){
var inst_31564 = (state_31596[(28)]);
var inst_31561 = (state_31596[(2)]);
var inst_31562 = cljs.core.get.call(null,inst_31561,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31563 = cljs.core.get.call(null,inst_31561,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31564__$1 = cljs.core.get.call(null,inst_31561,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31565 = cljs.core.not_empty.call(null,inst_31564__$1);
var state_31596__$1 = (function (){var statearr_31629 = state_31596;
(statearr_31629[(24)] = inst_31563);

(statearr_31629[(29)] = inst_31562);

(statearr_31629[(28)] = inst_31564__$1);

return statearr_31629;
})();
if(cljs.core.truth_(inst_31565)){
var statearr_31630_31691 = state_31596__$1;
(statearr_31630_31691[(1)] = (29));

} else {
var statearr_31631_31692 = state_31596__$1;
(statearr_31631_31692[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (25))){
var inst_31594 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31596__$1,inst_31594);
} else {
if((state_val_31597 === (34))){
var inst_31562 = (state_31596[(29)]);
var inst_31582 = (state_31596[(2)]);
var inst_31583 = cljs.core.not_empty.call(null,inst_31562);
var state_31596__$1 = (function (){var statearr_31632 = state_31596;
(statearr_31632[(30)] = inst_31582);

return statearr_31632;
})();
if(cljs.core.truth_(inst_31583)){
var statearr_31633_31693 = state_31596__$1;
(statearr_31633_31693[(1)] = (35));

} else {
var statearr_31634_31694 = state_31596__$1;
(statearr_31634_31694[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (17))){
var inst_31522 = (state_31596[(23)]);
var state_31596__$1 = state_31596;
var statearr_31635_31695 = state_31596__$1;
(statearr_31635_31695[(2)] = inst_31522);

(statearr_31635_31695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (3))){
var state_31596__$1 = state_31596;
var statearr_31636_31696 = state_31596__$1;
(statearr_31636_31696[(2)] = null);

(statearr_31636_31696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (12))){
var inst_31513 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31637_31697 = state_31596__$1;
(statearr_31637_31697[(2)] = inst_31513);

(statearr_31637_31697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (2))){
var inst_31475 = (state_31596[(20)]);
var inst_31482 = cljs.core.seq.call(null,inst_31475);
var inst_31483 = inst_31482;
var inst_31484 = null;
var inst_31485 = (0);
var inst_31486 = (0);
var state_31596__$1 = (function (){var statearr_31638 = state_31596;
(statearr_31638[(7)] = inst_31486);

(statearr_31638[(8)] = inst_31485);

(statearr_31638[(9)] = inst_31484);

(statearr_31638[(10)] = inst_31483);

return statearr_31638;
})();
var statearr_31639_31698 = state_31596__$1;
(statearr_31639_31698[(2)] = null);

(statearr_31639_31698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (23))){
var inst_31528 = (state_31596[(12)]);
var inst_31533 = (state_31596[(13)]);
var inst_31555 = (state_31596[(19)]);
var inst_31535 = (state_31596[(14)]);
var inst_31532 = (state_31596[(15)]);
var inst_31529 = (state_31596[(16)]);
var inst_31551 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31554 = (function (){var files_not_loaded = inst_31535;
var res = inst_31533;
var res_SINGLEQUOTE_ = inst_31532;
var files_SINGLEQUOTE_ = inst_31529;
var all_files = inst_31528;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31528,inst_31533,inst_31555,inst_31535,inst_31532,inst_31529,inst_31551,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (p__31553){
var map__31640 = p__31553;
var map__31640__$1 = ((cljs.core.seq_QMARK_.call(null,map__31640))?cljs.core.apply.call(null,cljs.core.hash_map,map__31640):map__31640);
var meta_data = cljs.core.get.call(null,map__31640__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31528,inst_31533,inst_31555,inst_31535,inst_31532,inst_31529,inst_31551,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
})();
var inst_31555__$1 = cljs.core.group_by.call(null,inst_31554,inst_31535);
var inst_31556 = cljs.core.seq_QMARK_.call(null,inst_31555__$1);
var state_31596__$1 = (function (){var statearr_31641 = state_31596;
(statearr_31641[(31)] = inst_31551);

(statearr_31641[(19)] = inst_31555__$1);

return statearr_31641;
})();
if(inst_31556){
var statearr_31642_31699 = state_31596__$1;
(statearr_31642_31699[(1)] = (26));

} else {
var statearr_31643_31700 = state_31596__$1;
(statearr_31643_31700[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (35))){
var inst_31562 = (state_31596[(29)]);
var inst_31585 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31562);
var inst_31586 = cljs.core.pr_str.call(null,inst_31585);
var inst_31587 = [cljs.core.str("not required: "),cljs.core.str(inst_31586)].join('');
var inst_31588 = figwheel.client.utils.log.call(null,inst_31587);
var state_31596__$1 = state_31596;
var statearr_31644_31701 = state_31596__$1;
(statearr_31644_31701[(2)] = inst_31588);

(statearr_31644_31701[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (19))){
var inst_31528 = (state_31596[(12)]);
var inst_31533 = (state_31596[(13)]);
var inst_31532 = (state_31596[(15)]);
var inst_31529 = (state_31596[(16)]);
var inst_31532__$1 = (state_31596[(2)]);
var inst_31533__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31532__$1);
var inst_31534 = (function (){var res = inst_31533__$1;
var res_SINGLEQUOTE_ = inst_31532__$1;
var files_SINGLEQUOTE_ = inst_31529;
var all_files = inst_31528;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31528,inst_31533,inst_31532,inst_31529,inst_31532__$1,inst_31533__$1,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (p1__31268_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31268_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31528,inst_31533,inst_31532,inst_31529,inst_31532__$1,inst_31533__$1,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
})();
var inst_31535 = cljs.core.filter.call(null,inst_31534,inst_31532__$1);
var inst_31536 = cljs.core.not_empty.call(null,inst_31533__$1);
var state_31596__$1 = (function (){var statearr_31645 = state_31596;
(statearr_31645[(13)] = inst_31533__$1);

(statearr_31645[(14)] = inst_31535);

(statearr_31645[(15)] = inst_31532__$1);

return statearr_31645;
})();
if(cljs.core.truth_(inst_31536)){
var statearr_31646_31702 = state_31596__$1;
(statearr_31646_31702[(1)] = (20));

} else {
var statearr_31647_31703 = state_31596__$1;
(statearr_31647_31703[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (11))){
var state_31596__$1 = state_31596;
var statearr_31648_31704 = state_31596__$1;
(statearr_31648_31704[(2)] = null);

(statearr_31648_31704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (9))){
var inst_31515 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31649_31705 = state_31596__$1;
(statearr_31649_31705[(2)] = inst_31515);

(statearr_31649_31705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (5))){
var inst_31486 = (state_31596[(7)]);
var inst_31485 = (state_31596[(8)]);
var inst_31488 = (inst_31486 < inst_31485);
var inst_31489 = inst_31488;
var state_31596__$1 = state_31596;
if(cljs.core.truth_(inst_31489)){
var statearr_31650_31706 = state_31596__$1;
(statearr_31650_31706[(1)] = (7));

} else {
var statearr_31651_31707 = state_31596__$1;
(statearr_31651_31707[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (14))){
var inst_31496 = (state_31596[(26)]);
var inst_31505 = cljs.core.first.call(null,inst_31496);
var inst_31506 = figwheel.client.file_reloading.eval_body.call(null,inst_31505);
var inst_31507 = cljs.core.next.call(null,inst_31496);
var inst_31483 = inst_31507;
var inst_31484 = null;
var inst_31485 = (0);
var inst_31486 = (0);
var state_31596__$1 = (function (){var statearr_31652 = state_31596;
(statearr_31652[(7)] = inst_31486);

(statearr_31652[(8)] = inst_31485);

(statearr_31652[(9)] = inst_31484);

(statearr_31652[(10)] = inst_31483);

(statearr_31652[(32)] = inst_31506);

return statearr_31652;
})();
var statearr_31653_31708 = state_31596__$1;
(statearr_31653_31708[(2)] = null);

(statearr_31653_31708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (26))){
var inst_31555 = (state_31596[(19)]);
var inst_31558 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31555);
var state_31596__$1 = state_31596;
var statearr_31654_31709 = state_31596__$1;
(statearr_31654_31709[(2)] = inst_31558);

(statearr_31654_31709[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (16))){
var inst_31522 = (state_31596[(23)]);
var inst_31524 = (function (){var all_files = inst_31522;
return ((function (all_files,inst_31522,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function (p1__31267_SHARP_){
return cljs.core.update_in.call(null,p1__31267_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31522,state_val_31597,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
})();
var inst_31525 = cljs.core.map.call(null,inst_31524,inst_31522);
var state_31596__$1 = state_31596;
var statearr_31655_31710 = state_31596__$1;
(statearr_31655_31710[(2)] = inst_31525);

(statearr_31655_31710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (30))){
var state_31596__$1 = state_31596;
var statearr_31656_31711 = state_31596__$1;
(statearr_31656_31711[(2)] = null);

(statearr_31656_31711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (10))){
var inst_31496 = (state_31596[(26)]);
var inst_31498 = cljs.core.chunked_seq_QMARK_.call(null,inst_31496);
var state_31596__$1 = state_31596;
if(inst_31498){
var statearr_31657_31712 = state_31596__$1;
(statearr_31657_31712[(1)] = (13));

} else {
var statearr_31658_31713 = state_31596__$1;
(statearr_31658_31713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (18))){
var inst_31528 = (state_31596[(12)]);
var inst_31529 = (state_31596[(16)]);
var inst_31528__$1 = (state_31596[(2)]);
var inst_31529__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31528__$1);
var inst_31530 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31529__$1);
var state_31596__$1 = (function (){var statearr_31659 = state_31596;
(statearr_31659[(12)] = inst_31528__$1);

(statearr_31659[(16)] = inst_31529__$1);

return statearr_31659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31596__$1,(19),inst_31530);
} else {
if((state_val_31597 === (37))){
var inst_31591 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31660_31714 = state_31596__$1;
(statearr_31660_31714[(2)] = inst_31591);

(statearr_31660_31714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (8))){
var inst_31496 = (state_31596[(26)]);
var inst_31483 = (state_31596[(10)]);
var inst_31496__$1 = cljs.core.seq.call(null,inst_31483);
var state_31596__$1 = (function (){var statearr_31661 = state_31596;
(statearr_31661[(26)] = inst_31496__$1);

return statearr_31661;
})();
if(inst_31496__$1){
var statearr_31662_31715 = state_31596__$1;
(statearr_31662_31715[(1)] = (10));

} else {
var statearr_31663_31716 = state_31596__$1;
(statearr_31663_31716[(1)] = (11));

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
});})(c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
;
return ((function (switch__15911__auto__,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_31667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31667[(0)] = state_machine__15912__auto__);

(statearr_31667[(1)] = (1));

return statearr_31667;
});
var state_machine__15912__auto____1 = (function (state_31596){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_31596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e31668){if((e31668 instanceof Object)){
var ex__15915__auto__ = e31668;
var statearr_31669_31717 = state_31596;
(statearr_31669_31717[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31718 = state_31596;
state_31596 = G__31718;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_31596){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_31596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
})();
var state__15969__auto__ = (function (){var statearr_31670 = f__15968__auto__.call(null);
(statearr_31670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto__);

return statearr_31670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto__,map__31471,map__31471__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31472,map__31472__$1,msg,files))
);

return c__15967__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31721,link){
var map__31723 = p__31721;
var map__31723__$1 = ((cljs.core.seq_QMARK_.call(null,map__31723))?cljs.core.apply.call(null,cljs.core.hash_map,map__31723):map__31723);
var file = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31723,map__31723__$1,file){
return (function (p1__31719_SHARP_,p2__31720_SHARP_){
if(cljs.core._EQ_.call(null,p1__31719_SHARP_,p2__31720_SHARP_)){
return p1__31719_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31723,map__31723__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31727){
var map__31728 = p__31727;
var map__31728__$1 = ((cljs.core.seq_QMARK_.call(null,map__31728))?cljs.core.apply.call(null,cljs.core.hash_map,map__31728):map__31728);
var current_url_length = cljs.core.get.call(null,map__31728__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31728__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31724_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31724_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31729){
var map__31731 = p__31729;
var map__31731__$1 = ((cljs.core.seq_QMARK_.call(null,map__31731))?cljs.core.apply.call(null,cljs.core.hash_map,map__31731):map__31731);
var f_data = map__31731__$1;
var request_url = cljs.core.get.call(null,map__31731__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31731__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__13323__auto__ = request_url;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31732,files_msg){
var map__31754 = p__31732;
var map__31754__$1 = ((cljs.core.seq_QMARK_.call(null,map__31754))?cljs.core.apply.call(null,cljs.core.hash_map,map__31754):map__31754);
var opts = map__31754__$1;
var on_cssload = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31755_31775 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31756_31776 = null;
var count__31757_31777 = (0);
var i__31758_31778 = (0);
while(true){
if((i__31758_31778 < count__31757_31777)){
var f_31779 = cljs.core._nth.call(null,chunk__31756_31776,i__31758_31778);
figwheel.client.file_reloading.reload_css_file.call(null,f_31779);

var G__31780 = seq__31755_31775;
var G__31781 = chunk__31756_31776;
var G__31782 = count__31757_31777;
var G__31783 = (i__31758_31778 + (1));
seq__31755_31775 = G__31780;
chunk__31756_31776 = G__31781;
count__31757_31777 = G__31782;
i__31758_31778 = G__31783;
continue;
} else {
var temp__4126__auto___31784 = cljs.core.seq.call(null,seq__31755_31775);
if(temp__4126__auto___31784){
var seq__31755_31785__$1 = temp__4126__auto___31784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31755_31785__$1)){
var c__14110__auto___31786 = cljs.core.chunk_first.call(null,seq__31755_31785__$1);
var G__31787 = cljs.core.chunk_rest.call(null,seq__31755_31785__$1);
var G__31788 = c__14110__auto___31786;
var G__31789 = cljs.core.count.call(null,c__14110__auto___31786);
var G__31790 = (0);
seq__31755_31775 = G__31787;
chunk__31756_31776 = G__31788;
count__31757_31777 = G__31789;
i__31758_31778 = G__31790;
continue;
} else {
var f_31791 = cljs.core.first.call(null,seq__31755_31785__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31791);

var G__31792 = cljs.core.next.call(null,seq__31755_31785__$1);
var G__31793 = null;
var G__31794 = (0);
var G__31795 = (0);
seq__31755_31775 = G__31792;
chunk__31756_31776 = G__31793;
count__31757_31777 = G__31794;
i__31758_31778 = G__31795;
continue;
}
} else {
}
}
break;
}

var c__15967__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto__,map__31754,map__31754__$1,opts,on_cssload){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto__,map__31754,map__31754__$1,opts,on_cssload){
return (function (state_31765){
var state_val_31766 = (state_31765[(1)]);
if((state_val_31766 === (2))){
var inst_31761 = (state_31765[(2)]);
var inst_31762 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31763 = on_cssload.call(null,inst_31762);
var state_31765__$1 = (function (){var statearr_31767 = state_31765;
(statearr_31767[(7)] = inst_31761);

return statearr_31767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31765__$1,inst_31763);
} else {
if((state_val_31766 === (1))){
var inst_31759 = cljs.core.async.timeout.call(null,(100));
var state_31765__$1 = state_31765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31765__$1,(2),inst_31759);
} else {
return null;
}
}
});})(c__15967__auto__,map__31754,map__31754__$1,opts,on_cssload))
;
return ((function (switch__15911__auto__,c__15967__auto__,map__31754,map__31754__$1,opts,on_cssload){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_31771 = [null,null,null,null,null,null,null,null];
(statearr_31771[(0)] = state_machine__15912__auto__);

(statearr_31771[(1)] = (1));

return statearr_31771;
});
var state_machine__15912__auto____1 = (function (state_31765){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_31765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e31772){if((e31772 instanceof Object)){
var ex__15915__auto__ = e31772;
var statearr_31773_31796 = state_31765;
(statearr_31773_31796[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31797 = state_31765;
state_31765 = G__31797;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_31765){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_31765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto__,map__31754,map__31754__$1,opts,on_cssload))
})();
var state__15969__auto__ = (function (){var statearr_31774 = f__15968__auto__.call(null);
(statearr_31774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto__);

return statearr_31774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto__,map__31754,map__31754__$1,opts,on_cssload))
);

return c__15967__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map