"use strict";
exports.__esModule = true;
var router_1 = require("next/router");
var react_1 = require("react");
var MobileModalMenu_1 = require("../MobileModalMenu");
var ListMobileMenu = function () {
    var router = router_1.useRouter();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        router.asPath.startsWith('/js/basicjs') ? react_1["default"].createElement(MobileModalMenu_1["default"], { js: "js" }) : react_1["default"].createElement(react_1["default"].Fragment, null),
        router.asPath.startsWith('/js/advancedjs') ? react_1["default"].createElement(MobileModalMenu_1["default"], { js: "js" }) : react_1["default"].createElement(react_1["default"].Fragment, null),
        router.asPath.startsWith('/js/algorithmsjs') ? react_1["default"].createElement(MobileModalMenu_1["default"], { js: "js" }) : react_1["default"].createElement(react_1["default"].Fragment, null),
        router.asPath.startsWith('/ts/basicts') ? react_1["default"].createElement(MobileModalMenu_1["default"], { ts: "ts" }) : react_1["default"].createElement(react_1["default"].Fragment, null),
        router.asPath.startsWith('/ts/basicreact') ? react_1["default"].createElement(MobileModalMenu_1["default"], { react: "react" }) : react_1["default"].createElement(react_1["default"].Fragment, null)));
};
exports["default"] = ListMobileMenu;
