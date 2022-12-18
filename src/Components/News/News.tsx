import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import s from './News.module.scss';
import { INewsPost } from './News.props';



const News = () => {


    const [posts, setPosts] = useState<INewsPost[]>();
    const [errPosts, setErrPosts] = useState();
    const newsPosts = posts && posts;


    useEffect(() => {
        const fetchData = async () => {
            return await fetch(
                './news.json',
            ).then(data => data.json()).then(data => {
                setPosts(data);
            }).catch((err) => {
                setErrPosts(err);
            });

        };

        fetchData();
    }, []);


    if (!posts) {
        return <div className={s.news}>
            <span className={s.news__title}> <h3>Что нового</h3> </span>
            <ul className={s.news__content}>
                <p>Произошла ошибка, новости похитили инопланетяне и оставили непонятное послание:</p>
                {`${errPosts}`}
            </ul>
        </div>
    }
    return (
        <div className={s.news}>
            <span className={s.news__title}> <h3>Что нового</h3> </span>
            <ul className={s.news__content}>
                {
                    newsPosts && newsPosts.slice(newsPosts.length - 7, newsPosts.length).map((post) => { // моя гениальная идея удалять первый элемент, при заполнении
                        return (
                            <li key={post.id} className={s.news__item}>{post.body} <Link href={post.src}>{post.link}</Link><span className={s.news__date}>{post.date}</span></li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default News;
