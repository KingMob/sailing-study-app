// Compiled by ClojureScript 0.0-2760 {:elide-asserts false}
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
var seq__30228_30236 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30229_30237 = null;
var count__30230_30238 = (0);
var i__30231_30239 = (0);
while(true){
if((i__30231_30239 < count__30230_30238)){
var k_30240 = cljs.core._nth.call(null,chunk__30229_30237,i__30231_30239);
e.setAttribute(cljs.core.name.call(null,k_30240),cljs.core.get.call(null,attrs,k_30240));

var G__30241 = seq__30228_30236;
var G__30242 = chunk__30229_30237;
var G__30243 = count__30230_30238;
var G__30244 = (i__30231_30239 + (1));
seq__30228_30236 = G__30241;
chunk__30229_30237 = G__30242;
count__30230_30238 = G__30243;
i__30231_30239 = G__30244;
continue;
} else {
var temp__4126__auto___30245 = cljs.core.seq.call(null,seq__30228_30236);
if(temp__4126__auto___30245){
var seq__30228_30246__$1 = temp__4126__auto___30245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30228_30246__$1)){
var c__13963__auto___30247 = cljs.core.chunk_first.call(null,seq__30228_30246__$1);
var G__30248 = cljs.core.chunk_rest.call(null,seq__30228_30246__$1);
var G__30249 = c__13963__auto___30247;
var G__30250 = cljs.core.count.call(null,c__13963__auto___30247);
var G__30251 = (0);
seq__30228_30236 = G__30248;
chunk__30229_30237 = G__30249;
count__30230_30238 = G__30250;
i__30231_30239 = G__30251;
continue;
} else {
var k_30252 = cljs.core.first.call(null,seq__30228_30246__$1);
e.setAttribute(cljs.core.name.call(null,k_30252),cljs.core.get.call(null,attrs,k_30252));

var G__30253 = cljs.core.next.call(null,seq__30228_30246__$1);
var G__30254 = null;
var G__30255 = (0);
var G__30256 = (0);
seq__30228_30236 = G__30253;
chunk__30229_30237 = G__30254;
count__30230_30238 = G__30255;
i__30231_30239 = G__30256;
continue;
}
} else {
}
}
break;
}

