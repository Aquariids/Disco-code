"use strict";

/* eslint-disable no-undef */

/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
var fs = require('fs'); // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef


var path = require('path');

var createMenu = function createMenu(_ref) {
  var theme = _ref.theme,
      posts = _ref.posts,
      page = _ref.page;
  var themePosts = posts.post.map(function (el) {
    return "posts_".concat(el);
  });
  var propsPosts = posts.post.map(function (element) {
    return "posts_".concat(element, ":T");
  });
  var dropDownLinks = posts.post.map(function (el, i) {
    return "\n        <DropdownMenuLinks posts={posts_".concat(el, "} title='").concat(posts.title[i], "' category='").concat(posts.category[i], "' page='").concat(page, "'/>");
  });
  var dropdownComponent = "\nimport React, { useContext } from 'react';\nimport {AppContext } from '../../../../context/app.context';\nimport { PostMeta } from '../../../../pages/api/api';\nimport DropdownMenuLinks from '../DropdownMenuLinks';\nimport { ".concat(theme, "ContextProps } from './posts").concat(theme, ".props';\n\nconst DropdownMenu").concat(theme, " = (): JSX.Element => {\n\n    const { AllThemePosts } = useContext(AppContext);\n    const {").concat(themePosts, "}:").concat(theme, "ContextProps<PostMeta[]> = AllThemePosts;\n\n        return (\n            <>\n                ").concat(dropDownLinks.join(''), "\n            </>\n        );\n    \n\n};\n\nexport default DropdownMenu").concat(theme, ";\n    ");
  var mainLinks = posts.post.map(function (el, i) {
    return "\n        <MenuMainLinks posts={posts_".concat(el, "} title='").concat(posts.title[i], "' category='").concat(posts.category[i], "' page='").concat(page, "'/>");
  });
  var mainComponent = "\n    import React, { useContext } from 'react';\nimport { AppContext } from '../../../../context/app.context';\nimport { PostMeta } from '../../../../pages/api/api';\nimport MenuMainLinks from '../MenuMainLinks';\nimport { ".concat(theme, "ContextProps } from './posts").concat(theme, ".props';\n\n\nconst MainMenu").concat(theme, " = (): JSX.Element => {\n\n    const { AllThemePosts } = useContext(AppContext);\n    const { ").concat(themePosts, "}:").concat(theme, "ContextProps<PostMeta[]> = AllThemePosts;\n\n        return (\n            <>\n            ").concat(mainLinks.join(''), "\n            </>\n        );\n    \n\n};\n\nexport default MainMenu").concat(theme, ";\n    ");
  var mobileLinks = posts.post.map(function (el, i) {
    return "\n        <MenuMobileLinks posts={posts_".concat(el, "} title='").concat(posts.title[i], "' category='").concat(posts.category[i], "' page='").concat(page, "'/>");
  });
  var mobileComponent = "\nimport React, { useContext } from 'react';\nimport { AppContext } from '../../../../context/app.context';\nimport { PostMeta } from '../../../../pages/api/api';\nimport MenuMobileLinks from '../MenuMobileLinks';\nimport {".concat(theme, "ContextProps } from './posts").concat(theme, ".props';\n\n\nconst MobileMenu").concat(theme, " = (): JSX.Element => {\n\n    const { AllThemePosts } = useContext(AppContext);\n    const { ").concat(themePosts, "}:").concat(theme, "ContextProps<PostMeta[]> = AllThemePosts;\n\n        return (\n            <>\n            ").concat(mobileLinks.join(''), "\n            </>\n        );\n    \n\n};\n\nexport default MobileMenu").concat(theme, ";\n    "); // eslint-disable-next-line no-undef

  var createAllMenus = function createAllMenus() {
    return regeneratorRuntime.async(function createAllMenus$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (res) {
              fs.mkdirSync(path.resolve(__dirname, 'src', 'Components', 'Menu', "Menu".concat(theme)));
              res();
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  createAllMenus().then(function () {
    fs.writeFile(path.resolve(__dirname, 'src', 'Components', 'Menu', "Menu".concat(theme), "DropdownMenu".concat(theme, ".tsx")), "".concat(dropdownComponent), function () {});
    fs.writeFile(path.resolve(__dirname, 'src', 'Components', 'Menu', "Menu".concat(theme), "MainMenu".concat(theme, ".tsx")), "".concat(mainComponent), function () {});
    fs.writeFile(path.resolve(__dirname, 'src', 'Components', 'Menu', "Menu".concat(theme), "MobileMenu".concat(theme, ".tsx")), "".concat(mobileComponent), function () {});
    fs.writeFile(path.resolve(__dirname, 'src', 'Components', 'Menu', "Menu".concat(theme), "posts".concat(theme, ".props.ts")), "export interface ".concat(theme, "ContextProps<T> {").concat(propsPosts, "}"), function () {});
  })["catch"](function (err) {
    console.log('ПАПКА УЖЕ ПОХОЖЕ ЕСТЬ');
  });
}; // Указываем названи еглавной темы например : Js,NextJs,React - на выходе у папок будет MenuJs, MenuNextJs, MenuReact.


var theme = 'React'; // если это файлы то на выходе будет DropdownMenuJs,DropdownMenuNextJs и так далее.

var post = ['Basic_React', 'Interview_React']; // посты которые получаем из контекста. на выходе будет posts_Basic_Nest_Js и тд

var category = ['basic-react', 'interview-react']; // категория темы. Стоят на каждой mdx странице.

var title = ['Базовые темы react', 'Собеседование']; // тайтл для  подписки категории

var page = 'react'; // главная страница темы. Например js,react,next-js
// создаем папку с тремя компонентами для меню в сайдбаре, меню основого и мобильного меню. По пути src/Components/Menu
// что бы ручками меньше работать мне при создании новой темы на сайте.

createMenu({
  theme: theme,
  posts: {
    post: post,
    category: category,
    title: title
  },
  page: page
});