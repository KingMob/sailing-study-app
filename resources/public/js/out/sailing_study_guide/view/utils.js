// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
goog.provide('sailing_study_guide.view.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
sailing_study_guide.view.utils.strip_css_units = (function sailing_study_guide$view$utils$strip_css_units(size){
return clojure.string.replace.call(null,size,/[^0-9.]/,"");
});
sailing_study_guide.view.utils.progress_bar_view = (function sailing_study_guide$view$utils$progress_bar_view(perc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.meter","span.meter",2023760245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(perc),cljs.core.str("%")].join('')], null)], null)], null)], null);
});
sailing_study_guide.view.utils.hexagon = (function sailing_study_guide$view$utils$hexagon(size,color,extra_props){
var basis_size = [cljs.core.str(size),cljs.core.str("vw")].join('');
var props = reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),basis_size,new cljs.core.Keyword(null,"height","height",1025178622),basis_size], null)], null),extra_props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hexagon-wrapper","div.hexagon-wrapper",1520782472),props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hexagon","div.hexagon",35312958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null)], null)], null);
});
sailing_study_guide.view.utils.nested_hexagons = (function sailing_study_guide$view$utils$nested_hexagons(size,base_color,content){
return null;
});

//# sourceMappingURL=utils.js.map