// Compiled by ClojureScript 0.0-3123 {:elide-asserts false}
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
var G__27946__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27947__i = 0, G__27947__a = new Array(arguments.length -  0);
while (G__27947__i < G__27947__a.length) {G__27947__a[G__27947__i] = arguments[G__27947__i + 0]; ++G__27947__i;}
  args = new cljs.core.IndexedSeq(G__27947__a,0);
} 
return G__27946__delegate.call(this,args);};
G__27946.cljs$lang$maxFixedArity = 0;
G__27946.cljs$lang$applyTo = (function (arglist__27948){
var args = cljs.core.seq(arglist__27948);
return G__27946__delegate(args);
});
G__27946.cljs$core$IFn$_invoke$arity$variadic = G__27946__delegate;
return G__27946;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27949){
var map__27951 = p__27949;
var map__27951__$1 = ((cljs.core.seq_QMARK_.call(null,map__27951))?cljs.core.apply.call(null,cljs.core.hash_map,map__27951):map__27951);
var class$ = cljs.core.get.call(null,map__27951__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__27951__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17646__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17646__auto__)){
return or__17646__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17634__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17634__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17634__auto__;
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
var c__19828__auto___28080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___28080,ch){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___28080,ch){
return (function (state_28054){
var state_val_28055 = (state_28054[(1)]);
if((state_val_28055 === (7))){
var inst_28050 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28056_28081 = state_28054__$1;
(statearr_28056_28081[(2)] = inst_28050);

(statearr_28056_28081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (1))){
var state_28054__$1 = state_28054;
var statearr_28057_28082 = state_28054__$1;
(statearr_28057_28082[(2)] = null);

(statearr_28057_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (4))){
var inst_28018 = (state_28054[(7)]);
var inst_28018__$1 = (state_28054[(2)]);
var state_28054__$1 = (function (){var statearr_28058 = state_28054;
(statearr_28058[(7)] = inst_28018__$1);

return statearr_28058;
})();
if(cljs.core.truth_(inst_28018__$1)){
var statearr_28059_28083 = state_28054__$1;
(statearr_28059_28083[(1)] = (5));

} else {
var statearr_28060_28084 = state_28054__$1;
(statearr_28060_28084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (13))){
var state_28054__$1 = state_28054;
var statearr_28061_28085 = state_28054__$1;
(statearr_28061_28085[(2)] = null);

(statearr_28061_28085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (6))){
var state_28054__$1 = state_28054;
var statearr_28062_28086 = state_28054__$1;
(statearr_28062_28086[(2)] = null);

(statearr_28062_28086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (3))){
var inst_28052 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28054__$1,inst_28052);
} else {
if((state_val_28055 === (12))){
var inst_28025 = (state_28054[(8)]);
var inst_28038 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28025);
var inst_28039 = cljs.core.first.call(null,inst_28038);
var inst_28040 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28039);
var inst_28041 = console.warn("Figwheel: Not loading code with warnings - ",inst_28040);
var state_28054__$1 = state_28054;
var statearr_28063_28087 = state_28054__$1;
(statearr_28063_28087[(2)] = inst_28041);

(statearr_28063_28087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (2))){
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28054__$1,(4),ch);
} else {
if((state_val_28055 === (11))){
var inst_28034 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28064_28088 = state_28054__$1;
(statearr_28064_28088[(2)] = inst_28034);

(statearr_28064_28088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (9))){
var inst_28024 = (state_28054[(9)]);
var inst_28036 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28024,opts);
var state_28054__$1 = state_28054;
if(inst_28036){
var statearr_28065_28089 = state_28054__$1;
(statearr_28065_28089[(1)] = (12));

} else {
var statearr_28066_28090 = state_28054__$1;
(statearr_28066_28090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (5))){
var inst_28024 = (state_28054[(9)]);
var inst_28018 = (state_28054[(7)]);
var inst_28020 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28021 = (new cljs.core.PersistentArrayMap(null,2,inst_28020,null));
var inst_28022 = (new cljs.core.PersistentHashSet(null,inst_28021,null));
var inst_28023 = figwheel.client.focus_msgs.call(null,inst_28022,inst_28018);
var inst_28024__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28023);
var inst_28025 = cljs.core.first.call(null,inst_28023);
var inst_28026 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28024__$1,opts);
var state_28054__$1 = (function (){var statearr_28067 = state_28054;
(statearr_28067[(9)] = inst_28024__$1);

(statearr_28067[(8)] = inst_28025);

return statearr_28067;
})();
if(cljs.core.truth_(inst_28026)){
var statearr_28068_28091 = state_28054__$1;
(statearr_28068_28091[(1)] = (8));

} else {
var statearr_28069_28092 = state_28054__$1;
(statearr_28069_28092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (14))){
var inst_28044 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28070_28093 = state_28054__$1;
(statearr_28070_28093[(2)] = inst_28044);

(statearr_28070_28093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (10))){
var inst_28046 = (state_28054[(2)]);
var state_28054__$1 = (function (){var statearr_28071 = state_28054;
(statearr_28071[(10)] = inst_28046);

return statearr_28071;
})();
var statearr_28072_28094 = state_28054__$1;
(statearr_28072_28094[(2)] = null);

(statearr_28072_28094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (8))){
var inst_28025 = (state_28054[(8)]);
var inst_28028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28029 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28025);
var inst_28030 = cljs.core.async.timeout.call(null,(1000));
var inst_28031 = [inst_28029,inst_28030];
var inst_28032 = (new cljs.core.PersistentVector(null,2,(5),inst_28028,inst_28031,null));
var state_28054__$1 = state_28054;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28054__$1,(11),inst_28032);
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
});})(c__19828__auto___28080,ch))
;
return ((function (switch__19772__auto__,c__19828__auto___28080,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19773__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19773__auto____0 = (function (){
var statearr_28076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28076[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19773__auto__);

(statearr_28076[(1)] = (1));

return statearr_28076;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19773__auto____1 = (function (state_28054){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_28054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e28077){if((e28077 instanceof Object)){
var ex__19776__auto__ = e28077;
var statearr_28078_28095 = state_28054;
(statearr_28078_28095[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28096 = state_28054;
state_28054 = G__28096;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19773__auto__ = function(state_28054){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19773__auto____1.call(this,state_28054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19773__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19773__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___28080,ch))
})();
var state__19830__auto__ = (function (){var statearr_28079 = f__19829__auto__.call(null);
(statearr_28079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___28080);

return statearr_28079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___28080,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28097_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28097_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28106 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__28099_SHARP_,p2__28098_SHARP_){
return [cljs.core.str(p2__28098_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28106){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28104 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28105 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28104,_STAR_print_newline_STAR_28105,base_path_28106){
return (function() { 
var G__28107__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28108__i = 0, G__28108__a = new Array(arguments.length -  0);
while (G__28108__i < G__28108__a.length) {G__28108__a[G__28108__i] = arguments[G__28108__i + 0]; ++G__28108__i;}
  args = new cljs.core.IndexedSeq(G__28108__a,0);
} 
return G__28107__delegate.call(this,args);};
G__28107.cljs$lang$maxFixedArity = 0;
G__28107.cljs$lang$applyTo = (function (arglist__28109){
var args = cljs.core.seq(arglist__28109);
return G__28107__delegate(args);
});
G__28107.cljs$core$IFn$_invoke$arity$variadic = G__28107__delegate;
return G__28107;
})()
;})(_STAR_print_fn_STAR_28104,_STAR_print_newline_STAR_28105,base_path_28106))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28105;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28104;
}}catch (e28103){if((e28103 instanceof Error)){
var e = e28103;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28106], null));
} else {
var e = e28103;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28106))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28110){
var map__28115 = p__28110;
var map__28115__$1 = ((cljs.core.seq_QMARK_.call(null,map__28115))?cljs.core.apply.call(null,cljs.core.hash_map,map__28115):map__28115);
var opts = map__28115__$1;
var build_id = cljs.core.get.call(null,map__28115__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28115,map__28115__$1,opts,build_id){
return (function (p__28116){
var vec__28117 = p__28116;
var map__28118 = cljs.core.nth.call(null,vec__28117,(0),null);
var map__28118__$1 = ((cljs.core.seq_QMARK_.call(null,map__28118))?cljs.core.apply.call(null,cljs.core.hash_map,map__28118):map__28118);
var msg = map__28118__$1;
var msg_name = cljs.core.get.call(null,map__28118__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28117,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28117,map__28118,map__28118__$1,msg,msg_name,_,map__28115,map__28115__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28117,map__28118,map__28118__$1,msg,msg_name,_,map__28115,map__28115__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28115,map__28115__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28122){
var vec__28123 = p__28122;
var map__28124 = cljs.core.nth.call(null,vec__28123,(0),null);
var map__28124__$1 = ((cljs.core.seq_QMARK_.call(null,map__28124))?cljs.core.apply.call(null,cljs.core.hash_map,map__28124):map__28124);
var msg = map__28124__$1;
var msg_name = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28123,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28125){
var map__28133 = p__28125;
var map__28133__$1 = ((cljs.core.seq_QMARK_.call(null,map__28133))?cljs.core.apply.call(null,cljs.core.hash_map,map__28133):map__28133);
var on_compile_fail = cljs.core.get.call(null,map__28133__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28133__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28133,map__28133__$1,on_compile_fail,on_compile_warning){
return (function (p__28134){
var vec__28135 = p__28134;
var map__28136 = cljs.core.nth.call(null,vec__28135,(0),null);
var map__28136__$1 = ((cljs.core.seq_QMARK_.call(null,map__28136))?cljs.core.apply.call(null,cljs.core.hash_map,map__28136):map__28136);
var msg = map__28136__$1;
var msg_name = cljs.core.get.call(null,map__28136__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28135,(1));
var pred__28137 = cljs.core._EQ_;
var expr__28138 = msg_name;
if(cljs.core.truth_(pred__28137.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28138))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28137.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28138))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28133,map__28133__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__,msg_hist,msg_names,msg){
return (function (state_28335){
var state_val_28336 = (state_28335[(1)]);
if((state_val_28336 === (7))){
var inst_28271 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28337_28378 = state_28335__$1;
(statearr_28337_28378[(2)] = inst_28271);

(statearr_28337_28378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (20))){
var inst_28297 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28335__$1 = state_28335;
if(inst_28297){
var statearr_28338_28379 = state_28335__$1;
(statearr_28338_28379[(1)] = (22));

} else {
var statearr_28339_28380 = state_28335__$1;
(statearr_28339_28380[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (27))){
var inst_28309 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28310 = figwheel.client.heads_up.display_warning.call(null,inst_28309);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(30),inst_28310);
} else {
if((state_val_28336 === (1))){
var inst_28259 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28335__$1 = state_28335;
if(cljs.core.truth_(inst_28259)){
var statearr_28340_28381 = state_28335__$1;
(statearr_28340_28381[(1)] = (2));

} else {
var statearr_28341_28382 = state_28335__$1;
(statearr_28341_28382[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (24))){
var inst_28325 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28342_28383 = state_28335__$1;
(statearr_28342_28383[(2)] = inst_28325);

(statearr_28342_28383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (4))){
var inst_28333 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28335__$1,inst_28333);
} else {
if((state_val_28336 === (15))){
var inst_28286 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28287 = figwheel.client.format_messages.call(null,inst_28286);
var inst_28288 = figwheel.client.heads_up.display_error.call(null,inst_28287);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(18),inst_28288);
} else {
if((state_val_28336 === (21))){
var inst_28327 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28343_28384 = state_28335__$1;
(statearr_28343_28384[(2)] = inst_28327);

(statearr_28343_28384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (31))){
var inst_28316 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(34),inst_28316);
} else {
if((state_val_28336 === (32))){
var state_28335__$1 = state_28335;
var statearr_28344_28385 = state_28335__$1;
(statearr_28344_28385[(2)] = null);

(statearr_28344_28385[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (33))){
var inst_28321 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28345_28386 = state_28335__$1;
(statearr_28345_28386[(2)] = inst_28321);

(statearr_28345_28386[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (13))){
var inst_28277 = (state_28335[(2)]);
var inst_28278 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28279 = figwheel.client.format_messages.call(null,inst_28278);
var inst_28280 = figwheel.client.heads_up.display_error.call(null,inst_28279);
var state_28335__$1 = (function (){var statearr_28346 = state_28335;
(statearr_28346[(7)] = inst_28277);

return statearr_28346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(14),inst_28280);
} else {
if((state_val_28336 === (22))){
var inst_28299 = figwheel.client.heads_up.clear.call(null);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(25),inst_28299);
} else {
if((state_val_28336 === (29))){
var inst_28323 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28347_28387 = state_28335__$1;
(statearr_28347_28387[(2)] = inst_28323);

(statearr_28347_28387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (6))){
var inst_28267 = figwheel.client.heads_up.clear.call(null);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(9),inst_28267);
} else {
if((state_val_28336 === (28))){
var inst_28314 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28335__$1 = state_28335;
if(inst_28314){
var statearr_28348_28388 = state_28335__$1;
(statearr_28348_28388[(1)] = (31));

} else {
var statearr_28349_28389 = state_28335__$1;
(statearr_28349_28389[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (25))){
var inst_28301 = (state_28335[(2)]);
var inst_28302 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28303 = figwheel.client.heads_up.display_warning.call(null,inst_28302);
var state_28335__$1 = (function (){var statearr_28350 = state_28335;
(statearr_28350[(8)] = inst_28301);

return statearr_28350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(26),inst_28303);
} else {
if((state_val_28336 === (34))){
var inst_28318 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28351_28390 = state_28335__$1;
(statearr_28351_28390[(2)] = inst_28318);

(statearr_28351_28390[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (17))){
var inst_28329 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28352_28391 = state_28335__$1;
(statearr_28352_28391[(2)] = inst_28329);

(statearr_28352_28391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (3))){
var inst_28273 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28335__$1 = state_28335;
if(inst_28273){
var statearr_28353_28392 = state_28335__$1;
(statearr_28353_28392[(1)] = (10));

} else {
var statearr_28354_28393 = state_28335__$1;
(statearr_28354_28393[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (12))){
var inst_28331 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28355_28394 = state_28335__$1;
(statearr_28355_28394[(2)] = inst_28331);

(statearr_28355_28394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (2))){
var inst_28261 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28335__$1 = state_28335;
if(cljs.core.truth_(inst_28261)){
var statearr_28356_28395 = state_28335__$1;
(statearr_28356_28395[(1)] = (5));

} else {
var statearr_28357_28396 = state_28335__$1;
(statearr_28357_28396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (23))){
var inst_28307 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28335__$1 = state_28335;
if(inst_28307){
var statearr_28358_28397 = state_28335__$1;
(statearr_28358_28397[(1)] = (27));

} else {
var statearr_28359_28398 = state_28335__$1;
(statearr_28359_28398[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (19))){
var inst_28294 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28295 = figwheel.client.heads_up.append_message.call(null,inst_28294);
var state_28335__$1 = state_28335;
var statearr_28360_28399 = state_28335__$1;
(statearr_28360_28399[(2)] = inst_28295);

(statearr_28360_28399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (11))){
var inst_28284 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28335__$1 = state_28335;
if(inst_28284){
var statearr_28361_28400 = state_28335__$1;
(statearr_28361_28400[(1)] = (15));

} else {
var statearr_28362_28401 = state_28335__$1;
(statearr_28362_28401[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (9))){
var inst_28269 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28363_28402 = state_28335__$1;
(statearr_28363_28402[(2)] = inst_28269);

(statearr_28363_28402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (5))){
var inst_28263 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(8),inst_28263);
} else {
if((state_val_28336 === (14))){
var inst_28282 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28364_28403 = state_28335__$1;
(statearr_28364_28403[(2)] = inst_28282);

(statearr_28364_28403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (26))){
var inst_28305 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28365_28404 = state_28335__$1;
(statearr_28365_28404[(2)] = inst_28305);

(statearr_28365_28404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (16))){
var inst_28292 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28335__$1 = state_28335;
if(inst_28292){
var statearr_28366_28405 = state_28335__$1;
(statearr_28366_28405[(1)] = (19));

} else {
var statearr_28367_28406 = state_28335__$1;
(statearr_28367_28406[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (30))){
var inst_28312 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28368_28407 = state_28335__$1;
(statearr_28368_28407[(2)] = inst_28312);

(statearr_28368_28407[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (10))){
var inst_28275 = figwheel.client.heads_up.clear.call(null);
var state_28335__$1 = state_28335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,(13),inst_28275);
} else {
if((state_val_28336 === (18))){
var inst_28290 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28369_28408 = state_28335__$1;
(statearr_28369_28408[(2)] = inst_28290);

(statearr_28369_28408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28336 === (8))){
var inst_28265 = (state_28335[(2)]);
var state_28335__$1 = state_28335;
var statearr_28370_28409 = state_28335__$1;
(statearr_28370_28409[(2)] = inst_28265);

(statearr_28370_28409[(1)] = (7));


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
});})(c__19828__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19772__auto__,c__19828__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto____0 = (function (){
var statearr_28374 = [null,null,null,null,null,null,null,null,null];
(statearr_28374[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto__);

(statearr_28374[(1)] = (1));

return statearr_28374;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto____1 = (function (state_28335){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_28335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e28375){if((e28375 instanceof Object)){
var ex__19776__auto__ = e28375;
var statearr_28376_28410 = state_28335;
(statearr_28376_28410[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28411 = state_28335;
state_28335 = G__28411;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto__ = function(state_28335){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto____1.call(this,state_28335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__,msg_hist,msg_names,msg))
})();
var state__19830__auto__ = (function (){var statearr_28377 = f__19829__auto__.call(null);
(statearr_28377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_28377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__,msg_hist,msg_names,msg))
);

return c__19828__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19828__auto___28474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___28474,ch){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___28474,ch){
return (function (state_28457){
var state_val_28458 = (state_28457[(1)]);
if((state_val_28458 === (8))){
var inst_28449 = (state_28457[(2)]);
var state_28457__$1 = (function (){var statearr_28459 = state_28457;
(statearr_28459[(7)] = inst_28449);

return statearr_28459;
})();
var statearr_28460_28475 = state_28457__$1;
(statearr_28460_28475[(2)] = null);

(statearr_28460_28475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (7))){
var inst_28453 = (state_28457[(2)]);
var state_28457__$1 = state_28457;
var statearr_28461_28476 = state_28457__$1;
(statearr_28461_28476[(2)] = inst_28453);

(statearr_28461_28476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (6))){
var state_28457__$1 = state_28457;
var statearr_28462_28477 = state_28457__$1;
(statearr_28462_28477[(2)] = null);

(statearr_28462_28477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (5))){
var inst_28445 = (state_28457[(8)]);
var inst_28447 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28445);
var state_28457__$1 = state_28457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28457__$1,(8),inst_28447);
} else {
if((state_val_28458 === (4))){
var inst_28445 = (state_28457[(8)]);
var inst_28445__$1 = (state_28457[(2)]);
var state_28457__$1 = (function (){var statearr_28463 = state_28457;
(statearr_28463[(8)] = inst_28445__$1);

return statearr_28463;
})();
if(cljs.core.truth_(inst_28445__$1)){
var statearr_28464_28478 = state_28457__$1;
(statearr_28464_28478[(1)] = (5));

} else {
var statearr_28465_28479 = state_28457__$1;
(statearr_28465_28479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (3))){
var inst_28455 = (state_28457[(2)]);
var state_28457__$1 = state_28457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28457__$1,inst_28455);
} else {
if((state_val_28458 === (2))){
var state_28457__$1 = state_28457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28457__$1,(4),ch);
} else {
if((state_val_28458 === (1))){
var state_28457__$1 = state_28457;
var statearr_28466_28480 = state_28457__$1;
(statearr_28466_28480[(2)] = null);

(statearr_28466_28480[(1)] = (2));


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
});})(c__19828__auto___28474,ch))
;
return ((function (switch__19772__auto__,c__19828__auto___28474,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19773__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19773__auto____0 = (function (){
var statearr_28470 = [null,null,null,null,null,null,null,null,null];
(statearr_28470[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19773__auto__);

(statearr_28470[(1)] = (1));

return statearr_28470;
});
var figwheel$client$heads_up_plugin_$_state_machine__19773__auto____1 = (function (state_28457){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_28457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e28471){if((e28471 instanceof Object)){
var ex__19776__auto__ = e28471;
var statearr_28472_28481 = state_28457;
(statearr_28472_28481[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28482 = state_28457;
state_28457 = G__28482;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19773__auto__ = function(state_28457){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19773__auto____1.call(this,state_28457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19773__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19773__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___28474,ch))
})();
var state__19830__auto__ = (function (){var statearr_28473 = f__19829__auto__.call(null);
(statearr_28473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___28474);

return statearr_28473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___28474,ch))
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
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__){
return (function (state_28503){
var state_val_28504 = (state_28503[(1)]);
if((state_val_28504 === (2))){
var inst_28500 = (state_28503[(2)]);
var inst_28501 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28503__$1 = (function (){var statearr_28505 = state_28503;
(statearr_28505[(7)] = inst_28500);

return statearr_28505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28503__$1,inst_28501);
} else {
if((state_val_28504 === (1))){
var inst_28498 = cljs.core.async.timeout.call(null,(3000));
var state_28503__$1 = state_28503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28503__$1,(2),inst_28498);
} else {
return null;
}
}
});})(c__19828__auto__))
;
return ((function (switch__19772__auto__,c__19828__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19773__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19773__auto____0 = (function (){
var statearr_28509 = [null,null,null,null,null,null,null,null];
(statearr_28509[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19773__auto__);

(statearr_28509[(1)] = (1));

return statearr_28509;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19773__auto____1 = (function (state_28503){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_28503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e28510){if((e28510 instanceof Object)){
var ex__19776__auto__ = e28510;
var statearr_28511_28513 = state_28503;
(statearr_28511_28513[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28514 = state_28503;
state_28503 = G__28514;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19773__auto__ = function(state_28503){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19773__auto____1.call(this,state_28503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19773__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19773__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__))
})();
var state__19830__auto__ = (function (){var statearr_28512 = f__19829__auto__.call(null);
(statearr_28512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_28512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__))
);

return c__19828__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__17634__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__17634__auto__)){
return ("CustomEvent" in window);
} else {
return and__17634__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28518 = {"detail":url};
return obj28518;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28519){
var map__28525 = p__28519;
var map__28525__$1 = ((cljs.core.seq_QMARK_.call(null,map__28525))?cljs.core.apply.call(null,cljs.core.hash_map,map__28525):map__28525);
var ed = map__28525__$1;
var exception_data = cljs.core.get.call(null,map__28525__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28525__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28526_28530 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28527_28531 = null;
var count__28528_28532 = (0);
var i__28529_28533 = (0);
while(true){
if((i__28529_28533 < count__28528_28532)){
var msg_28534 = cljs.core._nth.call(null,chunk__28527_28531,i__28529_28533);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28534);

var G__28535 = seq__28526_28530;
var G__28536 = chunk__28527_28531;
var G__28537 = count__28528_28532;
var G__28538 = (i__28529_28533 + (1));
seq__28526_28530 = G__28535;
chunk__28527_28531 = G__28536;
count__28528_28532 = G__28537;
i__28529_28533 = G__28538;
continue;
} else {
var temp__4126__auto___28539 = cljs.core.seq.call(null,seq__28526_28530);
if(temp__4126__auto___28539){
var seq__28526_28540__$1 = temp__4126__auto___28539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28526_28540__$1)){
var c__18431__auto___28541 = cljs.core.chunk_first.call(null,seq__28526_28540__$1);
var G__28542 = cljs.core.chunk_rest.call(null,seq__28526_28540__$1);
var G__28543 = c__18431__auto___28541;
var G__28544 = cljs.core.count.call(null,c__18431__auto___28541);
var G__28545 = (0);
seq__28526_28530 = G__28542;
chunk__28527_28531 = G__28543;
count__28528_28532 = G__28544;
i__28529_28533 = G__28545;
continue;
} else {
var msg_28546 = cljs.core.first.call(null,seq__28526_28540__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28546);

var G__28547 = cljs.core.next.call(null,seq__28526_28540__$1);
var G__28548 = null;
var G__28549 = (0);
var G__28550 = (0);
seq__28526_28530 = G__28547;
chunk__28527_28531 = G__28548;
count__28528_28532 = G__28549;
i__28529_28533 = G__28550;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28551){
var map__28553 = p__28551;
var map__28553__$1 = ((cljs.core.seq_QMARK_.call(null,map__28553))?cljs.core.apply.call(null,cljs.core.hash_map,map__28553):map__28553);
var w = map__28553__$1;
var message = cljs.core.get.call(null,map__28553__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__17634__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17634__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17634__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28560 = cljs.core.seq.call(null,plugins);
var chunk__28561 = null;
var count__28562 = (0);
var i__28563 = (0);
while(true){
if((i__28563 < count__28562)){
var vec__28564 = cljs.core._nth.call(null,chunk__28561,i__28563);
var k = cljs.core.nth.call(null,vec__28564,(0),null);
var plugin = cljs.core.nth.call(null,vec__28564,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28566 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28560,chunk__28561,count__28562,i__28563,pl_28566,vec__28564,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28566.call(null,msg_hist);
});})(seq__28560,chunk__28561,count__28562,i__28563,pl_28566,vec__28564,k,plugin))
);
} else {
}

var G__28567 = seq__28560;
var G__28568 = chunk__28561;
var G__28569 = count__28562;
var G__28570 = (i__28563 + (1));
seq__28560 = G__28567;
chunk__28561 = G__28568;
count__28562 = G__28569;
i__28563 = G__28570;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28560);
if(temp__4126__auto__){
var seq__28560__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28560__$1)){
var c__18431__auto__ = cljs.core.chunk_first.call(null,seq__28560__$1);
var G__28571 = cljs.core.chunk_rest.call(null,seq__28560__$1);
var G__28572 = c__18431__auto__;
var G__28573 = cljs.core.count.call(null,c__18431__auto__);
var G__28574 = (0);
seq__28560 = G__28571;
chunk__28561 = G__28572;
count__28562 = G__28573;
i__28563 = G__28574;
continue;
} else {
var vec__28565 = cljs.core.first.call(null,seq__28560__$1);
var k = cljs.core.nth.call(null,vec__28565,(0),null);
var plugin = cljs.core.nth.call(null,vec__28565,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28575 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28560,chunk__28561,count__28562,i__28563,pl_28575,vec__28565,k,plugin,seq__28560__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28575.call(null,msg_hist);
});})(seq__28560,chunk__28561,count__28562,i__28563,pl_28575,vec__28565,k,plugin,seq__28560__$1,temp__4126__auto__))
);
} else {
}

var G__28576 = cljs.core.next.call(null,seq__28560__$1);
var G__28577 = null;
var G__28578 = (0);
var G__28579 = (0);
seq__28560 = G__28576;
chunk__28561 = G__28577;
count__28562 = G__28578;
i__28563 = G__28579;
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
var figwheel$client$watch_and_reload__delegate = function (p__28580){
var map__28582 = p__28580;
var map__28582__$1 = ((cljs.core.seq_QMARK_.call(null,map__28582))?cljs.core.apply.call(null,cljs.core.hash_map,map__28582):map__28582);
var opts = map__28582__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__28580 = null;
if (arguments.length > 0) {
var G__28583__i = 0, G__28583__a = new Array(arguments.length -  0);
while (G__28583__i < G__28583__a.length) {G__28583__a[G__28583__i] = arguments[G__28583__i + 0]; ++G__28583__i;}
  p__28580 = new cljs.core.IndexedSeq(G__28583__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__28580);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__28584){
var p__28580 = cljs.core.seq(arglist__28584);
return figwheel$client$watch_and_reload__delegate(p__28580);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map