import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../src/api';

const {sidebar,menu} = s;
const Sidebar = ({className, ...props}:SidebarProps):JSX.Element => {



    return (
        <div className={sidebar} {...props}>
            как же я заебался
            {/* <div>
            {posts.map((post) => (<li key={Math.random()}>
                <div><Link href={`posts/${post.slug}`}>{post.title}</Link></div>
                </li>))}
            </div> */}
        </div>
    );
};

export default Sidebar;

