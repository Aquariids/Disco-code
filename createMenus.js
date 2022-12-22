/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');




const createMenu =  ({theme, posts,page}) => {
    const themePosts = posts.post.map(el => {
        return `posts_${el}`;
    });

    const propsPosts = posts.post.map(element => {
        return `posts_${element}:T`;
    });

    const dropDownLinks = posts.post.map((el,i) => {
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

    const mainLinks = posts.post.map((el,i) => {
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

    const mobileLinks = posts.post.map((el,i) => {
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
    fs.mkdirSync(path.resolve(__dirname,'src','Components','Menu',`Menu${theme}`));
    fs.writeFile(path.resolve(__dirname,'src','Components','Menu',`Menu${theme}`, `DropdownMenu${theme}.tsx`),`${dropdownComponent}`, ()=> {
    
    });
    fs.writeFile(path.resolve(__dirname,'src','Components','Menu',`Menu${theme}`, `MainMenu${theme}.tsx`),`${mainComponent}`, ()=> {
       
    });
    fs.writeFile(path.resolve(__dirname,'src','Components','Menu',`Menu${theme}`, `MobileMenu${theme}.tsx`),`${mobileComponent}`, ()=> {
       
    });

    fs.writeFile(path.resolve(__dirname,'src','Components','Menu',`Menu${theme}`, `posts${theme}.props.ts`),`export interface ${theme}ContextProps<T> {${propsPosts}}`, ()=> {
        
});
    

};

// Указываем названи еглавной темы например : Js,NextJs,React - на выходе у папок будет MenuJs, MenuNextJs, MenuReact.
const theme = 'React';  // если это файлы то на выходе будет DropdownMenuJs,DropdownMenuNextJs и так далее.
const post = ['Basic_React','Interview_React']; // посты которые получаем из контекста. на выходе будет posts_Basic_Nest_Js и тд
const category = ['basic-react','interview-react']; // категория темы. Стоят на каждой mdx странице.
const title = ['Базовые темы react','Собеседование']; // тайтл для  подписки категории
const page = 'react'; // главная страница темы. Например js,react,next-js
createMenu({theme, posts:{
    post,
    category,
    title,

},page});





// const createPagePosts = (posts) => {
//     fs.path.re
// }