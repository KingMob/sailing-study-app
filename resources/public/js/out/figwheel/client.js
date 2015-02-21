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
var G__30199__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30200__i = 0, G__30200__a = new Array(arguments.length -  0);
while (G__30200__i < G__30200__a.length) {G__30200__a[G__30200__i] = arguments[G__30200__i + 0]; ++G__30200__i;}
  args = new cljs.core.IndexedSeq(G__30200__a,0);
} 
return G__30199__delegate.call(this,args);};
G__30199.cljs$lang$maxFixedArity = 0;
G__30199.cljs$lang$applyTo = (function (arglist__30201){
var args = cljs.core.seq(arglist__30201);
return G__30199__delegate(args);
});
G__30199.cljs$core$IFn$_invoke$arity$variadic = G__30199__delegate;
return G__30199;
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
figwheel.client.error_msg_format = (function error_msg_format(p__30202){
var map__30204 = p__30202;
var map__30204__$1 = ((cljs.core.seq_QMARK_.call(null,map__30204))?cljs.core.apply.call(null,cljs.core.hash_map,map__30204):map__30204);
var class$ = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__15996__auto___30333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___30333,ch){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___30333,ch){
return (function (state_30307){
var state_val_30308 = (state_30307[(1)]);
if((state_val_30308 === (7))){
var inst_30303 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
var statearr_30309_30334 = state_30307__$1;
(statearr_30309_30334[(2)] = inst_30303);

(statearr_30309_30334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (1))){
var state_30307__$1 = state_30307;
var statearr_30310_30335 = state_30307__$1;
(statearr_30310_30335[(2)] = null);

(statearr_30310_30335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (4))){
var inst_30271 = (state_30307[(7)]);
var inst_30271__$1 = (state_30307[(2)]);
var state_30307__$1 = (function (){var statearr_30311 = state_30307;
(statearr_30311[(7)] = inst_30271__$1);

return statearr_30311;
})();
if(cljs.core.truth_(inst_30271__$1)){
var statearr_30312_30336 = state_30307__$1;
(statearr_30312_30336[(1)] = (5));

} else {
var statearr_30313_30337 = state_30307__$1;
(statearr_30313_30337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (13))){
var state_30307__$1 = state_30307;
var statearr_30314_30338 = state_30307__$1;
(statearr_30314_30338[(2)] = null);

(statearr_30314_30338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (6))){
var state_30307__$1 = state_30307;
var statearr_30315_30339 = state_30307__$1;
(statearr_30315_30339[(2)] = null);

(statearr_30315_30339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (3))){
var inst_30305 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30307__$1,inst_30305);
} else {
if((state_val_30308 === (12))){
var inst_30278 = (state_30307[(8)]);
var inst_30291 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30278);
var inst_30292 = cljs.core.first.call(null,inst_30291);
var inst_30293 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30292);
var inst_30294 = console.warn("Figwheel: Not loading code with warnings - ",inst_30293);
var state_30307__$1 = state_30307;
var statearr_30316_30340 = state_30307__$1;
(statearr_30316_30340[(2)] = inst_30294);

(statearr_30316_30340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (2))){
var state_30307__$1 = state_30307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30307__$1,(4),ch);
} else {
if((state_val_30308 === (11))){
var inst_30287 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
var statearr_30317_30341 = state_30307__$1;
(statearr_30317_30341[(2)] = inst_30287);

(statearr_30317_30341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (9))){
var inst_30277 = (state_30307[(9)]);
var inst_30289 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30277,opts);
var state_30307__$1 = state_30307;
if(inst_30289){
var statearr_30318_30342 = state_30307__$1;
(statearr_30318_30342[(1)] = (12));

} else {
var statearr_30319_30343 = state_30307__$1;
(statearr_30319_30343[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (5))){
var inst_30277 = (state_30307[(9)]);
var inst_30271 = (state_30307[(7)]);
var inst_30273 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30274 = (new cljs.core.PersistentArrayMap(null,2,inst_30273,null));
var inst_30275 = (new cljs.core.PersistentHashSet(null,inst_30274,null));
var inst_30276 = figwheel.client.focus_msgs.call(null,inst_30275,inst_30271);
var inst_30277__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30276);
var inst_30278 = cljs.core.first.call(null,inst_30276);
var inst_30279 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30277__$1,opts);
var state_30307__$1 = (function (){var statearr_30320 = state_30307;
(statearr_30320[(8)] = inst_30278);

(statearr_30320[(9)] = inst_30277__$1);

return statearr_30320;
})();
if(cljs.core.truth_(inst_30279)){
var statearr_30321_30344 = state_30307__$1;
(statearr_30321_30344[(1)] = (8));

} else {
var statearr_30322_30345 = state_30307__$1;
(statearr_30322_30345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (14))){
var inst_30297 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
var statearr_30323_30346 = state_30307__$1;
(statearr_30323_30346[(2)] = inst_30297);

(statearr_30323_30346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (10))){
var inst_30299 = (state_30307[(2)]);
var state_30307__$1 = (function (){var statearr_30324 = state_30307;
(statearr_30324[(10)] = inst_30299);

return statearr_30324;
})();
var statearr_30325_30347 = state_30307__$1;
(statearr_30325_30347[(2)] = null);

(statearr_30325_30347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (8))){
var inst_30278 = (state_30307[(8)]);
var inst_30281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30282 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30278);
var inst_30283 = cljs.core.async.timeout.call(null,(1000));
var inst_30284 = [inst_30282,inst_30283];
var inst_30285 = (new cljs.core.PersistentVector(null,2,(5),inst_30281,inst_30284,null));
var state_30307__$1 = state_30307;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30307__$1,(11),inst_30285);
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
});})(c__15996__auto___30333,ch))
;
return ((function (switch__15940__auto__,c__15996__auto___30333,ch){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_30329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30329[(0)] = state_machine__15941__auto__);

(statearr_30329[(1)] = (1));

return statearr_30329;
});
var state_machine__15941__auto____1 = (function (state_30307){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_30307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e30330){if((e30330 instanceof Object)){
var ex__15944__auto__ = e30330;
var statearr_30331_30348 = state_30307;
(statearr_30331_30348[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30349 = state_30307;
state_30307 = G__30349;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_30307){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_30307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___30333,ch))
})();
var state__15998__auto__ = (function (){var statearr_30332 = f__15997__auto__.call(null);
(statearr_30332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___30333);

return statearr_30332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___30333,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30350_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30350_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30359 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30352_SHARP_,p2__30351_SHARP_){
return [cljs.core.str(p2__30351_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30359){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30357 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30358 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30357,_STAR_print_newline_STAR_30358,base_path_30359){
return (function() { 
var G__30360__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30361__i = 0, G__30361__a = new Array(arguments.length -  0);
while (G__30361__i < G__30361__a.length) {G__30361__a[G__30361__i] = arguments[G__30361__i + 0]; ++G__30361__i;}
  args = new cljs.core.IndexedSeq(G__30361__a,0);
} 
return G__30360__delegate.call(this,args);};
G__30360.cljs$lang$maxFixedArity = 0;
G__30360.cljs$lang$applyTo = (function (arglist__30362){
var args = cljs.core.seq(arglist__30362);
return G__30360__delegate(args);
});
G__30360.cljs$core$IFn$_invoke$arity$variadic = G__30360__delegate;
return G__30360;
})()
;})(_STAR_print_fn_STAR_30357,_STAR_print_newline_STAR_30358,base_path_30359))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30358;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30357;
}}catch (e30356){if((e30356 instanceof Error)){
var e = e30356;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30359], null));
} else {
var e = e30356;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30359))
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
figwheel.client.repl_plugin = (function repl_plugin(p__30363){
var map__30368 = p__30363;
var map__30368__$1 = ((cljs.core.seq_QMARK_.call(null,map__30368))?cljs.core.apply.call(null,cljs.core.hash_map,map__30368):map__30368);
var opts = map__30368__$1;
var build_id = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30368,map__30368__$1,opts,build_id){
return (function (p__30369){
var vec__30370 = p__30369;
var map__30371 = cljs.core.nth.call(null,vec__30370,(0),null);
var map__30371__$1 = ((cljs.core.seq_QMARK_.call(null,map__30371))?cljs.core.apply.call(null,cljs.core.hash_map,map__30371):map__30371);
var msg = map__30371__$1;
var msg_name = cljs.core.get.call(null,map__30371__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30370,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30370,map__30371,map__30371__$1,msg,msg_name,_,map__30368,map__30368__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30370,map__30371,map__30371__$1,msg,msg_name,_,map__30368,map__30368__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30368,map__30368__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30375){
var vec__30376 = p__30375;
var map__30377 = cljs.core.nth.call(null,vec__30376,(0),null);
var map__30377__$1 = ((cljs.core.seq_QMARK_.call(null,map__30377))?cljs.core.apply.call(null,cljs.core.hash_map,map__30377):map__30377);
var msg = map__30377__$1;
var msg_name = cljs.core.get.call(null,map__30377__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30376,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30378){
var map__30386 = p__30378;
var map__30386__$1 = ((cljs.core.seq_QMARK_.call(null,map__30386))?cljs.core.apply.call(null,cljs.core.hash_map,map__30386):map__30386);
var on_compile_fail = cljs.core.get.call(null,map__30386__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30386__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30386,map__30386__$1,on_compile_fail,on_compile_warning){
return (function (p__30387){
var vec__30388 = p__30387;
var map__30389 = cljs.core.nth.call(null,vec__30388,(0),null);
var map__30389__$1 = ((cljs.core.seq_QMARK_.call(null,map__30389))?cljs.core.apply.call(null,cljs.core.hash_map,map__30389):map__30389);
var msg = map__30389__$1;
var msg_name = cljs.core.get.call(null,map__30389__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30388,(1));
var pred__30390 = cljs.core._EQ_;
var expr__30391 = msg_name;
if(cljs.core.truth_(pred__30390.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30391))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30390.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30391))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30386,map__30386__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto__,msg_hist,msg_names,msg){
return (function (state_30568){
var state_val_30569 = (state_30568[(1)]);
if((state_val_30569 === (7))){
var inst_30517 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(inst_30517){
var statearr_30570_30607 = state_30568__$1;
(statearr_30570_30607[(1)] = (11));

} else {
var statearr_30571_30608 = state_30568__$1;
(statearr_30571_30608[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (20))){
var inst_30558 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30572_30609 = state_30568__$1;
(statearr_30572_30609[(2)] = inst_30558);

(statearr_30572_30609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (27))){
var inst_30549 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(30),inst_30549);
} else {
if((state_val_30569 === (1))){
var inst_30500 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30500)){
var statearr_30573_30610 = state_30568__$1;
(statearr_30573_30610[(1)] = (2));

} else {
var statearr_30574_30611 = state_30568__$1;
(statearr_30574_30611[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (24))){
var inst_30547 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(inst_30547){
var statearr_30575_30612 = state_30568__$1;
(statearr_30575_30612[(1)] = (27));

} else {
var statearr_30576_30613 = state_30568__$1;
(statearr_30576_30613[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (4))){
var inst_30566 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30568__$1,inst_30566);
} else {
if((state_val_30569 === (15))){
var inst_30527 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30528 = figwheel.client.heads_up.append_message.call(null,inst_30527);
var state_30568__$1 = state_30568;
var statearr_30577_30614 = state_30568__$1;
(statearr_30577_30614[(2)] = inst_30528);

(statearr_30577_30614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (21))){
var inst_30534 = (state_30568[(2)]);
var inst_30535 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30536 = figwheel.client.heads_up.display_warning.call(null,inst_30535);
var state_30568__$1 = (function (){var statearr_30578 = state_30568;
(statearr_30578[(7)] = inst_30534);

return statearr_30578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(22),inst_30536);
} else {
if((state_val_30569 === (13))){
var inst_30562 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30579_30615 = state_30568__$1;
(statearr_30579_30615[(2)] = inst_30562);

(statearr_30579_30615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (22))){
var inst_30538 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30580_30616 = state_30568__$1;
(statearr_30580_30616[(2)] = inst_30538);

(statearr_30580_30616[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (29))){
var inst_30554 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30581_30617 = state_30568__$1;
(statearr_30581_30617[(2)] = inst_30554);

(statearr_30581_30617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (6))){
var inst_30508 = figwheel.client.heads_up.clear.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(9),inst_30508);
} else {
if((state_val_30569 === (28))){
var state_30568__$1 = state_30568;
var statearr_30582_30618 = state_30568__$1;
(statearr_30582_30618[(2)] = null);

(statearr_30582_30618[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (25))){
var inst_30556 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30583_30619 = state_30568__$1;
(statearr_30583_30619[(2)] = inst_30556);

(statearr_30583_30619[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (17))){
var inst_30560 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30584_30620 = state_30568__$1;
(statearr_30584_30620[(2)] = inst_30560);

(statearr_30584_30620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (3))){
var inst_30506 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(inst_30506){
var statearr_30585_30621 = state_30568__$1;
(statearr_30585_30621[(1)] = (6));

} else {
var statearr_30586_30622 = state_30568__$1;
(statearr_30586_30622[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (12))){
var inst_30525 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(inst_30525){
var statearr_30587_30623 = state_30568__$1;
(statearr_30587_30623[(1)] = (15));

} else {
var statearr_30588_30624 = state_30568__$1;
(statearr_30588_30624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (2))){
var inst_30502 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(5),inst_30502);
} else {
if((state_val_30569 === (23))){
var inst_30542 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30543 = figwheel.client.heads_up.display_warning.call(null,inst_30542);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(26),inst_30543);
} else {
if((state_val_30569 === (19))){
var inst_30540 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(inst_30540){
var statearr_30589_30625 = state_30568__$1;
(statearr_30589_30625[(1)] = (23));

} else {
var statearr_30590_30626 = state_30568__$1;
(statearr_30590_30626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (11))){
var inst_30519 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30520 = figwheel.client.format_messages.call(null,inst_30519);
var inst_30521 = figwheel.client.heads_up.display_error.call(null,inst_30520);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(14),inst_30521);
} else {
if((state_val_30569 === (9))){
var inst_30510 = (state_30568[(2)]);
var inst_30511 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30512 = figwheel.client.format_messages.call(null,inst_30511);
var inst_30513 = figwheel.client.heads_up.display_error.call(null,inst_30512);
var state_30568__$1 = (function (){var statearr_30591 = state_30568;
(statearr_30591[(8)] = inst_30510);

return statearr_30591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(10),inst_30513);
} else {
if((state_val_30569 === (5))){
var inst_30504 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30592_30627 = state_30568__$1;
(statearr_30592_30627[(2)] = inst_30504);

(statearr_30592_30627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (14))){
var inst_30523 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30593_30628 = state_30568__$1;
(statearr_30593_30628[(2)] = inst_30523);

(statearr_30593_30628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (26))){
var inst_30545 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30594_30629 = state_30568__$1;
(statearr_30594_30629[(2)] = inst_30545);

(statearr_30594_30629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (16))){
var inst_30530 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30568__$1 = state_30568;
if(inst_30530){
var statearr_30595_30630 = state_30568__$1;
(statearr_30595_30630[(1)] = (18));

} else {
var statearr_30596_30631 = state_30568__$1;
(statearr_30596_30631[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (30))){
var inst_30551 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30597_30632 = state_30568__$1;
(statearr_30597_30632[(2)] = inst_30551);

(statearr_30597_30632[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (10))){
var inst_30515 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30598_30633 = state_30568__$1;
(statearr_30598_30633[(2)] = inst_30515);

(statearr_30598_30633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (18))){
var inst_30532 = figwheel.client.heads_up.clear.call(null);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(21),inst_30532);
} else {
if((state_val_30569 === (8))){
var inst_30564 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30599_30634 = state_30568__$1;
(statearr_30599_30634[(2)] = inst_30564);

(statearr_30599_30634[(1)] = (4));


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
});})(c__15996__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15940__auto__,c__15996__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_30603 = [null,null,null,null,null,null,null,null,null];
(statearr_30603[(0)] = state_machine__15941__auto__);

(statearr_30603[(1)] = (1));

return statearr_30603;
});
var state_machine__15941__auto____1 = (function (state_30568){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_30568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e30604){if((e30604 instanceof Object)){
var ex__15944__auto__ = e30604;
var statearr_30605_30635 = state_30568;
(statearr_30605_30635[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30636 = state_30568;
state_30568 = G__30636;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_30568){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_30568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto__,msg_hist,msg_names,msg))
})();
var state__15998__auto__ = (function (){var statearr_30606 = f__15997__auto__.call(null);
(statearr_30606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto__);

return statearr_30606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto__,msg_hist,msg_names,msg))
);

return c__15996__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15996__auto___30699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___30699,ch){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___30699,ch){
return (function (state_30682){
var state_val_30683 = (state_30682[(1)]);
if((state_val_30683 === (8))){
var inst_30674 = (state_30682[(2)]);
var state_30682__$1 = (function (){var statearr_30684 = state_30682;
(statearr_30684[(7)] = inst_30674);

return statearr_30684;
})();
var statearr_30685_30700 = state_30682__$1;
(statearr_30685_30700[(2)] = null);

(statearr_30685_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (7))){
var inst_30678 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30686_30701 = state_30682__$1;
(statearr_30686_30701[(2)] = inst_30678);

(statearr_30686_30701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (6))){
var state_30682__$1 = state_30682;
var statearr_30687_30702 = state_30682__$1;
(statearr_30687_30702[(2)] = null);

(statearr_30687_30702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (5))){
var inst_30670 = (state_30682[(8)]);
var inst_30672 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30670);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30682__$1,(8),inst_30672);
} else {
if((state_val_30683 === (4))){
var inst_30670 = (state_30682[(8)]);
var inst_30670__$1 = (state_30682[(2)]);
var state_30682__$1 = (function (){var statearr_30688 = state_30682;
(statearr_30688[(8)] = inst_30670__$1);

return statearr_30688;
})();
if(cljs.core.truth_(inst_30670__$1)){
var statearr_30689_30703 = state_30682__$1;
(statearr_30689_30703[(1)] = (5));

} else {
var statearr_30690_30704 = state_30682__$1;
(statearr_30690_30704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (3))){
var inst_30680 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30682__$1,inst_30680);
} else {
if((state_val_30683 === (2))){
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30682__$1,(4),ch);
} else {
if((state_val_30683 === (1))){
var state_30682__$1 = state_30682;
var statearr_30691_30705 = state_30682__$1;
(statearr_30691_30705[(2)] = null);

(statearr_30691_30705[(1)] = (2));


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
});})(c__15996__auto___30699,ch))
;
return ((function (switch__15940__auto__,c__15996__auto___30699,ch){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_30695 = [null,null,null,null,null,null,null,null,null];
(statearr_30695[(0)] = state_machine__15941__auto__);

(statearr_30695[(1)] = (1));

return statearr_30695;
});
var state_machine__15941__auto____1 = (function (state_30682){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_30682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e30696){if((e30696 instanceof Object)){
var ex__15944__auto__ = e30696;
var statearr_30697_30706 = state_30682;
(statearr_30697_30706[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30707 = state_30682;
state_30682 = G__30707;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_30682){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_30682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___30699,ch))
})();
var state__15998__auto__ = (function (){var statearr_30698 = f__15997__auto__.call(null);
(statearr_30698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___30699);

return statearr_30698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___30699,ch))
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
var c__15996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto__){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto__){
return (function (state_30728){
var state_val_30729 = (state_30728[(1)]);
if((state_val_30729 === (2))){
var inst_30725 = (state_30728[(2)]);
var inst_30726 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30728__$1 = (function (){var statearr_30730 = state_30728;
(statearr_30730[(7)] = inst_30725);

return statearr_30730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30728__$1,inst_30726);
} else {
if((state_val_30729 === (1))){
var inst_30723 = cljs.core.async.timeout.call(null,(3000));
var state_30728__$1 = state_30728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30728__$1,(2),inst_30723);
} else {
return null;
}
}
});})(c__15996__auto__))
;
return ((function (switch__15940__auto__,c__15996__auto__){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_30734 = [null,null,null,null,null,null,null,null];
(statearr_30734[(0)] = state_machine__15941__auto__);

(statearr_30734[(1)] = (1));

return statearr_30734;
});
var state_machine__15941__auto____1 = (function (state_30728){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_30728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e30735){if((e30735 instanceof Object)){
var ex__15944__auto__ = e30735;
var statearr_30736_30738 = state_30728;
(statearr_30736_30738[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30739 = state_30728;
state_30728 = G__30739;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_30728){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_30728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto__))
})();
var state__15998__auto__ = (function (){var statearr_30737 = f__15997__auto__.call(null);
(statearr_30737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto__);

return statearr_30737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto__))
);

return c__15996__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30743 = {"detail":url};
return obj30743;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30744){
var map__30750 = p__30744;
var map__30750__$1 = ((cljs.core.seq_QMARK_.call(null,map__30750))?cljs.core.apply.call(null,cljs.core.hash_map,map__30750):map__30750);
var ed = map__30750__$1;
var exception_data = cljs.core.get.call(null,map__30750__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30750__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30751_30755 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30752_30756 = null;
var count__30753_30757 = (0);
var i__30754_30758 = (0);
while(true){
if((i__30754_30758 < count__30753_30757)){
var msg_30759 = cljs.core._nth.call(null,chunk__30752_30756,i__30754_30758);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30759);

var G__30760 = seq__30751_30755;
var G__30761 = chunk__30752_30756;
var G__30762 = count__30753_30757;
var G__30763 = (i__30754_30758 + (1));
seq__30751_30755 = G__30760;
chunk__30752_30756 = G__30761;
count__30753_30757 = G__30762;
i__30754_30758 = G__30763;
continue;
} else {
var temp__4126__auto___30764 = cljs.core.seq.call(null,seq__30751_30755);
if(temp__4126__auto___30764){
var seq__30751_30765__$1 = temp__4126__auto___30764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30751_30765__$1)){
var c__14115__auto___30766 = cljs.core.chunk_first.call(null,seq__30751_30765__$1);
var G__30767 = cljs.core.chunk_rest.call(null,seq__30751_30765__$1);
var G__30768 = c__14115__auto___30766;
var G__30769 = cljs.core.count.call(null,c__14115__auto___30766);
var G__30770 = (0);
seq__30751_30755 = G__30767;
chunk__30752_30756 = G__30768;
count__30753_30757 = G__30769;
i__30754_30758 = G__30770;
continue;
} else {
var msg_30771 = cljs.core.first.call(null,seq__30751_30765__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30771);

var G__30772 = cljs.core.next.call(null,seq__30751_30765__$1);
var G__30773 = null;
var G__30774 = (0);
var G__30775 = (0);
seq__30751_30755 = G__30772;
chunk__30752_30756 = G__30773;
count__30753_30757 = G__30774;
i__30754_30758 = G__30775;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30776){
var map__30778 = p__30776;
var map__30778__$1 = ((cljs.core.seq_QMARK_.call(null,map__30778))?cljs.core.apply.call(null,cljs.core.hash_map,map__30778):map__30778);
var w = map__30778__$1;
var message = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30785 = cljs.core.seq.call(null,plugins);
var chunk__30786 = null;
var count__30787 = (0);
var i__30788 = (0);
while(true){
if((i__30788 < count__30787)){
var vec__30789 = cljs.core._nth.call(null,chunk__30786,i__30788);
var k = cljs.core.nth.call(null,vec__30789,(0),null);
var plugin = cljs.core.nth.call(null,vec__30789,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30791 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30785,chunk__30786,count__30787,i__30788,pl_30791,vec__30789,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30791.call(null,msg_hist);
});})(seq__30785,chunk__30786,count__30787,i__30788,pl_30791,vec__30789,k,plugin))
);
} else {
}

var G__30792 = seq__30785;
var G__30793 = chunk__30786;
var G__30794 = count__30787;
var G__30795 = (i__30788 + (1));
seq__30785 = G__30792;
chunk__30786 = G__30793;
count__30787 = G__30794;
i__30788 = G__30795;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30785);
if(temp__4126__auto__){
var seq__30785__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30785__$1)){
var c__14115__auto__ = cljs.core.chunk_first.call(null,seq__30785__$1);
var G__30796 = cljs.core.chunk_rest.call(null,seq__30785__$1);
var G__30797 = c__14115__auto__;
var G__30798 = cljs.core.count.call(null,c__14115__auto__);
var G__30799 = (0);
seq__30785 = G__30796;
chunk__30786 = G__30797;
count__30787 = G__30798;
i__30788 = G__30799;
continue;
} else {
var vec__30790 = cljs.core.first.call(null,seq__30785__$1);
var k = cljs.core.nth.call(null,vec__30790,(0),null);
var plugin = cljs.core.nth.call(null,vec__30790,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30800 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30785,chunk__30786,count__30787,i__30788,pl_30800,vec__30790,k,plugin,seq__30785__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30800.call(null,msg_hist);
});})(seq__30785,chunk__30786,count__30787,i__30788,pl_30800,vec__30790,k,plugin,seq__30785__$1,temp__4126__auto__))
);
} else {
}

var G__30801 = cljs.core.next.call(null,seq__30785__$1);
var G__30802 = null;
var G__30803 = (0);
var G__30804 = (0);
seq__30785 = G__30801;
chunk__30786 = G__30802;
count__30787 = G__30803;
i__30788 = G__30804;
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
var watch_and_reload__delegate = function (p__30805){
var map__30807 = p__30805;
var map__30807__$1 = ((cljs.core.seq_QMARK_.call(null,map__30807))?cljs.core.apply.call(null,cljs.core.hash_map,map__30807):map__30807);
var opts = map__30807__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30805 = null;
if (arguments.length > 0) {
var G__30808__i = 0, G__30808__a = new Array(arguments.length -  0);
while (G__30808__i < G__30808__a.length) {G__30808__a[G__30808__i] = arguments[G__30808__i + 0]; ++G__30808__i;}
  p__30805 = new cljs.core.IndexedSeq(G__30808__a,0);
} 
return watch_and_reload__delegate.call(this,p__30805);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30809){
var p__30805 = cljs.core.seq(arglist__30809);
return watch_and_reload__delegate(p__30805);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map