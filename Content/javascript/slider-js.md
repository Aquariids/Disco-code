---
title: 'Пишем классический слайдер'
id: 1
category: 'practice-js'
---


Здесь мы будем работать с `dom` элементами, напишем регулярное выражение используем `webpack`, будем работать с `css` через `js`
## html
У нас будет 4 слайда, вы можете выбрать любые удобные вам картинки, у меня будет гурочка.
```html
<DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.min.css"> <!-- минифицированный css созданный вебпаком -->
        <title>Slider</title>
    </head>

    <body>
        <div class="container">
            <div class="slider">
                <div class="slider-counter">
                    <div class="slider-prev">
                        <img src="./public/icons/left.svg" alt="left"><!-- Стрелка влево -->
                    </div>
                    <span id="current">03</span> <!-- Текущий слайд -->
                    <span id="total">04</span> <!-- общее количество слайдов -->
                    <div class="slider-next">
                        <img src="./public/icons/right.svg" alt="right"> <!-- Стрелка вправо -->
                    </div>
                </div>
                <div class="slider-wrapper">
                    <div class="slider-inner"> <!-- сами слайды -->
                        <div class="slide"> 
                            <img src="./public/img/gura-1.jpg" alt=""> 
                        </div>
                        <div class="slide">
                            <img src="./public/img/gura-2.jpg" alt="">
                        </div>
                        <div class="slide">
                            <img src="./public/img/gura-3.jpg" alt="">
                        </div>
                        <div class="slide">
                            <img src="./public/img/gura-4.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="./dist/bundle.js"></script>  <!-- Подключаем банд созданный вебпаком -->
    </body>

    </html>
```
## webpack и npm
Инициализируем `npm`, называем и описываем проект. После устанавливаем `webpack` и пакеты для него.
```javaScript
npm init // создаем проект
npm i webpack webpack-cli -D // устанавливаем webpack
```
Устанавливаем лоадеры и плагин. О них мы говорили в теме про <span className = 'link_js'> [webpack](/js/practice-js/webpack) </span>
```javaScript
npm install --save-dev css-loader // для css

npm install --save-dev sass-loader // для scss будем на нем писать

npm install -D babel-loader @babel/preset-env // babel 

npm install --save-dev mini-css-extract-plugin // для минификации css

```

### webpack.config.js
Конфиг будет тот же, из урока по webpack.
```javaScript
const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: ['./src/index.js'],
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   watch:true,
   devtool:'source-map',
   
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      },
      {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env']
         }
      }
      }
   ],
      
   },
   plugins: [
      new miniCss({
         filename: 'style.min.css',
      }),
   ]
};

```
## Весь каталог проекта
Вот как у меня все выглядит. Сам слайдер будет в файле `slider.js`, в папке `src` будет `index.js` в котором мы будем импортировать и вызывать слайдер. Тут же будет папка `scss` в ней файл `style.scss`. В папке `public` у нас находятся иконки и картинки.

<div className='container-img'> <span className="img"> ![project slider](/images/Content/Js/project_slider.png) </span></div>

### style.scss
```scss
.slider {
    width: 650px; 
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &-counter {
        display: flex;
        width: 180px;
        align-items: center;
        font-size: 24px;
        color: rgba(0,0,0, .5);
    }
    &-wrapper {
        width: 100%;
        margin-top: 15px;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    }
    &-prev {
        margin-right: 10px;
        cursor: pointer;
        color: transparent;
        text-shadow: 0 0 0 black;
    }
    &-next {
        margin-left: 10px;
        cursor: pointer;
        color: transparent;
        text-shadow: 0 0 0 black;
    }
    #current {
        font-size: 48px;
        font-weight: bold;
        color: rgba(0,0,0,1);
    }
}
.slide {
    width: 100%;
    height: 390px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

}
 
.carousel-indicators { 
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    }
    .dot {
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        color: transparent;
        text-shadow: 0 0 0 black;
    }
```

## Пишем слайдер slider.js
Начнем с главного модуля `slider.js`
### Получаем элементы 
```javaScript

// создаем главную функцию(модуль) slider
// эта функция будет принимать в себя все состовляющие слайдера и вызывать мы будем ее в index.js
function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
    const slides = document.querySelectorAll(slide), // каждый слайд - '.slide'
        slider = document.querySelector(container), // весь слайдер - '.slider'
        slidesWrapper = document.querySelector(wrapper), // обертка слайдера '.slider-wrapper'
        slidesField = document.querySelector(field), // поле слайдеров '.slider-inner' именно оно будет смещаться при переключении слайдеров.
        prev = document.querySelector(prevArrow), // стрелочка для предыдущего слайдера - '.slider-prev'
        next = document.querySelector(nextArrow), // стрелочка для следующего слайдера - '.slider-next'
        total = document.querySelector(totalCounter), // число общего кол слайдеров - '#total'
        current = document.querySelector(currentCounter), // текущий слайдер - '#current'
        width = window.getComputedStyle(slidesWrapper).width; // ширина нашего блока со слайдерами, нужно это будет для того, что бы подгонять слайды под эту ширину, '.slider-wrapper' у нас имеет ширину 100% идет эта ширина с родителя '.slider'
        // getComputedStyle() - позволяет нам получить css свойсвта элемента
    let slideIndex = 1; // индекс каждого слайдера
    let offset = 0; // поле которое мы будем смещать, для смещения слайдеров влево или право

}


export default slider; // экспортируем наш слайдер
```
### работаем со slidesField
Поле `slidesField` нужно для того, что бы в нем выставить горизонтально наши слайды
```javaScript
    slidesField.style.width = `${100 * slides.length }%`; // мы умножаем 100 на кол слайдеров и получаем в нашем случае 400%
    slidesField.style.display = 'flex'; // потом мы выставляем поле горизонтально, с помощью flex
    slidesField.style.transition = '0.5s all'; // ну транзишен для красоты при переключении

     slides.forEach(slide => { // далее установим каждому слайду одинаковую ширину
        slide.style.width = width; // та самашя ширина которую мы получали с помощью getComputedStyle()
        });
```
В итоге мы получим блок в котором видно будет все наши слайды горизонтально, ширина блока будет зависить от кол слайдеров.
Теперь нам нужно сделать так, что бы эти слайды были скрыты границами блока `slidesWrapper`.
```javaScript
    slidesWrapper.style.overflow = 'hidden'; // так наши слайды не будут выходить за пределы  slidesWrapper
    // ширина slidesWrapper - у нас зависит от самого слайдера, и самим слайдам мы задали ту же самую шиирну
    // поэтому slide будет занимать всю ширину slidesWrapper, остальные слайды при этом будут скрыты из за overflow = 'hidden'
```


<div className="container-app">
<iframe  className="content-app-slider-js" src="https://slider-app-discocode-practice.vercel.app" > </iframe>
</div>