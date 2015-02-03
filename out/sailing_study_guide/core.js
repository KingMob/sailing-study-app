// Compiled by ClojureScript 0.0-2760 {}
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('sailing_study_guide.dispatch');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_meta_STAR_ = true;
sailing_study_guide.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(1),new cljs.core.Keyword(null,"quiz","quiz",829625914),sailing_study_guide.quiz.default_quiz], null));
sailing_study_guide.core.cljs_type__GT_str = (function cljs_type__GT_str(x){
var temp__4124__auto__ = x.constructor;
if(cljs.core.truth_(temp__4124__auto__)){
var ctor = temp__4124__auto__;
return cljs.core.type__GT_str.call(null,ctor);
} else {
return cljs.core.type__GT_str.call(null,x);
}
});
sailing_study_guide.core.current_section = (function current_section(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),(0)], null));
});
sailing_study_guide.core.header_view = (function header_view(section){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-header","div.quiz-header",269841790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.header_bar_view,section], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.header_progress_view,section], null)], null);
});
sailing_study_guide.core.header_view = (function header_view(section){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"header-view"], null);
});
sailing_study_guide.core.section_view = (function section_view(section){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"quiz-section",new cljs.core.Keyword(null,"className","className",-1983287057),"off-canvas-wrap",new cljs.core.Keyword(null,"data-offcanvas","data-offcanvas",-1343884258),true], null),"section-view",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-content.inner-wrap","div.main-content.inner-wrap",-1889940405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.header_view,section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.exit-off-canvas","a.exit-off-canvas",-1870222295)], null)], null)], null);
});
sailing_study_guide.core.quiz_view = (function quiz_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"quiz-view",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.section_view,sailing_study_guide.core.current_section.call(null)], null)], null);
});
sailing_study_guide.core.run = (function run(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.quiz_view], null),document.body);
});
goog.exportSymbol('sailing_study_guide.core.run', sailing_study_guide.core.run);

//# sourceMappingURL=core.js.map