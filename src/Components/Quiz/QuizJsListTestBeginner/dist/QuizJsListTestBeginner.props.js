"use strict";
exports.__esModule = true;
exports.quizData2 = exports.quizData1 = void 0;
exports.quizData1 = [
    {
        question: 'Какое значение будет в result?',
        about: "\u041C\u0430\u0441\u0441\u0438\u0432\u044B \u0432 js \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u0441 \u043D\u0443\u043B\u0435\u0432\u043E\u0433\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0430: \u041F\u0435\u0440\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u043C\u0435\u0435\u0442 \u0438\u043D\u0434\u0435\u043A\u0441 0, \n        \u0430 \u043F\u043E\u0441\u043B\u0434\u0435\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u0435\u043D \u0434\u043B\u0438\u043D\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u043C\u0438\u043D\u0443\u0441 1. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0433\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0430 \u0432\u0435\u0440\u043D\u0435\u0442 undefined",
        code: "\n        const array = [1,2,3];\n        const result = array[3];\n        ",
        id: 1,
        answerOptions: [
            { answerText: '3', correct: false },
            { answerText: 'undefined', correct: true },
            { answerText: 'null', correct: false },
            { answerText: 'throw a SyntaxError', correct: false },
        ]
    },
    {
        question: 'Какое значение будет в result?',
        about: "\n        \n        \u041C\u0435\u0442\u043E\u0434 Object.assign() \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432\u0441\u0435\u0445 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u044F\u0435\u043C\u044B\u0445\n        \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0438\u0437 \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u0431\u043E\u043B\u0435\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0432 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u043E\u0431\u044A\u0435\u043A\u0442.\n        \u041F\u043E\u0441\u043B\u0435 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u043E\u0431\u044A\u0435\u043A\u0442.\n        \u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0432 \u0446\u0435\u043B\u0435\u0432\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430, \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0438\u043C\u0435\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u043A\u043B\u044E\u0447\u0438.\n        \u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0437\u0434\u043D\u0438\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0448\u0443\u0442 \u0431\u043E\u043B\u0435\u0435 \u0440\u0430\u043D\u043D\u0438\u0435.\n        ",
        id: 2,
        code: "\n        const obj = Object.assign({\n            name: \"JavaScript\"\n            }, {\n            name: \"ECMAScript\"\n            }, {\n            name: \"LiveScript\"\n            });\n            \n            const result = obj.name;\n        ",
        answerOptions: [
            { answerText: 'ECMAScript', correct: false },
            { answerText: 'JavaScript', correct: false },
            { answerText: 'undefined', correct: false },
            { answerText: 'LiveScript', correct: true },
            { answerText: 'JavaScript,ECMAScript,LiveScript', correct: false },
        ]
    }
];
exports.quizData2 = [
    {
        question: 'Какое значение будет в result?',
        about: 'КОроче ты тут сделал так и сяк',
        code: "\n        const array = [1,2,3];\n        const result = array[3];\n        ",
        id: 1,
        answerOptions: [
            { answerText: '3', correct: false },
            { answerText: 'undefined', correct: true },
            { answerText: 'null', correct: false },
            { answerText: 'throw a SyntaxError', correct: false },
        ]
    },
    {
        question: 'Что yyyy в консоль?',
        id: 2,
        code: 'var name = "World"; console.warn("Hello, " + name + "!")',
        answerOptions: [
            { answerText: '111', correct: false },
            { answerText: 'false', correct: false },
            { answerText: 'fal223se', correct: false },
            { answerText: 'sss', correct: true },
        ]
    }
];
