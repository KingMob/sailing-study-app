// Compiled by ClojureScript 0.0-2816 {:elide-asserts false}
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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__18819_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__18819_SHARP_);
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
var c__15889__auto___18894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___18894,c){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___18894,c){
return (function (state_18875){
var state_val_18876 = (state_18875[(1)]);
if((state_val_18876 === (8))){
var inst_18865 = (state_18875[(2)]);
var inst_18859 = inst_18865;
var state_18875__$1 = (function (){var statearr_18877 = state_18875;
(statearr_18877[(7)] = inst_18859);

return statearr_18877;
})();
var statearr_18878_18895 = state_18875__$1;
(statearr_18878_18895[(2)] = null);

(statearr_18878_18895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18876 === (7))){
var inst_18871 = (state_18875[(2)]);
var state_18875__$1 = state_18875;
var statearr_18879_18896 = state_18875__$1;
(statearr_18879_18896[(2)] = inst_18871);

(statearr_18879_18896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18876 === (6))){
var inst_18868 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_18869 = cljs.core.async.close_BANG_.call(null,c);
var state_18875__$1 = (function (){var statearr_18880 = state_18875;
(statearr_18880[(8)] = inst_18868);

return statearr_18880;
})();
var statearr_18881_18897 = state_18875__$1;
(statearr_18881_18897[(2)] = inst_18869);

(statearr_18881_18897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18876 === (5))){
var inst_18859 = (state_18875[(7)]);
var inst_18862 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_18859);
var inst_18863 = cb.call(null,inst_18862);
var state_18875__$1 = (function (){var statearr_18882 = state_18875;
(statearr_18882[(9)] = inst_18863);

return statearr_18882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18875__$1,(8),c);
} else {
if((state_val_18876 === (4))){
var inst_18873 = (state_18875[(2)]);
var state_18875__$1 = state_18875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18875__$1,inst_18873);
} else {
if((state_val_18876 === (3))){
var inst_18859 = (state_18875[(7)]);
var state_18875__$1 = state_18875;
if(cljs.core.truth_(inst_18859)){
var statearr_18883_18898 = state_18875__$1;
(statearr_18883_18898[(1)] = (5));

} else {
var statearr_18884_18899 = state_18875__$1;
(statearr_18884_18899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18876 === (2))){
var inst_18858 = (state_18875[(2)]);
var inst_18859 = inst_18858;
var state_18875__$1 = (function (){var statearr_18885 = state_18875;
(statearr_18885[(7)] = inst_18859);

return statearr_18885;
})();
var statearr_18886_18900 = state_18875__$1;
(statearr_18886_18900[(2)] = null);

(statearr_18886_18900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18876 === (1))){
var state_18875__$1 = state_18875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18875__$1,(2),c);
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
});})(c__15889__auto___18894,c))
;
return ((function (switch__15833__auto__,c__15889__auto___18894,c){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_18890 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18890[(0)] = state_machine__15834__auto__);

(statearr_18890[(1)] = (1));

return statearr_18890;
});
var state_machine__15834__auto____1 = (function (state_18875){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_18875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e18891){if((e18891 instanceof Object)){
var ex__15837__auto__ = e18891;
var statearr_18892_18901 = state_18875;
(statearr_18892_18901[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18902 = state_18875;
state_18875 = G__18902;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_18875){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_18875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___18894,c))
})();
var state__15891__auto__ = (function (){var statearr_18893 = f__15890__auto__.call(null);
(statearr_18893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___18894);

return statearr_18893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___18894,c))
);


