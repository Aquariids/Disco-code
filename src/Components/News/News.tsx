import Link from 'next/link';
import React, { useState } from 'react';
import s from './News.module.scss';
const News = () => {

    const [posts,setposts] = useState([
        {body:`Добавлен новый раздел "Практика js" и добавил статью про`, link:'webpack', src:'js/practice-js/webpack', date: '17.11.2022'},
        {body:`Написал о том как сделать`, link:'классический слайдер на js', src:'js/practice-js/slider-js', date: '19.11.2022'},
        {body:`Добавлена новая статья о том как работают`, link:'web запросы и ответы', src:'js/practice-js/webpack', date: '30.11.2022'},
        {body:`Закончил писать про`, link:'fetch & promise', src:'js/advanced-js/promise-fetch_api', date: '02.12.2022'},
        {body:`Добавлен новый раздел "JavaScript под капотом" и первая статья о работе`, link:'движка в javaScript & JRE', src:'js/under-the-hood-js/engine', date: '7.12.2022'},


      ]);
    return (
        <div className={s.news}>
        <span className={s.news__title}> <h3>Что нового</h3> </span>
        <div className={s.news__content}>
            {
                posts.map((post)=> {
                    return (
                    <>
                        <span className={s.news__item}>{post.body} <Link href={post.src}>{post.link}</Link><span className={s.news__date}>{post.date}</span></span>
                    </>);
                })
            }
        </div>
      </div>
    );
};

export default News;
