// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30198__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30199__i = 0, G__30199__a = new Array(arguments.length -  0);
while (G__30199__i < G__30199__a.length) {G__30199__a[G__30199__i] = arguments[G__30199__i + 0]; ++G__30199__i;}
  args = new cljs.core.IndexedSeq(G__30199__a,0);
} 
return G__30198__delegate.call(this,args);};
G__30198.cljs$lang$maxFixedArity = 0;
G__30198.cljs$lang$applyTo = (function (arglist__30200){
var args = cljs.core.seq(arglist__30200);
return G__30198__delegate(args);
});
G__30198.cljs$core$IFn$_invoke$arity$variadic = G__30198__delegate;
return G__30198;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30201){
var map__30203 = p__30201;
var map__30203__$1 = ((cljs.core.seq_QMARK_.call(null,map__30203))?cljs.core.apply.call(null,cljs.core.hash_map,map__30203):map__30203);
var class$ = cljs.core.get.call(null,map__30203__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30203__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__13328__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__13316__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__13316__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__13316__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__15997__auto___30332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___30332,ch){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___30332,ch){
return (function (state_30306){
var state_val_30307 = (state_30306[(1)]);
if((state_val_30307 === (7))){
var inst_30302 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
var statearr_30308_30333 = state_30306__$1;
(statearr_30308_30333[(2)] = inst_30302);

(statearr_30308_30333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (1))){
var state_30306__$1 = state_30306;
var statearr_30309_30334 = state_30306__$1;
(statearr_30309_30334[(2)] = null);

(statearr_30309_30334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (4))){
var inst_30270 = (state_30306[(7)]);
var inst_30270__$1 = (state_30306[(2)]);
var state_30306__$1 = (function (){var statearr_30310 = state_30306;
(statearr_30310[(7)] = inst_30270__$1);

return statearr_30310;
})();
if(cljs.core.truth_(inst_30270__$1)){
var statearr_30311_30335 = state_30306__$1;
(statearr_30311_30335[(1)] = (5));

} else {
var statearr_30312_30336 = state_30306__$1;
(statearr_30312_30336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (13))){
var state_30306__$1 = state_30306;
var statearr_30313_30337 = state_30306__$1;
(statearr_30313_30337[(2)] = null);

(statearr_30313_30337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (6))){
var state_30306__$1 = state_30306;
var statearr_30314_30338 = state_30306__$1;
(statearr_30314_30338[(2)] = null);

(statearr_30314_30338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (3))){
var inst_30304 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30306__$1,inst_30304);
} else {
if((state_val_30307 === (12))){
var inst_30277 = (state_30306[(8)]);
var inst_30290 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30277);
var inst_30291 = cljs.core.first.call(null,inst_30290);
var inst_30292 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30291);
var inst_30293 = console.warn("Figwheel: Not loading code with warnings - ",inst_30292);
var state_30306__$1 = state_30306;
var statearr_30315_30339 = state_30306__$1;
(statearr_30315_30339[(2)] = inst_30293);

(statearr_30315_30339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (2))){
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30306__$1,(4),ch);
} else {
if((state_val_30307 === (11))){
var inst_30286 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
var statearr_30316_30340 = state_30306__$1;
(statearr_30316_30340[(2)] = inst_30286);

(statearr_30316_30340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (9))){
var inst_30276 = (state_30306[(9)]);
var inst_30288 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30276,opts);
var state_30306__$1 = state_30306;
if(inst_30288){
var statearr_30317_30341 = state_30306__$1;
(statearr_30317_30341[(1)] = (12));

} else {
var statearr_30318_30342 = state_30306__$1;
(statearr_30318_30342[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (5))){
var inst_30270 = (state_30306[(7)]);
var inst_30276 = (state_30306[(9)]);
var inst_30272 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30273 = (new cljs.core.PersistentArrayMap(null,2,inst_30272,null));
var inst_30274 = (new cljs.core.PersistentHashSet(null,inst_30273,null));
var inst_30275 = figwheel.client.focus_msgs.call(null,inst_30274,inst_30270);
var inst_30276__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30275);
var inst_30277 = cljs.core.first.call(null,inst_30275);
var inst_30278 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30276__$1,opts);
var state_30306__$1 = (function (){var statearr_30319 = state_30306;
(statearr_30319[(8)] = inst_30277);

(statearr_30319[(9)] = inst_30276__$1);

return statearr_30319;
})();
if(cljs.core.truth_(inst_30278)){
var statearr_30320_30343 = state_30306__$1;
(statearr_30320_30343[(1)] = (8));

} else {
var statearr_30321_30344 = state_30306__$1;
(statearr_30321_30344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (14))){
var inst_30296 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
var statearr_30322_30345 = state_30306__$1;
(statearr_30322_30345[(2)] = inst_30296);

(statearr_30322_30345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (10))){
var inst_30298 = (state_30306[(2)]);
var state_30306__$1 = (function (){var statearr_30323 = state_30306;
(statearr_30323[(10)] = inst_30298);

return statearr_30323;
})();
var statearr_30324_30346 = state_30306__$1;
(statearr_30324_30346[(2)] = null);

(statearr_30324_30346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (8))){
var inst_30277 = (state_30306[(8)]);
var inst_30280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30281 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30277);
var inst_30282 = cljs.core.async.timeout.call(null,(1000));
var inst_30283 = [inst_30281,inst_30282];
var inst_30284 = (new cljs.core.PersistentVector(null,2,(5),inst_30280,inst_30283,null));
var state_30306__$1 = state_30306;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30306__$1,(11),inst_30284);
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
});})(c__15997__auto___30332,ch))
;
return ((function (switch__15941__auto__,c__15997__auto___30332,ch){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_30328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30328[(0)] = state_machine__15942__auto__);

(statearr_30328[(1)] = (1));

return statearr_30328;
});
var state_machine__15942__auto____1 = (function (state_30306){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_30306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e30329){if((e30329 instanceof Object)){
var ex__15945__auto__ = e30329;
var statearr_30330_30347 = state_30306;
(statearr_30330_30347[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30348 = state_30306;
state_30306 = G__30348;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_30306){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_30306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___30332,ch))
})();
var state__15999__auto__ = (function (){var statearr_30331 = f__15998__auto__.call(null);
(statearr_30331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___30332);

return statearr_30331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___30332,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30349_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30349_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30358 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30351_SHARP_,p2__30350_SHARP_){
return [cljs.core.str(p2__30350_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30358){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30356 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30357 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30356,_STAR_print_newline_STAR_30357,base_path_30358){
return (function() { 
var G__30359__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30360__i = 0, G__30360__a = new Array(arguments.length -  0);
while (G__30360__i < G__30360__a.length) {G__30360__a[G__30360__i] = arguments[G__30360__i + 0]; ++G__30360__i;}
  args = new cljs.core.IndexedSeq(G__30360__a,0);
} 
return G__30359__delegate.call(this,args);};
G__30359.cljs$lang$maxFixedArity = 0;
G__30359.cljs$lang$applyTo = (function (arglist__30361){
var args = cljs.core.seq(arglist__30361);
return G__30359__delegate(args);
});
G__30359.cljs$core$IFn$_invoke$arity$variadic = G__30359__delegate;
return G__30359;
})()
;})(_STAR_print_fn_STAR_30356,_STAR_print_newline_STAR_30357,base_path_30358))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30357;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30356;
}}catch (e30355){if((e30355 instanceof Error)){
var e = e30355;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30358], null));
} else {
var e = e30355;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30358))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__30362){
var map__30367 = p__30362;
var map__30367__$1 = ((cljs.core.seq_QMARK_.call(null,map__30367))?cljs.core.apply.call(null,cljs.core.hash_map,map__30367):map__30367);
var opts = map__30367__$1;
var build_id = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30367,map__30367__$1,opts,build_id){
return (function (p__30368){
var vec__30369 = p__30368;
var map__30370 = cljs.core.nth.call(null,vec__30369,(0),null);
var map__30370__$1 = ((cljs.core.seq_QMARK_.call(null,map__30370))?cljs.core.apply.call(null,cljs.core.hash_map,map__30370):map__30370);
var msg = map__30370__$1;
var msg_name = cljs.core.get.call(null,map__30370__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30369,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30369,map__30370,map__30370__$1,msg,msg_name,_,map__30367,map__30367__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30369,map__30370,map__30370__$1,msg,msg_name,_,map__30367,map__30367__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30367,map__30367__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30374){
var vec__30375 = p__30374;
var map__30376 = cljs.core.nth.call(null,vec__30375,(0),null);
var map__30376__$1 = ((cljs.core.seq_QMARK_.call(null,map__30376))?cljs.core.apply.call(null,cljs.core.hash_map,map__30376):map__30376);
var msg = map__30376__$1;
var msg_name = cljs.core.get.call(null,map__30376__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30375,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30377){
var map__30385 = p__30377;
var map__30385__$1 = ((cljs.core.seq_QMARK_.call(null,map__30385))?cljs.core.apply.call(null,cljs.core.hash_map,map__30385):map__30385);
var on_compile_fail = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30385,map__30385__$1,on_compile_fail,on_compile_warning){
return (function (p__30386){
var vec__30387 = p__30386;
var map__30388 = cljs.core.nth.call(null,vec__30387,(0),null);
var map__30388__$1 = ((cljs.core.seq_QMARK_.call(null,map__30388))?cljs.core.apply.call(null,cljs.core.hash_map,map__30388):map__30388);
var msg = map__30388__$1;
var msg_name = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30387,(1));
var pred__30389 = cljs.core._EQ_;
var expr__30390 = msg_name;
if(cljs.core.truth_(pred__30389.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30390))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30389.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30390))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30385,map__30385__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__,msg_hist,msg_names,msg){
return (function (state_30567){
var state_val_30568 = (state_30567[(1)]);
if((state_val_30568 === (7))){
var inst_30516 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30567__$1 = state_30567;
if(inst_30516){
var statearr_30569_30606 = state_30567__$1;
(statearr_30569_30606[(1)] = (11));

} else {
var statearr_30570_30607 = state_30567__$1;
(statearr_30570_30607[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (20))){
var inst_30557 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30571_30608 = state_30567__$1;
(statearr_30571_30608[(2)] = inst_30557);

(statearr_30571_30608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (27))){
var inst_30548 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(30),inst_30548);
} else {
if((state_val_30568 === (1))){
var inst_30499 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30499)){
var statearr_30572_30609 = state_30567__$1;
(statearr_30572_30609[(1)] = (2));

} else {
var statearr_30573_30610 = state_30567__$1;
(statearr_30573_30610[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (24))){
var inst_30546 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30567__$1 = state_30567;
if(inst_30546){
var statearr_30574_30611 = state_30567__$1;
(statearr_30574_30611[(1)] = (27));

} else {
var statearr_30575_30612 = state_30567__$1;
(statearr_30575_30612[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (4))){
var inst_30565 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30567__$1,inst_30565);
} else {
if((state_val_30568 === (15))){
var inst_30526 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30527 = figwheel.client.heads_up.append_message.call(null,inst_30526);
var state_30567__$1 = state_30567;
var statearr_30576_30613 = state_30567__$1;
(statearr_30576_30613[(2)] = inst_30527);

(statearr_30576_30613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (21))){
var inst_30533 = (state_30567[(2)]);
var inst_30534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30535 = figwheel.client.heads_up.display_warning.call(null,inst_30534);
var state_30567__$1 = (function (){var statearr_30577 = state_30567;
(statearr_30577[(7)] = inst_30533);

return statearr_30577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(22),inst_30535);
} else {
if((state_val_30568 === (13))){
var inst_30561 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30578_30614 = state_30567__$1;
(statearr_30578_30614[(2)] = inst_30561);

(statearr_30578_30614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (22))){
var inst_30537 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30579_30615 = state_30567__$1;
(statearr_30579_30615[(2)] = inst_30537);

(statearr_30579_30615[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (29))){
var inst_30553 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30580_30616 = state_30567__$1;
(statearr_30580_30616[(2)] = inst_30553);

(statearr_30580_30616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (6))){
var inst_30507 = figwheel.client.heads_up.clear.call(null);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(9),inst_30507);
} else {
if((state_val_30568 === (28))){
var state_30567__$1 = state_30567;
var statearr_30581_30617 = state_30567__$1;
(statearr_30581_30617[(2)] = null);

(statearr_30581_30617[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (25))){
var inst_30555 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30582_30618 = state_30567__$1;
(statearr_30582_30618[(2)] = inst_30555);

(statearr_30582_30618[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (17))){
var inst_30559 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30583_30619 = state_30567__$1;
(statearr_30583_30619[(2)] = inst_30559);

(statearr_30583_30619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (3))){
var inst_30505 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30567__$1 = state_30567;
if(inst_30505){
var statearr_30584_30620 = state_30567__$1;
(statearr_30584_30620[(1)] = (6));

} else {
var statearr_30585_30621 = state_30567__$1;
(statearr_30585_30621[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (12))){
var inst_30524 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30567__$1 = state_30567;
if(inst_30524){
var statearr_30586_30622 = state_30567__$1;
(statearr_30586_30622[(1)] = (15));

} else {
var statearr_30587_30623 = state_30567__$1;
(statearr_30587_30623[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (2))){
var inst_30501 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(5),inst_30501);
} else {
if((state_val_30568 === (23))){
var inst_30541 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30542 = figwheel.client.heads_up.display_warning.call(null,inst_30541);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(26),inst_30542);
} else {
if((state_val_30568 === (19))){
var inst_30539 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30567__$1 = state_30567;
if(inst_30539){
var statearr_30588_30624 = state_30567__$1;
(statearr_30588_30624[(1)] = (23));

} else {
var statearr_30589_30625 = state_30567__$1;
(statearr_30589_30625[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (11))){
var inst_30518 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30519 = figwheel.client.format_messages.call(null,inst_30518);
var inst_30520 = figwheel.client.heads_up.display_error.call(null,inst_30519);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(14),inst_30520);
} else {
if((state_val_30568 === (9))){
var inst_30509 = (state_30567[(2)]);
var inst_30510 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30511 = figwheel.client.format_messages.call(null,inst_30510);
var inst_30512 = figwheel.client.heads_up.display_error.call(null,inst_30511);
var state_30567__$1 = (function (){var statearr_30590 = state_30567;
(statearr_30590[(8)] = inst_30509);

return statearr_30590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(10),inst_30512);
} else {
if((state_val_30568 === (5))){
var inst_30503 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30591_30626 = state_30567__$1;
(statearr_30591_30626[(2)] = inst_30503);

(statearr_30591_30626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (14))){
var inst_30522 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30592_30627 = state_30567__$1;
(statearr_30592_30627[(2)] = inst_30522);

(statearr_30592_30627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (26))){
var inst_30544 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30593_30628 = state_30567__$1;
(statearr_30593_30628[(2)] = inst_30544);

(statearr_30593_30628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (16))){
var inst_30529 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30567__$1 = state_30567;
if(inst_30529){
var statearr_30594_30629 = state_30567__$1;
(statearr_30594_30629[(1)] = (18));

} else {
var statearr_30595_30630 = state_30567__$1;
(statearr_30595_30630[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (30))){
var inst_30550 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30596_30631 = state_30567__$1;
(statearr_30596_30631[(2)] = inst_30550);

(statearr_30596_30631[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (10))){
var inst_30514 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30597_30632 = state_30567__$1;
(statearr_30597_30632[(2)] = inst_30514);

(statearr_30597_30632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (18))){
var inst_30531 = figwheel.client.heads_up.clear.call(null);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(21),inst_30531);
} else {
if((state_val_30568 === (8))){
var inst_30563 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30598_30633 = state_30567__$1;
(statearr_30598_30633[(2)] = inst_30563);

(statearr_30598_30633[(1)] = (4));


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
});})(c__15997__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15941__auto__,c__15997__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_30602 = [null,null,null,null,null,null,null,null,null];
(statearr_30602[(0)] = state_machine__15942__auto__);

(statearr_30602[(1)] = (1));

return statearr_30602;
});
var state_machine__15942__auto____1 = (function (state_30567){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_30567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e30603){if((e30603 instanceof Object)){
var ex__15945__auto__ = e30603;
var statearr_30604_30634 = state_30567;
(statearr_30604_30634[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30635 = state_30567;
state_30567 = G__30635;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_30567){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_30567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__,msg_hist,msg_names,msg))
})();
var state__15999__auto__ = (function (){var statearr_30605 = f__15998__auto__.call(null);
(statearr_30605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_30605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__,msg_hist,msg_names,msg))
);

return c__15997__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15997__auto___30698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___30698,ch){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___30698,ch){
return (function (state_30681){
var state_val_30682 = (state_30681[(1)]);
if((state_val_30682 === (8))){
var inst_30673 = (state_30681[(2)]);
var state_30681__$1 = (function (){var statearr_30683 = state_30681;
(statearr_30683[(7)] = inst_30673);

return statearr_30683;
})();
var statearr_30684_30699 = state_30681__$1;
(statearr_30684_30699[(2)] = null);

(statearr_30684_30699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (7))){
var inst_30677 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
var statearr_30685_30700 = state_30681__$1;
(statearr_30685_30700[(2)] = inst_30677);

(statearr_30685_30700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (6))){
var state_30681__$1 = state_30681;
var statearr_30686_30701 = state_30681__$1;
(statearr_30686_30701[(2)] = null);

(statearr_30686_30701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (5))){
var inst_30669 = (state_30681[(8)]);
var inst_30671 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30669);
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30681__$1,(8),inst_30671);
} else {
if((state_val_30682 === (4))){
var inst_30669 = (state_30681[(8)]);
var inst_30669__$1 = (state_30681[(2)]);
var state_30681__$1 = (function (){var statearr_30687 = state_30681;
(statearr_30687[(8)] = inst_30669__$1);

return statearr_30687;
})();
if(cljs.core.truth_(inst_30669__$1)){
var statearr_30688_30702 = state_30681__$1;
(statearr_30688_30702[(1)] = (5));

} else {
var statearr_30689_30703 = state_30681__$1;
(statearr_30689_30703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (3))){
var inst_30679 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30681__$1,inst_30679);
} else {
if((state_val_30682 === (2))){
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30681__$1,(4),ch);
} else {
if((state_val_30682 === (1))){
var state_30681__$1 = state_30681;
var statearr_30690_30704 = state_30681__$1;
(statearr_30690_30704[(2)] = null);

(statearr_30690_30704[(1)] = (2));


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
});})(c__15997__auto___30698,ch))
;
return ((function (switch__15941__auto__,c__15997__auto___30698,ch){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_30694 = [null,null,null,null,null,null,null,null,null];
(statearr_30694[(0)] = state_machine__15942__auto__);

(statearr_30694[(1)] = (1));

return statearr_30694;
});
var state_machine__15942__auto____1 = (function (state_30681){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_30681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e30695){if((e30695 instanceof Object)){
var ex__15945__auto__ = e30695;
var statearr_30696_30705 = state_30681;
(statearr_30696_30705[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30706 = state_30681;
state_30681 = G__30706;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_30681){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_30681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___30698,ch))
})();
var state__15999__auto__ = (function (){var statearr_30697 = f__15998__auto__.call(null);
(statearr_30697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___30698);

return statearr_30697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___30698,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__){
return (function (state_30727){
var state_val_30728 = (state_30727[(1)]);
if((state_val_30728 === (2))){
var inst_30724 = (state_30727[(2)]);
var inst_30725 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30727__$1 = (function (){var statearr_30729 = state_30727;
(statearr_30729[(7)] = inst_30724);

return statearr_30729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30727__$1,inst_30725);
} else {
if((state_val_30728 === (1))){
var inst_30722 = cljs.core.async.timeout.call(null,(3000));
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(2),inst_30722);
} else {
return null;
}
}
});})(c__15997__auto__))
;
return ((function (switch__15941__auto__,c__15997__auto__){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_30733 = [null,null,null,null,null,null,null,null];
(statearr_30733[(0)] = state_machine__15942__auto__);

(statearr_30733[(1)] = (1));

return statearr_30733;
});
var state_machine__15942__auto____1 = (function (state_30727){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_30727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e30734){if((e30734 instanceof Object)){
var ex__15945__auto__ = e30734;
var statearr_30735_30737 = state_30727;
(statearr_30735_30737[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30738 = state_30727;
state_30727 = G__30738;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_30727){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_30727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__))
})();
var state__15999__auto__ = (function (){var statearr_30736 = f__15998__auto__.call(null);
(statearr_30736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_30736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__))
);

return c__15997__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__13316__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__13316__auto__)){
return ("CustomEvent" in window);
} else {
return and__13316__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30742 = {"detail":url};
return obj30742;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30743){
var map__30749 = p__30743;
var map__30749__$1 = ((cljs.core.seq_QMARK_.call(null,map__30749))?cljs.core.apply.call(null,cljs.core.hash_map,map__30749):map__30749);
var ed = map__30749__$1;
var exception_data = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30750_30754 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30751_30755 = null;
var count__30752_30756 = (0);
var i__30753_30757 = (0);
while(true){
if((i__30753_30757 < count__30752_30756)){
var msg_30758 = cljs.core._nth.call(null,chunk__30751_30755,i__30753_30757);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30758);

var G__30759 = seq__30750_30754;
var G__30760 = chunk__30751_30755;
var G__30761 = count__30752_30756;
var G__30762 = (i__30753_30757 + (1));
seq__30750_30754 = G__30759;
chunk__30751_30755 = G__30760;
count__30752_30756 = G__30761;
i__30753_30757 = G__30762;
continue;
} else {
var temp__4126__auto___30763 = cljs.core.seq.call(null,seq__30750_30754);
if(temp__4126__auto___30763){
var seq__30750_30764__$1 = temp__4126__auto___30763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30750_30764__$1)){
var c__14115__auto___30765 = cljs.core.chunk_first.call(null,seq__30750_30764__$1);
var G__30766 = cljs.core.chunk_rest.call(null,seq__30750_30764__$1);
var G__30767 = c__14115__auto___30765;
var G__30768 = cljs.core.count.call(null,c__14115__auto___30765);
var G__30769 = (0);
seq__30750_30754 = G__30766;
chunk__30751_30755 = G__30767;
count__30752_30756 = G__30768;
i__30753_30757 = G__30769;
continue;
} else {
var msg_30770 = cljs.core.first.call(null,seq__30750_30764__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30770);

var G__30771 = cljs.core.next.call(null,seq__30750_30764__$1);
var G__30772 = null;
var G__30773 = (0);
var G__30774 = (0);
seq__30750_30754 = G__30771;
chunk__30751_30755 = G__30772;
count__30752_30756 = G__30773;
i__30753_30757 = G__30774;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30775){
var map__30777 = p__30775;
var map__30777__$1 = ((cljs.core.seq_QMARK_.call(null,map__30777))?cljs.core.apply.call(null,cljs.core.hash_map,map__30777):map__30777);
var w = map__30777__$1;
var message = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
if(cljs.core.truth_((function (){var and__13316__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__13316__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__13316__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30784 = cljs.core.seq.call(null,plugins);
var chunk__30785 = null;
var count__30786 = (0);
var i__30787 = (0);
while(true){
if((i__30787 < count__30786)){
var vec__30788 = cljs.core._nth.call(null,chunk__30785,i__30787);
var k = cljs.core.nth.call(null,vec__30788,(0),null);
var plugin = cljs.core.nth.call(null,vec__30788,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30790 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30784,chunk__30785,count__30786,i__30787,pl_30790,vec__30788,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30790.call(null,msg_hist);
});})(seq__30784,chunk__30785,count__30786,i__30787,pl_30790,vec__30788,k,plugin))
);
} else {
}

var G__30791 = seq__30784;
var G__30792 = chunk__30785;
var G__30793 = count__30786;
var G__30794 = (i__30787 + (1));
seq__30784 = G__30791;
chunk__30785 = G__30792;
count__30786 = G__30793;
i__30787 = G__30794;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30784);
if(temp__4126__auto__){
var seq__30784__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30784__$1)){
var c__14115__auto__ = cljs.core.chunk_first.call(null,seq__30784__$1);
var G__30795 = cljs.core.chunk_rest.call(null,seq__30784__$1);
var G__30796 = c__14115__auto__;
var G__30797 = cljs.core.count.call(null,c__14115__auto__);
var G__30798 = (0);
seq__30784 = G__30795;
chunk__30785 = G__30796;
count__30786 = G__30797;
i__30787 = G__30798;
continue;
} else {
var vec__30789 = cljs.core.first.call(null,seq__30784__$1);
var k = cljs.core.nth.call(null,vec__30789,(0),null);
var plugin = cljs.core.nth.call(null,vec__30789,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30799 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30784,chunk__30785,count__30786,i__30787,pl_30799,vec__30789,k,plugin,seq__30784__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30799.call(null,msg_hist);
});})(seq__30784,chunk__30785,count__30786,i__30787,pl_30799,vec__30789,k,plugin,seq__30784__$1,temp__4126__auto__))
);
} else {
}

var G__30800 = cljs.core.next.call(null,seq__30784__$1);
var G__30801 = null;
var G__30802 = (0);
var G__30803 = (0);
seq__30784 = G__30800;
chunk__30785 = G__30801;
count__30786 = G__30802;
i__30787 = G__30803;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__30804){
var map__30806 = p__30804;
var map__30806__$1 = ((cljs.core.seq_QMARK_.call(null,map__30806))?cljs.core.apply.call(null,cljs.core.hash_map,map__30806):map__30806);
var opts = map__30806__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30804 = null;
if (arguments.length > 0) {
var G__30807__i = 0, G__30807__a = new Array(arguments.length -  0);
while (G__30807__i < G__30807__a.length) {G__30807__a[G__30807__i] = arguments[G__30807__i + 0]; ++G__30807__i;}
  p__30804 = new cljs.core.IndexedSeq(G__30807__a,0);
} 
return watch_and_reload__delegate.call(this,p__30804);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30808){
var p__30804 = cljs.core.seq(arglist__30808);
return watch_and_reload__delegate(p__30804);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map