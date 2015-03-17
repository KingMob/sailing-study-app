// Compiled by ClojureScript 0.0-3123 {:elide-asserts false}
goog.provide('sailing_study_guide.view.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
sailing_study_guide.view.utils.split_css_size = (function sailing_study_guide$view$utils$split_css_size(size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(clojure.string.replace.call(null,size,/[^0-9.]/,"")),clojure.string.trim.call(null,clojure.string.replace.call(null,size,/[0-9.]/,""))], null);
});
sailing_study_guide.view.utils.adjust_css_size = (function sailing_study_guide$view$utils$adjust_css_size(op,factor,size){
var vec__29852 = sailing_study_guide.view.utils.split_css_size.call(null,size);
var base_size = cljs.core.nth.call(null,vec__29852,(0),null);
var units = cljs.core.nth.call(null,vec__29852,(1),null);
return [cljs.core.str(op.call(null,factor,base_size)),cljs.core.str(units)].join('');
});
sailing_study_guide.view.utils.progress_bar_view = (function sailing_study_guide$view$utils$progress_bar_view(perc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.meter","span.meter",2023760245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(perc),cljs.core.str("%")].join('')], null)], null)], null)], null);
});
sailing_study_guide.view.utils.ring_chart_view = (function sailing_study_guide$view$utils$ring_chart_view(perc){
return null;
});
sailing_study_guide.view.utils.hexagon = (function sailing_study_guide$view$utils$hexagon(scale,color){
var hex_coords = "0 -125, 108 -62.5, 108 62.5, 0 125, -108 62.5, -108 -62.5";
return ((function (hex_coords){
return (function (scale__$1,color__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),color__$1,new cljs.core.Keyword(null,"points","points",-1486596883),hex_coords,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str(scale__$1),cljs.core.str(")")].join('')], null)], null);
});
;})(hex_coords))
});
sailing_study_guide.view.utils.nested_hexagons = (function sailing_study_guide$view$utils$nested_hexagons(num_hexagons,separation,base_color,content){
if((num_hexagons < (9))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"num-hexagons","num-hexagons",1130381032,null),(9))))].join('')));
}

var scaling_factors = cljs.core.iterate.call(null,(function (p1__29853_SHARP_){
return (p1__29853_SHARP_ - separation);
}),(1));
var colors = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white",base_color], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hexagon-wrapper","div.hexagon-wrapper",1520782472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"-130 -130 260 260",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"baseProfile","baseProfile",-448131232),"full",new cljs.core.Keyword(null,"version","version",425292698),"1.1"], null),cljs.core.take.call(null,num_hexagons,cljs.core.map.call(null,((function (scaling_factors,colors){
return (function (p1__29854_SHARP_,p2__29855_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[sailing_study_guide.view.utils.hexagon,p1__29854_SHARP_,p2__29855_SHARP_],null));
});})(scaling_factors,colors))
,scaling_factors,colors))], null)], null);
});

//# sourceMappingURL=utils.js.map