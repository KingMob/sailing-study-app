// Compiled by ClojureScript 0.0-2760 {}
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ = false;
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__9188_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__9188_SHARP_);
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
var c__6200__auto___9263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___9263,c){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___9263,c){
return (function (state_9244){
var state_val_9245 = (state_9244[(1)]);
if((state_val_9245 === (8))){
var inst_9234 = (state_9244[(2)]);
var inst_9228 = inst_9234;
var state_9244__$1 = (function (){var statearr_9246 = state_9244;
(statearr_9246[(7)] = inst_9228);

return statearr_9246;
})();
var statearr_9247_9264 = state_9244__$1;
(statearr_9247_9264[(2)] = null);

(statearr_9247_9264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (7))){
var inst_9240 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9248_9265 = state_9244__$1;
(statearr_9248_9265[(2)] = inst_9240);

(statearr_9248_9265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (6))){
var inst_9237 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_9238 = cljs.core.async.close_BANG_.call(null,c);
var state_9244__$1 = (function (){var statearr_9249 = state_9244;
(statearr_9249[(8)] = inst_9237);

return statearr_9249;
})();
var statearr_9250_9266 = state_9244__$1;
(statearr_9250_9266[(2)] = inst_9238);

(statearr_9250_9266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (5))){
var inst_9228 = (state_9244[(7)]);
var inst_9231 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_9228);
var inst_9232 = cb.call(null,inst_9231);
var state_9244__$1 = (function (){var statearr_9251 = state_9244;
(statearr_9251[(9)] = inst_9232);

return statearr_9251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9244__$1,(8),c);
} else {
if((state_val_9245 === (4))){
var inst_9242 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9244__$1,inst_9242);
} else {
if((state_val_9245 === (3))){
var inst_9228 = (state_9244[(7)]);
var state_9244__$1 = state_9244;
if(cljs.core.truth_(inst_9228)){
var statearr_9252_9267 = state_9244__$1;
(statearr_9252_9267[(1)] = (5));

} else {
var statearr_9253_9268 = state_9244__$1;
(statearr_9253_9268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (2))){
var inst_9227 = (state_9244[(2)]);
var inst_9228 = inst_9227;
var state_9244__$1 = (function (){var statearr_9254 = state_9244;
(statearr_9254[(7)] = inst_9228);

return statearr_9254;
})();
var statearr_9255_9269 = state_9244__$1;
(statearr_9255_9269[(2)] = null);

(statearr_9255_9269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (1))){
var state_9244__$1 = state_9244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9244__$1,(2),c);
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
});})(c__6200__auto___9263,c))
;
return ((function (switch__6144__auto__,c__6200__auto___9263,c){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_9259 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9259[(0)] = state_machine__6145__auto__);

(statearr_9259[(1)] = (1));

return statearr_9259;
});
var state_machine__6145__auto____1 = (function (state_9244){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_9244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e9260){if((e9260 instanceof Object)){
var ex__6148__auto__ = e9260;
var statearr_9261_9270 = state_9244;
(statearr_9261_9270[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9271 = state_9244;
state_9244 = G__9271;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_9244){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_9244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___9263,c))
})();
var state__6202__auto__ = (function (){var statearr_9262 = f__6201__auto__.call(null);
(statearr_9262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___9263);

return statearr_9262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___9263,c))
);


