// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
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
var seq__28653_28661 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28654_28662 = null;
var count__28655_28663 = (0);
var i__28656_28664 = (0);
while(true){
if((i__28656_28664 < count__28655_28663)){
var k_28665 = cljs.core._nth.call(null,chunk__28654_28662,i__28656_28664);
e.setAttribute(cljs.core.name.call(null,k_28665),cljs.core.get.call(null,attrs,k_28665));

var G__28666 = seq__28653_28661;
var G__28667 = chunk__28654_28662;
var G__28668 = count__28655_28663;
var G__28669 = (i__28656_28664 + (1));
seq__28653_28661 = G__28666;
chunk__28654_28662 = G__28667;
count__28655_28663 = G__28668;
i__28656_28664 = G__28669;
continue;
} else {
var temp__4126__auto___28670 = cljs.core.seq.call(null,seq__28653_28661);
if(temp__4126__auto___28670){
var seq__28653_28671__$1 = temp__4126__auto___28670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28653_28671__$1)){
var c__18381__auto___28672 = cljs.core.chunk_first.call(null,seq__28653_28671__$1);
var G__28673 = cljs.core.chunk_rest.call(null,seq__28653_28671__$1);
var G__28674 = c__18381__auto___28672;
var G__28675 = cljs.core.count.call(null,c__18381__auto___28672);
var G__28676 = (0);
seq__28653_28661 = G__28673;
chunk__28654_28662 = G__28674;
count__28655_28663 = G__28675;
i__28656_28664 = G__28676;
continue;
} else {
var k_28677 = cljs.core.first.call(null,seq__28653_28671__$1);
e.setAttribute(cljs.core.name.call(null,k_28677),cljs.core.get.call(null,attrs,k_28677));

var G__28678 = cljs.core.next.call(null,seq__28653_28671__$1);
var G__28679 = null;
var G__28680 = (0);
var G__28681 = (0);
seq__28653_28661 = G__28678;
chunk__28654_28662 = G__28679;
count__28655_28663 = G__28680;
i__28656_28664 = G__28681;
continue;
}
} else {
}
}
break;
}

