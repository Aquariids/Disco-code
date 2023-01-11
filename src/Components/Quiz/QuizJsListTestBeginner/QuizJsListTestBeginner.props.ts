
interface data {
    question: string;
    code?: string;
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
        а последний элемент будет равен длине массива минус 1. Использование недопустимого индекса вернет undefined.`,
        code: `
        const array = [1,2,3];
        const result = array[3];
        `,
        answerOptions: [
            { answerText: '3', correct: false },
            { answerText: 'undefined', correct: true },
            { answerText: 'null', correct: false },
            { answerText: 'throw a SyntaxError',   correct: false },
        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        
        Метод Object.assign() используется для копирования значений всех собственных перечисляемых
        свойств из одного или более исходных объектов в целевой объект.
        После копирования он возвращает целевой объект.
        Свойства в целевом объекте будут перезаписаны свойствами исходного объекта, если они имеют одинаковые ключи.
        Более поздние свойства перезапишут ранние.
        `,
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

        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод indexOf() возвращает первый индекс, при котором данный элемент может быть найден в массиве или -1, если он отсутствует.
        `,
        code: `
        const array = [1,2,3,5];
        const result = array.indexOf(3);

        `,
        answerOptions: [
            { answerText: '-1', correct: false },
            { answerText: '2', correct: true },
            { answerText: '5', correct: false },
            { answerText: '3',   correct: false },

        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Что является идентичной записью result += value',
        about: `
        Оператор += (добавление присваивания) добавляет значение правого операнда к переменной и присваивает результат.
        `,
        code: `
        result += value

        `,
        answerOptions: [
            { answerText: 'result = ++value', correct: false },
            { answerText: 'result = value + value', correct: false },
            { answerText: 'result = value', correct: false },
            { answerText: 'result = result + value',   correct: true },
            { answerText: 'result = value++',   correct: false },


        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод JSON.stringify() преобразует объект в строку JSON.
        Метод JSON.parse() преобразует строку JSON, обратно в объект.
        JSON.parse() создает новый объект.
        `,
        code: `
        const o = {
            name:"Brendan"
        };
        const s = JSON.parse(JSON.stringify(o));
        const result = s === o;

        `,
        answerOptions: [
            { answerText: 'true', correct: false },
            { answerText: 'false', correct: true },


        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        (оператор вычитания) вычитает два операнда, производя их разницу.
        Он пытается преобразовать оба операнда в числа, если не может, он возвращает NaN.
        `,
        code: `
        const result = "2009" - "1995";

        `,
        answerOptions: [
            { answerText: 'undefined', correct: false },
            { answerText: '14', correct: true },
            { answerText: 'NaN', correct: false },
            { answerText: 'null', correct: false },
            { answerText: 'throw a TypeError', correct: false },



        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какой из операторов не является логическим?',
        about: `
        В JavaScript есть три логических оператора: && (логическое И),
        || (логическое ИЛИ) ! (логическое НЕ). | — побитовый оператор ИЛИ.
        `,
        code: `
        |
        &&
        ||
        !

        `,
        answerOptions: [
            { answerText: '|', correct: true },
            { answerText: '&&', correct: false },
            { answerText: '!', correct: false },
            { answerText: '||', correct: false },



        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод test() выполняет поиск соответствия между регулярным выражением и указанной строкой.
        Флаг i в регулярном выражении используется для нечувствительности к регистру.
        `,
        code: `
        const re = /java/i;
        const str = "JavaScript";
        const result = re.test(str);
        `,
        answerOptions: [
            { answerText: 'true', correct: true },
            { answerText: 'false', correct: false },



        ].sort(()=> Math.random() - 0.5)
    }

];


export const quizData2: data[] = [
    {
        question: 'Какое значение будет в result?',
        about: ` Метод isInteger() определяет, является ли переданное значение целым числом.`,
        code: `
        const value = 20.0;
        const result = Number.isInteger(value);
        `,
        answerOptions: [
            { answerText: 'false', correct: false },
            { answerText: 'true', correct: true },
        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Выберите корректный синтаксис комментариев в javaScript',
        about: `
        Однострочные комментарии начинаются с //. Любой текст между // и концом строки будет проигнорирован JavaScript (не будет выполнен).
        Многострочные комментарии начинаются с /* и заканчиваются */. Любой текст между /* и */ будет игнорироваться JavaScript.
        `,
        code: `
        Выберите корректный синтаксис комментариев в javaScript
        `,
        answerOptions: [
            { answerText: '<< Comment >>', correct: false },
            { answerText: '/* Comment */', correct: true },
            { answerText: '/ Comment /', correct: false },
            { answerText: '>> Comment <<',   correct: false },

        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод indexOf() возвращает первый индекс, при котором данный элемент может быть найден в массиве или -1, если он отсутствует.
        `,
        code: `
        const array = [1,2,3,5];
        const result = array.indexOf(3);

        `,
        answerOptions: [
            { answerText: '-1', correct: false },
            { answerText: '2', correct: true },
            { answerText: '5', correct: false },
            { answerText: '3',   correct: false },

        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Что является идентичной записью result += value',
        about: `
        Оператор += (добавление присваивания) добавляет значение правого операнда к переменной и присваивает результат.
        `,
        code: `
        result += value

        `,
        answerOptions: [
            { answerText: 'result = ++value', correct: false },
            { answerText: 'result = value + value', correct: false },
            { answerText: 'result = value', correct: false },
            { answerText: 'result = result + value',   correct: true },
            { answerText: 'result = value++',   correct: false },


        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод JSON.stringify() преобразует объект в строку JSON.
        Метод JSON.parse() преобразует строку JSON, обратно в объект.
        JSON.parse() создает новый объект.
        `,
        code: `
        const o = {
            name:"Brendan"
        };
        const s = JSON.parse(JSON.stringify(o));
        const result = s === o;

        `,
        answerOptions: [
            { answerText: 'true', correct: false },
            { answerText: 'false', correct: true },


        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        (оператор вычитания) вычитает два операнда, производя их разницу.
        Он пытается преобразовать оба операнда в числа, если не может, он возвращает NaN.
        `,
        code: `
        const result = "2009" - "1995";

        `,
        answerOptions: [
            { answerText: 'undefined', correct: false },
            { answerText: '14', correct: true },
            { answerText: 'NaN', correct: false },
            { answerText: 'null', correct: false },
            { answerText: 'throw a TypeError', correct: false },



        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какой из операторов не является логическим?',
        about: `
        В JavaScript есть три логических оператора: && (логическое И),
        || (логическое ИЛИ) ! (логическое НЕ). | — побитовый оператор ИЛИ.
        `,
        code: `
        |
        &&
        ||
        !

        `,
        answerOptions: [
            { answerText: '|', correct: true },
            { answerText: '&&', correct: false },
            { answerText: '!', correct: false },
            { answerText: '||', correct: false },



        ].sort(()=> Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод test() выполняет поиск соответствия между регулярным выражением и указанной строкой.
        Флаг i в регулярном выражении используется для нечувствительности к регистру.
        `,
        code: `
        const re = /java/i;
        const str = "JavaScript";
        const result = re.test(str);
        `,
        answerOptions: [
            { answerText: 'true', correct: true },
            { answerText: 'false', correct: false },



        ].sort(()=> Math.random() - 0.5)
    }

];