return c;
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__9310 = cljs.core.seq.call(null,tags);
var chunk__9311 = null;
var count__9312 = (0);
var i__9313 = (0);
while(true){
if((i__9313 < count__9312)){
var tag = cljs.core._nth.call(null,chunk__9311,i__9313);
var c__6200__auto___9348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__9310,chunk__9311,count__9312,i__9313,c__6200__auto___9348,tag,tags){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (seq__9310,chunk__9311,count__9312,i__9313,c__6200__auto___9348,tag,tags){
return (function (state_9321){
var state_val_9322 = (state_9321[(1)]);
if((state_val_9322 === (2))){
var inst_9318 = (state_9321[(2)]);
var inst_9319 = cljs.core.println.call(null,"Put!");
var state_9321__$1 = (function (){var statearr_9323 = state_9321;
(statearr_9323[(7)] = inst_9318);

return statearr_9323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9321__$1,inst_9319);
} else {
if((state_val_9322 === (1))){
var inst_9314 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_9315 = [tag,message];
var inst_9316 = cljs.core.PersistentHashMap.fromArrays(inst_9314,inst_9315);
var state_9321__$1 = state_9321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9321__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_9316);
} else {
return null;
}
}
});})(seq__9310,chunk__9311,count__9312,i__9313,c__6200__auto___9348,tag,tags))
;
return ((function (seq__9310,chunk__9311,count__9312,i__9313,switch__6144__auto__,c__6200__auto___9348,tag,tags){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_9327 = [null,null,null,null,null,null,null,null];
(statearr_9327[(0)] = state_machine__6145__auto__);

(statearr_9327[(1)] = (1));

return statearr_9327;
});
var state_machine__6145__auto____1 = (function (state_9321){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_9321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e9328){if((e9328 instanceof Object)){
var ex__6148__auto__ = e9328;
var statearr_9329_9349 = state_9321;
(statearr_9329_9349[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9350 = state_9321;
state_9321 = G__9350;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_9321){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_9321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(seq__9310,chunk__9311,count__9312,i__9313,switch__6144__auto__,c__6200__auto___9348,tag,tags))
})();
var state__6202__auto__ = (function (){var statearr_9330 = f__6201__auto__.call(null);
(statearr_9330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___9348);

return statearr_9330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(seq__9310,chunk__9311,count__9312,i__9313,c__6200__auto___9348,tag,tags))
);


var G__9351 = seq__9310;
var G__9352 = chunk__9311;
var G__9353 = count__9312;
var G__9354 = (i__9313 + (1));
seq__9310 = G__9351;
chunk__9311 = G__9352;
count__9312 = G__9353;
i__9313 = G__9354;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9310);
if(temp__4126__auto__){
var seq__9310__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9310__$1)){
var c__4039__auto__ = cljs.core.chunk_first.call(null,seq__9310__$1);
var G__9355 = cljs.core.chunk_rest.call(null,seq__9310__$1);
var G__9356 = c__4039__auto__;
var G__9357 = cljs.core.count.call(null,c__4039__auto__);
var G__9358 = (0);
seq__9310 = G__9355;
chunk__9311 = G__9356;
count__9312 = G__9357;
i__9313 = G__9358;
continue;
} else {
var tag = cljs.core.first.call(null,seq__9310__$1);
var c__6200__auto___9359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__9310,chunk__9311,count__9312,i__9313,c__6200__auto___9359,tag,seq__9310__$1,temp__4126__auto__,tags){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (seq__9310,chunk__9311,count__9312,i__9313,c__6200__auto___9359,tag,seq__9310__$1,temp__4126__auto__,tags){
return (function (state_9338){
var state_val_9339 = (state_9338[(1)]);
if((state_val_9339 === (2))){
var inst_9335 = (state_9338[(2)]);
var inst_9336 = cljs.core.println.call(null,"Put!");
var state_9338__$1 = (function (){var statearr_9340 = state_9338;
(statearr_9340[(7)] = inst_9335);

return statearr_9340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9338__$1,inst_9336);
} else {
if((state_val_9339 === (1))){
var inst_9331 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_9332 = [tag,message];
var inst_9333 = cljs.core.PersistentHashMap.fromArrays(inst_9331,inst_9332);
var state_9338__$1 = state_9338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9338__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_9333);
} else {
return null;
}
}
});})(seq__9310,chunk__9311,count__9312,i__9313,c__6200__auto___9359,tag,seq__9310__$1,temp__4126__auto__,tags))
;
return ((function (seq__9310,chunk__9311,count__9312,i__9313,switch__6144__auto__,c__6200__auto___9359,tag,seq__9310__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_9344 = [null,null,null,null,null,null,null,null];
(statearr_9344[(0)] = state_machine__6145__auto__);

(statearr_9344[(1)] = (1));

return statearr_9344;
});
var state_machine__6145__auto____1 = (function (state_9338){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_9338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e9345){if((e9345 instanceof Object)){
var ex__6148__auto__ = e9345;
var statearr_9346_9360 = state_9338;
(statearr_9346_9360[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9361 = state_9338;
state_9338 = G__9361;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_9338){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_9338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(seq__9310,chunk__9311,count__9312,i__9313,switch__6144__auto__,c__6200__auto___9359,tag,seq__9310__$1,temp__4126__auto__,tags))
})();
var state__6202__auto__ = (function (){var statearr_9347 = f__6201__auto__.call(null);
(statearr_9347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___9359);

return statearr_9347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(seq__9310,chunk__9311,count__9312,i__9313,c__6200__auto___9359,tag,seq__9310__$1,temp__4126__auto__,tags))
);


var G__9362 = cljs.core.next.call(null,seq__9310__$1);
var G__9363 = null;
var G__9364 = (0);
var G__9365 = (0);
seq__9310 = G__9362;
chunk__9311 = G__9363;
count__9312 = G__9364;
i__9313 = G__9365;
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
var G__9366__i = 0, G__9366__a = new Array(arguments.length -  1);
while (G__9366__i < G__9366__a.length) {G__9366__a[G__9366__i] = arguments[G__9366__i + 1]; ++G__9366__i;}
  message = new cljs.core.IndexedSeq(G__9366__a,0);
} 
return dispatch_BANG___delegate.call(this,tagortags,message);};
dispatch_BANG_.cljs$lang$maxFixedArity = 1;
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__9367){
var tagortags = cljs.core.first(arglist__9367);
var message = cljs.core.rest(arglist__9367);
return dispatch_BANG___delegate(tagortags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
if(cljs.core.truth_(sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_)){
sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);

cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);

var c__6200__auto___9389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___9389){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___9389){
return (function (state_9377){
var state_val_9378 = (state_9377[(1)]);
if((state_val_9378 === (4))){
var inst_9370 = (state_9377[(2)]);
var inst_9371 = cljs.core.pr_str.call(null,inst_9370);
var inst_9372 = cljs.core.println.call(null,"Logged: ",inst_9371);
var state_9377__$1 = (function (){var statearr_9379 = state_9377;
(statearr_9379[(7)] = inst_9372);

return statearr_9379;
})();
var statearr_9380_9390 = state_9377__$1;
(statearr_9380_9390[(2)] = null);

(statearr_9380_9390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9378 === (3))){
var inst_9375 = (state_9377[(2)]);
var state_9377__$1 = state_9377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9377__$1,inst_9375);
} else {
if((state_val_9378 === (2))){
var state_9377__$1 = state_9377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9377__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_9378 === (1))){
var state_9377__$1 = state_9377;
var statearr_9381_9391 = state_9377__$1;
(statearr_9381_9391[(2)] = null);

(statearr_9381_9391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6200__auto___9389))
;
return ((function (switch__6144__auto__,c__6200__auto___9389){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_9385 = [null,null,null,null,null,null,null,null];
(statearr_9385[(0)] = state_machine__6145__auto__);

(statearr_9385[(1)] = (1));

return statearr_9385;
});
var state_machine__6145__auto____1 = (function (state_9377){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_9377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e9386){if((e9386 instanceof Object)){
var ex__6148__auto__ = e9386;
var statearr_9387_9392 = state_9377;
(statearr_9387_9392[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9393 = state_9377;
state_9377 = G__9393;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_9377){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_9377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___9389))
})();
var state__6202__auto__ = (function (){var statearr_9388 = f__6201__auto__.call(null);
(statearr_9388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___9389);

return statearr_9388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___9389))
);

} else {
}

//# sourceMappingURL=dispatch.js.map