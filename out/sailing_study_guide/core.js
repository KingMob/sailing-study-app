// Compiled by ClojureScript 0.0-2156
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"banner","banner",3912528542),"Quiz",new cljs.core.Keyword(null,"quiz-items","quiz-items",4160503226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the small sail at front called?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jib","Jab","Jibjab","Mast"], null),new cljs.core.Keyword(null,"correct","correct",1969069020),0], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the biggest danger to a boat?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pirates","Barnacles","Leviathans","That you'll need a bigger one"], null),new cljs.core.Keyword(null,"correct","correct",1969069020),3], null)], null)], null));
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t6749 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t6749 = (function (owner,answer,answer_view,meta6750){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta6750 = meta6750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t6749.cljs$lang$type = true;
sailing_study_guide.core.t6749.cljs$lang$ctorStr = "sailing-study-guide.core/t6749";
sailing_study_guide.core.t6749.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sailing-study-guide.core/t6749");
});
sailing_study_guide.core.t6749.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t6749.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li(null,self__.answer);
});
sailing_study_guide.core.t6749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6751){var self__ = this;
var _6751__$1 = this;return self__.meta6750;
});
sailing_study_guide.core.t6749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6751,meta6750__$1){var self__ = this;
var _6751__$1 = this;return (new sailing_study_guide.core.t6749(self__.owner,self__.answer,self__.answer_view,meta6750__$1));
});
sailing_study_guide.core.__GT_t6749 = (function __GT_t6749(owner__$1,answer__$1,answer_view__$1,meta6750){return (new sailing_study_guide.core.t6749(owner__$1,answer__$1,answer_view__$1,meta6750));
});
}
return (new sailing_study_guide.core.t6749(owner,answer,answer_view,null));
});
sailing_study_guide.core.quiz_item_view = (function quiz_item_view(quiz_item,owner){if(typeof sailing_study_guide.core.t6755 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t6755 = (function (owner,quiz_item,quiz_item_view,meta6756){
this.owner = owner;
this.quiz_item = quiz_item;
this.quiz_item_view = quiz_item_view;
this.meta6756 = meta6756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t6755.cljs$lang$type = true;
sailing_study_guide.core.t6755.cljs$lang$ctorStr = "sailing-study-guide.core/t6755";
sailing_study_guide.core.t6755.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sailing-study-guide.core/t6755");
});
sailing_study_guide.core.t6755.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t6755.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"className": "quiz-item"},new cljs.core.Keyword(null,"question","question",4143001432).cljs$core$IFn$_invoke$arity$1(self__.quiz_item)),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",4461472743).cljs$core$IFn$_invoke$arity$1(self__.quiz_item))));
});
sailing_study_guide.core.t6755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6757){var self__ = this;
var _6757__$1 = this;return self__.meta6756;
});
sailing_study_guide.core.t6755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6757,meta6756__$1){var self__ = this;
var _6757__$1 = this;return (new sailing_study_guide.core.t6755(self__.owner,self__.quiz_item,self__.quiz_item_view,meta6756__$1));
});
sailing_study_guide.core.__GT_t6755 = (function __GT_t6755(owner__$1,quiz_item__$1,quiz_item_view__$1,meta6756){return (new sailing_study_guide.core.t6755(owner__$1,quiz_item__$1,quiz_item_view__$1,meta6756));
});
}
return (new sailing_study_guide.core.t6755(owner,quiz_item,quiz_item_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t6761 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t6761 = (function (owner,quiz,quiz_view,meta6762){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta6762 = meta6762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t6761.cljs$lang$type = true;
sailing_study_guide.core.t6761.cljs$lang$ctorStr = "sailing-study-guide.core/t6761";
sailing_study_guide.core.t6761.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"sailing-study-guide.core/t6761");
});
sailing_study_guide.core.t6761.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t6761.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,new cljs.core.Keyword(null,"banner","banner",3912528542).cljs$core$IFn$_invoke$arity$1(self__.quiz)),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,sailing_study_guide.core.quiz_item_view,new cljs.core.Keyword(null,"quiz-items","quiz-items",4160503226).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t6761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6763){var self__ = this;
var _6763__$1 = this;return self__.meta6762;
});
sailing_study_guide.core.t6761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6763,meta6762__$1){var self__ = this;
var _6763__$1 = this;return (new sailing_study_guide.core.t6761(self__.owner,self__.quiz,self__.quiz_view,meta6762__$1));
});
sailing_study_guide.core.__GT_t6761 = (function __GT_t6761(owner__$1,quiz__$1,quiz_view__$1,meta6762){return (new sailing_study_guide.core.t6761(owner__$1,quiz__$1,quiz_view__$1,meta6762));
});
}
return (new sailing_study_guide.core.t6761(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map