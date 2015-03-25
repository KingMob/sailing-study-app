// Compiled by ClojureScript 0.0-3149 {:elide-asserts false}
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sailing_study_guide.model');
goog.require('sailing_study_guide.view.splash');
goog.require('sailing_study_guide.view.score');
goog.require('cljsjs.react');
goog.require('sailing_study_guide.view.question');
goog.require('sailing_study_guide.dispatch');
goog.require('sailing_study_guide.view.quizzes');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_meta_STAR_ = true;
cljs.core.println.call(null,"Starting...");
if(typeof sailing_study_guide.core.pages !== 'undefined'){
} else {
sailing_study_guide.core.pages = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"splash","splash",-1122760796),sailing_study_guide.view.splash.main,new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243),sailing_study_guide.view.quizzes.main,new cljs.core.Keyword(null,"question","question",-1411720117),sailing_study_guide.view.question.main,new cljs.core.Keyword(null,"score","score",-1963588780),sailing_study_guide.view.score.main], null);
}
sailing_study_guide.dispatch.whenever.call(null,new cljs.core.Keyword(null,"page-finished","page-finished",-1722727657),(function (old_page){
cljs.core.println.call(null,"Finished with",old_page,"page");

return cljs.core.reset_BANG_.call(null,sailing_study_guide.model.current_page,(function (){var G__22824 = (((old_page instanceof cljs.core.Keyword))?old_page.fqn:null);
switch (G__22824) {
case "question":
return new cljs.core.Keyword(null,"score","score",-1963588780);

break;
case "quizzes":
return new cljs.core.Keyword(null,"question","question",-1411720117);

break;
case "splash":
return new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(old_page)].join('')));

}
})());
}));
/**
 * @param {...*} var_args
 */
sailing_study_guide.core.page_container = (function() { 
var sailing_study_guide$core$page_container__delegate = function (page,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-container","div.page-container",-330719046),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.pages.call(null,cljs.core.deref.call(null,page))], null)], null);
};
var sailing_study_guide$core$page_container = function (page,var_args){
var args = null;
if (arguments.length > 1) {
var G__22826__i = 0, G__22826__a = new Array(arguments.length -  1);
while (G__22826__i < G__22826__a.length) {G__22826__a[G__22826__i] = arguments[G__22826__i + 1]; ++G__22826__i;}
  args = new cljs.core.IndexedSeq(G__22826__a,0);
} 
return sailing_study_guide$core$page_container__delegate.call(this,page,args);};
sailing_study_guide$core$page_container.cljs$lang$maxFixedArity = 1;
sailing_study_guide$core$page_container.cljs$lang$applyTo = (function (arglist__22827){
var page = cljs.core.first(arglist__22827);
var args = cljs.core.rest(arglist__22827);
return sailing_study_guide$core$page_container__delegate(page,args);
});
sailing_study_guide$core$page_container.cljs$core$IFn$_invoke$arity$variadic = sailing_study_guide$core$page_container__delegate;
return sailing_study_guide$core$page_container;
})()
;
sailing_study_guide.core.init_BANG_ = (function sailing_study_guide$core$init_BANG_(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.page_container,sailing_study_guide.model.current_page], null),document.body);
});

//# sourceMappingURL=core.js.map