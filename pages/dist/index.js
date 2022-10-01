"use strict";
exports.__esModule = true;
var Layout_1 = require("../layout/Layout");
var react_1 = require("react");
var Articles_1 = require("../src/Components/Articles");
var index_module_css_1 = require("./index.module.css");
var head_1 = require("next/head");
var Home = function () {
    return (react_1["default"].createElement("div", { className: index_module_css_1["default"].body },
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, "DiscoCode - \u0443\u0440\u043E\u043A\u0438 \u043F\u043E javascript, typescript, react, nextjs"),
            react_1["default"].createElement("meta", { name: "google-site-verification", content: "ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" }),
            react_1["default"].createElement("meta", { name: "yandex-verification", content: "a99ae512e4f1c330" }),
            react_1["default"].createElement("meta", { name: 'description', content: 'Здесь вы можете найти разборы разных тем на  javaScript, typeScript, reactjs, nextjs' }),
            react_1["default"].createElement("meta", { property: 'og:title', content: '\u0423\u0440\u043E\u043A\u0438 \u0438 \u0440\u0430\u0437\u0431\u043E\u0440\u044B \u0440\u0430\u0437\u043D\u044B\u0445 \u0442\u0435\u043C \u043F\u043E  javascript, typescript, react, nextjs' }),
            react_1["default"].createElement("meta", { property: 'og:description', content: 'Здесь вы можете найти статьи на  разные темы по javaScript, typeScript, reactjs, nextjs' }),
            react_1["default"].createElement("meta", { property: 'og:type', content: 'article' })),
        react_1["default"].createElement("h1", null,
            " <Disco ",
            react_1["default"].createElement("span", { className: index_module_css_1["default"].code }, "Code/>")),
        react_1["default"].createElement("p", { className: index_module_css_1["default"].text },
            "\u0423\u0440\u043E\u043A\u0438 \u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 \u0441\u0430\u043C\u044B\u0435 \u0440\u0430\u0437\u043D\u044B\u0435 \u0442\u0435\u043C\u044B!",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("small", null, " P.S. \u0421\u0430\u0439\u0442 \u0432\u0441\u0435 \u0435\u0449\u0435 \u0432 \u0440\u0430\u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043A\u0435")),
        react_1["default"].createElement(Articles_1["default"], null)));
};
exports["default"] = Layout_1.withLayout(Home);
