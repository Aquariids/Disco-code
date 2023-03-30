---
title: 'this и все его воплощения'
id: 4
prev: '/js/under-the-hood-js/scope'
next: '/js/under-the-hood-js/'
newDate: '21.03.2023'
category: 'under-the-hood-js'
---


<div className = 'mdHead'>

#### Теги
<div className = 'tag_js'> [Что такое this](#что-такое-this) </div><br/>
<div className = 'tag_js'> [this такой разный](#this-такой-разный) </div>
<div className = 'mini_tag_js'> [this в обычной функции,]() </div>
<div className = 'mini_tag_js'> [Контекст у методов объекта,]() </div>
<div className = 'mini_tag_js'> [this в конструкторах и классах,]() </div>
<div className = 'mini_tag_js'> [this в событии с обычной функцией,]() </div>
<div className = 'mini_tag_js'> [Стрелочные функции и this]() </div> <br/>
<div className = 'tag_js'> [Ручная привязка контекста к функции:]() </div>
<div className = 'mini_tag_js'> [call](#call) </div>
<div className = 'mini_tag_js'> [apply](#apply) </div>
<div className = 'mini_tag_js'> [bind](#bind) </div>

</div>

##  Что такое this? ##
Ключевое слово/переменная `this`: это специальный идентификатор, который указывает на данные в зависимости от условий выполнения кода. Создается для каждого контекста выполнения. Обычно указывает на владельца функции, в которой `this` используется.
Очень часто можно услышать, что `this` это некий "контекст". Это неверно, `this` находится в контексте, но никак не является им.

##  this такой разный.. ##
Теперь давайте посмотрим, что будет содержаться по умолчанию в `this` в разных условиях. 

### this в обычной функции ### 
Внутри функции `this` равняется объекту `window`, но если у вас стоит строгий режим `use strict` тогда `undefiend`. 
```javaScript
"use strict";
function showThis (){
    console.log(this); 
}

showThis(); // мы получим undefined
```
Без строгого режима:
```javaScript
function showThis (){
    console.log(this); 
}

showThis(); // получим объект window
```

<div className='container-img'> <span className="img"> ![this](/images/Content/Js/basic-js/this/windowThis.png) </span></div>

А что если внутри функции будет еще функция с `this`?
```javaScript
"use strict"

function showThis2(a, b) { // создаем функцию с 2 аргументами, 
    console.log(this); // undefined

    function sum() { // внутри еще одну функцию
        console.log(this); // здесь значение this будет таким же либо window либо undefiend.
        return a + b; 
    }

    console.log(sum()); // undefined
}

showThis2(1, 2); // 3
```
В общем в обычной функции будет `window` либо `undefined` в зависимоси от режима. Даже если функция находится внутри другой функции!

###  this у методов объекта ###

Метод принадлежит объекту, поэтому тут `this` будет равна этому объекту.
```javaScript
"use strict"
const obj = { // Объект 
    a: 20,
    b: 15,
    sum() { // внутри метод
        function what() {
            console.log(this); // будет undefiend. Потому что это функция внутри метода, а не сам метод объекта,
        }
        console.log(this); // this будет объектом в котором находится функция
        what();
    }
};

obj.sum()
```
Важно понимать, что функция внутри метода не является методом.<br/>

<div className='container-img'> <span className="img"> ![thisInObject](/images/Content/Js/basic-js/this/thisInObject.png) </span></div>

###  this в конструкторах и классах ###
`this` в конструкторах и классах - это новый экземпляр объекта.
```javaScript
function User(name, age) { // создаем функцию конструктор.
    this.name = name; // эти this обращаются к объекту которые мы будем создавать 
    this.age = age; // Посути вместо this каждый раз подставляется новый экземпляр объекта.
    this.human = true; // если мы создадим объект lox, то выглядело бы это так lox.age и тд.
    this.hello = function () {
        console.log('hello' + this.name);
    };


}

let ivan = new User('ivan', 24); // this принимает этот экземпляр
let dima = new User('Dima', 30); // и теперь этот. Здесь при создании мы сразу передаем значения в наши свойства name и age

dima.hello(); // выдаст (helloDima)
console.log(ivan);
```
Немного рассказываю, что происходит. Мы создаем переменную `ivan`, в нее помещаем наш конструктор и указываем свойства. Внутри конструктора под `this` подставляется наш `ivan`, и ему записываются свойства (значения из аргументов в функции) `ivan.name = name`, `ivan.age = age` и так далее. Мы таким образом конструируем объект. Когда мы создадим `dima`, вместо `this` уже как бы подставится `dima` и так далее.

<div className='container-img'> <span className="img"> ![thisInClasses](/images/Content/Js/basic-js/this/ivanThis.png) </span></div>

### this в событии с обычной функцией ###

Если обработчик с обычной функцией, то `this` как и `event.target` будет сам элемент события.
```javaScript
const btnThis = document.querySelector('.btn-this');

btnThis.addEventListener('click', function () {
        this.style.backgroundColor = 'red'; // при нажатии перекрасим кнопку в красный, так как this - элемент события
});
```
###  Стрелочные функции и this ###

Главное отличие стрелочной функции это то, что при вызове стрелочной функции у `this` нет поведения по умолчанию из за этого, во время вызова стрелочной функции `this` остается нетронутым и будет указывать на `this` из родительской области делает он это с уже известной нам scope chain(цепочке областей видимости). Из этого делаем вывод, что неважно как мы вызываем стрелочную функцию, важно то, где она создается. Пример подтверждающий это я покажу после того, как мы познакомимся с методами, которые позволяют устанавливать свое значение `this`, вне зависимости как мы вызываем функцию.

```javascript
const obj = { // наш объект
    num: 2,
    sayNumber: function () { // метод этого объекта
        const say = () => {
            console.log(this); // стрелочная функция внутри метода
        };

        say();
    }

};

obj.sayNumber(); // значение this будет объект  {num: 2, sayNumber: ƒ}
// у метода в объекте this сам объект, стрелочная функция взяла тот же this, что и у метода в котором она находится.
```
```javascript
const obj = {
    x: 10,
    foo() {
        // используем стрелочную функцию
        setTimeout(() => {  
            console.log(this.x);  // this будет ссылаться на родительский объект obj
        }, 1000);
    }
};

obj.foo(); // выведет 10 через 1 секунду
```
Вот тут я скажу пару важных слов, а то можно уже запутаться во всем этом. Во время фазы создания мы находим нашу стрелочную функцию, и она попадает в лексическое окружение функции foo. То есть наша стрелочная функция - часть окружения функции foo, поэтому не важно, передаем мы ее куда-то или нет и где она там уже вызывается - не важно. Её this будет равна this родителя и все.
```javascript
"use strict";
const obj = {
    name: "Dima",

    getName: () => {
        console.log(`hello ${this.name} `);
    }
};


obj.getName(); // hello undefined 

///////////////////////////
// Метод с обычной функцией.
const obj = {
    name: "Dima",

    getName: function () {
        console.log(`hello ${this.name} `);
    }
};


obj.getName(); // hello Dima 

```
В этом примере мы получили `undefined` потому что родитель объекта `obj` это глобальная область и тут как мы помним `this` будет  `undefined` в строгом режиме.

## Ручная привязка значения this  ##
Допустим есть у нас функция в строгом режиме, `this` которой будет `undefined`. А нам нужно, что бы ее `this` имело другое значение:
```javaScript
function sayName(sername) {           
    
};

const us = {
    name: 'diman',
    age: 10
};
```
Для этого есть два метода и один который <b>сам создает новую функцию.</b>

### call() ###

```javaScript
function sayName(surname) {
    console.log(this);
    console.log(`${this.name} ${surname}`);
    console.log(this.age);
}

let us = {
    name: 'dima',
    age: 10
}

sayName.call(us, 'anime');// просто вызываем у функции метод.
// далее передаем объект, а после аргументы для функции.
```
Как видим теперь `this` это объект `us` и мы можем использовать его свойства внутри функции с аргументами.

<div className='container-img'> <span className="img"> ![call](/images/Content/Js/basic-js/this/call.png) </span></div>

### apply() ###
Этот метод делает одно и тоже, что и `call`. Но у них разный синтаксис.
```javaScript
sayName.apply(us, ['anime']); // здесь все тоже самое только аргументы внутри массива
```

### bind() ###
Тут все почти также, только мы создаем новую функцию.
```javaScript
function count(num) {
    return this * num; //  здесь в this будет двойка, мы ее передали ниже.
}

const double = count.bind(2); // здесь мы по сути поместли в count новую функцию и забиндили в this = 2

// мы навсегда забиндили функцию! создали ей this ввиде двойки и теперь просто вызываем нашу double и передам нужный аргумент 
console.log(double(10)); // 20
```
Также внутри стрелочной функции нельзя использовать методы `call()`, `apply()` и `bind()`, потому что стрелочная функция автоматически указывает `this` из родительской области и это поведение мы никак не можем изменить.

## Еще немного про стрелочные функции

А теперь разберем еще пимер того как работает `this` в стрелочной функции. Тут будем использовать метод `call`.

```javascript
const a = {c:1};
const b = {c:2};

function hi() {
    return  () => {
        console.log(this.c); // 1
    };
}

const hello = hi.call(a); // явно указали, что this в контексте hi будет объект a
hello.call(b); // Тут мы ссылаемся на нашу стрелочную анонимную функцию и пытаемся изменить this
```
В итоге мы получим `1`. Потому что стрелочная функция берет `this` родителя.
```javascript
const a = {c:1};
const b = {c:2};

function hi() {
    return  () => {
        return () => {
            return () => {
                console.log(this.c) // 1
            }
        }
    };
}

const hello = hi.call(a); 
hello.call(b); 
```
Даже если мы сделаем такую цепь стрелочных функций, то ничего не изменится. Стрелочная функция будет идти по `scope chain` из одной функции в другую пока не найдет значение для `this`.


## Как работает this на уровне реализации
Тут пару слов скажем о том как `this` работает на уровне реализации языка.