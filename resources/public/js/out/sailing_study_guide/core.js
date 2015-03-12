// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sailing_study_guide.model');
goog.require('sailing_study_guide.view.splash');
goog.require('sailing_study_guide.view.question');
goog.require('sailing_study_guide.dispatch');
goog.require('sailing_study_guide.view.quizzes');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_meta_STAR_ = true;
cljs.core.println.call(null,"Starting...");
if(typeof sailing_study_guide.core.pages !== 'undefined'){
} else {
sailing_study_guide.core.pages = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"splash","splash",-1122760796),sailing_study_guide.view.splash.main,new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243),sailing_study_guide.view.quizzes.main,new cljs.core.Keyword(null,"question","question",-1411720117),sailing_study_guide.view.question.main], null);
}
sailing_study_guide.dispatch.whenever.call(null,new cljs.core.Keyword(null,"page-finished","page-finished",-1722727657),(function (old_page){
cljs.core.println.call(null,"Finished with",old_page,"page");

return cljs.core.reset_BANG_.call(null,sailing_study_guide.model.current_page,(function (){var G__22719 = (((old_page instanceof cljs.core.Keyword))?old_page.fqn:null);
switch (G__22719) {
case "question":
return new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243);

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
sailing_study_guide.core.test_container = (function sailing_study_guide$core$test_container(page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.pages.call(null,cljs.core.deref.call(null,page))], null)], null);
});
sailing_study_guide.core.init_BANG_ = (function sailing_study_guide$core$init_BANG_(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.test_container,sailing_study_guide.model.current_page], null),document.body);
});

//# sourceMappingURL=core.js.map