// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
goog.provide('sailing_study_guide.view_utils');
goog.require('cljs.core');
goog.require('reagent.core');
sailing_study_guide.view_utils.progress_bar_view = (function progress_bar_view(perc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.meter","span.meter",2023760245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(perc),cljs.core.str("%")].join('')], null)], null)], null)], null);
});
sailing_study_guide.view_utils.hexagon = (function hexagon(size,color,margin){
var basis_size = [cljs.core.str(size),cljs.core.str("vw")].join('');
var margin_size = [cljs.core.str(margin),cljs.core.str("vw")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hexagon-wrapper","div.hexagon-wrapper",1520782472),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),basis_size,new cljs.core.Keyword(null,"height","height",1025178622),basis_size,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_size,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hexagon","div.hexagon",35312958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null)], null)], null);
});

//# sourceMappingURL=view_utils.js.map