import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/atom-one-dark.css";
import { getAllPosts, getPostFromSlug, getSlugs, PostMeta } from '../api/api';
import { POSTS_PATH_TS } from '../api/paths';

interface MSXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: PostMeta
}



const PostPage: NextPage<never> = ({ post }: { post: MSXPost }): JSX.Element => {


    return (
        <div>

            <Head>
                <title>{post.meta.title}</title>
            </Head>
            <h1>{post.meta.title}</h1>
            <MDXRemote {...post.source} />
        </div>
    );
};





export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { ts } = params as { ts: string };
    const { content, meta } = getPostFromSlug(ts, POSTS_PATH_TS);
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

    const posts = getAllPosts(POSTS_PATH_TS)
        .slice(0, 9)
        .map((post) => post.meta);


    return { props: { post: { source: mdxSource, meta }, posts } };

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_TS).map((ts) => {
        return ({ params: { ts } });
    });
    return {
        paths,
        fallback: false
    };
};

