// Compiled by ClojureScript 0.0-2816 {:elide-asserts false}
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
var seq__30791_30799 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30792_30800 = null;
var count__30793_30801 = (0);
var i__30794_30802 = (0);
while(true){
if((i__30794_30802 < count__30793_30801)){
var k_30803 = cljs.core._nth.call(null,chunk__30792_30800,i__30794_30802);
e.setAttribute(cljs.core.name.call(null,k_30803),cljs.core.get.call(null,attrs,k_30803));

var G__30804 = seq__30791_30799;
var G__30805 = chunk__30792_30800;
var G__30806 = count__30793_30801;
var G__30807 = (i__30794_30802 + (1));
seq__30791_30799 = G__30804;
chunk__30792_30800 = G__30805;
count__30793_30801 = G__30806;
i__30794_30802 = G__30807;
continue;
} else {
var temp__4126__auto___30808 = cljs.core.seq.call(null,seq__30791_30799);
if(temp__4126__auto___30808){
var seq__30791_30809__$1 = temp__4126__auto___30808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30791_30809__$1)){
var c__14018__auto___30810 = cljs.core.chunk_first.call(null,seq__30791_30809__$1);
var G__30811 = cljs.core.chunk_rest.call(null,seq__30791_30809__$1);
var G__30812 = c__14018__auto___30810;
var G__30813 = cljs.core.count.call(null,c__14018__auto___30810);
var G__30814 = (0);
seq__30791_30799 = G__30811;
chunk__30792_30800 = G__30812;
count__30793_30801 = G__30813;
i__30794_30802 = G__30814;
continue;
} else {
var k_30815 = cljs.core.first.call(null,seq__30791_30809__$1);
e.setAttribute(cljs.core.name.call(null,k_30815),cljs.core.get.call(null,attrs,k_30815));

var G__30816 = cljs.core.next.call(null,seq__30791_30809__$1);
var G__30817 = null;
var G__30818 = (0);
var G__30819 = (0);
seq__30791_30799 = G__30816;
chunk__30792_30800 = G__30817;
count__30793_30801 = G__30818;
i__30794_30802 = G__30819;
continue;
}
} else {
}
}
break;
}

