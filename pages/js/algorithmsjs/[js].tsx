import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/a11y-dark.css";
import cn from 'classnames';
import { getAllPosts, getPostFromSlug, getSlugs, PostMeta } from '../../api/api';
import { POSTS_PATH_JS } from '../../api/paths';
import Link from 'next/link';
import s from './js.module.css';
import MobileButton from '../../../src/Components/UI/MobileButton/MobileButton';
import { useState } from 'react';
import useWindowDimensions from '../../../src/hooks/UseWindowDimensions';
import MenuJs from '../../../src/Components/Menu/MenuJs/MenuJs';
import AnimationContainer from '../../../src/Components/AnimationContainer/AnimationContainer';
interface MSXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: PostMeta
}





const PostPage: NextPage<never> = ({ post }: { post: MSXPost }): JSX.Element => {

    const { height, width } = useWindowDimensions();

    const [mobile, setMobile] = useState(false);

    if (width && (width <= 785)) {
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

                <h1>{post.meta.title}</h1>
                <MDXRemote  {...post.source} />

                <div className={cn('modal', {
                    ['modaltrue']: mobile === true
                })}>
                    <div className='bg'>
                        <MenuJs sideBarMenuActive={false} mobileMenuActive={true} setMobile={setMobile} mobile={mobile} />
                    </div>
                </div>
                <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', paddingLeft: '5px' }} src='/edit.svg' /></div>
                <div className={cn(s.footer, 'page_footer')}>
                    <Link href={post.meta.prev}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая страница'}</Link>
                    <Link href={post.meta.next}>{post.meta.next === 'none' ? '' : 'Следующая страница'}</Link>
                </div>
                <MobileButton mobile={mobile} setMobile={setMobile} path='/js' />
            </div>
        );

    } else {
        return (
            <div >
                <Head>
                    <title>{post.meta.title}</title>
                    <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
                    <meta name="yandex-verification" content="a99ae512e4f1c330" />
                    <meta name='description' content={'Уроки по javascript, задачи, алгоритмы.js статьи,'} />
                    <meta property='og:title' content={post.meta.title} />
                    <meta property='og:description' content={'Уроки и разбор разных тем по javascript'} />
                    <meta property='og:type' content={'article'} />
                    <meta property='og:image' content='https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:JavaScript-logo.png' />
                    <meta property="og:image:width" content="510" />
                    <meta property="og:image:height" content="228" />

                </Head>
                    <AnimationContainer>
                    <h1>{post.meta.title}</h1>
                        <MDXRemote  {...post.source} />
                        <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', paddingLeft: '5px' }} src='/edit.svg' /></div>
                        <div className={cn(s.footer, 'page_footer')}>
                            <Link href={post.meta.prev}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая страница'}</Link>
                            <Link href={post.meta.next}>{post.meta.next === 'none' ? '' : 'Следующая страница'}</Link>
                        </div>
                    </AnimationContainer>
                        

            </div>
        );
    }
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
    return { props: { post: { source: mdxSource, meta }, posts } };

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_JS).map(js => ({ params: { js } }));

    return {
        paths,
        fallback: false
    };
};

