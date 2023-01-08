
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


