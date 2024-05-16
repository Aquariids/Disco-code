import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/night-owl.css";
import cn from 'classnames';
import { getAllPosts, getPostFromSlug, getSlugs, MDXPost } from '../../../api/api';
import { POSTS_PATH_BASIC_REACT, POSTS_PATH_INTERVIEW_REACT } from '../../../api/paths';
import Link from 'next/link';
import s from './../pageReact.module.scss';
import AnimationContainer from '../../../../src/Components/AnimationContainers/AnimationContainer';
import Breadcrumbs from '../../../../src/Components/Breadcrumbs/Breadcrumbs';
import { REACT } from '../../../api/pages';
import { mapReact } from '../../../../src/Components/Breadcrumbs/BreadcrumbsMap';
interface Props { post: MDXPost }

const PostPage: NextPage<Props> = ({ post }): JSX.Element => {


    return (
        <div className='page'>
            <Head>
                <title>{post.meta.title}</title>
                <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
                <meta name="yandex-verification" content="a99ae512e4f1c330" />
                <meta name='description' content={'Уроки по react, reactjs, react статьи,'} />
                <meta property='og:title' content={post.meta.title} />
                <meta property='og:description' content={'Уроки и разбор разных тем по javascript'} />
                <meta property='og:type' content={'article'} />
            </Head>
            <Breadcrumbs map={mapReact} slug={post.meta.title} page={REACT} theme={'React'}/>

            <AnimationContainer>
                <div className='mdTitle'>
                    <h1>{post.meta.title}</h1>
                </div>
              
                <MDXRemote {...post.source} />
                
            </AnimationContainer>

            <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/react/basic-react/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', height: "30px", paddingLeft: '5px' }} src='/edit.svg' /></div>
            <div className={cn(s.footer, 'page_footer')}>
            <Link href={`/content${post.meta.prev}`}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая тема'}</Link>
                    <Link href={`/content${post.meta.next}`}>{post.meta.next === 'none' ? <span></span> : 'Следующая тема'}</Link>
            </div>
            <span className="md_date">{post.meta.date}</span>
            <span className="md_date">{post.meta.newDate && `Обновлено ${post.meta.newDate}`}</span>
        </div>
    );

};




export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { react } = params as { react: string };
    const { content, meta } = getPostFromSlug(react, POSTS_PATH_BASIC_REACT);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight
            ]
        }

    }

    );




    const posts_Interview_React = getAllPosts(POSTS_PATH_INTERVIEW_REACT).map((post) => post.meta);
    const posts_Basic_React = getAllPosts(POSTS_PATH_BASIC_REACT).map((post) => post.meta);
    const AllThemePosts = { posts_Interview_React,posts_Basic_React };

    return { props: { post: { source: mdxSource, meta }, AllThemePosts }, revalidate: 60 };

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_BASIC_REACT).map((react) => {
        return ({ params: { react } });
    });
    return {
        paths,
        fallback: false
    };
};


