// Compiled by ClojureScript 0.0-2913 {:elide-asserts false}
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
var seq__31080_31088 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31081_31089 = null;
var count__31082_31090 = (0);
var i__31083_31091 = (0);
while(true){
if((i__31083_31091 < count__31082_31090)){
var k_31092 = cljs.core._nth.call(null,chunk__31081_31089,i__31083_31091);
e.setAttribute(cljs.core.name.call(null,k_31092),cljs.core.get.call(null,attrs,k_31092));

var G__31093 = seq__31080_31088;
var G__31094 = chunk__31081_31089;
var G__31095 = count__31082_31090;
var G__31096 = (i__31083_31091 + (1));
seq__31080_31088 = G__31093;
chunk__31081_31089 = G__31094;
count__31082_31090 = G__31095;
i__31083_31091 = G__31096;
continue;
} else {
var temp__4126__auto___31097 = cljs.core.seq.call(null,seq__31080_31088);
if(temp__4126__auto___31097){
var seq__31080_31098__$1 = temp__4126__auto___31097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31080_31098__$1)){
var c__14252__auto___31099 = cljs.core.chunk_first.call(null,seq__31080_31098__$1);
var G__31100 = cljs.core.chunk_rest.call(null,seq__31080_31098__$1);
var G__31101 = c__14252__auto___31099;
var G__31102 = cljs.core.count.call(null,c__14252__auto___31099);
var G__31103 = (0);
seq__31080_31088 = G__31100;
chunk__31081_31089 = G__31101;
count__31082_31090 = G__31102;
i__31083_31091 = G__31103;
continue;
} else {
var k_31104 = cljs.core.first.call(null,seq__31080_31098__$1);
e.setAttribute(cljs.core.name.call(null,k_31104),cljs.core.get.call(null,attrs,k_31104));

var G__31105 = cljs.core.next.call(null,seq__31080_31098__$1);
var G__31106 = null;
var G__31107 = (0);
var G__31108 = (0);
seq__31080_31088 = G__31105;
chunk__31081_31089 = G__31106;
count__31082_31090 = G__31107;
i__31083_31091 = G__31108;
continue;
}
} else {
}
}
break;
}

