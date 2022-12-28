"use strict";
exports.__esModule = true;
var react_1 = require("react");
var app_context_1 = require("../../../../context/app.context");
var DropdownMenuLinks_1 = require("../DropdownMenuLinks");
var DropdownMenuNodeJs = function () {
    var AllThemePosts = react_1.useContext(app_context_1.AppContext).AllThemePosts;
    var posts_Basic_Node_Js = AllThemePosts.posts_Basic_Node_Js;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(DropdownMenuLinks_1["default"], { posts: posts_Basic_Node_Js, title: "\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 nodeJs", category: 'basic-node-js', page: 'node-js' })));
};
exports["default"] = DropdownMenuNodeJs;
