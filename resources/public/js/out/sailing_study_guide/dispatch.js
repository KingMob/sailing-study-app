// Compiled by ClojureScript 0.0-2913 {:elide-asserts false}
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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__19063_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__19063_SHARP_);
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
var c__16133__auto___19138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___19138,c){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___19138,c){
return (function (state_19119){
var state_val_19120 = (state_19119[(1)]);
if((state_val_19120 === (8))){
var inst_19109 = (state_19119[(2)]);
var inst_19103 = inst_19109;
var state_19119__$1 = (function (){var statearr_19121 = state_19119;
(statearr_19121[(7)] = inst_19103);

return statearr_19121;
})();
var statearr_19122_19139 = state_19119__$1;
(statearr_19122_19139[(2)] = null);

(statearr_19122_19139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (7))){
var inst_19115 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19123_19140 = state_19119__$1;
(statearr_19123_19140[(2)] = inst_19115);

(statearr_19123_19140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (6))){
var inst_19112 = cljs.core.println.call(null,"Leaving loop for ",c);
var inst_19113 = cljs.core.async.close_BANG_.call(null,c);
var state_19119__$1 = (function (){var statearr_19124 = state_19119;
(statearr_19124[(8)] = inst_19112);

return statearr_19124;
})();
var statearr_19125_19141 = state_19119__$1;
(statearr_19125_19141[(2)] = inst_19113);

(statearr_19125_19141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (5))){
var inst_19103 = (state_19119[(7)]);
var inst_19106 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_19103);
var inst_19107 = cb.call(null,inst_19106);
var state_19119__$1 = (function (){var statearr_19126 = state_19119;
(statearr_19126[(9)] = inst_19107);

return statearr_19126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19119__$1,(8),c);
} else {
if((state_val_19120 === (4))){
var inst_19117 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19119__$1,inst_19117);
} else {
if((state_val_19120 === (3))){
var inst_19103 = (state_19119[(7)]);
var state_19119__$1 = state_19119;
if(cljs.core.truth_(inst_19103)){
var statearr_19127_19142 = state_19119__$1;
(statearr_19127_19142[(1)] = (5));

} else {
var statearr_19128_19143 = state_19119__$1;
(statearr_19128_19143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (2))){
var inst_19102 = (state_19119[(2)]);
var inst_19103 = inst_19102;
var state_19119__$1 = (function (){var statearr_19129 = state_19119;
(statearr_19129[(7)] = inst_19103);

return statearr_19129;
})();
var statearr_19130_19144 = state_19119__$1;
(statearr_19130_19144[(2)] = null);

(statearr_19130_19144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (1))){
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19119__$1,(2),c);
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
});})(c__16133__auto___19138,c))
;
return ((function (switch__16077__auto__,c__16133__auto___19138,c){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_19134 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19134[(0)] = state_machine__16078__auto__);

(statearr_19134[(1)] = (1));

return statearr_19134;
});
var state_machine__16078__auto____1 = (function (state_19119){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_19119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e19135){if((e19135 instanceof Object)){
var ex__16081__auto__ = e19135;
var statearr_19136_19145 = state_19119;
(statearr_19136_19145[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19146 = state_19119;
state_19119 = G__19146;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_19119){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_19119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___19138,c))
})();
var state__16135__auto__ = (function (){var statearr_19137 = f__16134__auto__.call(null);
(statearr_19137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___19138);

return statearr_19137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___19138,c))
);


