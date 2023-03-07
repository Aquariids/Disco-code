import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/a11y-dark.css";
import { POSTS_PATH_DOCS } from '../api/paths';
import { withLayout } from '../../layout/Layout';
import { getPostFromSlug, PostMeta } from '../api/api';



interface MDXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: PostMeta
}

const PostPage: NextPage<never> = ({ post }: { post: MDXPost }): JSX.Element => {



    return (
        <div className='page'>
            <Head>
                <title> Документация по разработке сайта </title>
                <meta name="robots" content="noindex"></meta>
            </Head>

                <div className='mdTitle'>
                    <h1>{'Документация по разработке сайта'}</h1>
                </div>
                <MDXRemote  {...post.source} />

        </div>
    );

};





export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async () => {
    const { content, meta } = getPostFromSlug('site-document', POSTS_PATH_DOCS);
    
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

    return { props: { post: { source: mdxSource, meta } } };    

};


