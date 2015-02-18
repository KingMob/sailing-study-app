// Compiled by ClojureScript 0.0-2843 {:elide-asserts false}
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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__18897_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__18897_SHARP_);
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
var c__15967__auto___18972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___18972,c){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___18972,c){
return (function (state_18953){
var state_val_18954 = (state_18953[(1)]);
if((state_val_18954 === (8))){
var inst_18943 = (state_18953[(2)]);
var inst_18937 = inst_18943;
var state_18953__$1 = (function (){var statearr_18955 = state_18953;
(statearr_18955[(7)] = inst_18937);

return statearr_18955;
})();
var statearr_18956_18973 = state_18953__$1;
(statearr_18956_18973[(2)] = null);

(statearr_18956_18973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (7))){
var inst_18949 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
var statearr_18957_18974 = state_18953__$1;
(statearr_18957_18974[(2)] = inst_18949);

(statearr_18957_18974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (6))){
var inst_18946 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_18947 = cljs.core.async.close_BANG_.call(null,c);
var state_18953__$1 = (function (){var statearr_18958 = state_18953;
(statearr_18958[(8)] = inst_18946);

return statearr_18958;
})();
var statearr_18959_18975 = state_18953__$1;
(statearr_18959_18975[(2)] = inst_18947);

(statearr_18959_18975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (5))){
var inst_18937 = (state_18953[(7)]);
var inst_18940 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_18937);
var inst_18941 = cb.call(null,inst_18940);
var state_18953__$1 = (function (){var statearr_18960 = state_18953;
(statearr_18960[(9)] = inst_18941);

return statearr_18960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18953__$1,(8),c);
} else {
if((state_val_18954 === (4))){
var inst_18951 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18953__$1,inst_18951);
} else {
if((state_val_18954 === (3))){
var inst_18937 = (state_18953[(7)]);
var state_18953__$1 = state_18953;
if(cljs.core.truth_(inst_18937)){
var statearr_18961_18976 = state_18953__$1;
(statearr_18961_18976[(1)] = (5));

} else {
var statearr_18962_18977 = state_18953__$1;
(statearr_18962_18977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (2))){
var inst_18936 = (state_18953[(2)]);
var inst_18937 = inst_18936;
var state_18953__$1 = (function (){var statearr_18963 = state_18953;
(statearr_18963[(7)] = inst_18937);

return statearr_18963;
})();
var statearr_18964_18978 = state_18953__$1;
(statearr_18964_18978[(2)] = null);

(statearr_18964_18978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (1))){
var state_18953__$1 = state_18953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18953__$1,(2),c);
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
});})(c__15967__auto___18972,c))
;
return ((function (switch__15911__auto__,c__15967__auto___18972,c){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_18968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18968[(0)] = state_machine__15912__auto__);

(statearr_18968[(1)] = (1));

return statearr_18968;
});
var state_machine__15912__auto____1 = (function (state_18953){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_18953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e18969){if((e18969 instanceof Object)){
var ex__15915__auto__ = e18969;
var statearr_18970_18979 = state_18953;
(statearr_18970_18979[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18980 = state_18953;
state_18953 = G__18980;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_18953){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_18953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___18972,c))
})();
var state__15969__auto__ = (function (){var statearr_18971 = f__15968__auto__.call(null);
(statearr_18971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___18972);

return statearr_18971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___18972,c))
);


