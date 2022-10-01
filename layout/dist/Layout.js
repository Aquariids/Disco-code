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
exports.__esModule = true;
exports.withLayout = void 0;
var react_1 = require("react");
var Footer_1 = require("./Footer/Footer");
var Header_1 = require("./Header/Header");
var Sidebar_1 = require("./Sidebar/Sidebar");
var Layout_module_css_1 = require("./Layout.module.css");
var app_context_1 = require("../context/app.context");
var wrapper = Layout_module_css_1["default"].wrapper, header = Layout_module_css_1["default"].header, sidebar = Layout_module_css_1["default"].sidebar, footer = Layout_module_css_1["default"].footer, body = Layout_module_css_1["default"].body, content = Layout_module_css_1["default"].content;
var classnames_1 = require("classnames");
var router_1 = require("next/router");
var MobileButton_1 = require("../src/Components/UI/MobileButton/MobileButton");
var MenuReact_1 = require("../src/Components/Menu/MenuReact/MenuReact");
var Layout = function (_a) {
    var _b, _c;
    var children = _a.children;
    var router = router_1.useRouter();
    var _d = react_1.useState(false), mobile = _d[0], setMobile = _d[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames_1["default"](wrapper, (_b = {},
                _b[Layout_module_css_1["default"].wrapper2] = router.asPath.length > 18,
                _b)) },
            React.createElement(Header_1["default"], { className: header }),
            React.createElement(Sidebar_1["default"], { className: sidebar }),
            React.createElement("div", { className: body },
                React.createElement("div", { className: content },
                    children,
                    React.createElement("div", { className: classnames_1["default"]('modal', (_c = {},
                            _c['modaltrue'] = mobile === true,
                            _c)) }, router.pathname.startsWith('/react') ? React.createElement(React.Fragment, null,
                        React.createElement(MenuReact_1["default"], { sideBarMenuActive: false, mobileMenuActive: true, setMobile: setMobile, mobile: mobile })) : React.createElement(React.Fragment, null)),
                    React.createElement(MobileButton_1["default"], { mobile: mobile, setMobile: setMobile }))),
            React.createElement(Footer_1["default"], { className: footer }))));
};
exports.withLayout = function (Component) {
    return function withLayoutComponent(props) {
        return (React.createElement(app_context_1.AppContextProvider, { posts: props.posts },
            React.createElement(Layout, __assign({}, props),
                React.createElement(Component, __assign({}, props)))));
    };
};
