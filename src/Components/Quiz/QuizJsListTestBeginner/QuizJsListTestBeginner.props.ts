
interface data {
    question: string;
    code?: string;
    about: string;
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
            { answerText: 'throw a SyntaxError', correct: false },
        ].sort(() => Math.random() - 0.5)
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
            { answerText: 'LiveScript', correct: true },
            { answerText: 'JavaScript,ECMAScript,LiveScript', correct: false },

        ].sort(() => Math.random() - 0.5)
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
            { answerText: '3', correct: false },

        ].sort(() => Math.random() - 0.5)
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
            { answerText: 'result = result + value', correct: true },
            { answerText: 'result = value++', correct: false },


        ].sort(() => Math.random() - 0.5)
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


        ].sort(() => Math.random() - 0.5)
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



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какой из операторов не является логическим?',
        about: `
        В JavaScript есть четыре логических оператора: && (логическое И),
        || (логическое ИЛИ) ! (логическое НЕ). | — побитовый оператор ИЛИ.
        ?? (Оператор нулевого слияния).
        `,
        code: `
        |
        &&
        ||
        !
        ??

        `,
        answerOptions: [
            { answerText: '|', correct: true },
            { answerText: '&&', correct: false },
            { answerText: '!', correct: false },
            { answerText: '||', correct: false },
            { answerText: '??', correct: false },




        ].sort(() => Math.random() - 0.5)
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



        ].sort(() => Math.random() - 0.5)
    }

].sort(() => Math.random() - 0.5);

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
        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Выберите корректный синтаксис комментариев в javaScript',
        about: `
        Однострочные комментарии начинаются с //. Любой текст между // и концом строки будет проигнорирован JavaScript (не будет выполнен).
        Многострочные комментарии начинаются с /* и заканчиваются */. Любой текст между /* и */ будет игнорироваться JavaScript.
        `,
        code: `
        Комментарии в javaScript;
        `,
        answerOptions: [
            { answerText: '<< Comment >>', correct: false },
            { answerText: '/* Comment */', correct: true },
            { answerText: '/ Comment /', correct: false },
            { answerText: '>> Comment <<', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Объект arguments — это объект типа Array, соответствующий аргументам, переданным функции.
        arguments.length — это ссылка на количество аргументов, переданных функции.
        `,
        code: `
        const func = function(a,b) {
            return arguments.length;
        };
        const result = func(4,3,2,1);
        `,
        answerOptions: [
            { answerText: '2', correct: false },
            { answerText: '4', correct: true },
            { answerText: '0', correct: false },
            { answerText: 'undefined', correct: false },
        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Инкремент увеличивает(добавляет единицу) свой операнд и возвращает значение.
        Постфиксная форма value++ - сначала возвращает старое значение(перед увеличением).
        Префиксная форма ++value - сразу возвращает новое значение(после увеличения).
        `,
        code: `
        let value = 95;
        const result = value++;
        `,
        answerOptions: [
            { answerText: '-95', correct: false },
            { answerText: '97', correct: false },
            { answerText: '96', correct: false },
            { answerText: '95', correct: true },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Свойство length возвращает длину строки(количество символов).
        `,
        code: `
        const str = "JavaScript";
        const result = str.length;
        `,
        answerOptions: [
            { answerText: '11', correct: false },
            { answerText: '10', correct: true },
            { answerText: '2', correct: false },
            { answerText: '9', correct: false },
            { answerText: 'undefined', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'JavaScript чувствителен к регистру?',
        about: `
        JavaScript чувствителен к регистру yes и yES разные переменные.
        `,
        code: `
        let = yes;
        let = yES;

        `,
        answerOptions: [
            { answerText: 'Да', correct: true },
            { answerText: 'Нет', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        === (строгое равенство) сравнивает значения без преобразования типов.
        Логическое || (ИЛИ) вернет первую истину(true).
        Приоритет === (строгого равенста) выше чем у логического || (ИЛИ).
        Сначала мы получим (5 === "5") = false. После (false || 1) = 1.
        `,
        code: `
        const result = 5 === "5" || 1;

        `,
        answerOptions: [

            { answerText: '5', correct: false },
            { answerText: 'false', correct: false },
            { answerText: '1', correct: true },
            { answerText: '"5"', correct: false },
            { answerText: 'true', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое имя является недопустимым?',
        about: `
        Имена переменных могут содержать буквы, цифры и символы $ или "_".
        Первый символ не может быть цифрой! Дефис "-" не разрешен.
        `,
        code: `
        const 2result;
        const r1e2s3u4l5t;
        const $result;
        const _2result;
        const _result;



        `,
        answerOptions: [

            { answerText: 'r1e2s3u4l5t', correct: false },
            { answerText: '$result', correct: false },
            { answerText: '2result', correct: true },
            { answerText: '_result', correct: false },
            { answerText: '_2result', correct: false },



        ].sort(() => Math.random() - 0.5)
    },

].sort(() => Math.random() - 0.5);

export const quizData3: data[] = [
    {
        question: 'Какое значение будет в result?',
        about: ` && (логическое И) возвращает левый операнд, если его можно преобразовать в false, иначе вернет правый операнд.`,
        code: `
        const func = () => {
            return 2009;
        };
        const result = 262 && func();
        `,
        answerOptions: [
            { answerText: '262', correct: false },
            { answerText: '2009', correct: true },
            { answerText: 'false', correct: false },
            { answerText: 'true', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: ` Объект Set позволяет хранить уникальные значения любого типа, будь то примитивные значения или ссылки на объекты.
        Значение в наборе может встречаться только один раз, что значит что каждое значение уникально в коллекции Set. Значение 1 уже существует внутри.`,
        code: `
        const value = new Set([1, 2, 3]);
        value.add(1);
        const result = value.size;
        `,
        answerOptions: [
            { answerText: '2', correct: false },
            { answerText: '3', correct: true },
            { answerText: '4', correct: false },
            { answerText: 'undefined', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: ` 
        ~~(побитовое НЕ) инвертирует все биты в операнде и возвращает число. Он удаляет все после десятичной точки. 
        Это работает независимо от того, являются ли операнды числами или строками, результатом является число. 
        Используется как быстрая замена Math.floor() с положительными числами. При отрицательных Math.floor(-12.34) = 13 будет округлять до меньшего целого.
        `,
        code: `
        const result = ~~(12.34);
        `,
        answerOptions: [
            { answerText: '-12', correct: false },
            { answerText: '12', correct: true },
            { answerText: '12.34', correct: false },
            { answerText: '-12.34', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод split() разбивает объект String на массив строк, разделяя строку на подстроки, используя указанную строку-разделитель, чтобы определить, где делать каждое разбиение. 
        `,
        code: `
        const result = "1_2_3".split("_");
        `,
        answerOptions: [
            { answerText: "[ '1', '2', '3' ]", correct: true },
            { answerText: '123', correct: false },
            { answerText: '[ 1, 2, 3 ]', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result',
        about: `
        Метод reduce() применяет функцию к аккумулятору и каждому элементу массива(слева направо), чтобы уменьшить его до одного значения.
        `,
        code: `
        const f = (r,v) => r + v;
        const result = [1,2,3].reduce(f,0);
        // Идентичная запись
        const result = [1,2,3].reduce((acc,current) => { 
            return acc + current;
        });
        `,
        answerOptions: [
            { answerText: "6", correct: true },
            { answerText: '0', correct: false },
            { answerText: '5', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result',
        about: `
        Метод shift() удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз.`,
        code: `
        const array = [1, 2, 3];
        array.shift();
        const result = array;
        `,
        answerOptions: [
            { answerText: "[2, 3 ]", correct: true },
            { answerText: '[undefined, 1, 2, 3]', correct: false },
            { answerText: '[1, 2, 3]', correct: false },
            { answerText: 'throw a TypeError', correct: false },
        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result',
        about: `
        Условный тернарный оператор - единственный операторв javaScript который принимает три операнда.
        Синтаксис: условие ? выражение1: выражение2. Если условие true, то вернет выражение1 иначе выражение2.
        `,
        code: `
        const isTrue = false;
        const result = isTrue ? 2009: 262;
        `,
        answerOptions: [
            { answerText: "262", correct: true },
            { answerText: '2009', correct: false },
        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Как преобразовать объект в строку JSON?',
        about: `
        Метод JSON.stringify() преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.
        `,
        code: `
        JSON.parse();
        JSON.valueOf();
        JSON.stringify();
        JSON.toString();
        `,
        answerOptions: [
            { answerText: 'JSON.stringify()', correct: true },
            { answerText: 'JSON.valueOf()', correct: false },
            { answerText: 'JSON.toString()', correct: false },
            { answerText: 'JSON.parse()', correct: false },

        ].sort(() => Math.random() - 0.5)
    },

].sort(() => Math.random() - 0.5);

export const quizData4: data[] = [
    {
        question: 'Какое значение будет в result?',
        about: ` "Экспоненциальный оператор - оператор возведения в степень. Мы должны слева от оператора ** указать число, которое хотим возвести в квадрат,
         а справа от оператора ** мы должны написать число которое обозначает вторую степень (т. е. квадрат).`,
        code: `
        const result = 3 ** 3;
        `,
        answerOptions: [
            { answerText: '6', correct: false },
            { answerText: '27', correct: true },
            { answerText: '12', correct: false },
            { answerText: '9', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: ` 
        Логический оператор НЕ (!) (логическое отрицание) меняет логическое значение операнда с true в false и наоборот.
        Значение null представляет намеренное отсутствие объектного значения и может быть преобразованно в false. !null преобразуется в true, !!null преобразуется в false.
         `,
        code: `
        const result = !!null;
        `,
        answerOptions: [
            { answerText: 'true', correct: false },
            { answerText: 'false', correct: true },
            { answerText: 'NaN', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: ` 
        Math.round() возвращает число, округлённое к ближайшему целому.
        `,
        code: `
        const result = Math.round(19.95);

        `,
        answerOptions: [
            { answerText: '20', correct: true },
            { answerText: '19', correct: false },
            { answerText: 'NaN', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: ` 
        Свойство Math.PI представляет отношение длины окружности круга к его диаметру, приблизительно равное 3,14159 - (Число ПИ).
        Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
        `,
        code: `
        const value = Math.PI;
        const result = Math.ceil(value);
        `,
        answerOptions: [
            { answerText: '4', correct: true },
            { answerText: '3', correct: false },
            { answerText: 'NaN', correct: false },
            { answerText: 'undefined', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: ` while цикл который будет выполняться пока улсовие не станет ложным(false). do...while тот же цикл, только блок do выполнится как мининум один раз, даже если условие ложно(false).
        `,
        code: `
        let value = 0;
        do {
            value += 1;
        } while (false);
        const result = value;
        `,
        answerOptions: [
            { answerText: '1', correct: true },
            { answerText: '0', correct: false },
            { answerText: '10', correct: false },
            { answerText: 'throw a ReferenceError', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Что не является примитивным типом данных в javascript?',
        about: `
        Примитивный(ое) тип данных(значение) - это данные которые не являются объектом и не имеют методов. В javaScript есть 7 примитивных типов данных:
        string, number, boolean, null, undefined, symbol, bigInt.
        `,
        code: `
        string
        boolean
        char
        number
        undefined
        
        `,
        answerOptions: [
            { answerText: 'char', correct: true },
            { answerText: 'boolean', correct: false },
            { answerText: 'string', correct: false },
            { answerText: 'number', correct: false },
            { answerText: 'undefined', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод join([separator]) объединяет все элементы массива в строку и возвращает эту строку, separator указывает строку для разделения каждой пары соседних элементов массива.
        Если этот параметр опущен, элементы массива объединяются запятой.
        `,
        code: `
        const array = [1,2,3];
        const result = array.join();
        `,
        answerOptions: [
            { answerText: '123', correct: false },
            { answerText: '1,2,3', correct: true },
            { answerText: '1 2 3', correct: false },
            { answerText: '6', correct: false },
            { answerText: 'throw a TypeError', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about: `
        Метод charAt() возвращает новую строку из одного символа расположенного по указанному индексу.
        `,
        code: `
        const text = 'ECMAScript';
        const result = text.charAt(1);
        `,
        answerOptions: [
            { answerText: 'E', correct: false },
            { answerText: 'C', correct: true },
            { answerText: 'null', correct: false },
            { answerText: 'M', correct: false },
            { answerText: 'undefined', correct: false },

        ].sort(() => Math.random() - 0.5)
    },

].sort(() => Math.random() - 0.5);

export const quizData5: data[] = [
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод replace() возвращает новую строку, в которой некоторые или все совпадения шаблона заменены фрагментом который мы передаем .
        Шаблон может быть строкой или регулярным выражением, а заменой может быть строка или функция, вызываемая для каждого совпадения.
        Чтобы выполнить глобальный поиск и замену, в регулярное выражение добавляется флаг g.
        `,
        code: `
        const str = "JavaScript";
        const result = str.replace(/a/g, "e");
        `,
        answerOptions: [
            { answerText: 'JeveScript', correct: true },
            { answerText: 'JevaScript', correct: false },
            { answerText: 'ECMAScript', correct: false },
            { answerText: 'JaveScript', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Оператор typeof возвращает строку, указывающую тип переданного значения. Для истинных или ложных значений он вернет логичиский тип "boolean".
        `,
        code: 
        `
        const result = typeof false;
        `,
        answerOptions: [
            { answerText: '"boolean"', correct: true },
            { answerText: 'false', correct: false },
            { answerText: '"null"', correct: false },
            { answerText: 'true', correct: false },
            { answerText: '"number"', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Переменные объявленные с помощью var допускают повторного объявления. 
        `,
        code: 
        `
        var prop = 1;
        var prop = 2;
        const result = prop;
        `,
        answerOptions: [
            { answerText: '3', correct: false },
            { answerText: '1', correct: false },
            { answerText: 'null', correct: false },
            { answerText: '2', correct: true },
            { answerText: 'throw a SyntaxError', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Оператор instanceof позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования(присутствует ли объект constructor.prototype в цепочке прототипов object).
        `,
        code: 
        `
        const array = [1, 2, 3];
        const result = array instanceof Array;
        `,
        answerOptions: [
            { answerText: 'throw a TypeError', correct: false },
            { answerText: 'false', correct: false },
            { answerText: 'true', correct: true },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Деструктурирующее присваивание – это специальный синтаксис, 
        который позволяет нам «распаковать» значения массивов или объектов в отдельные переменные.
        `,
        code: `
        let numbers = [262, 2009, 95];
        let [first, second, third] = numbers;
        const result = second;
        `,
        answerOptions: [
            { answerText: 'undefined', correct: false },
            { answerText: '3', correct: false },
            { answerText: '95', correct: false },
            { answerText: '262', correct: false },
            { answerText: '2009', correct: true },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        slice() - возвращает(вырезает) часть строки или массива.
        Принимает два аргумента: 1 - это с какой позиции вырезаем, а 2 - где вырезание заканчивается. Исходный массив или строка, не будут изменены.
        join() - объединяет все элементы массива в строку и возвращает её.
        `,
        code: `
        const a = [1, 2, 3, 4, 5];
        const sliced = a.slice(1, a.length - 1);
        const result = sliced.join("");
        `,
        answerOptions: [
            { answerText: '23', correct: false },
            { answerText: '3', correct: false },
            { answerText: '2345', correct: false },
            { answerText: '34', correct: false },
            { answerText: '234', correct: true },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какой из методов позволяет получить последний элемент массива?',
        about:
        ` 
        Метод pop() удаляет последний элемент из массива и возвращает этот элемент. Этот метод изменяет длину массива.
        `,
        code: `
        Array.unshift()
        Array.shift()
        Array.push()
        Array.pop()
        `,
        answerOptions: [
            { answerText: '.unshift()', correct: false },
            { answerText: '.shift()', correct: false },
            { answerText: '.push()', correct: false },
            { answerText: '.pop()', correct: true },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод toPrecision() возвращает строку, представляющую объект Number с указанной точностью.
        Метод toFixed() форматирует число, используя запись с фиксированной точкой. toFixed(n) предоставляет длину n после точки.
        toPrecision(x) предоставляет x общую длину строки.
        `,
        code: `
        const number = 12.3456;
        const result = number.toPrecision(2);
        `,
        answerOptions: [
            { answerText: '12.3', correct: false },
            { answerText: '12.34', correct: false },
            { answerText: '12.35', correct: false },
            { answerText: '12.4', correct: false },
            { answerText: '12', correct: true },

        ].sort(() => Math.random() - 0.5)
    },

].sort(() => Math.random() - 0.5);

export const quizData6: data[] = [
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод slice() возвращает(вырезает) часть строки или массива без изменения исходного.
        Принимает два аргумента: 1 - это с какой позиции вырезаем, а 2 - где вырезание заканчивается.
        Если второе значение отрицательное оно обрабатывается как
        strLength(длина строки) + endIndex(второй аргумент) символ по этому индексу не будет включен. 
        `,
        code: `
        const result = "ECMAScript".slice(1, -1);
        `,
        answerOptions: [
            { answerText: 'CMAScrip', correct: true },
            { answerText: 'ECMAScrip', correct: false },
            { answerText: 'CM', correct: false },
            { answerText: 'C', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод push() добавляет один или несколько элементов в конец массива и возвращает его новую длину.
        Метод pop() удаляет последний элемент и возвращает его. Этот метод изменяет длину массива.
        `,
        code: 
        `
        const array = [1, 2, 3];
        array.push(4);
        array.pop();
        const result = array.length;
        `,
        answerOptions: [
            { answerText: '3', correct: true },
            { answerText: '2', correct: false },
            { answerText: '4', correct: false },
            { answerText: '5', correct: false },
            { answerText: 'undefined', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод Math.abs() возвращает модуль числа, то есть из отрицательного числа делает положительное.
        `,
        code: `
        const value = -2009;
        const result = Math.abs(value);
        `,
        answerOptions: [
            { answerText: '2009', correct: true },
            { answerText: '-2009', correct: false },
            { answerText: '1', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Оператор + конвертирует булевые значения в число. true в 1, а false в 0. 
        `,
        code: 
        `
        const result = true + true;
        `,
        answerOptions: [
            { answerText: '2', correct: true },
            { answerText: '1', correct: false },
            { answerText: '0', correct: false },
            { answerText: 'NaN', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод substr() - Это устаревший метод. Возвращает часть строки между начальным индексом и количеством символов после него.
        Метод substring() возвращает часть строки между начальным и конечным индексами или до конца строки.
        Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
        substr = avaS
        substring = ava
        ищем ava в avaS - получаем индекс 0.
        `,
        code: `
        const str = 'javaScript';
        const substr = str.substr(1, 4);
        const substring = str.substring(1, 4);
        const result = substr.indexOf(substring);
        `,
        answerOptions: [
            { answerText: '0', correct: true },
            { answerText: '4', correct: false },
            { answerText: '1', correct: false },
            { answerText: '-1', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод push() добавляет один или несколько элементов в конец массива и возвращает новую длину массива.
        Метод pop() удаляет последний элемент и возвращает этот элемент.
        `,
        code: `
        const a = [1, 2, 3, 4, 5];
        const result = a.push(6) - a.pop();
        `,
        answerOptions: [
            { answerText: '0', correct: true },
            { answerText: 'NaN', correct: false },
            { answerText: '-1', correct: false },
            { answerText: '6', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Оператор new создаёт экземпляр объекта, встроенного или определённого пользователем, имеющего конструктор.
        Это отдельные экземпляры они между собой не равны.
        `,
        code: `
        const User = function (name) {
            this.name = name;
        };
        
        const user1 = new User("Диман");
        const user2 = new User("Диман");
        const result = user1 === user2;
        
        `,
        answerOptions: [
            { answerText: 'false', correct: true },
            { answerText: 'true', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод every() проверяет, все ли элементы массива подходят под условие переданной функции. Если да, то нам вернет true, иначе false. 
        `,
        code: `
        const check = (value) => value === 2;
        const result = [1, 2, 3].every(check);
        `,
        answerOptions: [
            { answerText: 'false', correct: true },
            { answerText: 'true', correct: false },


        ].sort(() => Math.random() - 0.5)
    },

].sort(() => Math.random() - 0.5);

export const quizData7: data[] = [
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод concat() используется для объединения двух или более массивов.
        Этот метод не изменяет исходный массив, он создает новый.
        `,
        code: `
        const array = [1, 2, 3];
        array.concat(4, 5, 6);
        const result = array;
        `,
        answerOptions: [
            { answerText: '[ 1, 2, 3, 4, 5, 6 ]', correct: false },
            { answerText: '[ 1, 2, 3 ]', correct: true },
            { answerText: '[ 4, 5, 6 ]', correct: false },
            { answerText: '[ 1, 2, 3,4 ]', correct: false },
            { answerText: 'throw a TypeError', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Декремент уменьшает(отнимает единицу) свой операнд и возвращает значение.
        Постфиксная форма value-- - сначала возвращает старое значение(перед уменьшением).
        Префиксная форма --value - сразу возвращает новое значение(после уменьшения).
        `,
        code: `
        let value = 95;
        const result = value--;
        `,
        answerOptions: [
            { answerText: '95', correct: true },
            { answerText: '94', correct: false },
            { answerText: 'undefined', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод Math.sqrt() возвращает квадратный корень числа. Если число отрицательное, то вернётся NaN.

        P.S. Че за тупые вопросы, кто это писал?))
        `,
        code: `
        const result = Math.sqrt(4);
        `,
        answerOptions: [
            { answerText: '2', correct: true },
            { answerText: '8', correct: false },
            { answerText: '4', correct: false },
            { answerText: '16', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Логический Опертор || (ИЛИ) возвращает первую истину.
        Логический оператор && (И) вернет первое ложное значение. Так же логическое && имеет больший приоритет и будет первым выполняться чем ||.
        1 && false  вренет false.
        0 || false вернет false.
        false || "Аниме" вернет "Аниме".
        `,
        code: `
        const result = 0 || 1 && false || "Аниме";
        `,
        answerOptions: [
            { answerText: '"Аниме"', correct: true },
            { answerText: '0', correct: false },
            { answerText: 'false', correct: false },
            { answerText: 'undefined', correct: false },
            { answerText: '1', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод reverse() переворачивает массив на месте и возвращает тот же массив.
        Первый элемент массива становится последним, а последний становится первым.
        `,
        code: `
        const array = [1, 2, 3];
        const copy = array.reverse();
        const result = copy === array;
        `,
        answerOptions: [
            { answerText: 'true', correct: true },
            { answerText: 'false', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Опертор % возвращает остаток после деления.
        12 % 3 = 0; 13 % 3 = 1; 14 % 3 = 2; 15 % 3 = 0; и так далее
        `,
        code: `
        const result = 11 % 3;
        `,
        answerOptions: [
            { answerText: '2', correct: true },
            { answerText: '0', correct: false },
            { answerText: 'NaN', correct: false },
            { answerText: '1', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Оператор in возвращает true если указанное свойство(не значение) находится в указанном объекте или в его цепочке прототипов. 2 является допустимым индексом массива(Массив тоже объект).
        `,
        code: `
        const array = [1, 4, 9];
        const result = 2 in array;
        `,
        answerOptions: [
            { answerText: 'true', correct: true },
            { answerText: 'false', correct: false },

        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Что является правильным синтаксисом стрелочной функции?',
        about:
        ` 
        Стрелочная функция имеет более короткий синтаксис чем declaration функция. Стрелочная функция не имеет this, arguments. Не может являться функцией конструктор, так же не имеет super и new.target.
        `,
        code: `
        () ==> {}
        () > {}
        () => {}
        () -> {}
        `,
        answerOptions: [
            { answerText: '() ==> {}', correct: false },
            { answerText: '() > {}', correct: false },
            { answerText: '() => {}', correct: true },
            { answerText: '()->{}', correct: false },


        ].sort(() => Math.random() - 0.5)
    },


].sort(() => Math.random() - 0.5);

export const quizData8: data[] = [
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод shift() удаляет первый элемент массива и возвращает его значение.
        Метод pop() удаляет последний элемент и возвращает этот элемент.
        `,
        code: `
        const a = [1, 2, 4, 5];
        const result = a.shift() - a.pop();
        `,
        answerOptions: [
            { answerText: '4', correct: false },
            { answerText: '6', correct: false },
            { answerText: '0', correct: false },
            { answerText: '-4', correct: true },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
        
        `,
        code: `
        const array = [1, 2, 3];
        const result = array.includes(2);
       
        `,
        answerOptions: [
            { answerText: 'false', correct: false },
            { answerText: 'true', correct: true },
            { answerText: 'throw a TypeError', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Интерполяция - это способ построения строки, который позволяет использовать переменные и выражения внутри строк с помощью знака доллара и фигурных скобок \${ }.
        Интерполяция работает только со строками в бэктиках. Это символ \`.
        `,
        code: `
        const variable = "Anime";
        const str = \`\${variable} the best!\`;
        const result = str;
        `,
        answerOptions: [
            { answerText: '${Anime} the best!', correct: false },
            { answerText: 'Anime the best!', correct: true },
            { answerText: 'the best!', correct: false },
            { answerText: '${variable} the best!', correct: false },
            { answerText: 'throw a ReferenceError', correct: false },
        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        У переменной let область видимости ограничивается любыми блоками кода { }. Будь то цикл, условие или функция.
        `,
        code: 
        `
        let value = 69;
        if (value > 1) {
            let value = 262;
        }
        const result = value;
        `,
        answerOptions: [
            { answerText: '1', correct: false },
            { answerText: '69', correct: true },
            { answerText: '262', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Переменная copy просто содержит ссылку на объект obj.
        Для создания поверхностной копии можно использовать цикл for in или методо Object.assign().
        Для создания глубокой копии можно использовать JSON.
        `,
        code: `
        const obj = { a: 5, b: 1 };
        const copy = obj;
        copy.a = 10;
        const result = obj.a;
        `,
        answerOptions: [
            { answerText: 'undefined', correct: false },
            { answerText: '5', correct: false },
            { answerText: '10', correct: true },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод eval() выполняет JavaScript-код, представленный строкой. НИКОГДА не используйте этот метод в настоящих проектах.
        `,
        code: `
        const value = 2009;
        const result = eval("value + value");
        `,
        answerOptions: [
            { answerText: '4018', correct: true },
            { answerText: 'NaN', correct: false },
            { answerText: 'undefined', correct: false },
            { answerText: '2009', correct: false },



        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
        Метод some() проверяет, есть ли хотя бы один элемент массива подходящий под условие переданной функции. Если да, то нам вернет true, иначе false. 
        В то время как для every() нужно, что бы все элементы подходили под условие.
        `,
        code: `
        const check = (value) => value === 2;
        const result = [1, 2, 3].some(check);
        `,
        answerOptions: [
            { answerText: 'true', correct: true },
            { answerText: 'false', correct: false },


        ].sort(() => Math.random() - 0.5)
    },
    {
        question: 'Какое значение будет в result?',
        about:
        ` 
    Свойство length не только возвращает количество элементов в массиве, но так же может и задать длину массива. 
    Вы можете установить свое значение length для усечения массива или его расширения.
    Когда вы расширяете массив, изменяя его свойство длины, количество фактических элементов увеличивается,
    например, если вы установите длину 3, когда она в настоящее время равна 2, массив теперь будет содержать 3 элемента, из-за чего третий элемент будет undefined.
        `,
        code: `
        const array = [1, 2, 3];
        array.length = 0;
        const result = array[0];
        `,
        answerOptions: [
            { answerText: '3', correct: false },
            { answerText: 'undefined', correct: true },
            { answerText: 'Nan', correct: false },
            { answerText: '1', correct: false },
            { answerText: 'throw a TypeError', correct: false },



        ].sort(() => Math.random() - 0.5)
    },


].sort(() => Math.random() - 0.5);