var seq__30795_30820 = cljs.core.seq.call(null,children);
var chunk__30796_30821 = null;
var count__30797_30822 = (0);
var i__30798_30823 = (0);
while(true){
if((i__30798_30823 < count__30797_30822)){
var ch_30824 = cljs.core._nth.call(null,chunk__30796_30821,i__30798_30823);
e.appendChild(ch_30824);

var G__30825 = seq__30795_30820;
var G__30826 = chunk__30796_30821;
var G__30827 = count__30797_30822;
var G__30828 = (i__30798_30823 + (1));
seq__30795_30820 = G__30825;
chunk__30796_30821 = G__30826;
count__30797_30822 = G__30827;
i__30798_30823 = G__30828;
continue;
} else {
var temp__4126__auto___30829 = cljs.core.seq.call(null,seq__30795_30820);
if(temp__4126__auto___30829){
var seq__30795_30830__$1 = temp__4126__auto___30829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30795_30830__$1)){
var c__14018__auto___30831 = cljs.core.chunk_first.call(null,seq__30795_30830__$1);
var G__30832 = cljs.core.chunk_rest.call(null,seq__30795_30830__$1);
var G__30833 = c__14018__auto___30831;
var G__30834 = cljs.core.count.call(null,c__14018__auto___30831);
var G__30835 = (0);
seq__30795_30820 = G__30832;
chunk__30796_30821 = G__30833;
count__30797_30822 = G__30834;
i__30798_30823 = G__30835;
continue;
} else {
var ch_30836 = cljs.core.first.call(null,seq__30795_30830__$1);
e.appendChild(ch_30836);

var G__30837 = cljs.core.next.call(null,seq__30795_30830__$1);
var G__30838 = null;
var G__30839 = (0);
var G__30840 = (0);
seq__30795_30820 = G__30837;
chunk__30796_30821 = G__30838;
count__30797_30822 = G__30839;
i__30798_30823 = G__30840;
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
var G__30841__i = 0, G__30841__a = new Array(arguments.length -  2);
while (G__30841__i < G__30841__a.length) {G__30841__a[G__30841__i] = arguments[G__30841__i + 2]; ++G__30841__i;}
  children = new cljs.core.IndexedSeq(G__30841__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__30842){
var t = cljs.core.first(arglist__30842);
arglist__30842 = cljs.core.next(arglist__30842);
var attrs = cljs.core.first(arglist__30842);
var children = cljs.core.rest(arglist__30842);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__14128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__14129__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__14130__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__14131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__14132__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__14128__auto__,prefer_table__14129__auto__,method_cache__14130__auto__,cached_hierarchy__14131__auto__,hierarchy__14132__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__14128__auto__,prefer_table__14129__auto__,method_cache__14130__auto__,cached_hierarchy__14131__auto__,hierarchy__14132__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__14132__auto__,method_table__14128__auto__,prefer_table__14129__auto__,method_cache__14130__auto__,cached_hierarchy__14131__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__30843,st_map){
var map__30847 = p__30843;
var map__30847__$1 = ((cljs.core.seq_QMARK_.call(null,map__30847))?cljs.core.apply.call(null,cljs.core.hash_map,map__30847):map__30847);
var container_el = cljs.core.get.call(null,map__30847__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30847,map__30847__$1,container_el){
return (function (p__30848){
var vec__30849 = p__30848;
var k = cljs.core.nth.call(null,vec__30849,(0),null);
var v = cljs.core.nth.call(null,vec__30849,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30847,map__30847__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__30850,dom_str){
var map__30852 = p__30850;
var map__30852__$1 = ((cljs.core.seq_QMARK_.call(null,map__30852))?cljs.core.apply.call(null,cljs.core.hash_map,map__30852):map__30852);
var c = map__30852__$1;
var content_area_el = cljs.core.get.call(null,map__30852__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__30853){
var map__30855 = p__30853;
var map__30855__$1 = ((cljs.core.seq_QMARK_.call(null,map__30855))?cljs.core.apply.call(null,cljs.core.hash_map,map__30855):map__30855);
var content_area_el = cljs.core.get.call(null,map__30855__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__){
return (function (state_30897){
var state_val_30898 = (state_30897[(1)]);
if((state_val_30898 === (2))){
var inst_30882 = (state_30897[(7)]);
var inst_30891 = (state_30897[(2)]);
var inst_30892 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30893 = ["auto"];
var inst_30894 = cljs.core.PersistentHashMap.fromArrays(inst_30892,inst_30893);
var inst_30895 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30882,inst_30894);
var state_30897__$1 = (function (){var statearr_30899 = state_30897;
(statearr_30899[(8)] = inst_30891);

return statearr_30899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30897__$1,inst_30895);
} else {
if((state_val_30898 === (1))){
var inst_30882 = (state_30897[(7)]);
var inst_30882__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30883 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30884 = ["10px","10px","100%","68px","1.0"];
var inst_30885 = cljs.core.PersistentHashMap.fromArrays(inst_30883,inst_30884);
var inst_30886 = cljs.core.merge.call(null,inst_30885,style);
var inst_30887 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30882__$1,inst_30886);
var inst_30888 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30882__$1,msg);
var inst_30889 = cljs.core.async.timeout.call(null,(300));
var state_30897__$1 = (function (){var statearr_30900 = state_30897;
(statearr_30900[(9)] = inst_30888);

(statearr_30900[(10)] = inst_30887);

(statearr_30900[(7)] = inst_30882__$1);

return statearr_30900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30897__$1,(2),inst_30889);
} else {
return null;
}
}
});})(c__15889__auto__))
;
return ((function (switch__15833__auto__,c__15889__auto__){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_30904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30904[(0)] = state_machine__15834__auto__);

(statearr_30904[(1)] = (1));

return statearr_30904;
});
var state_machine__15834__auto____1 = (function (state_30897){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_30897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e30905){if((e30905 instanceof Object)){
var ex__15837__auto__ = e30905;
var statearr_30906_30908 = state_30897;
(statearr_30906_30908[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30909 = state_30897;
state_30897 = G__30909;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_30897){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_30897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__))
})();
var state__15891__auto__ = (function (){var statearr_30907 = f__15890__auto__.call(null);
(statearr_30907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_30907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__))
);

return c__15889__auto__;
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
var vec__30911 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30911,(0),null);
var ln = cljs.core.nth.call(null,vec__30911,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__30914 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__30914,(0),null);
var file_line = cljs.core.nth.call(null,vec__30914,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30914,file_name,file_line){
return (function (p1__30912_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30912_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30914,file_name,file_line))
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
var map__30916 = figwheel.client.heads_up.ensure_container.call(null);
var map__30916__$1 = ((cljs.core.seq_QMARK_.call(null,map__30916))?cljs.core.apply.call(null,cljs.core.hash_map,map__30916):map__30916);
var content_area_el = cljs.core.get.call(null,map__30916__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__){
return (function (state_30963){
var state_val_30964 = (state_30963[(1)]);
if((state_val_30964 === (3))){
var inst_30946 = (state_30963[(7)]);
var inst_30960 = (state_30963[(2)]);
var inst_30961 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30946,"");
var state_30963__$1 = (function (){var statearr_30965 = state_30963;
(statearr_30965[(8)] = inst_30960);

return statearr_30965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30963__$1,inst_30961);
} else {
if((state_val_30964 === (2))){
var inst_30946 = (state_30963[(7)]);
var inst_30953 = (state_30963[(2)]);
var inst_30954 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30955 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30956 = cljs.core.PersistentHashMap.fromArrays(inst_30954,inst_30955);
var inst_30957 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30946,inst_30956);
var inst_30958 = cljs.core.async.timeout.call(null,(200));
var state_30963__$1 = (function (){var statearr_30966 = state_30963;
(statearr_30966[(9)] = inst_30957);

(statearr_30966[(10)] = inst_30953);

return statearr_30966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30963__$1,(3),inst_30958);
} else {
if((state_val_30964 === (1))){
var inst_30946 = (state_30963[(7)]);
var inst_30946__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30947 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30948 = ["0.0"];
var inst_30949 = cljs.core.PersistentHashMap.fromArrays(inst_30947,inst_30948);
var inst_30950 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30946__$1,inst_30949);
var inst_30951 = cljs.core.async.timeout.call(null,(300));
var state_30963__$1 = (function (){var statearr_30967 = state_30963;
(statearr_30967[(11)] = inst_30950);

(statearr_30967[(7)] = inst_30946__$1);

return statearr_30967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30963__$1,(2),inst_30951);
} else {
return null;
}
}
}
});})(c__15889__auto__))
;
return ((function (switch__15833__auto__,c__15889__auto__){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_30971 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30971[(0)] = state_machine__15834__auto__);

(statearr_30971[(1)] = (1));

return statearr_30971;
});
var state_machine__15834__auto____1 = (function (state_30963){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_30963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e30972){if((e30972 instanceof Object)){
var ex__15837__auto__ = e30972;
var statearr_30973_30975 = state_30963;
(statearr_30973_30975[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30976 = state_30963;
state_30963 = G__30976;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_30963){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_30963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__))
})();
var state__15891__auto__ = (function (){var statearr_30974 = f__15890__auto__.call(null);
(statearr_30974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_30974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__))
);

return c__15889__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__){
return (function (state_31008){
var state_val_31009 = (state_31008[(1)]);
if((state_val_31009 === (4))){
var inst_31006 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31008__$1,inst_31006);
} else {
if((state_val_31009 === (3))){
var inst_31003 = (state_31008[(2)]);
var inst_31004 = figwheel.client.heads_up.clear.call(null);
var state_31008__$1 = (function (){var statearr_31010 = state_31008;
(statearr_31010[(7)] = inst_31003);

return statearr_31010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(4),inst_31004);
} else {
if((state_val_31009 === (2))){
var inst_31000 = (state_31008[(2)]);
var inst_31001 = cljs.core.async.timeout.call(null,(400));
var state_31008__$1 = (function (){var statearr_31011 = state_31008;
(statearr_31011[(8)] = inst_31000);

return statearr_31011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(3),inst_31001);
} else {
if((state_val_31009 === (1))){
var inst_30998 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(2),inst_30998);
} else {
return null;
}
}
}
}
});})(c__15889__auto__))
;
return ((function (switch__15833__auto__,c__15889__auto__){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_31015 = [null,null,null,null,null,null,null,null,null];
(statearr_31015[(0)] = state_machine__15834__auto__);

(statearr_31015[(1)] = (1));

return statearr_31015;
});
var state_machine__15834__auto____1 = (function (state_31008){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_31008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e31016){if((e31016 instanceof Object)){
var ex__15837__auto__ = e31016;
var statearr_31017_31019 = state_31008;
(statearr_31017_31019[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31020 = state_31008;
state_31008 = G__31020;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_31008){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_31008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__))
})();
var state__15891__auto__ = (function (){var statearr_31018 = f__15890__auto__.call(null);
(statearr_31018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_31018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__))
);

return c__15889__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map