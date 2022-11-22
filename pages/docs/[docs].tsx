import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/a11y-dark.css";
import { POSTS_PATH_DOCS } from '../api/paths';
import { withLayout } from '../../layout/Layout';
import { getAllPosts, getPostFromSlug, getSlugs, PostMeta } from '../api/api';



interface MDXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: PostMeta
}

const PostPage: NextPage<never> = ({ post }: { post: MDXPost }): JSX.Element => {



    return (
        <div className='page'>
            <Head>
                <title> Документация по разработке сайта </title>
            </Head>

                <div className='mdTitle'>
                    <h1>{'Документация по разработке сайта'}</h1>
                </div>
                <MDXRemote  {...post.source} />

        </div>
    );

};





export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { docs } = params as { docs: string };    
    const { content, meta } = getPostFromSlug(docs, POSTS_PATH_DOCS);
    
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

    const posts = getAllPosts(POSTS_PATH_DOCS)
        .map((post) => post.meta);
    return { props: { post: { source: mdxSource, meta }, posts } };
    

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_DOCS).map((docs) => {
        return ({ params: { docs } });
    });
    return {
        paths,
        fallback: false
    };
};


