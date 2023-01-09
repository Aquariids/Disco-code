"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Layout_1 = require("../../../layout/Layout");
var test_module_scss_1 = require("./test.module.scss");
var index = function () {
    var _a = react_1.useState(''), p = _a[0], setP = _a[1];
    react_1.useEffect(function () {
        if (localStorage.getItem('test1') != null) {
            setP(localStorage.getItem('test1'));
        }
    }, []);
    return (react_1["default"].createElement("div", { className: test_module_scss_1["default"].container },
        react_1["default"].createElement("div", { className: test_module_scss_1["default"].test },
            react_1["default"].createElement("div", { className: test_module_scss_1["default"].test__title }, "\u0422\u0435\u0441\u0442 1"),
            react_1["default"].createElement("div", { className: test_module_scss_1["default"].test__content },
                react_1["default"].createElement("div", { className: test_module_scss_1["default"].test__score },
                    " \u041F\u0440\u043E\u0439\u0434\u0435\u043D \u043D\u0430 ", p + "%"),
                react_1["default"].createElement("div", { className: test_module_scss_1["default"].start },
                    react_1["default"].createElement(link_1["default"], { href: '/tests/beginner/1' }, "\u041D\u0430\u0447\u0430\u0442\u044C"))))));
};
exports["default"] = Layout_1.withLayout(index);
