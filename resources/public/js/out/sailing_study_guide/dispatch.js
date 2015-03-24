// Compiled by ClojureScript 0.0-3148 {:elide-asserts false}
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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__22827_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__22827_SHARP_);
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
var c__19885__auto___22902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___22902,c){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___22902,c){
return (function (state_22883){
var state_val_22884 = (state_22883[(1)]);
if((state_val_22884 === (8))){
var inst_22873 = (state_22883[(2)]);
var inst_22867 = inst_22873;
var state_22883__$1 = (function (){var statearr_22885 = state_22883;
(statearr_22885[(7)] = inst_22867);

return statearr_22885;
})();
var statearr_22886_22903 = state_22883__$1;
(statearr_22886_22903[(2)] = null);

(statearr_22886_22903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22884 === (7))){
var inst_22879 = (state_22883[(2)]);
var state_22883__$1 = state_22883;
var statearr_22887_22904 = state_22883__$1;
(statearr_22887_22904[(2)] = inst_22879);

(statearr_22887_22904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22884 === (6))){
var inst_22876 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_22877 = cljs.core.async.close_BANG_.call(null,c);
var state_22883__$1 = (function (){var statearr_22888 = state_22883;
(statearr_22888[(8)] = inst_22876);

return statearr_22888;
})();
var statearr_22889_22905 = state_22883__$1;
(statearr_22889_22905[(2)] = inst_22877);

(statearr_22889_22905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22884 === (5))){
var inst_22867 = (state_22883[(7)]);
var inst_22870 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_22867);
var inst_22871 = cb.call(null,inst_22870);
var state_22883__$1 = (function (){var statearr_22890 = state_22883;
(statearr_22890[(9)] = inst_22871);

return statearr_22890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22883__$1,(8),c);
} else {
if((state_val_22884 === (4))){
var inst_22881 = (state_22883[(2)]);
var state_22883__$1 = state_22883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22883__$1,inst_22881);
} else {
if((state_val_22884 === (3))){
var inst_22867 = (state_22883[(7)]);
var state_22883__$1 = state_22883;
if(cljs.core.truth_(inst_22867)){
var statearr_22891_22906 = state_22883__$1;
(statearr_22891_22906[(1)] = (5));

} else {
var statearr_22892_22907 = state_22883__$1;
(statearr_22892_22907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22884 === (2))){
var inst_22866 = (state_22883[(2)]);
var inst_22867 = inst_22866;
var state_22883__$1 = (function (){var statearr_22893 = state_22883;
(statearr_22893[(7)] = inst_22867);

return statearr_22893;
})();
var statearr_22894_22908 = state_22883__$1;
(statearr_22894_22908[(2)] = null);

(statearr_22894_22908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22884 === (1))){
var state_22883__$1 = state_22883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22883__$1,(2),c);
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
});})(c__19885__auto___22902,c))
;
return ((function (switch__19829__auto__,c__19885__auto___22902,c){
return (function() {
var sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto__ = null;
var sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto____0 = (function (){
var statearr_22898 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22898[(0)] = sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto__);

(statearr_22898[(1)] = (1));

return statearr_22898;
});
var sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto____1 = (function (state_22883){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_22883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e22899){if((e22899 instanceof Object)){
var ex__19833__auto__ = e22899;
var statearr_22900_22909 = state_22883;
(statearr_22900_22909[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22910 = state_22883;
state_22883 = G__22910;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto__ = function(state_22883){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto____1.call(this,state_22883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto____0;
sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto____1;
return sailing_study_guide$dispatch$whenever_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___22902,c))
})();
var state__19887__auto__ = (function (){var statearr_22901 = f__19886__auto__.call(null);
(statearr_22901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___22902);

return statearr_22901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___22902,c))
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
var seq__22949 = cljs.core.seq.call(null,tags);
var chunk__22950 = null;
var count__22951 = (0);
var i__22952 = (0);
while(true){
if((i__22952 < count__22951)){
var tag = cljs.core._nth.call(null,chunk__22950,i__22952);
var c__19885__auto___22987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__22949,chunk__22950,count__22951,i__22952,c__19885__auto___22987,tag,tags){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (seq__22949,chunk__22950,count__22951,i__22952,c__19885__auto___22987,tag,tags){
return (function (state_22960){
var state_val_22961 = (state_22960[(1)]);
if((state_val_22961 === (2))){
var inst_22957 = (state_22960[(2)]);
var inst_22958 = cljs.core.println.call(null,"Put!");
var state_22960__$1 = (function (){var statearr_22962 = state_22960;
(statearr_22962[(7)] = inst_22957);

return statearr_22962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22960__$1,inst_22958);
} else {
if((state_val_22961 === (1))){
var inst_22953 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22954 = [tag,message];
var inst_22955 = cljs.core.PersistentHashMap.fromArrays(inst_22953,inst_22954);
var state_22960__$1 = state_22960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22960__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_22955);
} else {
return null;
}
}
});})(seq__22949,chunk__22950,count__22951,i__22952,c__19885__auto___22987,tag,tags))
;
return ((function (seq__22949,chunk__22950,count__22951,i__22952,switch__19829__auto__,c__19885__auto___22987,tag,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____0 = (function (){
var statearr_22966 = [null,null,null,null,null,null,null,null];
(statearr_22966[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__);

(statearr_22966[(1)] = (1));

return statearr_22966;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____1 = (function (state_22960){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_22960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e22967){if((e22967 instanceof Object)){
var ex__19833__auto__ = e22967;
var statearr_22968_22988 = state_22960;
(statearr_22968_22988[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22989 = state_22960;
state_22960 = G__22989;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__ = function(state_22960){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____1.call(this,state_22960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__;
})()
;})(seq__22949,chunk__22950,count__22951,i__22952,switch__19829__auto__,c__19885__auto___22987,tag,tags))
})();
var state__19887__auto__ = (function (){var statearr_22969 = f__19886__auto__.call(null);
(statearr_22969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___22987);

return statearr_22969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(seq__22949,chunk__22950,count__22951,i__22952,c__19885__auto___22987,tag,tags))
);


var G__22990 = seq__22949;
var G__22991 = chunk__22950;
var G__22992 = count__22951;
var G__22993 = (i__22952 + (1));
seq__22949 = G__22990;
chunk__22950 = G__22991;
count__22951 = G__22992;
i__22952 = G__22993;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22949);
if(temp__4126__auto__){
var seq__22949__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22949__$1)){
var c__18488__auto__ = cljs.core.chunk_first.call(null,seq__22949__$1);
var G__22994 = cljs.core.chunk_rest.call(null,seq__22949__$1);
var G__22995 = c__18488__auto__;
var G__22996 = cljs.core.count.call(null,c__18488__auto__);
var G__22997 = (0);
seq__22949 = G__22994;
chunk__22950 = G__22995;
count__22951 = G__22996;
i__22952 = G__22997;
continue;
} else {
var tag = cljs.core.first.call(null,seq__22949__$1);
var c__19885__auto___22998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__22949,chunk__22950,count__22951,i__22952,c__19885__auto___22998,tag,seq__22949__$1,temp__4126__auto__,tags){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (seq__22949,chunk__22950,count__22951,i__22952,c__19885__auto___22998,tag,seq__22949__$1,temp__4126__auto__,tags){
return (function (state_22977){
var state_val_22978 = (state_22977[(1)]);
if((state_val_22978 === (2))){
var inst_22974 = (state_22977[(2)]);
var inst_22975 = cljs.core.println.call(null,"Put!");
var state_22977__$1 = (function (){var statearr_22979 = state_22977;
(statearr_22979[(7)] = inst_22974);

return statearr_22979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22977__$1,inst_22975);
} else {
if((state_val_22978 === (1))){
var inst_22970 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22971 = [tag,message];
var inst_22972 = cljs.core.PersistentHashMap.fromArrays(inst_22970,inst_22971);
var state_22977__$1 = state_22977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22977__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_22972);
} else {
return null;
}
}
});})(seq__22949,chunk__22950,count__22951,i__22952,c__19885__auto___22998,tag,seq__22949__$1,temp__4126__auto__,tags))
;
return ((function (seq__22949,chunk__22950,count__22951,i__22952,switch__19829__auto__,c__19885__auto___22998,tag,seq__22949__$1,temp__4126__auto__,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____0 = (function (){
var statearr_22983 = [null,null,null,null,null,null,null,null];
(statearr_22983[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__);

(statearr_22983[(1)] = (1));

return statearr_22983;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____1 = (function (state_22977){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_22977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e22984){if((e22984 instanceof Object)){
var ex__19833__auto__ = e22984;
var statearr_22985_22999 = state_22977;
(statearr_22985_22999[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23000 = state_22977;
state_22977 = G__23000;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__ = function(state_22977){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____1.call(this,state_22977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19830__auto__;
})()
;})(seq__22949,chunk__22950,count__22951,i__22952,switch__19829__auto__,c__19885__auto___22998,tag,seq__22949__$1,temp__4126__auto__,tags))
})();
var state__19887__auto__ = (function (){var statearr_22986 = f__19886__auto__.call(null);
(statearr_22986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___22998);

return statearr_22986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(seq__22949,chunk__22950,count__22951,i__22952,c__19885__auto___22998,tag,seq__22949__$1,temp__4126__auto__,tags))
);


var G__23001 = cljs.core.next.call(null,seq__22949__$1);
var G__23002 = null;
var G__23003 = (0);
var G__23004 = (0);
seq__22949 = G__23001;
chunk__22950 = G__23002;
count__22951 = G__23003;
i__22952 = G__23004;
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

var c__19885__auto___23026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___23026){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___23026){
return (function (state_23014){
var state_val_23015 = (state_23014[(1)]);
if((state_val_23015 === (4))){
var inst_23007 = (state_23014[(2)]);
var inst_23008 = cljs.core.pr_str.call(null,inst_23007);
var inst_23009 = cljs.core.println.call(null,"Logged: ",inst_23008);
var state_23014__$1 = (function (){var statearr_23016 = state_23014;
(statearr_23016[(7)] = inst_23009);

return statearr_23016;
})();
var statearr_23017_23027 = state_23014__$1;
(statearr_23017_23027[(2)] = null);

(statearr_23017_23027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23015 === (3))){
var inst_23012 = (state_23014[(2)]);
var state_23014__$1 = state_23014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23014__$1,inst_23012);
} else {
if((state_val_23015 === (2))){
var state_23014__$1 = state_23014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23014__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_23015 === (1))){
var state_23014__$1 = state_23014;
var statearr_23018_23028 = state_23014__$1;
(statearr_23018_23028[(2)] = null);

(statearr_23018_23028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19885__auto___23026))
;
return ((function (switch__19829__auto__,c__19885__auto___23026){
return (function() {
var sailing_study_guide$dispatch$state_machine__19830__auto__ = null;
var sailing_study_guide$dispatch$state_machine__19830__auto____0 = (function (){
var statearr_23022 = [null,null,null,null,null,null,null,null];
(statearr_23022[(0)] = sailing_study_guide$dispatch$state_machine__19830__auto__);

(statearr_23022[(1)] = (1));

return statearr_23022;
});
var sailing_study_guide$dispatch$state_machine__19830__auto____1 = (function (state_23014){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_23014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e23023){if((e23023 instanceof Object)){
var ex__19833__auto__ = e23023;
var statearr_23024_23029 = state_23014;
(statearr_23024_23029[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23030 = state_23014;
state_23014 = G__23030;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
sailing_study_guide$dispatch$state_machine__19830__auto__ = function(state_23014){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$state_machine__19830__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$state_machine__19830__auto____1.call(this,state_23014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$state_machine__19830__auto____0;
sailing_study_guide$dispatch$state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$state_machine__19830__auto____1;
return sailing_study_guide$dispatch$state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___23026))
})();
var state__19887__auto__ = (function (){var statearr_23025 = f__19886__auto__.call(null);
(statearr_23025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___23026);

return statearr_23025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___23026))
);

} else {
}

//# sourceMappingURL=dispatch.js.map