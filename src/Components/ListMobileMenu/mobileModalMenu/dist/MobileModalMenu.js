"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MobileButton_1 = require("../../UI/MobileButton/MobileButton");
var classnames_1 = require("classnames");
var MobileModalMenu_module_scss_1 = require("./MobileModalMenu.module.scss");
var MobileMenuJs_1 = require("../../Menu/MenuJs/MobileMenuJs");
var MobileMenuTs_1 = require("../../Menu/MenuTs/MobileMenuTs");
var MobileMenuParadigms_1 = require("../../Menu/MenuParadigms/MobileMenuParadigms");
var MobileMenuReact_1 = require("../../Menu/MenuReact/MobileMenuReact");
var MobileMenuNextJs_1 = require("../../Menu/MenuNextJs/MobileMenuNextJs");
var MobileMenuHtmlCss_1 = require("../../Menu/MenuHtml&css/MobileMenuHtmlCss");
var app_context_1 = require("../../../../context/app.context");
var MobileMenuNodeJs_1 = require("../../Menu/MenuNodeJs/MobileMenuNodeJs");
var mobileModalMenu = function (_a) {
    var _b;
    var page = _a.page;
    var _c = react_1.useState(false), mobile = _c[0], setMobile = _c[1];
    var propsMobile = [mobile, setMobile];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(app_context_1.MobileContext.Provider, { value: { propsMobile: propsMobile } },
            react_1["default"].createElement("div", { className: classnames_1["default"](MobileModalMenu_module_scss_1["default"].modal, (_b = {},
                    _b[MobileModalMenu_module_scss_1["default"].modal_true] = mobile === true,
                    _b)) },
                page === 'js' && react_1["default"].createElement(MobileMenuJs_1["default"], null),
                page === 'ts' && react_1["default"].createElement(MobileMenuTs_1["default"], null),
                page === 'react' && react_1["default"].createElement(MobileMenuReact_1["default"], null),
                page === 'next-js' && react_1["default"].createElement(MobileMenuNextJs_1["default"], null),
                page === 'paradigms' && react_1["default"].createElement(MobileMenuParadigms_1["default"], null),
                page === 'html-css' && react_1["default"].createElement(MobileMenuHtmlCss_1["default"], null),
                page === 'node-js' && react_1["default"].createElement(MobileMenuNodeJs_1["default"], null)),
            react_1["default"].createElement(MobileButton_1["default"], { mobile: mobile, setMobile: setMobile }))));
};
exports["default"] = mobileModalMenu;
