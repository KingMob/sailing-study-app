// Compiled by ClojureScript 0.0-2740 {}
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('clairvoyant.core');
goog.require('cljs.core.async');
sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ = false;
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__12177_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__12177_SHARP_);
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
var c__7173__auto___12252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___12252,c){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___12252,c){
return (function (state_12233){
var state_val_12234 = (state_12233[(1)]);
if((state_val_12234 === (8))){
var inst_12223 = (state_12233[(2)]);
var inst_12217 = inst_12223;
var state_12233__$1 = (function (){var statearr_12235 = state_12233;
(statearr_12235[(7)] = inst_12217);

return statearr_12235;
})();
var statearr_12236_12253 = state_12233__$1;
(statearr_12236_12253[(2)] = null);

(statearr_12236_12253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12234 === (7))){
var inst_12229 = (state_12233[(2)]);
var state_12233__$1 = state_12233;
var statearr_12237_12254 = state_12233__$1;
(statearr_12237_12254[(2)] = inst_12229);

(statearr_12237_12254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12234 === (6))){
var inst_12226 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_12227 = cljs.core.async.close_BANG_.call(null,c);
var state_12233__$1 = (function (){var statearr_12238 = state_12233;
(statearr_12238[(8)] = inst_12226);

return statearr_12238;
})();
var statearr_12239_12255 = state_12233__$1;
(statearr_12239_12255[(2)] = inst_12227);

(statearr_12239_12255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12234 === (5))){
var inst_12217 = (state_12233[(7)]);
var inst_12220 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_12217);
var inst_12221 = cb.call(null,inst_12220);
var state_12233__$1 = (function (){var statearr_12240 = state_12233;
(statearr_12240[(9)] = inst_12221);

return statearr_12240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12233__$1,(8),c);
} else {
if((state_val_12234 === (4))){
var inst_12231 = (state_12233[(2)]);
var state_12233__$1 = state_12233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12233__$1,inst_12231);
} else {
if((state_val_12234 === (3))){
var inst_12217 = (state_12233[(7)]);
var state_12233__$1 = state_12233;
if(cljs.core.truth_(inst_12217)){
var statearr_12241_12256 = state_12233__$1;
(statearr_12241_12256[(1)] = (5));

} else {
var statearr_12242_12257 = state_12233__$1;
(statearr_12242_12257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12234 === (2))){
var inst_12216 = (state_12233[(2)]);
var inst_12217 = inst_12216;
var state_12233__$1 = (function (){var statearr_12243 = state_12233;
(statearr_12243[(7)] = inst_12217);

return statearr_12243;
})();
var statearr_12244_12258 = state_12233__$1;
(statearr_12244_12258[(2)] = null);

(statearr_12244_12258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12234 === (1))){
var state_12233__$1 = state_12233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12233__$1,(2),c);
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
});})(c__7173__auto___12252,c))
;
return ((function (switch__7117__auto__,c__7173__auto___12252,c){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_12248 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12248[(0)] = state_machine__7118__auto__);

(statearr_12248[(1)] = (1));

return statearr_12248;
});
var state_machine__7118__auto____1 = (function (state_12233){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_12233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e12249){if((e12249 instanceof Object)){
var ex__7121__auto__ = e12249;
var statearr_12250_12259 = state_12233;
(statearr_12250_12259[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12260 = state_12233;
state_12233 = G__12260;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_12233){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_12233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___12252,c))
})();
var state__7175__auto__ = (function (){var statearr_12251 = f__7174__auto__.call(null);
(statearr_12251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___12252);

return statearr_12251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___12252,c))
);


