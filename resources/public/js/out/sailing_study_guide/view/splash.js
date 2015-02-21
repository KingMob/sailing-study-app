// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
goog.provide('sailing_study_guide.view.splash');
goog.require('cljs.core');
goog.require('sailing_study_guide.view.utils');
goog.require('reagent.core');
sailing_study_guide.view.splash.logo = (function logo(size,color){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.logo-hex","div.logo-hex",-2081193874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(size),cljs.core.str("vw")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(size),cljs.core.str("vw")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/splash-boat-only.png"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.utils.hexagon,size,"white",(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.utils.hexagon,(size * .9),color,(size * .05)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.utils.hexagon,(size * .8),"white",(size * .1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.utils.hexagon,(size * .7),color,(size * .15)], null)], null);
});
sailing_study_guide.view.splash.splash = (function splash(next_page){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.splash","div.splash",-689554748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_page], null),document.body);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.splash.logo,(33),"red"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"SAIL STUDY"], null)], null);
});

//# sourceMappingURL=splash.js.map