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
require("../styles/globals.css");
var head_1 = require("next/head");
var react_yandex_metrika_1 = require("react-yandex-metrika");
var react_yandex_metrika_2 = require("react-yandex-metrika");
var router_1 = require("next/router");
router_1["default"].events.on('routeChangeComplete', function (url) {
    if (typeof window !== 'undefined')
        react_yandex_metrika_1["default"]('hit', url);
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getServerSideProps(_a) {
    var req = _a.req, res = _a.res;
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
// export function reportWebVitals(metric: any) {
//   console.log(metric);
// }
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var router = router_1.useRouter();
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("meta", { name: "yandex-verification", content: "a99ae512e4f1c330" }),
            React.createElement("meta", { name: "google-site-verification", content: "ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" }),
            React.createElement("link", { rel: 'preconnect', href: 'https://mc.yandex.ru' }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("meta", { property: 'og:url', content: "discocode.ru" + router.asPath }),
            React.createElement("meta", { property: 'og:locale', content: 'ru_RU' })),
        React.createElement(react_yandex_metrika_2.YMInitializer, { accounts: [], options: { webvisor: true, defer: true }, version: "2" }),
        React.createElement(Component, __assign({}, pageProps, { key: router.pathname }))));
}
exports["default"] = MyApp;
