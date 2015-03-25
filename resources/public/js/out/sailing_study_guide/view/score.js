// Compiled by ClojureScript 0.0-3149 {:elide-asserts false}
goog.provide('sailing_study_guide.view.score');
goog.require('cljs.core');
goog.require('sailing_study_guide.view.utils');
goog.require('sailing_study_guide.dispatch');
goog.require('sailing_study_guide.model');
sailing_study_guide.view.score.overall_score = (function sailing_study_guide$view$score$overall_score(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overall-score","div.overall-score",-1609620529),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-links","div.tab-links",178925119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Your Score"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Your Progress"], null)], null)], null);
});
sailing_study_guide.view.score.section_score = (function sailing_study_guide$view$score$section_score(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section-score","div.section-score",-1056271833)], null);
});
sailing_study_guide.view.score.nav_buttons = (function sailing_study_guide$view$score$nav_buttons(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-buttons","div.nav-buttons",1934111291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nav-button","button.nav-button",-1159360206),"Start Over"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nav-button","button.nav-button",-1159360206),"Next Quiz"], null)], null)], null);
});
sailing_study_guide.view.score.main = (function sailing_study_guide$view$score$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.score-container","div.score-container",-1803013963),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.score.overall_score], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.score.section_score], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.score.nav_buttons], null)], null);
});

//# sourceMappingURL=score.js.map