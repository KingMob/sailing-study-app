// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__22723_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__22723_SHARP_);
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
var c__19775__auto___22798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___22798,c){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___22798,c){
return (function (state_22779){
var state_val_22780 = (state_22779[(1)]);
if((state_val_22780 === (8))){
var inst_22769 = (state_22779[(2)]);
var inst_22763 = inst_22769;
var state_22779__$1 = (function (){var statearr_22781 = state_22779;
(statearr_22781[(7)] = inst_22763);

return statearr_22781;
})();
var statearr_22782_22799 = state_22779__$1;
(statearr_22782_22799[(2)] = null);

(statearr_22782_22799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (7))){
var inst_22775 = (state_22779[(2)]);
var state_22779__$1 = state_22779;
var statearr_22783_22800 = state_22779__$1;
(statearr_22783_22800[(2)] = inst_22775);

(statearr_22783_22800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (6))){
var inst_22772 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_22773 = cljs.core.async.close_BANG_.call(null,c);
var state_22779__$1 = (function (){var statearr_22784 = state_22779;
(statearr_22784[(8)] = inst_22772);

return statearr_22784;
})();
var statearr_22785_22801 = state_22779__$1;
(statearr_22785_22801[(2)] = inst_22773);

(statearr_22785_22801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (5))){
var inst_22763 = (state_22779[(7)]);
var inst_22766 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_22763);
var inst_22767 = cb.call(null,inst_22766);
var state_22779__$1 = (function (){var statearr_22786 = state_22779;
(statearr_22786[(9)] = inst_22767);

return statearr_22786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22779__$1,(8),c);
} else {
if((state_val_22780 === (4))){
var inst_22777 = (state_22779[(2)]);
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22779__$1,inst_22777);
} else {
if((state_val_22780 === (3))){
var inst_22763 = (state_22779[(7)]);
var state_22779__$1 = state_22779;
if(cljs.core.truth_(inst_22763)){
var statearr_22787_22802 = state_22779__$1;
(statearr_22787_22802[(1)] = (5));

} else {
var statearr_22788_22803 = state_22779__$1;
(statearr_22788_22803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (2))){
var inst_22762 = (state_22779[(2)]);
var inst_22763 = inst_22762;
var state_22779__$1 = (function (){var statearr_22789 = state_22779;
(statearr_22789[(7)] = inst_22763);

return statearr_22789;
})();
var statearr_22790_22804 = state_22779__$1;
(statearr_22790_22804[(2)] = null);

(statearr_22790_22804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (1))){
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22779__$1,(2),c);
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
});})(c__19775__auto___22798,c))
;
return ((function (switch__19719__auto__,c__19775__auto___22798,c){
return (function() {
var sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto__ = null;
var sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto____0 = (function (){
var statearr_22794 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22794[(0)] = sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto__);

(statearr_22794[(1)] = (1));

return statearr_22794;
});
var sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto____1 = (function (state_22779){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_22779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e22795){if((e22795 instanceof Object)){
var ex__19723__auto__ = e22795;
var statearr_22796_22805 = state_22779;
(statearr_22796_22805[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22806 = state_22779;
state_22779 = G__22806;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto__ = function(state_22779){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto____1.call(this,state_22779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto____0;
sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto____1;
return sailing_study_guide$dispatch$whenever_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___22798,c))
})();
var state__19777__auto__ = (function (){var statearr_22797 = f__19776__auto__.call(null);
(statearr_22797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___22798);

return statearr_22797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___22798,c))
);


return c;
});
sailing_study_guide.dispatch.dispatch_BANG_ = (function sailing_study_guide$dispatch$dispatch_BANG_(tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__22845 = cljs.core.seq.call(null,tags);
var chunk__22846 = null;
var count__22847 = (0);
var i__22848 = (0);
while(true){
if((i__22848 < count__22847)){
var tag = cljs.core._nth.call(null,chunk__22846,i__22848);
var c__19775__auto___22883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__22845,chunk__22846,count__22847,i__22848,c__19775__auto___22883,tag,tags){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (seq__22845,chunk__22846,count__22847,i__22848,c__19775__auto___22883,tag,tags){
return (function (state_22856){
var state_val_22857 = (state_22856[(1)]);
if((state_val_22857 === (2))){
var inst_22853 = (state_22856[(2)]);
var inst_22854 = cljs.core.println.call(null,"Put!");
var state_22856__$1 = (function (){var statearr_22858 = state_22856;
(statearr_22858[(7)] = inst_22853);

return statearr_22858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22856__$1,inst_22854);
} else {
if((state_val_22857 === (1))){
var inst_22849 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22850 = [tag,message];
var inst_22851 = cljs.core.PersistentHashMap.fromArrays(inst_22849,inst_22850);
var state_22856__$1 = state_22856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22856__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_22851);
} else {
return null;
}
}
});})(seq__22845,chunk__22846,count__22847,i__22848,c__19775__auto___22883,tag,tags))
;
return ((function (seq__22845,chunk__22846,count__22847,i__22848,switch__19719__auto__,c__19775__auto___22883,tag,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____0 = (function (){
var statearr_22862 = [null,null,null,null,null,null,null,null];
(statearr_22862[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__);

(statearr_22862[(1)] = (1));

return statearr_22862;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____1 = (function (state_22856){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_22856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e22863){if((e22863 instanceof Object)){
var ex__19723__auto__ = e22863;
var statearr_22864_22884 = state_22856;
(statearr_22864_22884[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22885 = state_22856;
state_22856 = G__22885;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__ = function(state_22856){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____1.call(this,state_22856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__;
})()
;})(seq__22845,chunk__22846,count__22847,i__22848,switch__19719__auto__,c__19775__auto___22883,tag,tags))
})();
var state__19777__auto__ = (function (){var statearr_22865 = f__19776__auto__.call(null);
(statearr_22865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___22883);

return statearr_22865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(seq__22845,chunk__22846,count__22847,i__22848,c__19775__auto___22883,tag,tags))
);


var G__22886 = seq__22845;
var G__22887 = chunk__22846;
var G__22888 = count__22847;
var G__22889 = (i__22848 + (1));
seq__22845 = G__22886;
chunk__22846 = G__22887;
count__22847 = G__22888;
i__22848 = G__22889;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22845);
if(temp__4126__auto__){
var seq__22845__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22845__$1)){
var c__18381__auto__ = cljs.core.chunk_first.call(null,seq__22845__$1);
var G__22890 = cljs.core.chunk_rest.call(null,seq__22845__$1);
var G__22891 = c__18381__auto__;
var G__22892 = cljs.core.count.call(null,c__18381__auto__);
var G__22893 = (0);
seq__22845 = G__22890;
chunk__22846 = G__22891;
count__22847 = G__22892;
i__22848 = G__22893;
continue;
} else {
var tag = cljs.core.first.call(null,seq__22845__$1);
var c__19775__auto___22894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__22845,chunk__22846,count__22847,i__22848,c__19775__auto___22894,tag,seq__22845__$1,temp__4126__auto__,tags){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (seq__22845,chunk__22846,count__22847,i__22848,c__19775__auto___22894,tag,seq__22845__$1,temp__4126__auto__,tags){
return (function (state_22873){
var state_val_22874 = (state_22873[(1)]);
if((state_val_22874 === (2))){
var inst_22870 = (state_22873[(2)]);
var inst_22871 = cljs.core.println.call(null,"Put!");
var state_22873__$1 = (function (){var statearr_22875 = state_22873;
(statearr_22875[(7)] = inst_22870);

return statearr_22875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22873__$1,inst_22871);
} else {
if((state_val_22874 === (1))){
var inst_22866 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22867 = [tag,message];
var inst_22868 = cljs.core.PersistentHashMap.fromArrays(inst_22866,inst_22867);
var state_22873__$1 = state_22873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22873__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_22868);
} else {
return null;
}
}
});})(seq__22845,chunk__22846,count__22847,i__22848,c__19775__auto___22894,tag,seq__22845__$1,temp__4126__auto__,tags))
;
return ((function (seq__22845,chunk__22846,count__22847,i__22848,switch__19719__auto__,c__19775__auto___22894,tag,seq__22845__$1,temp__4126__auto__,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____0 = (function (){
var statearr_22879 = [null,null,null,null,null,null,null,null];
(statearr_22879[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__);

(statearr_22879[(1)] = (1));

return statearr_22879;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____1 = (function (state_22873){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_22873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e22880){if((e22880 instanceof Object)){
var ex__19723__auto__ = e22880;
var statearr_22881_22895 = state_22873;
(statearr_22881_22895[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22896 = state_22873;
state_22873 = G__22896;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__ = function(state_22873){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____1.call(this,state_22873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19720__auto__;
})()
;})(seq__22845,chunk__22846,count__22847,i__22848,switch__19719__auto__,c__19775__auto___22894,tag,seq__22845__$1,temp__4126__auto__,tags))
})();
var state__19777__auto__ = (function (){var statearr_22882 = f__19776__auto__.call(null);
(statearr_22882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___22894);

return statearr_22882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(seq__22845,chunk__22846,count__22847,i__22848,c__19775__auto___22894,tag,seq__22845__$1,temp__4126__auto__,tags))
);


var G__22897 = cljs.core.next.call(null,seq__22845__$1);
var G__22898 = null;
var G__22899 = (0);
var G__22900 = (0);
seq__22845 = G__22897;
chunk__22846 = G__22898;
count__22847 = G__22899;
i__22848 = G__22900;
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

var c__19775__auto___22922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___22922){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___22922){
return (function (state_22910){
var state_val_22911 = (state_22910[(1)]);
if((state_val_22911 === (4))){
var inst_22903 = (state_22910[(2)]);
var inst_22904 = cljs.core.pr_str.call(null,inst_22903);
var inst_22905 = cljs.core.println.call(null,"Logged: ",inst_22904);
var state_22910__$1 = (function (){var statearr_22912 = state_22910;
(statearr_22912[(7)] = inst_22905);

return statearr_22912;
})();
var statearr_22913_22923 = state_22910__$1;
(statearr_22913_22923[(2)] = null);

(statearr_22913_22923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (3))){
var inst_22908 = (state_22910[(2)]);
var state_22910__$1 = state_22910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22910__$1,inst_22908);
} else {
if((state_val_22911 === (2))){
var state_22910__$1 = state_22910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22910__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_22911 === (1))){
var state_22910__$1 = state_22910;
var statearr_22914_22924 = state_22910__$1;
(statearr_22914_22924[(2)] = null);

(statearr_22914_22924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19775__auto___22922))
;
return ((function (switch__19719__auto__,c__19775__auto___22922){
return (function() {
var sailing_study_guide$dispatch$state_machine__19720__auto__ = null;
var sailing_study_guide$dispatch$state_machine__19720__auto____0 = (function (){
var statearr_22918 = [null,null,null,null,null,null,null,null];
(statearr_22918[(0)] = sailing_study_guide$dispatch$state_machine__19720__auto__);

(statearr_22918[(1)] = (1));

return statearr_22918;
});
var sailing_study_guide$dispatch$state_machine__19720__auto____1 = (function (state_22910){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_22910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e22919){if((e22919 instanceof Object)){
var ex__19723__auto__ = e22919;
var statearr_22920_22925 = state_22910;
(statearr_22920_22925[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22926 = state_22910;
state_22910 = G__22926;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
sailing_study_guide$dispatch$state_machine__19720__auto__ = function(state_22910){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$state_machine__19720__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$state_machine__19720__auto____1.call(this,state_22910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$state_machine__19720__auto____0;
sailing_study_guide$dispatch$state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$state_machine__19720__auto____1;
return sailing_study_guide$dispatch$state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___22922))
})();
var state__19777__auto__ = (function (){var statearr_22921 = f__19776__auto__.call(null);
(statearr_22921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___22922);

return statearr_22921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___22922))
);

} else {
}

//# sourceMappingURL=dispatch.js.map