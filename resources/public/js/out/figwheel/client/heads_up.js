// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30940_30948 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30941_30949 = null;
var count__30942_30950 = (0);
var i__30943_30951 = (0);
while(true){
if((i__30943_30951 < count__30942_30950)){
var k_30952 = cljs.core._nth.call(null,chunk__30941_30949,i__30943_30951);
e.setAttribute(cljs.core.name.call(null,k_30952),cljs.core.get.call(null,attrs,k_30952));

var G__30953 = seq__30940_30948;
var G__30954 = chunk__30941_30949;
var G__30955 = count__30942_30950;
var G__30956 = (i__30943_30951 + (1));
seq__30940_30948 = G__30953;
chunk__30941_30949 = G__30954;
count__30942_30950 = G__30955;
i__30943_30951 = G__30956;
continue;
} else {
var temp__4126__auto___30957 = cljs.core.seq.call(null,seq__30940_30948);
if(temp__4126__auto___30957){
var seq__30940_30958__$1 = temp__4126__auto___30957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30940_30958__$1)){
var c__14115__auto___30959 = cljs.core.chunk_first.call(null,seq__30940_30958__$1);
var G__30960 = cljs.core.chunk_rest.call(null,seq__30940_30958__$1);
var G__30961 = c__14115__auto___30959;
var G__30962 = cljs.core.count.call(null,c__14115__auto___30959);
var G__30963 = (0);
seq__30940_30948 = G__30960;
chunk__30941_30949 = G__30961;
count__30942_30950 = G__30962;
i__30943_30951 = G__30963;
continue;
} else {
var k_30964 = cljs.core.first.call(null,seq__30940_30958__$1);
e.setAttribute(cljs.core.name.call(null,k_30964),cljs.core.get.call(null,attrs,k_30964));

var G__30965 = cljs.core.next.call(null,seq__30940_30958__$1);
var G__30966 = null;
var G__30967 = (0);
var G__30968 = (0);
seq__30940_30948 = G__30965;
chunk__30941_30949 = G__30966;
count__30942_30950 = G__30967;
i__30943_30951 = G__30968;
continue;
}
} else {
}
}
break;
}

