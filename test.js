// // // // //лексическое глобальное окружение
// // // // // function hi
// // // // // outer: null
// // // // console.log(hi);

// const { fi, hi } = require("date-fns/locale");

// // // // function hi () {
// // // //     // лексическое окружение функции
// // // //     // hello:'hello'
// // // //     // outer:global
// // // //     var hello = 'hello';
// // // //     console.log(hi);

// // // // }


// // // // hi();





// // // // // f1();
// // // // console.log(f1);
// // // // var f1 = function () {
// // // //     console.log('hi');
// // // // }

// // // // function do_something() {
// // // //         var a = 1;
// // // //         let b = 2;
// // // //         while (true) {
// // // //             var c = 3;
// // // //             let d = 4;

// // // //             break;
// // // //         }
// // // //         console.log(d);
// // // //      }

// // // //      do_something();



// // // // Заход в новую блочную область видимости
// // // // Начало временной мертвой зоны


// // // // function do_something() {
// // // //          var a = 1;
// // // //          let b = 2;
// // // //          while (true) {
// // // //              var c = 3;
// // // //              let d = 4;
// // // //              console.log(b);
// // // //              break;
// // // //          }
// // // //          console.log(d);
// // // //       }

// // // //      do_something();

// // // // global EC
// // // // let hi = 'hi';
// // // // console.log(name); // undefined
// // // // if (true) {
// // // //     var name = "Dima";
// // // //     let surname = "Lubimyi";
// // // // }
// // // // console.log(name); // Dima


// // // // hi()


// // // // let hi = function() {
// // // //     console.log('Привет красавчик:з');
// // // // };



// // // // hi();

// // // // var hi = () => {
// // // //     console.log('Привет красавчик:з');
// // // // };




// // // // let c = 3;
// // // // function a() {
// // // //     let a = 1;
// // // //     console.log(c); // 3
// // // //     function b() {
// // // //         let b = 2;
// // // //         console.log(a); // 1
// // // //     }

// // // //     b();
// // // // }

// // // // a();\

// // // // const obj2 = {
// // // //     a:19
// // // // }

// // // // const obj = {
// // // //     x: 10,
// // // //     f1() {
// // // //         setTimeout(() => {  // используем стрелочную функцию
// // // //             console.log(this.x);  // this будет ссылаться на родительский объект obj, а не на window, как в обычной функции
// // // //         }, 1000);
// // // //     }
// // // // };

// // // // obj.f1(); // выведет 10 через 1 секунду





// // // // const sayName = (surname) => {
// // // //     console.log(this);
// // // //     console.log(`${this.name} ${surname}`);
// // // //     console.log(this.age);
// // // // };

// // // // let us = {
// // // //     name: 'dima',
// // // //     age: 10
// // // // };

// // // // sayName.call(us,'anime');// просто вызываем у функции метод.
// // // // // далее передаем объект, а после аргументы для функции.


// // // "use strict";
// // // const obj = {
// // //     name: "Dima",

// // //     getName() {
// // //         console.log(`hello ${this.name} `);
// // //     }
// // // };


// // // obj.getName(); // hello Dima 

// // // const arr = [1,2,3,4,5]
// // // function linearSearch(value, list) {
// // //     let found = false; // флаг, сигнализирующий о том, что значение найдено
// // //     let position = -1; // позиция, в которой значение найдено, или -1, если нет такого значения
// // //     let index = 0;
// // //     // пока значение не найдено или индекс меньше длины массива
// // //     while(!found && index < list.length)
// // //     {


// // //       // если значение найдено
// // //       if(list[index] == value) {
// // //         found = true;     // флаг = истина
// // //         position = index; // позиция равна индексу элемента в массиве
// // //       } else {
// // //         index += 1;
// // //       }
// // //     }

// // //     return position;
// // // }


// // // // console.log(linearSearch(8,arr)); // -1
// // // console.log(linearSearch(3,arr)); // индекс 2



// // function sum (x,y) {
// //   return x + y;
// // }


