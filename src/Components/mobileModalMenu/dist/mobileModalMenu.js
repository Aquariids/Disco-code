"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MenuJs_1 = require("../Menu/MenuJs/MenuJs");
var MobileButton_1 = require("../UI/MobileButton/MobileButton");
var classnames_1 = require("classnames");
var MenuTs_1 = require("../Menu/MenuTs/MenuTs");
var MenuReact_1 = require("../Menu/MenuReact/MenuReact");
var mobileModalMenu = function (_a) {
    var _b;
    var js = _a.js, ts = _a.ts, react = _a.react;
    var _c = react_1.useState(false), mobile = _c[0], setMobile = _c[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: classnames_1["default"]('modal', (_b = {},
                _b['modaltrue'] = mobile === true,
                _b)) },
            js === 'js' ? react_1["default"].createElement(MenuJs_1["default"], { sideBarMenuActive: false, mobileMenuActive: true, setMobile: setMobile, mobile: mobile }) : react_1["default"].createElement(react_1["default"].Fragment, null),
            ts === 'ts' ? react_1["default"].createElement(MenuTs_1["default"], { sideBarMenuActive: false, mobileMenuActive: true, setMobile: setMobile, mobile: mobile }) : react_1["default"].createElement(react_1["default"].Fragment, null),
            react === 'react' ? react_1["default"].createElement(MenuReact_1["default"], { sideBarMenuActive: false, mobileMenuActive: true, setMobile: setMobile, mobile: mobile }) : react_1["default"].createElement(react_1["default"].Fragment, null)),
        react_1["default"].createElement(MobileButton_1["default"], { mobile: mobile, setMobile: setMobile })));
};
exports["default"] = mobileModalMenu;