var seq__28657_28682 = cljs.core.seq.call(null,children);
var chunk__28658_28683 = null;
var count__28659_28684 = (0);
var i__28660_28685 = (0);
while(true){
if((i__28660_28685 < count__28659_28684)){
var ch_28686 = cljs.core._nth.call(null,chunk__28658_28683,i__28660_28685);
e.appendChild(ch_28686);

var G__28687 = seq__28657_28682;
var G__28688 = chunk__28658_28683;
var G__28689 = count__28659_28684;
var G__28690 = (i__28660_28685 + (1));
seq__28657_28682 = G__28687;
chunk__28658_28683 = G__28688;
count__28659_28684 = G__28689;
i__28660_28685 = G__28690;
continue;
} else {
var temp__4126__auto___28691 = cljs.core.seq.call(null,seq__28657_28682);
if(temp__4126__auto___28691){
var seq__28657_28692__$1 = temp__4126__auto___28691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28657_28692__$1)){
var c__18381__auto___28693 = cljs.core.chunk_first.call(null,seq__28657_28692__$1);
var G__28694 = cljs.core.chunk_rest.call(null,seq__28657_28692__$1);
var G__28695 = c__18381__auto___28693;
var G__28696 = cljs.core.count.call(null,c__18381__auto___28693);
var G__28697 = (0);
seq__28657_28682 = G__28694;
chunk__28658_28683 = G__28695;
count__28659_28684 = G__28696;
i__28660_28685 = G__28697;
continue;
} else {
var ch_28698 = cljs.core.first.call(null,seq__28657_28692__$1);
e.appendChild(ch_28698);

var G__28699 = cljs.core.next.call(null,seq__28657_28692__$1);
var G__28700 = null;
var G__28701 = (0);
var G__28702 = (0);
seq__28657_28682 = G__28699;
chunk__28658_28683 = G__28700;
count__28659_28684 = G__28701;
i__28660_28685 = G__28702;
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
var G__28703__i = 0, G__28703__a = new Array(arguments.length -  2);
while (G__28703__i < G__28703__a.length) {G__28703__a[G__28703__i] = arguments[G__28703__i + 2]; ++G__28703__i;}
  children = new cljs.core.IndexedSeq(G__28703__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__28704){
var t = cljs.core.first(arglist__28704);
arglist__28704 = cljs.core.next(arglist__28704);
var attrs = cljs.core.first(arglist__28704);
var children = cljs.core.rest(arglist__28704);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18495__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18491__auto__,prefer_table__18492__auto__,method_cache__18493__auto__,cached_hierarchy__18494__auto__,hierarchy__18495__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18491__auto__,prefer_table__18492__auto__,method_cache__18493__auto__,cached_hierarchy__18494__auto__,hierarchy__18495__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18495__auto__,method_table__18491__auto__,prefer_table__18492__auto__,method_cache__18493__auto__,cached_hierarchy__18494__auto__));
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
var el_28705 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28705.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28705.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28705.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28705);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28706,st_map){
var map__28710 = p__28706;
var map__28710__$1 = ((cljs.core.seq_QMARK_.call(null,map__28710))?cljs.core.apply.call(null,cljs.core.hash_map,map__28710):map__28710);
var container_el = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28710,map__28710__$1,container_el){
return (function (p__28711){
var vec__28712 = p__28711;
var k = cljs.core.nth.call(null,vec__28712,(0),null);
var v = cljs.core.nth.call(null,vec__28712,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28710,map__28710__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28713,dom_str){
var map__28715 = p__28713;
var map__28715__$1 = ((cljs.core.seq_QMARK_.call(null,map__28715))?cljs.core.apply.call(null,cljs.core.hash_map,map__28715):map__28715);
var c = map__28715__$1;
var content_area_el = cljs.core.get.call(null,map__28715__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28716){
var map__28718 = p__28716;
var map__28718__$1 = ((cljs.core.seq_QMARK_.call(null,map__28718))?cljs.core.apply.call(null,cljs.core.hash_map,map__28718):map__28718);
var content_area_el = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__){
return (function (state_28760){
var state_val_28761 = (state_28760[(1)]);
if((state_val_28761 === (2))){
var inst_28745 = (state_28760[(7)]);
var inst_28754 = (state_28760[(2)]);
var inst_28755 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28756 = ["auto"];
var inst_28757 = cljs.core.PersistentHashMap.fromArrays(inst_28755,inst_28756);
var inst_28758 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28745,inst_28757);
var state_28760__$1 = (function (){var statearr_28762 = state_28760;
(statearr_28762[(8)] = inst_28754);

return statearr_28762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28760__$1,inst_28758);
} else {
if((state_val_28761 === (1))){
var inst_28745 = (state_28760[(7)]);
var inst_28745__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28746 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28747 = ["10px","10px","100%","68px","1.0"];
var inst_28748 = cljs.core.PersistentHashMap.fromArrays(inst_28746,inst_28747);
var inst_28749 = cljs.core.merge.call(null,inst_28748,style);
var inst_28750 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28745__$1,inst_28749);
var inst_28751 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28745__$1,msg);
var inst_28752 = cljs.core.async.timeout.call(null,(300));
var state_28760__$1 = (function (){var statearr_28763 = state_28760;
(statearr_28763[(9)] = inst_28751);

(statearr_28763[(10)] = inst_28750);

(statearr_28763[(7)] = inst_28745__$1);

return statearr_28763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28760__$1,(2),inst_28752);
} else {
return null;
}
}
});})(c__19775__auto__))
;
return ((function (switch__19719__auto__,c__19775__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto____0 = (function (){
var statearr_28767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28767[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto__);

(statearr_28767[(1)] = (1));

return statearr_28767;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto____1 = (function (state_28760){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_28760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e28768){if((e28768 instanceof Object)){
var ex__19723__auto__ = e28768;
var statearr_28769_28771 = state_28760;
(statearr_28769_28771[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28772 = state_28760;
state_28760 = G__28772;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto__ = function(state_28760){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto____1.call(this,state_28760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__))
})();
var state__19777__auto__ = (function (){var statearr_28770 = f__19776__auto__.call(null);
(statearr_28770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__))
);

return c__19775__auto__;
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
var vec__28774 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__28774,(0),null);
var ln = cljs.core.nth.call(null,vec__28774,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__28777 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__28777,(0),null);
var file_line = cljs.core.nth.call(null,vec__28777,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28777,file_name,file_line){
return (function (p1__28775_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28775_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28777,file_name,file_line))
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
var map__28779 = figwheel.client.heads_up.ensure_container.call(null);
var map__28779__$1 = ((cljs.core.seq_QMARK_.call(null,map__28779))?cljs.core.apply.call(null,cljs.core.hash_map,map__28779):map__28779);
var content_area_el = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__){
return (function (state_28826){
var state_val_28827 = (state_28826[(1)]);
if((state_val_28827 === (3))){
var inst_28809 = (state_28826[(7)]);
var inst_28823 = (state_28826[(2)]);
var inst_28824 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28809,"");
var state_28826__$1 = (function (){var statearr_28828 = state_28826;
(statearr_28828[(8)] = inst_28823);

return statearr_28828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28826__$1,inst_28824);
} else {
if((state_val_28827 === (2))){
var inst_28809 = (state_28826[(7)]);
var inst_28816 = (state_28826[(2)]);
var inst_28817 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28818 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28819 = cljs.core.PersistentHashMap.fromArrays(inst_28817,inst_28818);
var inst_28820 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28809,inst_28819);
var inst_28821 = cljs.core.async.timeout.call(null,(200));
var state_28826__$1 = (function (){var statearr_28829 = state_28826;
(statearr_28829[(9)] = inst_28816);

(statearr_28829[(10)] = inst_28820);

return statearr_28829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28826__$1,(3),inst_28821);
} else {
if((state_val_28827 === (1))){
var inst_28809 = (state_28826[(7)]);
var inst_28809__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28810 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28811 = ["0.0"];
var inst_28812 = cljs.core.PersistentHashMap.fromArrays(inst_28810,inst_28811);
var inst_28813 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28809__$1,inst_28812);
var inst_28814 = cljs.core.async.timeout.call(null,(300));
var state_28826__$1 = (function (){var statearr_28830 = state_28826;
(statearr_28830[(7)] = inst_28809__$1);

(statearr_28830[(11)] = inst_28813);

return statearr_28830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28826__$1,(2),inst_28814);
} else {
return null;
}
}
}
});})(c__19775__auto__))
;
return ((function (switch__19719__auto__,c__19775__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19720__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19720__auto____0 = (function (){
var statearr_28834 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28834[(0)] = figwheel$client$heads_up$clear_$_state_machine__19720__auto__);

(statearr_28834[(1)] = (1));

return statearr_28834;
});
var figwheel$client$heads_up$clear_$_state_machine__19720__auto____1 = (function (state_28826){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_28826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e28835){if((e28835 instanceof Object)){
var ex__19723__auto__ = e28835;
var statearr_28836_28838 = state_28826;
(statearr_28836_28838[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28839 = state_28826;
state_28826 = G__28839;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19720__auto__ = function(state_28826){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19720__auto____1.call(this,state_28826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19720__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19720__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__))
})();
var state__19777__auto__ = (function (){var statearr_28837 = f__19776__auto__.call(null);
(statearr_28837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_28837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__))
);

return c__19775__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__){
return (function (state_28871){
var state_val_28872 = (state_28871[(1)]);
if((state_val_28872 === (4))){
var inst_28869 = (state_28871[(2)]);
var state_28871__$1 = state_28871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28871__$1,inst_28869);
} else {
if((state_val_28872 === (3))){
var inst_28866 = (state_28871[(2)]);
var inst_28867 = figwheel.client.heads_up.clear.call(null);
var state_28871__$1 = (function (){var statearr_28873 = state_28871;
(statearr_28873[(7)] = inst_28866);

return statearr_28873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28871__$1,(4),inst_28867);
} else {
if((state_val_28872 === (2))){
var inst_28863 = (state_28871[(2)]);
var inst_28864 = cljs.core.async.timeout.call(null,(400));
var state_28871__$1 = (function (){var statearr_28874 = state_28871;
(statearr_28874[(8)] = inst_28863);

return statearr_28874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28871__$1,(3),inst_28864);
} else {
if((state_val_28872 === (1))){
var inst_28861 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28871__$1 = state_28871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28871__$1,(2),inst_28861);
} else {
return null;
}
}
}
}
});})(c__19775__auto__))
;
return ((function (switch__19719__auto__,c__19775__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto____0 = (function (){
var statearr_28878 = [null,null,null,null,null,null,null,null,null];
(statearr_28878[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto__);

(statearr_28878[(1)] = (1));

return statearr_28878;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto____1 = (function (state_28871){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_28871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e28879){if((e28879 instanceof Object)){
var ex__19723__auto__ = e28879;
var statearr_28880_28882 = state_28871;
(statearr_28880_28882[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28883 = state_28871;
state_28871 = G__28883;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto__ = function(state_28871){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto____1.call(this,state_28871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__))
})();
var state__19777__auto__ = (function (){var statearr_28881 = f__19776__auto__.call(null);
(statearr_28881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_28881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__))
);

return c__19775__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map