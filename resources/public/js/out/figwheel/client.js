// Compiled by ClojureScript 0.0-2760 {:elide-asserts false}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
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
var G__29491__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29492__i = 0, G__29492__a = new Array(arguments.length -  0);
while (G__29492__i < G__29492__a.length) {G__29492__a[G__29492__i] = arguments[G__29492__i + 0]; ++G__29492__i;}
  args = new cljs.core.IndexedSeq(G__29492__a,0);
} 
return G__29491__delegate.call(this,args);};
G__29491.cljs$lang$maxFixedArity = 0;
G__29491.cljs$lang$applyTo = (function (arglist__29493){
var args = cljs.core.seq(arglist__29493);
return G__29491__delegate(args);
});
G__29491.cljs$core$IFn$_invoke$arity$variadic = G__29491__delegate;
return G__29491;
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
figwheel.client.error_msg_format = (function error_msg_format(p__29494){
var map__29496 = p__29494;
var map__29496__$1 = ((cljs.core.seq_QMARK_.call(null,map__29496))?cljs.core.apply.call(null,cljs.core.hash_map,map__29496):map__29496);
var class$ = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__13176__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__13176__auto__)){
return or__13176__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__13164__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__13164__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__13164__auto__;
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
var c__15819__auto___29625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___29625,ch){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___29625,ch){
return (function (state_29599){
var state_val_29600 = (state_29599[(1)]);
if((state_val_29600 === (7))){
var inst_29595 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29601_29626 = state_29599__$1;
(statearr_29601_29626[(2)] = inst_29595);

(statearr_29601_29626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (1))){
var state_29599__$1 = state_29599;
var statearr_29602_29627 = state_29599__$1;
(statearr_29602_29627[(2)] = null);

(statearr_29602_29627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (4))){
var inst_29563 = (state_29599[(7)]);
var inst_29563__$1 = (state_29599[(2)]);
var state_29599__$1 = (function (){var statearr_29603 = state_29599;
(statearr_29603[(7)] = inst_29563__$1);

return statearr_29603;
})();
if(cljs.core.truth_(inst_29563__$1)){
var statearr_29604_29628 = state_29599__$1;
(statearr_29604_29628[(1)] = (5));

} else {
var statearr_29605_29629 = state_29599__$1;
(statearr_29605_29629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (13))){
var state_29599__$1 = state_29599;
var statearr_29606_29630 = state_29599__$1;
(statearr_29606_29630[(2)] = null);

(statearr_29606_29630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (6))){
var state_29599__$1 = state_29599;
var statearr_29607_29631 = state_29599__$1;
(statearr_29607_29631[(2)] = null);

(statearr_29607_29631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (3))){
var inst_29597 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29599__$1,inst_29597);
} else {
if((state_val_29600 === (12))){
var inst_29570 = (state_29599[(8)]);
var inst_29583 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29570);
var inst_29584 = cljs.core.first.call(null,inst_29583);
var inst_29585 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29584);
var inst_29586 = console.warn("Figwheel: Not loading code with warnings - ",inst_29585);
var state_29599__$1 = state_29599;
var statearr_29608_29632 = state_29599__$1;
(statearr_29608_29632[(2)] = inst_29586);

(statearr_29608_29632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (2))){
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29599__$1,(4),ch);
} else {
if((state_val_29600 === (11))){
var inst_29579 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29609_29633 = state_29599__$1;
(statearr_29609_29633[(2)] = inst_29579);

(statearr_29609_29633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (9))){
var inst_29569 = (state_29599[(9)]);
var inst_29581 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29569,opts);
var state_29599__$1 = state_29599;
if(inst_29581){
var statearr_29610_29634 = state_29599__$1;
(statearr_29610_29634[(1)] = (12));

} else {
var statearr_29611_29635 = state_29599__$1;
(statearr_29611_29635[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (5))){
var inst_29563 = (state_29599[(7)]);
var inst_29569 = (state_29599[(9)]);
var inst_29565 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29566 = (new cljs.core.PersistentArrayMap(null,2,inst_29565,null));
var inst_29567 = (new cljs.core.PersistentHashSet(null,inst_29566,null));
var inst_29568 = figwheel.client.focus_msgs.call(null,inst_29567,inst_29563);
var inst_29569__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29568);
var inst_29570 = cljs.core.first.call(null,inst_29568);
var inst_29571 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29569__$1,opts);
var state_29599__$1 = (function (){var statearr_29612 = state_29599;
(statearr_29612[(8)] = inst_29570);

(statearr_29612[(9)] = inst_29569__$1);

return statearr_29612;
})();
if(cljs.core.truth_(inst_29571)){
var statearr_29613_29636 = state_29599__$1;
(statearr_29613_29636[(1)] = (8));

} else {
var statearr_29614_29637 = state_29599__$1;
(statearr_29614_29637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (14))){
var inst_29589 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29615_29638 = state_29599__$1;
(statearr_29615_29638[(2)] = inst_29589);

(statearr_29615_29638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (10))){
var inst_29591 = (state_29599[(2)]);
var state_29599__$1 = (function (){var statearr_29616 = state_29599;
(statearr_29616[(10)] = inst_29591);

return statearr_29616;
})();
var statearr_29617_29639 = state_29599__$1;
(statearr_29617_29639[(2)] = null);

(statearr_29617_29639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (8))){
var inst_29570 = (state_29599[(8)]);
var inst_29573 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29574 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29570);
var inst_29575 = cljs.core.async.timeout.call(null,(1000));
var inst_29576 = [inst_29574,inst_29575];
var inst_29577 = (new cljs.core.PersistentVector(null,2,(5),inst_29573,inst_29576,null));
var state_29599__$1 = state_29599;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29599__$1,(11),inst_29577);
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
});})(c__15819__auto___29625,ch))
;
return ((function (switch__15763__auto__,c__15819__auto___29625,ch){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_29621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29621[(0)] = state_machine__15764__auto__);

(statearr_29621[(1)] = (1));

return statearr_29621;
});
var state_machine__15764__auto____1 = (function (state_29599){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_29599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e29622){if((e29622 instanceof Object)){
var ex__15767__auto__ = e29622;
var statearr_29623_29640 = state_29599;
(statearr_29623_29640[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29641 = state_29599;
state_29599 = G__29641;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_29599){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_29599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___29625,ch))
})();
var state__15821__auto__ = (function (){var statearr_29624 = f__15820__auto__.call(null);
(statearr_29624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___29625);

return statearr_29624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___29625,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__29642_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29642_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29646 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29646){
return (function() { 
var G__29647__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29648__i = 0, G__29648__a = new Array(arguments.length -  0);
while (G__29648__i < G__29648__a.length) {G__29648__a[G__29648__i] = arguments[G__29648__i + 0]; ++G__29648__i;}
  args = new cljs.core.IndexedSeq(G__29648__a,0);
} 
return G__29647__delegate.call(this,args);};
G__29647.cljs$lang$maxFixedArity = 0;
G__29647.cljs$lang$applyTo = (function (arglist__29649){
var args = cljs.core.seq(arglist__29649);
return G__29647__delegate(args);
});
G__29647.cljs$core$IFn$_invoke$arity$variadic = G__29647__delegate;
return G__29647;
})()
;})(_STAR_print_fn_STAR_29646))
;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29646;
}}catch (e29645){if((e29645 instanceof Error)){
var e = e29645;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e29645;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__29653){
var vec__29654 = p__29653;
var map__29655 = cljs.core.nth.call(null,vec__29654,(0),null);
var map__29655__$1 = ((cljs.core.seq_QMARK_.call(null,map__29655))?cljs.core.apply.call(null,cljs.core.hash_map,map__29655):map__29655);
var msg = map__29655__$1;
var msg_name = cljs.core.get.call(null,map__29655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29654,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29654,map__29655,map__29655__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29654,map__29655,map__29655__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__29659){
var vec__29660 = p__29659;
var map__29661 = cljs.core.nth.call(null,vec__29660,(0),null);
var map__29661__$1 = ((cljs.core.seq_QMARK_.call(null,map__29661))?cljs.core.apply.call(null,cljs.core.hash_map,map__29661):map__29661);
var msg = map__29661__$1;
var msg_name = cljs.core.get.call(null,map__29661__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29660,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__29662){
var map__29670 = p__29662;
var map__29670__$1 = ((cljs.core.seq_QMARK_.call(null,map__29670))?cljs.core.apply.call(null,cljs.core.hash_map,map__29670):map__29670);
var on_compile_fail = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__29670,map__29670__$1,on_compile_fail,on_compile_warning){
return (function (p__29671){
var vec__29672 = p__29671;
var map__29673 = cljs.core.nth.call(null,vec__29672,(0),null);
var map__29673__$1 = ((cljs.core.seq_QMARK_.call(null,map__29673))?cljs.core.apply.call(null,cljs.core.hash_map,map__29673):map__29673);
var msg = map__29673__$1;
var msg_name = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29672,(1));
var pred__29674 = cljs.core._EQ_;
var expr__29675 = msg_name;
if(cljs.core.truth_(pred__29674.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29675))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29674.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29675))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29670,map__29670__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__,msg_hist,msg_names,msg){
return (function (state_29852){
var state_val_29853 = (state_29852[(1)]);
if((state_val_29853 === (7))){
var inst_29801 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29852__$1 = state_29852;
if(inst_29801){
var statearr_29854_29891 = state_29852__$1;
(statearr_29854_29891[(1)] = (11));

} else {
var statearr_29855_29892 = state_29852__$1;
(statearr_29855_29892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (20))){
var inst_29842 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29856_29893 = state_29852__$1;
(statearr_29856_29893[(2)] = inst_29842);

(statearr_29856_29893[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (27))){
var inst_29833 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(30),inst_29833);
} else {
if((state_val_29853 === (1))){
var inst_29784 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29852__$1 = state_29852;
if(cljs.core.truth_(inst_29784)){
var statearr_29857_29894 = state_29852__$1;
(statearr_29857_29894[(1)] = (2));

} else {
var statearr_29858_29895 = state_29852__$1;
(statearr_29858_29895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (24))){
var inst_29831 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29852__$1 = state_29852;
if(inst_29831){
var statearr_29859_29896 = state_29852__$1;
(statearr_29859_29896[(1)] = (27));

} else {
var statearr_29860_29897 = state_29852__$1;
(statearr_29860_29897[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (4))){
var inst_29850 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29852__$1,inst_29850);
} else {
if((state_val_29853 === (15))){
var inst_29811 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29812 = figwheel.client.heads_up.append_message.call(null,inst_29811);
var state_29852__$1 = state_29852;
var statearr_29861_29898 = state_29852__$1;
(statearr_29861_29898[(2)] = inst_29812);

(statearr_29861_29898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (21))){
var inst_29818 = (state_29852[(2)]);
var inst_29819 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29820 = figwheel.client.heads_up.display_warning.call(null,inst_29819);
var state_29852__$1 = (function (){var statearr_29862 = state_29852;
(statearr_29862[(7)] = inst_29818);

return statearr_29862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(22),inst_29820);
} else {
if((state_val_29853 === (13))){
var inst_29846 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29863_29899 = state_29852__$1;
(statearr_29863_29899[(2)] = inst_29846);

(statearr_29863_29899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (22))){
var inst_29822 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29864_29900 = state_29852__$1;
(statearr_29864_29900[(2)] = inst_29822);

(statearr_29864_29900[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (29))){
var inst_29838 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29865_29901 = state_29852__$1;
(statearr_29865_29901[(2)] = inst_29838);

(statearr_29865_29901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (6))){
var inst_29792 = figwheel.client.heads_up.clear.call(null);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(9),inst_29792);
} else {
if((state_val_29853 === (28))){
var state_29852__$1 = state_29852;
var statearr_29866_29902 = state_29852__$1;
(statearr_29866_29902[(2)] = null);

(statearr_29866_29902[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (25))){
var inst_29840 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29867_29903 = state_29852__$1;
(statearr_29867_29903[(2)] = inst_29840);

(statearr_29867_29903[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (17))){
var inst_29844 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29868_29904 = state_29852__$1;
(statearr_29868_29904[(2)] = inst_29844);

(statearr_29868_29904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (3))){
var inst_29790 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29852__$1 = state_29852;
if(inst_29790){
var statearr_29869_29905 = state_29852__$1;
(statearr_29869_29905[(1)] = (6));

} else {
var statearr_29870_29906 = state_29852__$1;
(statearr_29870_29906[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (12))){
var inst_29809 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29852__$1 = state_29852;
if(inst_29809){
var statearr_29871_29907 = state_29852__$1;
(statearr_29871_29907[(1)] = (15));

} else {
var statearr_29872_29908 = state_29852__$1;
(statearr_29872_29908[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (2))){
var inst_29786 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(5),inst_29786);
} else {
if((state_val_29853 === (23))){
var inst_29826 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29827 = figwheel.client.heads_up.display_warning.call(null,inst_29826);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(26),inst_29827);
} else {
if((state_val_29853 === (19))){
var inst_29824 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29852__$1 = state_29852;
if(inst_29824){
var statearr_29873_29909 = state_29852__$1;
(statearr_29873_29909[(1)] = (23));

} else {
var statearr_29874_29910 = state_29852__$1;
(statearr_29874_29910[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (11))){
var inst_29803 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29804 = figwheel.client.format_messages.call(null,inst_29803);
var inst_29805 = figwheel.client.heads_up.display_error.call(null,inst_29804);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(14),inst_29805);
} else {
if((state_val_29853 === (9))){
var inst_29794 = (state_29852[(2)]);
var inst_29795 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29796 = figwheel.client.format_messages.call(null,inst_29795);
var inst_29797 = figwheel.client.heads_up.display_error.call(null,inst_29796);
var state_29852__$1 = (function (){var statearr_29875 = state_29852;
(statearr_29875[(8)] = inst_29794);

return statearr_29875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(10),inst_29797);
} else {
if((state_val_29853 === (5))){
var inst_29788 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29876_29911 = state_29852__$1;
(statearr_29876_29911[(2)] = inst_29788);

(statearr_29876_29911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (14))){
var inst_29807 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29877_29912 = state_29852__$1;
(statearr_29877_29912[(2)] = inst_29807);

(statearr_29877_29912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (26))){
var inst_29829 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29878_29913 = state_29852__$1;
(statearr_29878_29913[(2)] = inst_29829);

(statearr_29878_29913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (16))){
var inst_29814 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29852__$1 = state_29852;
if(inst_29814){
var statearr_29879_29914 = state_29852__$1;
(statearr_29879_29914[(1)] = (18));

} else {
var statearr_29880_29915 = state_29852__$1;
(statearr_29880_29915[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (30))){
var inst_29835 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29881_29916 = state_29852__$1;
(statearr_29881_29916[(2)] = inst_29835);

(statearr_29881_29916[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (10))){
var inst_29799 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29882_29917 = state_29852__$1;
(statearr_29882_29917[(2)] = inst_29799);

(statearr_29882_29917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (18))){
var inst_29816 = figwheel.client.heads_up.clear.call(null);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(21),inst_29816);
} else {
if((state_val_29853 === (8))){
var inst_29848 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29883_29918 = state_29852__$1;
(statearr_29883_29918[(2)] = inst_29848);

(statearr_29883_29918[(1)] = (4));


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
});})(c__15819__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15763__auto__,c__15819__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_29887 = [null,null,null,null,null,null,null,null,null];
(statearr_29887[(0)] = state_machine__15764__auto__);

(statearr_29887[(1)] = (1));

return statearr_29887;
});
var state_machine__15764__auto____1 = (function (state_29852){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_29852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e29888){if((e29888 instanceof Object)){
var ex__15767__auto__ = e29888;
var statearr_29889_29919 = state_29852;
(statearr_29889_29919[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29920 = state_29852;
state_29852 = G__29920;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_29852){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_29852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__,msg_hist,msg_names,msg))
})();
var state__15821__auto__ = (function (){var statearr_29890 = f__15820__auto__.call(null);
(statearr_29890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_29890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__,msg_hist,msg_names,msg))
);

return c__15819__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15819__auto___29983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___29983,ch){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___29983,ch){
return (function (state_29966){
var state_val_29967 = (state_29966[(1)]);
if((state_val_29967 === (8))){
var inst_29958 = (state_29966[(2)]);
var state_29966__$1 = (function (){var statearr_29968 = state_29966;
(statearr_29968[(7)] = inst_29958);

return statearr_29968;
})();
var statearr_29969_29984 = state_29966__$1;
(statearr_29969_29984[(2)] = null);

(statearr_29969_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (7))){
var inst_29962 = (state_29966[(2)]);
var state_29966__$1 = state_29966;
var statearr_29970_29985 = state_29966__$1;
(statearr_29970_29985[(2)] = inst_29962);

(statearr_29970_29985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (6))){
var state_29966__$1 = state_29966;
var statearr_29971_29986 = state_29966__$1;
(statearr_29971_29986[(2)] = null);

(statearr_29971_29986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (5))){
var inst_29954 = (state_29966[(8)]);
var inst_29956 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29954);
var state_29966__$1 = state_29966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29966__$1,(8),inst_29956);
} else {
if((state_val_29967 === (4))){
var inst_29954 = (state_29966[(8)]);
var inst_29954__$1 = (state_29966[(2)]);
var state_29966__$1 = (function (){var statearr_29972 = state_29966;
(statearr_29972[(8)] = inst_29954__$1);

return statearr_29972;
})();
if(cljs.core.truth_(inst_29954__$1)){
var statearr_29973_29987 = state_29966__$1;
(statearr_29973_29987[(1)] = (5));

} else {
var statearr_29974_29988 = state_29966__$1;
(statearr_29974_29988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (3))){
var inst_29964 = (state_29966[(2)]);
var state_29966__$1 = state_29966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29966__$1,inst_29964);
} else {
if((state_val_29967 === (2))){
var state_29966__$1 = state_29966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29966__$1,(4),ch);
} else {
if((state_val_29967 === (1))){
var state_29966__$1 = state_29966;
var statearr_29975_29989 = state_29966__$1;
(statearr_29975_29989[(2)] = null);

(statearr_29975_29989[(1)] = (2));


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
});})(c__15819__auto___29983,ch))
;
return ((function (switch__15763__auto__,c__15819__auto___29983,ch){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_29979 = [null,null,null,null,null,null,null,null,null];
(statearr_29979[(0)] = state_machine__15764__auto__);

(statearr_29979[(1)] = (1));

return statearr_29979;
});
var state_machine__15764__auto____1 = (function (state_29966){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_29966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e29980){if((e29980 instanceof Object)){
var ex__15767__auto__ = e29980;
var statearr_29981_29990 = state_29966;
(statearr_29981_29990[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29991 = state_29966;
state_29966 = G__29991;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_29966){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_29966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___29983,ch))
})();
var state__15821__auto__ = (function (){var statearr_29982 = f__15820__auto__.call(null);
(statearr_29982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___29983);

return statearr_29982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___29983,ch))
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
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__){
return (function (state_30012){
var state_val_30013 = (state_30012[(1)]);
if((state_val_30013 === (2))){
var inst_30009 = (state_30012[(2)]);
var inst_30010 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30012__$1 = (function (){var statearr_30014 = state_30012;
(statearr_30014[(7)] = inst_30009);

return statearr_30014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30012__$1,inst_30010);
} else {
if((state_val_30013 === (1))){
var inst_30007 = cljs.core.async.timeout.call(null,(3000));
var state_30012__$1 = state_30012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30012__$1,(2),inst_30007);
} else {
return null;
}
}
});})(c__15819__auto__))
;
return ((function (switch__15763__auto__,c__15819__auto__){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_30018 = [null,null,null,null,null,null,null,null];
(statearr_30018[(0)] = state_machine__15764__auto__);

(statearr_30018[(1)] = (1));

return statearr_30018;
});
var state_machine__15764__auto____1 = (function (state_30012){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_30012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e30019){if((e30019 instanceof Object)){
var ex__15767__auto__ = e30019;
var statearr_30020_30022 = state_30012;
(statearr_30020_30022[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30023 = state_30012;
state_30012 = G__30023;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_30012){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_30012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_30021 = f__15820__auto__.call(null);
(statearr_30021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_30021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__))
);

return c__15819__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30027 = {"detail":url};
return obj30027;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30028){
var map__30034 = p__30028;
var map__30034__$1 = ((cljs.core.seq_QMARK_.call(null,map__30034))?cljs.core.apply.call(null,cljs.core.hash_map,map__30034):map__30034);
var ed = map__30034__$1;
var exception_data = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__30035_30039 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30036_30040 = null;
var count__30037_30041 = (0);
var i__30038_30042 = (0);
while(true){
if((i__30038_30042 < count__30037_30041)){
var msg_30043 = cljs.core._nth.call(null,chunk__30036_30040,i__30038_30042);
console.log(msg_30043);

var G__30044 = seq__30035_30039;
var G__30045 = chunk__30036_30040;
var G__30046 = count__30037_30041;
var G__30047 = (i__30038_30042 + (1));
seq__30035_30039 = G__30044;
chunk__30036_30040 = G__30045;
count__30037_30041 = G__30046;
i__30038_30042 = G__30047;
continue;
} else {
var temp__4126__auto___30048 = cljs.core.seq.call(null,seq__30035_30039);
if(temp__4126__auto___30048){
var seq__30035_30049__$1 = temp__4126__auto___30048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30035_30049__$1)){
var c__13963__auto___30050 = cljs.core.chunk_first.call(null,seq__30035_30049__$1);
var G__30051 = cljs.core.chunk_rest.call(null,seq__30035_30049__$1);
var G__30052 = c__13963__auto___30050;
var G__30053 = cljs.core.count.call(null,c__13963__auto___30050);
var G__30054 = (0);
seq__30035_30039 = G__30051;
chunk__30036_30040 = G__30052;
count__30037_30041 = G__30053;
i__30038_30042 = G__30054;
continue;
} else {
var msg_30055 = cljs.core.first.call(null,seq__30035_30049__$1);
console.log(msg_30055);

var G__30056 = cljs.core.next.call(null,seq__30035_30049__$1);
var G__30057 = null;
var G__30058 = (0);
var G__30059 = (0);
seq__30035_30039 = G__30056;
chunk__30036_30040 = G__30057;
count__30037_30041 = G__30058;
i__30038_30042 = G__30059;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30060){
var map__30062 = p__30060;
var map__30062__$1 = ((cljs.core.seq_QMARK_.call(null,map__30062))?cljs.core.apply.call(null,cljs.core.hash_map,map__30062):map__30062);
var w = map__30062__$1;
var message = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30069 = cljs.core.seq.call(null,plugins);
var chunk__30070 = null;
var count__30071 = (0);
var i__30072 = (0);
while(true){
if((i__30072 < count__30071)){
var vec__30073 = cljs.core._nth.call(null,chunk__30070,i__30072);
var k = cljs.core.nth.call(null,vec__30073,(0),null);
var plugin = cljs.core.nth.call(null,vec__30073,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30075 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30069,chunk__30070,count__30071,i__30072,pl_30075,vec__30073,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30075.call(null,msg_hist);
});})(seq__30069,chunk__30070,count__30071,i__30072,pl_30075,vec__30073,k,plugin))
);
} else {
}

var G__30076 = seq__30069;
var G__30077 = chunk__30070;
var G__30078 = count__30071;
var G__30079 = (i__30072 + (1));
seq__30069 = G__30076;
chunk__30070 = G__30077;
count__30071 = G__30078;
i__30072 = G__30079;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30069);
if(temp__4126__auto__){
var seq__30069__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30069__$1)){
var c__13963__auto__ = cljs.core.chunk_first.call(null,seq__30069__$1);
var G__30080 = cljs.core.chunk_rest.call(null,seq__30069__$1);
var G__30081 = c__13963__auto__;
var G__30082 = cljs.core.count.call(null,c__13963__auto__);
var G__30083 = (0);
seq__30069 = G__30080;
chunk__30070 = G__30081;
count__30071 = G__30082;
i__30072 = G__30083;
continue;
} else {
var vec__30074 = cljs.core.first.call(null,seq__30069__$1);
var k = cljs.core.nth.call(null,vec__30074,(0),null);
var plugin = cljs.core.nth.call(null,vec__30074,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30084 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30069,chunk__30070,count__30071,i__30072,pl_30084,vec__30074,k,plugin,seq__30069__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30084.call(null,msg_hist);
});})(seq__30069,chunk__30070,count__30071,i__30072,pl_30084,vec__30074,k,plugin,seq__30069__$1,temp__4126__auto__))
);
} else {
}

var G__30085 = cljs.core.next.call(null,seq__30069__$1);
var G__30086 = null;
var G__30087 = (0);
var G__30088 = (0);
seq__30069 = G__30085;
chunk__30070 = G__30086;
count__30071 = G__30087;
i__30072 = G__30088;
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
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
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
var watch_and_reload__delegate = function (p__30089){
var map__30091 = p__30089;
var map__30091__$1 = ((cljs.core.seq_QMARK_.call(null,map__30091))?cljs.core.apply.call(null,cljs.core.hash_map,map__30091):map__30091);
var opts = map__30091__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30089 = null;
if (arguments.length > 0) {
var G__30092__i = 0, G__30092__a = new Array(arguments.length -  0);
while (G__30092__i < G__30092__a.length) {G__30092__a[G__30092__i] = arguments[G__30092__i + 0]; ++G__30092__i;}
  p__30089 = new cljs.core.IndexedSeq(G__30092__a,0);
} 
return watch_and_reload__delegate.call(this,p__30089);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30093){
var p__30089 = cljs.core.seq(arglist__30093);
return watch_and_reload__delegate(p__30089);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map