// Compiled by ClojureScript 0.0-2760 {}
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ = false;
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__18758_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__18758_SHARP_);
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
var c__15819__auto___18833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___18833,c){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___18833,c){
return (function (state_18814){
var state_val_18815 = (state_18814[(1)]);
if((state_val_18815 === (8))){
var inst_18804 = (state_18814[(2)]);
var inst_18798 = inst_18804;
var state_18814__$1 = (function (){var statearr_18816 = state_18814;
(statearr_18816[(7)] = inst_18798);

return statearr_18816;
})();
var statearr_18817_18834 = state_18814__$1;
(statearr_18817_18834[(2)] = null);

(statearr_18817_18834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (7))){
var inst_18810 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18818_18835 = state_18814__$1;
(statearr_18818_18835[(2)] = inst_18810);

(statearr_18818_18835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (6))){
var inst_18807 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_18808 = cljs.core.async.close_BANG_.call(null,c);
var state_18814__$1 = (function (){var statearr_18819 = state_18814;
(statearr_18819[(8)] = inst_18807);

return statearr_18819;
})();
var statearr_18820_18836 = state_18814__$1;
(statearr_18820_18836[(2)] = inst_18808);

(statearr_18820_18836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (5))){
var inst_18798 = (state_18814[(7)]);
var inst_18801 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_18798);
var inst_18802 = cb.call(null,inst_18801);
var state_18814__$1 = (function (){var statearr_18821 = state_18814;
(statearr_18821[(9)] = inst_18802);

return statearr_18821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18814__$1,(8),c);
} else {
if((state_val_18815 === (4))){
var inst_18812 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18814__$1,inst_18812);
} else {
if((state_val_18815 === (3))){
var inst_18798 = (state_18814[(7)]);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18798)){
var statearr_18822_18837 = state_18814__$1;
(statearr_18822_18837[(1)] = (5));

} else {
var statearr_18823_18838 = state_18814__$1;
(statearr_18823_18838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (2))){
var inst_18797 = (state_18814[(2)]);
var inst_18798 = inst_18797;
var state_18814__$1 = (function (){var statearr_18824 = state_18814;
(statearr_18824[(7)] = inst_18798);

return statearr_18824;
})();
var statearr_18825_18839 = state_18814__$1;
(statearr_18825_18839[(2)] = null);

(statearr_18825_18839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (1))){
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18814__$1,(2),c);
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
});})(c__15819__auto___18833,c))
;
return ((function (switch__15763__auto__,c__15819__auto___18833,c){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_18829 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18829[(0)] = state_machine__15764__auto__);

(statearr_18829[(1)] = (1));

return statearr_18829;
});
var state_machine__15764__auto____1 = (function (state_18814){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_18814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e18830){if((e18830 instanceof Object)){
var ex__15767__auto__ = e18830;
var statearr_18831_18840 = state_18814;
(statearr_18831_18840[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18841 = state_18814;
state_18814 = G__18841;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_18814){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_18814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___18833,c))
})();
var state__15821__auto__ = (function (){var statearr_18832 = f__15820__auto__.call(null);
(statearr_18832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___18833);

return statearr_18832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___18833,c))
);


