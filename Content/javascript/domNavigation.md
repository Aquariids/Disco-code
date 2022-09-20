

[Навигация по DOM - что такое узлы?](#navigations)<br>
[Методы получения узлов Родителей, детей, соседей](#uzelMethods)<br>
## Навигация по DOM дереву и узлам. ##
 Сейчас посмотрим на весь DOM. Для его получения используется свойство documentElement
```javaScript
console.log(document.documentElement);
```
![documentElement](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D0%B2%D0%B5%D1%81%D1%8Chtml.png)<br>
На скриншоте мы видим наше дерево, видим элементы, это все является узлами, но например текст не является элементом, но является узлом. "Каждая сущность в DOM будет узлом, но не каждый узел будет элементом." Теперь посмотрим как выглядят коллекции узлов, для этого используем свойство childNodes
#### childNodes - позволяет нам получить все узлы которые находятся в родителе.
```javaScript
console.log(document.body.childNodes); // получаем узлы которые являются детьми у body.
```
Мы получим такую коллекцию узлов:
![узлы](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%D1%83%D0%B7%D0%BB%D0%BE%D0%B2.png)<br>
Под индексом 0 у нас узел 'text' - это перенос строки, далее идет комментарий '\<!-- body родитель section -->', потом опять перенос и так далее. Наши комментарии узлы, но не элементы.

## <a name='uzelMethods'> Методы получения узлов </a> ##

#### firstChild и lastChild - позволяют получить первого или последнего ребенка родителя

```javaScript
console.log(document.body.firstChild); // первым получим перенос строки.
console.log(document.body.lastChild); // последним будет файл подключения js
```
![firstChild and last](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/first%20and%20end.png)<br>
#### parentNode - получаем родителя элемента.
```javaScript
const bg = document.querySelector('.bg').parentNode;
console.log(bg);
```
![section узел](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/section.png)<br>
#### nextSibling - позволяет получить соседа впереди.
```javaScript
console.log(document.querySelector('.section').nextSibling); // получим text - перенос строки.
```
#### previousSibling - Позволяет получить предыдущего соседа.
```javaScript
 console.log(document.querySelector('.section').previousSibling); // так же получим text
```
Мы передвигаемся по всему дом дереву, не только по элементам, поэтому нужно помнить обо всех узлах в доме. Для получения только элементов есть аналоги.
#### nextElementSibling и previousElementSibling  - работают также, но с элементами.
#### parentElement -  получаем родителя, только элементы.
#### firstElementChild и lastElementChild - получаем у родителя первый элемент или последний 
Аналога childNodes  нет, но мы можем есго сделать сами с помощью for of:
```javaScript
for (let node of document.body.childNodes) { // используем for of, а не forEach потому что в нем мы можем использовать continue и brake.
  if (node.nodeName == "#text"){ continue;} // по факту мы получаем наш псевдомассив нодузел и говорим если нода(каждый наш элемент)
// если его свойство nodeName равно #text - (это я зашел в псевдомассив раскрыл ноду text и нашел имя.) То мы пропускаем эту итерацию 
  console.log(node); // в итоге в консоль мы получаем только элементы без текстовых узлов
}
```
![forOF](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/forOf.png)<br>

