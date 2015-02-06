// Compiled by ClojureScript 0.0-2760 {:elide-asserts false}
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ = false;
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__18760_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__18760_SHARP_);
}));
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
var c__15819__auto___18835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___18835,c){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___18835,c){
return (function (state_18816){
var state_val_18817 = (state_18816[(1)]);
if((state_val_18817 === (8))){
var inst_18806 = (state_18816[(2)]);
var inst_18800 = inst_18806;
var state_18816__$1 = (function (){var statearr_18818 = state_18816;
(statearr_18818[(7)] = inst_18800);

return statearr_18818;
})();
var statearr_18819_18836 = state_18816__$1;
(statearr_18819_18836[(2)] = null);

(statearr_18819_18836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (7))){
var inst_18812 = (state_18816[(2)]);
var state_18816__$1 = state_18816;
var statearr_18820_18837 = state_18816__$1;
(statearr_18820_18837[(2)] = inst_18812);

(statearr_18820_18837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (6))){
var inst_18809 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_18810 = cljs.core.async.close_BANG_.call(null,c);
var state_18816__$1 = (function (){var statearr_18821 = state_18816;
(statearr_18821[(8)] = inst_18809);

return statearr_18821;
})();
var statearr_18822_18838 = state_18816__$1;
(statearr_18822_18838[(2)] = inst_18810);

(statearr_18822_18838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (5))){
var inst_18800 = (state_18816[(7)]);
var inst_18803 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_18800);
var inst_18804 = cb.call(null,inst_18803);
var state_18816__$1 = (function (){var statearr_18823 = state_18816;
(statearr_18823[(9)] = inst_18804);

return statearr_18823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18816__$1,(8),c);
} else {
if((state_val_18817 === (4))){
var inst_18814 = (state_18816[(2)]);
var state_18816__$1 = state_18816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18816__$1,inst_18814);
} else {
if((state_val_18817 === (3))){
var inst_18800 = (state_18816[(7)]);
var state_18816__$1 = state_18816;
if(cljs.core.truth_(inst_18800)){
var statearr_18824_18839 = state_18816__$1;
(statearr_18824_18839[(1)] = (5));

} else {
var statearr_18825_18840 = state_18816__$1;
(statearr_18825_18840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (2))){
var inst_18799 = (state_18816[(2)]);
var inst_18800 = inst_18799;
var state_18816__$1 = (function (){var statearr_18826 = state_18816;
(statearr_18826[(7)] = inst_18800);

return statearr_18826;
})();
var statearr_18827_18841 = state_18816__$1;
(statearr_18827_18841[(2)] = null);

(statearr_18827_18841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (1))){
var state_18816__$1 = state_18816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18816__$1,(2),c);
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
});})(c__15819__auto___18835,c))
;
return ((function (switch__15763__auto__,c__15819__auto___18835,c){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_18831 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18831[(0)] = state_machine__15764__auto__);

(statearr_18831[(1)] = (1));

return statearr_18831;
});
var state_machine__15764__auto____1 = (function (state_18816){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_18816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e18832){if((e18832 instanceof Object)){
var ex__15767__auto__ = e18832;
var statearr_18833_18842 = state_18816;
(statearr_18833_18842[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18843 = state_18816;
state_18816 = G__18843;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_18816){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_18816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___18835,c))
})();
var state__15821__auto__ = (function (){var statearr_18834 = f__15820__auto__.call(null);
(statearr_18834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___18835);

return statearr_18834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___18835,c))
);


