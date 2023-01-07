"use strict";
exports.__esModule = true;
require("highlight.js/styles/default.css");
var router_1 = require("next/router");
var QuizJs_1 = require("../QuizJs/QuizJs");
var QuizJsListTestBeginner_props_1 = require("./QuizJsListTestBeginner.props");
var QuizJsListTestBeginner = function () {
    var router = router_1.useRouter();
    var test = router.query.test;
    if (test === '1') {
        return (React.createElement("div", null,
            React.createElement(QuizJs_1["default"], { data: QuizJsListTestBeginner_props_1.quizData1 })));
    }
    else {
        return (React.createElement(React.Fragment, null, "\u0422\u0415\u0421\u0422\u042B \u0421\u041B\u041E\u041C\u0410\u041B\u0418\u0421\u042C"));
    }
};
exports["default"] = QuizJsListTestBeginner;
