import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/nord.css";
import cn from 'classnames';
import { getAllPosts, getPostFromSlug, getSlugs, PostMeta } from '../../api/api';
import { POSTS_PATH_REACT } from '../../api/paths';
import Link from 'next/link';
import s from './react.module.css';
import AnimationContainer from '../../../src/Components/AnimationContainer/AnimationContainer';
interface MSXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: PostMeta
}


const PostPage: NextPage<never> = ({ post }: { post: MSXPost }): JSX.Element => {



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

            <AnimationContainer>
                <div className='mdTitle'>
                    <h1>{post.meta.title}</h1>
                </div>
                <MDXRemote  {...post.source} />
            </AnimationContainer>

            <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/react/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', paddingLeft: '5px' }} src='/edit.svg' /></div>
            <div className={cn(s.footer, 'page_footer')}>
                <Link href={post.meta.prev}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая страница'}</Link>
                <Link href={post.meta.next}>{post.meta.next === 'none' ? <span></span> : 'Следующая страница'}</Link>
            </div>
        </div>
    );

};




export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { react } = params as { react: string };
    const { content, meta } = getPostFromSlug(react, POSTS_PATH_REACT);
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

    const posts = getAllPosts(POSTS_PATH_REACT)
        .map((post) => post.meta);


    return { props: { post: { source: mdxSource, meta }, posts } };

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_REACT).map((react) => {
        return ({ params: { react } });
    });
    return {
        paths,
        fallback: false
    };
};


