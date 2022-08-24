import React from 'react';
import Link from 'next/link';
import { PostMeta } from '../api';
const Articles = ({posts}:{posts:PostMeta[]}) => {
    console.log("(👍≖‿‿≖)👍 ✿ file: Articles.tsx ✿ line 5 ✿ Articles ✿ posts", posts)
    return  <ul>


<div>
            {posts.map((post) => (<li key={Math.random()}>
                <div><Link href={`posts/${post.slug}`}>{post.title}</Link></div>
                </li>))}
            </div>
  </ul>;
};

export default Articles;