import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/a11y-dark.css";
import { getAllPosts, getPostFromSlug, getSlugs, PostMeta } from '../../api/api';
import { POSTS_PATH_JS } from '../../api/paths';
import Link from 'next/link';

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
            <Link href={post.meta.next}> след страница </Link>
            <Link href={post.meta.prev}> пред страница </Link>

        </div>
    );
};





export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { js } = params as { js: string };
    const { content, meta } = getPostFromSlug(js,POSTS_PATH_JS);
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


