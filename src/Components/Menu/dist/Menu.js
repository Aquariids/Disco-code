"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Menu_module_css_1 = require("./Menu.module.css");
var classnames_1 = require("classnames");
var router_1 = require("next/router");
var Button_1 = require("../UI/Button/Button");
var app_context_1 = require("../../../context/app.context");
var Menu = function (_a) {
    var title = _a.title, category = _a.category, dropdown = _a.dropdown, page = _a.page, mobileMenu = _a.mobileMenu, setMobile = _a.setMobile, mobileTrue = _a.mobileTrue, props = __rest(_a, ["title", "category", "dropdown", "page", "mobileMenu", "setMobile", "mobileTrue"]);
    var router = router_1.useRouter();
    var pathname = router.asPath;
    var posts = react_1.useContext(app_context_1.AppContext).posts;
    posts && posts.sort(function (a, b) { return a.id - b.id; });
    var _b = react_1.useState(router.pathname.startsWith("/" + page + "/" + category) == true ? true : false), isOpen = _b[0], setOpen = _b[1];
    var handleToggle = function () {
        setOpen(!isOpen);
    };
    var mob = function () {
        router.events.on('routeChangeComplete', function () {
            setMobile(!mobileTrue);
        });
    };
    if (dropdown === true) {
        return (react_1["default"].createElement("div", __assign({ className: Menu_module_css_1["default"].content }, props),
            react_1["default"].createElement("div", { className: Menu_module_css_1["default"].btn },
                react_1["default"].createElement(Button_1["default"], { arrow: isOpen === true ? 'down' : 'up', onClick: handleToggle }, title)),
            isOpen && (react_1["default"].createElement("ul", { className: Menu_module_css_1["default"].listMenu }, posts && posts.map(function (post, index) {
                var _a;
                return (react_1["default"].createElement("li", { key: index, className: classnames_1["default"]('scroll', (_a = {},
                        _a[Menu_module_css_1["default"].active_js] = pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/js'),
                        _a[Menu_module_css_1["default"].active_ts] = pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/ts'),
                        _a[Menu_module_css_1["default"].active_react] = pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/react'),
                        _a[Menu_module_css_1["default"].link] = pathname.replace(post.slug, '') + post.slug !== pathname,
                        _a[Menu_module_css_1["default"].show] = post.category == category,
                        _a[Menu_module_css_1["default"].hide] = post.category !== category,
                        _a)) }, router.pathname.startsWith("/" + page) ? react_1["default"].createElement(link_1["default"], { href: "/" + page + "/" + post.category + "/" + post.slug }, post.title) : ''));
            })))));
    }
    else if (mobileMenu === true) {
        return (react_1["default"].createElement("div", __assign({ className: Menu_module_css_1["default"].mobile_content }, props),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h4", { className: Menu_module_css_1["default"].title }, title)),
            react_1["default"].createElement("ul", { className: Menu_module_css_1["default"].mobile_list }, posts && posts.map(function (post, index) {
                var _a;
                return (react_1["default"].createElement("li", { onClick: mob, key: index, className: classnames_1["default"]((_a = {},
                        _a[Menu_module_css_1["default"].active_js] = pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/js'),
                        _a[Menu_module_css_1["default"].active_ts] = pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/ts'),
                        _a[Menu_module_css_1["default"].active_react] = pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/react'),
                        _a[Menu_module_css_1["default"].link] = pathname.replace(post.slug, '') + post.slug !== pathname,
                        _a[Menu_module_css_1["default"].show] = post.category == category,
                        _a[Menu_module_css_1["default"].hide] = post.category !== category,
                        _a)) }, router.pathname.startsWith("/" + page) ? react_1["default"].createElement(link_1["default"], { href: "/" + page + "/" + post.category + "/" + post.slug }, post.title) : ''));
            }))));
    }
    else {
        return (react_1["default"].createElement("div", __assign({ className: Menu_module_css_1["default"].content }, props),
            react_1["default"].createElement("div", { className: Menu_module_css_1["default"].index_btn },
                react_1["default"].createElement("h4", { className: Menu_module_css_1["default"].title }, title)),
            react_1["default"].createElement("ul", { className: Menu_module_css_1["default"].index_list_menu }, posts && posts.map(function (post, index) {
                var _a;
                return (react_1["default"].createElement("li", { key: index, className: classnames_1["default"]((_a = {},
                        _a[Menu_module_css_1["default"].active] = pathname.replace(post.slug, '') + post.slug === pathname,
                        _a[Menu_module_css_1["default"].link] = pathname.replace(post.slug, '') + post.slug !== pathname,
                        _a[Menu_module_css_1["default"].show] = post.category == category,
                        _a[Menu_module_css_1["default"].hide] = post.category !== category,
                        _a)) }, router.pathname.startsWith("/" + page) ? react_1["default"].createElement(link_1["default"], { href: "/" + page + "/" + post.category + "/" + post.slug }, post.title) : ''));
            }))));
    }
};
exports["default"] = Menu;
