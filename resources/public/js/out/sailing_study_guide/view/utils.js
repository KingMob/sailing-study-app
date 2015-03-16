// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
goog.provide('sailing_study_guide.view.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
sailing_study_guide.view.utils.split_css_size = (function sailing_study_guide$view$utils$split_css_size(size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(clojure.string.replace.call(null,size,/[^0-9.]/,"")),clojure.string.trim.call(null,clojure.string.replace.call(null,size,/[0-9.]/,""))], null);
});
sailing_study_guide.view.utils.adjust_css_size = (function sailing_study_guide$view$utils$adjust_css_size(op,factor,size){
var vec__24302 = sailing_study_guide.view.utils.split_css_size.call(null,size);
var base_size = cljs.core.nth.call(null,vec__24302,(0),null);
var units = cljs.core.nth.call(null,vec__24302,(1),null);
return [cljs.core.str(op.call(null,factor,base_size)),cljs.core.str(units)].join('');
});
sailing_study_guide.view.utils.progress_bar_view = (function sailing_study_guide$view$utils$progress_bar_view(perc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.meter","span.meter",2023760245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(perc),cljs.core.str("%")].join('')], null)], null)], null)], null);
});
sailing_study_guide.view.utils.hexagon = (function sailing_study_guide$view$utils$hexagon(size,color,extra_props){
var basis_size = size;
var props = reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),basis_size,new cljs.core.Keyword(null,"height","height",1025178622),basis_size], null)], null),extra_props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hexagon-wrapper","div.hexagon-wrapper",1520782472),props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hexagon","div.hexagon",35312958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null)], null)], null);
});
sailing_study_guide.view.utils.adjusted_hexagon = (function sailing_study_guide$view$utils$adjusted_hexagon(scaling_factor,size,color){
var css_size = sailing_study_guide.view.utils.adjust_css_size.call(null,cljs.core._STAR_,scaling_factor,size);
var css_margin = sailing_study_guide.view.utils.adjust_css_size.call(null,cljs.core._STAR_,(.5 * ((1) - scaling_factor)),size);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.utils.hexagon,css_size,color,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),css_margin,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),css_margin], null)], null)], null);
});
sailing_study_guide.view.utils.nested_hexagons = (function sailing_study_guide$view$utils$nested_hexagons(num_hexagons,size,base_color,content){
if((num_hexagons < (9))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"num-hexagons","num-hexagons",1130381032,null),(9))))].join('')));
}

var hexagon_separation = .1;
var scaling_factors = cljs.core.iterate.call(null,((function (hexagon_separation){
return (function (p1__24303_SHARP_){
return (p1__24303_SHARP_ - hexagon_separation);
});})(hexagon_separation))
,(1));
var colors = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white",base_color], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nested-hexagons-wrapper","div.nested-hexagons-wrapper",1680924751),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),content], null),cljs.core.take.call(null,num_hexagons,cljs.core.map.call(null,sailing_study_guide.view.utils.adjusted_hexagon,scaling_factors,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [size], null)),colors))], null);
});

//# sourceMappingURL=utils.js.map