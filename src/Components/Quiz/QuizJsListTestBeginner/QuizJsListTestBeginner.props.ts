
interface data {
    question: string;
    code: string;
    id: number;
    about:string;
    answerOptions: {
        answerText: string,
        correct: boolean
    }[]
}
export const quizData1: data[] = [
    
    {
        question: 'Какое значение будет в result?',
        about: `Массивы в js начинаются с нулевого индекса: Первый элемент имеет индекс 0,
                а послдений элемент будет равен длине массива минус 1. Использование недопустимого индекса вернет undefined`,
        code: `
        const array = [1,2,3];
        const result = array[3];
        `,
        id: 1,
        answerOptions: [
            { answerText: '3', correct: false },
            { answerText: 'undefined', correct: true },
            { answerText: 'null', correct: false },
            { answerText: 'throw a SyntaxError',   correct: false },
        ],
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        
        Метод Object.assign() используется для копирования значений всех собственных перечисляемых
        свойств из одного или более исходных объектов в целевой объект.
        После копирования он возвращает целевой объект.
        Свойства в целевом объекте будут перезаписаны свойствами исходного объекта, если они имеют одинаковые ключи.
        Свойства более поздних источников аналогичным образом перезапишут более ранние.
        `,
        id: 2,
        code: `
        const obj = Object.assign({
            name: "JavaScript"
            }, {
            name: "ECMAScript"
            }, {
            name: "LiveScript"
            });
            
            const result = obj.name;
        `,
        answerOptions: [
            { answerText: 'ECMAScript', correct: false },
            { answerText: 'JavaScript', correct: false },
            { answerText: 'undefined', correct: false },
            { answerText: 'LiveScript',   correct: true },
            { answerText: 'JavaScript,ECMAScript,LiveScript', correct: false },

        ],
    }

];


export const quizData2: data[] = [
    
    {
        question: 'Какое значение будет в result?',
        about: 'КОроче ты тут сделал так и сяк',
        code: `
        const array = [1,2,3];
        const result = array[3];
        `,
        id: 1,
        answerOptions: [
            { answerText: '3', correct: false },
            { answerText: 'undefined', correct: true },
            { answerText: 'null', correct: false },
            { answerText: 'throw a SyntaxError',   correct: false },
        ],
    },
    {
        question: 'Что yyyy в консоль?',
        id: 2,
        code: 'var name = "World"; console.warn("Hello, " + name + "!")',
        answerOptions: [
            { answerText: '111', correct: false },
            { answerText: 'false', correct: false },
            { answerText: 'fal223se', correct: false },
            { answerText: 'sss',   correct: true },
        ],
    }

];