var seq__30944_30969 = cljs.core.seq.call(null,children);
var chunk__30945_30970 = null;
var count__30946_30971 = (0);
var i__30947_30972 = (0);
while(true){
if((i__30947_30972 < count__30946_30971)){
var ch_30973 = cljs.core._nth.call(null,chunk__30945_30970,i__30947_30972);
e.appendChild(ch_30973);

var G__30974 = seq__30944_30969;
var G__30975 = chunk__30945_30970;
var G__30976 = count__30946_30971;
var G__30977 = (i__30947_30972 + (1));
seq__30944_30969 = G__30974;
chunk__30945_30970 = G__30975;
count__30946_30971 = G__30976;
i__30947_30972 = G__30977;
continue;
} else {
var temp__4126__auto___30978 = cljs.core.seq.call(null,seq__30944_30969);
if(temp__4126__auto___30978){
var seq__30944_30979__$1 = temp__4126__auto___30978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30944_30979__$1)){
var c__14115__auto___30980 = cljs.core.chunk_first.call(null,seq__30944_30979__$1);
var G__30981 = cljs.core.chunk_rest.call(null,seq__30944_30979__$1);
var G__30982 = c__14115__auto___30980;
var G__30983 = cljs.core.count.call(null,c__14115__auto___30980);
var G__30984 = (0);
seq__30944_30969 = G__30981;
chunk__30945_30970 = G__30982;
count__30946_30971 = G__30983;
i__30947_30972 = G__30984;
continue;
} else {
var ch_30985 = cljs.core.first.call(null,seq__30944_30979__$1);
e.appendChild(ch_30985);

var G__30986 = cljs.core.next.call(null,seq__30944_30979__$1);
var G__30987 = null;
var G__30988 = (0);
var G__30989 = (0);
seq__30944_30969 = G__30986;
chunk__30945_30970 = G__30987;
count__30946_30971 = G__30988;
i__30947_30972 = G__30989;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__30990__i = 0, G__30990__a = new Array(arguments.length -  2);
while (G__30990__i < G__30990__a.length) {G__30990__a[G__30990__i] = arguments[G__30990__i + 2]; ++G__30990__i;}
  children = new cljs.core.IndexedSeq(G__30990__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__30991){
var t = cljs.core.first(arglist__30991);
arglist__30991 = cljs.core.next(arglist__30991);
var attrs = cljs.core.first(arglist__30991);
var children = cljs.core.rest(arglist__30991);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__14225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14226__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14227__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14229__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__14225__auto__,prefer_table__14226__auto__,method_cache__14227__auto__,cached_hierarchy__14228__auto__,hierarchy__14229__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__14225__auto__,prefer_table__14226__auto__,method_cache__14227__auto__,cached_hierarchy__14228__auto__,hierarchy__14229__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14229__auto__,method_table__14225__auto__,prefer_table__14226__auto__,method_cache__14227__auto__,cached_hierarchy__14228__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__30992,st_map){
var map__30996 = p__30992;
var map__30996__$1 = ((cljs.core.seq_QMARK_.call(null,map__30996))?cljs.core.apply.call(null,cljs.core.hash_map,map__30996):map__30996);
var container_el = cljs.core.get.call(null,map__30996__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30996,map__30996__$1,container_el){
return (function (p__30997){
var vec__30998 = p__30997;
var k = cljs.core.nth.call(null,vec__30998,(0),null);
var v = cljs.core.nth.call(null,vec__30998,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30996,map__30996__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__30999,dom_str){
var map__31001 = p__30999;
var map__31001__$1 = ((cljs.core.seq_QMARK_.call(null,map__31001))?cljs.core.apply.call(null,cljs.core.hash_map,map__31001):map__31001);
var c = map__31001__$1;
var content_area_el = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__31002){
var map__31004 = p__31002;
var map__31004__$1 = ((cljs.core.seq_QMARK_.call(null,map__31004))?cljs.core.apply.call(null,cljs.core.hash_map,map__31004):map__31004);
var content_area_el = cljs.core.get.call(null,map__31004__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__){
return (function (state_31046){
var state_val_31047 = (state_31046[(1)]);
if((state_val_31047 === (2))){
var inst_31031 = (state_31046[(7)]);
var inst_31040 = (state_31046[(2)]);
var inst_31041 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31042 = ["auto"];
var inst_31043 = cljs.core.PersistentHashMap.fromArrays(inst_31041,inst_31042);
var inst_31044 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31031,inst_31043);
var state_31046__$1 = (function (){var statearr_31048 = state_31046;
(statearr_31048[(8)] = inst_31040);

return statearr_31048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31046__$1,inst_31044);
} else {
if((state_val_31047 === (1))){
var inst_31031 = (state_31046[(7)]);
var inst_31031__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31032 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31033 = ["10px","10px","100%","68px","1.0"];
var inst_31034 = cljs.core.PersistentHashMap.fromArrays(inst_31032,inst_31033);
var inst_31035 = cljs.core.merge.call(null,inst_31034,style);
var inst_31036 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31031__$1,inst_31035);
var inst_31037 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31031__$1,msg);
var inst_31038 = cljs.core.async.timeout.call(null,(300));
var state_31046__$1 = (function (){var statearr_31049 = state_31046;
(statearr_31049[(9)] = inst_31036);

(statearr_31049[(7)] = inst_31031__$1);

(statearr_31049[(10)] = inst_31037);

return statearr_31049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31046__$1,(2),inst_31038);
} else {
return null;
}
}
});})(c__15997__auto__))
;
return ((function (switch__15941__auto__,c__15997__auto__){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_31053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31053[(0)] = state_machine__15942__auto__);

(statearr_31053[(1)] = (1));

return statearr_31053;
});
var state_machine__15942__auto____1 = (function (state_31046){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_31046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e31054){if((e31054 instanceof Object)){
var ex__15945__auto__ = e31054;
var statearr_31055_31057 = state_31046;
(statearr_31055_31057[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31058 = state_31046;
state_31046 = G__31058;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_31046){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_31046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__))
})();
var state__15999__auto__ = (function (){var statearr_31056 = f__15998__auto__.call(null);
(statearr_31056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_31056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__))
);

return c__15997__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__31060 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__31060,(0),null);
var ln = cljs.core.nth.call(null,vec__31060,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__31063 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__31063,(0),null);
var file_line = cljs.core.nth.call(null,vec__31063,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31063,file_name,file_line){
return (function (p1__31061_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31061_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31063,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__31065 = figwheel.client.heads_up.ensure_container.call(null);
var map__31065__$1 = ((cljs.core.seq_QMARK_.call(null,map__31065))?cljs.core.apply.call(null,cljs.core.hash_map,map__31065):map__31065);
var content_area_el = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__){
return (function (state_31112){
var state_val_31113 = (state_31112[(1)]);
if((state_val_31113 === (3))){
var inst_31095 = (state_31112[(7)]);
var inst_31109 = (state_31112[(2)]);
var inst_31110 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31095,"");
var state_31112__$1 = (function (){var statearr_31114 = state_31112;
(statearr_31114[(8)] = inst_31109);

return statearr_31114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31112__$1,inst_31110);
} else {
if((state_val_31113 === (2))){
var inst_31095 = (state_31112[(7)]);
var inst_31102 = (state_31112[(2)]);
var inst_31103 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31104 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31105 = cljs.core.PersistentHashMap.fromArrays(inst_31103,inst_31104);
var inst_31106 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31095,inst_31105);
var inst_31107 = cljs.core.async.timeout.call(null,(200));
var state_31112__$1 = (function (){var statearr_31115 = state_31112;
(statearr_31115[(9)] = inst_31102);

(statearr_31115[(10)] = inst_31106);

return statearr_31115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31112__$1,(3),inst_31107);
} else {
if((state_val_31113 === (1))){
var inst_31095 = (state_31112[(7)]);
var inst_31095__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31096 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31097 = ["0.0"];
var inst_31098 = cljs.core.PersistentHashMap.fromArrays(inst_31096,inst_31097);
var inst_31099 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31095__$1,inst_31098);
var inst_31100 = cljs.core.async.timeout.call(null,(300));
var state_31112__$1 = (function (){var statearr_31116 = state_31112;
(statearr_31116[(7)] = inst_31095__$1);

(statearr_31116[(11)] = inst_31099);

return statearr_31116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31112__$1,(2),inst_31100);
} else {
return null;
}
}
}
});})(c__15997__auto__))
;
return ((function (switch__15941__auto__,c__15997__auto__){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_31120 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31120[(0)] = state_machine__15942__auto__);

(statearr_31120[(1)] = (1));

return statearr_31120;
});
var state_machine__15942__auto____1 = (function (state_31112){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_31112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e31121){if((e31121 instanceof Object)){
var ex__15945__auto__ = e31121;
var statearr_31122_31124 = state_31112;
(statearr_31122_31124[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31125 = state_31112;
state_31112 = G__31125;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_31112){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_31112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__))
})();
var state__15999__auto__ = (function (){var statearr_31123 = f__15998__auto__.call(null);
(statearr_31123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_31123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__))
);

return c__15997__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__){
return (function (state_31157){
var state_val_31158 = (state_31157[(1)]);
if((state_val_31158 === (4))){
var inst_31155 = (state_31157[(2)]);
var state_31157__$1 = state_31157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31157__$1,inst_31155);
} else {
if((state_val_31158 === (3))){
var inst_31152 = (state_31157[(2)]);
var inst_31153 = figwheel.client.heads_up.clear.call(null);
var state_31157__$1 = (function (){var statearr_31159 = state_31157;
(statearr_31159[(7)] = inst_31152);

return statearr_31159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31157__$1,(4),inst_31153);
} else {
if((state_val_31158 === (2))){
var inst_31149 = (state_31157[(2)]);
var inst_31150 = cljs.core.async.timeout.call(null,(400));
var state_31157__$1 = (function (){var statearr_31160 = state_31157;
(statearr_31160[(8)] = inst_31149);

return statearr_31160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31157__$1,(3),inst_31150);
} else {
if((state_val_31158 === (1))){
var inst_31147 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31157__$1 = state_31157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31157__$1,(2),inst_31147);
} else {
return null;
}
}
}
}
});})(c__15997__auto__))
;
return ((function (switch__15941__auto__,c__15997__auto__){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_31164 = [null,null,null,null,null,null,null,null,null];
(statearr_31164[(0)] = state_machine__15942__auto__);

(statearr_31164[(1)] = (1));

return statearr_31164;
});
var state_machine__15942__auto____1 = (function (state_31157){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_31157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e31165){if((e31165 instanceof Object)){
var ex__15945__auto__ = e31165;
var statearr_31166_31168 = state_31157;
(statearr_31166_31168[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31169 = state_31157;
state_31157 = G__31169;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_31157){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_31157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__))
})();
var state__15999__auto__ = (function (){var statearr_31167 = f__15998__auto__.call(null);
(statearr_31167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_31167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__))
);

return c__15997__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map