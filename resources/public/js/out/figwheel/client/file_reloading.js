// Compiled by ClojureScript 0.0-2760 {:elide-asserts false}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__30460){
var map__30462 = p__30460;
var map__30462__$1 = ((cljs.core.seq_QMARK_.call(null,map__30462))?cljs.core.apply.call(null,cljs.core.hash_map,map__30462):map__30462);
var websocket_url = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__30463,callback){
var map__30465 = p__30463;
var map__30465__$1 = ((cljs.core.seq_QMARK_.call(null,map__30465))?cljs.core.apply.call(null,cljs.core.hash_map,map__30465):map__30465);
var msg = map__30465__$1;
var meta_data = cljs.core.get.call(null,map__30465__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__30465__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__30465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30465__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__13164__auto__ = (function (){var or__13176__auto__ = dependency_file;
if(cljs.core.truth_(or__13176__auto__)){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (function (){var and__13164__auto__ = meta_data;
if(cljs.core.truth_(and__13164__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__13164__auto__;
}
})();
if(cljs.core.truth_(or__13176__auto____$1)){
return or__13176__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__13164__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__13176__auto__ = meta_data;
if(cljs.core.truth_(or__13176__auto__)){
return or__13176__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__13164__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__30465,map__30465__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__30465,map__30465__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
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
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__30466,p__30467){
var map__30470 = p__30466;
var map__30470__$1 = ((cljs.core.seq_QMARK_.call(null,map__30470))?cljs.core.apply.call(null,cljs.core.hash_map,map__30470):map__30470);
var opts = map__30470__$1;
var url_rewriter = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30471 = p__30467;
var map__30471__$1 = ((cljs.core.seq_QMARK_.call(null,map__30471))?cljs.core.apply.call(null,cljs.core.hash_map,map__30471):map__30471);
var d = map__30471__$1;
var file = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__30473,p__30474){
var map__30528 = p__30473;
var map__30528__$1 = ((cljs.core.seq_QMARK_.call(null,map__30528))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528):map__30528);
var opts = map__30528__$1;
var on_jsload = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30529 = p__30474;
var map__30529__$1 = ((cljs.core.seq_QMARK_.call(null,map__30529))?cljs.core.apply.call(null,cljs.core.hash_map,map__30529):map__30529);
var msg = map__30529__$1;
var files = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files){
return (function (state_30559){
var state_val_30560 = (state_30559[(1)]);
if((state_val_30560 === (8))){
var inst_30557 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30559__$1,inst_30557);
} else {
if((state_val_30560 === (7))){
var state_30559__$1 = state_30559;
var statearr_30561_30581 = state_30559__$1;
(statearr_30561_30581[(2)] = null);

(statearr_30561_30581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (6))){
var inst_30537 = (state_30559[(7)]);
var inst_30551 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_30552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30537);
var inst_30553 = cljs.core.pr_str.call(null,inst_30552);
var inst_30554 = console.log("not required:",inst_30553);
var state_30559__$1 = (function (){var statearr_30562 = state_30559;
(statearr_30562[(8)] = inst_30551);

return statearr_30562;
})();
var statearr_30563_30582 = state_30559__$1;
(statearr_30563_30582[(2)] = inst_30554);

(statearr_30563_30582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (5))){
var inst_30537 = (state_30559[(7)]);
var inst_30548 = (state_30559[(2)]);
var inst_30549 = cljs.core.not_empty.call(null,inst_30537);
var state_30559__$1 = (function (){var statearr_30564 = state_30559;
(statearr_30564[(9)] = inst_30548);

return statearr_30564;
})();
if(cljs.core.truth_(inst_30549)){
var statearr_30565_30583 = state_30559__$1;
(statearr_30565_30583[(1)] = (6));

} else {
var statearr_30566_30584 = state_30559__$1;
(statearr_30566_30584[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (4))){
var state_30559__$1 = state_30559;
var statearr_30567_30585 = state_30559__$1;
(statearr_30567_30585[(2)] = null);

(statearr_30567_30585[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (3))){
var inst_30535 = (state_30559[(10)]);
var inst_30537 = (state_30559[(7)]);
var inst_30534 = (state_30559[(11)]);
var inst_30531 = (state_30559[(12)]);
var inst_30540 = console.debug("Figwheel: loaded these files");
var inst_30541 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30535);
var inst_30542 = cljs.core.pr_str.call(null,inst_30541);
var inst_30543 = console.log(inst_30542);
var inst_30544 = (function (){var files_not_loaded = inst_30537;
var res = inst_30535;
var res_SINGLEQUOTE_ = inst_30534;
var files_SINGLEQUOTE_ = inst_30531;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_30535,inst_30537,inst_30534,inst_30531,inst_30540,inst_30541,inst_30542,inst_30543,state_val_30560,c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_30535,inst_30537,inst_30534,inst_30531,inst_30540,inst_30541,inst_30542,inst_30543,state_val_30560,c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files))
})();
var inst_30545 = setTimeout(inst_30544,(10));
var state_30559__$1 = (function (){var statearr_30568 = state_30559;
(statearr_30568[(13)] = inst_30540);

(statearr_30568[(14)] = inst_30543);

return statearr_30568;
})();
var statearr_30569_30586 = state_30559__$1;
(statearr_30569_30586[(2)] = inst_30545);

(statearr_30569_30586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (2))){
var inst_30535 = (state_30559[(10)]);
var inst_30534 = (state_30559[(11)]);
var inst_30531 = (state_30559[(12)]);
var inst_30534__$1 = (state_30559[(2)]);
var inst_30535__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30534__$1);
var inst_30536 = (function (){var res = inst_30535__$1;
var res_SINGLEQUOTE_ = inst_30534__$1;
var files_SINGLEQUOTE_ = inst_30531;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_30535,inst_30534,inst_30531,inst_30534__$1,inst_30535__$1,state_val_30560,c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files){
return (function (p1__30472_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30472_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_30535,inst_30534,inst_30531,inst_30534__$1,inst_30535__$1,state_val_30560,c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files))
})();
var inst_30537 = cljs.core.filter.call(null,inst_30536,inst_30534__$1);
var inst_30538 = cljs.core.not_empty.call(null,inst_30535__$1);
var state_30559__$1 = (function (){var statearr_30570 = state_30559;
(statearr_30570[(10)] = inst_30535__$1);

(statearr_30570[(7)] = inst_30537);

(statearr_30570[(11)] = inst_30534__$1);

return statearr_30570;
})();
if(cljs.core.truth_(inst_30538)){
var statearr_30571_30587 = state_30559__$1;
(statearr_30571_30587[(1)] = (3));

} else {
var statearr_30572_30588 = state_30559__$1;
(statearr_30572_30588[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (1))){
var inst_30531 = (state_30559[(12)]);
var inst_30530 = before_jsload.call(null,files);
var inst_30531__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_30532 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30531__$1);
var state_30559__$1 = (function (){var statearr_30573 = state_30559;
(statearr_30573[(15)] = inst_30530);

(statearr_30573[(12)] = inst_30531__$1);

return statearr_30573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30559__$1,(2),inst_30532);
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
});})(c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files))
;
return ((function (switch__15763__auto__,c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_30577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30577[(0)] = state_machine__15764__auto__);

(statearr_30577[(1)] = (1));

return statearr_30577;
});
var state_machine__15764__auto____1 = (function (state_30559){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_30559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e30578){if((e30578 instanceof Object)){
var ex__15767__auto__ = e30578;
var statearr_30579_30589 = state_30559;
(statearr_30579_30589[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30590 = state_30559;
state_30559 = G__30590;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_30559){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_30559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files))
})();
var state__15821__auto__ = (function (){var statearr_30580 = f__15820__auto__.call(null);
(statearr_30580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_30580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__,map__30528,map__30528__$1,opts,on_jsload,before_jsload,map__30529,map__30529__$1,msg,files))
);

return c__15819__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__30591,link_href){
var map__30593 = p__30591;
var map__30593__$1 = ((cljs.core.seq_QMARK_.call(null,map__30593))?cljs.core.apply.call(null,cljs.core.hash_map,map__30593):map__30593);
var request_url = cljs.core.get.call(null,map__30593__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30593__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
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

var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__,parent){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__,parent){
return (function (state_30614){
var state_val_30615 = (state_30614[(1)]);
if((state_val_30615 === (2))){
var inst_30611 = (state_30614[(2)]);
var inst_30612 = parent.removeChild(orig_link);
var state_30614__$1 = (function (){var statearr_30616 = state_30614;
(statearr_30616[(7)] = inst_30611);

return statearr_30616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30614__$1,inst_30612);
} else {
if((state_val_30615 === (1))){
var inst_30609 = cljs.core.async.timeout.call(null,(200));
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30614__$1,(2),inst_30609);
} else {
return null;
}
}
});})(c__15819__auto__,parent))
;
return ((function (switch__15763__auto__,c__15819__auto__,parent){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_30620 = [null,null,null,null,null,null,null,null];
(statearr_30620[(0)] = state_machine__15764__auto__);

(statearr_30620[(1)] = (1));

return statearr_30620;
});
var state_machine__15764__auto____1 = (function (state_30614){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_30614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e30621){if((e30621 instanceof Object)){
var ex__15767__auto__ = e30621;
var statearr_30622_30624 = state_30614;
(statearr_30622_30624[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30625 = state_30614;
state_30614 = G__30625;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_30614){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_30614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__,parent))
})();
var state__15821__auto__ = (function (){var statearr_30623 = f__15820__auto__.call(null);
(statearr_30623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_30623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__,parent))
);

return c__15819__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__30626){
var map__30628 = p__30626;
var map__30628__$1 = ((cljs.core.seq_QMARK_.call(null,map__30628))?cljs.core.apply.call(null,cljs.core.hash_map,map__30628):map__30628);
var f_data = map__30628__$1;
var request_url = cljs.core.get.call(null,map__30628__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30628__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__30629,files_msg){
var map__30651 = p__30629;
var map__30651__$1 = ((cljs.core.seq_QMARK_.call(null,map__30651))?cljs.core.apply.call(null,cljs.core.hash_map,map__30651):map__30651);
var opts = map__30651__$1;
var on_cssload = cljs.core.get.call(null,map__30651__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__30652_30672 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30653_30673 = null;
var count__30654_30674 = (0);
var i__30655_30675 = (0);
while(true){
if((i__30655_30675 < count__30654_30674)){
var f_30676 = cljs.core._nth.call(null,chunk__30653_30673,i__30655_30675);
figwheel.client.file_reloading.reload_css_file.call(null,f_30676);

var G__30677 = seq__30652_30672;
var G__30678 = chunk__30653_30673;
var G__30679 = count__30654_30674;
var G__30680 = (i__30655_30675 + (1));
seq__30652_30672 = G__30677;
chunk__30653_30673 = G__30678;
count__30654_30674 = G__30679;
i__30655_30675 = G__30680;
continue;
} else {
var temp__4126__auto___30681 = cljs.core.seq.call(null,seq__30652_30672);
if(temp__4126__auto___30681){
var seq__30652_30682__$1 = temp__4126__auto___30681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30652_30682__$1)){
var c__13963__auto___30683 = cljs.core.chunk_first.call(null,seq__30652_30682__$1);
var G__30684 = cljs.core.chunk_rest.call(null,seq__30652_30682__$1);
var G__30685 = c__13963__auto___30683;
var G__30686 = cljs.core.count.call(null,c__13963__auto___30683);
var G__30687 = (0);
seq__30652_30672 = G__30684;
chunk__30653_30673 = G__30685;
count__30654_30674 = G__30686;
i__30655_30675 = G__30687;
continue;
} else {
var f_30688 = cljs.core.first.call(null,seq__30652_30682__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30688);

var G__30689 = cljs.core.next.call(null,seq__30652_30682__$1);
var G__30690 = null;
var G__30691 = (0);
var G__30692 = (0);
seq__30652_30672 = G__30689;
chunk__30653_30673 = G__30690;
count__30654_30674 = G__30691;
i__30655_30675 = G__30692;
continue;
}
} else {
}
}
break;
}

var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__,map__30651,map__30651__$1,opts,on_cssload){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__,map__30651,map__30651__$1,opts,on_cssload){
return (function (state_30662){
var state_val_30663 = (state_30662[(1)]);
if((state_val_30663 === (2))){
var inst_30658 = (state_30662[(2)]);
var inst_30659 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30660 = on_cssload.call(null,inst_30659);
var state_30662__$1 = (function (){var statearr_30664 = state_30662;
(statearr_30664[(7)] = inst_30658);

return statearr_30664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30662__$1,inst_30660);
} else {
if((state_val_30663 === (1))){
var inst_30656 = cljs.core.async.timeout.call(null,(100));
var state_30662__$1 = state_30662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30662__$1,(2),inst_30656);
} else {
return null;
}
}
});})(c__15819__auto__,map__30651,map__30651__$1,opts,on_cssload))
;
return ((function (switch__15763__auto__,c__15819__auto__,map__30651,map__30651__$1,opts,on_cssload){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_30668 = [null,null,null,null,null,null,null,null];
(statearr_30668[(0)] = state_machine__15764__auto__);

(statearr_30668[(1)] = (1));

return statearr_30668;
});
var state_machine__15764__auto____1 = (function (state_30662){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_30662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e30669){if((e30669 instanceof Object)){
var ex__15767__auto__ = e30669;
var statearr_30670_30693 = state_30662;
(statearr_30670_30693[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30694 = state_30662;
state_30662 = G__30694;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_30662){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_30662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__,map__30651,map__30651__$1,opts,on_cssload))
})();
var state__15821__auto__ = (function (){var statearr_30671 = f__15820__auto__.call(null);
(statearr_30671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_30671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__,map__30651,map__30651__$1,opts,on_cssload))
);

return c__15819__auto__;
});

//# sourceMappingURL=file_reloading.js.map