"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../../../layout/Layout");
var QuizJsListTestBeginner_props_1 = require("../../../src/Components/Quiz/QuizJsListTestBeginner/QuizJsListTestBeginner.props");
var QuizTest_1 = require("../../../src/Components/Quiz/QuizTest/QuizTest");
var index = function () {
    var _a = react_1.useState(''), percent1 = _a[0], setPercent1 = _a[1];
    react_1.useEffect(function () {
        if (localStorage.getItem('test1') != null) {
            setPercent1(localStorage.getItem('test1'));
        }
    }, []);
    react_1.useEffect(function () {
        QuizJsListTestBeginner_props_1.quizData1.map(function (item, i) {
            QuizJsListTestBeginner_props_1.quizData1[i].answerOptions.sort(function () { return Math.random() - 0.5; });
        });
    });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(QuizTest_1["default"], { percent: percent1 })));
};
exports["default"] = Layout_1.withLayout(index);
