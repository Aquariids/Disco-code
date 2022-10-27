import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/a11y-dark.css";
import cn from 'classnames';
import { getAllPosts, getPostFromSlug, getSlugs, MDXPost } from '../../api/api';
import { POSTS_PATH_JS } from '../../api/paths';
import Link from 'next/link';
import s from '../pageJs.module.css';

import AnimationContainer from '../../../src/Components/AnimationContainers/AnimationContainer';
import ListMobileMenu from '../../../src/Components/mobileModalMenu/ListMobileMenu/ListMobileMenu';





const PostPage: NextPage<never> = ({ post }: MDXPost): JSX.Element => {




    return (
        <div className='page'>
            <Head>
                <title>{post.meta.title}</title>
                <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
                <meta name="yandex-verification" content="a99ae512e4f1c330" />
                <meta name='description' content={'Уроки по javascript, задачи, алгоритмы.js статьи,'} />
                <meta property='og:title' content={post.meta.title} />
                <meta property='og:description' content={'Уроки и разбор разных тем по javascript'} />
                <meta property='og:type' content={'article'} />
                <meta property='og:image' content='https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:JavaScript-logo.png' />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>


            <AnimationContainer>
            <div className='mdTitle'>
                <h1>{post.meta.title}</h1>
            </div>
                <MDXRemote  {...post.source} />
                <ListMobileMenu />


                <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', paddingLeft: '5px' }} src='/edit.svg' /></div>
                <div className={cn(s.footer, 'page_footer')}>
                    <Link href={post.meta.prev}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая страница'}</Link>
                    <Link href={post.meta.next}>{post.meta.next === 'none' ? <span></span> : 'Следующая страница'}</Link>
                </div>
            </AnimationContainer>

        </div>
    );

};







export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { js } = params as { js: string };
    const { content, meta } = getPostFromSlug(js, POSTS_PATH_JS);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight
            ]
        }


    });


    const posts = getAllPosts(POSTS_PATH_JS)
        .map(post => post.meta);
    return { props: { post: { source: mdxSource, meta }, posts },revalidate: 10 };

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_JS).map(js => ({ params: { js } }));

    return {
        paths,
        fallback: false
    };
};


