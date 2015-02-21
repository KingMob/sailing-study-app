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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__18926_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__18926_SHARP_);
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
var c__15996__auto___19001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___19001,c){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___19001,c){
return (function (state_18982){
var state_val_18983 = (state_18982[(1)]);
if((state_val_18983 === (8))){
var inst_18972 = (state_18982[(2)]);
var inst_18966 = inst_18972;
var state_18982__$1 = (function (){var statearr_18984 = state_18982;
(statearr_18984[(7)] = inst_18966);

return statearr_18984;
})();
var statearr_18985_19002 = state_18982__$1;
(statearr_18985_19002[(2)] = null);

(statearr_18985_19002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18983 === (7))){
var inst_18978 = (state_18982[(2)]);
var state_18982__$1 = state_18982;
var statearr_18986_19003 = state_18982__$1;
(statearr_18986_19003[(2)] = inst_18978);

(statearr_18986_19003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18983 === (6))){
var inst_18975 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_18976 = cljs.core.async.close_BANG_.call(null,c);
var state_18982__$1 = (function (){var statearr_18987 = state_18982;
(statearr_18987[(8)] = inst_18975);

return statearr_18987;
})();
var statearr_18988_19004 = state_18982__$1;
(statearr_18988_19004[(2)] = inst_18976);

(statearr_18988_19004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18983 === (5))){
var inst_18966 = (state_18982[(7)]);
var inst_18969 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_18966);
var inst_18970 = cb.call(null,inst_18969);
var state_18982__$1 = (function (){var statearr_18989 = state_18982;
(statearr_18989[(9)] = inst_18970);

return statearr_18989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18982__$1,(8),c);
} else {
if((state_val_18983 === (4))){
var inst_18980 = (state_18982[(2)]);
var state_18982__$1 = state_18982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18982__$1,inst_18980);
} else {
if((state_val_18983 === (3))){
var inst_18966 = (state_18982[(7)]);
var state_18982__$1 = state_18982;
if(cljs.core.truth_(inst_18966)){
var statearr_18990_19005 = state_18982__$1;
(statearr_18990_19005[(1)] = (5));

} else {
var statearr_18991_19006 = state_18982__$1;
(statearr_18991_19006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18983 === (2))){
var inst_18965 = (state_18982[(2)]);
var inst_18966 = inst_18965;
var state_18982__$1 = (function (){var statearr_18992 = state_18982;
(statearr_18992[(7)] = inst_18966);

return statearr_18992;
})();
var statearr_18993_19007 = state_18982__$1;
(statearr_18993_19007[(2)] = null);

(statearr_18993_19007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18983 === (1))){
var state_18982__$1 = state_18982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18982__$1,(2),c);
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
});})(c__15996__auto___19001,c))
;
return ((function (switch__15940__auto__,c__15996__auto___19001,c){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_18997 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18997[(0)] = state_machine__15941__auto__);

(statearr_18997[(1)] = (1));

return statearr_18997;
});
var state_machine__15941__auto____1 = (function (state_18982){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_18982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e18998){if((e18998 instanceof Object)){
var ex__15944__auto__ = e18998;
var statearr_18999_19008 = state_18982;
(statearr_18999_19008[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19009 = state_18982;
state_18982 = G__19009;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_18982){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_18982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___19001,c))
})();
var state__15998__auto__ = (function (){var statearr_19000 = f__15997__auto__.call(null);
(statearr_19000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___19001);

return statearr_19000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___19001,c))
);


