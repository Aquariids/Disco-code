[Включаем auto complete и настраиваем тип](#включаем-auto-complete)
Этот загрузчик позволяет из `svg` сделать компонент. Здесь очень коротко покажу настройки и установку.<br>
Устанавливается с помощью `npm i -D @svgr/webpack`<br>
И мой `next.config` с настройками вебпак.
```js
module.exports = {
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					name: 'removeViewBox',
					active:false
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};
```
После этого мы можем [указать деклорацию](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/TypeScript/bugs.md#cannot) для `svg`.<br>
```ts
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default content;
}
```
Настроить `tsconfig` и тд, но auto complete Не будет работать у `svg` компоненты. Компонент все равно будет `any` типа.<br>
Вот мой компонент, и он `any` типа. Нам нужно, что бы он был `React.FunctionComponent`. Почему же не работает? ведь мы указали деклорацию.<br>
![image](https://user-images.githubusercontent.com/70824286/177039418-79ecf171-df8a-4f02-80b6-698af4b22dbe.png)<br>
### Включаем auto complete
Auto complete не работает потому что в проекте на nextjs в файле `next-env.d.ts` прописаны свои определения типов и там есть определение `image` в которое и входит svg.<br>
Вот как выглядит файл.
```
/// <reference types="next"/>
/// <reference types="next/types/global"/>
/// <reference types="next/image-types/global"/>  - Вот эта строка нам и мешает.
```
`<reference types="next/image-types/global"/>` - эта строка отвечает за определение типов картиночек, и всякого такого в том числе `svg`. Если мы ее нажмем, то попадем туда где все и описано.
```ts

// this file is conditionally added/removed to next-env.d.ts
// if the static image import handling is enabled

declare module '*.png' {
  const content: import('../dist/client/image').StaticImageData

  export default content
}

declare module '*.svg' { // а вот она и беда из за которой у нас и остается тип any
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  const content: any

  export default content
}

declare module '*.jpg' {
  const content: import('../dist/client/image').StaticImageData

  export default content
}

declare module '*.jpeg' {
  const content: import('../dist/client/image').StaticImageData

  export default content
}

declare module '*.gif' {
  const content: import('../dist/client/image').StaticImageData

  export default content
}

declare module '*.webp' {
  const content: import('../dist/client/image').StaticImageData

  export default content
}

declare module '*.avif' {
  const content: import('../dist/client/image').StaticImageData

  export default content
}

declare module '*.ico' {
  const content: import('../dist/client/image').StaticImageData

  export default content
}

declare module '*.bmp' {
  const content: import('../dist/client/image').StaticImageData

  export default content
}

```
Мы Удаляем ту часть где описывается `svg`, а остальное копируем и переносим в свой `d.ts` файл. У меня это выглядит так:
![image](https://user-images.githubusercontent.com/70824286/177039786-0c2375db-cd10-4e3a-8493-8cb7f82bcb56.png)<br>
Ну и само собой добавляем туда свое определние для `svg`.
```ts
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default content;
}

```
Далее внутри файла `next-env.d.ts` мы ничего изменить не можем, при каждом запуске проекта он будет внутри все лишнее удалять.
Поэтому создаем свой файл `next-env-custom.d.ts` и переносим в него настройки кроме той самой строки которая определяет типы image в nextjs.
```ts
/// <reference types="next"/>
/// <reference types="next/types/global"/>
```
Внутри `tsconfig` меняем и дополняем `include`
```ts
 "include": [ 
    "next-env-custom.d.ts", // указываем уже наш кастомный файл
    "**/*.ts",
    "**/*.tsx",
    "@types/image-types.d.ts" // и указываем файл с типами которые копировали
  ],
```
Теперь компонент полноценный.<br>
![image](https://user-images.githubusercontent.com/70824286/177040287-9cba0639-5f28-4121-9f71-369f67a1a2c9.png)<br>
И рабочий auto complete.<br>
![image](https://user-images.githubusercontent.com/70824286/177040319-d8f58b6f-bd8c-4599-b4ca-dc7fe8eae342.png)<br>

