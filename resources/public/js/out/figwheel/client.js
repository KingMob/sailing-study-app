// Compiled by ClojureScript 0.0-2913 {:elide-asserts false}
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
var G__30338__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30339__i = 0, G__30339__a = new Array(arguments.length -  0);
while (G__30339__i < G__30339__a.length) {G__30339__a[G__30339__i] = arguments[G__30339__i + 0]; ++G__30339__i;}
  args = new cljs.core.IndexedSeq(G__30339__a,0);
} 
return G__30338__delegate.call(this,args);};
G__30338.cljs$lang$maxFixedArity = 0;
G__30338.cljs$lang$applyTo = (function (arglist__30340){
var args = cljs.core.seq(arglist__30340);
return G__30338__delegate(args);
});
G__30338.cljs$core$IFn$_invoke$arity$variadic = G__30338__delegate;
return G__30338;
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
figwheel.client.error_msg_format = (function error_msg_format(p__30341){
var map__30343 = p__30341;
var map__30343__$1 = ((cljs.core.seq_QMARK_.call(null,map__30343))?cljs.core.apply.call(null,cljs.core.hash_map,map__30343):map__30343);
var class$ = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__13465__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__13453__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__13453__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__13453__auto__;
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
var c__16133__auto___30472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___30472,ch){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___30472,ch){
return (function (state_30446){
var state_val_30447 = (state_30446[(1)]);
if((state_val_30447 === (7))){
var inst_30442 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
var statearr_30448_30473 = state_30446__$1;
(statearr_30448_30473[(2)] = inst_30442);

(statearr_30448_30473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (1))){
var state_30446__$1 = state_30446;
var statearr_30449_30474 = state_30446__$1;
(statearr_30449_30474[(2)] = null);

(statearr_30449_30474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (4))){
var inst_30410 = (state_30446[(7)]);
var inst_30410__$1 = (state_30446[(2)]);
var state_30446__$1 = (function (){var statearr_30450 = state_30446;
(statearr_30450[(7)] = inst_30410__$1);

return statearr_30450;
})();
if(cljs.core.truth_(inst_30410__$1)){
var statearr_30451_30475 = state_30446__$1;
(statearr_30451_30475[(1)] = (5));

} else {
var statearr_30452_30476 = state_30446__$1;
(statearr_30452_30476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (13))){
var state_30446__$1 = state_30446;
var statearr_30453_30477 = state_30446__$1;
(statearr_30453_30477[(2)] = null);

(statearr_30453_30477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (6))){
var state_30446__$1 = state_30446;
var statearr_30454_30478 = state_30446__$1;
(statearr_30454_30478[(2)] = null);

(statearr_30454_30478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (3))){
var inst_30444 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30446__$1,inst_30444);
} else {
if((state_val_30447 === (12))){
var inst_30417 = (state_30446[(8)]);
var inst_30430 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30417);
var inst_30431 = cljs.core.first.call(null,inst_30430);
var inst_30432 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30431);
var inst_30433 = console.warn("Figwheel: Not loading code with warnings - ",inst_30432);
var state_30446__$1 = state_30446;
var statearr_30455_30479 = state_30446__$1;
(statearr_30455_30479[(2)] = inst_30433);

(statearr_30455_30479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (2))){
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30446__$1,(4),ch);
} else {
if((state_val_30447 === (11))){
var inst_30426 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
var statearr_30456_30480 = state_30446__$1;
(statearr_30456_30480[(2)] = inst_30426);

(statearr_30456_30480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (9))){
var inst_30416 = (state_30446[(9)]);
var inst_30428 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30416,opts);
var state_30446__$1 = state_30446;
if(inst_30428){
var statearr_30457_30481 = state_30446__$1;
(statearr_30457_30481[(1)] = (12));

} else {
var statearr_30458_30482 = state_30446__$1;
(statearr_30458_30482[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (5))){
var inst_30416 = (state_30446[(9)]);
var inst_30410 = (state_30446[(7)]);
var inst_30412 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30413 = (new cljs.core.PersistentArrayMap(null,2,inst_30412,null));
var inst_30414 = (new cljs.core.PersistentHashSet(null,inst_30413,null));
var inst_30415 = figwheel.client.focus_msgs.call(null,inst_30414,inst_30410);
var inst_30416__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30415);
var inst_30417 = cljs.core.first.call(null,inst_30415);
var inst_30418 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30416__$1,opts);
var state_30446__$1 = (function (){var statearr_30459 = state_30446;
(statearr_30459[(9)] = inst_30416__$1);

(statearr_30459[(8)] = inst_30417);

return statearr_30459;
})();
if(cljs.core.truth_(inst_30418)){
var statearr_30460_30483 = state_30446__$1;
(statearr_30460_30483[(1)] = (8));

} else {
var statearr_30461_30484 = state_30446__$1;
(statearr_30461_30484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (14))){
var inst_30436 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
var statearr_30462_30485 = state_30446__$1;
(statearr_30462_30485[(2)] = inst_30436);

(statearr_30462_30485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (10))){
var inst_30438 = (state_30446[(2)]);
var state_30446__$1 = (function (){var statearr_30463 = state_30446;
(statearr_30463[(10)] = inst_30438);

return statearr_30463;
})();
var statearr_30464_30486 = state_30446__$1;
(statearr_30464_30486[(2)] = null);

(statearr_30464_30486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (8))){
var inst_30417 = (state_30446[(8)]);
var inst_30420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30421 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30417);
var inst_30422 = cljs.core.async.timeout.call(null,(1000));
var inst_30423 = [inst_30421,inst_30422];
var inst_30424 = (new cljs.core.PersistentVector(null,2,(5),inst_30420,inst_30423,null));
var state_30446__$1 = state_30446;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30446__$1,(11),inst_30424);
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
});})(c__16133__auto___30472,ch))
;
return ((function (switch__16077__auto__,c__16133__auto___30472,ch){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_30468 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30468[(0)] = state_machine__16078__auto__);

(statearr_30468[(1)] = (1));

return statearr_30468;
});
var state_machine__16078__auto____1 = (function (state_30446){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_30446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e30469){if((e30469 instanceof Object)){
var ex__16081__auto__ = e30469;
var statearr_30470_30487 = state_30446;
(statearr_30470_30487[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30488 = state_30446;
state_30446 = G__30488;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_30446){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_30446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___30472,ch))
})();
var state__16135__auto__ = (function (){var statearr_30471 = f__16134__auto__.call(null);
(statearr_30471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___30472);

return statearr_30471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___30472,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30489_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30489_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30498 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30491_SHARP_,p2__30490_SHARP_){
return [cljs.core.str(p2__30490_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30498){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30496 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30497 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30496,_STAR_print_newline_STAR_30497,base_path_30498){
return (function() { 
var G__30499__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30500__i = 0, G__30500__a = new Array(arguments.length -  0);
while (G__30500__i < G__30500__a.length) {G__30500__a[G__30500__i] = arguments[G__30500__i + 0]; ++G__30500__i;}
  args = new cljs.core.IndexedSeq(G__30500__a,0);
} 
return G__30499__delegate.call(this,args);};
G__30499.cljs$lang$maxFixedArity = 0;
G__30499.cljs$lang$applyTo = (function (arglist__30501){
var args = cljs.core.seq(arglist__30501);
return G__30499__delegate(args);
});
G__30499.cljs$core$IFn$_invoke$arity$variadic = G__30499__delegate;
return G__30499;
})()
;})(_STAR_print_fn_STAR_30496,_STAR_print_newline_STAR_30497,base_path_30498))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30497;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30496;
}}catch (e30495){if((e30495 instanceof Error)){
var e = e30495;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30498], null));
} else {
var e = e30495;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30498))
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
figwheel.client.repl_plugin = (function repl_plugin(p__30502){
var map__30507 = p__30502;
var map__30507__$1 = ((cljs.core.seq_QMARK_.call(null,map__30507))?cljs.core.apply.call(null,cljs.core.hash_map,map__30507):map__30507);
var opts = map__30507__$1;
var build_id = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30507,map__30507__$1,opts,build_id){
return (function (p__30508){
var vec__30509 = p__30508;
var map__30510 = cljs.core.nth.call(null,vec__30509,(0),null);
var map__30510__$1 = ((cljs.core.seq_QMARK_.call(null,map__30510))?cljs.core.apply.call(null,cljs.core.hash_map,map__30510):map__30510);
var msg = map__30510__$1;
var msg_name = cljs.core.get.call(null,map__30510__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30509,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30509,map__30510,map__30510__$1,msg,msg_name,_,map__30507,map__30507__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30509,map__30510,map__30510__$1,msg,msg_name,_,map__30507,map__30507__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30507,map__30507__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30514){
var vec__30515 = p__30514;
var map__30516 = cljs.core.nth.call(null,vec__30515,(0),null);
var map__30516__$1 = ((cljs.core.seq_QMARK_.call(null,map__30516))?cljs.core.apply.call(null,cljs.core.hash_map,map__30516):map__30516);
var msg = map__30516__$1;
var msg_name = cljs.core.get.call(null,map__30516__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30515,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30517){
var map__30525 = p__30517;
var map__30525__$1 = ((cljs.core.seq_QMARK_.call(null,map__30525))?cljs.core.apply.call(null,cljs.core.hash_map,map__30525):map__30525);
var on_compile_fail = cljs.core.get.call(null,map__30525__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30525__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30525,map__30525__$1,on_compile_fail,on_compile_warning){
return (function (p__30526){
var vec__30527 = p__30526;
var map__30528 = cljs.core.nth.call(null,vec__30527,(0),null);
var map__30528__$1 = ((cljs.core.seq_QMARK_.call(null,map__30528))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528):map__30528);
var msg = map__30528__$1;
var msg_name = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30527,(1));
var pred__30529 = cljs.core._EQ_;
var expr__30530 = msg_name;
if(cljs.core.truth_(pred__30529.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30530))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30529.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30530))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30525,map__30525__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__,msg_hist,msg_names,msg){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__,msg_hist,msg_names,msg){
return (function (state_30707){
var state_val_30708 = (state_30707[(1)]);
if((state_val_30708 === (7))){
var inst_30656 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30707__$1 = state_30707;
if(inst_30656){
var statearr_30709_30746 = state_30707__$1;
(statearr_30709_30746[(1)] = (11));

} else {
var statearr_30710_30747 = state_30707__$1;
(statearr_30710_30747[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (20))){
var inst_30697 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30711_30748 = state_30707__$1;
(statearr_30711_30748[(2)] = inst_30697);

(statearr_30711_30748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (27))){
var inst_30688 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(30),inst_30688);
} else {
if((state_val_30708 === (1))){
var inst_30639 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30707__$1 = state_30707;
if(cljs.core.truth_(inst_30639)){
var statearr_30712_30749 = state_30707__$1;
(statearr_30712_30749[(1)] = (2));

} else {
var statearr_30713_30750 = state_30707__$1;
(statearr_30713_30750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (24))){
var inst_30686 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30707__$1 = state_30707;
if(inst_30686){
var statearr_30714_30751 = state_30707__$1;
(statearr_30714_30751[(1)] = (27));

} else {
var statearr_30715_30752 = state_30707__$1;
(statearr_30715_30752[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (4))){
var inst_30705 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30707__$1,inst_30705);
} else {
if((state_val_30708 === (15))){
var inst_30666 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30667 = figwheel.client.heads_up.append_message.call(null,inst_30666);
var state_30707__$1 = state_30707;
var statearr_30716_30753 = state_30707__$1;
(statearr_30716_30753[(2)] = inst_30667);

(statearr_30716_30753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (21))){
var inst_30673 = (state_30707[(2)]);
var inst_30674 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30675 = figwheel.client.heads_up.display_warning.call(null,inst_30674);
var state_30707__$1 = (function (){var statearr_30717 = state_30707;
(statearr_30717[(7)] = inst_30673);

return statearr_30717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(22),inst_30675);
} else {
if((state_val_30708 === (13))){
var inst_30701 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30718_30754 = state_30707__$1;
(statearr_30718_30754[(2)] = inst_30701);

(statearr_30718_30754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (22))){
var inst_30677 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30719_30755 = state_30707__$1;
(statearr_30719_30755[(2)] = inst_30677);

(statearr_30719_30755[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (29))){
var inst_30693 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30720_30756 = state_30707__$1;
(statearr_30720_30756[(2)] = inst_30693);

(statearr_30720_30756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (6))){
var inst_30647 = figwheel.client.heads_up.clear.call(null);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(9),inst_30647);
} else {
if((state_val_30708 === (28))){
var state_30707__$1 = state_30707;
var statearr_30721_30757 = state_30707__$1;
(statearr_30721_30757[(2)] = null);

(statearr_30721_30757[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (25))){
var inst_30695 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30722_30758 = state_30707__$1;
(statearr_30722_30758[(2)] = inst_30695);

(statearr_30722_30758[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (17))){
var inst_30699 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30723_30759 = state_30707__$1;
(statearr_30723_30759[(2)] = inst_30699);

(statearr_30723_30759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (3))){
var inst_30645 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30707__$1 = state_30707;
if(inst_30645){
var statearr_30724_30760 = state_30707__$1;
(statearr_30724_30760[(1)] = (6));

} else {
var statearr_30725_30761 = state_30707__$1;
(statearr_30725_30761[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (12))){
var inst_30664 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30707__$1 = state_30707;
if(inst_30664){
var statearr_30726_30762 = state_30707__$1;
(statearr_30726_30762[(1)] = (15));

} else {
var statearr_30727_30763 = state_30707__$1;
(statearr_30727_30763[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (2))){
var inst_30641 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(5),inst_30641);
} else {
if((state_val_30708 === (23))){
var inst_30681 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30682 = figwheel.client.heads_up.display_warning.call(null,inst_30681);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(26),inst_30682);
} else {
if((state_val_30708 === (19))){
var inst_30679 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30707__$1 = state_30707;
if(inst_30679){
var statearr_30728_30764 = state_30707__$1;
(statearr_30728_30764[(1)] = (23));

} else {
var statearr_30729_30765 = state_30707__$1;
(statearr_30729_30765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (11))){
var inst_30658 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30659 = figwheel.client.format_messages.call(null,inst_30658);
var inst_30660 = figwheel.client.heads_up.display_error.call(null,inst_30659);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(14),inst_30660);
} else {
if((state_val_30708 === (9))){
var inst_30649 = (state_30707[(2)]);
var inst_30650 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30651 = figwheel.client.format_messages.call(null,inst_30650);
var inst_30652 = figwheel.client.heads_up.display_error.call(null,inst_30651);
var state_30707__$1 = (function (){var statearr_30730 = state_30707;
(statearr_30730[(8)] = inst_30649);

return statearr_30730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(10),inst_30652);
} else {
if((state_val_30708 === (5))){
var inst_30643 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30731_30766 = state_30707__$1;
(statearr_30731_30766[(2)] = inst_30643);

(statearr_30731_30766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (14))){
var inst_30662 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30732_30767 = state_30707__$1;
(statearr_30732_30767[(2)] = inst_30662);

(statearr_30732_30767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (26))){
var inst_30684 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30733_30768 = state_30707__$1;
(statearr_30733_30768[(2)] = inst_30684);

(statearr_30733_30768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (16))){
var inst_30669 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30707__$1 = state_30707;
if(inst_30669){
var statearr_30734_30769 = state_30707__$1;
(statearr_30734_30769[(1)] = (18));

} else {
var statearr_30735_30770 = state_30707__$1;
(statearr_30735_30770[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (30))){
var inst_30690 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30736_30771 = state_30707__$1;
(statearr_30736_30771[(2)] = inst_30690);

(statearr_30736_30771[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (10))){
var inst_30654 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30737_30772 = state_30707__$1;
(statearr_30737_30772[(2)] = inst_30654);

(statearr_30737_30772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (18))){
var inst_30671 = figwheel.client.heads_up.clear.call(null);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(21),inst_30671);
} else {
if((state_val_30708 === (8))){
var inst_30703 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30738_30773 = state_30707__$1;
(statearr_30738_30773[(2)] = inst_30703);

(statearr_30738_30773[(1)] = (4));


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
});})(c__16133__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16077__auto__,c__16133__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_30742 = [null,null,null,null,null,null,null,null,null];
(statearr_30742[(0)] = state_machine__16078__auto__);

(statearr_30742[(1)] = (1));

return statearr_30742;
});
var state_machine__16078__auto____1 = (function (state_30707){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_30707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e30743){if((e30743 instanceof Object)){
var ex__16081__auto__ = e30743;
var statearr_30744_30774 = state_30707;
(statearr_30744_30774[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30775 = state_30707;
state_30707 = G__30775;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_30707){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_30707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__,msg_hist,msg_names,msg))
})();
var state__16135__auto__ = (function (){var statearr_30745 = f__16134__auto__.call(null);
(statearr_30745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__,msg_hist,msg_names,msg))
);

return c__16133__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__16133__auto___30838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___30838,ch){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___30838,ch){
return (function (state_30821){
var state_val_30822 = (state_30821[(1)]);
if((state_val_30822 === (8))){
var inst_30813 = (state_30821[(2)]);
var state_30821__$1 = (function (){var statearr_30823 = state_30821;
(statearr_30823[(7)] = inst_30813);

return statearr_30823;
})();
var statearr_30824_30839 = state_30821__$1;
(statearr_30824_30839[(2)] = null);

(statearr_30824_30839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (7))){
var inst_30817 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30825_30840 = state_30821__$1;
(statearr_30825_30840[(2)] = inst_30817);

(statearr_30825_30840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (6))){
var state_30821__$1 = state_30821;
var statearr_30826_30841 = state_30821__$1;
(statearr_30826_30841[(2)] = null);

(statearr_30826_30841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (5))){
var inst_30809 = (state_30821[(8)]);
var inst_30811 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30809);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30821__$1,(8),inst_30811);
} else {
if((state_val_30822 === (4))){
var inst_30809 = (state_30821[(8)]);
var inst_30809__$1 = (state_30821[(2)]);
var state_30821__$1 = (function (){var statearr_30827 = state_30821;
(statearr_30827[(8)] = inst_30809__$1);

return statearr_30827;
})();
if(cljs.core.truth_(inst_30809__$1)){
var statearr_30828_30842 = state_30821__$1;
(statearr_30828_30842[(1)] = (5));

} else {
var statearr_30829_30843 = state_30821__$1;
(statearr_30829_30843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (3))){
var inst_30819 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30821__$1,inst_30819);
} else {
if((state_val_30822 === (2))){
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30821__$1,(4),ch);
} else {
if((state_val_30822 === (1))){
var state_30821__$1 = state_30821;
var statearr_30830_30844 = state_30821__$1;
(statearr_30830_30844[(2)] = null);

(statearr_30830_30844[(1)] = (2));


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
});})(c__16133__auto___30838,ch))
;
return ((function (switch__16077__auto__,c__16133__auto___30838,ch){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_30834 = [null,null,null,null,null,null,null,null,null];
(statearr_30834[(0)] = state_machine__16078__auto__);

(statearr_30834[(1)] = (1));

return statearr_30834;
});
var state_machine__16078__auto____1 = (function (state_30821){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_30821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e30835){if((e30835 instanceof Object)){
var ex__16081__auto__ = e30835;
var statearr_30836_30845 = state_30821;
(statearr_30836_30845[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30846 = state_30821;
state_30821 = G__30846;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_30821){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_30821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___30838,ch))
})();
var state__16135__auto__ = (function (){var statearr_30837 = f__16134__auto__.call(null);
(statearr_30837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___30838);

return statearr_30837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___30838,ch))
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
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__){
return (function (state_30867){
var state_val_30868 = (state_30867[(1)]);
if((state_val_30868 === (2))){
var inst_30864 = (state_30867[(2)]);
var inst_30865 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30867__$1 = (function (){var statearr_30869 = state_30867;
(statearr_30869[(7)] = inst_30864);

return statearr_30869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30867__$1,inst_30865);
} else {
if((state_val_30868 === (1))){
var inst_30862 = cljs.core.async.timeout.call(null,(3000));
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30867__$1,(2),inst_30862);
} else {
return null;
}
}
});})(c__16133__auto__))
;
return ((function (switch__16077__auto__,c__16133__auto__){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_30873 = [null,null,null,null,null,null,null,null];
(statearr_30873[(0)] = state_machine__16078__auto__);

(statearr_30873[(1)] = (1));

return statearr_30873;
});
var state_machine__16078__auto____1 = (function (state_30867){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_30867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e30874){if((e30874 instanceof Object)){
var ex__16081__auto__ = e30874;
var statearr_30875_30877 = state_30867;
(statearr_30875_30877[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30878 = state_30867;
state_30867 = G__30878;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_30867){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_30867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__))
})();
var state__16135__auto__ = (function (){var statearr_30876 = f__16134__auto__.call(null);
(statearr_30876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_30876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__))
);

return c__16133__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__13453__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__13453__auto__)){
return ("CustomEvent" in window);
} else {
return and__13453__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30882 = {"detail":url};
return obj30882;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30883){
var map__30889 = p__30883;
var map__30889__$1 = ((cljs.core.seq_QMARK_.call(null,map__30889))?cljs.core.apply.call(null,cljs.core.hash_map,map__30889):map__30889);
var ed = map__30889__$1;
var exception_data = cljs.core.get.call(null,map__30889__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30889__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30890_30894 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30891_30895 = null;
var count__30892_30896 = (0);
var i__30893_30897 = (0);
while(true){
if((i__30893_30897 < count__30892_30896)){
var msg_30898 = cljs.core._nth.call(null,chunk__30891_30895,i__30893_30897);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30898);

var G__30899 = seq__30890_30894;
var G__30900 = chunk__30891_30895;
var G__30901 = count__30892_30896;
var G__30902 = (i__30893_30897 + (1));
seq__30890_30894 = G__30899;
chunk__30891_30895 = G__30900;
count__30892_30896 = G__30901;
i__30893_30897 = G__30902;
continue;
} else {
var temp__4126__auto___30903 = cljs.core.seq.call(null,seq__30890_30894);
if(temp__4126__auto___30903){
var seq__30890_30904__$1 = temp__4126__auto___30903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30890_30904__$1)){
var c__14252__auto___30905 = cljs.core.chunk_first.call(null,seq__30890_30904__$1);
var G__30906 = cljs.core.chunk_rest.call(null,seq__30890_30904__$1);
var G__30907 = c__14252__auto___30905;
var G__30908 = cljs.core.count.call(null,c__14252__auto___30905);
var G__30909 = (0);
seq__30890_30894 = G__30906;
chunk__30891_30895 = G__30907;
count__30892_30896 = G__30908;
i__30893_30897 = G__30909;
continue;
} else {
var msg_30910 = cljs.core.first.call(null,seq__30890_30904__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30910);

var G__30911 = cljs.core.next.call(null,seq__30890_30904__$1);
var G__30912 = null;
var G__30913 = (0);
var G__30914 = (0);
seq__30890_30894 = G__30911;
chunk__30891_30895 = G__30912;
count__30892_30896 = G__30913;
i__30893_30897 = G__30914;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30915){
var map__30917 = p__30915;
var map__30917__$1 = ((cljs.core.seq_QMARK_.call(null,map__30917))?cljs.core.apply.call(null,cljs.core.hash_map,map__30917):map__30917);
var w = map__30917__$1;
var message = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__13453__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__13453__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__13453__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30924 = cljs.core.seq.call(null,plugins);
var chunk__30925 = null;
var count__30926 = (0);
var i__30927 = (0);
while(true){
if((i__30927 < count__30926)){
var vec__30928 = cljs.core._nth.call(null,chunk__30925,i__30927);
var k = cljs.core.nth.call(null,vec__30928,(0),null);
var plugin = cljs.core.nth.call(null,vec__30928,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30930 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30924,chunk__30925,count__30926,i__30927,pl_30930,vec__30928,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30930.call(null,msg_hist);
});})(seq__30924,chunk__30925,count__30926,i__30927,pl_30930,vec__30928,k,plugin))
);
} else {
}

var G__30931 = seq__30924;
var G__30932 = chunk__30925;
var G__30933 = count__30926;
var G__30934 = (i__30927 + (1));
seq__30924 = G__30931;
chunk__30925 = G__30932;
count__30926 = G__30933;
i__30927 = G__30934;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30924);
if(temp__4126__auto__){
var seq__30924__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30924__$1)){
var c__14252__auto__ = cljs.core.chunk_first.call(null,seq__30924__$1);
var G__30935 = cljs.core.chunk_rest.call(null,seq__30924__$1);
var G__30936 = c__14252__auto__;
var G__30937 = cljs.core.count.call(null,c__14252__auto__);
var G__30938 = (0);
seq__30924 = G__30935;
chunk__30925 = G__30936;
count__30926 = G__30937;
i__30927 = G__30938;
continue;
} else {
var vec__30929 = cljs.core.first.call(null,seq__30924__$1);
var k = cljs.core.nth.call(null,vec__30929,(0),null);
var plugin = cljs.core.nth.call(null,vec__30929,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30939 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30924,chunk__30925,count__30926,i__30927,pl_30939,vec__30929,k,plugin,seq__30924__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30939.call(null,msg_hist);
});})(seq__30924,chunk__30925,count__30926,i__30927,pl_30939,vec__30929,k,plugin,seq__30924__$1,temp__4126__auto__))
);
} else {
}

var G__30940 = cljs.core.next.call(null,seq__30924__$1);
var G__30941 = null;
var G__30942 = (0);
var G__30943 = (0);
seq__30924 = G__30940;
chunk__30925 = G__30941;
count__30926 = G__30942;
i__30927 = G__30943;
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
var watch_and_reload__delegate = function (p__30944){
var map__30946 = p__30944;
var map__30946__$1 = ((cljs.core.seq_QMARK_.call(null,map__30946))?cljs.core.apply.call(null,cljs.core.hash_map,map__30946):map__30946);
var opts = map__30946__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30944 = null;
if (arguments.length > 0) {
var G__30947__i = 0, G__30947__a = new Array(arguments.length -  0);
while (G__30947__i < G__30947__a.length) {G__30947__a[G__30947__i] = arguments[G__30947__i + 0]; ++G__30947__i;}
  p__30944 = new cljs.core.IndexedSeq(G__30947__a,0);
} 
return watch_and_reload__delegate.call(this,p__30944);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30948){
var p__30944 = cljs.core.seq(arglist__30948);
return watch_and_reload__delegate(p__30944);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map