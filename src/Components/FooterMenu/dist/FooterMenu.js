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
var FooterMenu_module_css_1 = require("./FooterMenu.module.css");
var classnames_1 = require("classnames");
var router_1 = require("next/router");
var link_1 = require("next/link");
var link_svg_1 = require("../../../public/link.svg");
var date_fns_1 = require("date-fns");
var footer = FooterMenu_module_css_1["default"].footer, content = FooterMenu_module_css_1["default"].content;
var FooterMenu = function (_a) {
    var _b;
    var props = __rest(_a, []);
    var router = router_1.useRouter();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", __assign({ className: classnames_1["default"](footer, (_b = {},
                _b[FooterMenu_module_css_1["default"].footer2] = router.asPath.length > 18,
                _b)) }, props),
            React.createElement("div", { className: content },
                React.createElement("div", { className: FooterMenu_module_css_1["default"].nav },
                    React.createElement("h3", null, " \u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443 "),
                    React.createElement("ul", { style: { listStyleType: 'none' } },
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: '/js/basicjs/browserMethodsAndConsole' }, "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 javaScript")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: '/js/advancedjs/json' }, "\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 javaScript")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: '/js/algorithmsjs/binarySearch' }, "\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B javaScript")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: '/react/basicreact/ReactSinglePageApp' }, " \u0411\u0430\u0437\u043E\u0432\u044B\u0439 React ")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: '/ts/basicts/installation' }, "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 typescript")))),
                React.createElement("div", { className: FooterMenu_module_css_1["default"].social },
                    React.createElement("h3", null, " \u0413\u0434\u0435 \u043C\u0435\u043D\u044F \u043D\u0430\u0439\u0442\u0438 "),
                    React.createElement("ul", { style: { listStyleType: 'none' } },
                        React.createElement("li", null,
                            React.createElement("a", { className: FooterMenu_module_css_1["default"].link, href: "mailto:favoritePonyville@gmail.com" },
                                "FavoritePonyville@gmail.com ",
                                React.createElement(link_svg_1["default"], null),
                                " ")),
                        React.createElement("li", null,
                            React.createElement("a", { className: FooterMenu_module_css_1["default"].link, target: "_blank", href: 'https://github.com/Aquariids/Disco-code' },
                                "Github ",
                                React.createElement(link_svg_1["default"], null),
                                " ")),
                        React.createElement("li", null,
                            React.createElement("a", { className: FooterMenu_module_css_1["default"].link, target: "_blank", href: 'https://t.me/Aquariida' },
                                "\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C ",
                                React.createElement(link_svg_1["default"], null),
                                " ")))))),
        React.createElement("div", { className: FooterMenu_module_css_1["default"].copyright },
            React.createElement("span", null, "\u00A9 2022 - " + date_fns_1.format(new Date(), 'yyyy') + " \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0427\u0435\u0440\u043D\u043E\u043C\u0430\u0448\u0435\u043D\u0446\u0435\u0432"))));
};
exports["default"] = FooterMenu;