return c;
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__18880 = cljs.core.seq.call(null,tags);
var chunk__18881 = null;
var count__18882 = (0);
var i__18883 = (0);
while(true){
if((i__18883 < count__18882)){
var tag = cljs.core._nth.call(null,chunk__18881,i__18883);
var c__15819__auto___18918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__18880,chunk__18881,count__18882,i__18883,c__15819__auto___18918,tag,tags){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (seq__18880,chunk__18881,count__18882,i__18883,c__15819__auto___18918,tag,tags){
return (function (state_18891){
var state_val_18892 = (state_18891[(1)]);
if((state_val_18892 === (2))){
var inst_18888 = (state_18891[(2)]);
var inst_18889 = cljs.core.println.call(null,"Put!");
var state_18891__$1 = (function (){var statearr_18893 = state_18891;
(statearr_18893[(7)] = inst_18888);

return statearr_18893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18891__$1,inst_18889);
} else {
if((state_val_18892 === (1))){
var inst_18884 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_18885 = [tag,message];
var inst_18886 = cljs.core.PersistentHashMap.fromArrays(inst_18884,inst_18885);
var state_18891__$1 = state_18891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18891__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_18886);
} else {
return null;
}
}
});})(seq__18880,chunk__18881,count__18882,i__18883,c__15819__auto___18918,tag,tags))
;
return ((function (seq__18880,chunk__18881,count__18882,i__18883,switch__15763__auto__,c__15819__auto___18918,tag,tags){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_18897 = [null,null,null,null,null,null,null,null];
(statearr_18897[(0)] = state_machine__15764__auto__);

(statearr_18897[(1)] = (1));

return statearr_18897;
});
var state_machine__15764__auto____1 = (function (state_18891){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_18891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e18898){if((e18898 instanceof Object)){
var ex__15767__auto__ = e18898;
var statearr_18899_18919 = state_18891;
(statearr_18899_18919[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18920 = state_18891;
state_18891 = G__18920;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_18891){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_18891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(seq__18880,chunk__18881,count__18882,i__18883,switch__15763__auto__,c__15819__auto___18918,tag,tags))
})();
var state__15821__auto__ = (function (){var statearr_18900 = f__15820__auto__.call(null);
(statearr_18900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___18918);

return statearr_18900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(seq__18880,chunk__18881,count__18882,i__18883,c__15819__auto___18918,tag,tags))
);


var G__18921 = seq__18880;
var G__18922 = chunk__18881;
var G__18923 = count__18882;
var G__18924 = (i__18883 + (1));
seq__18880 = G__18921;
chunk__18881 = G__18922;
count__18882 = G__18923;
i__18883 = G__18924;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18880);
if(temp__4126__auto__){
var seq__18880__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18880__$1)){
var c__13963__auto__ = cljs.core.chunk_first.call(null,seq__18880__$1);
var G__18925 = cljs.core.chunk_rest.call(null,seq__18880__$1);
var G__18926 = c__13963__auto__;
var G__18927 = cljs.core.count.call(null,c__13963__auto__);
var G__18928 = (0);
seq__18880 = G__18925;
chunk__18881 = G__18926;
count__18882 = G__18927;
i__18883 = G__18928;
continue;
} else {
var tag = cljs.core.first.call(null,seq__18880__$1);
var c__15819__auto___18929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__18880,chunk__18881,count__18882,i__18883,c__15819__auto___18929,tag,seq__18880__$1,temp__4126__auto__,tags){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (seq__18880,chunk__18881,count__18882,i__18883,c__15819__auto___18929,tag,seq__18880__$1,temp__4126__auto__,tags){
return (function (state_18908){
var state_val_18909 = (state_18908[(1)]);
if((state_val_18909 === (2))){
var inst_18905 = (state_18908[(2)]);
var inst_18906 = cljs.core.println.call(null,"Put!");
var state_18908__$1 = (function (){var statearr_18910 = state_18908;
(statearr_18910[(7)] = inst_18905);

return statearr_18910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18908__$1,inst_18906);
} else {
if((state_val_18909 === (1))){
var inst_18901 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_18902 = [tag,message];
var inst_18903 = cljs.core.PersistentHashMap.fromArrays(inst_18901,inst_18902);
var state_18908__$1 = state_18908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18908__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_18903);
} else {
return null;
}
}
});})(seq__18880,chunk__18881,count__18882,i__18883,c__15819__auto___18929,tag,seq__18880__$1,temp__4126__auto__,tags))
;
return ((function (seq__18880,chunk__18881,count__18882,i__18883,switch__15763__auto__,c__15819__auto___18929,tag,seq__18880__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_18914 = [null,null,null,null,null,null,null,null];
(statearr_18914[(0)] = state_machine__15764__auto__);

(statearr_18914[(1)] = (1));

return statearr_18914;
});
var state_machine__15764__auto____1 = (function (state_18908){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_18908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e18915){if((e18915 instanceof Object)){
var ex__15767__auto__ = e18915;
var statearr_18916_18930 = state_18908;
(statearr_18916_18930[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18931 = state_18908;
state_18908 = G__18931;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_18908){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_18908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(seq__18880,chunk__18881,count__18882,i__18883,switch__15763__auto__,c__15819__auto___18929,tag,seq__18880__$1,temp__4126__auto__,tags))
})();
var state__15821__auto__ = (function (){var statearr_18917 = f__15820__auto__.call(null);
(statearr_18917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___18929);

return statearr_18917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(seq__18880,chunk__18881,count__18882,i__18883,c__15819__auto___18929,tag,seq__18880__$1,temp__4126__auto__,tags))
);


var G__18932 = cljs.core.next.call(null,seq__18880__$1);
var G__18933 = null;
var G__18934 = (0);
var G__18935 = (0);
seq__18880 = G__18932;
chunk__18881 = G__18933;
count__18882 = G__18934;
i__18883 = G__18935;
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
var G__18936__i = 0, G__18936__a = new Array(arguments.length -  1);
while (G__18936__i < G__18936__a.length) {G__18936__a[G__18936__i] = arguments[G__18936__i + 1]; ++G__18936__i;}
  message = new cljs.core.IndexedSeq(G__18936__a,0);
} 
return dispatch_BANG___delegate.call(this,tagortags,message);};
dispatch_BANG_.cljs$lang$maxFixedArity = 1;
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__18937){
var tagortags = cljs.core.first(arglist__18937);
var message = cljs.core.rest(arglist__18937);
return dispatch_BANG___delegate(tagortags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
if(cljs.core.truth_(sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_)){
sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);

cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);

var c__15819__auto___18959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___18959){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___18959){
return (function (state_18947){
var state_val_18948 = (state_18947[(1)]);
if((state_val_18948 === (4))){
var inst_18940 = (state_18947[(2)]);
var inst_18941 = cljs.core.pr_str.call(null,inst_18940);
var inst_18942 = cljs.core.println.call(null,"Logged: ",inst_18941);
var state_18947__$1 = (function (){var statearr_18949 = state_18947;
(statearr_18949[(7)] = inst_18942);

return statearr_18949;
})();
var statearr_18950_18960 = state_18947__$1;
(statearr_18950_18960[(2)] = null);

(statearr_18950_18960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (3))){
var inst_18945 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18947__$1,inst_18945);
} else {
if((state_val_18948 === (2))){
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18947__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_18948 === (1))){
var state_18947__$1 = state_18947;
var statearr_18951_18961 = state_18947__$1;
(statearr_18951_18961[(2)] = null);

(statearr_18951_18961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15819__auto___18959))
;
return ((function (switch__15763__auto__,c__15819__auto___18959){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_18955 = [null,null,null,null,null,null,null,null];
(statearr_18955[(0)] = state_machine__15764__auto__);

(statearr_18955[(1)] = (1));

return statearr_18955;
});
var state_machine__15764__auto____1 = (function (state_18947){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_18947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e18956){if((e18956 instanceof Object)){
var ex__15767__auto__ = e18956;
var statearr_18957_18962 = state_18947;
(statearr_18957_18962[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18963 = state_18947;
state_18947 = G__18963;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_18947){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_18947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___18959))
})();
var state__15821__auto__ = (function (){var statearr_18958 = f__15820__auto__.call(null);
(statearr_18958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___18959);

return statearr_18958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___18959))
);

} else {
}

//# sourceMappingURL=dispatch.js.map