return c;
});
sailing_study_guide.dispatch.dispatch_BANG_ = (function dispatch_BANG_(tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__18941 = cljs.core.seq.call(null,tags);
var chunk__18942 = null;
var count__18943 = (0);
var i__18944 = (0);
while(true){
if((i__18944 < count__18943)){
var tag = cljs.core._nth.call(null,chunk__18942,i__18944);
var c__15889__auto___18979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__18941,chunk__18942,count__18943,i__18944,c__15889__auto___18979,tag,tags){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (seq__18941,chunk__18942,count__18943,i__18944,c__15889__auto___18979,tag,tags){
return (function (state_18952){
var state_val_18953 = (state_18952[(1)]);
if((state_val_18953 === (2))){
var inst_18949 = (state_18952[(2)]);
var inst_18950 = cljs.core.println.call(null,"Put!");
var state_18952__$1 = (function (){var statearr_18954 = state_18952;
(statearr_18954[(7)] = inst_18949);

return statearr_18954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18952__$1,inst_18950);
} else {
if((state_val_18953 === (1))){
var inst_18945 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_18946 = [tag,message];
var inst_18947 = cljs.core.PersistentHashMap.fromArrays(inst_18945,inst_18946);
var state_18952__$1 = state_18952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18952__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_18947);
} else {
return null;
}
}
});})(seq__18941,chunk__18942,count__18943,i__18944,c__15889__auto___18979,tag,tags))
;
return ((function (seq__18941,chunk__18942,count__18943,i__18944,switch__15833__auto__,c__15889__auto___18979,tag,tags){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_18958 = [null,null,null,null,null,null,null,null];
(statearr_18958[(0)] = state_machine__15834__auto__);

(statearr_18958[(1)] = (1));

return statearr_18958;
});
var state_machine__15834__auto____1 = (function (state_18952){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_18952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e18959){if((e18959 instanceof Object)){
var ex__15837__auto__ = e18959;
var statearr_18960_18980 = state_18952;
(statearr_18960_18980[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18981 = state_18952;
state_18952 = G__18981;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_18952){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_18952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(seq__18941,chunk__18942,count__18943,i__18944,switch__15833__auto__,c__15889__auto___18979,tag,tags))
})();
var state__15891__auto__ = (function (){var statearr_18961 = f__15890__auto__.call(null);
(statearr_18961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___18979);

return statearr_18961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(seq__18941,chunk__18942,count__18943,i__18944,c__15889__auto___18979,tag,tags))
);


var G__18982 = seq__18941;
var G__18983 = chunk__18942;
var G__18984 = count__18943;
var G__18985 = (i__18944 + (1));
seq__18941 = G__18982;
chunk__18942 = G__18983;
count__18943 = G__18984;
i__18944 = G__18985;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18941);
if(temp__4126__auto__){
var seq__18941__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18941__$1)){
var c__14018__auto__ = cljs.core.chunk_first.call(null,seq__18941__$1);
var G__18986 = cljs.core.chunk_rest.call(null,seq__18941__$1);
var G__18987 = c__14018__auto__;
var G__18988 = cljs.core.count.call(null,c__14018__auto__);
var G__18989 = (0);
seq__18941 = G__18986;
chunk__18942 = G__18987;
count__18943 = G__18988;
i__18944 = G__18989;
continue;
} else {
var tag = cljs.core.first.call(null,seq__18941__$1);
var c__15889__auto___18990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__18941,chunk__18942,count__18943,i__18944,c__15889__auto___18990,tag,seq__18941__$1,temp__4126__auto__,tags){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (seq__18941,chunk__18942,count__18943,i__18944,c__15889__auto___18990,tag,seq__18941__$1,temp__4126__auto__,tags){
return (function (state_18969){
var state_val_18970 = (state_18969[(1)]);
if((state_val_18970 === (2))){
var inst_18966 = (state_18969[(2)]);
var inst_18967 = cljs.core.println.call(null,"Put!");
var state_18969__$1 = (function (){var statearr_18971 = state_18969;
(statearr_18971[(7)] = inst_18966);

return statearr_18971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18969__$1,inst_18967);
} else {
if((state_val_18970 === (1))){
var inst_18962 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_18963 = [tag,message];
var inst_18964 = cljs.core.PersistentHashMap.fromArrays(inst_18962,inst_18963);
var state_18969__$1 = state_18969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18969__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_18964);
} else {
return null;
}
}
});})(seq__18941,chunk__18942,count__18943,i__18944,c__15889__auto___18990,tag,seq__18941__$1,temp__4126__auto__,tags))
;
return ((function (seq__18941,chunk__18942,count__18943,i__18944,switch__15833__auto__,c__15889__auto___18990,tag,seq__18941__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_18975 = [null,null,null,null,null,null,null,null];
(statearr_18975[(0)] = state_machine__15834__auto__);

(statearr_18975[(1)] = (1));

return statearr_18975;
});
var state_machine__15834__auto____1 = (function (state_18969){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_18969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e18976){if((e18976 instanceof Object)){
var ex__15837__auto__ = e18976;
var statearr_18977_18991 = state_18969;
(statearr_18977_18991[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18992 = state_18969;
state_18969 = G__18992;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_18969){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_18969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(seq__18941,chunk__18942,count__18943,i__18944,switch__15833__auto__,c__15889__auto___18990,tag,seq__18941__$1,temp__4126__auto__,tags))
})();
var state__15891__auto__ = (function (){var statearr_18978 = f__15890__auto__.call(null);
(statearr_18978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___18990);

return statearr_18978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(seq__18941,chunk__18942,count__18943,i__18944,c__15889__auto___18990,tag,seq__18941__$1,temp__4126__auto__,tags))
);


var G__18993 = cljs.core.next.call(null,seq__18941__$1);
var G__18994 = null;
var G__18995 = (0);
var G__18996 = (0);
seq__18941 = G__18993;
chunk__18942 = G__18994;
count__18943 = G__18995;
i__18944 = G__18996;
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

var c__15889__auto___19018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___19018){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___19018){
return (function (state_19006){
var state_val_19007 = (state_19006[(1)]);
if((state_val_19007 === (4))){
var inst_18999 = (state_19006[(2)]);
var inst_19000 = cljs.core.pr_str.call(null,inst_18999);
var inst_19001 = cljs.core.println.call(null,"Logged: ",inst_19000);
var state_19006__$1 = (function (){var statearr_19008 = state_19006;
(statearr_19008[(7)] = inst_19001);

return statearr_19008;
})();
var statearr_19009_19019 = state_19006__$1;
(statearr_19009_19019[(2)] = null);

(statearr_19009_19019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (3))){
var inst_19004 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19006__$1,inst_19004);
} else {
if((state_val_19007 === (2))){
var state_19006__$1 = state_19006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19006__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_19007 === (1))){
var state_19006__$1 = state_19006;
var statearr_19010_19020 = state_19006__$1;
(statearr_19010_19020[(2)] = null);

(statearr_19010_19020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15889__auto___19018))
;
return ((function (switch__15833__auto__,c__15889__auto___19018){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_19014 = [null,null,null,null,null,null,null,null];
(statearr_19014[(0)] = state_machine__15834__auto__);

(statearr_19014[(1)] = (1));

return statearr_19014;
});
var state_machine__15834__auto____1 = (function (state_19006){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_19006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e19015){if((e19015 instanceof Object)){
var ex__15837__auto__ = e19015;
var statearr_19016_19021 = state_19006;
(statearr_19016_19021[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19022 = state_19006;
state_19006 = G__19022;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_19006){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_19006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___19018))
})();
var state__15891__auto__ = (function (){var statearr_19017 = f__15890__auto__.call(null);
(statearr_19017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___19018);

return statearr_19017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___19018))
);

} else {
}

//# sourceMappingURL=dispatch.js.map