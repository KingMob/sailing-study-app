// Compiled by ClojureScript 0.0-3123 {:elide-asserts false}
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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__22770_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__22770_SHARP_);
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
var c__19828__auto___22845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___22845,c){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___22845,c){
return (function (state_22826){
var state_val_22827 = (state_22826[(1)]);
if((state_val_22827 === (8))){
var inst_22816 = (state_22826[(2)]);
var inst_22810 = inst_22816;
var state_22826__$1 = (function (){var statearr_22828 = state_22826;
(statearr_22828[(7)] = inst_22810);

return statearr_22828;
})();
var statearr_22829_22846 = state_22826__$1;
(statearr_22829_22846[(2)] = null);

(statearr_22829_22846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22827 === (7))){
var inst_22822 = (state_22826[(2)]);
var state_22826__$1 = state_22826;
var statearr_22830_22847 = state_22826__$1;
(statearr_22830_22847[(2)] = inst_22822);

(statearr_22830_22847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22827 === (6))){
var inst_22819 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_22820 = cljs.core.async.close_BANG_.call(null,c);
var state_22826__$1 = (function (){var statearr_22831 = state_22826;
(statearr_22831[(8)] = inst_22819);

return statearr_22831;
})();
var statearr_22832_22848 = state_22826__$1;
(statearr_22832_22848[(2)] = inst_22820);

(statearr_22832_22848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22827 === (5))){
var inst_22810 = (state_22826[(7)]);
var inst_22813 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_22810);
var inst_22814 = cb.call(null,inst_22813);
var state_22826__$1 = (function (){var statearr_22833 = state_22826;
(statearr_22833[(9)] = inst_22814);

return statearr_22833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22826__$1,(8),c);
} else {
if((state_val_22827 === (4))){
var inst_22824 = (state_22826[(2)]);
var state_22826__$1 = state_22826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22826__$1,inst_22824);
} else {
if((state_val_22827 === (3))){
var inst_22810 = (state_22826[(7)]);
var state_22826__$1 = state_22826;
if(cljs.core.truth_(inst_22810)){
var statearr_22834_22849 = state_22826__$1;
(statearr_22834_22849[(1)] = (5));

} else {
var statearr_22835_22850 = state_22826__$1;
(statearr_22835_22850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22827 === (2))){
var inst_22809 = (state_22826[(2)]);
var inst_22810 = inst_22809;
var state_22826__$1 = (function (){var statearr_22836 = state_22826;
(statearr_22836[(7)] = inst_22810);

return statearr_22836;
})();
var statearr_22837_22851 = state_22826__$1;
(statearr_22837_22851[(2)] = null);

(statearr_22837_22851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22827 === (1))){
var state_22826__$1 = state_22826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22826__$1,(2),c);
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
});})(c__19828__auto___22845,c))
;
return ((function (switch__19772__auto__,c__19828__auto___22845,c){
return (function() {
var sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto__ = null;
var sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto____0 = (function (){
var statearr_22841 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22841[(0)] = sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto__);

(statearr_22841[(1)] = (1));

return statearr_22841;
});
var sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto____1 = (function (state_22826){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_22826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e22842){if((e22842 instanceof Object)){
var ex__19776__auto__ = e22842;
var statearr_22843_22852 = state_22826;
(statearr_22843_22852[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22853 = state_22826;
state_22826 = G__22853;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto__ = function(state_22826){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto____1.call(this,state_22826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto____0;
sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto____1;
return sailing_study_guide$dispatch$whenever_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___22845,c))
})();
var state__19830__auto__ = (function (){var statearr_22844 = f__19829__auto__.call(null);
(statearr_22844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___22845);

return statearr_22844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___22845,c))
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
var seq__22892 = cljs.core.seq.call(null,tags);
var chunk__22893 = null;
var count__22894 = (0);
var i__22895 = (0);
while(true){
if((i__22895 < count__22894)){
var tag = cljs.core._nth.call(null,chunk__22893,i__22895);
var c__19828__auto___22930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__22892,chunk__22893,count__22894,i__22895,c__19828__auto___22930,tag,tags){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (seq__22892,chunk__22893,count__22894,i__22895,c__19828__auto___22930,tag,tags){
return (function (state_22903){
var state_val_22904 = (state_22903[(1)]);
if((state_val_22904 === (2))){
var inst_22900 = (state_22903[(2)]);
var inst_22901 = cljs.core.println.call(null,"Put!");
var state_22903__$1 = (function (){var statearr_22905 = state_22903;
(statearr_22905[(7)] = inst_22900);

return statearr_22905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22903__$1,inst_22901);
} else {
if((state_val_22904 === (1))){
var inst_22896 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22897 = [tag,message];
var inst_22898 = cljs.core.PersistentHashMap.fromArrays(inst_22896,inst_22897);
var state_22903__$1 = state_22903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22903__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_22898);
} else {
return null;
}
}
});})(seq__22892,chunk__22893,count__22894,i__22895,c__19828__auto___22930,tag,tags))
;
return ((function (seq__22892,chunk__22893,count__22894,i__22895,switch__19772__auto__,c__19828__auto___22930,tag,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____0 = (function (){
var statearr_22909 = [null,null,null,null,null,null,null,null];
(statearr_22909[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__);

(statearr_22909[(1)] = (1));

return statearr_22909;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____1 = (function (state_22903){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_22903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e22910){if((e22910 instanceof Object)){
var ex__19776__auto__ = e22910;
var statearr_22911_22931 = state_22903;
(statearr_22911_22931[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22932 = state_22903;
state_22903 = G__22932;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__ = function(state_22903){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____1.call(this,state_22903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__;
})()
;})(seq__22892,chunk__22893,count__22894,i__22895,switch__19772__auto__,c__19828__auto___22930,tag,tags))
})();
var state__19830__auto__ = (function (){var statearr_22912 = f__19829__auto__.call(null);
(statearr_22912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___22930);

return statearr_22912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(seq__22892,chunk__22893,count__22894,i__22895,c__19828__auto___22930,tag,tags))
);


var G__22933 = seq__22892;
var G__22934 = chunk__22893;
var G__22935 = count__22894;
var G__22936 = (i__22895 + (1));
seq__22892 = G__22933;
chunk__22893 = G__22934;
count__22894 = G__22935;
i__22895 = G__22936;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22892);
if(temp__4126__auto__){
var seq__22892__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22892__$1)){
var c__18431__auto__ = cljs.core.chunk_first.call(null,seq__22892__$1);
var G__22937 = cljs.core.chunk_rest.call(null,seq__22892__$1);
var G__22938 = c__18431__auto__;
var G__22939 = cljs.core.count.call(null,c__18431__auto__);
var G__22940 = (0);
seq__22892 = G__22937;
chunk__22893 = G__22938;
count__22894 = G__22939;
i__22895 = G__22940;
continue;
} else {
var tag = cljs.core.first.call(null,seq__22892__$1);
var c__19828__auto___22941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__22892,chunk__22893,count__22894,i__22895,c__19828__auto___22941,tag,seq__22892__$1,temp__4126__auto__,tags){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (seq__22892,chunk__22893,count__22894,i__22895,c__19828__auto___22941,tag,seq__22892__$1,temp__4126__auto__,tags){
return (function (state_22920){
var state_val_22921 = (state_22920[(1)]);
if((state_val_22921 === (2))){
var inst_22917 = (state_22920[(2)]);
var inst_22918 = cljs.core.println.call(null,"Put!");
var state_22920__$1 = (function (){var statearr_22922 = state_22920;
(statearr_22922[(7)] = inst_22917);

return statearr_22922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22920__$1,inst_22918);
} else {
if((state_val_22921 === (1))){
var inst_22913 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22914 = [tag,message];
var inst_22915 = cljs.core.PersistentHashMap.fromArrays(inst_22913,inst_22914);
var state_22920__$1 = state_22920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22920__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_22915);
} else {
return null;
}
}
});})(seq__22892,chunk__22893,count__22894,i__22895,c__19828__auto___22941,tag,seq__22892__$1,temp__4126__auto__,tags))
;
return ((function (seq__22892,chunk__22893,count__22894,i__22895,switch__19772__auto__,c__19828__auto___22941,tag,seq__22892__$1,temp__4126__auto__,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____0 = (function (){
var statearr_22926 = [null,null,null,null,null,null,null,null];
(statearr_22926[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__);

(statearr_22926[(1)] = (1));

return statearr_22926;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____1 = (function (state_22920){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_22920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e22927){if((e22927 instanceof Object)){
var ex__19776__auto__ = e22927;
var statearr_22928_22942 = state_22920;
(statearr_22928_22942[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22943 = state_22920;
state_22920 = G__22943;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__ = function(state_22920){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____1.call(this,state_22920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19773__auto__;
})()
;})(seq__22892,chunk__22893,count__22894,i__22895,switch__19772__auto__,c__19828__auto___22941,tag,seq__22892__$1,temp__4126__auto__,tags))
})();
var state__19830__auto__ = (function (){var statearr_22929 = f__19829__auto__.call(null);
(statearr_22929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___22941);

return statearr_22929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(seq__22892,chunk__22893,count__22894,i__22895,c__19828__auto___22941,tag,seq__22892__$1,temp__4126__auto__,tags))
);


var G__22944 = cljs.core.next.call(null,seq__22892__$1);
var G__22945 = null;
var G__22946 = (0);
var G__22947 = (0);
seq__22892 = G__22944;
chunk__22893 = G__22945;
count__22894 = G__22946;
i__22895 = G__22947;
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

var c__19828__auto___22969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto___22969){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto___22969){
return (function (state_22957){
var state_val_22958 = (state_22957[(1)]);
if((state_val_22958 === (4))){
var inst_22950 = (state_22957[(2)]);
var inst_22951 = cljs.core.pr_str.call(null,inst_22950);
var inst_22952 = cljs.core.println.call(null,"Logged: ",inst_22951);
var state_22957__$1 = (function (){var statearr_22959 = state_22957;
(statearr_22959[(7)] = inst_22952);

return statearr_22959;
})();
var statearr_22960_22970 = state_22957__$1;
(statearr_22960_22970[(2)] = null);

(statearr_22960_22970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22958 === (3))){
var inst_22955 = (state_22957[(2)]);
var state_22957__$1 = state_22957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22957__$1,inst_22955);
} else {
if((state_val_22958 === (2))){
var state_22957__$1 = state_22957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22957__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_22958 === (1))){
var state_22957__$1 = state_22957;
var statearr_22961_22971 = state_22957__$1;
(statearr_22961_22971[(2)] = null);

(statearr_22961_22971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19828__auto___22969))
;
return ((function (switch__19772__auto__,c__19828__auto___22969){
return (function() {
var sailing_study_guide$dispatch$state_machine__19773__auto__ = null;
var sailing_study_guide$dispatch$state_machine__19773__auto____0 = (function (){
var statearr_22965 = [null,null,null,null,null,null,null,null];
(statearr_22965[(0)] = sailing_study_guide$dispatch$state_machine__19773__auto__);

(statearr_22965[(1)] = (1));

return statearr_22965;
});
var sailing_study_guide$dispatch$state_machine__19773__auto____1 = (function (state_22957){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_22957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e22966){if((e22966 instanceof Object)){
var ex__19776__auto__ = e22966;
var statearr_22967_22972 = state_22957;
(statearr_22967_22972[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22973 = state_22957;
state_22957 = G__22973;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
sailing_study_guide$dispatch$state_machine__19773__auto__ = function(state_22957){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$state_machine__19773__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$state_machine__19773__auto____1.call(this,state_22957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$state_machine__19773__auto____0;
sailing_study_guide$dispatch$state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$state_machine__19773__auto____1;
return sailing_study_guide$dispatch$state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto___22969))
})();
var state__19830__auto__ = (function (){var statearr_22968 = f__19829__auto__.call(null);
(statearr_22968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto___22969);

return statearr_22968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto___22969))
);

} else {
}

//# sourceMappingURL=dispatch.js.map