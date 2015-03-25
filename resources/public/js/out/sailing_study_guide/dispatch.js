// Compiled by ClojureScript 0.0-3149 {:elide-asserts false}
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
if(typeof sailing_study_guide.dispatch.default_buffer_size !== 'undefined'){
} else {
sailing_study_guide.dispatch.default_buffer_size = (5);
}
if(typeof sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ !== 'undefined'){
} else {
sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ = true;
}
if(typeof sailing_study_guide.dispatch.dispatch_chan !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null,sailing_study_guide.dispatch.default_buffer_size);
}
if(typeof sailing_study_guide.dispatch.dispatch_mult !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
}
if(typeof sailing_study_guide.dispatch.dispatch_pub_chan !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null,sailing_study_guide.dispatch.default_buffer_size);
}
if(typeof sailing_study_guide.dispatch.dispatch_pub !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__22830_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__22830_SHARP_);
}));
}
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_pub_chan);
sailing_study_guide.dispatch.retrieve_message = (function sailing_study_guide$dispatch$retrieve_message(payload){
if(cljs.core.truth_(payload)){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(payload);
} else {
return null;
}
});
sailing_study_guide.dispatch.register = (function sailing_study_guide$dispatch$register(tag){
var c = cljs.core.async.chan.call(null);
return cljs.core.async.sub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,c);
});
sailing_study_guide.dispatch.unregister = (function sailing_study_guide$dispatch$unregister(tag,chan){
cljs.core.async.unsub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,chan);

return cljs.core.async.close_BANG_.call(null,chan);
});
sailing_study_guide.dispatch.whenever = (function sailing_study_guide$dispatch$whenever(tag,cb){
var c = sailing_study_guide.dispatch.register.call(null,tag);
var c__19886__auto___22905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___22905,c){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___22905,c){
return (function (state_22886){
var state_val_22887 = (state_22886[(1)]);
if((state_val_22887 === (8))){
var inst_22876 = (state_22886[(2)]);
var inst_22870 = inst_22876;
var state_22886__$1 = (function (){var statearr_22888 = state_22886;
(statearr_22888[(7)] = inst_22870);

return statearr_22888;
})();
var statearr_22889_22906 = state_22886__$1;
(statearr_22889_22906[(2)] = null);

(statearr_22889_22906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (7))){
var inst_22882 = (state_22886[(2)]);
var state_22886__$1 = state_22886;
var statearr_22890_22907 = state_22886__$1;
(statearr_22890_22907[(2)] = inst_22882);

(statearr_22890_22907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (6))){
var inst_22879 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_22880 = cljs.core.async.close_BANG_.call(null,c);
var state_22886__$1 = (function (){var statearr_22891 = state_22886;
(statearr_22891[(8)] = inst_22879);

return statearr_22891;
})();
var statearr_22892_22908 = state_22886__$1;
(statearr_22892_22908[(2)] = inst_22880);

(statearr_22892_22908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (5))){
var inst_22870 = (state_22886[(7)]);
var inst_22873 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_22870);
var inst_22874 = cb.call(null,inst_22873);
var state_22886__$1 = (function (){var statearr_22893 = state_22886;
(statearr_22893[(9)] = inst_22874);

return statearr_22893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22886__$1,(8),c);
} else {
if((state_val_22887 === (4))){
var inst_22884 = (state_22886[(2)]);
var state_22886__$1 = state_22886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22886__$1,inst_22884);
} else {
if((state_val_22887 === (3))){
var inst_22870 = (state_22886[(7)]);
var state_22886__$1 = state_22886;
if(cljs.core.truth_(inst_22870)){
var statearr_22894_22909 = state_22886__$1;
(statearr_22894_22909[(1)] = (5));

} else {
var statearr_22895_22910 = state_22886__$1;
(statearr_22895_22910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (2))){
var inst_22869 = (state_22886[(2)]);
var inst_22870 = inst_22869;
var state_22886__$1 = (function (){var statearr_22896 = state_22886;
(statearr_22896[(7)] = inst_22870);

return statearr_22896;
})();
var statearr_22897_22911 = state_22886__$1;
(statearr_22897_22911[(2)] = null);

(statearr_22897_22911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (1))){
var state_22886__$1 = state_22886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22886__$1,(2),c);
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
});})(c__19886__auto___22905,c))
;
return ((function (switch__19830__auto__,c__19886__auto___22905,c){
return (function() {
var sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto__ = null;
var sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto____0 = (function (){
var statearr_22901 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22901[(0)] = sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto__);

(statearr_22901[(1)] = (1));

return statearr_22901;
});
var sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto____1 = (function (state_22886){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_22886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e22902){if((e22902 instanceof Object)){
var ex__19834__auto__ = e22902;
var statearr_22903_22912 = state_22886;
(statearr_22903_22912[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22913 = state_22886;
state_22886 = G__22913;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto__ = function(state_22886){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto____1.call(this,state_22886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto____0;
sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto____1;
return sailing_study_guide$dispatch$whenever_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___22905,c))
})();
var state__19888__auto__ = (function (){var statearr_22904 = f__19887__auto__.call(null);
(statearr_22904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___22905);

return statearr_22904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___22905,c))
);


return c;
});
sailing_study_guide.dispatch.dispatch_BANG_ = (function() {
var sailing_study_guide$dispatch$dispatch_BANG_ = null;
var sailing_study_guide$dispatch$dispatch_BANG___1 = (function (tagortags){
return sailing_study_guide$dispatch$dispatch_BANG_.call(null,tagortags,null);
});
var sailing_study_guide$dispatch$dispatch_BANG___2 = (function (tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__22952 = cljs.core.seq.call(null,tags);
var chunk__22953 = null;
var count__22954 = (0);
var i__22955 = (0);
while(true){
if((i__22955 < count__22954)){
var tag = cljs.core._nth.call(null,chunk__22953,i__22955);
var c__19886__auto___22990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__22952,chunk__22953,count__22954,i__22955,c__19886__auto___22990,tag,tags){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (seq__22952,chunk__22953,count__22954,i__22955,c__19886__auto___22990,tag,tags){
return (function (state_22963){
var state_val_22964 = (state_22963[(1)]);
if((state_val_22964 === (2))){
var inst_22960 = (state_22963[(2)]);
var inst_22961 = cljs.core.println.call(null,"Put!");
var state_22963__$1 = (function (){var statearr_22965 = state_22963;
(statearr_22965[(7)] = inst_22960);

return statearr_22965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22963__$1,inst_22961);
} else {
if((state_val_22964 === (1))){
var inst_22956 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22957 = [tag,message];
var inst_22958 = cljs.core.PersistentHashMap.fromArrays(inst_22956,inst_22957);
var state_22963__$1 = state_22963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22963__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_22958);
} else {
return null;
}
}
});})(seq__22952,chunk__22953,count__22954,i__22955,c__19886__auto___22990,tag,tags))
;
return ((function (seq__22952,chunk__22953,count__22954,i__22955,switch__19830__auto__,c__19886__auto___22990,tag,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____0 = (function (){
var statearr_22969 = [null,null,null,null,null,null,null,null];
(statearr_22969[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__);

(statearr_22969[(1)] = (1));

return statearr_22969;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____1 = (function (state_22963){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_22963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e22970){if((e22970 instanceof Object)){
var ex__19834__auto__ = e22970;
var statearr_22971_22991 = state_22963;
(statearr_22971_22991[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22992 = state_22963;
state_22963 = G__22992;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__ = function(state_22963){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____1.call(this,state_22963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__;
})()
;})(seq__22952,chunk__22953,count__22954,i__22955,switch__19830__auto__,c__19886__auto___22990,tag,tags))
})();
var state__19888__auto__ = (function (){var statearr_22972 = f__19887__auto__.call(null);
(statearr_22972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___22990);

return statearr_22972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(seq__22952,chunk__22953,count__22954,i__22955,c__19886__auto___22990,tag,tags))
);


var G__22993 = seq__22952;
var G__22994 = chunk__22953;
var G__22995 = count__22954;
var G__22996 = (i__22955 + (1));
seq__22952 = G__22993;
chunk__22953 = G__22994;
count__22954 = G__22995;
i__22955 = G__22996;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22952);
if(temp__4126__auto__){
var seq__22952__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22952__$1)){
var c__18489__auto__ = cljs.core.chunk_first.call(null,seq__22952__$1);
var G__22997 = cljs.core.chunk_rest.call(null,seq__22952__$1);
var G__22998 = c__18489__auto__;
var G__22999 = cljs.core.count.call(null,c__18489__auto__);
var G__23000 = (0);
seq__22952 = G__22997;
chunk__22953 = G__22998;
count__22954 = G__22999;
i__22955 = G__23000;
continue;
} else {
var tag = cljs.core.first.call(null,seq__22952__$1);
var c__19886__auto___23001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__22952,chunk__22953,count__22954,i__22955,c__19886__auto___23001,tag,seq__22952__$1,temp__4126__auto__,tags){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (seq__22952,chunk__22953,count__22954,i__22955,c__19886__auto___23001,tag,seq__22952__$1,temp__4126__auto__,tags){
return (function (state_22980){
var state_val_22981 = (state_22980[(1)]);
if((state_val_22981 === (2))){
var inst_22977 = (state_22980[(2)]);
var inst_22978 = cljs.core.println.call(null,"Put!");
var state_22980__$1 = (function (){var statearr_22982 = state_22980;
(statearr_22982[(7)] = inst_22977);

return statearr_22982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22980__$1,inst_22978);
} else {
if((state_val_22981 === (1))){
var inst_22973 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22974 = [tag,message];
var inst_22975 = cljs.core.PersistentHashMap.fromArrays(inst_22973,inst_22974);
var state_22980__$1 = state_22980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22980__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_22975);
} else {
return null;
}
}
});})(seq__22952,chunk__22953,count__22954,i__22955,c__19886__auto___23001,tag,seq__22952__$1,temp__4126__auto__,tags))
;
return ((function (seq__22952,chunk__22953,count__22954,i__22955,switch__19830__auto__,c__19886__auto___23001,tag,seq__22952__$1,temp__4126__auto__,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____0 = (function (){
var statearr_22986 = [null,null,null,null,null,null,null,null];
(statearr_22986[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__);

(statearr_22986[(1)] = (1));

return statearr_22986;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____1 = (function (state_22980){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_22980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e22987){if((e22987 instanceof Object)){
var ex__19834__auto__ = e22987;
var statearr_22988_23002 = state_22980;
(statearr_22988_23002[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23003 = state_22980;
state_22980 = G__23003;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__ = function(state_22980){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____1.call(this,state_22980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19831__auto__;
})()
;})(seq__22952,chunk__22953,count__22954,i__22955,switch__19830__auto__,c__19886__auto___23001,tag,seq__22952__$1,temp__4126__auto__,tags))
})();
var state__19888__auto__ = (function (){var statearr_22989 = f__19887__auto__.call(null);
(statearr_22989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___23001);

return statearr_22989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(seq__22952,chunk__22953,count__22954,i__22955,c__19886__auto___23001,tag,seq__22952__$1,temp__4126__auto__,tags))
);


var G__23004 = cljs.core.next.call(null,seq__22952__$1);
var G__23005 = null;
var G__23006 = (0);
var G__23007 = (0);
seq__22952 = G__23004;
chunk__22953 = G__23005;
count__22954 = G__23006;
i__22955 = G__23007;
continue;
}
} else {
return null;
}
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG_ = function(tagortags,message){
switch(arguments.length){
case 1:
return sailing_study_guide$dispatch$dispatch_BANG___1.call(this,tagortags);
case 2:
return sailing_study_guide$dispatch$dispatch_BANG___2.call(this,tagortags,message);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG___1;
sailing_study_guide$dispatch$dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = sailing_study_guide$dispatch$dispatch_BANG___2;
return sailing_study_guide$dispatch$dispatch_BANG_;
})()
;
if(cljs.core.truth_(sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_)){
if(typeof sailing_study_guide.dispatch.dispatch_logger_chan !== 'undefined'){
} else {
sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);
}

cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);

var c__19886__auto___23029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___23029){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___23029){
return (function (state_23017){
var state_val_23018 = (state_23017[(1)]);
if((state_val_23018 === (4))){
var inst_23010 = (state_23017[(2)]);
var inst_23011 = cljs.core.pr_str.call(null,inst_23010);
var inst_23012 = cljs.core.println.call(null,"Logged: ",inst_23011);
var state_23017__$1 = (function (){var statearr_23019 = state_23017;
(statearr_23019[(7)] = inst_23012);

return statearr_23019;
})();
var statearr_23020_23030 = state_23017__$1;
(statearr_23020_23030[(2)] = null);

(statearr_23020_23030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (3))){
var inst_23015 = (state_23017[(2)]);
var state_23017__$1 = state_23017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23017__$1,inst_23015);
} else {
if((state_val_23018 === (2))){
var state_23017__$1 = state_23017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23017__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_23018 === (1))){
var state_23017__$1 = state_23017;
var statearr_23021_23031 = state_23017__$1;
(statearr_23021_23031[(2)] = null);

(statearr_23021_23031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19886__auto___23029))
;
return ((function (switch__19830__auto__,c__19886__auto___23029){
return (function() {
var sailing_study_guide$dispatch$state_machine__19831__auto__ = null;
var sailing_study_guide$dispatch$state_machine__19831__auto____0 = (function (){
var statearr_23025 = [null,null,null,null,null,null,null,null];
(statearr_23025[(0)] = sailing_study_guide$dispatch$state_machine__19831__auto__);

(statearr_23025[(1)] = (1));

return statearr_23025;
});
var sailing_study_guide$dispatch$state_machine__19831__auto____1 = (function (state_23017){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_23017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e23026){if((e23026 instanceof Object)){
var ex__19834__auto__ = e23026;
var statearr_23027_23032 = state_23017;
(statearr_23027_23032[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23033 = state_23017;
state_23017 = G__23033;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
sailing_study_guide$dispatch$state_machine__19831__auto__ = function(state_23017){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$state_machine__19831__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$state_machine__19831__auto____1.call(this,state_23017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$state_machine__19831__auto____0;
sailing_study_guide$dispatch$state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$state_machine__19831__auto____1;
return sailing_study_guide$dispatch$state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___23029))
})();
var state__19888__auto__ = (function (){var statearr_23028 = f__19887__auto__.call(null);
(statearr_23028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___23029);

return statearr_23028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___23029))
);

} else {
}

//# sourceMappingURL=dispatch.js.map