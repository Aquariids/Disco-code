/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');

// Указываем названи еглавной темы например : Js,NextJs,React - на выходе у папок будет MenuJs, MenuNextJs, MenuReact.
const theme = 'React';  // если это файлы то на выходе будет DropdownMenuJs,DropdownMenuNextJs и так далее.
const post = ['Basic_React', 'Interview_React']; // посты которые получаем из контекста. на выходе будет posts_Basic_Nest_Js и тд
const category = ['basic-react', 'interview-react']; // категория темы. Стоят на каждой mdx странице.
const title = ['Базовые темы react', 'Собеседование']; // тайтл для  подписки категории
const page = 'nest-js'; // главная страница темы. Например js,react,next-js
const idDynamicPage = 'nest'; // айдишник для динамических страниц на выходе у страниц выглядит так [nest]
// порядок путей постов очень важен. Первый будет отрисован в первой папке, второй во второй и так далее. Поэтому если у нас категория basic идет первой, значит и путь для этой котегории должен идти первым
const pathPosts = ['POSTS_PATH_BASIC_NESTJS', 'POSTS_PATH_ADVANCED_NESTJS']; // пути до постов
const urlPaths = ['/Content/docs', '/Content/hello'] // конкретный путь до контента, в итоге будет так  export const POSTS_PATH_BASIC_NESTJS = path.join(process.cwd(), '/Content/docs');
const titleIndexPage = 'Онлайн руководство по React';
const textIndexPage = ` 
Познакомимся с таким javaScript фреймворком как next.js.
Узнаем, что это за рендеринг такой SSR и SSG. Посмотрим как работают такие сайты как этот.
Научимся получать данные на сервере, создавать удобные динамические маршруты и многому другому! 
`;


const createPATHS = async () => {

  const urlPathsExport = urlPaths.map((item,i) => {
    return `
export const ${pathPosts[i]} = path.join(process.cwd(), '${item}');`
} ) 
 

  fs.appendFile(path.resolve(__dirname, 'pages', 'api','paths.ts'), `${urlPathsExport.join('')}`,()=> {})


    
}

