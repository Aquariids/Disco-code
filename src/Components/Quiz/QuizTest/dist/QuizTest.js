"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var QuizTest_module_scss_1 = require("./QuizTest.module.scss");
var classnames_1 = require("classnames");
var QuizTest = function (_a) {
    var _b;
    var percent = _a.percent;
    return (react_1["default"].createElement("div", { className: QuizTest_module_scss_1["default"].container },
        react_1["default"].createElement("div", { className: QuizTest_module_scss_1["default"].test },
            react_1["default"].createElement("div", { className: QuizTest_module_scss_1["default"].test__title }, "\u0422\u0435\u0441\u0442 1"),
            react_1["default"].createElement("div", { className: QuizTest_module_scss_1["default"].test__content },
                react_1["default"].createElement("div", { className: QuizTest_module_scss_1["default"].test__score },
                    " \u041F\u0440\u043E\u0439\u0434\u0435\u043D \u043D\u0430 ",
                    react_1["default"].createElement("span", { className: classnames_1["default"]((_b = {},
                            _b[QuizTest_module_scss_1["default"].nice] = percent === 100,
                            _b[QuizTest_module_scss_1["default"].middle] = percent > 55 && percent != 100,
                            _b[QuizTest_module_scss_1["default"].bad] = percent < 55 && percent != 0 && percent > 30 || percent == 50,
                            _b[QuizTest_module_scss_1["default"].bad_bad] = percent < 30 && percent != 0,
                            _b[QuizTest_module_scss_1["default"].veryBad] = percent === 0,
                            _b)) }, (percent ? percent : '0') + "%")),
                react_1["default"].createElement("div", { className: QuizTest_module_scss_1["default"].start },
                    react_1["default"].createElement(link_1["default"], { href: '/tests/beginner/1' }, "\u041D\u0430\u0447\u0430\u0442\u044C"))))));
};
exports["default"] = QuizTest;