return c;
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__12299 = cljs.core.seq.call(null,tags);
var chunk__12300 = null;
var count__12301 = (0);
var i__12302 = (0);
while(true){
if((i__12302 < count__12301)){
var tag = cljs.core._nth.call(null,chunk__12300,i__12302);
var c__7173__auto___12337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__12299,chunk__12300,count__12301,i__12302,c__7173__auto___12337,tag,tags){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (seq__12299,chunk__12300,count__12301,i__12302,c__7173__auto___12337,tag,tags){
return (function (state_12310){
var state_val_12311 = (state_12310[(1)]);
if((state_val_12311 === (2))){
var inst_12307 = (state_12310[(2)]);
var inst_12308 = cljs.core.println.call(null,"Put!");
var state_12310__$1 = (function (){var statearr_12312 = state_12310;
(statearr_12312[(7)] = inst_12307);

return statearr_12312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12310__$1,inst_12308);
} else {
if((state_val_12311 === (1))){
var inst_12303 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_12304 = [tag,message];
var inst_12305 = cljs.core.PersistentHashMap.fromArrays(inst_12303,inst_12304);
var state_12310__$1 = state_12310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12310__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_12305);
} else {
return null;
}
}
});})(seq__12299,chunk__12300,count__12301,i__12302,c__7173__auto___12337,tag,tags))
;
return ((function (seq__12299,chunk__12300,count__12301,i__12302,switch__7117__auto__,c__7173__auto___12337,tag,tags){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_12316 = [null,null,null,null,null,null,null,null];
(statearr_12316[(0)] = state_machine__7118__auto__);

(statearr_12316[(1)] = (1));

return statearr_12316;
});
var state_machine__7118__auto____1 = (function (state_12310){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_12310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e12317){if((e12317 instanceof Object)){
var ex__7121__auto__ = e12317;
var statearr_12318_12338 = state_12310;
(statearr_12318_12338[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12339 = state_12310;
state_12310 = G__12339;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_12310){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_12310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(seq__12299,chunk__12300,count__12301,i__12302,switch__7117__auto__,c__7173__auto___12337,tag,tags))
})();
var state__7175__auto__ = (function (){var statearr_12319 = f__7174__auto__.call(null);
(statearr_12319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___12337);

return statearr_12319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(seq__12299,chunk__12300,count__12301,i__12302,c__7173__auto___12337,tag,tags))
);


var G__12340 = seq__12299;
var G__12341 = chunk__12300;
var G__12342 = count__12301;
var G__12343 = (i__12302 + (1));
seq__12299 = G__12340;
chunk__12300 = G__12341;
count__12301 = G__12342;
i__12302 = G__12343;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12299);
if(temp__4126__auto__){
var seq__12299__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12299__$1)){
var c__4546__auto__ = cljs.core.chunk_first.call(null,seq__12299__$1);
var G__12344 = cljs.core.chunk_rest.call(null,seq__12299__$1);
var G__12345 = c__4546__auto__;
var G__12346 = cljs.core.count.call(null,c__4546__auto__);
var G__12347 = (0);
seq__12299 = G__12344;
chunk__12300 = G__12345;
count__12301 = G__12346;
i__12302 = G__12347;
continue;
} else {
var tag = cljs.core.first.call(null,seq__12299__$1);
var c__7173__auto___12348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__12299,chunk__12300,count__12301,i__12302,c__7173__auto___12348,tag,seq__12299__$1,temp__4126__auto__,tags){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (seq__12299,chunk__12300,count__12301,i__12302,c__7173__auto___12348,tag,seq__12299__$1,temp__4126__auto__,tags){
return (function (state_12327){
var state_val_12328 = (state_12327[(1)]);
if((state_val_12328 === (2))){
var inst_12324 = (state_12327[(2)]);
var inst_12325 = cljs.core.println.call(null,"Put!");
var state_12327__$1 = (function (){var statearr_12329 = state_12327;
(statearr_12329[(7)] = inst_12324);

return statearr_12329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12327__$1,inst_12325);
} else {
if((state_val_12328 === (1))){
var inst_12320 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_12321 = [tag,message];
var inst_12322 = cljs.core.PersistentHashMap.fromArrays(inst_12320,inst_12321);
var state_12327__$1 = state_12327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12327__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_12322);
} else {
return null;
}
}
});})(seq__12299,chunk__12300,count__12301,i__12302,c__7173__auto___12348,tag,seq__12299__$1,temp__4126__auto__,tags))
;
return ((function (seq__12299,chunk__12300,count__12301,i__12302,switch__7117__auto__,c__7173__auto___12348,tag,seq__12299__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_12333 = [null,null,null,null,null,null,null,null];
(statearr_12333[(0)] = state_machine__7118__auto__);

(statearr_12333[(1)] = (1));

return statearr_12333;
});
var state_machine__7118__auto____1 = (function (state_12327){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_12327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e12334){if((e12334 instanceof Object)){
var ex__7121__auto__ = e12334;
var statearr_12335_12349 = state_12327;
(statearr_12335_12349[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12350 = state_12327;
state_12327 = G__12350;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_12327){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_12327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(seq__12299,chunk__12300,count__12301,i__12302,switch__7117__auto__,c__7173__auto___12348,tag,seq__12299__$1,temp__4126__auto__,tags))
})();
var state__7175__auto__ = (function (){var statearr_12336 = f__7174__auto__.call(null);
(statearr_12336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___12348);

return statearr_12336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(seq__12299,chunk__12300,count__12301,i__12302,c__7173__auto___12348,tag,seq__12299__$1,temp__4126__auto__,tags))
);


var G__12351 = cljs.core.next.call(null,seq__12299__$1);
var G__12352 = null;
var G__12353 = (0);
var G__12354 = (0);
seq__12299 = G__12351;
chunk__12300 = G__12352;
count__12301 = G__12353;
i__12302 = G__12354;
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
var G__12355__i = 0, G__12355__a = new Array(arguments.length -  1);
while (G__12355__i < G__12355__a.length) {G__12355__a[G__12355__i] = arguments[G__12355__i + 1]; ++G__12355__i;}
  message = new cljs.core.IndexedSeq(G__12355__a,0);
} 
return dispatch_BANG___delegate.call(this,tagortags,message);};
dispatch_BANG_.cljs$lang$maxFixedArity = 1;
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__12356){
var tagortags = cljs.core.first(arglist__12356);
var message = cljs.core.rest(arglist__12356);
return dispatch_BANG___delegate(tagortags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
if(cljs.core.truth_(sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_)){
sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);

cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);

var c__7173__auto___12378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___12378){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___12378){
return (function (state_12366){
var state_val_12367 = (state_12366[(1)]);
if((state_val_12367 === (4))){
var inst_12359 = (state_12366[(2)]);
var inst_12360 = cljs.core.pr_str.call(null,inst_12359);
var inst_12361 = cljs.core.println.call(null,"Logged: ",inst_12360);
var state_12366__$1 = (function (){var statearr_12368 = state_12366;
(statearr_12368[(7)] = inst_12361);

return statearr_12368;
})();
var statearr_12369_12379 = state_12366__$1;
(statearr_12369_12379[(2)] = null);

(statearr_12369_12379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (3))){
var inst_12364 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12366__$1,inst_12364);
} else {
if((state_val_12367 === (2))){
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12366__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_12367 === (1))){
var state_12366__$1 = state_12366;
var statearr_12370_12380 = state_12366__$1;
(statearr_12370_12380[(2)] = null);

(statearr_12370_12380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7173__auto___12378))
;
return ((function (switch__7117__auto__,c__7173__auto___12378){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_12374 = [null,null,null,null,null,null,null,null];
(statearr_12374[(0)] = state_machine__7118__auto__);

(statearr_12374[(1)] = (1));

return statearr_12374;
});
var state_machine__7118__auto____1 = (function (state_12366){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_12366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e12375){if((e12375 instanceof Object)){
var ex__7121__auto__ = e12375;
var statearr_12376_12381 = state_12366;
(statearr_12376_12381[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12382 = state_12366;
state_12366 = G__12382;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_12366){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_12366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___12378))
})();
var state__7175__auto__ = (function (){var statearr_12377 = f__7174__auto__.call(null);
(statearr_12377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___12378);

return statearr_12377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___12378))
);

} else {
}

//# sourceMappingURL=dispatch.js.map