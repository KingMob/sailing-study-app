// Compiled by ClojureScript 0.0-2816 {:elide-asserts false}
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
var G__30052__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30053__i = 0, G__30053__a = new Array(arguments.length -  0);
while (G__30053__i < G__30053__a.length) {G__30053__a[G__30053__i] = arguments[G__30053__i + 0]; ++G__30053__i;}
  args = new cljs.core.IndexedSeq(G__30053__a,0);
} 
return G__30052__delegate.call(this,args);};
G__30052.cljs$lang$maxFixedArity = 0;
G__30052.cljs$lang$applyTo = (function (arglist__30054){
var args = cljs.core.seq(arglist__30054);
return G__30052__delegate(args);
});
G__30052.cljs$core$IFn$_invoke$arity$variadic = G__30052__delegate;
return G__30052;
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
figwheel.client.error_msg_format = (function error_msg_format(p__30055){
var map__30057 = p__30055;
var map__30057__$1 = ((cljs.core.seq_QMARK_.call(null,map__30057))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);
var class$ = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__13231__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__13219__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__13219__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__13219__auto__;
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
var c__15889__auto___30186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___30186,ch){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___30186,ch){
return (function (state_30160){
var state_val_30161 = (state_30160[(1)]);
if((state_val_30161 === (7))){
var inst_30156 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
var statearr_30162_30187 = state_30160__$1;
(statearr_30162_30187[(2)] = inst_30156);

(statearr_30162_30187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (1))){
var state_30160__$1 = state_30160;
var statearr_30163_30188 = state_30160__$1;
(statearr_30163_30188[(2)] = null);

(statearr_30163_30188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (4))){
var inst_30124 = (state_30160[(7)]);
var inst_30124__$1 = (state_30160[(2)]);
var state_30160__$1 = (function (){var statearr_30164 = state_30160;
(statearr_30164[(7)] = inst_30124__$1);

return statearr_30164;
})();
if(cljs.core.truth_(inst_30124__$1)){
var statearr_30165_30189 = state_30160__$1;
(statearr_30165_30189[(1)] = (5));

} else {
var statearr_30166_30190 = state_30160__$1;
(statearr_30166_30190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (13))){
var state_30160__$1 = state_30160;
var statearr_30167_30191 = state_30160__$1;
(statearr_30167_30191[(2)] = null);

(statearr_30167_30191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (6))){
var state_30160__$1 = state_30160;
var statearr_30168_30192 = state_30160__$1;
(statearr_30168_30192[(2)] = null);

(statearr_30168_30192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (3))){
var inst_30158 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30160__$1,inst_30158);
} else {
if((state_val_30161 === (12))){
var inst_30131 = (state_30160[(8)]);
var inst_30144 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30131);
var inst_30145 = cljs.core.first.call(null,inst_30144);
var inst_30146 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30145);
var inst_30147 = console.warn("Figwheel: Not loading code with warnings - ",inst_30146);
var state_30160__$1 = state_30160;
var statearr_30169_30193 = state_30160__$1;
(statearr_30169_30193[(2)] = inst_30147);

(statearr_30169_30193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (2))){
var state_30160__$1 = state_30160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30160__$1,(4),ch);
} else {
if((state_val_30161 === (11))){
var inst_30140 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
var statearr_30170_30194 = state_30160__$1;
(statearr_30170_30194[(2)] = inst_30140);

(statearr_30170_30194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (9))){
var inst_30130 = (state_30160[(9)]);
var inst_30142 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30130,opts);
var state_30160__$1 = state_30160;
if(inst_30142){
var statearr_30171_30195 = state_30160__$1;
(statearr_30171_30195[(1)] = (12));

} else {
var statearr_30172_30196 = state_30160__$1;
(statearr_30172_30196[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (5))){
var inst_30130 = (state_30160[(9)]);
var inst_30124 = (state_30160[(7)]);
var inst_30126 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30127 = (new cljs.core.PersistentArrayMap(null,2,inst_30126,null));
var inst_30128 = (new cljs.core.PersistentHashSet(null,inst_30127,null));
var inst_30129 = figwheel.client.focus_msgs.call(null,inst_30128,inst_30124);
var inst_30130__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30129);
var inst_30131 = cljs.core.first.call(null,inst_30129);
var inst_30132 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30130__$1,opts);
var state_30160__$1 = (function (){var statearr_30173 = state_30160;
(statearr_30173[(9)] = inst_30130__$1);

(statearr_30173[(8)] = inst_30131);

return statearr_30173;
})();
if(cljs.core.truth_(inst_30132)){
var statearr_30174_30197 = state_30160__$1;
(statearr_30174_30197[(1)] = (8));

} else {
var statearr_30175_30198 = state_30160__$1;
(statearr_30175_30198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (14))){
var inst_30150 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
var statearr_30176_30199 = state_30160__$1;
(statearr_30176_30199[(2)] = inst_30150);

(statearr_30176_30199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (10))){
var inst_30152 = (state_30160[(2)]);
var state_30160__$1 = (function (){var statearr_30177 = state_30160;
(statearr_30177[(10)] = inst_30152);

return statearr_30177;
})();
var statearr_30178_30200 = state_30160__$1;
(statearr_30178_30200[(2)] = null);

(statearr_30178_30200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (8))){
var inst_30131 = (state_30160[(8)]);
var inst_30134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30135 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30131);
var inst_30136 = cljs.core.async.timeout.call(null,(1000));
var inst_30137 = [inst_30135,inst_30136];
var inst_30138 = (new cljs.core.PersistentVector(null,2,(5),inst_30134,inst_30137,null));
var state_30160__$1 = state_30160;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30160__$1,(11),inst_30138);
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
});})(c__15889__auto___30186,ch))
;
return ((function (switch__15833__auto__,c__15889__auto___30186,ch){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_30182 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30182[(0)] = state_machine__15834__auto__);

(statearr_30182[(1)] = (1));

return statearr_30182;
});
var state_machine__15834__auto____1 = (function (state_30160){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_30160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e30183){if((e30183 instanceof Object)){
var ex__15837__auto__ = e30183;
var statearr_30184_30201 = state_30160;
(statearr_30184_30201[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30202 = state_30160;
state_30160 = G__30202;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_30160){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_30160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___30186,ch))
})();
var state__15891__auto__ = (function (){var statearr_30185 = f__15890__auto__.call(null);
(statearr_30185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___30186);

return statearr_30185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___30186,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__30203_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30203_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30208 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30209 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30208,_STAR_print_newline_STAR_30209){
return (function() { 
var G__30210__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30211__i = 0, G__30211__a = new Array(arguments.length -  0);
while (G__30211__i < G__30211__a.length) {G__30211__a[G__30211__i] = arguments[G__30211__i + 0]; ++G__30211__i;}
  args = new cljs.core.IndexedSeq(G__30211__a,0);
} 
return G__30210__delegate.call(this,args);};
G__30210.cljs$lang$maxFixedArity = 0;
G__30210.cljs$lang$applyTo = (function (arglist__30212){
var args = cljs.core.seq(arglist__30212);
return G__30210__delegate(args);
});
G__30210.cljs$core$IFn$_invoke$arity$variadic = G__30210__delegate;
return G__30210;
})()
;})(_STAR_print_fn_STAR_30208,_STAR_print_newline_STAR_30209))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30209;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30208;
}}catch (e30207){if((e30207 instanceof Error)){
var e = e30207;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e30207;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs)){
} else {
cljs = {};
}

