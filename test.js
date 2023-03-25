// // // // //лексическое глобальное окружение
// // // // // function hi
// // // // // outer: null
// // // // console.log(hi);

// // // // function hi () {
// // // //     // лексическое окружение функции
// // // //     // hello:'hello'
// // // //     // outer:global
// // // //     var hello = 'hello';
// // // //     console.log(hi);

// // // // }


// // // // hi();





// // // // // foo();
// // // // console.log(foo);
// // // // var foo = function () {
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
// // // //     foo() {
// // // //         setTimeout(() => {  // используем стрелочную функцию
// // // //             console.log(this.x);  // this будет ссылаться на родительский объект obj, а не на window, как в обычной функции
// // // //         }, 1000);
// // // //     }
// // // // };

// // // // obj.foo(); // выведет 10 через 1 секунду





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
