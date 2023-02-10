export interface INewsPost {
    id:number,
    body:string,
    link:string,
    src:string,
    date:string;
}

export const newsData:INewsPost[]  = [
    {
        id:1,
        body:"Добавлен новый раздел \"Практика js\" и добавил статью про",
        link:"webpack",
        src:"/content/js/practice-js/webpack",
        date:"17.11.2022"
    },
    {
        id:2,
        body:"Написал о том как сделать",
        link:"классический слайдер на js",
        src:"/content/js/practice-js/slider-js",
        date:"19.11.2022"
    },
    {
        id:3,
        body:"Добавлена новая статья о том как работают",
        link:"web запросы и ответы",
        src:"/content/js/practice-js/webpack",
        date:"30.11.2022"
    },
    {
        id:4,
        body:"Закончил писать про",
        link:"fetch & promise",
        src:"/content/js/advanced-js/promise-fetch_api",
        date:"02.12.2022"
    },
    {
        id:5,
        body:"Добавлен новый раздел \"JavaScript под капотом\" и первая статья о работе",
        link:"движка в javaScript & JRE",
        src:"/content/js/under-the-hood-js/engine",
        date:"7.12.2022"
    },
    {
        id:6,
        body:"Добавлена статья о работе",
        link:"контекста выполнения & call stack ",
        src:"/content/js/under-the-hood-js/call-stack",
        date:"16.12.2022"
    },
    {
        id:7,
        body:"Создал новую тему \"html & css\" и добавил статью про",
        link:"структуру веб страницы",
        src:"/content/html-css/html/html-page",
        date:"17.12.2022"
    },
    {
        id:8,
        body:"Создал новую тему \"Node.js\" и добавил статью про то как",
        link:"установить node.js и что такое npm ",
        src:"/content/node-js/basic-node-js/npm",
        date:"29.12.2022"
    },
    {
        id:9,
        body:"Добавил статью о том как работает ",
        link:"node.js, блокирущий и неблокирущий ввод/вывод и что за библиотека libuv. ",
        src:"/content/node-js/basic-node-js/what-is-node-js",
        date:"30.12.2022"
    },
    {
        id:10,
        body:"Создал первый ",
        link:"тест javaScript уровня beginner.",
        src:"/tests/beginner/1",
        date:"10.01.2023"
    },
    {
        id:11,
        body:"Доделал все javaScript",
        link:"тесты для уровня beginner",
        src:"/tests/beginner",
        date:"12.01.2023"
    }
];