return c;
});
sailing_study_guide.dispatch.dispatch_BANG_ = (function dispatch_BANG_(tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__19048 = cljs.core.seq.call(null,tags);
var chunk__19049 = null;
var count__19050 = (0);
var i__19051 = (0);
while(true){
if((i__19051 < count__19050)){
var tag = cljs.core._nth.call(null,chunk__19049,i__19051);
var c__15996__auto___19086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19048,chunk__19049,count__19050,i__19051,c__15996__auto___19086,tag,tags){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (seq__19048,chunk__19049,count__19050,i__19051,c__15996__auto___19086,tag,tags){
return (function (state_19059){
var state_val_19060 = (state_19059[(1)]);
if((state_val_19060 === (2))){
var inst_19056 = (state_19059[(2)]);
var inst_19057 = cljs.core.println.call(null,"Put!");
var state_19059__$1 = (function (){var statearr_19061 = state_19059;
(statearr_19061[(7)] = inst_19056);

return statearr_19061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19059__$1,inst_19057);
} else {
if((state_val_19060 === (1))){
var inst_19052 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_19053 = [tag,message];
var inst_19054 = cljs.core.PersistentHashMap.fromArrays(inst_19052,inst_19053);
var state_19059__$1 = state_19059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19059__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_19054);
} else {
return null;
}
}
});})(seq__19048,chunk__19049,count__19050,i__19051,c__15996__auto___19086,tag,tags))
;
return ((function (seq__19048,chunk__19049,count__19050,i__19051,switch__15940__auto__,c__15996__auto___19086,tag,tags){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_19065 = [null,null,null,null,null,null,null,null];
(statearr_19065[(0)] = state_machine__15941__auto__);

(statearr_19065[(1)] = (1));

return statearr_19065;
});
var state_machine__15941__auto____1 = (function (state_19059){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_19059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e19066){if((e19066 instanceof Object)){
var ex__15944__auto__ = e19066;
var statearr_19067_19087 = state_19059;
(statearr_19067_19087[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19088 = state_19059;
state_19059 = G__19088;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_19059){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_19059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(seq__19048,chunk__19049,count__19050,i__19051,switch__15940__auto__,c__15996__auto___19086,tag,tags))
})();
var state__15998__auto__ = (function (){var statearr_19068 = f__15997__auto__.call(null);
(statearr_19068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___19086);

return statearr_19068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(seq__19048,chunk__19049,count__19050,i__19051,c__15996__auto___19086,tag,tags))
);


var G__19089 = seq__19048;
var G__19090 = chunk__19049;
var G__19091 = count__19050;
var G__19092 = (i__19051 + (1));
seq__19048 = G__19089;
chunk__19049 = G__19090;
count__19050 = G__19091;
i__19051 = G__19092;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19048);
if(temp__4126__auto__){
var seq__19048__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19048__$1)){
var c__14115__auto__ = cljs.core.chunk_first.call(null,seq__19048__$1);
var G__19093 = cljs.core.chunk_rest.call(null,seq__19048__$1);
var G__19094 = c__14115__auto__;
var G__19095 = cljs.core.count.call(null,c__14115__auto__);
var G__19096 = (0);
seq__19048 = G__19093;
chunk__19049 = G__19094;
count__19050 = G__19095;
i__19051 = G__19096;
continue;
} else {
var tag = cljs.core.first.call(null,seq__19048__$1);
var c__15996__auto___19097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19048,chunk__19049,count__19050,i__19051,c__15996__auto___19097,tag,seq__19048__$1,temp__4126__auto__,tags){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (seq__19048,chunk__19049,count__19050,i__19051,c__15996__auto___19097,tag,seq__19048__$1,temp__4126__auto__,tags){
return (function (state_19076){
var state_val_19077 = (state_19076[(1)]);
if((state_val_19077 === (2))){
var inst_19073 = (state_19076[(2)]);
var inst_19074 = cljs.core.println.call(null,"Put!");
var state_19076__$1 = (function (){var statearr_19078 = state_19076;
(statearr_19078[(7)] = inst_19073);

return statearr_19078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19076__$1,inst_19074);
} else {
if((state_val_19077 === (1))){
var inst_19069 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_19070 = [tag,message];
var inst_19071 = cljs.core.PersistentHashMap.fromArrays(inst_19069,inst_19070);
var state_19076__$1 = state_19076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19076__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_19071);
} else {
return null;
}
}
});})(seq__19048,chunk__19049,count__19050,i__19051,c__15996__auto___19097,tag,seq__19048__$1,temp__4126__auto__,tags))
;
return ((function (seq__19048,chunk__19049,count__19050,i__19051,switch__15940__auto__,c__15996__auto___19097,tag,seq__19048__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_19082 = [null,null,null,null,null,null,null,null];
(statearr_19082[(0)] = state_machine__15941__auto__);

(statearr_19082[(1)] = (1));

return statearr_19082;
});
var state_machine__15941__auto____1 = (function (state_19076){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_19076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e19083){if((e19083 instanceof Object)){
var ex__15944__auto__ = e19083;
var statearr_19084_19098 = state_19076;
(statearr_19084_19098[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19099 = state_19076;
state_19076 = G__19099;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_19076){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_19076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(seq__19048,chunk__19049,count__19050,i__19051,switch__15940__auto__,c__15996__auto___19097,tag,seq__19048__$1,temp__4126__auto__,tags))
})();
var state__15998__auto__ = (function (){var statearr_19085 = f__15997__auto__.call(null);
(statearr_19085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___19097);

return statearr_19085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(seq__19048,chunk__19049,count__19050,i__19051,c__15996__auto___19097,tag,seq__19048__$1,temp__4126__auto__,tags))
);


var G__19100 = cljs.core.next.call(null,seq__19048__$1);
var G__19101 = null;
var G__19102 = (0);
var G__19103 = (0);
seq__19048 = G__19100;
chunk__19049 = G__19101;
count__19050 = G__19102;
i__19051 = G__19103;
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

var c__15996__auto___19125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___19125){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___19125){
return (function (state_19113){
var state_val_19114 = (state_19113[(1)]);
if((state_val_19114 === (4))){
var inst_19106 = (state_19113[(2)]);
var inst_19107 = cljs.core.pr_str.call(null,inst_19106);
var inst_19108 = cljs.core.println.call(null,"Logged: ",inst_19107);
var state_19113__$1 = (function (){var statearr_19115 = state_19113;
(statearr_19115[(7)] = inst_19108);

return statearr_19115;
})();
var statearr_19116_19126 = state_19113__$1;
(statearr_19116_19126[(2)] = null);

(statearr_19116_19126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19114 === (3))){
var inst_19111 = (state_19113[(2)]);
var state_19113__$1 = state_19113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19113__$1,inst_19111);
} else {
if((state_val_19114 === (2))){
var state_19113__$1 = state_19113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19113__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_19114 === (1))){
var state_19113__$1 = state_19113;
var statearr_19117_19127 = state_19113__$1;
(statearr_19117_19127[(2)] = null);

(statearr_19117_19127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15996__auto___19125))
;
return ((function (switch__15940__auto__,c__15996__auto___19125){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_19121 = [null,null,null,null,null,null,null,null];
(statearr_19121[(0)] = state_machine__15941__auto__);

(statearr_19121[(1)] = (1));

return statearr_19121;
});
var state_machine__15941__auto____1 = (function (state_19113){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_19113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e19122){if((e19122 instanceof Object)){
var ex__15944__auto__ = e19122;
var statearr_19123_19128 = state_19113;
(statearr_19123_19128[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19129 = state_19113;
state_19113 = G__19129;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_19113){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_19113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___19125))
})();
var state__15998__auto__ = (function (){var statearr_19124 = f__15997__auto__.call(null);
(statearr_19124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___19125);

return statearr_19124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___19125))
);

} else {
}

//# sourceMappingURL=dispatch.js.map