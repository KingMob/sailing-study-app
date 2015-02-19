// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
if(typeof sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ !== 'undefined'){
} else {
sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ = true;
}
if(typeof sailing_study_guide.dispatch.dispatch_chan !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null,(1));
}
if(typeof sailing_study_guide.dispatch.dispatch_mult !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
}
if(typeof sailing_study_guide.dispatch.dispatch_pub_chan !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null,(1));
}
if(typeof sailing_study_guide.dispatch.dispatch_pub !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__18927_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__18927_SHARP_);
}));
}
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_pub_chan);
sailing_study_guide.dispatch.retrieve_message = (function retrieve_message(payload){
if(cljs.core.truth_(payload)){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(payload);
} else {
return null;
}
});
sailing_study_guide.dispatch.register = (function register(tag){
var c = cljs.core.async.chan.call(null);
return cljs.core.async.sub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,c);
});
sailing_study_guide.dispatch.unregister = (function unregister(tag,chan){
cljs.core.async.unsub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,chan);

return cljs.core.async.close_BANG_.call(null,chan);
});
sailing_study_guide.dispatch.whenever = (function whenever(tag,cb){
var c = sailing_study_guide.dispatch.register.call(null,tag);
var c__15997__auto___19002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___19002,c){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___19002,c){
return (function (state_18983){
var state_val_18984 = (state_18983[(1)]);
if((state_val_18984 === (8))){
var inst_18973 = (state_18983[(2)]);
var inst_18967 = inst_18973;
var state_18983__$1 = (function (){var statearr_18985 = state_18983;
(statearr_18985[(7)] = inst_18967);

return statearr_18985;
})();
var statearr_18986_19003 = state_18983__$1;
(statearr_18986_19003[(2)] = null);

(statearr_18986_19003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (7))){
var inst_18979 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18987_19004 = state_18983__$1;
(statearr_18987_19004[(2)] = inst_18979);

(statearr_18987_19004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (6))){
var inst_18976 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_18977 = cljs.core.async.close_BANG_.call(null,c);
var state_18983__$1 = (function (){var statearr_18988 = state_18983;
(statearr_18988[(8)] = inst_18976);

return statearr_18988;
})();
var statearr_18989_19005 = state_18983__$1;
(statearr_18989_19005[(2)] = inst_18977);

(statearr_18989_19005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (5))){
var inst_18967 = (state_18983[(7)]);
var inst_18970 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_18967);
var inst_18971 = cb.call(null,inst_18970);
var state_18983__$1 = (function (){var statearr_18990 = state_18983;
(statearr_18990[(9)] = inst_18971);

return statearr_18990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18983__$1,(8),c);
} else {
if((state_val_18984 === (4))){
var inst_18981 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18983__$1,inst_18981);
} else {
if((state_val_18984 === (3))){
var inst_18967 = (state_18983[(7)]);
var state_18983__$1 = state_18983;
if(cljs.core.truth_(inst_18967)){
var statearr_18991_19006 = state_18983__$1;
(statearr_18991_19006[(1)] = (5));

} else {
var statearr_18992_19007 = state_18983__$1;
(statearr_18992_19007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (2))){
var inst_18966 = (state_18983[(2)]);
var inst_18967 = inst_18966;
var state_18983__$1 = (function (){var statearr_18993 = state_18983;
(statearr_18993[(7)] = inst_18967);

return statearr_18993;
})();
var statearr_18994_19008 = state_18983__$1;
(statearr_18994_19008[(2)] = null);

(statearr_18994_19008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (1))){
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18983__$1,(2),c);
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
});})(c__15997__auto___19002,c))
;
return ((function (switch__15941__auto__,c__15997__auto___19002,c){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_18998 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18998[(0)] = state_machine__15942__auto__);

(statearr_18998[(1)] = (1));

return statearr_18998;
});
var state_machine__15942__auto____1 = (function (state_18983){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_18983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e18999){if((e18999 instanceof Object)){
var ex__15945__auto__ = e18999;
var statearr_19000_19009 = state_18983;
(statearr_19000_19009[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19010 = state_18983;
state_18983 = G__19010;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_18983){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_18983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___19002,c))
})();
var state__15999__auto__ = (function (){var statearr_19001 = f__15998__auto__.call(null);
(statearr_19001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___19002);

return statearr_19001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___19002,c))
);


return c;
});
sailing_study_guide.dispatch.dispatch_BANG_ = (function dispatch_BANG_(tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__19049 = cljs.core.seq.call(null,tags);
var chunk__19050 = null;
var count__19051 = (0);
var i__19052 = (0);
while(true){
if((i__19052 < count__19051)){
var tag = cljs.core._nth.call(null,chunk__19050,i__19052);
var c__15997__auto___19087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19049,chunk__19050,count__19051,i__19052,c__15997__auto___19087,tag,tags){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (seq__19049,chunk__19050,count__19051,i__19052,c__15997__auto___19087,tag,tags){
return (function (state_19060){
var state_val_19061 = (state_19060[(1)]);
if((state_val_19061 === (2))){
var inst_19057 = (state_19060[(2)]);
var inst_19058 = cljs.core.println.call(null,"Put!");
var state_19060__$1 = (function (){var statearr_19062 = state_19060;
(statearr_19062[(7)] = inst_19057);

return statearr_19062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19060__$1,inst_19058);
} else {
if((state_val_19061 === (1))){
var inst_19053 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_19054 = [tag,message];
var inst_19055 = cljs.core.PersistentHashMap.fromArrays(inst_19053,inst_19054);
var state_19060__$1 = state_19060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19060__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_19055);
} else {
return null;
}
}
});})(seq__19049,chunk__19050,count__19051,i__19052,c__15997__auto___19087,tag,tags))
;
return ((function (seq__19049,chunk__19050,count__19051,i__19052,switch__15941__auto__,c__15997__auto___19087,tag,tags){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_19066 = [null,null,null,null,null,null,null,null];
(statearr_19066[(0)] = state_machine__15942__auto__);

(statearr_19066[(1)] = (1));

return statearr_19066;
});
var state_machine__15942__auto____1 = (function (state_19060){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_19060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e19067){if((e19067 instanceof Object)){
var ex__15945__auto__ = e19067;
var statearr_19068_19088 = state_19060;
(statearr_19068_19088[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19089 = state_19060;
state_19060 = G__19089;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_19060){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_19060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(seq__19049,chunk__19050,count__19051,i__19052,switch__15941__auto__,c__15997__auto___19087,tag,tags))
})();
var state__15999__auto__ = (function (){var statearr_19069 = f__15998__auto__.call(null);
(statearr_19069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___19087);

return statearr_19069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(seq__19049,chunk__19050,count__19051,i__19052,c__15997__auto___19087,tag,tags))
);


var G__19090 = seq__19049;
var G__19091 = chunk__19050;
var G__19092 = count__19051;
var G__19093 = (i__19052 + (1));
seq__19049 = G__19090;
chunk__19050 = G__19091;
count__19051 = G__19092;
i__19052 = G__19093;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19049);
if(temp__4126__auto__){
var seq__19049__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19049__$1)){
var c__14115__auto__ = cljs.core.chunk_first.call(null,seq__19049__$1);
var G__19094 = cljs.core.chunk_rest.call(null,seq__19049__$1);
var G__19095 = c__14115__auto__;
var G__19096 = cljs.core.count.call(null,c__14115__auto__);
var G__19097 = (0);
seq__19049 = G__19094;
chunk__19050 = G__19095;
count__19051 = G__19096;
i__19052 = G__19097;
continue;
} else {
var tag = cljs.core.first.call(null,seq__19049__$1);
var c__15997__auto___19098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19049,chunk__19050,count__19051,i__19052,c__15997__auto___19098,tag,seq__19049__$1,temp__4126__auto__,tags){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (seq__19049,chunk__19050,count__19051,i__19052,c__15997__auto___19098,tag,seq__19049__$1,temp__4126__auto__,tags){
return (function (state_19077){
var state_val_19078 = (state_19077[(1)]);
if((state_val_19078 === (2))){
var inst_19074 = (state_19077[(2)]);
var inst_19075 = cljs.core.println.call(null,"Put!");
var state_19077__$1 = (function (){var statearr_19079 = state_19077;
(statearr_19079[(7)] = inst_19074);

return statearr_19079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19077__$1,inst_19075);
} else {
if((state_val_19078 === (1))){
var inst_19070 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_19071 = [tag,message];
var inst_19072 = cljs.core.PersistentHashMap.fromArrays(inst_19070,inst_19071);
var state_19077__$1 = state_19077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19077__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_19072);
} else {
return null;
}
}
});})(seq__19049,chunk__19050,count__19051,i__19052,c__15997__auto___19098,tag,seq__19049__$1,temp__4126__auto__,tags))
;
return ((function (seq__19049,chunk__19050,count__19051,i__19052,switch__15941__auto__,c__15997__auto___19098,tag,seq__19049__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_19083 = [null,null,null,null,null,null,null,null];
(statearr_19083[(0)] = state_machine__15942__auto__);

(statearr_19083[(1)] = (1));

return statearr_19083;
});
var state_machine__15942__auto____1 = (function (state_19077){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_19077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e19084){if((e19084 instanceof Object)){
var ex__15945__auto__ = e19084;
var statearr_19085_19099 = state_19077;
(statearr_19085_19099[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19100 = state_19077;
state_19077 = G__19100;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_19077){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_19077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(seq__19049,chunk__19050,count__19051,i__19052,switch__15941__auto__,c__15997__auto___19098,tag,seq__19049__$1,temp__4126__auto__,tags))
})();
var state__15999__auto__ = (function (){var statearr_19086 = f__15998__auto__.call(null);
(statearr_19086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___19098);

return statearr_19086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(seq__19049,chunk__19050,count__19051,i__19052,c__15997__auto___19098,tag,seq__19049__$1,temp__4126__auto__,tags))
);


var G__19101 = cljs.core.next.call(null,seq__19049__$1);
var G__19102 = null;
var G__19103 = (0);
var G__19104 = (0);
seq__19049 = G__19101;
chunk__19050 = G__19102;
count__19051 = G__19103;
i__19052 = G__19104;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.truth_(sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_)){
if(typeof sailing_study_guide.dispatch.dispatch_logger_chan !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);
}

cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);

var c__15997__auto___19126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___19126){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___19126){
return (function (state_19114){
var state_val_19115 = (state_19114[(1)]);
if((state_val_19115 === (4))){
var inst_19107 = (state_19114[(2)]);
var inst_19108 = cljs.core.pr_str.call(null,inst_19107);
var inst_19109 = cljs.core.println.call(null,"Logged: ",inst_19108);
var state_19114__$1 = (function (){var statearr_19116 = state_19114;
(statearr_19116[(7)] = inst_19109);

return statearr_19116;
})();
var statearr_19117_19127 = state_19114__$1;
(statearr_19117_19127[(2)] = null);

(statearr_19117_19127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (3))){
var inst_19112 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19114__$1,inst_19112);
} else {
if((state_val_19115 === (2))){
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19114__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_19115 === (1))){
var state_19114__$1 = state_19114;
var statearr_19118_19128 = state_19114__$1;
(statearr_19118_19128[(2)] = null);

(statearr_19118_19128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15997__auto___19126))
;
return ((function (switch__15941__auto__,c__15997__auto___19126){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_19122 = [null,null,null,null,null,null,null,null];
(statearr_19122[(0)] = state_machine__15942__auto__);

(statearr_19122[(1)] = (1));

return statearr_19122;
});
var state_machine__15942__auto____1 = (function (state_19114){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_19114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e19123){if((e19123 instanceof Object)){
var ex__15945__auto__ = e19123;
var statearr_19124_19129 = state_19114;
(statearr_19124_19129[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19130 = state_19114;
state_19114 = G__19130;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_19114){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_19114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___19126))
})();
var state__15999__auto__ = (function (){var statearr_19125 = f__15998__auto__.call(null);
(statearr_19125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___19126);

return statearr_19125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___19126))
);

} else {
}

//# sourceMappingURL=dispatch.js.map