createPATHS();
const createPages = async () => {
  const PATH = pathPosts.map((item, i) => {
    return item;
  });


  const allPosts = post.map(item => {
    return `posts_${item}`;
  });


  const PATHAndPosts = post.map((item, i) => {
    return `
        const posts_${item} = getAllPosts(${pathPosts[i]}).map((post) => post.meta);
        `;
  });
  const indexPageComponent = `
    
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import { getAllPosts } from "../api/api";
import {${PATH}} from "../api/paths";
import Head from "next/head";
import MainMenu${theme} from "../../src/Components/Menu/Menu${theme}/MainMenu${theme}";

export const getStaticProps: GetStaticProps = async () => {
  ${PATHAndPosts.join('')}

  const AllThemePosts = {${allPosts}};
  return {
    props: {
      AllThemePosts,
    },
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage = (): JSX.Element => {
  return (
    <div className="page_content">
      <Head>
        <title>Содержание</title>
        <meta
          name="google-site-verification"
          content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
        />

        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta
            name="description"
            content={"${theme}"}
          />
          <meta
            property="og:description"
            content={"Разбираемся в ${theme}"}
          />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/${page}" />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />
        <meta property="og:author" content="Дмитрий черномашенцев" />
        <meta property="og:section" content="javaScript" />
        <meta property="og:tag" content="javaScript" />
      </Head>

      <div className="page_body">
      <h1> ${titleIndexPage} </h1>

        <div className="page_menu">
        <p className="page__text">
       ${textIndexPage}

      </p>
        <div className="page__title">Содержание</div>
        <MainMenu${theme} />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);

    
    
    
    `;


  const dynamicPageComponent = pathPosts.map((item, i) => {
    return `
        import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
        import { withLayout } from "../../../layout/Layout";
        import { serialize } from "next-mdx-remote/serialize";
        import { MDXRemote } from "next-mdx-remote";
        import rehypeSlug from "rehype-slug";
        import rehypeHighlight from "rehype-highlight";
        import rehypeAutolinkHeadings from "rehype-autolink-headings";
        import Head from "next/head";
        import "highlight.js/styles/dark.css";
        import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";
        import cn from "classnames";
        import {
          getAllPosts,
          getPostFromSlug,
          getSlugs,
          MDXPost,
        
        } from "../../api/api";
        import { ${PATH} } from "../../api/paths";
        import Link from "next/link";
        
        
        interface Props { post: MDXPost }
        
        
        const PostPage: NextPage<Props> = ({
          post,
        }): JSX.Element => {
          return (
            <>
              <div className="page">
                <Head>
                  <title>{post.meta.title}</title>
                  <meta property="og:title" content={post.meta.title} />
                  <meta
                    name="google-site-verification"
                    content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
                  />
        
                  <meta name="yandex-verification" content="a99ae512e4f1c330" />
                  <meta
                    name="description"
                    content={""}
                  />
                  <meta
                    property="og:description"
                    content={""}
                  />
        
                  <meta property="og:type" content="article" />
                  <meta property="og:url" content="https://discocode.ru/paradigms" />
                  <meta
                    property="og:image"
                    content="/"
                  />
                  <meta property="og:site_name" content="DiscoCode" />
                  <meta property="og:locale" content="ru_Ru" />
        
                  <meta property="og:author" content="Дмитрий Черномашенцев" />
                  <meta property="og:section" content="${theme}" />
                  <meta property="og:tag" content="${theme}" />
                </Head>
        
                <AnimationContainer>
                  <div className="mdTitle">
                    <h1>{post.meta.title}</h1>
                  </div>
                  <MDXRemote {...post.source} />
        
                  <div className={cn('mainEdit', "page_edit")}>
                    <a
                      target="_blank"
                      rel="noopener"
                      href={\`https://github.com/Aquariids/Disco-code/blob/main/Content/paradigms/style/\${post.meta.slug}.mdx\`}
                    >
                      {" "}
                      Отредактировать эту страницу
                    </a>
                    <img
                      style={{ width: "30px", height: "30px", paddingLeft: "5px" }}
                      src="/edit.svg"
                    />
                  </div>
                  <div className={cn('mainFooter', "page_footer")}>
                    <Link href={post.meta.prev}>
                      {post.meta.prev === "none" ? (
                        <span></span>
                      ) : (
                        "Предыдущая тема"
                      )}
                    </Link>
                    <Link href={post.meta.next}>
                      {post.meta.next === "none" ? <span></span> : "Следующая тема"}
                    </Link>
                  </div>
                </AnimationContainer>
              </div>
            </>
          );
        };
        
        export default withLayout(PostPage);
        
        export const getStaticProps: GetStaticProps = async ({ params }) => {
          const { ${idDynamicPage} } = params as { ${idDynamicPage}: string };
          const { content, meta } = getPostFromSlug(${idDynamicPage}, ${item});
          const mdxSource = await serialize(content, {
            mdxOptions: {
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight,
              ],
            },
          });
        
          ${PATHAndPosts.join('')}
          const AllThemePosts = { ${allPosts} };
        
          return { props: { post: { source: mdxSource, meta }, AllThemePosts }, revalidate: 60 };
        };
        
        export const getStaticPaths: GetStaticPaths = async () => {
         
            const paths = getSlugs(${item}).map((${idDynamicPage}) => ({ params: { ${idDynamicPage} } }));
          return {
            paths,
            fallback: false,
          };
        };
        
        
        `;
  });

  new Promise((res) => {
    for (let i = 0; i < category.length; i++) {
      fs.mkdirSync(path.resolve(__dirname, 'pages', `${page}`, `${category[i]}`), { recursive: true });
    }
    res();
  }).then(() => {
    fs.writeFile(path.resolve(__dirname, 'pages', `${page}`, `index.tsx`), `${indexPageComponent}`, () => { });
    for (let i = 0; i < category.length; i++) {
      fs.writeFile(path.resolve(__dirname, 'pages', `${page}`, `${category[i]}`, `[${idDynamicPage}].tsx`), `${dynamicPageComponent[i]}`, () => { });
    }
  });







};

