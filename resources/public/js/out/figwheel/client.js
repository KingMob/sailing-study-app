// Compiled by ClojureScript 0.0-2843 {:elide-asserts false}
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
var G__30124__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30125__i = 0, G__30125__a = new Array(arguments.length -  0);
while (G__30125__i < G__30125__a.length) {G__30125__a[G__30125__i] = arguments[G__30125__i + 0]; ++G__30125__i;}
  args = new cljs.core.IndexedSeq(G__30125__a,0);
} 
return G__30124__delegate.call(this,args);};
G__30124.cljs$lang$maxFixedArity = 0;
G__30124.cljs$lang$applyTo = (function (arglist__30126){
var args = cljs.core.seq(arglist__30126);
return G__30124__delegate(args);
});
G__30124.cljs$core$IFn$_invoke$arity$variadic = G__30124__delegate;
return G__30124;
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
figwheel.client.error_msg_format = (function error_msg_format(p__30127){
var map__30129 = p__30127;
var map__30129__$1 = ((cljs.core.seq_QMARK_.call(null,map__30129))?cljs.core.apply.call(null,cljs.core.hash_map,map__30129):map__30129);
var class$ = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__13323__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__13311__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__13311__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__13311__auto__;
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
var c__15967__auto___30258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___30258,ch){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___30258,ch){
return (function (state_30232){
var state_val_30233 = (state_30232[(1)]);
if((state_val_30233 === (7))){
var inst_30228 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
var statearr_30234_30259 = state_30232__$1;
(statearr_30234_30259[(2)] = inst_30228);

(statearr_30234_30259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (1))){
var state_30232__$1 = state_30232;
var statearr_30235_30260 = state_30232__$1;
(statearr_30235_30260[(2)] = null);

(statearr_30235_30260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (4))){
var inst_30196 = (state_30232[(7)]);
var inst_30196__$1 = (state_30232[(2)]);
var state_30232__$1 = (function (){var statearr_30236 = state_30232;
(statearr_30236[(7)] = inst_30196__$1);

return statearr_30236;
})();
if(cljs.core.truth_(inst_30196__$1)){
var statearr_30237_30261 = state_30232__$1;
(statearr_30237_30261[(1)] = (5));

} else {
var statearr_30238_30262 = state_30232__$1;
(statearr_30238_30262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (13))){
var state_30232__$1 = state_30232;
var statearr_30239_30263 = state_30232__$1;
(statearr_30239_30263[(2)] = null);

(statearr_30239_30263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (6))){
var state_30232__$1 = state_30232;
var statearr_30240_30264 = state_30232__$1;
(statearr_30240_30264[(2)] = null);

(statearr_30240_30264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (3))){
var inst_30230 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30232__$1,inst_30230);
} else {
if((state_val_30233 === (12))){
var inst_30203 = (state_30232[(8)]);
var inst_30216 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30203);
var inst_30217 = cljs.core.first.call(null,inst_30216);
var inst_30218 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30217);
var inst_30219 = console.warn("Figwheel: Not loading code with warnings - ",inst_30218);
var state_30232__$1 = state_30232;
var statearr_30241_30265 = state_30232__$1;
(statearr_30241_30265[(2)] = inst_30219);

(statearr_30241_30265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (2))){
var state_30232__$1 = state_30232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30232__$1,(4),ch);
} else {
if((state_val_30233 === (11))){
var inst_30212 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
var statearr_30242_30266 = state_30232__$1;
(statearr_30242_30266[(2)] = inst_30212);

(statearr_30242_30266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (9))){
var inst_30202 = (state_30232[(9)]);
var inst_30214 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30202,opts);
var state_30232__$1 = state_30232;
if(inst_30214){
var statearr_30243_30267 = state_30232__$1;
(statearr_30243_30267[(1)] = (12));

} else {
var statearr_30244_30268 = state_30232__$1;
(statearr_30244_30268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (5))){
var inst_30202 = (state_30232[(9)]);
var inst_30196 = (state_30232[(7)]);
var inst_30198 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30199 = (new cljs.core.PersistentArrayMap(null,2,inst_30198,null));
var inst_30200 = (new cljs.core.PersistentHashSet(null,inst_30199,null));
var inst_30201 = figwheel.client.focus_msgs.call(null,inst_30200,inst_30196);
var inst_30202__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30201);
var inst_30203 = cljs.core.first.call(null,inst_30201);
var inst_30204 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30202__$1,opts);
var state_30232__$1 = (function (){var statearr_30245 = state_30232;
(statearr_30245[(9)] = inst_30202__$1);

(statearr_30245[(8)] = inst_30203);

return statearr_30245;
})();
if(cljs.core.truth_(inst_30204)){
var statearr_30246_30269 = state_30232__$1;
(statearr_30246_30269[(1)] = (8));

} else {
var statearr_30247_30270 = state_30232__$1;
(statearr_30247_30270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (14))){
var inst_30222 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
var statearr_30248_30271 = state_30232__$1;
(statearr_30248_30271[(2)] = inst_30222);

(statearr_30248_30271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (10))){
var inst_30224 = (state_30232[(2)]);
var state_30232__$1 = (function (){var statearr_30249 = state_30232;
(statearr_30249[(10)] = inst_30224);

return statearr_30249;
})();
var statearr_30250_30272 = state_30232__$1;
(statearr_30250_30272[(2)] = null);

(statearr_30250_30272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (8))){
var inst_30203 = (state_30232[(8)]);
var inst_30206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30207 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30203);
var inst_30208 = cljs.core.async.timeout.call(null,(1000));
var inst_30209 = [inst_30207,inst_30208];
var inst_30210 = (new cljs.core.PersistentVector(null,2,(5),inst_30206,inst_30209,null));
var state_30232__$1 = state_30232;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30232__$1,(11),inst_30210);
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
});})(c__15967__auto___30258,ch))
;
return ((function (switch__15911__auto__,c__15967__auto___30258,ch){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_30254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30254[(0)] = state_machine__15912__auto__);

(statearr_30254[(1)] = (1));

return statearr_30254;
});
var state_machine__15912__auto____1 = (function (state_30232){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_30232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e30255){if((e30255 instanceof Object)){
var ex__15915__auto__ = e30255;
var statearr_30256_30273 = state_30232;
(statearr_30256_30273[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30274 = state_30232;
state_30232 = G__30274;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_30232){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_30232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___30258,ch))
})();
var state__15969__auto__ = (function (){var statearr_30257 = f__15968__auto__.call(null);
(statearr_30257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___30258);

return statearr_30257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___30258,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30275_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30275_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30284 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30277_SHARP_,p2__30276_SHARP_){
return [cljs.core.str(p2__30276_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30284){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30282 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30283 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30282,_STAR_print_newline_STAR_30283,base_path_30284){
return (function() { 
var G__30285__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30286__i = 0, G__30286__a = new Array(arguments.length -  0);
while (G__30286__i < G__30286__a.length) {G__30286__a[G__30286__i] = arguments[G__30286__i + 0]; ++G__30286__i;}
  args = new cljs.core.IndexedSeq(G__30286__a,0);
} 
return G__30285__delegate.call(this,args);};
G__30285.cljs$lang$maxFixedArity = 0;
G__30285.cljs$lang$applyTo = (function (arglist__30287){
var args = cljs.core.seq(arglist__30287);
return G__30285__delegate(args);
});
G__30285.cljs$core$IFn$_invoke$arity$variadic = G__30285__delegate;
return G__30285;
})()
;})(_STAR_print_fn_STAR_30282,_STAR_print_newline_STAR_30283,base_path_30284))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30283;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30282;
}}catch (e30281){if((e30281 instanceof Error)){
var e = e30281;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30284], null));
} else {
var e = e30281;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30284))
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
figwheel.client.repl_plugin = (function repl_plugin(p__30288){
var map__30293 = p__30288;
var map__30293__$1 = ((cljs.core.seq_QMARK_.call(null,map__30293))?cljs.core.apply.call(null,cljs.core.hash_map,map__30293):map__30293);
var opts = map__30293__$1;
var build_id = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30293,map__30293__$1,opts,build_id){
return (function (p__30294){
var vec__30295 = p__30294;
var map__30296 = cljs.core.nth.call(null,vec__30295,(0),null);
var map__30296__$1 = ((cljs.core.seq_QMARK_.call(null,map__30296))?cljs.core.apply.call(null,cljs.core.hash_map,map__30296):map__30296);
var msg = map__30296__$1;
var msg_name = cljs.core.get.call(null,map__30296__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30295,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30295,map__30296,map__30296__$1,msg,msg_name,_,map__30293,map__30293__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30295,map__30296,map__30296__$1,msg,msg_name,_,map__30293,map__30293__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30293,map__30293__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30300){
var vec__30301 = p__30300;
var map__30302 = cljs.core.nth.call(null,vec__30301,(0),null);
var map__30302__$1 = ((cljs.core.seq_QMARK_.call(null,map__30302))?cljs.core.apply.call(null,cljs.core.hash_map,map__30302):map__30302);
var msg = map__30302__$1;
var msg_name = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30301,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30303){
var map__30311 = p__30303;
var map__30311__$1 = ((cljs.core.seq_QMARK_.call(null,map__30311))?cljs.core.apply.call(null,cljs.core.hash_map,map__30311):map__30311);
var on_compile_fail = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30311,map__30311__$1,on_compile_fail,on_compile_warning){
return (function (p__30312){
var vec__30313 = p__30312;
var map__30314 = cljs.core.nth.call(null,vec__30313,(0),null);
var map__30314__$1 = ((cljs.core.seq_QMARK_.call(null,map__30314))?cljs.core.apply.call(null,cljs.core.hash_map,map__30314):map__30314);
var msg = map__30314__$1;
var msg_name = cljs.core.get.call(null,map__30314__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30313,(1));
var pred__30315 = cljs.core._EQ_;
var expr__30316 = msg_name;
if(cljs.core.truth_(pred__30315.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30316))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30315.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30316))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30311,map__30311__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15967__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto__,msg_hist,msg_names,msg){
return (function (state_30493){
var state_val_30494 = (state_30493[(1)]);
if((state_val_30494 === (7))){
var inst_30442 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30493__$1 = state_30493;
if(inst_30442){
var statearr_30495_30532 = state_30493__$1;
(statearr_30495_30532[(1)] = (11));

} else {
var statearr_30496_30533 = state_30493__$1;
(statearr_30496_30533[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (20))){
var inst_30483 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30497_30534 = state_30493__$1;
(statearr_30497_30534[(2)] = inst_30483);

(statearr_30497_30534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (27))){
var inst_30474 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(30),inst_30474);
} else {
if((state_val_30494 === (1))){
var inst_30425 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30493__$1 = state_30493;
if(cljs.core.truth_(inst_30425)){
var statearr_30498_30535 = state_30493__$1;
(statearr_30498_30535[(1)] = (2));

} else {
var statearr_30499_30536 = state_30493__$1;
(statearr_30499_30536[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (24))){
var inst_30472 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30493__$1 = state_30493;
if(inst_30472){
var statearr_30500_30537 = state_30493__$1;
(statearr_30500_30537[(1)] = (27));

} else {
var statearr_30501_30538 = state_30493__$1;
(statearr_30501_30538[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (4))){
var inst_30491 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30493__$1,inst_30491);
} else {
if((state_val_30494 === (15))){
var inst_30452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30453 = figwheel.client.heads_up.append_message.call(null,inst_30452);
var state_30493__$1 = state_30493;
var statearr_30502_30539 = state_30493__$1;
(statearr_30502_30539[(2)] = inst_30453);

(statearr_30502_30539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (21))){
var inst_30459 = (state_30493[(2)]);
var inst_30460 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30461 = figwheel.client.heads_up.display_warning.call(null,inst_30460);
var state_30493__$1 = (function (){var statearr_30503 = state_30493;
(statearr_30503[(7)] = inst_30459);

return statearr_30503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(22),inst_30461);
} else {
if((state_val_30494 === (13))){
var inst_30487 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30504_30540 = state_30493__$1;
(statearr_30504_30540[(2)] = inst_30487);

(statearr_30504_30540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (22))){
var inst_30463 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30505_30541 = state_30493__$1;
(statearr_30505_30541[(2)] = inst_30463);

(statearr_30505_30541[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (29))){
var inst_30479 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30506_30542 = state_30493__$1;
(statearr_30506_30542[(2)] = inst_30479);

(statearr_30506_30542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (6))){
var inst_30433 = figwheel.client.heads_up.clear.call(null);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(9),inst_30433);
} else {
if((state_val_30494 === (28))){
var state_30493__$1 = state_30493;
var statearr_30507_30543 = state_30493__$1;
(statearr_30507_30543[(2)] = null);

(statearr_30507_30543[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (25))){
var inst_30481 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30508_30544 = state_30493__$1;
(statearr_30508_30544[(2)] = inst_30481);

(statearr_30508_30544[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (17))){
var inst_30485 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30509_30545 = state_30493__$1;
(statearr_30509_30545[(2)] = inst_30485);

(statearr_30509_30545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (3))){
var inst_30431 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30493__$1 = state_30493;
if(inst_30431){
var statearr_30510_30546 = state_30493__$1;
(statearr_30510_30546[(1)] = (6));

} else {
var statearr_30511_30547 = state_30493__$1;
(statearr_30511_30547[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (12))){
var inst_30450 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30493__$1 = state_30493;
if(inst_30450){
var statearr_30512_30548 = state_30493__$1;
(statearr_30512_30548[(1)] = (15));

} else {
var statearr_30513_30549 = state_30493__$1;
(statearr_30513_30549[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (2))){
var inst_30427 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(5),inst_30427);
} else {
if((state_val_30494 === (23))){
var inst_30467 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30468 = figwheel.client.heads_up.display_warning.call(null,inst_30467);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(26),inst_30468);
} else {
if((state_val_30494 === (19))){
var inst_30465 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30493__$1 = state_30493;
if(inst_30465){
var statearr_30514_30550 = state_30493__$1;
(statearr_30514_30550[(1)] = (23));

} else {
var statearr_30515_30551 = state_30493__$1;
(statearr_30515_30551[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (11))){
var inst_30444 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30445 = figwheel.client.format_messages.call(null,inst_30444);
var inst_30446 = figwheel.client.heads_up.display_error.call(null,inst_30445);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(14),inst_30446);
} else {
if((state_val_30494 === (9))){
var inst_30435 = (state_30493[(2)]);
var inst_30436 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30437 = figwheel.client.format_messages.call(null,inst_30436);
var inst_30438 = figwheel.client.heads_up.display_error.call(null,inst_30437);
var state_30493__$1 = (function (){var statearr_30516 = state_30493;
(statearr_30516[(8)] = inst_30435);

return statearr_30516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(10),inst_30438);
} else {
if((state_val_30494 === (5))){
var inst_30429 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30517_30552 = state_30493__$1;
(statearr_30517_30552[(2)] = inst_30429);

(statearr_30517_30552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (14))){
var inst_30448 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30518_30553 = state_30493__$1;
(statearr_30518_30553[(2)] = inst_30448);

(statearr_30518_30553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (26))){
var inst_30470 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30519_30554 = state_30493__$1;
(statearr_30519_30554[(2)] = inst_30470);

(statearr_30519_30554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (16))){
var inst_30455 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30493__$1 = state_30493;
if(inst_30455){
var statearr_30520_30555 = state_30493__$1;
(statearr_30520_30555[(1)] = (18));

} else {
var statearr_30521_30556 = state_30493__$1;
(statearr_30521_30556[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (30))){
var inst_30476 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30522_30557 = state_30493__$1;
(statearr_30522_30557[(2)] = inst_30476);

(statearr_30522_30557[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (10))){
var inst_30440 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30523_30558 = state_30493__$1;
(statearr_30523_30558[(2)] = inst_30440);

(statearr_30523_30558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (18))){
var inst_30457 = figwheel.client.heads_up.clear.call(null);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(21),inst_30457);
} else {
if((state_val_30494 === (8))){
var inst_30489 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30524_30559 = state_30493__$1;
(statearr_30524_30559[(2)] = inst_30489);

(statearr_30524_30559[(1)] = (4));


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
});})(c__15967__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15911__auto__,c__15967__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_30528 = [null,null,null,null,null,null,null,null,null];
(statearr_30528[(0)] = state_machine__15912__auto__);

(statearr_30528[(1)] = (1));

return statearr_30528;
});
var state_machine__15912__auto____1 = (function (state_30493){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_30493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e30529){if((e30529 instanceof Object)){
var ex__15915__auto__ = e30529;
var statearr_30530_30560 = state_30493;
(statearr_30530_30560[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30561 = state_30493;
state_30493 = G__30561;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_30493){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_30493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto__,msg_hist,msg_names,msg))
})();
var state__15969__auto__ = (function (){var statearr_30531 = f__15968__auto__.call(null);
(statearr_30531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto__);

return statearr_30531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto__,msg_hist,msg_names,msg))
);

return c__15967__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15967__auto___30624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___30624,ch){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___30624,ch){
return (function (state_30607){
var state_val_30608 = (state_30607[(1)]);
if((state_val_30608 === (8))){
var inst_30599 = (state_30607[(2)]);
var state_30607__$1 = (function (){var statearr_30609 = state_30607;
(statearr_30609[(7)] = inst_30599);

return statearr_30609;
})();
var statearr_30610_30625 = state_30607__$1;
(statearr_30610_30625[(2)] = null);

(statearr_30610_30625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (7))){
var inst_30603 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30611_30626 = state_30607__$1;
(statearr_30611_30626[(2)] = inst_30603);

(statearr_30611_30626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (6))){
var state_30607__$1 = state_30607;
var statearr_30612_30627 = state_30607__$1;
(statearr_30612_30627[(2)] = null);

(statearr_30612_30627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (5))){
var inst_30595 = (state_30607[(8)]);
var inst_30597 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30595);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(8),inst_30597);
} else {
if((state_val_30608 === (4))){
var inst_30595 = (state_30607[(8)]);
var inst_30595__$1 = (state_30607[(2)]);
var state_30607__$1 = (function (){var statearr_30613 = state_30607;
(statearr_30613[(8)] = inst_30595__$1);

return statearr_30613;
})();
if(cljs.core.truth_(inst_30595__$1)){
var statearr_30614_30628 = state_30607__$1;
(statearr_30614_30628[(1)] = (5));

} else {
var statearr_30615_30629 = state_30607__$1;
(statearr_30615_30629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (3))){
var inst_30605 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30607__$1,inst_30605);
} else {
if((state_val_30608 === (2))){
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(4),ch);
} else {
if((state_val_30608 === (1))){
var state_30607__$1 = state_30607;
var statearr_30616_30630 = state_30607__$1;
(statearr_30616_30630[(2)] = null);

(statearr_30616_30630[(1)] = (2));


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
});})(c__15967__auto___30624,ch))
;
return ((function (switch__15911__auto__,c__15967__auto___30624,ch){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_30620 = [null,null,null,null,null,null,null,null,null];
(statearr_30620[(0)] = state_machine__15912__auto__);

(statearr_30620[(1)] = (1));

return statearr_30620;
});
var state_machine__15912__auto____1 = (function (state_30607){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_30607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e30621){if((e30621 instanceof Object)){
var ex__15915__auto__ = e30621;
var statearr_30622_30631 = state_30607;
(statearr_30622_30631[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30632 = state_30607;
state_30607 = G__30632;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_30607){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_30607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___30624,ch))
})();
var state__15969__auto__ = (function (){var statearr_30623 = f__15968__auto__.call(null);
(statearr_30623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___30624);

return statearr_30623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___30624,ch))
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
var c__15967__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto__){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto__){
return (function (state_30653){
var state_val_30654 = (state_30653[(1)]);
if((state_val_30654 === (2))){
var inst_30650 = (state_30653[(2)]);
var inst_30651 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30653__$1 = (function (){var statearr_30655 = state_30653;
(statearr_30655[(7)] = inst_30650);

return statearr_30655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30653__$1,inst_30651);
} else {
if((state_val_30654 === (1))){
var inst_30648 = cljs.core.async.timeout.call(null,(3000));
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30653__$1,(2),inst_30648);
} else {
return null;
}
}
});})(c__15967__auto__))
;
return ((function (switch__15911__auto__,c__15967__auto__){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_30659 = [null,null,null,null,null,null,null,null];
(statearr_30659[(0)] = state_machine__15912__auto__);

(statearr_30659[(1)] = (1));

return statearr_30659;
});
var state_machine__15912__auto____1 = (function (state_30653){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_30653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e30660){if((e30660 instanceof Object)){
var ex__15915__auto__ = e30660;
var statearr_30661_30663 = state_30653;
(statearr_30661_30663[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30664 = state_30653;
state_30653 = G__30664;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_30653){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_30653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto__))
})();
var state__15969__auto__ = (function (){var statearr_30662 = f__15968__auto__.call(null);
(statearr_30662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto__);

return statearr_30662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto__))
);

return c__15967__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__13311__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__13311__auto__)){
return ("CustomEvent" in window);
} else {
return and__13311__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30668 = {"detail":url};
return obj30668;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30669){
var map__30675 = p__30669;
var map__30675__$1 = ((cljs.core.seq_QMARK_.call(null,map__30675))?cljs.core.apply.call(null,cljs.core.hash_map,map__30675):map__30675);
var ed = map__30675__$1;
var exception_data = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30676_30680 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30677_30681 = null;
var count__30678_30682 = (0);
var i__30679_30683 = (0);
while(true){
if((i__30679_30683 < count__30678_30682)){
var msg_30684 = cljs.core._nth.call(null,chunk__30677_30681,i__30679_30683);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30684);

var G__30685 = seq__30676_30680;
var G__30686 = chunk__30677_30681;
var G__30687 = count__30678_30682;
var G__30688 = (i__30679_30683 + (1));
seq__30676_30680 = G__30685;
chunk__30677_30681 = G__30686;
count__30678_30682 = G__30687;
i__30679_30683 = G__30688;
continue;
} else {
var temp__4126__auto___30689 = cljs.core.seq.call(null,seq__30676_30680);
if(temp__4126__auto___30689){
var seq__30676_30690__$1 = temp__4126__auto___30689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30676_30690__$1)){
var c__14110__auto___30691 = cljs.core.chunk_first.call(null,seq__30676_30690__$1);
var G__30692 = cljs.core.chunk_rest.call(null,seq__30676_30690__$1);
var G__30693 = c__14110__auto___30691;
var G__30694 = cljs.core.count.call(null,c__14110__auto___30691);
var G__30695 = (0);
seq__30676_30680 = G__30692;
chunk__30677_30681 = G__30693;
count__30678_30682 = G__30694;
i__30679_30683 = G__30695;
continue;
} else {
var msg_30696 = cljs.core.first.call(null,seq__30676_30690__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30696);

var G__30697 = cljs.core.next.call(null,seq__30676_30690__$1);
var G__30698 = null;
var G__30699 = (0);
var G__30700 = (0);
seq__30676_30680 = G__30697;
chunk__30677_30681 = G__30698;
count__30678_30682 = G__30699;
i__30679_30683 = G__30700;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30701){
var map__30703 = p__30701;
var map__30703__$1 = ((cljs.core.seq_QMARK_.call(null,map__30703))?cljs.core.apply.call(null,cljs.core.hash_map,map__30703):map__30703);
var w = map__30703__$1;
var message = cljs.core.get.call(null,map__30703__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__13311__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__13311__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__13311__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30710 = cljs.core.seq.call(null,plugins);
var chunk__30711 = null;
var count__30712 = (0);
var i__30713 = (0);
while(true){
if((i__30713 < count__30712)){
var vec__30714 = cljs.core._nth.call(null,chunk__30711,i__30713);
var k = cljs.core.nth.call(null,vec__30714,(0),null);
var plugin = cljs.core.nth.call(null,vec__30714,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30716 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30710,chunk__30711,count__30712,i__30713,pl_30716,vec__30714,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30716.call(null,msg_hist);
});})(seq__30710,chunk__30711,count__30712,i__30713,pl_30716,vec__30714,k,plugin))
);
} else {
}

var G__30717 = seq__30710;
var G__30718 = chunk__30711;
var G__30719 = count__30712;
var G__30720 = (i__30713 + (1));
seq__30710 = G__30717;
chunk__30711 = G__30718;
count__30712 = G__30719;
i__30713 = G__30720;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30710);
if(temp__4126__auto__){
var seq__30710__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30710__$1)){
var c__14110__auto__ = cljs.core.chunk_first.call(null,seq__30710__$1);
var G__30721 = cljs.core.chunk_rest.call(null,seq__30710__$1);
var G__30722 = c__14110__auto__;
var G__30723 = cljs.core.count.call(null,c__14110__auto__);
var G__30724 = (0);
seq__30710 = G__30721;
chunk__30711 = G__30722;
count__30712 = G__30723;
i__30713 = G__30724;
continue;
} else {
var vec__30715 = cljs.core.first.call(null,seq__30710__$1);
var k = cljs.core.nth.call(null,vec__30715,(0),null);
var plugin = cljs.core.nth.call(null,vec__30715,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30725 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30710,chunk__30711,count__30712,i__30713,pl_30725,vec__30715,k,plugin,seq__30710__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30725.call(null,msg_hist);
});})(seq__30710,chunk__30711,count__30712,i__30713,pl_30725,vec__30715,k,plugin,seq__30710__$1,temp__4126__auto__))
);
} else {
}

var G__30726 = cljs.core.next.call(null,seq__30710__$1);
var G__30727 = null;
var G__30728 = (0);
var G__30729 = (0);
seq__30710 = G__30726;
chunk__30711 = G__30727;
count__30712 = G__30728;
i__30713 = G__30729;
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
var watch_and_reload__delegate = function (p__30730){
var map__30732 = p__30730;
var map__30732__$1 = ((cljs.core.seq_QMARK_.call(null,map__30732))?cljs.core.apply.call(null,cljs.core.hash_map,map__30732):map__30732);
var opts = map__30732__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30730 = null;
if (arguments.length > 0) {
var G__30733__i = 0, G__30733__a = new Array(arguments.length -  0);
while (G__30733__i < G__30733__a.length) {G__30733__a[G__30733__i] = arguments[G__30733__i + 0]; ++G__30733__i;}
  p__30730 = new cljs.core.IndexedSeq(G__30733__a,0);
} 
return watch_and_reload__delegate.call(this,p__30730);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30734){
var p__30730 = cljs.core.seq(arglist__30734);
return watch_and_reload__delegate(p__30730);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map