// Compiled by ClojureScript 0.0-3148 {:elide-asserts false}
goog.provide('sailing_study_guide.view.splash');
goog.require('cljs.core');
goog.require('sailing_study_guide.view.utils');
goog.require('sailing_study_guide.dispatch');
goog.require('cljsjs.react');
goog.require('reagent.core');
sailing_study_guide.view.splash.logo_img = "images/splash-boat-only.png";
sailing_study_guide.view.splash.logo = (function sailing_study_guide$view$splash$logo(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.logo-hex","div.logo-hex",-2081193874),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.utils.nested_hexagons,(4),.1,"red",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sailing_study_guide.view.splash.logo_img], null)], null)], null)], null);
});
sailing_study_guide.view.splash.main = (function sailing_study_guide$view$splash$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.splash","div.splash",-689554748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return sailing_study_guide.dispatch.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"page-finished","page-finished",-1722727657),new cljs.core.Keyword(null,"splash","splash",-1122760796));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.splash.logo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-name","div.app-name",1787558151),"SAIL STUDY"], null)], null);
});

//# sourceMappingURL=splash.js.map