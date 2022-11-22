import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/mono-blue.css";
import { getAllPosts, getPostFromSlug, getSlugs, MDXPost } from '../../api/api';
import { POSTS_PATH_BASIC_TS } from '../../api/paths';
import Link from 'next/link';
import s from './../pageTs.module.css';
import cn from 'classnames';
import AnimationContainer from '../../../src/Components/AnimationContainers/AnimationContainer';



const PostPage: NextPage<never> = ({ post }: MDXPost): JSX.Element => {



    return (
        <div className='page'>
            <Head>
                <title>{post.meta.title}</title>
                <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
                <meta name="yandex-verification" content="a99ae512e4f1c330" />
                <meta name='description' content={'Уроки по typescript, ts статьи,'} />
                <meta property='og:title' content={post.meta.title} />
                <meta property='og:description' content={'Уроки и разбор разных тем по typescript'} />
                <meta property='og:type' content={'article'} />
            </Head>
            <AnimationContainer>
                <div className='mdTitle'>
                    <h1>{post.meta.title}</h1>
                </div>
                <MDXRemote  {...post.source} />

            </AnimationContainer>

            <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/typescript/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', paddingLeft: '5px' }} src='/edit.svg' /></div>
            <div className={cn(s.footer, 'page_footer')}>
                <Link href={post.meta.prev}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая тема'}</Link>
                <Link href={post.meta.next}>{post.meta.next === 'none' ? <span></span> : 'Следующая тема'}</Link>
            </div>
        </div>
    );

};





export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { ts } = params as { ts: string };
    const { content, meta } = getPostFromSlug(ts, POSTS_PATH_BASIC_TS);
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

    const posts_Basic_Ts = getAllPosts(POSTS_PATH_BASIC_TS).map((post) => post.meta);
    const AllThemePosts = {posts_Basic_Ts,};

    return { props: { post: { source: mdxSource, meta }, AllThemePosts } };

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_BASIC_TS).map((ts) => {
        return ({ params: { ts } });
    });
    return {
        paths,
        fallback: false
    };
};


