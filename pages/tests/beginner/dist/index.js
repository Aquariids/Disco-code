"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../../../layout/Layout");
var index = function () {
    var _a = react_1.useState(''), p = _a[0], setP = _a[1];
    react_1.useEffect(function () {
        if (localStorage.getItem('test1') != null) {
            setP(localStorage.getItem('test1'));
        }
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", null, "\u0422\u0435\u0441\u0442\u044B \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445 "),
                react_1["default"].createElement("div", null,
                    "\u0422\u0435\u0441\u0442 1. \u041F\u0440\u043E\u0439\u0434\u0435\u043D \u043D\u0430 ", p + "%")))));
};
exports["default"] = Layout_1.withLayout(index);
