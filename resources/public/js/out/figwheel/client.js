// Compiled by ClojureScript 0.0-3148 {:elide-asserts false}
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
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28003__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28004__i = 0, G__28004__a = new Array(arguments.length -  0);
while (G__28004__i < G__28004__a.length) {G__28004__a[G__28004__i] = arguments[G__28004__i + 0]; ++G__28004__i;}
  args = new cljs.core.IndexedSeq(G__28004__a,0);
} 
return G__28003__delegate.call(this,args);};
G__28003.cljs$lang$maxFixedArity = 0;
G__28003.cljs$lang$applyTo = (function (arglist__28005){
var args = cljs.core.seq(arglist__28005);
return G__28003__delegate(args);
});
G__28003.cljs$core$IFn$_invoke$arity$variadic = G__28003__delegate;
return G__28003;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28006){
var map__28008 = p__28006;
var map__28008__$1 = ((cljs.core.seq_QMARK_.call(null,map__28008))?cljs.core.apply.call(null,cljs.core.hash_map,map__28008):map__28008);
var class$ = cljs.core.get.call(null,map__28008__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17703__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17691__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17691__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17691__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19885__auto___28137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___28137,ch){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___28137,ch){
return (function (state_28111){
var state_val_28112 = (state_28111[(1)]);
if((state_val_28112 === (7))){
var inst_28107 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
var statearr_28113_28138 = state_28111__$1;
(statearr_28113_28138[(2)] = inst_28107);

(statearr_28113_28138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (1))){
var state_28111__$1 = state_28111;
var statearr_28114_28139 = state_28111__$1;
(statearr_28114_28139[(2)] = null);

(statearr_28114_28139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (4))){
var inst_28075 = (state_28111[(7)]);
var inst_28075__$1 = (state_28111[(2)]);
var state_28111__$1 = (function (){var statearr_28115 = state_28111;
(statearr_28115[(7)] = inst_28075__$1);

return statearr_28115;
})();
if(cljs.core.truth_(inst_28075__$1)){
var statearr_28116_28140 = state_28111__$1;
(statearr_28116_28140[(1)] = (5));

} else {
var statearr_28117_28141 = state_28111__$1;
(statearr_28117_28141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (13))){
var state_28111__$1 = state_28111;
var statearr_28118_28142 = state_28111__$1;
(statearr_28118_28142[(2)] = null);

(statearr_28118_28142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (6))){
var state_28111__$1 = state_28111;
var statearr_28119_28143 = state_28111__$1;
(statearr_28119_28143[(2)] = null);

(statearr_28119_28143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (3))){
var inst_28109 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28111__$1,inst_28109);
} else {
if((state_val_28112 === (12))){
var inst_28082 = (state_28111[(8)]);
var inst_28095 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28082);
var inst_28096 = cljs.core.first.call(null,inst_28095);
var inst_28097 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28096);
var inst_28098 = console.warn("Figwheel: Not loading code with warnings - ",inst_28097);
var state_28111__$1 = state_28111;
var statearr_28120_28144 = state_28111__$1;
(statearr_28120_28144[(2)] = inst_28098);

(statearr_28120_28144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (2))){
var state_28111__$1 = state_28111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28111__$1,(4),ch);
} else {
if((state_val_28112 === (11))){
var inst_28091 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
var statearr_28121_28145 = state_28111__$1;
(statearr_28121_28145[(2)] = inst_28091);

(statearr_28121_28145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (9))){
var inst_28081 = (state_28111[(9)]);
var inst_28093 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28081,opts);
var state_28111__$1 = state_28111;
if(inst_28093){
var statearr_28122_28146 = state_28111__$1;
(statearr_28122_28146[(1)] = (12));

} else {
var statearr_28123_28147 = state_28111__$1;
(statearr_28123_28147[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (5))){
var inst_28081 = (state_28111[(9)]);
var inst_28075 = (state_28111[(7)]);
var inst_28077 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28078 = (new cljs.core.PersistentArrayMap(null,2,inst_28077,null));
var inst_28079 = (new cljs.core.PersistentHashSet(null,inst_28078,null));
var inst_28080 = figwheel.client.focus_msgs.call(null,inst_28079,inst_28075);
var inst_28081__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28080);
var inst_28082 = cljs.core.first.call(null,inst_28080);
var inst_28083 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28081__$1,opts);
var state_28111__$1 = (function (){var statearr_28124 = state_28111;
(statearr_28124[(9)] = inst_28081__$1);

(statearr_28124[(8)] = inst_28082);

return statearr_28124;
})();
if(cljs.core.truth_(inst_28083)){
var statearr_28125_28148 = state_28111__$1;
(statearr_28125_28148[(1)] = (8));

} else {
var statearr_28126_28149 = state_28111__$1;
(statearr_28126_28149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (14))){
var inst_28101 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
var statearr_28127_28150 = state_28111__$1;
(statearr_28127_28150[(2)] = inst_28101);

(statearr_28127_28150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (10))){
var inst_28103 = (state_28111[(2)]);
var state_28111__$1 = (function (){var statearr_28128 = state_28111;
(statearr_28128[(10)] = inst_28103);

return statearr_28128;
})();
var statearr_28129_28151 = state_28111__$1;
(statearr_28129_28151[(2)] = null);

(statearr_28129_28151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (8))){
var inst_28082 = (state_28111[(8)]);
var inst_28085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28086 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28082);
var inst_28087 = cljs.core.async.timeout.call(null,(1000));
var inst_28088 = [inst_28086,inst_28087];
var inst_28089 = (new cljs.core.PersistentVector(null,2,(5),inst_28085,inst_28088,null));
var state_28111__$1 = state_28111;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28111__$1,(11),inst_28089);
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
});})(c__19885__auto___28137,ch))
;
return ((function (switch__19829__auto__,c__19885__auto___28137,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19830__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19830__auto____0 = (function (){
var statearr_28133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28133[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19830__auto__);

(statearr_28133[(1)] = (1));

return statearr_28133;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19830__auto____1 = (function (state_28111){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_28111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e28134){if((e28134 instanceof Object)){
var ex__19833__auto__ = e28134;
var statearr_28135_28152 = state_28111;
(statearr_28135_28152[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28153 = state_28111;
state_28111 = G__28153;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19830__auto__ = function(state_28111){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19830__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19830__auto____1.call(this,state_28111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19830__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19830__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___28137,ch))
})();
var state__19887__auto__ = (function (){var statearr_28136 = f__19886__auto__.call(null);
(statearr_28136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___28137);

return statearr_28136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___28137,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28154_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28154_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28163 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__28156_SHARP_,p2__28155_SHARP_){
return [cljs.core.str(p2__28155_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28163){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28161 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28162 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28161,_STAR_print_newline_STAR_28162,base_path_28163){
return (function() { 
var G__28164__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28165__i = 0, G__28165__a = new Array(arguments.length -  0);
while (G__28165__i < G__28165__a.length) {G__28165__a[G__28165__i] = arguments[G__28165__i + 0]; ++G__28165__i;}
  args = new cljs.core.IndexedSeq(G__28165__a,0);
} 
return G__28164__delegate.call(this,args);};
G__28164.cljs$lang$maxFixedArity = 0;
G__28164.cljs$lang$applyTo = (function (arglist__28166){
var args = cljs.core.seq(arglist__28166);
return G__28164__delegate(args);
});
G__28164.cljs$core$IFn$_invoke$arity$variadic = G__28164__delegate;
return G__28164;
})()
;})(_STAR_print_fn_STAR_28161,_STAR_print_newline_STAR_28162,base_path_28163))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28162;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28161;
}}catch (e28160){if((e28160 instanceof Error)){
var e = e28160;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28163], null));
} else {
var e = e28160;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28163))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28167){
var map__28172 = p__28167;
var map__28172__$1 = ((cljs.core.seq_QMARK_.call(null,map__28172))?cljs.core.apply.call(null,cljs.core.hash_map,map__28172):map__28172);
var opts = map__28172__$1;
var build_id = cljs.core.get.call(null,map__28172__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28172,map__28172__$1,opts,build_id){
return (function (p__28173){
var vec__28174 = p__28173;
var map__28175 = cljs.core.nth.call(null,vec__28174,(0),null);
var map__28175__$1 = ((cljs.core.seq_QMARK_.call(null,map__28175))?cljs.core.apply.call(null,cljs.core.hash_map,map__28175):map__28175);
var msg = map__28175__$1;
var msg_name = cljs.core.get.call(null,map__28175__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28174,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28174,map__28175,map__28175__$1,msg,msg_name,_,map__28172,map__28172__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28174,map__28175,map__28175__$1,msg,msg_name,_,map__28172,map__28172__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28172,map__28172__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28179){
var vec__28180 = p__28179;
var map__28181 = cljs.core.nth.call(null,vec__28180,(0),null);
var map__28181__$1 = ((cljs.core.seq_QMARK_.call(null,map__28181))?cljs.core.apply.call(null,cljs.core.hash_map,map__28181):map__28181);
var msg = map__28181__$1;
var msg_name = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28180,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28182){
var map__28190 = p__28182;
var map__28190__$1 = ((cljs.core.seq_QMARK_.call(null,map__28190))?cljs.core.apply.call(null,cljs.core.hash_map,map__28190):map__28190);
var on_compile_fail = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28190,map__28190__$1,on_compile_fail,on_compile_warning){
return (function (p__28191){
var vec__28192 = p__28191;
var map__28193 = cljs.core.nth.call(null,vec__28192,(0),null);
var map__28193__$1 = ((cljs.core.seq_QMARK_.call(null,map__28193))?cljs.core.apply.call(null,cljs.core.hash_map,map__28193):map__28193);
var msg = map__28193__$1;
var msg_name = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28192,(1));
var pred__28194 = cljs.core._EQ_;
var expr__28195 = msg_name;
if(cljs.core.truth_(pred__28194.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28195))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28194.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28195))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28190,map__28190__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto__,msg_hist,msg_names,msg){
return (function (state_28392){
var state_val_28393 = (state_28392[(1)]);
if((state_val_28393 === (7))){
var inst_28328 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28394_28435 = state_28392__$1;
(statearr_28394_28435[(2)] = inst_28328);

(statearr_28394_28435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (20))){
var inst_28354 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28392__$1 = state_28392;
if(inst_28354){
var statearr_28395_28436 = state_28392__$1;
(statearr_28395_28436[(1)] = (22));

} else {
var statearr_28396_28437 = state_28392__$1;
(statearr_28396_28437[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (27))){
var inst_28366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28367 = figwheel.client.heads_up.display_warning.call(null,inst_28366);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(30),inst_28367);
} else {
if((state_val_28393 === (1))){
var inst_28316 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28392__$1 = state_28392;
if(cljs.core.truth_(inst_28316)){
var statearr_28397_28438 = state_28392__$1;
(statearr_28397_28438[(1)] = (2));

} else {
var statearr_28398_28439 = state_28392__$1;
(statearr_28398_28439[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (24))){
var inst_28382 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28399_28440 = state_28392__$1;
(statearr_28399_28440[(2)] = inst_28382);

(statearr_28399_28440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (4))){
var inst_28390 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28392__$1,inst_28390);
} else {
if((state_val_28393 === (15))){
var inst_28343 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28344 = figwheel.client.format_messages.call(null,inst_28343);
var inst_28345 = figwheel.client.heads_up.display_error.call(null,inst_28344);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(18),inst_28345);
} else {
if((state_val_28393 === (21))){
var inst_28384 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28400_28441 = state_28392__$1;
(statearr_28400_28441[(2)] = inst_28384);

(statearr_28400_28441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (31))){
var inst_28373 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(34),inst_28373);
} else {
if((state_val_28393 === (32))){
var state_28392__$1 = state_28392;
var statearr_28401_28442 = state_28392__$1;
(statearr_28401_28442[(2)] = null);

(statearr_28401_28442[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (33))){
var inst_28378 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28402_28443 = state_28392__$1;
(statearr_28402_28443[(2)] = inst_28378);

(statearr_28402_28443[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (13))){
var inst_28334 = (state_28392[(2)]);
var inst_28335 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28336 = figwheel.client.format_messages.call(null,inst_28335);
var inst_28337 = figwheel.client.heads_up.display_error.call(null,inst_28336);
var state_28392__$1 = (function (){var statearr_28403 = state_28392;
(statearr_28403[(7)] = inst_28334);

return statearr_28403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(14),inst_28337);
} else {
if((state_val_28393 === (22))){
var inst_28356 = figwheel.client.heads_up.clear.call(null);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(25),inst_28356);
} else {
if((state_val_28393 === (29))){
var inst_28380 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28404_28444 = state_28392__$1;
(statearr_28404_28444[(2)] = inst_28380);

(statearr_28404_28444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (6))){
var inst_28324 = figwheel.client.heads_up.clear.call(null);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(9),inst_28324);
} else {
if((state_val_28393 === (28))){
var inst_28371 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28392__$1 = state_28392;
if(inst_28371){
var statearr_28405_28445 = state_28392__$1;
(statearr_28405_28445[(1)] = (31));

} else {
var statearr_28406_28446 = state_28392__$1;
(statearr_28406_28446[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (25))){
var inst_28358 = (state_28392[(2)]);
var inst_28359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28360 = figwheel.client.heads_up.display_warning.call(null,inst_28359);
var state_28392__$1 = (function (){var statearr_28407 = state_28392;
(statearr_28407[(8)] = inst_28358);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(26),inst_28360);
} else {
if((state_val_28393 === (34))){
var inst_28375 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28408_28447 = state_28392__$1;
(statearr_28408_28447[(2)] = inst_28375);

(statearr_28408_28447[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (17))){
var inst_28386 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28409_28448 = state_28392__$1;
(statearr_28409_28448[(2)] = inst_28386);

(statearr_28409_28448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (3))){
var inst_28330 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28392__$1 = state_28392;
if(inst_28330){
var statearr_28410_28449 = state_28392__$1;
(statearr_28410_28449[(1)] = (10));

} else {
var statearr_28411_28450 = state_28392__$1;
(statearr_28411_28450[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (12))){
var inst_28388 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28412_28451 = state_28392__$1;
(statearr_28412_28451[(2)] = inst_28388);

(statearr_28412_28451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (2))){
var inst_28318 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28392__$1 = state_28392;
if(cljs.core.truth_(inst_28318)){
var statearr_28413_28452 = state_28392__$1;
(statearr_28413_28452[(1)] = (5));

} else {
var statearr_28414_28453 = state_28392__$1;
(statearr_28414_28453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (23))){
var inst_28364 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28392__$1 = state_28392;
if(inst_28364){
var statearr_28415_28454 = state_28392__$1;
(statearr_28415_28454[(1)] = (27));

} else {
var statearr_28416_28455 = state_28392__$1;
(statearr_28416_28455[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (19))){
var inst_28351 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28352 = figwheel.client.heads_up.append_message.call(null,inst_28351);
var state_28392__$1 = state_28392;
var statearr_28417_28456 = state_28392__$1;
(statearr_28417_28456[(2)] = inst_28352);

(statearr_28417_28456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (11))){
var inst_28341 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28392__$1 = state_28392;
if(inst_28341){
var statearr_28418_28457 = state_28392__$1;
(statearr_28418_28457[(1)] = (15));

} else {
var statearr_28419_28458 = state_28392__$1;
(statearr_28419_28458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (9))){
var inst_28326 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28420_28459 = state_28392__$1;
(statearr_28420_28459[(2)] = inst_28326);

(statearr_28420_28459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (5))){
var inst_28320 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(8),inst_28320);
} else {
if((state_val_28393 === (14))){
var inst_28339 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28421_28460 = state_28392__$1;
(statearr_28421_28460[(2)] = inst_28339);

(statearr_28421_28460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (26))){
var inst_28362 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28422_28461 = state_28392__$1;
(statearr_28422_28461[(2)] = inst_28362);

(statearr_28422_28461[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (16))){
var inst_28349 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28392__$1 = state_28392;
if(inst_28349){
var statearr_28423_28462 = state_28392__$1;
(statearr_28423_28462[(1)] = (19));

} else {
var statearr_28424_28463 = state_28392__$1;
(statearr_28424_28463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (30))){
var inst_28369 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28425_28464 = state_28392__$1;
(statearr_28425_28464[(2)] = inst_28369);

(statearr_28425_28464[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (10))){
var inst_28332 = figwheel.client.heads_up.clear.call(null);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(13),inst_28332);
} else {
if((state_val_28393 === (18))){
var inst_28347 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28426_28465 = state_28392__$1;
(statearr_28426_28465[(2)] = inst_28347);

(statearr_28426_28465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (8))){
var inst_28322 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28427_28466 = state_28392__$1;
(statearr_28427_28466[(2)] = inst_28322);

(statearr_28427_28466[(1)] = (7));


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
});})(c__19885__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19829__auto__,c__19885__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto____0 = (function (){
var statearr_28431 = [null,null,null,null,null,null,null,null,null];
(statearr_28431[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto__);

(statearr_28431[(1)] = (1));

return statearr_28431;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto____1 = (function (state_28392){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_28392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e28432){if((e28432 instanceof Object)){
var ex__19833__auto__ = e28432;
var statearr_28433_28467 = state_28392;
(statearr_28433_28467[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28468 = state_28392;
state_28392 = G__28468;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto__ = function(state_28392){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto____1.call(this,state_28392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto__,msg_hist,msg_names,msg))
})();
var state__19887__auto__ = (function (){var statearr_28434 = f__19886__auto__.call(null);
(statearr_28434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto__);

return statearr_28434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto__,msg_hist,msg_names,msg))
);

return c__19885__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19885__auto___28531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___28531,ch){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___28531,ch){
return (function (state_28514){
var state_val_28515 = (state_28514[(1)]);
if((state_val_28515 === (8))){
var inst_28506 = (state_28514[(2)]);
var state_28514__$1 = (function (){var statearr_28516 = state_28514;
(statearr_28516[(7)] = inst_28506);

return statearr_28516;
})();
var statearr_28517_28532 = state_28514__$1;
(statearr_28517_28532[(2)] = null);

(statearr_28517_28532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (7))){
var inst_28510 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28518_28533 = state_28514__$1;
(statearr_28518_28533[(2)] = inst_28510);

(statearr_28518_28533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (6))){
var state_28514__$1 = state_28514;
var statearr_28519_28534 = state_28514__$1;
(statearr_28519_28534[(2)] = null);

(statearr_28519_28534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (5))){
var inst_28502 = (state_28514[(8)]);
var inst_28504 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28502);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(8),inst_28504);
} else {
if((state_val_28515 === (4))){
var inst_28502 = (state_28514[(8)]);
var inst_28502__$1 = (state_28514[(2)]);
var state_28514__$1 = (function (){var statearr_28520 = state_28514;
(statearr_28520[(8)] = inst_28502__$1);

return statearr_28520;
})();
if(cljs.core.truth_(inst_28502__$1)){
var statearr_28521_28535 = state_28514__$1;
(statearr_28521_28535[(1)] = (5));

} else {
var statearr_28522_28536 = state_28514__$1;
(statearr_28522_28536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (3))){
var inst_28512 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28514__$1,inst_28512);
} else {
if((state_val_28515 === (2))){
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(4),ch);
} else {
if((state_val_28515 === (1))){
var state_28514__$1 = state_28514;
var statearr_28523_28537 = state_28514__$1;
(statearr_28523_28537[(2)] = null);

(statearr_28523_28537[(1)] = (2));


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
});})(c__19885__auto___28531,ch))
;
return ((function (switch__19829__auto__,c__19885__auto___28531,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19830__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19830__auto____0 = (function (){
var statearr_28527 = [null,null,null,null,null,null,null,null,null];
(statearr_28527[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19830__auto__);

(statearr_28527[(1)] = (1));

return statearr_28527;
});
var figwheel$client$heads_up_plugin_$_state_machine__19830__auto____1 = (function (state_28514){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_28514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e28528){if((e28528 instanceof Object)){
var ex__19833__auto__ = e28528;
var statearr_28529_28538 = state_28514;
(statearr_28529_28538[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28539 = state_28514;
state_28514 = G__28539;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19830__auto__ = function(state_28514){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19830__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19830__auto____1.call(this,state_28514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19830__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19830__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___28531,ch))
})();
var state__19887__auto__ = (function (){var statearr_28530 = f__19886__auto__.call(null);
(statearr_28530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___28531);

return statearr_28530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___28531,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto__){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto__){
return (function (state_28560){
var state_val_28561 = (state_28560[(1)]);
if((state_val_28561 === (2))){
var inst_28557 = (state_28560[(2)]);
var inst_28558 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28560__$1 = (function (){var statearr_28562 = state_28560;
(statearr_28562[(7)] = inst_28557);

return statearr_28562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28560__$1,inst_28558);
} else {
if((state_val_28561 === (1))){
var inst_28555 = cljs.core.async.timeout.call(null,(3000));
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(2),inst_28555);
} else {
return null;
}
}
});})(c__19885__auto__))
;
return ((function (switch__19829__auto__,c__19885__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19830__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19830__auto____0 = (function (){
var statearr_28566 = [null,null,null,null,null,null,null,null];
(statearr_28566[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19830__auto__);

(statearr_28566[(1)] = (1));

return statearr_28566;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19830__auto____1 = (function (state_28560){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_28560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e28567){if((e28567 instanceof Object)){
var ex__19833__auto__ = e28567;
var statearr_28568_28570 = state_28560;
(statearr_28568_28570[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28571 = state_28560;
state_28560 = G__28571;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19830__auto__ = function(state_28560){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19830__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19830__auto____1.call(this,state_28560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19830__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19830__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto__))
})();
var state__19887__auto__ = (function (){var statearr_28569 = f__19886__auto__.call(null);
(statearr_28569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto__);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto__))
);

return c__19885__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__17691__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__17691__auto__)){
return ("CustomEvent" in window);
} else {
return and__17691__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28575 = {"detail":url};
return obj28575;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28576){
var map__28582 = p__28576;
var map__28582__$1 = ((cljs.core.seq_QMARK_.call(null,map__28582))?cljs.core.apply.call(null,cljs.core.hash_map,map__28582):map__28582);
var ed = map__28582__$1;
var exception_data = cljs.core.get.call(null,map__28582__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28582__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28583_28587 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28584_28588 = null;
var count__28585_28589 = (0);
var i__28586_28590 = (0);
while(true){
if((i__28586_28590 < count__28585_28589)){
var msg_28591 = cljs.core._nth.call(null,chunk__28584_28588,i__28586_28590);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28591);

var G__28592 = seq__28583_28587;
var G__28593 = chunk__28584_28588;
var G__28594 = count__28585_28589;
var G__28595 = (i__28586_28590 + (1));
seq__28583_28587 = G__28592;
chunk__28584_28588 = G__28593;
count__28585_28589 = G__28594;
i__28586_28590 = G__28595;
continue;
} else {
var temp__4126__auto___28596 = cljs.core.seq.call(null,seq__28583_28587);
if(temp__4126__auto___28596){
var seq__28583_28597__$1 = temp__4126__auto___28596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28583_28597__$1)){
var c__18488__auto___28598 = cljs.core.chunk_first.call(null,seq__28583_28597__$1);
var G__28599 = cljs.core.chunk_rest.call(null,seq__28583_28597__$1);
var G__28600 = c__18488__auto___28598;
var G__28601 = cljs.core.count.call(null,c__18488__auto___28598);
var G__28602 = (0);
seq__28583_28587 = G__28599;
chunk__28584_28588 = G__28600;
count__28585_28589 = G__28601;
i__28586_28590 = G__28602;
continue;
} else {
var msg_28603 = cljs.core.first.call(null,seq__28583_28597__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28603);

var G__28604 = cljs.core.next.call(null,seq__28583_28597__$1);
var G__28605 = null;
var G__28606 = (0);
var G__28607 = (0);
seq__28583_28587 = G__28604;
chunk__28584_28588 = G__28605;
count__28585_28589 = G__28606;
i__28586_28590 = G__28607;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28608){
var map__28610 = p__28608;
var map__28610__$1 = ((cljs.core.seq_QMARK_.call(null,map__28610))?cljs.core.apply.call(null,cljs.core.hash_map,map__28610):map__28610);
var w = map__28610__$1;
var message = cljs.core.get.call(null,map__28610__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17691__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17691__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17691__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28617 = cljs.core.seq.call(null,plugins);
var chunk__28618 = null;
var count__28619 = (0);
var i__28620 = (0);
while(true){
if((i__28620 < count__28619)){
var vec__28621 = cljs.core._nth.call(null,chunk__28618,i__28620);
var k = cljs.core.nth.call(null,vec__28621,(0),null);
var plugin = cljs.core.nth.call(null,vec__28621,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28623 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28617,chunk__28618,count__28619,i__28620,pl_28623,vec__28621,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28623.call(null,msg_hist);
});})(seq__28617,chunk__28618,count__28619,i__28620,pl_28623,vec__28621,k,plugin))
);
} else {
}

var G__28624 = seq__28617;
var G__28625 = chunk__28618;
var G__28626 = count__28619;
var G__28627 = (i__28620 + (1));
seq__28617 = G__28624;
chunk__28618 = G__28625;
count__28619 = G__28626;
i__28620 = G__28627;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28617);
if(temp__4126__auto__){
var seq__28617__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28617__$1)){
var c__18488__auto__ = cljs.core.chunk_first.call(null,seq__28617__$1);
var G__28628 = cljs.core.chunk_rest.call(null,seq__28617__$1);
var G__28629 = c__18488__auto__;
var G__28630 = cljs.core.count.call(null,c__18488__auto__);
var G__28631 = (0);
seq__28617 = G__28628;
chunk__28618 = G__28629;
count__28619 = G__28630;
i__28620 = G__28631;
continue;
} else {
var vec__28622 = cljs.core.first.call(null,seq__28617__$1);
var k = cljs.core.nth.call(null,vec__28622,(0),null);
var plugin = cljs.core.nth.call(null,vec__28622,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28632 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28617,chunk__28618,count__28619,i__28620,pl_28632,vec__28622,k,plugin,seq__28617__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28632.call(null,msg_hist);
});})(seq__28617,chunk__28618,count__28619,i__28620,pl_28632,vec__28622,k,plugin,seq__28617__$1,temp__4126__auto__))
);
} else {
}

var G__28633 = cljs.core.next.call(null,seq__28617__$1);
var G__28634 = null;
var G__28635 = (0);
var G__28636 = (0);
seq__28617 = G__28633;
chunk__28618 = G__28634;
count__28619 = G__28635;
i__28620 = G__28636;
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
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
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
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__28637){
var map__28639 = p__28637;
var map__28639__$1 = ((cljs.core.seq_QMARK_.call(null,map__28639))?cljs.core.apply.call(null,cljs.core.hash_map,map__28639):map__28639);
var opts = map__28639__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__28637 = null;
if (arguments.length > 0) {
var G__28640__i = 0, G__28640__a = new Array(arguments.length -  0);
while (G__28640__i < G__28640__a.length) {G__28640__a[G__28640__i] = arguments[G__28640__i + 0]; ++G__28640__i;}
  p__28637 = new cljs.core.IndexedSeq(G__28640__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__28637);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__28641){
var p__28637 = cljs.core.seq(arglist__28641);
return figwheel$client$watch_and_reload__delegate(p__28637);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map