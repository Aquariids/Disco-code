// // //лексическое глобальное окружение
// // // function hi
// // // outer: null
// // console.log(hi);

// // function hi () {
// //     // лексическое окружение функции
// //     // hello:'hello'
// //     // outer:global
// //     var hello = 'hello';
// //     console.log(hi);

// // }


// // hi();





// // // foo();
// // console.log(foo);
// // var foo = function () {
// //     console.log('hi');
// // }

// // function do_something() {
// //         var a = 1;
// //         let b = 2;
// //         while (true) {
// //             var c = 3;
// //             let d = 4;

// //             break;
// //         }
// //         console.log(d);
// //      }

// //      do_something();



// // Заход в новую блочную область видимости
// // Начало временной мертвой зоны


// // function do_something() {
// //          var a = 1;
// //          let b = 2;
// //          while (true) {
// //              var c = 3;
// //              let d = 4;
// //              console.log(b);
// //              break;
// //          }
// //          console.log(d);
// //       }

// //      do_something();

// // global EC
// // let hi = 'hi';
// // console.log(name); // undefined
// // if (true) {
// //     var name = "Dima";
// //     let surname = "Lubimyi";
// // }
// // console.log(name); // Dima


// // hi()


// // let hi = function() {
// //     console.log('Привет красавчик:з');
// // };



// // hi();

// // var hi = () => {
// //     console.log('Привет красавчик:з');
// // };




// // let c = 3;
// // function a() {
// //     let a = 1;
// //     console.log(c); // 3
// //     function b() {
// //         let b = 2;
// //         console.log(a); // 1
// //     }

// //     b();
// // }

// // a();\

// // const obj2 = {
// //     a:19
// // }

// // const obj = {
// //     x: 10,
// //     foo() {
// //         setTimeout(() => {  // используем стрелочную функцию
// //             console.log(this.x);  // this будет ссылаться на родительский объект obj, а не на window, как в обычной функции
// //         }, 1000);
// //     }
// // };

// // obj.foo(); // выведет 10 через 1 секунду





// // const sayName = (surname) => {
// //     console.log(this);
// //     console.log(`${this.name} ${surname}`);
// //     console.log(this.age);
// // };

// // let us = {
// //     name: 'dima',
// //     age: 10
// // };

// // sayName.call(us,'anime');// просто вызываем у функции метод.
// // // далее передаем объект, а после аргументы для функции.


// "use strict";
// const obj = {
//     name: "Dima",

//     getName() {
//         console.log(`hello ${this.name} `);
//     }
// };


// obj.getName(); // hello Dima 