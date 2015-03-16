// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__25202_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__25202_SHARP_);
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
var c__19776__auto___25277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19776__auto___25277,c){
return (function (){
var f__19777__auto__ = (function (){var switch__19720__auto__ = ((function (c__19776__auto___25277,c){
return (function (state_25258){
var state_val_25259 = (state_25258[(1)]);
if((state_val_25259 === (8))){
var inst_25248 = (state_25258[(2)]);
var inst_25242 = inst_25248;
var state_25258__$1 = (function (){var statearr_25260 = state_25258;
(statearr_25260[(7)] = inst_25242);

return statearr_25260;
})();
var statearr_25261_25278 = state_25258__$1;
(statearr_25261_25278[(2)] = null);

(statearr_25261_25278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (7))){
var inst_25254 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25262_25279 = state_25258__$1;
(statearr_25262_25279[(2)] = inst_25254);

(statearr_25262_25279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (6))){
var inst_25251 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_25252 = cljs.core.async.close_BANG_.call(null,c);
var state_25258__$1 = (function (){var statearr_25263 = state_25258;
(statearr_25263[(8)] = inst_25251);

return statearr_25263;
})();
var statearr_25264_25280 = state_25258__$1;
(statearr_25264_25280[(2)] = inst_25252);

(statearr_25264_25280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (5))){
var inst_25242 = (state_25258[(7)]);
var inst_25245 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_25242);
var inst_25246 = cb.call(null,inst_25245);
var state_25258__$1 = (function (){var statearr_25265 = state_25258;
(statearr_25265[(9)] = inst_25246);

return statearr_25265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25258__$1,(8),c);
} else {
if((state_val_25259 === (4))){
var inst_25256 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25258__$1,inst_25256);
} else {
if((state_val_25259 === (3))){
var inst_25242 = (state_25258[(7)]);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25242)){
var statearr_25266_25281 = state_25258__$1;
(statearr_25266_25281[(1)] = (5));

} else {
var statearr_25267_25282 = state_25258__$1;
(statearr_25267_25282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (2))){
var inst_25241 = (state_25258[(2)]);
var inst_25242 = inst_25241;
var state_25258__$1 = (function (){var statearr_25268 = state_25258;
(statearr_25268[(7)] = inst_25242);

return statearr_25268;
})();
var statearr_25269_25283 = state_25258__$1;
(statearr_25269_25283[(2)] = null);

(statearr_25269_25283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (1))){
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25258__$1,(2),c);
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
});})(c__19776__auto___25277,c))
;
return ((function (switch__19720__auto__,c__19776__auto___25277,c){
return (function() {
var sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto__ = null;
var sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto____0 = (function (){
var statearr_25273 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25273[(0)] = sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto__);

(statearr_25273[(1)] = (1));

return statearr_25273;
});
var sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto____1 = (function (state_25258){
while(true){
var ret_value__19722__auto__ = (function (){try{while(true){
var result__19723__auto__ = switch__19720__auto__.call(null,state_25258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19723__auto__;
}
break;
}
}catch (e25274){if((e25274 instanceof Object)){
var ex__19724__auto__ = e25274;
var statearr_25275_25284 = state_25258;
(statearr_25275_25284[(5)] = ex__19724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25285 = state_25258;
state_25258 = G__25285;
continue;
} else {
return ret_value__19722__auto__;
}
break;
}
});
sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto__ = function(state_25258){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto____1.call(this,state_25258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto____0;
sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto____1;
return sailing_study_guide$dispatch$whenever_$_state_machine__19721__auto__;
})()
;})(switch__19720__auto__,c__19776__auto___25277,c))
})();
var state__19778__auto__ = (function (){var statearr_25276 = f__19777__auto__.call(null);
(statearr_25276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19776__auto___25277);

return statearr_25276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19778__auto__);
});})(c__19776__auto___25277,c))
);


return c;
});
sailing_study_guide.dispatch.dispatch_BANG_ = (function sailing_study_guide$dispatch$dispatch_BANG_(tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__25324 = cljs.core.seq.call(null,tags);
var chunk__25325 = null;
var count__25326 = (0);
var i__25327 = (0);
while(true){
if((i__25327 < count__25326)){
var tag = cljs.core._nth.call(null,chunk__25325,i__25327);
var c__19776__auto___25362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__25324,chunk__25325,count__25326,i__25327,c__19776__auto___25362,tag,tags){
return (function (){
var f__19777__auto__ = (function (){var switch__19720__auto__ = ((function (seq__25324,chunk__25325,count__25326,i__25327,c__19776__auto___25362,tag,tags){
return (function (state_25335){
var state_val_25336 = (state_25335[(1)]);
if((state_val_25336 === (2))){
var inst_25332 = (state_25335[(2)]);
var inst_25333 = cljs.core.println.call(null,"Put!");
var state_25335__$1 = (function (){var statearr_25337 = state_25335;
(statearr_25337[(7)] = inst_25332);

return statearr_25337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25335__$1,inst_25333);
} else {
if((state_val_25336 === (1))){
var inst_25328 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25329 = [tag,message];
var inst_25330 = cljs.core.PersistentHashMap.fromArrays(inst_25328,inst_25329);
var state_25335__$1 = state_25335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25335__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_25330);
} else {
return null;
}
}
});})(seq__25324,chunk__25325,count__25326,i__25327,c__19776__auto___25362,tag,tags))
;
return ((function (seq__25324,chunk__25325,count__25326,i__25327,switch__19720__auto__,c__19776__auto___25362,tag,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____0 = (function (){
var statearr_25341 = [null,null,null,null,null,null,null,null];
(statearr_25341[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__);

(statearr_25341[(1)] = (1));

return statearr_25341;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____1 = (function (state_25335){
while(true){
var ret_value__19722__auto__ = (function (){try{while(true){
var result__19723__auto__ = switch__19720__auto__.call(null,state_25335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19723__auto__;
}
break;
}
}catch (e25342){if((e25342 instanceof Object)){
var ex__19724__auto__ = e25342;
var statearr_25343_25363 = state_25335;
(statearr_25343_25363[(5)] = ex__19724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25364 = state_25335;
state_25335 = G__25364;
continue;
} else {
return ret_value__19722__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__ = function(state_25335){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____1.call(this,state_25335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__;
})()
;})(seq__25324,chunk__25325,count__25326,i__25327,switch__19720__auto__,c__19776__auto___25362,tag,tags))
})();
var state__19778__auto__ = (function (){var statearr_25344 = f__19777__auto__.call(null);
(statearr_25344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19776__auto___25362);

return statearr_25344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19778__auto__);
});})(seq__25324,chunk__25325,count__25326,i__25327,c__19776__auto___25362,tag,tags))
);


var G__25365 = seq__25324;
var G__25366 = chunk__25325;
var G__25367 = count__25326;
var G__25368 = (i__25327 + (1));
seq__25324 = G__25365;
chunk__25325 = G__25366;
count__25326 = G__25367;
i__25327 = G__25368;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25324);
if(temp__4126__auto__){
var seq__25324__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25324__$1)){
var c__18381__auto__ = cljs.core.chunk_first.call(null,seq__25324__$1);
var G__25369 = cljs.core.chunk_rest.call(null,seq__25324__$1);
var G__25370 = c__18381__auto__;
var G__25371 = cljs.core.count.call(null,c__18381__auto__);
var G__25372 = (0);
seq__25324 = G__25369;
chunk__25325 = G__25370;
count__25326 = G__25371;
i__25327 = G__25372;
continue;
} else {
var tag = cljs.core.first.call(null,seq__25324__$1);
var c__19776__auto___25373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__25324,chunk__25325,count__25326,i__25327,c__19776__auto___25373,tag,seq__25324__$1,temp__4126__auto__,tags){
return (function (){
var f__19777__auto__ = (function (){var switch__19720__auto__ = ((function (seq__25324,chunk__25325,count__25326,i__25327,c__19776__auto___25373,tag,seq__25324__$1,temp__4126__auto__,tags){
return (function (state_25352){
var state_val_25353 = (state_25352[(1)]);
if((state_val_25353 === (2))){
var inst_25349 = (state_25352[(2)]);
var inst_25350 = cljs.core.println.call(null,"Put!");
var state_25352__$1 = (function (){var statearr_25354 = state_25352;
(statearr_25354[(7)] = inst_25349);

return statearr_25354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25352__$1,inst_25350);
} else {
if((state_val_25353 === (1))){
var inst_25345 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25346 = [tag,message];
var inst_25347 = cljs.core.PersistentHashMap.fromArrays(inst_25345,inst_25346);
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25352__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_25347);
} else {
return null;
}
}
});})(seq__25324,chunk__25325,count__25326,i__25327,c__19776__auto___25373,tag,seq__25324__$1,temp__4126__auto__,tags))
;
return ((function (seq__25324,chunk__25325,count__25326,i__25327,switch__19720__auto__,c__19776__auto___25373,tag,seq__25324__$1,temp__4126__auto__,tags){
return (function() {
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__ = null;
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____0 = (function (){
var statearr_25358 = [null,null,null,null,null,null,null,null];
(statearr_25358[(0)] = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__);

(statearr_25358[(1)] = (1));

return statearr_25358;
});
var sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____1 = (function (state_25352){
while(true){
var ret_value__19722__auto__ = (function (){try{while(true){
var result__19723__auto__ = switch__19720__auto__.call(null,state_25352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19723__auto__;
}
break;
}
}catch (e25359){if((e25359 instanceof Object)){
var ex__19724__auto__ = e25359;
var statearr_25360_25374 = state_25352;
(statearr_25360_25374[(5)] = ex__19724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25375 = state_25352;
state_25352 = G__25375;
continue;
} else {
return ret_value__19722__auto__;
}
break;
}
});
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__ = function(state_25352){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____1.call(this,state_25352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____0;
sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto____1;
return sailing_study_guide$dispatch$dispatch_BANG__$_state_machine__19721__auto__;
})()
;})(seq__25324,chunk__25325,count__25326,i__25327,switch__19720__auto__,c__19776__auto___25373,tag,seq__25324__$1,temp__4126__auto__,tags))
})();
var state__19778__auto__ = (function (){var statearr_25361 = f__19777__auto__.call(null);
(statearr_25361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19776__auto___25373);

return statearr_25361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19778__auto__);
});})(seq__25324,chunk__25325,count__25326,i__25327,c__19776__auto___25373,tag,seq__25324__$1,temp__4126__auto__,tags))
);


var G__25376 = cljs.core.next.call(null,seq__25324__$1);
var G__25377 = null;
var G__25378 = (0);
var G__25379 = (0);
seq__25324 = G__25376;
chunk__25325 = G__25377;
count__25326 = G__25378;
i__25327 = G__25379;
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

var c__19776__auto___25401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19776__auto___25401){
return (function (){
var f__19777__auto__ = (function (){var switch__19720__auto__ = ((function (c__19776__auto___25401){
return (function (state_25389){
var state_val_25390 = (state_25389[(1)]);
if((state_val_25390 === (4))){
var inst_25382 = (state_25389[(2)]);
var inst_25383 = cljs.core.pr_str.call(null,inst_25382);
var inst_25384 = cljs.core.println.call(null,"Logged: ",inst_25383);
var state_25389__$1 = (function (){var statearr_25391 = state_25389;
(statearr_25391[(7)] = inst_25384);

return statearr_25391;
})();
var statearr_25392_25402 = state_25389__$1;
(statearr_25392_25402[(2)] = null);

(statearr_25392_25402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25390 === (3))){
var inst_25387 = (state_25389[(2)]);
var state_25389__$1 = state_25389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25389__$1,inst_25387);
} else {
if((state_val_25390 === (2))){
var state_25389__$1 = state_25389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25389__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_25390 === (1))){
var state_25389__$1 = state_25389;
var statearr_25393_25403 = state_25389__$1;
(statearr_25393_25403[(2)] = null);

(statearr_25393_25403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19776__auto___25401))
;
return ((function (switch__19720__auto__,c__19776__auto___25401){
return (function() {
var sailing_study_guide$dispatch$state_machine__19721__auto__ = null;
var sailing_study_guide$dispatch$state_machine__19721__auto____0 = (function (){
var statearr_25397 = [null,null,null,null,null,null,null,null];
(statearr_25397[(0)] = sailing_study_guide$dispatch$state_machine__19721__auto__);

(statearr_25397[(1)] = (1));

return statearr_25397;
});
var sailing_study_guide$dispatch$state_machine__19721__auto____1 = (function (state_25389){
while(true){
var ret_value__19722__auto__ = (function (){try{while(true){
var result__19723__auto__ = switch__19720__auto__.call(null,state_25389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19723__auto__;
}
break;
}
}catch (e25398){if((e25398 instanceof Object)){
var ex__19724__auto__ = e25398;
var statearr_25399_25404 = state_25389;
(statearr_25399_25404[(5)] = ex__19724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25405 = state_25389;
state_25389 = G__25405;
continue;
} else {
return ret_value__19722__auto__;
}
break;
}
});
sailing_study_guide$dispatch$state_machine__19721__auto__ = function(state_25389){
switch(arguments.length){
case 0:
return sailing_study_guide$dispatch$state_machine__19721__auto____0.call(this);
case 1:
return sailing_study_guide$dispatch$state_machine__19721__auto____1.call(this,state_25389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sailing_study_guide$dispatch$state_machine__19721__auto__.cljs$core$IFn$_invoke$arity$0 = sailing_study_guide$dispatch$state_machine__19721__auto____0;
sailing_study_guide$dispatch$state_machine__19721__auto__.cljs$core$IFn$_invoke$arity$1 = sailing_study_guide$dispatch$state_machine__19721__auto____1;
return sailing_study_guide$dispatch$state_machine__19721__auto__;
})()
;})(switch__19720__auto__,c__19776__auto___25401))
})();
var state__19778__auto__ = (function (){var statearr_25400 = f__19777__auto__.call(null);
(statearr_25400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19776__auto___25401);

return statearr_25400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19778__auto__);
});})(c__19776__auto___25401))
);

} else {
}

//# sourceMappingURL=dispatch.js.map