if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__30213){
var map__30218 = p__30213;
var map__30218__$1 = ((cljs.core.seq_QMARK_.call(null,map__30218))?cljs.core.apply.call(null,cljs.core.hash_map,map__30218):map__30218);
var opts = map__30218__$1;
var build_id = cljs.core.get.call(null,map__30218__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30218,map__30218__$1,opts,build_id){
return (function (p__30219){
var vec__30220 = p__30219;
var map__30221 = cljs.core.nth.call(null,vec__30220,(0),null);
var map__30221__$1 = ((cljs.core.seq_QMARK_.call(null,map__30221))?cljs.core.apply.call(null,cljs.core.hash_map,map__30221):map__30221);
var msg = map__30221__$1;
var msg_name = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30220,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30220,map__30221,map__30221__$1,msg,msg_name,_,map__30218,map__30218__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30220,map__30221,map__30221__$1,msg,msg_name,_,map__30218,map__30218__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30218,map__30218__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30225){
var vec__30226 = p__30225;
var map__30227 = cljs.core.nth.call(null,vec__30226,(0),null);
var map__30227__$1 = ((cljs.core.seq_QMARK_.call(null,map__30227))?cljs.core.apply.call(null,cljs.core.hash_map,map__30227):map__30227);
var msg = map__30227__$1;
var msg_name = cljs.core.get.call(null,map__30227__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30226,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30228){
var map__30236 = p__30228;
var map__30236__$1 = ((cljs.core.seq_QMARK_.call(null,map__30236))?cljs.core.apply.call(null,cljs.core.hash_map,map__30236):map__30236);
var on_compile_fail = cljs.core.get.call(null,map__30236__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30236__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30236,map__30236__$1,on_compile_fail,on_compile_warning){
return (function (p__30237){
var vec__30238 = p__30237;
var map__30239 = cljs.core.nth.call(null,vec__30238,(0),null);
var map__30239__$1 = ((cljs.core.seq_QMARK_.call(null,map__30239))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);
var msg = map__30239__$1;
var msg_name = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30238,(1));
var pred__30240 = cljs.core._EQ_;
var expr__30241 = msg_name;
if(cljs.core.truth_(pred__30240.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30241))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30240.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30241))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30236,map__30236__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__,msg_hist,msg_names,msg){
return (function (state_30418){
var state_val_30419 = (state_30418[(1)]);
if((state_val_30419 === (7))){
var inst_30367 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30418__$1 = state_30418;
if(inst_30367){
var statearr_30420_30457 = state_30418__$1;
(statearr_30420_30457[(1)] = (11));

} else {
var statearr_30421_30458 = state_30418__$1;
(statearr_30421_30458[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (20))){
var inst_30408 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30422_30459 = state_30418__$1;
(statearr_30422_30459[(2)] = inst_30408);

(statearr_30422_30459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (27))){
var inst_30399 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(30),inst_30399);
} else {
if((state_val_30419 === (1))){
var inst_30350 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30418__$1 = state_30418;
if(cljs.core.truth_(inst_30350)){
var statearr_30423_30460 = state_30418__$1;
(statearr_30423_30460[(1)] = (2));

} else {
var statearr_30424_30461 = state_30418__$1;
(statearr_30424_30461[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (24))){
var inst_30397 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30418__$1 = state_30418;
if(inst_30397){
var statearr_30425_30462 = state_30418__$1;
(statearr_30425_30462[(1)] = (27));

} else {
var statearr_30426_30463 = state_30418__$1;
(statearr_30426_30463[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (4))){
var inst_30416 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30418__$1,inst_30416);
} else {
if((state_val_30419 === (15))){
var inst_30377 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30378 = figwheel.client.heads_up.append_message.call(null,inst_30377);
var state_30418__$1 = state_30418;
var statearr_30427_30464 = state_30418__$1;
(statearr_30427_30464[(2)] = inst_30378);

(statearr_30427_30464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (21))){
var inst_30384 = (state_30418[(2)]);
var inst_30385 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30386 = figwheel.client.heads_up.display_warning.call(null,inst_30385);
var state_30418__$1 = (function (){var statearr_30428 = state_30418;
(statearr_30428[(7)] = inst_30384);

return statearr_30428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(22),inst_30386);
} else {
if((state_val_30419 === (13))){
var inst_30412 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30429_30465 = state_30418__$1;
(statearr_30429_30465[(2)] = inst_30412);

(statearr_30429_30465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (22))){
var inst_30388 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30430_30466 = state_30418__$1;
(statearr_30430_30466[(2)] = inst_30388);

(statearr_30430_30466[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (29))){
var inst_30404 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30431_30467 = state_30418__$1;
(statearr_30431_30467[(2)] = inst_30404);

(statearr_30431_30467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (6))){
var inst_30358 = figwheel.client.heads_up.clear.call(null);
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(9),inst_30358);
} else {
if((state_val_30419 === (28))){
var state_30418__$1 = state_30418;
var statearr_30432_30468 = state_30418__$1;
(statearr_30432_30468[(2)] = null);

(statearr_30432_30468[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (25))){
var inst_30406 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30433_30469 = state_30418__$1;
(statearr_30433_30469[(2)] = inst_30406);

(statearr_30433_30469[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (17))){
var inst_30410 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30434_30470 = state_30418__$1;
(statearr_30434_30470[(2)] = inst_30410);

(statearr_30434_30470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (3))){
var inst_30356 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30418__$1 = state_30418;
if(inst_30356){
var statearr_30435_30471 = state_30418__$1;
(statearr_30435_30471[(1)] = (6));

} else {
var statearr_30436_30472 = state_30418__$1;
(statearr_30436_30472[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (12))){
var inst_30375 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30418__$1 = state_30418;
if(inst_30375){
var statearr_30437_30473 = state_30418__$1;
(statearr_30437_30473[(1)] = (15));

} else {
var statearr_30438_30474 = state_30418__$1;
(statearr_30438_30474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (2))){
var inst_30352 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(5),inst_30352);
} else {
if((state_val_30419 === (23))){
var inst_30392 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30393 = figwheel.client.heads_up.display_warning.call(null,inst_30392);
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(26),inst_30393);
} else {
if((state_val_30419 === (19))){
var inst_30390 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30418__$1 = state_30418;
if(inst_30390){
var statearr_30439_30475 = state_30418__$1;
(statearr_30439_30475[(1)] = (23));

} else {
var statearr_30440_30476 = state_30418__$1;
(statearr_30440_30476[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (11))){
var inst_30369 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30370 = figwheel.client.format_messages.call(null,inst_30369);
var inst_30371 = figwheel.client.heads_up.display_error.call(null,inst_30370);
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(14),inst_30371);
} else {
if((state_val_30419 === (9))){
var inst_30360 = (state_30418[(2)]);
var inst_30361 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30362 = figwheel.client.format_messages.call(null,inst_30361);
var inst_30363 = figwheel.client.heads_up.display_error.call(null,inst_30362);
var state_30418__$1 = (function (){var statearr_30441 = state_30418;
(statearr_30441[(8)] = inst_30360);

return statearr_30441;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(10),inst_30363);
} else {
if((state_val_30419 === (5))){
var inst_30354 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30442_30477 = state_30418__$1;
(statearr_30442_30477[(2)] = inst_30354);

(statearr_30442_30477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (14))){
var inst_30373 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30443_30478 = state_30418__$1;
(statearr_30443_30478[(2)] = inst_30373);

(statearr_30443_30478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (26))){
var inst_30395 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30444_30479 = state_30418__$1;
(statearr_30444_30479[(2)] = inst_30395);

(statearr_30444_30479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (16))){
var inst_30380 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30418__$1 = state_30418;
if(inst_30380){
var statearr_30445_30480 = state_30418__$1;
(statearr_30445_30480[(1)] = (18));

} else {
var statearr_30446_30481 = state_30418__$1;
(statearr_30446_30481[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (30))){
var inst_30401 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30447_30482 = state_30418__$1;
(statearr_30447_30482[(2)] = inst_30401);

(statearr_30447_30482[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (10))){
var inst_30365 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30448_30483 = state_30418__$1;
(statearr_30448_30483[(2)] = inst_30365);

(statearr_30448_30483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30419 === (18))){
var inst_30382 = figwheel.client.heads_up.clear.call(null);
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(21),inst_30382);
} else {
if((state_val_30419 === (8))){
var inst_30414 = (state_30418[(2)]);
var state_30418__$1 = state_30418;
var statearr_30449_30484 = state_30418__$1;
(statearr_30449_30484[(2)] = inst_30414);

(statearr_30449_30484[(1)] = (4));


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
});})(c__15889__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15833__auto__,c__15889__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_30453 = [null,null,null,null,null,null,null,null,null];
(statearr_30453[(0)] = state_machine__15834__auto__);

(statearr_30453[(1)] = (1));

return statearr_30453;
});
var state_machine__15834__auto____1 = (function (state_30418){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_30418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e30454){if((e30454 instanceof Object)){
var ex__15837__auto__ = e30454;
var statearr_30455_30485 = state_30418;
(statearr_30455_30485[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30486 = state_30418;
state_30418 = G__30486;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_30418){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_30418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__,msg_hist,msg_names,msg))
})();
var state__15891__auto__ = (function (){var statearr_30456 = f__15890__auto__.call(null);
(statearr_30456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_30456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__,msg_hist,msg_names,msg))
);

return c__15889__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15889__auto___30549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___30549,ch){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___30549,ch){
return (function (state_30532){
var state_val_30533 = (state_30532[(1)]);
if((state_val_30533 === (8))){
var inst_30524 = (state_30532[(2)]);
var state_30532__$1 = (function (){var statearr_30534 = state_30532;
(statearr_30534[(7)] = inst_30524);

return statearr_30534;
})();
var statearr_30535_30550 = state_30532__$1;
(statearr_30535_30550[(2)] = null);

(statearr_30535_30550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (7))){
var inst_30528 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30536_30551 = state_30532__$1;
(statearr_30536_30551[(2)] = inst_30528);

(statearr_30536_30551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (6))){
var state_30532__$1 = state_30532;
var statearr_30537_30552 = state_30532__$1;
(statearr_30537_30552[(2)] = null);

(statearr_30537_30552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (5))){
var inst_30520 = (state_30532[(8)]);
var inst_30522 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30520);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(8),inst_30522);
} else {
if((state_val_30533 === (4))){
var inst_30520 = (state_30532[(8)]);
var inst_30520__$1 = (state_30532[(2)]);
var state_30532__$1 = (function (){var statearr_30538 = state_30532;
(statearr_30538[(8)] = inst_30520__$1);

return statearr_30538;
})();
if(cljs.core.truth_(inst_30520__$1)){
var statearr_30539_30553 = state_30532__$1;
(statearr_30539_30553[(1)] = (5));

} else {
var statearr_30540_30554 = state_30532__$1;
(statearr_30540_30554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (3))){
var inst_30530 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30532__$1,inst_30530);
} else {
if((state_val_30533 === (2))){
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(4),ch);
} else {
if((state_val_30533 === (1))){
var state_30532__$1 = state_30532;
var statearr_30541_30555 = state_30532__$1;
(statearr_30541_30555[(2)] = null);

(statearr_30541_30555[(1)] = (2));


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
});})(c__15889__auto___30549,ch))
;
return ((function (switch__15833__auto__,c__15889__auto___30549,ch){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_30545 = [null,null,null,null,null,null,null,null,null];
(statearr_30545[(0)] = state_machine__15834__auto__);

(statearr_30545[(1)] = (1));

return statearr_30545;
});
var state_machine__15834__auto____1 = (function (state_30532){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_30532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e30546){if((e30546 instanceof Object)){
var ex__15837__auto__ = e30546;
var statearr_30547_30556 = state_30532;
(statearr_30547_30556[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30557 = state_30532;
state_30532 = G__30557;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_30532){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_30532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___30549,ch))
})();
var state__15891__auto__ = (function (){var statearr_30548 = f__15890__auto__.call(null);
(statearr_30548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___30549);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___30549,ch))
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
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__){
return (function (state_30578){
var state_val_30579 = (state_30578[(1)]);
if((state_val_30579 === (2))){
var inst_30575 = (state_30578[(2)]);
var inst_30576 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30578__$1 = (function (){var statearr_30580 = state_30578;
(statearr_30580[(7)] = inst_30575);

return statearr_30580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30578__$1,inst_30576);
} else {
if((state_val_30579 === (1))){
var inst_30573 = cljs.core.async.timeout.call(null,(3000));
var state_30578__$1 = state_30578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30578__$1,(2),inst_30573);
} else {
return null;
}
}
});})(c__15889__auto__))
;
return ((function (switch__15833__auto__,c__15889__auto__){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_30584 = [null,null,null,null,null,null,null,null];
(statearr_30584[(0)] = state_machine__15834__auto__);

(statearr_30584[(1)] = (1));

return statearr_30584;
});
var state_machine__15834__auto____1 = (function (state_30578){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_30578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e30585){if((e30585 instanceof Object)){
var ex__15837__auto__ = e30585;
var statearr_30586_30588 = state_30578;
(statearr_30586_30588[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30589 = state_30578;
state_30578 = G__30589;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_30578){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_30578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__))
})();
var state__15891__auto__ = (function (){var statearr_30587 = f__15890__auto__.call(null);
(statearr_30587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__))
);

return c__15889__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__13219__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__13219__auto__)){
return ("CustomEvent" in window);
} else {
return and__13219__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30593 = {"detail":url};
return obj30593;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30594){
var map__30600 = p__30594;
var map__30600__$1 = ((cljs.core.seq_QMARK_.call(null,map__30600))?cljs.core.apply.call(null,cljs.core.hash_map,map__30600):map__30600);
var ed = map__30600__$1;
var exception_data = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30601_30605 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30602_30606 = null;
var count__30603_30607 = (0);
var i__30604_30608 = (0);
while(true){
if((i__30604_30608 < count__30603_30607)){
var msg_30609 = cljs.core._nth.call(null,chunk__30602_30606,i__30604_30608);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30609);

var G__30610 = seq__30601_30605;
var G__30611 = chunk__30602_30606;
var G__30612 = count__30603_30607;
var G__30613 = (i__30604_30608 + (1));
seq__30601_30605 = G__30610;
chunk__30602_30606 = G__30611;
count__30603_30607 = G__30612;
i__30604_30608 = G__30613;
continue;
} else {
var temp__4126__auto___30614 = cljs.core.seq.call(null,seq__30601_30605);
if(temp__4126__auto___30614){
var seq__30601_30615__$1 = temp__4126__auto___30614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30601_30615__$1)){
var c__14018__auto___30616 = cljs.core.chunk_first.call(null,seq__30601_30615__$1);
var G__30617 = cljs.core.chunk_rest.call(null,seq__30601_30615__$1);
var G__30618 = c__14018__auto___30616;
var G__30619 = cljs.core.count.call(null,c__14018__auto___30616);
var G__30620 = (0);
seq__30601_30605 = G__30617;
chunk__30602_30606 = G__30618;
count__30603_30607 = G__30619;
i__30604_30608 = G__30620;
continue;
} else {
var msg_30621 = cljs.core.first.call(null,seq__30601_30615__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30621);

var G__30622 = cljs.core.next.call(null,seq__30601_30615__$1);
var G__30623 = null;
var G__30624 = (0);
var G__30625 = (0);
seq__30601_30605 = G__30622;
chunk__30602_30606 = G__30623;
count__30603_30607 = G__30624;
i__30604_30608 = G__30625;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30626){
var map__30628 = p__30626;
var map__30628__$1 = ((cljs.core.seq_QMARK_.call(null,map__30628))?cljs.core.apply.call(null,cljs.core.hash_map,map__30628):map__30628);
var w = map__30628__$1;
var message = cljs.core.get.call(null,map__30628__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__13219__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__13219__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__13219__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30635 = cljs.core.seq.call(null,plugins);
var chunk__30636 = null;
var count__30637 = (0);
var i__30638 = (0);
while(true){
if((i__30638 < count__30637)){
var vec__30639 = cljs.core._nth.call(null,chunk__30636,i__30638);
var k = cljs.core.nth.call(null,vec__30639,(0),null);
var plugin = cljs.core.nth.call(null,vec__30639,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30641 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30635,chunk__30636,count__30637,i__30638,pl_30641,vec__30639,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30641.call(null,msg_hist);
});})(seq__30635,chunk__30636,count__30637,i__30638,pl_30641,vec__30639,k,plugin))
);
} else {
}

var G__30642 = seq__30635;
var G__30643 = chunk__30636;
var G__30644 = count__30637;
var G__30645 = (i__30638 + (1));
seq__30635 = G__30642;
chunk__30636 = G__30643;
count__30637 = G__30644;
i__30638 = G__30645;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30635);
if(temp__4126__auto__){
var seq__30635__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30635__$1)){
var c__14018__auto__ = cljs.core.chunk_first.call(null,seq__30635__$1);
var G__30646 = cljs.core.chunk_rest.call(null,seq__30635__$1);
var G__30647 = c__14018__auto__;
var G__30648 = cljs.core.count.call(null,c__14018__auto__);
var G__30649 = (0);
seq__30635 = G__30646;
chunk__30636 = G__30647;
count__30637 = G__30648;
i__30638 = G__30649;
continue;
} else {
var vec__30640 = cljs.core.first.call(null,seq__30635__$1);
var k = cljs.core.nth.call(null,vec__30640,(0),null);
var plugin = cljs.core.nth.call(null,vec__30640,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30650 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30635,chunk__30636,count__30637,i__30638,pl_30650,vec__30640,k,plugin,seq__30635__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30650.call(null,msg_hist);
});})(seq__30635,chunk__30636,count__30637,i__30638,pl_30650,vec__30640,k,plugin,seq__30635__$1,temp__4126__auto__))
);
} else {
}

var G__30651 = cljs.core.next.call(null,seq__30635__$1);
var G__30652 = null;
var G__30653 = (0);
var G__30654 = (0);
seq__30635 = G__30651;
chunk__30636 = G__30652;
count__30637 = G__30653;
i__30638 = G__30654;
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
var watch_and_reload__delegate = function (p__30655){
var map__30657 = p__30655;
var map__30657__$1 = ((cljs.core.seq_QMARK_.call(null,map__30657))?cljs.core.apply.call(null,cljs.core.hash_map,map__30657):map__30657);
var opts = map__30657__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30655 = null;
if (arguments.length > 0) {
var G__30658__i = 0, G__30658__a = new Array(arguments.length -  0);
while (G__30658__i < G__30658__a.length) {G__30658__a[G__30658__i] = arguments[G__30658__i + 0]; ++G__30658__i;}
  p__30655 = new cljs.core.IndexedSeq(G__30658__a,0);
} 
return watch_and_reload__delegate.call(this,p__30655);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30659){
var p__30655 = cljs.core.seq(arglist__30659);
return watch_and_reload__delegate(p__30655);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map