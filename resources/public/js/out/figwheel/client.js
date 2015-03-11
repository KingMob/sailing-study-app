// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
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
var G__27883__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27884__i = 0, G__27884__a = new Array(arguments.length -  0);
while (G__27884__i < G__27884__a.length) {G__27884__a[G__27884__i] = arguments[G__27884__i + 0]; ++G__27884__i;}
  args = new cljs.core.IndexedSeq(G__27884__a,0);
} 
return G__27883__delegate.call(this,args);};
G__27883.cljs$lang$maxFixedArity = 0;
G__27883.cljs$lang$applyTo = (function (arglist__27885){
var args = cljs.core.seq(arglist__27885);
return G__27883__delegate(args);
});
G__27883.cljs$core$IFn$_invoke$arity$variadic = G__27883__delegate;
return G__27883;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27886){
var map__27888 = p__27886;
var map__27888__$1 = ((cljs.core.seq_QMARK_.call(null,map__27888))?cljs.core.apply.call(null,cljs.core.hash_map,map__27888):map__27888);
var class$ = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17594__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17582__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17582__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17582__auto__;
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
var c__19775__auto___28017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___28017,ch){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___28017,ch){
return (function (state_27991){
var state_val_27992 = (state_27991[(1)]);
if((state_val_27992 === (7))){
var inst_27987 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
var statearr_27993_28018 = state_27991__$1;
(statearr_27993_28018[(2)] = inst_27987);

(statearr_27993_28018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (1))){
var state_27991__$1 = state_27991;
var statearr_27994_28019 = state_27991__$1;
(statearr_27994_28019[(2)] = null);

(statearr_27994_28019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (4))){
var inst_27955 = (state_27991[(7)]);
var inst_27955__$1 = (state_27991[(2)]);
var state_27991__$1 = (function (){var statearr_27995 = state_27991;
(statearr_27995[(7)] = inst_27955__$1);

return statearr_27995;
})();
if(cljs.core.truth_(inst_27955__$1)){
var statearr_27996_28020 = state_27991__$1;
(statearr_27996_28020[(1)] = (5));

} else {
var statearr_27997_28021 = state_27991__$1;
(statearr_27997_28021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (13))){
var state_27991__$1 = state_27991;
var statearr_27998_28022 = state_27991__$1;
(statearr_27998_28022[(2)] = null);

(statearr_27998_28022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (6))){
var state_27991__$1 = state_27991;
var statearr_27999_28023 = state_27991__$1;
(statearr_27999_28023[(2)] = null);

(statearr_27999_28023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (3))){
var inst_27989 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27991__$1,inst_27989);
} else {
if((state_val_27992 === (12))){
var inst_27962 = (state_27991[(8)]);
var inst_27975 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27962);
var inst_27976 = cljs.core.first.call(null,inst_27975);
var inst_27977 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27976);
var inst_27978 = console.warn("Figwheel: Not loading code with warnings - ",inst_27977);
var state_27991__$1 = state_27991;
var statearr_28000_28024 = state_27991__$1;
(statearr_28000_28024[(2)] = inst_27978);

(statearr_28000_28024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (2))){
var state_27991__$1 = state_27991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27991__$1,(4),ch);
} else {
if((state_val_27992 === (11))){
var inst_27971 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
var statearr_28001_28025 = state_27991__$1;
(statearr_28001_28025[(2)] = inst_27971);

(statearr_28001_28025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (9))){
var inst_27961 = (state_27991[(9)]);
var inst_27973 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27961,opts);
var state_27991__$1 = state_27991;
if(inst_27973){
var statearr_28002_28026 = state_27991__$1;
(statearr_28002_28026[(1)] = (12));

} else {
var statearr_28003_28027 = state_27991__$1;
(statearr_28003_28027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (5))){
var inst_27955 = (state_27991[(7)]);
var inst_27961 = (state_27991[(9)]);
var inst_27957 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27958 = (new cljs.core.PersistentArrayMap(null,2,inst_27957,null));
var inst_27959 = (new cljs.core.PersistentHashSet(null,inst_27958,null));
var inst_27960 = figwheel.client.focus_msgs.call(null,inst_27959,inst_27955);
var inst_27961__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27960);
var inst_27962 = cljs.core.first.call(null,inst_27960);
var inst_27963 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27961__$1,opts);
var state_27991__$1 = (function (){var statearr_28004 = state_27991;
(statearr_28004[(9)] = inst_27961__$1);

(statearr_28004[(8)] = inst_27962);

return statearr_28004;
})();
if(cljs.core.truth_(inst_27963)){
var statearr_28005_28028 = state_27991__$1;
(statearr_28005_28028[(1)] = (8));

} else {
var statearr_28006_28029 = state_27991__$1;
(statearr_28006_28029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (14))){
var inst_27981 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
var statearr_28007_28030 = state_27991__$1;
(statearr_28007_28030[(2)] = inst_27981);

(statearr_28007_28030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (10))){
var inst_27983 = (state_27991[(2)]);
var state_27991__$1 = (function (){var statearr_28008 = state_27991;
(statearr_28008[(10)] = inst_27983);

return statearr_28008;
})();
var statearr_28009_28031 = state_27991__$1;
(statearr_28009_28031[(2)] = null);

(statearr_28009_28031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (8))){
var inst_27962 = (state_27991[(8)]);
var inst_27965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27966 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27962);
var inst_27967 = cljs.core.async.timeout.call(null,(1000));
var inst_27968 = [inst_27966,inst_27967];
var inst_27969 = (new cljs.core.PersistentVector(null,2,(5),inst_27965,inst_27968,null));
var state_27991__$1 = state_27991;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27991__$1,(11),inst_27969);
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
});})(c__19775__auto___28017,ch))
;
return ((function (switch__19719__auto__,c__19775__auto___28017,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19720__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19720__auto____0 = (function (){
var statearr_28013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28013[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19720__auto__);

(statearr_28013[(1)] = (1));

return statearr_28013;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19720__auto____1 = (function (state_27991){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_27991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e28014){if((e28014 instanceof Object)){
var ex__19723__auto__ = e28014;
var statearr_28015_28032 = state_27991;
(statearr_28015_28032[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28033 = state_27991;
state_27991 = G__28033;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19720__auto__ = function(state_27991){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19720__auto____1.call(this,state_27991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19720__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19720__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___28017,ch))
})();
var state__19777__auto__ = (function (){var statearr_28016 = f__19776__auto__.call(null);
(statearr_28016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___28017);

return statearr_28016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___28017,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28034_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28034_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28043 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__28036_SHARP_,p2__28035_SHARP_){
return [cljs.core.str(p2__28035_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28043){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28041 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28042 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28041,_STAR_print_newline_STAR_28042,base_path_28043){
return (function() { 
var G__28044__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28045__i = 0, G__28045__a = new Array(arguments.length -  0);
while (G__28045__i < G__28045__a.length) {G__28045__a[G__28045__i] = arguments[G__28045__i + 0]; ++G__28045__i;}
  args = new cljs.core.IndexedSeq(G__28045__a,0);
} 
return G__28044__delegate.call(this,args);};
G__28044.cljs$lang$maxFixedArity = 0;
G__28044.cljs$lang$applyTo = (function (arglist__28046){
var args = cljs.core.seq(arglist__28046);
return G__28044__delegate(args);
});
G__28044.cljs$core$IFn$_invoke$arity$variadic = G__28044__delegate;
return G__28044;
})()
;})(_STAR_print_fn_STAR_28041,_STAR_print_newline_STAR_28042,base_path_28043))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28042;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28041;
}}catch (e28040){if((e28040 instanceof Error)){
var e = e28040;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28043], null));
} else {
var e = e28040;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28043))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28047){
var map__28052 = p__28047;
var map__28052__$1 = ((cljs.core.seq_QMARK_.call(null,map__28052))?cljs.core.apply.call(null,cljs.core.hash_map,map__28052):map__28052);
var opts = map__28052__$1;
var build_id = cljs.core.get.call(null,map__28052__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28052,map__28052__$1,opts,build_id){
return (function (p__28053){
var vec__28054 = p__28053;
var map__28055 = cljs.core.nth.call(null,vec__28054,(0),null);
var map__28055__$1 = ((cljs.core.seq_QMARK_.call(null,map__28055))?cljs.core.apply.call(null,cljs.core.hash_map,map__28055):map__28055);
var msg = map__28055__$1;
var msg_name = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28054,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28054,map__28055,map__28055__$1,msg,msg_name,_,map__28052,map__28052__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28054,map__28055,map__28055__$1,msg,msg_name,_,map__28052,map__28052__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28052,map__28052__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28059){
var vec__28060 = p__28059;
var map__28061 = cljs.core.nth.call(null,vec__28060,(0),null);
var map__28061__$1 = ((cljs.core.seq_QMARK_.call(null,map__28061))?cljs.core.apply.call(null,cljs.core.hash_map,map__28061):map__28061);
var msg = map__28061__$1;
var msg_name = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28060,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28062){
var map__28070 = p__28062;
var map__28070__$1 = ((cljs.core.seq_QMARK_.call(null,map__28070))?cljs.core.apply.call(null,cljs.core.hash_map,map__28070):map__28070);
var on_compile_fail = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28070,map__28070__$1,on_compile_fail,on_compile_warning){
return (function (p__28071){
var vec__28072 = p__28071;
var map__28073 = cljs.core.nth.call(null,vec__28072,(0),null);
var map__28073__$1 = ((cljs.core.seq_QMARK_.call(null,map__28073))?cljs.core.apply.call(null,cljs.core.hash_map,map__28073):map__28073);
var msg = map__28073__$1;
var msg_name = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28072,(1));
var pred__28074 = cljs.core._EQ_;
var expr__28075 = msg_name;
if(cljs.core.truth_(pred__28074.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28075))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28074.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28075))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28070,map__28070__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__,msg_hist,msg_names,msg){
return (function (state_28272){
var state_val_28273 = (state_28272[(1)]);
if((state_val_28273 === (7))){
var inst_28208 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28274_28315 = state_28272__$1;
(statearr_28274_28315[(2)] = inst_28208);

(statearr_28274_28315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (20))){
var inst_28234 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28272__$1 = state_28272;
if(inst_28234){
var statearr_28275_28316 = state_28272__$1;
(statearr_28275_28316[(1)] = (22));

} else {
var statearr_28276_28317 = state_28272__$1;
(statearr_28276_28317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (27))){
var inst_28246 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28247 = figwheel.client.heads_up.display_warning.call(null,inst_28246);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(30),inst_28247);
} else {
if((state_val_28273 === (1))){
var inst_28196 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28272__$1 = state_28272;
if(cljs.core.truth_(inst_28196)){
var statearr_28277_28318 = state_28272__$1;
(statearr_28277_28318[(1)] = (2));

} else {
var statearr_28278_28319 = state_28272__$1;
(statearr_28278_28319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (24))){
var inst_28262 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28279_28320 = state_28272__$1;
(statearr_28279_28320[(2)] = inst_28262);

(statearr_28279_28320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (4))){
var inst_28270 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28272__$1,inst_28270);
} else {
if((state_val_28273 === (15))){
var inst_28223 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28224 = figwheel.client.format_messages.call(null,inst_28223);
var inst_28225 = figwheel.client.heads_up.display_error.call(null,inst_28224);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(18),inst_28225);
} else {
if((state_val_28273 === (21))){
var inst_28264 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28280_28321 = state_28272__$1;
(statearr_28280_28321[(2)] = inst_28264);

(statearr_28280_28321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (31))){
var inst_28253 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(34),inst_28253);
} else {
if((state_val_28273 === (32))){
var state_28272__$1 = state_28272;
var statearr_28281_28322 = state_28272__$1;
(statearr_28281_28322[(2)] = null);

(statearr_28281_28322[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (33))){
var inst_28258 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28282_28323 = state_28272__$1;
(statearr_28282_28323[(2)] = inst_28258);

(statearr_28282_28323[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (13))){
var inst_28214 = (state_28272[(2)]);
var inst_28215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28216 = figwheel.client.format_messages.call(null,inst_28215);
var inst_28217 = figwheel.client.heads_up.display_error.call(null,inst_28216);
var state_28272__$1 = (function (){var statearr_28283 = state_28272;
(statearr_28283[(7)] = inst_28214);

return statearr_28283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(14),inst_28217);
} else {
if((state_val_28273 === (22))){
var inst_28236 = figwheel.client.heads_up.clear.call(null);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(25),inst_28236);
} else {
if((state_val_28273 === (29))){
var inst_28260 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28284_28324 = state_28272__$1;
(statearr_28284_28324[(2)] = inst_28260);

(statearr_28284_28324[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (6))){
var inst_28204 = figwheel.client.heads_up.clear.call(null);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(9),inst_28204);
} else {
if((state_val_28273 === (28))){
var inst_28251 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28272__$1 = state_28272;
if(inst_28251){
var statearr_28285_28325 = state_28272__$1;
(statearr_28285_28325[(1)] = (31));

} else {
var statearr_28286_28326 = state_28272__$1;
(statearr_28286_28326[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (25))){
var inst_28238 = (state_28272[(2)]);
var inst_28239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28240 = figwheel.client.heads_up.display_warning.call(null,inst_28239);
var state_28272__$1 = (function (){var statearr_28287 = state_28272;
(statearr_28287[(8)] = inst_28238);

return statearr_28287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(26),inst_28240);
} else {
if((state_val_28273 === (34))){
var inst_28255 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28288_28327 = state_28272__$1;
(statearr_28288_28327[(2)] = inst_28255);

(statearr_28288_28327[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (17))){
var inst_28266 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28289_28328 = state_28272__$1;
(statearr_28289_28328[(2)] = inst_28266);

(statearr_28289_28328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (3))){
var inst_28210 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28272__$1 = state_28272;
if(inst_28210){
var statearr_28290_28329 = state_28272__$1;
(statearr_28290_28329[(1)] = (10));

} else {
var statearr_28291_28330 = state_28272__$1;
(statearr_28291_28330[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (12))){
var inst_28268 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28292_28331 = state_28272__$1;
(statearr_28292_28331[(2)] = inst_28268);

(statearr_28292_28331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (2))){
var inst_28198 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28272__$1 = state_28272;
if(cljs.core.truth_(inst_28198)){
var statearr_28293_28332 = state_28272__$1;
(statearr_28293_28332[(1)] = (5));

} else {
var statearr_28294_28333 = state_28272__$1;
(statearr_28294_28333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (23))){
var inst_28244 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28272__$1 = state_28272;
if(inst_28244){
var statearr_28295_28334 = state_28272__$1;
(statearr_28295_28334[(1)] = (27));

} else {
var statearr_28296_28335 = state_28272__$1;
(statearr_28296_28335[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (19))){
var inst_28231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28232 = figwheel.client.heads_up.append_message.call(null,inst_28231);
var state_28272__$1 = state_28272;
var statearr_28297_28336 = state_28272__$1;
(statearr_28297_28336[(2)] = inst_28232);

(statearr_28297_28336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (11))){
var inst_28221 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28272__$1 = state_28272;
if(inst_28221){
var statearr_28298_28337 = state_28272__$1;
(statearr_28298_28337[(1)] = (15));

} else {
var statearr_28299_28338 = state_28272__$1;
(statearr_28299_28338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (9))){
var inst_28206 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28300_28339 = state_28272__$1;
(statearr_28300_28339[(2)] = inst_28206);

(statearr_28300_28339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (5))){
var inst_28200 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(8),inst_28200);
} else {
if((state_val_28273 === (14))){
var inst_28219 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28301_28340 = state_28272__$1;
(statearr_28301_28340[(2)] = inst_28219);

(statearr_28301_28340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (26))){
var inst_28242 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28302_28341 = state_28272__$1;
(statearr_28302_28341[(2)] = inst_28242);

(statearr_28302_28341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (16))){
var inst_28229 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28272__$1 = state_28272;
if(inst_28229){
var statearr_28303_28342 = state_28272__$1;
(statearr_28303_28342[(1)] = (19));

} else {
var statearr_28304_28343 = state_28272__$1;
(statearr_28304_28343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (30))){
var inst_28249 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28305_28344 = state_28272__$1;
(statearr_28305_28344[(2)] = inst_28249);

(statearr_28305_28344[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (10))){
var inst_28212 = figwheel.client.heads_up.clear.call(null);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(13),inst_28212);
} else {
if((state_val_28273 === (18))){
var inst_28227 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28306_28345 = state_28272__$1;
(statearr_28306_28345[(2)] = inst_28227);

(statearr_28306_28345[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (8))){
var inst_28202 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28307_28346 = state_28272__$1;
(statearr_28307_28346[(2)] = inst_28202);

(statearr_28307_28346[(1)] = (7));


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
});})(c__19775__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19719__auto__,c__19775__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto____0 = (function (){
var statearr_28311 = [null,null,null,null,null,null,null,null,null];
(statearr_28311[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto__);

(statearr_28311[(1)] = (1));

return statearr_28311;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto____1 = (function (state_28272){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_28272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e28312){if((e28312 instanceof Object)){
var ex__19723__auto__ = e28312;
var statearr_28313_28347 = state_28272;
(statearr_28313_28347[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28348 = state_28272;
state_28272 = G__28348;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto__ = function(state_28272){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto____1.call(this,state_28272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__,msg_hist,msg_names,msg))
})();
var state__19777__auto__ = (function (){var statearr_28314 = f__19776__auto__.call(null);
(statearr_28314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_28314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__,msg_hist,msg_names,msg))
);

return c__19775__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19775__auto___28411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___28411,ch){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___28411,ch){
return (function (state_28394){
var state_val_28395 = (state_28394[(1)]);
if((state_val_28395 === (8))){
var inst_28386 = (state_28394[(2)]);
var state_28394__$1 = (function (){var statearr_28396 = state_28394;
(statearr_28396[(7)] = inst_28386);

return statearr_28396;
})();
var statearr_28397_28412 = state_28394__$1;
(statearr_28397_28412[(2)] = null);

(statearr_28397_28412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (7))){
var inst_28390 = (state_28394[(2)]);
var state_28394__$1 = state_28394;
var statearr_28398_28413 = state_28394__$1;
(statearr_28398_28413[(2)] = inst_28390);

(statearr_28398_28413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (6))){
var state_28394__$1 = state_28394;
var statearr_28399_28414 = state_28394__$1;
(statearr_28399_28414[(2)] = null);

(statearr_28399_28414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (5))){
var inst_28382 = (state_28394[(8)]);
var inst_28384 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28382);
var state_28394__$1 = state_28394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28394__$1,(8),inst_28384);
} else {
if((state_val_28395 === (4))){
var inst_28382 = (state_28394[(8)]);
var inst_28382__$1 = (state_28394[(2)]);
var state_28394__$1 = (function (){var statearr_28400 = state_28394;
(statearr_28400[(8)] = inst_28382__$1);

return statearr_28400;
})();
if(cljs.core.truth_(inst_28382__$1)){
var statearr_28401_28415 = state_28394__$1;
(statearr_28401_28415[(1)] = (5));

} else {
var statearr_28402_28416 = state_28394__$1;
(statearr_28402_28416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (3))){
var inst_28392 = (state_28394[(2)]);
var state_28394__$1 = state_28394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28394__$1,inst_28392);
} else {
if((state_val_28395 === (2))){
var state_28394__$1 = state_28394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28394__$1,(4),ch);
} else {
if((state_val_28395 === (1))){
var state_28394__$1 = state_28394;
var statearr_28403_28417 = state_28394__$1;
(statearr_28403_28417[(2)] = null);

(statearr_28403_28417[(1)] = (2));


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
});})(c__19775__auto___28411,ch))
;
return ((function (switch__19719__auto__,c__19775__auto___28411,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19720__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19720__auto____0 = (function (){
var statearr_28407 = [null,null,null,null,null,null,null,null,null];
(statearr_28407[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19720__auto__);

(statearr_28407[(1)] = (1));

return statearr_28407;
});
var figwheel$client$heads_up_plugin_$_state_machine__19720__auto____1 = (function (state_28394){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_28394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e28408){if((e28408 instanceof Object)){
var ex__19723__auto__ = e28408;
var statearr_28409_28418 = state_28394;
(statearr_28409_28418[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28419 = state_28394;
state_28394 = G__28419;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19720__auto__ = function(state_28394){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19720__auto____1.call(this,state_28394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19720__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19720__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___28411,ch))
})();
var state__19777__auto__ = (function (){var statearr_28410 = f__19776__auto__.call(null);
(statearr_28410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___28411);

return statearr_28410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___28411,ch))
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
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__){
return (function (state_28440){
var state_val_28441 = (state_28440[(1)]);
if((state_val_28441 === (2))){
var inst_28437 = (state_28440[(2)]);
var inst_28438 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28440__$1 = (function (){var statearr_28442 = state_28440;
(statearr_28442[(7)] = inst_28437);

return statearr_28442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28440__$1,inst_28438);
} else {
if((state_val_28441 === (1))){
var inst_28435 = cljs.core.async.timeout.call(null,(3000));
var state_28440__$1 = state_28440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28440__$1,(2),inst_28435);
} else {
return null;
}
}
});})(c__19775__auto__))
;
return ((function (switch__19719__auto__,c__19775__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19720__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19720__auto____0 = (function (){
var statearr_28446 = [null,null,null,null,null,null,null,null];
(statearr_28446[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19720__auto__);

(statearr_28446[(1)] = (1));

return statearr_28446;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19720__auto____1 = (function (state_28440){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_28440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e28447){if((e28447 instanceof Object)){
var ex__19723__auto__ = e28447;
var statearr_28448_28450 = state_28440;
(statearr_28448_28450[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28451 = state_28440;
state_28440 = G__28451;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19720__auto__ = function(state_28440){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19720__auto____1.call(this,state_28440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19720__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19720__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__))
})();
var state__19777__auto__ = (function (){var statearr_28449 = f__19776__auto__.call(null);
(statearr_28449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_28449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__))
);

return c__19775__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__17582__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__17582__auto__)){
return ("CustomEvent" in window);
} else {
return and__17582__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28455 = {"detail":url};
return obj28455;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28456){
var map__28462 = p__28456;
var map__28462__$1 = ((cljs.core.seq_QMARK_.call(null,map__28462))?cljs.core.apply.call(null,cljs.core.hash_map,map__28462):map__28462);
var ed = map__28462__$1;
var exception_data = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28463_28467 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28464_28468 = null;
var count__28465_28469 = (0);
var i__28466_28470 = (0);
while(true){
if((i__28466_28470 < count__28465_28469)){
var msg_28471 = cljs.core._nth.call(null,chunk__28464_28468,i__28466_28470);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28471);

var G__28472 = seq__28463_28467;
var G__28473 = chunk__28464_28468;
var G__28474 = count__28465_28469;
var G__28475 = (i__28466_28470 + (1));
seq__28463_28467 = G__28472;
chunk__28464_28468 = G__28473;
count__28465_28469 = G__28474;
i__28466_28470 = G__28475;
continue;
} else {
var temp__4126__auto___28476 = cljs.core.seq.call(null,seq__28463_28467);
if(temp__4126__auto___28476){
var seq__28463_28477__$1 = temp__4126__auto___28476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28463_28477__$1)){
var c__18381__auto___28478 = cljs.core.chunk_first.call(null,seq__28463_28477__$1);
var G__28479 = cljs.core.chunk_rest.call(null,seq__28463_28477__$1);
var G__28480 = c__18381__auto___28478;
var G__28481 = cljs.core.count.call(null,c__18381__auto___28478);
var G__28482 = (0);
seq__28463_28467 = G__28479;
chunk__28464_28468 = G__28480;
count__28465_28469 = G__28481;
i__28466_28470 = G__28482;
continue;
} else {
var msg_28483 = cljs.core.first.call(null,seq__28463_28477__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28483);

var G__28484 = cljs.core.next.call(null,seq__28463_28477__$1);
var G__28485 = null;
var G__28486 = (0);
var G__28487 = (0);
seq__28463_28467 = G__28484;
chunk__28464_28468 = G__28485;
count__28465_28469 = G__28486;
i__28466_28470 = G__28487;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28488){
var map__28490 = p__28488;
var map__28490__$1 = ((cljs.core.seq_QMARK_.call(null,map__28490))?cljs.core.apply.call(null,cljs.core.hash_map,map__28490):map__28490);
var w = map__28490__$1;
var message = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__17582__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17582__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17582__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28497 = cljs.core.seq.call(null,plugins);
var chunk__28498 = null;
var count__28499 = (0);
var i__28500 = (0);
while(true){
if((i__28500 < count__28499)){
var vec__28501 = cljs.core._nth.call(null,chunk__28498,i__28500);
var k = cljs.core.nth.call(null,vec__28501,(0),null);
var plugin = cljs.core.nth.call(null,vec__28501,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28503 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28497,chunk__28498,count__28499,i__28500,pl_28503,vec__28501,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28503.call(null,msg_hist);
});})(seq__28497,chunk__28498,count__28499,i__28500,pl_28503,vec__28501,k,plugin))
);
} else {
}

var G__28504 = seq__28497;
var G__28505 = chunk__28498;
var G__28506 = count__28499;
var G__28507 = (i__28500 + (1));
seq__28497 = G__28504;
chunk__28498 = G__28505;
count__28499 = G__28506;
i__28500 = G__28507;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28497);
if(temp__4126__auto__){
var seq__28497__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28497__$1)){
var c__18381__auto__ = cljs.core.chunk_first.call(null,seq__28497__$1);
var G__28508 = cljs.core.chunk_rest.call(null,seq__28497__$1);
var G__28509 = c__18381__auto__;
var G__28510 = cljs.core.count.call(null,c__18381__auto__);
var G__28511 = (0);
seq__28497 = G__28508;
chunk__28498 = G__28509;
count__28499 = G__28510;
i__28500 = G__28511;
continue;
} else {
var vec__28502 = cljs.core.first.call(null,seq__28497__$1);
var k = cljs.core.nth.call(null,vec__28502,(0),null);
var plugin = cljs.core.nth.call(null,vec__28502,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28512 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28497,chunk__28498,count__28499,i__28500,pl_28512,vec__28502,k,plugin,seq__28497__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28512.call(null,msg_hist);
});})(seq__28497,chunk__28498,count__28499,i__28500,pl_28512,vec__28502,k,plugin,seq__28497__$1,temp__4126__auto__))
);
} else {
}

var G__28513 = cljs.core.next.call(null,seq__28497__$1);
var G__28514 = null;
var G__28515 = (0);
var G__28516 = (0);
seq__28497 = G__28513;
chunk__28498 = G__28514;
count__28499 = G__28515;
i__28500 = G__28516;
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
var figwheel$client$watch_and_reload__delegate = function (p__28517){
var map__28519 = p__28517;
var map__28519__$1 = ((cljs.core.seq_QMARK_.call(null,map__28519))?cljs.core.apply.call(null,cljs.core.hash_map,map__28519):map__28519);
var opts = map__28519__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__28517 = null;
if (arguments.length > 0) {
var G__28520__i = 0, G__28520__a = new Array(arguments.length -  0);
while (G__28520__i < G__28520__a.length) {G__28520__a[G__28520__i] = arguments[G__28520__i + 0]; ++G__28520__i;}
  p__28517 = new cljs.core.IndexedSeq(G__28520__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__28517);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__28521){
var p__28517 = cljs.core.seq(arglist__28521);
return figwheel$client$watch_and_reload__delegate(p__28517);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map