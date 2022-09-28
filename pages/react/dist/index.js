"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getStaticProps = void 0;
var head_1 = require("next/head");
var react_1 = require("react");
var Layout_1 = require("../../layout/Layout");
var MenuReact_1 = require("../../src/Components/Menu/MenuReact/MenuReact");
var api_1 = require("../api/api");
var paths_1 = require("../api/paths");
var pageReact_module_css_1 = require("./pageReact.module.css");
var Home = function () {
    return (react_1["default"].createElement("div", { className: 'page_content' },
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435"),
            react_1["default"].createElement("meta", { name: "google-site-verification", content: "ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" }),
            react_1["default"].createElement("meta", { name: "yandex-verification", content: "a99ae512e4f1c330" }),
            react_1["default"].createElement("meta", { name: 'description', content: 'Уроки по react, reactjs, react статьи,' }),
            react_1["default"].createElement("meta", { property: 'og:title', content: '\u0423\u0440\u043E\u043A\u0438 \u043F\u043E react' }),
            react_1["default"].createElement("meta", { property: 'og:description', content: 'Уроки и разбор разных тем по javascript' }),
            react_1["default"].createElement("meta", { property: 'og:type', content: 'article' })),
        react_1["default"].createElement("h2", null, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435"),
        react_1["default"].createElement("span", null,
            "\u0417\u0434\u0435\u0441\u044C \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u0432\u0441\u0435 \u043C\u043E\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u043E ",
            react_1["default"].createElement("code", { className: pageReact_module_css_1["default"].react }, "React")),
        " ",
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("div", { className: 'page_body' },
            react_1["default"].createElement("div", { className: 'page_menu' },
                react_1["default"].createElement(MenuReact_1["default"], { sideBarMenuActive: false, mobileMenuActive: false })))));
};
exports["default"] = Layout_1.withLayout(Home);
exports.getStaticProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var posts;
    return __generator(this, function (_a) {
        posts = api_1.getAllPosts(paths_1.POSTS_PATH_REACT)
            .slice(0, 9)
            .map(function (post) { return post.meta; });
        return [2 /*return*/, {
                props: {
                    posts: posts
                }
            }];
    });
}); };
