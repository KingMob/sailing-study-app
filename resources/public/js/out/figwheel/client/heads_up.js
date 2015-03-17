// Compiled by ClojureScript 0.0-3123 {:elide-asserts false}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28716_28724 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28717_28725 = null;
var count__28718_28726 = (0);
var i__28719_28727 = (0);
while(true){
if((i__28719_28727 < count__28718_28726)){
var k_28728 = cljs.core._nth.call(null,chunk__28717_28725,i__28719_28727);
e.setAttribute(cljs.core.name.call(null,k_28728),cljs.core.get.call(null,attrs,k_28728));

var G__28729 = seq__28716_28724;
var G__28730 = chunk__28717_28725;
var G__28731 = count__28718_28726;
var G__28732 = (i__28719_28727 + (1));
seq__28716_28724 = G__28729;
chunk__28717_28725 = G__28730;
count__28718_28726 = G__28731;
i__28719_28727 = G__28732;
continue;
} else {
var temp__4126__auto___28733 = cljs.core.seq.call(null,seq__28716_28724);
if(temp__4126__auto___28733){
var seq__28716_28734__$1 = temp__4126__auto___28733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28716_28734__$1)){
var c__18431__auto___28735 = cljs.core.chunk_first.call(null,seq__28716_28734__$1);
var G__28736 = cljs.core.chunk_rest.call(null,seq__28716_28734__$1);
var G__28737 = c__18431__auto___28735;
var G__28738 = cljs.core.count.call(null,c__18431__auto___28735);
var G__28739 = (0);
seq__28716_28724 = G__28736;
chunk__28717_28725 = G__28737;
count__28718_28726 = G__28738;
i__28719_28727 = G__28739;
continue;
} else {
var k_28740 = cljs.core.first.call(null,seq__28716_28734__$1);
e.setAttribute(cljs.core.name.call(null,k_28740),cljs.core.get.call(null,attrs,k_28740));

var G__28741 = cljs.core.next.call(null,seq__28716_28734__$1);
var G__28742 = null;
var G__28743 = (0);
var G__28744 = (0);
seq__28716_28724 = G__28741;
chunk__28717_28725 = G__28742;
count__28718_28726 = G__28743;
i__28719_28727 = G__28744;
continue;
}
} else {
}
}
break;
}