// // console.log(sum(10,10));


// // function sort(arr) {
// //   for () { // внешний цикл
// //     let indexMin = i;
// //     for () { // внутрений цикл, 
// //       if (true) {
// //         for () {  // еще внутрений цикл, 
// //           if (true) {

// //           }
// //         }
// //       }
// //     }

// //   }

// //   return arr;


// // }



// const values = [2, 27, 14, 52, 31, 96, 73, 47, 22, 6];

// function QuickSort(List) {

//   if (List.length <= 1) {
//     return List;
//   }

//   const pivot = List[List.length - 1];
//   const leftList = [];  // 2
//   const rightList = []; // 27, 14, 52, 31, 96, 73, 47, 22, 6

//   for (let i = 0; i < List.length - 1; i++) {

//     if (List[i] < pivot) {
//       leftList.push(List[i]);

//     }
//     else {
//       rightList.push(List[i]);
//     }
//   }

//   return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
// }

// console.log(QuickSort(values));




// let arr = [1,2,3,4,5];

// console.log(arr[2]) // 3



// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count = 0;

// // Далее мы создаем функцию с 2 аргументами. Первый - массив в котором ищем и второй - сам элемент который ищем.
// function binarySearch(array, item) {

//   // Внутри функции мы создаем нужные для работы переменные

//   let start = 0; // Начальная позиция массива. Это наш первый элемент(индекс 0)
//   let end = array.length; // Конечная позиция. Это наш последний элемент(Вычесляем по длине массива)
//   let middle; // Это средний элемент в массиве. Вычеслять будем в цикле ниже.
//   let found = false; // Некий флаг который будет показывать нашли мы элемент или нет.
//   let position = -1; // И позиция которую мы будем возвращать если нашли элемент, если нет, то возвращаем -1

//   // Далее у нас идет цикл while. Цикл будет работать до тех пор пока мы не нашли элемент.

//   while (found === false && start <= end) { // если found false и начало меньше и не поровнялось с концом, то ищем дальше
//     count++; // С каждой итерацией прибавляем +1 к кол операций.
//     middle = Math.floor((start + end) / 2); // Мы берем начало и конец, прибавляем и делим на 2. Так мы находим середину

//     if (array[middle] === item) { // Если элемент под индексом middle (наша середина) равен, тому что ищем.
//       found = true; // тогда флаг наш в true
//       position = middle; // Добавляем наш индекс под которым находится средний элемент в позицию

//       return position; // и возвращаем индекс нашего искомого элемента.
//     }

//     if (item < array[middle]) { // если искомый элемент меньше чем элемент под индексом middle(наша середина)
//       end = middle - 1; // то мы в переменную где находится конец массива присваиваем нашу середину и отнимаем 1.
//     } 
//     else { // иначе мы присваиваем середину в переменную где находится начало и прибавляем 1
//       start = middle + 1;
//     }
//   }

//   return position; // Возвращаем из функции позицию
// }

// //Выводим в консоль индекс искомого элемента и кол операций требуемых для этого:
// console.log(binarySearch(array, 2)); 
// console.log(count); // 3


// let a = 1;
// let b = a;
// a = 2;
// console.log(a); // 2
// console.log(b); // 1


// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }



// fibonacci(5);


// const names = ["dima","sasha","alexander","shrek"];

// const longNames = names.filter(name => {
// 	return name.length > 5;
// });

// console.log(longNames);



// let a = {

//     a:1
// };

// let b = a;
// a = 100;


// console.log(a);
// console.log(b);



// const x = 0;

// const obj = {
//   x: 10,
//   f1: function() {
//     return console.log(this.x);
//   }
// }

// obj.f1();// вернёт 10 т.к. слева от скобок ReferenceType свойство base которого указывает на объект obj

// const test = obj.f1;// присвоим метод объекта в глобальную переменную

// test();// вернёт 0 т.к. вызов test() эквивалентен вызову ГО.test(),т.е. свойство base укажет на глобальный объект, а в глобальном объекте х присвоено 0.


