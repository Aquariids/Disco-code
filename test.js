// //лексическое глобальное окружение
// // function hi
// // outer: null
// console.log(hi);

// function hi () {
//     // лексическое окружение функции
//     // hello:'hello'
//     // outer:global
//     var hello = 'hello';
//     console.log(hi);

// }


// hi();





// // foo();
// console.log(foo);
// var foo = function () {
//     console.log('hi');
// }

// function do_something() {
//         var a = 1;
//         let b = 2;
//         while (true) {
//             var c = 3;
//             let d = 4;

//             break;
//         }
//         console.log(d);
//      }

//      do_something();



// Заход в новую блочную область видимости
// Начало временной мертвой зоны


// function do_something() {
//          var a = 1;
//          let b = 2;
//          while (true) {
//              var c = 3;
//              let d = 4;
//              console.log(b);
//              break;
//          }
//          console.log(d);
//       }

//      do_something();

// global EC
// let hi = 'hi';
// console.log(name); // undefined
// if (true) {
//     var name = "Dima";
//     let surname = "Lubimyi";
// }
// console.log(name); // Dima