return c;
});
sailing_study_guide.dispatch.dispatch_BANG_ = (function dispatch_BANG_(tagortags,message){
var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));
var seq__19185 = cljs.core.seq.call(null,tags);
var chunk__19186 = null;
var count__19187 = (0);
var i__19188 = (0);
while(true){
if((i__19188 < count__19187)){
var tag = cljs.core._nth.call(null,chunk__19186,i__19188);
var c__16133__auto___19223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19185,chunk__19186,count__19187,i__19188,c__16133__auto___19223,tag,tags){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (seq__19185,chunk__19186,count__19187,i__19188,c__16133__auto___19223,tag,tags){
return (function (state_19196){
var state_val_19197 = (state_19196[(1)]);
if((state_val_19197 === (2))){
var inst_19193 = (state_19196[(2)]);
var inst_19194 = cljs.core.println.call(null,"Put!");
var state_19196__$1 = (function (){var statearr_19198 = state_19196;
(statearr_19198[(7)] = inst_19193);

return statearr_19198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19196__$1,inst_19194);
} else {
if((state_val_19197 === (1))){
var inst_19189 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_19190 = [tag,message];
var inst_19191 = cljs.core.PersistentHashMap.fromArrays(inst_19189,inst_19190);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19196__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_19191);
} else {
return null;
}
}
});})(seq__19185,chunk__19186,count__19187,i__19188,c__16133__auto___19223,tag,tags))
;
return ((function (seq__19185,chunk__19186,count__19187,i__19188,switch__16077__auto__,c__16133__auto___19223,tag,tags){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_19202 = [null,null,null,null,null,null,null,null];
(statearr_19202[(0)] = state_machine__16078__auto__);

(statearr_19202[(1)] = (1));

return statearr_19202;
});
var state_machine__16078__auto____1 = (function (state_19196){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_19196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e19203){if((e19203 instanceof Object)){
var ex__16081__auto__ = e19203;
var statearr_19204_19224 = state_19196;
(statearr_19204_19224[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19225 = state_19196;
state_19196 = G__19225;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_19196){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_19196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(seq__19185,chunk__19186,count__19187,i__19188,switch__16077__auto__,c__16133__auto___19223,tag,tags))
})();
var state__16135__auto__ = (function (){var statearr_19205 = f__16134__auto__.call(null);
(statearr_19205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___19223);

return statearr_19205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(seq__19185,chunk__19186,count__19187,i__19188,c__16133__auto___19223,tag,tags))
);


var G__19226 = seq__19185;
var G__19227 = chunk__19186;
var G__19228 = count__19187;
var G__19229 = (i__19188 + (1));
seq__19185 = G__19226;
chunk__19186 = G__19227;
count__19187 = G__19228;
i__19188 = G__19229;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19185);
if(temp__4126__auto__){
var seq__19185__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19185__$1)){
var c__14252__auto__ = cljs.core.chunk_first.call(null,seq__19185__$1);
var G__19230 = cljs.core.chunk_rest.call(null,seq__19185__$1);
var G__19231 = c__14252__auto__;
var G__19232 = cljs.core.count.call(null,c__14252__auto__);
var G__19233 = (0);
seq__19185 = G__19230;
chunk__19186 = G__19231;
count__19187 = G__19232;
i__19188 = G__19233;
continue;
} else {
var tag = cljs.core.first.call(null,seq__19185__$1);
var c__16133__auto___19234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19185,chunk__19186,count__19187,i__19188,c__16133__auto___19234,tag,seq__19185__$1,temp__4126__auto__,tags){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (seq__19185,chunk__19186,count__19187,i__19188,c__16133__auto___19234,tag,seq__19185__$1,temp__4126__auto__,tags){
return (function (state_19213){
var state_val_19214 = (state_19213[(1)]);
if((state_val_19214 === (2))){
var inst_19210 = (state_19213[(2)]);
var inst_19211 = cljs.core.println.call(null,"Put!");
var state_19213__$1 = (function (){var statearr_19215 = state_19213;
(statearr_19215[(7)] = inst_19210);

return statearr_19215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19213__$1,inst_19211);
} else {
if((state_val_19214 === (1))){
var inst_19206 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_19207 = [tag,message];
var inst_19208 = cljs.core.PersistentHashMap.fromArrays(inst_19206,inst_19207);
var state_19213__$1 = state_19213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19213__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_19208);
} else {
return null;
}
}
});})(seq__19185,chunk__19186,count__19187,i__19188,c__16133__auto___19234,tag,seq__19185__$1,temp__4126__auto__,tags))
;
return ((function (seq__19185,chunk__19186,count__19187,i__19188,switch__16077__auto__,c__16133__auto___19234,tag,seq__19185__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_19219 = [null,null,null,null,null,null,null,null];
(statearr_19219[(0)] = state_machine__16078__auto__);

(statearr_19219[(1)] = (1));

return statearr_19219;
});
var state_machine__16078__auto____1 = (function (state_19213){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_19213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e19220){if((e19220 instanceof Object)){
var ex__16081__auto__ = e19220;
var statearr_19221_19235 = state_19213;
(statearr_19221_19235[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19236 = state_19213;
state_19213 = G__19236;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_19213){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_19213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(seq__19185,chunk__19186,count__19187,i__19188,switch__16077__auto__,c__16133__auto___19234,tag,seq__19185__$1,temp__4126__auto__,tags))
})();
var state__16135__auto__ = (function (){var statearr_19222 = f__16134__auto__.call(null);
(statearr_19222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___19234);

return statearr_19222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(seq__19185,chunk__19186,count__19187,i__19188,c__16133__auto___19234,tag,seq__19185__$1,temp__4126__auto__,tags))
);


var G__19237 = cljs.core.next.call(null,seq__19185__$1);
var G__19238 = null;
var G__19239 = (0);
var G__19240 = (0);
seq__19185 = G__19237;
chunk__19186 = G__19238;
count__19187 = G__19239;
i__19188 = G__19240;
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

var c__16133__auto___19262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___19262){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___19262){
return (function (state_19250){
var state_val_19251 = (state_19250[(1)]);
if((state_val_19251 === (4))){
var inst_19243 = (state_19250[(2)]);
var inst_19244 = cljs.core.pr_str.call(null,inst_19243);
var inst_19245 = cljs.core.println.call(null,"Logged: ",inst_19244);
var state_19250__$1 = (function (){var statearr_19252 = state_19250;
(statearr_19252[(7)] = inst_19245);

return statearr_19252;
})();
var statearr_19253_19263 = state_19250__$1;
(statearr_19253_19263[(2)] = null);

(statearr_19253_19263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19251 === (3))){
var inst_19248 = (state_19250[(2)]);
var state_19250__$1 = state_19250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19250__$1,inst_19248);
} else {
if((state_val_19251 === (2))){
var state_19250__$1 = state_19250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19250__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else {
if((state_val_19251 === (1))){
var state_19250__$1 = state_19250;
var statearr_19254_19264 = state_19250__$1;
(statearr_19254_19264[(2)] = null);

(statearr_19254_19264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__16133__auto___19262))
;
return ((function (switch__16077__auto__,c__16133__auto___19262){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_19258 = [null,null,null,null,null,null,null,null];
(statearr_19258[(0)] = state_machine__16078__auto__);

(statearr_19258[(1)] = (1));

return statearr_19258;
});
var state_machine__16078__auto____1 = (function (state_19250){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_19250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e19259){if((e19259 instanceof Object)){
var ex__16081__auto__ = e19259;
var statearr_19260_19265 = state_19250;
(statearr_19260_19265[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19266 = state_19250;
state_19250 = G__19266;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_19250){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_19250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___19262))
})();
var state__16135__auto__ = (function (){var statearr_19261 = f__16134__auto__.call(null);
(statearr_19261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___19262);

return statearr_19261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___19262))
);

} else {
}

//# sourceMappingURL=dispatch.js.map