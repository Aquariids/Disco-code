"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("highlight.js/styles/default.css");
var highlight_js_1 = require("highlight.js");
var javascript_1 = require("highlight.js/lib/languages/javascript");
var QuizJs_module_scss_1 = require("./QuizJs.module.scss");
var classnames_1 = require("classnames");
highlight_js_1["default"].registerLanguage('javascript', javascript_1["default"]);
var QuizJs = function (_a) {
    var _b;
    var data = _a.data;
    var _c = react_1.useState(0), currentQuestion = _c[0], setCurrentQuestion = _c[1];
    var _d = react_1.useState(false), showEndScore = _d[0], setShowEndScore = _d[1];
    var _e = react_1.useState(1), score = _e[0], setScore = _e[1];
    var _f = react_1.useState(0), rigthAnswers = _f[0], setRigthAnswers = _f[1];
    var _g = react_1.useState(true), disabledBtn = _g[0], setDisabledBtn = _g[1];
    var btns = document.querySelectorAll("." + QuizJs_module_scss_1["default"].btn);
    var percent = Math.floor(rigthAnswers / data.length * 100);
    function percentForAnswer() {
        if (percent === 100) {
            return "Отлично, можешь собой гордиться!";
        }
        else if (percent > 55 && percent != 100) {
            return " <div class='result-text'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>";
        }
        else if (percent < 55 && percent != 0 && percent > 30) {
            return "<div class='result-text'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>";
        }
        else if (percent < 30 && percent != 0) {
            return "<div class='result-text'> <span class='bad'>Попытка не пытка!</span> </div>";
        }
        else if (percent === 0) {
            return "<div class='result-text'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>";
        }
    }
    var next = function () {
        btns.forEach(function (btn) {
            btn.style.transition = '0s';
            btn.classList.remove(QuizJs_module_scss_1["default"].correctly);
            btn.classList.remove(QuizJs_module_scss_1["default"].wrong);
            btn.disabled = false;
        });
        setDisabledBtn(!disabledBtn);
        var nextQuestion = currentQuestion + 1;
        if (nextQuestion < data.length) {
            setScore(score + 1);
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowEndScore(true);
        }
    };
    var handleAnswerClick = function (isCorrect, e) {
        var btns = document.querySelectorAll("." + QuizJs_module_scss_1["default"].btn);
        setDisabledBtn(!disabledBtn);
        if (isCorrect === true) {
            setRigthAnswers(rigthAnswers + 1);
            e.target.classList.add(QuizJs_module_scss_1["default"].correctly);
            btns.forEach(function (btn) {
                btn.disabled = true;
            });
        }
        else {
            btns.forEach(function (btn) {
                btn.disabled = true;
                data[currentQuestion].answerOptions.map(function (item) {
                    for (var key in item) {
                        if (item[key] === true) {
                            if (btn.textContent === item.answerText) {
                                btn.classList.add(QuizJs_module_scss_1["default"].correctly);
                            }
                        }
                    }
                });
            });
            e.target.classList.add(QuizJs_module_scss_1["default"].wrong);
            //     data[currentQuestion].answerOptions.map((btn) => {
            //         console.log(Object.keys(btn));
            // });
        }
    };
    react_1.useEffect(function () {
        highlight_js_1["default"].initHighlighting();
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, showEndScore ? (react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].quiz },
        react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].quiz__content },
            react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].end },
                rigthAnswers,
                " \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430 \u0438\u0437 ",
                data.length,
                " "),
            react_1["default"].createElement("div", { className: classnames_1["default"]((_b = {},
                    _b[QuizJs_module_scss_1["default"].nice] = percent === 100,
                    _b[QuizJs_module_scss_1["default"].middle] = percent > 55 && percent != 100,
                    _b)) }, percentForAnswer())))) :
        react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].quiz },
            react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].quiz__content },
                react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].quiz__score }, score + "/" + data.length),
                react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].quest },
                    " ",
                    data[currentQuestion].question),
                react_1["default"].createElement("pre", null,
                    react_1["default"].createElement("code", { className: 'hljs language-js' },
                        " ",
                        data[currentQuestion].code)),
                react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].answers }, data[currentQuestion].answerOptions.map(function (answerOptions, index) {
                    return react_1["default"].createElement("button", { className: QuizJs_module_scss_1["default"].btn, onClick: function (e) { return handleAnswerClick(answerOptions.correct, e); }, key: index }, answerOptions.answerText);
                }))),
            react_1["default"].createElement("div", { className: QuizJs_module_scss_1["default"].next },
                react_1["default"].createElement("button", { disabled: disabledBtn, onClick: next, className: QuizJs_module_scss_1["default"].next__btn }, " \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C ")))));
};
exports["default"] = QuizJs;