var seq__31084_31109 = cljs.core.seq.call(null,children);
var chunk__31085_31110 = null;
var count__31086_31111 = (0);
var i__31087_31112 = (0);
while(true){
if((i__31087_31112 < count__31086_31111)){
var ch_31113 = cljs.core._nth.call(null,chunk__31085_31110,i__31087_31112);
e.appendChild(ch_31113);

var G__31114 = seq__31084_31109;
var G__31115 = chunk__31085_31110;
var G__31116 = count__31086_31111;
var G__31117 = (i__31087_31112 + (1));
seq__31084_31109 = G__31114;
chunk__31085_31110 = G__31115;
count__31086_31111 = G__31116;
i__31087_31112 = G__31117;
continue;
} else {
var temp__4126__auto___31118 = cljs.core.seq.call(null,seq__31084_31109);
if(temp__4126__auto___31118){
var seq__31084_31119__$1 = temp__4126__auto___31118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31084_31119__$1)){
var c__14252__auto___31120 = cljs.core.chunk_first.call(null,seq__31084_31119__$1);
var G__31121 = cljs.core.chunk_rest.call(null,seq__31084_31119__$1);
var G__31122 = c__14252__auto___31120;
var G__31123 = cljs.core.count.call(null,c__14252__auto___31120);
var G__31124 = (0);
seq__31084_31109 = G__31121;
chunk__31085_31110 = G__31122;
count__31086_31111 = G__31123;
i__31087_31112 = G__31124;
continue;
} else {
var ch_31125 = cljs.core.first.call(null,seq__31084_31119__$1);
e.appendChild(ch_31125);

var G__31126 = cljs.core.next.call(null,seq__31084_31119__$1);
var G__31127 = null;
var G__31128 = (0);
var G__31129 = (0);
seq__31084_31109 = G__31126;
chunk__31085_31110 = G__31127;
count__31086_31111 = G__31128;
i__31087_31112 = G__31129;
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
var G__31130__i = 0, G__31130__a = new Array(arguments.length -  2);
while (G__31130__i < G__31130__a.length) {G__31130__a[G__31130__i] = arguments[G__31130__i + 2]; ++G__31130__i;}
  children = new cljs.core.IndexedSeq(G__31130__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__31131){
var t = cljs.core.first(arglist__31131);
arglist__31131 = cljs.core.next(arglist__31131);
var attrs = cljs.core.first(arglist__31131);
var children = cljs.core.rest(arglist__31131);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__14362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14366__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__14362__auto__,prefer_table__14363__auto__,method_cache__14364__auto__,cached_hierarchy__14365__auto__,hierarchy__14366__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__14362__auto__,prefer_table__14363__auto__,method_cache__14364__auto__,cached_hierarchy__14365__auto__,hierarchy__14366__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14366__auto__,method_table__14362__auto__,prefer_table__14363__auto__,method_cache__14364__auto__,cached_hierarchy__14365__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__31132,st_map){
var map__31136 = p__31132;
var map__31136__$1 = ((cljs.core.seq_QMARK_.call(null,map__31136))?cljs.core.apply.call(null,cljs.core.hash_map,map__31136):map__31136);
var container_el = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31136,map__31136__$1,container_el){
return (function (p__31137){
var vec__31138 = p__31137;
var k = cljs.core.nth.call(null,vec__31138,(0),null);
var v = cljs.core.nth.call(null,vec__31138,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31136,map__31136__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__31139,dom_str){
var map__31141 = p__31139;
var map__31141__$1 = ((cljs.core.seq_QMARK_.call(null,map__31141))?cljs.core.apply.call(null,cljs.core.hash_map,map__31141):map__31141);
var c = map__31141__$1;
var content_area_el = cljs.core.get.call(null,map__31141__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__31142){
var map__31144 = p__31142;
var map__31144__$1 = ((cljs.core.seq_QMARK_.call(null,map__31144))?cljs.core.apply.call(null,cljs.core.hash_map,map__31144):map__31144);
var content_area_el = cljs.core.get.call(null,map__31144__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__){
return (function (state_31186){
var state_val_31187 = (state_31186[(1)]);
if((state_val_31187 === (2))){
var inst_31171 = (state_31186[(7)]);
var inst_31180 = (state_31186[(2)]);
var inst_31181 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31182 = ["auto"];
var inst_31183 = cljs.core.PersistentHashMap.fromArrays(inst_31181,inst_31182);
var inst_31184 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31171,inst_31183);
var state_31186__$1 = (function (){var statearr_31188 = state_31186;
(statearr_31188[(8)] = inst_31180);

return statearr_31188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31186__$1,inst_31184);
} else {
if((state_val_31187 === (1))){
var inst_31171 = (state_31186[(7)]);
var inst_31171__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31172 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31173 = ["10px","10px","100%","68px","1.0"];
var inst_31174 = cljs.core.PersistentHashMap.fromArrays(inst_31172,inst_31173);
var inst_31175 = cljs.core.merge.call(null,inst_31174,style);
var inst_31176 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31171__$1,inst_31175);
var inst_31177 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31171__$1,msg);
var inst_31178 = cljs.core.async.timeout.call(null,(300));
var state_31186__$1 = (function (){var statearr_31189 = state_31186;
(statearr_31189[(7)] = inst_31171__$1);

(statearr_31189[(9)] = inst_31177);

(statearr_31189[(10)] = inst_31176);

return statearr_31189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31186__$1,(2),inst_31178);
} else {
return null;
}
}
});})(c__16133__auto__))
;
return ((function (switch__16077__auto__,c__16133__auto__){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_31193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31193[(0)] = state_machine__16078__auto__);

(statearr_31193[(1)] = (1));

return statearr_31193;
});
var state_machine__16078__auto____1 = (function (state_31186){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_31186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e31194){if((e31194 instanceof Object)){
var ex__16081__auto__ = e31194;
var statearr_31195_31197 = state_31186;
(statearr_31195_31197[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31198 = state_31186;
state_31186 = G__31198;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_31186){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_31186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__))
})();
var state__16135__auto__ = (function (){var statearr_31196 = f__16134__auto__.call(null);
(statearr_31196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_31196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__))
);

return c__16133__auto__;
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
var vec__31200 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__31200,(0),null);
var ln = cljs.core.nth.call(null,vec__31200,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__31203 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__31203,(0),null);
var file_line = cljs.core.nth.call(null,vec__31203,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31203,file_name,file_line){
return (function (p1__31201_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31201_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31203,file_name,file_line))
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
var map__31205 = figwheel.client.heads_up.ensure_container.call(null);
var map__31205__$1 = ((cljs.core.seq_QMARK_.call(null,map__31205))?cljs.core.apply.call(null,cljs.core.hash_map,map__31205):map__31205);
var content_area_el = cljs.core.get.call(null,map__31205__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__){
return (function (state_31252){
var state_val_31253 = (state_31252[(1)]);
if((state_val_31253 === (3))){
var inst_31235 = (state_31252[(7)]);
var inst_31249 = (state_31252[(2)]);
var inst_31250 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31235,"");
var state_31252__$1 = (function (){var statearr_31254 = state_31252;
(statearr_31254[(8)] = inst_31249);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31252__$1,inst_31250);
} else {
if((state_val_31253 === (2))){
var inst_31235 = (state_31252[(7)]);
var inst_31242 = (state_31252[(2)]);
var inst_31243 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31244 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31245 = cljs.core.PersistentHashMap.fromArrays(inst_31243,inst_31244);
var inst_31246 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31235,inst_31245);
var inst_31247 = cljs.core.async.timeout.call(null,(200));
var state_31252__$1 = (function (){var statearr_31255 = state_31252;
(statearr_31255[(9)] = inst_31246);

(statearr_31255[(10)] = inst_31242);

return statearr_31255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31252__$1,(3),inst_31247);
} else {
if((state_val_31253 === (1))){
var inst_31235 = (state_31252[(7)]);
var inst_31235__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31236 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31237 = ["0.0"];
var inst_31238 = cljs.core.PersistentHashMap.fromArrays(inst_31236,inst_31237);
var inst_31239 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31235__$1,inst_31238);
var inst_31240 = cljs.core.async.timeout.call(null,(300));
var state_31252__$1 = (function (){var statearr_31256 = state_31252;
(statearr_31256[(7)] = inst_31235__$1);

(statearr_31256[(11)] = inst_31239);

return statearr_31256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31252__$1,(2),inst_31240);
} else {
return null;
}
}
}
});})(c__16133__auto__))
;
return ((function (switch__16077__auto__,c__16133__auto__){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_31260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31260[(0)] = state_machine__16078__auto__);

(statearr_31260[(1)] = (1));

return statearr_31260;
});
var state_machine__16078__auto____1 = (function (state_31252){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_31252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e31261){if((e31261 instanceof Object)){
var ex__16081__auto__ = e31261;
var statearr_31262_31264 = state_31252;
(statearr_31262_31264[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31265 = state_31252;
state_31252 = G__31265;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_31252){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_31252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__))
})();
var state__16135__auto__ = (function (){var statearr_31263 = f__16134__auto__.call(null);
(statearr_31263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_31263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__))
);

return c__16133__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__){
return (function (state_31297){
var state_val_31298 = (state_31297[(1)]);
if((state_val_31298 === (4))){
var inst_31295 = (state_31297[(2)]);
var state_31297__$1 = state_31297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31297__$1,inst_31295);
} else {
if((state_val_31298 === (3))){
var inst_31292 = (state_31297[(2)]);
var inst_31293 = figwheel.client.heads_up.clear.call(null);
var state_31297__$1 = (function (){var statearr_31299 = state_31297;
(statearr_31299[(7)] = inst_31292);

return statearr_31299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31297__$1,(4),inst_31293);
} else {
if((state_val_31298 === (2))){
var inst_31289 = (state_31297[(2)]);
var inst_31290 = cljs.core.async.timeout.call(null,(400));
var state_31297__$1 = (function (){var statearr_31300 = state_31297;
(statearr_31300[(8)] = inst_31289);

return statearr_31300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31297__$1,(3),inst_31290);
} else {
if((state_val_31298 === (1))){
var inst_31287 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31297__$1 = state_31297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31297__$1,(2),inst_31287);
} else {
return null;
}
}
}
}
});})(c__16133__auto__))
;
return ((function (switch__16077__auto__,c__16133__auto__){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_31304 = [null,null,null,null,null,null,null,null,null];
(statearr_31304[(0)] = state_machine__16078__auto__);

(statearr_31304[(1)] = (1));

return statearr_31304;
});
var state_machine__16078__auto____1 = (function (state_31297){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_31297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e31305){if((e31305 instanceof Object)){
var ex__16081__auto__ = e31305;
var statearr_31306_31308 = state_31297;
(statearr_31306_31308[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31309 = state_31297;
state_31297 = G__31309;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_31297){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_31297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__))
})();
var state__16135__auto__ = (function (){var statearr_31307 = f__16134__auto__.call(null);
(statearr_31307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_31307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__))
);

return c__16133__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map