return c;
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__18882 = cljs.core.seq.call(null,tags);
var chunk__18883 = null;
var count__18884 = (0);
var i__18885 = (0);
while(true){
if((i__18885 < count__18884)){
var tag = cljs.core._nth.call(null,chunk__18883,i__18885);
var c__15819__auto___18920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__18882,chunk__18883,count__18884,i__18885,c__15819__auto___18920,tag,tags){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (seq__18882,chunk__18883,count__18884,i__18885,c__15819__auto___18920,tag,tags){
return (function (state_18893){
var state_val_18894 = (state_18893[(1)]);
if((state_val_18894 === (2))){
var inst_18890 = (state_18893[(2)]);
var inst_18891 = cljs.core.println.call(null,"Put!");
var state_18893__$1 = (function (){var statearr_18895 = state_18893;
(statearr_18895[(7)] = inst_18890);

return statearr_18895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18893__$1,inst_18891);
} else {
if((state_val_18894 === (1))){
var inst_18886 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_18887 = [tag,message];
var inst_18888 = cljs.core.PersistentHashMap.fromArrays(inst_18886,inst_18887);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18893__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_18888);
} else {
return null;
}
}
});})(seq__18882,chunk__18883,count__18884,i__18885,c__15819__auto___18920,tag,tags))
;
return ((function (seq__18882,chunk__18883,count__18884,i__18885,switch__15763__auto__,c__15819__auto___18920,tag,tags){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_18899 = [null,null,null,null,null,null,null,null];
(statearr_18899[(0)] = state_machine__15764__auto__);

(statearr_18899[(1)] = (1));

return statearr_18899;
});
var state_machine__15764__auto____1 = (function (state_18893){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_18893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e18900){if((e18900 instanceof Object)){
var ex__15767__auto__ = e18900;
var statearr_18901_18921 = state_18893;
(statearr_18901_18921[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18922 = state_18893;
state_18893 = G__18922;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_18893){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_18893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(seq__18882,chunk__18883,count__18884,i__18885,switch__15763__auto__,c__15819__auto___18920,tag,tags))
})();
var state__15821__auto__ = (function (){var statearr_18902 = f__15820__auto__.call(null);
(statearr_18902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___18920);

return statearr_18902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(seq__18882,chunk__18883,count__18884,i__18885,c__15819__auto___18920,tag,tags))
);


var G__18923 = seq__18882;
var G__18924 = chunk__18883;
var G__18925 = count__18884;
var G__18926 = (i__18885 + (1));
seq__18882 = G__18923;
chunk__18883 = G__18924;
count__18884 = G__18925;
i__18885 = G__18926;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18882);
if(temp__4126__auto__){
var seq__18882__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18882__$1)){
var c__13963__auto__ = cljs.core.chunk_first.call(null,seq__18882__$1);
var G__18927 = cljs.core.chunk_rest.call(null,seq__18882__$1);
var G__18928 = c__13963__auto__;
var G__18929 = cljs.core.count.call(null,c__13963__auto__);
var G__18930 = (0);
seq__18882 = G__18927;
chunk__18883 = G__18928;
count__18884 = G__18929;
i__18885 = G__18930;
continue;
} else {
var tag = cljs.core.first.call(null,seq__18882__$1);
var c__15819__auto___18931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__18882,chunk__18883,count__18884,i__18885,c__15819__auto___18931,tag,seq__18882__$1,temp__4126__auto__,tags){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (seq__18882,chunk__18883,count__18884,i__18885,c__15819__auto___18931,tag,seq__18882__$1,temp__4126__auto__,tags){
return (function (state_18910){
var state_val_18911 = (state_18910[(1)]);
if((state_val_18911 === (2))){
var inst_18907 = (state_18910[(2)]);
var inst_18908 = cljs.core.println.call(null,"Put!");
var state_18910__$1 = (function (){var statearr_18912 = state_18910;
(statearr_18912[(7)] = inst_18907);

return statearr_18912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18910__$1,inst_18908);
} else {
if((state_val_18911 === (1))){
var inst_18903 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_18904 = [tag,message];
var inst_18905 = cljs.core.PersistentHashMap.fromArrays(inst_18903,inst_18904);
var state_18910__$1 = state_18910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18910__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_18905);
} else {
return null;
}
}
});})(seq__18882,chunk__18883,count__18884,i__18885,c__15819__auto___18931,tag,seq__18882__$1,temp__4126__auto__,tags))
;
return ((function (seq__18882,chunk__18883,count__18884,i__18885,switch__15763__auto__,c__15819__auto___18931,tag,seq__18882__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_18916 = [null,null,null,null,null,null,null,null];
(statearr_18916[(0)] = state_machine__15764__auto__);

(statearr_18916[(1)] = (1));

return statearr_18916;
});
var state_machine__15764__auto____1 = (function (state_18910){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_18910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e18917){if((e18917 instanceof Object)){
var ex__15767__auto__ = e18917;
var statearr_18918_18932 = state_18910;
(statearr_18918_18932[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18933 = state_18910;
state_18910 = G__18933;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_18910){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_18910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(seq__18882,chunk__18883,count__18884,i__18885,switch__15763__auto__,c__15819__auto___18931,tag,seq__18882__$1,temp__4126__auto__,tags))
})();
var state__15821__auto__ = (function (){var statearr_18919 = f__15820__auto__.call(null);
(statearr_18919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___18931);

return statearr_18919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(seq__18882,chunk__18883,count__18884,i__18885,c__15819__auto___18931,tag,seq__18882__$1,temp__4126__auto__,tags))
);


var G__18934 = cljs.core.next.call(null,seq__18882__$1);
var G__18935 = null;
var G__18936 = (0);
var G__18937 = (0);
seq__18882 = G__18934;
chunk__18883 = G__18935;
count__18884 = G__18936;
i__18885 = G__18937;
continue;
}
} else {
return null;
}
}
break;
}
};
var dispatch_BANG_ = function (tagortags,var_args){
var message = null;
if (arguments.length > 1) {
var G__18938__i = 0, G__18938__a = new Array(arguments.length -  1);
while (G__18938__i < G__18938__a.length) {G__18938__a[G__18938__i] = arguments[G__18938__i + 1]; ++G__18938__i;}
  message = new cljs.core.IndexedSeq(G__18938__a,0);
} 
return dispatch_BANG___delegate.call(this,tagortags,message);};
dispatch_BANG_.cljs$lang$maxFixedArity = 1;
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__18939){
var tagortags = cljs.core.first(arglist__18939);
var message = cljs.core.rest(arglist__18939);
return dispatch_BANG___delegate(tagortags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
if(cljs.core.truth_(sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_)){
sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);

cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);

var c__15819__auto___18961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___18961){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___18961){
return (function (state_18949){
var state_val_18950 = (state_18949[(1)]);
if((state_val_18950 === (4))){
var inst_18942 = (state_18949[(2)]);
var inst_18943 = cljs.core.pr_str.call(null,inst_18942);
var inst_18944 = cljs.core.println.call(null,"Logged: ",inst_18943);
var state_18949__$1 = (function (){var statearr_18951 = state_18949;
(statearr_18951[(7)] = inst_18944);

return statearr_18951;
})();
var statearr_18952_18962 = state_18949__$1;
(statearr_18952_18962[(2)] = null);

(statearr_18952_18962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18950 === (3))){
var inst_18947 = (state_18949[(2)]);
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18949__$1,inst_18947);
} else {
if((state_val_18950 === (2))){
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18949__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_18950 === (1))){
var state_18949__$1 = state_18949;
var statearr_18953_18963 = state_18949__$1;
(statearr_18953_18963[(2)] = null);

(statearr_18953_18963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15819__auto___18961))
;
return ((function (switch__15763__auto__,c__15819__auto___18961){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_18957 = [null,null,null,null,null,null,null,null];
(statearr_18957[(0)] = state_machine__15764__auto__);

(statearr_18957[(1)] = (1));

return statearr_18957;
});
var state_machine__15764__auto____1 = (function (state_18949){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_18949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e18958){if((e18958 instanceof Object)){
var ex__15767__auto__ = e18958;
var statearr_18959_18964 = state_18949;
(statearr_18959_18964[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18965 = state_18949;
state_18949 = G__18965;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_18949){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_18949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___18961))
})();
var state__15821__auto__ = (function (){var statearr_18960 = f__15820__auto__.call(null);
(statearr_18960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___18961);

return statearr_18960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___18961))
);

} else {
}

//# sourceMappingURL=dispatch.js.map