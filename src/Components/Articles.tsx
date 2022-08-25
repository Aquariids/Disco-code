import React from 'react';
import Link from 'next/link';
import { PostMeta } from '../api';
import Header from '../../layout/Header/Header';
import s from './Articles.module.css'
import HeaderMenu from './HeaderMenu/HeaderMenu';
const Articles = ({ posts }: { posts: PostMeta[] }) => {
    return <div>

        <div className={s.articles}>

            {posts.map((post) => (<li style={{listStyleType:'none'}} key={Math.random()}>

                <div style={{fontSize:'19px', fontWeight: 400}}><Link href={`posts/${post.slug}`}>{post.title}</Link></div>

                </li>))}
        </div>
    </div>


};

export default Articles;