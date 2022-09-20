---
title: 'DOM дерево и работа с DOM элементами'
id: 16
prev: '/js/basicjs/copyingObjectsAndArray'
next: '/js/basicjs/bac'
category: 'basicjs'
---

#### Теги
<div className='tag_js'></div>
<div className='mini_tag_js'></div>

<div className='tag_js'>[html как объект и что такое DOM](#html-как-объект)</div><br/>
<div className='tag_js'>[Получение элементов DOM - Устаревшие способы:](#получение-элементов-dom---устаревшие-способы)</div>
<div className='mini_tag_js'>[getElementById,](#getelementbyid)</div>
<div className='mini_tag_js'>[getElementsByTagName,](#getelementsbytagname)</div>
<div className='mini_tag_js'>[getElementsByClassName.](#getelementsbyclassname)</div> <br/>
<div className='tag_js'>[Современные способы получения элементов DOM:](#современные-способы-получения-элементов-dom)</div>
<div className='mini_tag_js'></div>
<div className='mini_tag_js'></div> <br/>




##  html как объект ##
html - Это документ со своей структурой, и эта структура может быть представлена как дерево узлов, мы ее видим когда в браузере открываем в инспекторе кода Elements. Узлы связаны между собой отношениями родительскими дочерними.

```html
<!DOCTYPE html>
<html lang="en"> <!-- html родитель head и body -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body> <!-- body родитель section -->
    
    <section class="section"> <!-- дочерний элемент body, его ребенок -->
        <div class="bg">Я</div>  <!-- Это дочерние элементы section-->
        <div class="bg">г</div>
        <div class="bg">i</div>
        <div class="bg">й</div> 
    </section>
    <div id="bg-id"> Это просто div </div>
    <button class="btn">кнопка btn</button>
    <button>кнопка 2</button>
    <button>кнопка 1</button>
    <script src="script.js"></script>
</body>
</html>
```
Когда документ сформирован, то мы можем его представить ввиде обычного объекта поэтому это называется `Объектная Модель Документа - Document Object Model (DOM)`. Браузер как бы создает `DOM` дерево на основе нашего `html` документа, каждый элемент становится объектом.
И как у любого объекта у него могут быть свои методы и некоторые из них мы будем использовать что бы получить доступ к определенным элементам на странице.<br/>
Обращаемся к `DOM` мы через объект `document`, этот объект содержит в себе всю структуру `html`. Получать элементы и работать мы будем с `html` структурой которую разбирали выше.
##  Получение элементов DOM - Устаревшие способы ##
### getElementById() ###
getElementById() - получаем элемент через `id`. Внутри скобок указываем `id` в виде строки.
```javaScript
// обращаемся к объекту document, а потом обращаемя к методу getElementById
const bg = document.getElementById('bg-id');
// в переменной bg находится элемент нашего DOM Дерева.

console.log(bg);
```
![getElementById](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%20%D0%B4%D0%B8%D0%B2.png)<br/>
### getElementsByTagName() ###
getElementsByTagName() - получаем <span className = 'link_js'>[псевдомассив](/js/basicjs/arrays#псевдомассивы) </span> по тегу (Даже если будет один элемент, мы все равно получим псевдомассив)
```javaScript
const btns = document.getElementsByTagName('button');
console.log(btns); 
```
![getElementsByTagName](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D0%9A%D0%BD%D0%BE%D0%BF%D0%BE%D0%BA.png)<br/>
Для получения нужного элемента указываем индекс.
```javaScript
const btns = document.getElementsByTagName('button')[2]; 
console.log(btns); 
// или же указываем уже у готовой html коллекции при использовании console.log(btns[2]); 
```
![getElementsByTagName](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B01.png)<br/>
### getElementsByClassName()
 getElementsByClassName() - получаем по имени класса    
```javaScript
const className = document.getElementsByClassName('bg'); // Точку не ставим, этот метод уже знает, что работает с классом
console.log(className);
```
![getElementsByClassName](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D0%B4%D0%B8%D0%B2%D1%8B%D0%B4%D0%B8%D0%B2%D1%8B.png)
##  Современные способы получения элементов DOM  ###
До этого мы получали html коллекции(HTMLCollection), c querySelectorAll мы будем получать NodeList. Это все псевдомассивы, но разница в том, что у NodeList есть метод forEach и еще пара методов. Их все можно узнать с помощью console.dir( ). [О том как это сделать мы поговрим ниже](#elementsPage). Напомню, что псевдомассив - это тоже самое, что и обычный массив, но только не имеющий методов обычного массива.
###  querySelectorAll() ###
querySelectorAll() - позволяет получать псевдомассив за счет селекторов css ###
[Здесь подробнее о селекторах](https://learn.javascript.ru/css-selectors)
```javaScript
const inSection = document.querySelectorAll('.bg');  // тут мы получаем через класс, здесь обязательно ставить точку
const bgId = document.querySelectorAll('#bg-id'); // через решетку получаем id
```
![querySelectorAll](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/querySelector.png)<br/>
###  querySelector() ###
Все тоже самое, только получаем самый первый элемент который встретит (ПОЛУЧАЕМ ЭЛЕМЕНТ, НЕ ПСЕВДОМАССИВ!).
```javaScript
const inSectionOneElement = document.querySelector('.bg');
console.log(inSectionOneElement); // получили самый первый bg
```
![querySelector](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/querSelector1.png)<br/>
Так же если нам нужно получить элемент внутри какого-то родителя, а этого родителя мы уже получили, то нам не обязательно использовать document<br/>
Например:
```javaScript
const section = document.querySelector('.section'); // наш родитель
// пишем вместо document нашу переменную с родителем
const inSection = section.querySelectorAll(.bg);  // мы говорим получить наши элементы которые находятся только ВНУТРИ section
```
Вторая фишка - мы можем сразу указать нужный тег при получении.
```javaScript
const section = document.querySelector('.section div'); // получаем первый div в .section
// если будем использовать querySelectorAll, то получим все div.
```
## Действия с элементами на странице ##
Здесь нам поможет console.dir( ) -  напомню, что этот метод отображает список свойств указанного JavaScript объекта
```javaScript
const inSectionOneElement = document.querySelector('.bg');
console.dir(inSectionOneElement); // смотрим на элемент в качестве объекта
```
В консоли браузера мы с помощью этой команды можем увидеть все свойства этого элемента(все что можем с ним сделать!) 
![dir](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0.png)<br/>
Так же мы можем узнать нужные стили, что бы поменять их. для этого ищем объект style, внутри этого объекта находятся все css свойства которые мы можем применить. Это все inline стили (inline стили самые важные!).<br/>
inline стили перебивают остальные. Сделано это для того, что бы с помощью js мы могли манипулировать такими стилями.
![Style](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/Style.png)<br/>
###  Меняем css свойства ###
Внутри объекта style находим нужные css свойства.
```javaScript
const inSectionOneElement = document.querySelector('.bg');
const btns = document.querySelectorAll('button');

inSectionOneElement.style.backgroundColor = 'green'; // обращаемся к нашему элементу и далее к объекту style внутри него и к backgroundColor внутри style
// в js все css свойства пишем через CamelCase.
inSectionOneElement.style.width = '100px'; // указываем все строками и с четкими ед измерениями
btns[0].style.borderRadius = '100%'; // выбираем нашу первую кнопочку из псевдо массива.. 
```
![Меняем свойства css](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D0%9C%D0%B5%D0%BD%D1%8F%D0%B5%D0%BC%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%20css.png)<br/>
Так же с помощью свойства cssText, можно вставлять строки прямо в style.
```javaScript
const inSectionOneElement = document.querySelector('.bg');

let red = 'red';
inSectionOneElement.style.cssText = `background-color: ${red}; width: 400px;`; // пишем уже обычный css код. Так же можем пользоваться интерполяцией
```
Меняем сразу несколько элементов с помощью цилка for (редко используется)
```javaScript
const btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) { // говорим, что перебираем пока не закончатся элементы в нашем псевдомассиве
    btns[i].style.backgroundColor = 'green';  // обращаемся к нашему псевдомассиву и будем получать каждый элемент начиная с 0 (так как i = 0)
}
```
Но легче использовать forEach( )
```javaScript
const btns = document.querySelectorAll('button');
btns.forEach(item => {
    item.style.backgroundColor ='green';
});
```
![Меняем циклом css свойства](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/%D0%BC%D0%B5%D0%BD%D1%8F%D0%B5%D0%BC%D0%A6%D0%B8%D0%BA%D0%BB%D0%BE%D0%BC.png)<br/>

##  Методы для создания своих элементов  ##                                                          

###  createElement() 
`createElement()` - создает элемент.
```javaScript
const div = document.createElement('div'); // Обращаемся к документу, к методу createElement('Тут элемент который хотим создать') 
// после элемент создан, но он хранится пока что только внутри js файла.
```
### createTextNode( ) 
- Текстовый узел - это элемент без оболочки тега
```javaScript
const text = document.createTextNode('Тут был я'); // создали текст.
```
### Работаем с css Селекторами! уже не inline! (classList) ###                                                  
Для работы с селекторами используем свойство `classList`
```javaScript
const div = document.createElement('div');
div.classList.add('black'); // add - это метод у свойства classList
//add() - добавляет класс к элементу
// ВСЕ ЭТО ПОКА В JS ФАЙЛЕ
```
Есть также старое свойство className, оно больше не используется.

##  Добавляем наши элементы в DOM дерево (Методы) ##
                                                    
####  append()
 `append()` - помещает наш элемент в самый конец.
```javaScript
const div = document.createElement('div');
div.classList.add('black');
document.body.append(div); // в нашем случае мы в конец body кладем div который создали.
```
![addElement](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/addElement.png)<br/>
Так же можем при получении родителя, добавить в него элемент.
```javaScript
document.querySelector('.section').append(div); // Мы получили наш элемент по селектору и в него сразу добавили div
```
#### prepend( ) - помещает элемент в самое начало.
```javaScript
const section = document.querySelector('.section');
section.prepend(div);
```
![prepend](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/prepend.png)<br/>

#### before and after 
before() и after() - говорим перед `before` каким элементом вставить наш элемент или после `after` какого.
```javaScript
const div = document.createElement('div');
const div2 = document.createElement('div');
div.classList.add('black');
div2.classList.add('red');
const inSection = document.querySelectorAll('.bg');
inSection[1].before(div); // ставим наш див перед 1 элементом (по индексу)
inSection[2].after(div2); // ставим после 2 элемента наш див (все по индексу!) 
```
![before and after](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/beforAfter.png)<br/>
#### remove() - удаляет элемент и replaceWith() - заменяет один элемент на другой
```javaScript
const inSection = document.querySelectorAll('.bg'); // получули все из section
const btns = document.querySelectorAll('button'); // получили button
inSection[0].replaceWith(btns[0]); // поменяли первый элемент в section на первый элемент из btns
inSection.forEach(item => { // удалили все элементы из section
    item.remove();
});
```
Так как в inSection находятся только div с классом bg которые мы получили, то кнопка которой мы заменили div осталась.
![remove and replace](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/remove%20and%20replace.png)<br/>


### Старые методы для добавления элементов в DOM! ###                                   
appendChild() - по сути тот же append.<br/>
insertBefore () - указываем перед каким эдементом вставить наш. 2 аргумента первый - это то что вставляем, а второй, перед чем.<br/>
removeChild() - Обращаемся к родителю и пишем какой элемент удалить(section.removeChild(inSection[1]);)<br/>
replaceChild - тот же replaceWith() только супер неудобный (section.replaceChild(div,inSection[0]))<br/>
replaceChild - два аргумента 1 - тот элемент на который хотим менять 2 - то, что меняем и опять через родителя.<br/>

Старые способы очень неудобные! Но знать как они выглядят нужно.
###  Методы для работы с элементами  ###
####  innerHTML - добавляет html код
```javascript
const div = document.createElement('div');
const section = document.querySelector('.section');
div.innerHTML = '<h1> ПРивет </h1>'; // добавили в див h1 с текстом. Можно и просто без тега вставить текст.
section.append(div);
```
![innerHTML](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/innerHTML.png)<br/>
 ####  textContent  - Добавляет только текст
Сделано это для безопасности. Когды мы получаем данные прямо от пользователя (может ввел в модал окне и тд)
суть такова, что если мы будем использовать  innerHTML то пользователь сможет менять структуру DOM и сломать верстку. Поэтому для простого текста используется textContent.

#### insertAdjacentHTML('') - позволяет вставлять html код но так же указывать перед каким элементом или после ####
Принимает два аргумента. 1 - это позиция. 2 - тот html код который нужно вставить.<br/>
В первый аргумент принимается 4 значения:
   1. beforebegin -  вставляет html структуру перед элементом (до открывающего тега).<br/>
   2. afterbegin -  вставялет структуру вначало ВНУТРИ элемента (перед первым потомком).<br/>
   3. beforeend - вставляет в конец структуру внутри! (после последнего потомка).<br/>
   4. afterend - после элемента (после закрывающего тега).<br/>
```javaScript
const section = document.querySelector('.section');
section.insertAdjacentHTML('afterbegin', '<h2> привет </h2>');
```
![insertHTML](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/insertHTML.png)<br/> 
 