createPages();


const createMenu = ({ theme, posts, page }) => {
  const themePosts = posts.post.map(el => {
    return `posts_${el}`;
  });

  const propsPosts = posts.post.map(element => {
    return `posts_${element}:T`;
  });

  const dropDownLinks = posts.post.map((el, i) => {
    return `
        <DropdownMenuLinks posts={posts_${el}} title='${posts.title[i]}' category='${posts.category[i]}' page='${page}'/>`;
  });





  const dropdownComponent = `
import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { ${theme}ContextProps } from './posts${theme}.props';

const DropdownMenu${theme} = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {${themePosts}}:${theme}ContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                ${dropDownLinks.join('')}
            </>
        );
    

};

export default DropdownMenu${theme};
    `;

  const mainLinks = posts.post.map((el, i) => {
    return `
        <MenuMainLinks posts={posts_${el}} title='${posts.title[i]}' category='${posts.category[i]}' page='${page}'/>`;
  });
  const mainComponent = `
    import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import MenuMainLinks from '../MenuMainLinks';
import { ${theme}ContextProps } from './posts${theme}.props';


const MainMenu${theme} = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const { ${themePosts}}:${theme}ContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
            ${mainLinks.join('')}
            </>
        );
    

};

export default MainMenu${theme};
    `;

  const mobileLinks = posts.post.map((el, i) => {
    return `
        <MenuMobileLinks posts={posts_${el}} title='${posts.title[i]}' category='${posts.category[i]}' page='${page}'/>`;
  });
  const mobileComponent = `
import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import MenuMobileLinks from '../MenuMobileLinks';
import {${theme}ContextProps } from './posts${theme}.props';


const MobileMenu${theme} = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const { ${themePosts}}:${theme}ContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
            ${mobileLinks.join('')}
            </>
        );
    

};

export default MobileMenu${theme};
    `;




  // eslint-disable-next-line no-undef


  const createAllMenus = async () => {
    return new Promise((res) => {
      fs.mkdirSync(path.resolve(__dirname, 'src', 'Components', 'Menu', `Menu${theme}`)); // папку делаем
      res();
    });
  };


  createAllMenus().then(() => { // после создания папки делаем файлы внутри
    fs.writeFile(path.resolve(__dirname, 'src', 'Components', 'Menu', `Menu${theme}`, `DropdownMenu${theme}.tsx`), `${dropdownComponent}`, () => { });
    fs.writeFile(path.resolve(__dirname, 'src', 'Components', 'Menu', `Menu${theme}`, `MainMenu${theme}.tsx`), `${mainComponent}`, () => { });
    fs.writeFile(path.resolve(__dirname, 'src', 'Components', 'Menu', `Menu${theme}`, `MobileMenu${theme}.tsx`), `${mobileComponent}`, () => { });
    fs.writeFile(path.resolve(__dirname, 'src', 'Components', 'Menu', `Menu${theme}`, `posts${theme}.props.ts`), `export interface ${theme}ContextProps<T> {${propsPosts}}`, () => { });
  }).catch(err => {
    console.log('ПАПКА УЖЕ ПОХОЖЕ ЕСТЬ');
  });

};







// создаем папку с тремя компонентами для меню в сайдбаре, меню основого и мобильного меню. По пути src/Components/Menu
// что бы ручками меньше работать мне при создании новой темы на сайте.
createMenu({
  theme, posts: {
    post,
    category,
    title,

  }, page
});



