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
exports.getServerSideProps = void 0;
var Layout_1 = require("../layout/Layout");
var react_1 = require("react");
var Articles_1 = require("../src/Components/Articles");
var index_module_css_1 = require("./index.module.css");
var head_1 = require("next/head");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getServerSideProps(_a) {
    var res = _a.res;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
            return [2 /*return*/, {
                    props: {}
                }];
        });
    });
}
exports.getServerSideProps = getServerSideProps;
var Home = function () {
    return (react_1["default"].createElement("div", { className: index_module_css_1["default"].body },
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, "DiscoCode - \u0443\u0440\u043E\u043A\u0438 \u043F\u043E javascript, typescript, react, nextjs"),
            react_1["default"].createElement("meta", { name: "google-site-verification", content: "ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" }),
            react_1["default"].createElement("meta", { name: "yandex-verification", content: "a99ae512e4f1c330" }),
            react_1["default"].createElement("meta", { name: 'description', content: '\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0430\u0442\u044C\u0438 \u043D\u0430  \u0440\u0430\u0437\u043D\u044B\u0435 \u0442\u0435\u043C\u044B \u043F\u043E javaScript, typeScript, reactjs, nextjs' }),
            react_1["default"].createElement("meta", { property: 'og:title', content: '\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0430\u0442\u044C\u0438 \u0438 \u0443\u0440\u043E\u043A\u0438 \u043D\u0430  \u0440\u0430\u0437\u043D\u044B\u0435 \u0442\u0435\u043C\u044B \u043F\u043E javaScript, typeScript, reactjs, nextjs' }),
            react_1["default"].createElement("meta", { property: 'og:description', content: '\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0430\u0442\u044C\u0438 \u043D\u0430  \u0440\u0430\u0437\u043D\u044B\u0435 \u0442\u0435\u043C\u044B \u043F\u043E javaScript, typeScript, reactjs, nextjs' }),
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
