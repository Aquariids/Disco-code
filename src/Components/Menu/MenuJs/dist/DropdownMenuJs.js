"use strict";
exports.__esModule = true;
var react_1 = require("react");
var app_context_1 = require("../../../../context/app.context");
var DropdownMenuLinks_1 = require("../DropdownMenuLinks");
var DropdownMenuJs = function () {
    var AllThemePosts = react_1.useContext(app_context_1.AppContext).AllThemePosts;
    var posts_Basic_Js = AllThemePosts.posts_Basic_Js, posts_Advanced_Js = AllThemePosts.posts_Advanced_Js, posts_Algorithms_Js = AllThemePosts.posts_Algorithms_Js, posts_Practice_Js = AllThemePosts.posts_Practice_Js, posts_Under_The_Hood_Js = AllThemePosts.posts_Under_The_Hood_Js, posts_Interview_Js = AllThemePosts.posts_Interview_Js;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(DropdownMenuLinks_1["default"], { posts: posts_Basic_Js, category: "basic-js", title: "\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 javaScript", page: 'js' }),
        react_1["default"].createElement(DropdownMenuLinks_1["default"], { posts: posts_Advanced_Js, category: "advanced-js", title: "\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 JavaScript", page: 'js' }),
        react_1["default"].createElement(DropdownMenuLinks_1["default"], { posts: posts_Algorithms_Js, title: "\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B", category: 'algorithms-js', page: 'js' }),
        react_1["default"].createElement(DropdownMenuLinks_1["default"], { posts: posts_Practice_Js, title: "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 & Webpack", category: 'practice-js', page: 'js' }),
        react_1["default"].createElement(DropdownMenuLinks_1["default"], { posts: posts_Under_The_Hood_Js, title: "JavaScript \u043F\u043E\u0434 \u043A\u0430\u043F\u043E\u0442\u043E\u043C", category: 'under-the-hood-js', page: 'js' }),
        react_1["default"].createElement(DropdownMenuLinks_1["default"], { posts: posts_Interview_Js, title: "\u0421\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435", category: 'interview-js', page: 'js' })));
};
exports["default"] = DropdownMenuJs;