// let x = 1;

// let obj = {



//     x: hi = () => {
//     console.log(this.x);
//   }


// }

// obj.x()\


// function f1() {
//   // return an arrow function
//   return (a) => {
//   // `this` here is lexically inherited from `f1()`
// };
// }


// var bar = f1.call(obj1);
// bar.call( obj2 ); // 2, not 3!





// const hi = () => {
//   return console.log('hi');
// }

// hi();


// console.log([1,10,100].map(parseInt));


// function sayName(surname) {
//     console.log(this);
//     console.log(surname);

// }

// let us = {
//     name: 'dima',
//     age: 10
// }

// sayName.call(us, 'anime');// просто вызываем у функции метод.


// const obj = {
//     x: 10,
//     f1() {
//         setTimeout(() => {  // используем стрелочную функцию
//             console.log((() => {
//                 return this.x
//             })());  // this будет ссылаться на родительский объект obj
//         }, 1000);
//     }
// };

// obj.f1(); // выведет 10 через 1 секунду


// const a = {c:1};
// const b = {c:2};

// function hi() {
//     return function () {
//         console.log(this.c); // берет this у функции hi
//     };

// }

// const hello = hi.call(a); // значение this в контексте hi бдует объект a

// hello.call(b); // теперь мы задаем  


// const a = {c:1};
// const b = {c:2};

// function hi() {
//     return  () => {
//         return () => {
//             return () => {
//                 console.log(this.c)
//             }
//         }
//     };
// }

// const hello = hi.call(a); // явно указали, что this в контексте hi будет объект a
// hello.call(b); // Тут мы ссылаемся на нашу стрелочную анонимную функцию и пытаемся изменить this


// setTimeout(() => {
//     console.log('стрелочная функция');
// },0);


// const user = {
//     name: "Dimasik",
//     hi() { console.log(this.name) }
//   };

//   user.hi(); // Dimasik


// const user = {
//     name: "Dimasik",
//     hi() { console.log(this.name); }
// };

// const hello = user.hi;

// hello(); // undefined



// let user = {
//     name: "John",
//     hi() { console.log(this.name); }
//   };

//   let hi = user.hi;
//   hi(); // undefined




// const btnThis = document.querySelector('.btn-this');

// btnThis.addEventListener('click', function () {
//         this.style.backgroundColor = 'red'; // при нажатии перекрасим кнопку в красный, так как this - элемент события
// });



// const x = 0;

// conj.f1)(); //не сработают, данный вызов эквивалентен предыдущему, GetValue не отрабатывает

// // операторы || или иные операторы сравнения, тернарный оператор и т.д.?
// (obj.f1 || obj.f1)();//вернёт 0 по тем же причинам, что и предыдущий пример

// //инициализатор массива
// [obj.f1][0]();//вернёт 0 по тем же причинам, что и предыдущий пример
// //и т.д.st obj = {
//         x: 1,
//         f1: function () {
//                 return console.log(this.x);
//         }
// }

// obj.f1();
// //приведём вызов этого метод объекта в зону выражения
// //сработают ли скобки?
// (ob


// const user = {
//         name: "Dimasik",
//         hi() { console.log(this); }
//     };
    
//     const hello = user.hi; 
    
//     hello(); // undefined || TypError

// const x = 1;
// const obj = {
//         x:1,
//         f1: function () {
//                 return console.log(this.x);
//         }
// }

// obj.f1(); // 1
// (obj.f1 = obj.f1)(); 
// В зоне выражения. поэтому результатом будет тип Fuction, а не ReferenceType, следовательно вернёт 0 из глобального объекта
// eslint-disable-next-line no-self-assign


// // операторы || или иные операторы сравнения, тернарный оператор и т.д. все зоны выражения.
// (obj.f1 || obj.f1)(); // 0 

// //инициализатор массива
// [obj.f1][0]();//вернёт 0 по тем же причинам
// //и т.д.

// // запятые
// (obj.f1, obj.f1)(); // 0


