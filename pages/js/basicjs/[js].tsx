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
import MobileButton from '../../../src/Components/MobileButton/MobileButton';
interface MSXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: PostMeta
}



const PostPage: NextPage<never> = ({ post }: { post: MSXPost }): JSX.Element => {
    

    return (
        <div className={s.content}>
            <Head>
                <title>{post.meta.title}</title>
            </Head>
            <h1>{post.meta.title}</h1>
            <MDXRemote {...post.source} />
            <div className={cn(s.edit, 'page_edit')}><a target='_blank' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{width:'32px',paddingLeft:'5px'}} src='/edit.svg'/></div>
            <div className={cn(s.footer, 'page_footer')}>
                <Link href={post.meta.prev}>{post.meta.prev === 'none'?' ':'Предыдущая страница'}</Link>
                <Link href={post.meta.next}>{post.meta.next === 'none'?' ':'Следующая страница'}</Link>
            </div>

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
        .slice(0, 9)
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