var seq__28720_28745 = cljs.core.seq.call(null,children);
var chunk__28721_28746 = null;
var count__28722_28747 = (0);
var i__28723_28748 = (0);
while(true){
if((i__28723_28748 < count__28722_28747)){
var ch_28749 = cljs.core._nth.call(null,chunk__28721_28746,i__28723_28748);
e.appendChild(ch_28749);

var G__28750 = seq__28720_28745;
var G__28751 = chunk__28721_28746;
var G__28752 = count__28722_28747;
var G__28753 = (i__28723_28748 + (1));
seq__28720_28745 = G__28750;
chunk__28721_28746 = G__28751;
count__28722_28747 = G__28752;
i__28723_28748 = G__28753;
continue;
} else {
var temp__4126__auto___28754 = cljs.core.seq.call(null,seq__28720_28745);
if(temp__4126__auto___28754){
var seq__28720_28755__$1 = temp__4126__auto___28754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28720_28755__$1)){
var c__18431__auto___28756 = cljs.core.chunk_first.call(null,seq__28720_28755__$1);
var G__28757 = cljs.core.chunk_rest.call(null,seq__28720_28755__$1);
var G__28758 = c__18431__auto___28756;
var G__28759 = cljs.core.count.call(null,c__18431__auto___28756);
var G__28760 = (0);
seq__28720_28745 = G__28757;
chunk__28721_28746 = G__28758;
count__28722_28747 = G__28759;
i__28723_28748 = G__28760;
continue;
} else {
var ch_28761 = cljs.core.first.call(null,seq__28720_28755__$1);
e.appendChild(ch_28761);

var G__28762 = cljs.core.next.call(null,seq__28720_28755__$1);
var G__28763 = null;
var G__28764 = (0);
var G__28765 = (0);
seq__28720_28745 = G__28762;
chunk__28721_28746 = G__28763;
count__28722_28747 = G__28764;
i__28723_28748 = G__28765;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__28766__i = 0, G__28766__a = new Array(arguments.length -  2);
while (G__28766__i < G__28766__a.length) {G__28766__a[G__28766__i] = arguments[G__28766__i + 2]; ++G__28766__i;}
  children = new cljs.core.IndexedSeq(G__28766__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__28767){
var t = cljs.core.first(arglist__28767);
arglist__28767 = cljs.core.next(arglist__28767);
var attrs = cljs.core.first(arglist__28767);
var children = cljs.core.rest(arglist__28767);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18545__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18541__auto__,prefer_table__18542__auto__,method_cache__18543__auto__,cached_hierarchy__18544__auto__,hierarchy__18545__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18541__auto__,prefer_table__18542__auto__,method_cache__18543__auto__,cached_hierarchy__18544__auto__,hierarchy__18545__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18545__auto__,method_table__18541__auto__,prefer_table__18542__auto__,method_cache__18543__auto__,cached_hierarchy__18544__auto__));
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
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28768 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28768.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28768.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28768.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28768);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28769,st_map){
var map__28773 = p__28769;
var map__28773__$1 = ((cljs.core.seq_QMARK_.call(null,map__28773))?cljs.core.apply.call(null,cljs.core.hash_map,map__28773):map__28773);
var container_el = cljs.core.get.call(null,map__28773__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28773,map__28773__$1,container_el){
return (function (p__28774){
var vec__28775 = p__28774;
var k = cljs.core.nth.call(null,vec__28775,(0),null);
var v = cljs.core.nth.call(null,vec__28775,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28773,map__28773__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28776,dom_str){
var map__28778 = p__28776;
var map__28778__$1 = ((cljs.core.seq_QMARK_.call(null,map__28778))?cljs.core.apply.call(null,cljs.core.hash_map,map__28778):map__28778);
var c = map__28778__$1;
var content_area_el = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28779){
var map__28781 = p__28779;
var map__28781__$1 = ((cljs.core.seq_QMARK_.call(null,map__28781))?cljs.core.apply.call(null,cljs.core.hash_map,map__28781):map__28781);
var content_area_el = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__){
return (function (state_28823){
var state_val_28824 = (state_28823[(1)]);
if((state_val_28824 === (2))){
var inst_28808 = (state_28823[(7)]);
var inst_28817 = (state_28823[(2)]);
var inst_28818 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28819 = ["auto"];
var inst_28820 = cljs.core.PersistentHashMap.fromArrays(inst_28818,inst_28819);
var inst_28821 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28808,inst_28820);
var state_28823__$1 = (function (){var statearr_28825 = state_28823;
(statearr_28825[(8)] = inst_28817);

return statearr_28825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28823__$1,inst_28821);
} else {
if((state_val_28824 === (1))){
var inst_28808 = (state_28823[(7)]);
var inst_28808__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28809 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28810 = ["10px","10px","100%","68px","1.0"];
var inst_28811 = cljs.core.PersistentHashMap.fromArrays(inst_28809,inst_28810);
var inst_28812 = cljs.core.merge.call(null,inst_28811,style);
var inst_28813 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28808__$1,inst_28812);
var inst_28814 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28808__$1,msg);
var inst_28815 = cljs.core.async.timeout.call(null,(300));
var state_28823__$1 = (function (){var statearr_28826 = state_28823;
(statearr_28826[(9)] = inst_28813);

(statearr_28826[(10)] = inst_28814);

(statearr_28826[(7)] = inst_28808__$1);

return statearr_28826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28823__$1,(2),inst_28815);
} else {
return null;
}
}
});})(c__19828__auto__))
;
return ((function (switch__19772__auto__,c__19828__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto____0 = (function (){
var statearr_28830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28830[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto__);

(statearr_28830[(1)] = (1));

return statearr_28830;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto____1 = (function (state_28823){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_28823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e28831){if((e28831 instanceof Object)){
var ex__19776__auto__ = e28831;
var statearr_28832_28834 = state_28823;
(statearr_28832_28834[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28835 = state_28823;
state_28823 = G__28835;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto__ = function(state_28823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto____1.call(this,state_28823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__))
})();
var state__19830__auto__ = (function (){var statearr_28833 = f__19829__auto__.call(null);
(statearr_28833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_28833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__))
);

return c__19828__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__28837 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__28837,(0),null);
var ln = cljs.core.nth.call(null,vec__28837,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__28840 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__28840,(0),null);
var file_line = cljs.core.nth.call(null,vec__28840,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28840,file_name,file_line){
return (function (p1__28838_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28838_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28840,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28842 = figwheel.client.heads_up.ensure_container.call(null);
var map__28842__$1 = ((cljs.core.seq_QMARK_.call(null,map__28842))?cljs.core.apply.call(null,cljs.core.hash_map,map__28842):map__28842);
var content_area_el = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__){
return (function (state_28889){
var state_val_28890 = (state_28889[(1)]);
if((state_val_28890 === (3))){
var inst_28872 = (state_28889[(7)]);
var inst_28886 = (state_28889[(2)]);
var inst_28887 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28872,"");
var state_28889__$1 = (function (){var statearr_28891 = state_28889;
(statearr_28891[(8)] = inst_28886);

return statearr_28891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28889__$1,inst_28887);
} else {
if((state_val_28890 === (2))){
var inst_28872 = (state_28889[(7)]);
var inst_28879 = (state_28889[(2)]);
var inst_28880 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28881 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28882 = cljs.core.PersistentHashMap.fromArrays(inst_28880,inst_28881);
var inst_28883 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28872,inst_28882);
var inst_28884 = cljs.core.async.timeout.call(null,(200));
var state_28889__$1 = (function (){var statearr_28892 = state_28889;
(statearr_28892[(9)] = inst_28883);

(statearr_28892[(10)] = inst_28879);

return statearr_28892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(3),inst_28884);
} else {
if((state_val_28890 === (1))){
var inst_28872 = (state_28889[(7)]);
var inst_28872__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28873 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28874 = ["0.0"];
var inst_28875 = cljs.core.PersistentHashMap.fromArrays(inst_28873,inst_28874);
var inst_28876 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28872__$1,inst_28875);
var inst_28877 = cljs.core.async.timeout.call(null,(300));
var state_28889__$1 = (function (){var statearr_28893 = state_28889;
(statearr_28893[(7)] = inst_28872__$1);

(statearr_28893[(11)] = inst_28876);

return statearr_28893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(2),inst_28877);
} else {
return null;
}
}
}
});})(c__19828__auto__))
;
return ((function (switch__19772__auto__,c__19828__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19773__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19773__auto____0 = (function (){
var statearr_28897 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28897[(0)] = figwheel$client$heads_up$clear_$_state_machine__19773__auto__);

(statearr_28897[(1)] = (1));

return statearr_28897;
});
var figwheel$client$heads_up$clear_$_state_machine__19773__auto____1 = (function (state_28889){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_28889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e28898){if((e28898 instanceof Object)){
var ex__19776__auto__ = e28898;
var statearr_28899_28901 = state_28889;
(statearr_28899_28901[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28902 = state_28889;
state_28889 = G__28902;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19773__auto__ = function(state_28889){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19773__auto____1.call(this,state_28889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19773__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19773__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__))
})();
var state__19830__auto__ = (function (){var statearr_28900 = f__19829__auto__.call(null);
(statearr_28900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_28900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__))
);

return c__19828__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19828__auto__){
return (function (){
var f__19829__auto__ = (function (){var switch__19772__auto__ = ((function (c__19828__auto__){
return (function (state_28934){
var state_val_28935 = (state_28934[(1)]);
if((state_val_28935 === (4))){
var inst_28932 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28934__$1,inst_28932);
} else {
if((state_val_28935 === (3))){
var inst_28929 = (state_28934[(2)]);
var inst_28930 = figwheel.client.heads_up.clear.call(null);
var state_28934__$1 = (function (){var statearr_28936 = state_28934;
(statearr_28936[(7)] = inst_28929);

return statearr_28936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28934__$1,(4),inst_28930);
} else {
if((state_val_28935 === (2))){
var inst_28926 = (state_28934[(2)]);
var inst_28927 = cljs.core.async.timeout.call(null,(400));
var state_28934__$1 = (function (){var statearr_28937 = state_28934;
(statearr_28937[(8)] = inst_28926);

return statearr_28937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28934__$1,(3),inst_28927);
} else {
if((state_val_28935 === (1))){
var inst_28924 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28934__$1,(2),inst_28924);
} else {
return null;
}
}
}
}
});})(c__19828__auto__))
;
return ((function (switch__19772__auto__,c__19828__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto____0 = (function (){
var statearr_28941 = [null,null,null,null,null,null,null,null,null];
(statearr_28941[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto__);

(statearr_28941[(1)] = (1));

return statearr_28941;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto____1 = (function (state_28934){
while(true){
var ret_value__19774__auto__ = (function (){try{while(true){
var result__19775__auto__ = switch__19772__auto__.call(null,state_28934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19775__auto__;
}
break;
}
}catch (e28942){if((e28942 instanceof Object)){
var ex__19776__auto__ = e28942;
var statearr_28943_28945 = state_28934;
(statearr_28943_28945[(5)] = ex__19776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28946 = state_28934;
state_28934 = G__28946;
continue;
} else {
return ret_value__19774__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto__ = function(state_28934){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto____1.call(this,state_28934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19773__auto__;
})()
;})(switch__19772__auto__,c__19828__auto__))
})();
var state__19830__auto__ = (function (){var statearr_28944 = f__19829__auto__.call(null);
(statearr_28944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19828__auto__);

return statearr_28944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19830__auto__);
});})(c__19828__auto__))
);

return c__19828__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map