var seq__30232_30257 = cljs.core.seq.call(null,children);
var chunk__30233_30258 = null;
var count__30234_30259 = (0);
var i__30235_30260 = (0);
while(true){
if((i__30235_30260 < count__30234_30259)){
var ch_30261 = cljs.core._nth.call(null,chunk__30233_30258,i__30235_30260);
e.appendChild(ch_30261);

var G__30262 = seq__30232_30257;
var G__30263 = chunk__30233_30258;
var G__30264 = count__30234_30259;
var G__30265 = (i__30235_30260 + (1));
seq__30232_30257 = G__30262;
chunk__30233_30258 = G__30263;
count__30234_30259 = G__30264;
i__30235_30260 = G__30265;
continue;
} else {
var temp__4126__auto___30266 = cljs.core.seq.call(null,seq__30232_30257);
if(temp__4126__auto___30266){
var seq__30232_30267__$1 = temp__4126__auto___30266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30232_30267__$1)){
var c__13963__auto___30268 = cljs.core.chunk_first.call(null,seq__30232_30267__$1);
var G__30269 = cljs.core.chunk_rest.call(null,seq__30232_30267__$1);
var G__30270 = c__13963__auto___30268;
var G__30271 = cljs.core.count.call(null,c__13963__auto___30268);
var G__30272 = (0);
seq__30232_30257 = G__30269;
chunk__30233_30258 = G__30270;
count__30234_30259 = G__30271;
i__30235_30260 = G__30272;
continue;
} else {
var ch_30273 = cljs.core.first.call(null,seq__30232_30267__$1);
e.appendChild(ch_30273);

var G__30274 = cljs.core.next.call(null,seq__30232_30267__$1);
var G__30275 = null;
var G__30276 = (0);
var G__30277 = (0);
seq__30232_30257 = G__30274;
chunk__30233_30258 = G__30275;
count__30234_30259 = G__30276;
i__30235_30260 = G__30277;
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
var G__30278__i = 0, G__30278__a = new Array(arguments.length -  2);
while (G__30278__i < G__30278__a.length) {G__30278__a[G__30278__i] = arguments[G__30278__i + 2]; ++G__30278__i;}
  children = new cljs.core.IndexedSeq(G__30278__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__30279){
var t = cljs.core.first(arglist__30279);
arglist__30279 = cljs.core.next(arglist__30279);
var attrs = cljs.core.first(arglist__30279);
var children = cljs.core.rest(arglist__30279);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__14073__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14074__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14075__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14076__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14077__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__14073__auto__,prefer_table__14074__auto__,method_cache__14075__auto__,cached_hierarchy__14076__auto__,hierarchy__14077__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__14073__auto__,prefer_table__14074__auto__,method_cache__14075__auto__,cached_hierarchy__14076__auto__,hierarchy__14077__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14077__auto__,method_table__14073__auto__,prefer_table__14074__auto__,method_cache__14075__auto__,cached_hierarchy__14076__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__30280,st_map){
var map__30284 = p__30280;
var map__30284__$1 = ((cljs.core.seq_QMARK_.call(null,map__30284))?cljs.core.apply.call(null,cljs.core.hash_map,map__30284):map__30284);
var container_el = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30284,map__30284__$1,container_el){
return (function (p__30285){
var vec__30286 = p__30285;
var k = cljs.core.nth.call(null,vec__30286,(0),null);
var v = cljs.core.nth.call(null,vec__30286,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30284,map__30284__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__30287,dom_str){
var map__30289 = p__30287;
var map__30289__$1 = ((cljs.core.seq_QMARK_.call(null,map__30289))?cljs.core.apply.call(null,cljs.core.hash_map,map__30289):map__30289);
var c = map__30289__$1;
var content_area_el = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__30290){
var map__30292 = p__30290;
var map__30292__$1 = ((cljs.core.seq_QMARK_.call(null,map__30292))?cljs.core.apply.call(null,cljs.core.hash_map,map__30292):map__30292);
var content_area_el = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__){
return (function (state_30334){
var state_val_30335 = (state_30334[(1)]);
if((state_val_30335 === (2))){
var inst_30319 = (state_30334[(7)]);
var inst_30328 = (state_30334[(2)]);
var inst_30329 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30330 = ["auto"];
var inst_30331 = cljs.core.PersistentHashMap.fromArrays(inst_30329,inst_30330);
var inst_30332 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30319,inst_30331);
var state_30334__$1 = (function (){var statearr_30336 = state_30334;
(statearr_30336[(8)] = inst_30328);

return statearr_30336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30334__$1,inst_30332);
} else {
if((state_val_30335 === (1))){
var inst_30319 = (state_30334[(7)]);
var inst_30319__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30320 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30321 = ["10px","10px","100%","68px","1.0"];
var inst_30322 = cljs.core.PersistentHashMap.fromArrays(inst_30320,inst_30321);
var inst_30323 = cljs.core.merge.call(null,inst_30322,style);
var inst_30324 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30319__$1,inst_30323);
var inst_30325 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30319__$1,msg);
var inst_30326 = cljs.core.async.timeout.call(null,(300));
var state_30334__$1 = (function (){var statearr_30337 = state_30334;
(statearr_30337[(9)] = inst_30325);

(statearr_30337[(10)] = inst_30324);

(statearr_30337[(7)] = inst_30319__$1);

return statearr_30337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30334__$1,(2),inst_30326);
} else {
return null;
}
}
});})(c__15819__auto__))
;
return ((function (switch__15763__auto__,c__15819__auto__){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_30341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30341[(0)] = state_machine__15764__auto__);

(statearr_30341[(1)] = (1));

return statearr_30341;
});
var state_machine__15764__auto____1 = (function (state_30334){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_30334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e30342){if((e30342 instanceof Object)){
var ex__15767__auto__ = e30342;
var statearr_30343_30345 = state_30334;
(statearr_30343_30345[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30346 = state_30334;
state_30334 = G__30346;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_30334){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_30334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_30344 = f__15820__auto__.call(null);
(statearr_30344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_30344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__))
);

return c__15819__auto__;
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
var vec__30348 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30348,(0),null);
var ln = cljs.core.nth.call(null,vec__30348,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__30351 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__30351,(0),null);
var file_line = cljs.core.nth.call(null,vec__30351,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30351,file_name,file_line){
return (function (p1__30349_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30349_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30351,file_name,file_line))
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
var map__30353 = figwheel.client.heads_up.ensure_container.call(null);
var map__30353__$1 = ((cljs.core.seq_QMARK_.call(null,map__30353))?cljs.core.apply.call(null,cljs.core.hash_map,map__30353):map__30353);
var content_area_el = cljs.core.get.call(null,map__30353__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__){
return (function (state_30400){
var state_val_30401 = (state_30400[(1)]);
if((state_val_30401 === (3))){
var inst_30383 = (state_30400[(7)]);
var inst_30397 = (state_30400[(2)]);
var inst_30398 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30383,"");
var state_30400__$1 = (function (){var statearr_30402 = state_30400;
(statearr_30402[(8)] = inst_30397);

return statearr_30402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30400__$1,inst_30398);
} else {
if((state_val_30401 === (2))){
var inst_30383 = (state_30400[(7)]);
var inst_30390 = (state_30400[(2)]);
var inst_30391 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30392 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30393 = cljs.core.PersistentHashMap.fromArrays(inst_30391,inst_30392);
var inst_30394 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30383,inst_30393);
var inst_30395 = cljs.core.async.timeout.call(null,(200));
var state_30400__$1 = (function (){var statearr_30403 = state_30400;
(statearr_30403[(9)] = inst_30394);

(statearr_30403[(10)] = inst_30390);

return statearr_30403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30400__$1,(3),inst_30395);
} else {
if((state_val_30401 === (1))){
var inst_30383 = (state_30400[(7)]);
var inst_30383__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30384 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30385 = ["0.0"];
var inst_30386 = cljs.core.PersistentHashMap.fromArrays(inst_30384,inst_30385);
var inst_30387 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30383__$1,inst_30386);
var inst_30388 = cljs.core.async.timeout.call(null,(300));
var state_30400__$1 = (function (){var statearr_30404 = state_30400;
(statearr_30404[(11)] = inst_30387);

(statearr_30404[(7)] = inst_30383__$1);

return statearr_30404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30400__$1,(2),inst_30388);
} else {
return null;
}
}
}
});})(c__15819__auto__))
;
return ((function (switch__15763__auto__,c__15819__auto__){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_30408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30408[(0)] = state_machine__15764__auto__);

(statearr_30408[(1)] = (1));

return statearr_30408;
});
var state_machine__15764__auto____1 = (function (state_30400){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_30400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e30409){if((e30409 instanceof Object)){
var ex__15767__auto__ = e30409;
var statearr_30410_30412 = state_30400;
(statearr_30410_30412[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30413 = state_30400;
state_30400 = G__30413;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_30400){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_30400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_30411 = f__15820__auto__.call(null);
(statearr_30411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_30411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__))
);

return c__15819__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__){
return (function (state_30445){
var state_val_30446 = (state_30445[(1)]);
if((state_val_30446 === (4))){
var inst_30443 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30445__$1,inst_30443);
} else {
if((state_val_30446 === (3))){
var inst_30440 = (state_30445[(2)]);
var inst_30441 = figwheel.client.heads_up.clear.call(null);
var state_30445__$1 = (function (){var statearr_30447 = state_30445;
(statearr_30447[(7)] = inst_30440);

return statearr_30447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30445__$1,(4),inst_30441);
} else {
if((state_val_30446 === (2))){
var inst_30437 = (state_30445[(2)]);
var inst_30438 = cljs.core.async.timeout.call(null,(400));
var state_30445__$1 = (function (){var statearr_30448 = state_30445;
(statearr_30448[(8)] = inst_30437);

return statearr_30448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30445__$1,(3),inst_30438);
} else {
if((state_val_30446 === (1))){
var inst_30435 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30445__$1,(2),inst_30435);
} else {
return null;
}
}
}
}
});})(c__15819__auto__))
;
return ((function (switch__15763__auto__,c__15819__auto__){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_30452 = [null,null,null,null,null,null,null,null,null];
(statearr_30452[(0)] = state_machine__15764__auto__);

(statearr_30452[(1)] = (1));

return statearr_30452;
});
var state_machine__15764__auto____1 = (function (state_30445){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_30445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e30453){if((e30453 instanceof Object)){
var ex__15767__auto__ = e30453;
var statearr_30454_30456 = state_30445;
(statearr_30454_30456[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30457 = state_30445;
state_30445 = G__30457;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_30445){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_30445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_30455 = f__15820__auto__.call(null);
(statearr_30455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_30455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__))
);

return c__15819__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map