return c;
});
sailing_study_guide.dispatch.dispatch_BANG_ = (function dispatch_BANG_(tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__19019 = cljs.core.seq.call(null,tags);
var chunk__19020 = null;
var count__19021 = (0);
var i__19022 = (0);
while(true){
if((i__19022 < count__19021)){
var tag = cljs.core._nth.call(null,chunk__19020,i__19022);
var c__15967__auto___19057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19019,chunk__19020,count__19021,i__19022,c__15967__auto___19057,tag,tags){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (seq__19019,chunk__19020,count__19021,i__19022,c__15967__auto___19057,tag,tags){
return (function (state_19030){
var state_val_19031 = (state_19030[(1)]);
if((state_val_19031 === (2))){
var inst_19027 = (state_19030[(2)]);
var inst_19028 = cljs.core.println.call(null,"Put!");
var state_19030__$1 = (function (){var statearr_19032 = state_19030;
(statearr_19032[(7)] = inst_19027);

return statearr_19032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19030__$1,inst_19028);
} else {
if((state_val_19031 === (1))){
var inst_19023 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_19024 = [tag,message];
var inst_19025 = cljs.core.PersistentHashMap.fromArrays(inst_19023,inst_19024);
var state_19030__$1 = state_19030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19030__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_19025);
} else {
return null;
}
}
});})(seq__19019,chunk__19020,count__19021,i__19022,c__15967__auto___19057,tag,tags))
;
return ((function (seq__19019,chunk__19020,count__19021,i__19022,switch__15911__auto__,c__15967__auto___19057,tag,tags){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_19036 = [null,null,null,null,null,null,null,null];
(statearr_19036[(0)] = state_machine__15912__auto__);

(statearr_19036[(1)] = (1));

return statearr_19036;
});
var state_machine__15912__auto____1 = (function (state_19030){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_19030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e19037){if((e19037 instanceof Object)){
var ex__15915__auto__ = e19037;
var statearr_19038_19058 = state_19030;
(statearr_19038_19058[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19059 = state_19030;
state_19030 = G__19059;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_19030){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_19030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(seq__19019,chunk__19020,count__19021,i__19022,switch__15911__auto__,c__15967__auto___19057,tag,tags))
})();
var state__15969__auto__ = (function (){var statearr_19039 = f__15968__auto__.call(null);
(statearr_19039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___19057);

return statearr_19039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(seq__19019,chunk__19020,count__19021,i__19022,c__15967__auto___19057,tag,tags))
);


var G__19060 = seq__19019;
var G__19061 = chunk__19020;
var G__19062 = count__19021;
var G__19063 = (i__19022 + (1));
seq__19019 = G__19060;
chunk__19020 = G__19061;
count__19021 = G__19062;
i__19022 = G__19063;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19019);
if(temp__4126__auto__){
var seq__19019__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19019__$1)){
var c__14110__auto__ = cljs.core.chunk_first.call(null,seq__19019__$1);
var G__19064 = cljs.core.chunk_rest.call(null,seq__19019__$1);
var G__19065 = c__14110__auto__;
var G__19066 = cljs.core.count.call(null,c__14110__auto__);
var G__19067 = (0);
seq__19019 = G__19064;
chunk__19020 = G__19065;
count__19021 = G__19066;
i__19022 = G__19067;
continue;
} else {
var tag = cljs.core.first.call(null,seq__19019__$1);
var c__15967__auto___19068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19019,chunk__19020,count__19021,i__19022,c__15967__auto___19068,tag,seq__19019__$1,temp__4126__auto__,tags){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (seq__19019,chunk__19020,count__19021,i__19022,c__15967__auto___19068,tag,seq__19019__$1,temp__4126__auto__,tags){
return (function (state_19047){
var state_val_19048 = (state_19047[(1)]);
if((state_val_19048 === (2))){
var inst_19044 = (state_19047[(2)]);
var inst_19045 = cljs.core.println.call(null,"Put!");
var state_19047__$1 = (function (){var statearr_19049 = state_19047;
(statearr_19049[(7)] = inst_19044);

return statearr_19049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19047__$1,inst_19045);
} else {
if((state_val_19048 === (1))){
var inst_19040 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_19041 = [tag,message];
var inst_19042 = cljs.core.PersistentHashMap.fromArrays(inst_19040,inst_19041);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19047__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_19042);
} else {
return null;
}
}
});})(seq__19019,chunk__19020,count__19021,i__19022,c__15967__auto___19068,tag,seq__19019__$1,temp__4126__auto__,tags))
;
return ((function (seq__19019,chunk__19020,count__19021,i__19022,switch__15911__auto__,c__15967__auto___19068,tag,seq__19019__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_19053 = [null,null,null,null,null,null,null,null];
(statearr_19053[(0)] = state_machine__15912__auto__);

(statearr_19053[(1)] = (1));

return statearr_19053;
});
var state_machine__15912__auto____1 = (function (state_19047){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_19047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e19054){if((e19054 instanceof Object)){
var ex__15915__auto__ = e19054;
var statearr_19055_19069 = state_19047;
(statearr_19055_19069[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19070 = state_19047;
state_19047 = G__19070;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_19047){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_19047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(seq__19019,chunk__19020,count__19021,i__19022,switch__15911__auto__,c__15967__auto___19068,tag,seq__19019__$1,temp__4126__auto__,tags))
})();
var state__15969__auto__ = (function (){var statearr_19056 = f__15968__auto__.call(null);
(statearr_19056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___19068);

return statearr_19056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(seq__19019,chunk__19020,count__19021,i__19022,c__15967__auto___19068,tag,seq__19019__$1,temp__4126__auto__,tags))
);


var G__19071 = cljs.core.next.call(null,seq__19019__$1);
var G__19072 = null;
var G__19073 = (0);
var G__19074 = (0);
seq__19019 = G__19071;
chunk__19020 = G__19072;
count__19021 = G__19073;
i__19022 = G__19074;
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

var c__15967__auto___19096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___19096){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___19096){
return (function (state_19084){
var state_val_19085 = (state_19084[(1)]);
if((state_val_19085 === (4))){
var inst_19077 = (state_19084[(2)]);
var inst_19078 = cljs.core.pr_str.call(null,inst_19077);
var inst_19079 = cljs.core.println.call(null,"Logged: ",inst_19078);
var state_19084__$1 = (function (){var statearr_19086 = state_19084;
(statearr_19086[(7)] = inst_19079);

return statearr_19086;
})();
var statearr_19087_19097 = state_19084__$1;
(statearr_19087_19097[(2)] = null);

(statearr_19087_19097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19085 === (3))){
var inst_19082 = (state_19084[(2)]);
var state_19084__$1 = state_19084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19084__$1,inst_19082);
} else {
if((state_val_19085 === (2))){
var state_19084__$1 = state_19084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19084__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_19085 === (1))){
var state_19084__$1 = state_19084;
var statearr_19088_19098 = state_19084__$1;
(statearr_19088_19098[(2)] = null);

(statearr_19088_19098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15967__auto___19096))
;
return ((function (switch__15911__auto__,c__15967__auto___19096){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_19092 = [null,null,null,null,null,null,null,null];
(statearr_19092[(0)] = state_machine__15912__auto__);

(statearr_19092[(1)] = (1));

return statearr_19092;
});
var state_machine__15912__auto____1 = (function (state_19084){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_19084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e19093){if((e19093 instanceof Object)){
var ex__15915__auto__ = e19093;
var statearr_19094_19099 = state_19084;
(statearr_19094_19099[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19100 = state_19084;
state_19084 = G__19100;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_19084){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_19084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___19096))
})();
var state__15969__auto__ = (function (){var statearr_19095 = f__15968__auto__.call(null);
(statearr_19095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___19096);

return statearr_19095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___19096))
);

} else {
}

//# sourceMappingURL=dispatch.js.map