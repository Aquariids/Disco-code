"use strict";
exports.__esModule = true;
var router_1 = require("next/router");
var SidebarMenu_module_css_1 = require("./SidebarMenu.module.css");
var MenuJs_1 = require("../Menu/MenuJs/MenuJs");
var MenuTs_1 = require("../Menu/MenuTs/MenuTs");
var MenuReact_1 = require("../Menu/MenuReact/MenuReact");
var SidebarMenu = function () {
    var router = router_1.useRouter();
    if (router.pathname.startsWith('/js')) {
        return (React.createElement("nav", { className: SidebarMenu_module_css_1["default"].nav_menu },
            React.createElement(MenuJs_1["default"], { mobileMenuActive: false, sideBarMenuActive: true })));
    }
    if (router.pathname.startsWith('/ts')) {
        return (React.createElement("nav", { className: SidebarMenu_module_css_1["default"].nav_menu },
            React.createElement(MenuTs_1["default"], { sideBarMenuActive: true, mobileMenuActive: false })));
    }
    if (router.pathname.startsWith('/react')) {
        return (React.createElement("nav", { className: SidebarMenu_module_css_1["default"].nav_menu },
            React.createElement(MenuReact_1["default"], { sideBarMenuActive: true, mobileMenuActive: false })));
    }
    else {
        return (React.createElement(React.Fragment, null));
    }
};
exports["default"] = SidebarMenu;
