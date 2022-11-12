---
title: 'Что такое состояние. Используем хук useState'
id: 2
prev: '/react/basic-react/react-single-page-app'
category: 'basic-react'
---

<div className='mdHead'>
  
#### Теги
<div className = 'tag_react'>[Про state и hook]()</div>
<div className = 'mini_tag_react'>[]()</div>

</div>

## Про state и hook
State(состояние) в react это что-то, что хранит в себе данные для использования и изменения их в компоненте. Это логика или бизнес логика.
Для больших проектов есть отдельные библиотеки для работы со state, например redux. Для небольших проектов чаще всего используется локальный state. Локальный не выносится в отдельный файл, а используется внутри, по сути там же где и компонента. С использованием redux например, мы будем создавать отдельные файлы для данных.<br>
hook - это функция которая позволяет менять state внутри функциональных компонент. Сейчас мы будем использовать хук useState. Есть так же классовые компоненты. Раньше если нужно было использовать состояние, то нужно было делать всегда класс, если у вас была функциональная компонента и вдруг вам нужно было добавить в нее состояние, то нужно было переписать эту компоненту на класс. Сейчас этого не нужно делать, теперь есть хуки.
## useState
```javaScript
import React,{useState} from "react"; // импортируем функцию useState и сам React
import s from './UseState.module.scss';
const UseState = () => { // создаем нашу компоненту
        // useState принимает в себя наше значение с которым мы будем работать и функцию, которая это значение будет менять.
        // (Если в консоли посмотреть на внутренности useState, то увидим массив из двух элементов. Первый - значение, а второй - функция)
    const [name,setName] = useState('dima');  // Так как мы знаем что useState возвращает массив из двух объектов, мы можем использовать деструктуризацию этого массива. 
 
    
    const click = () => { // создаем свою функцию которая будет использовать функцию из useState,
        setName('Lox'); // меняем значение внутри useState на 'Lox'
    }
    
    const  [likes,setLikes] = useState(0) // Тут тоже самое только с цифрами. Мы сделаем счетчик
    const inc = () => { // Так же функция для изменения
        setLikes(likes + 1); // внутри указываем, что меняем likes на + 1 
    }

    const dec = () => {
        setLikes(likes -1); // тут на -1
    }
    return(
        <div className={s.useState}>
        <h2>Просто страничка</h2>
        <p>{name}</p>
        <p>{likes}</p>

        <button onClick={click}>Click me</button> // вешаем наши события с помощью onClick.
        <button onClick={inc}>+</button> // инкремент. Внутри мы просто указываем функцию, без скобок ()
        <button onClick={dec}>-</button> // Декремент
        </div>
    )
    
}


export default UseState

```
В итоге мы имеем состояние с именем`(name)` и состояние с числом`(likes)` которое будет изменяться при клике. Начальное состояние имени у нас `dima`, при клике меняем на `Lox`.
Начальное состояние likes у нас 0 и мы сделали две функции для изменения этого состояния на +1 и -1.
## Управляемый компонент
Управляемый компонент - это когда мы обновляем `state` и он сразу обновляет нам `UI` то есть нашу компоненту, то что мы видим. Они синхронизированны по сути.
```javaScript

import React,{useState} from "react";
import s from './UseState.module.scss';
const UseState = () => {

   const [name,setName] = useState('Dima');
   const [value,setValue] = useState(''); // задаем стейт пустой строкой для инпута.

    const click = (e) => {
        setName('Sanek');
        if (name == 'Sanek') {
            setName('Dima');
        }
    }
    let contentButton = () => {
        if(name == 'Dima') return 'Sanek';
        if(name == 'Sanek') return 'Dima';
    }

    return(
        <div className={s.useState}>
        <h2>Просто страничка</h2>
        <div className={s.changeName}>
        <p>{name}</p>
        <button onClick={click}>{contentButton()}</button>
        </div>
        <div className={s.input}>
            <p>{`${name}: ${value}`}</p>  {/* выводим value */}
        <input // создаем инпут
        type= 'text'
        onChange={event => setValue(event.target.value)} // меняем инпут на то, что ввели в него и помещаем это в стейт. Стейт меняется помещает все в value и после мы его отображаем.
         value={value}></input> 

        </div>
        
        </div>
    )
    
}


export default UseState
```
Сам способ называется двухсторонним связыванием. Мы связязали значение внутри инпута с состоянием. Подобные компоненты называются управляемыми, так как мы можем изменить значение компонента изменив состояние.
