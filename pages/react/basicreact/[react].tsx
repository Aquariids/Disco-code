import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/atom-one-dark.css";
import { getAllPosts, getPostFromSlug, getSlugs, PostMeta } from '../../api/api';
import { POSTS_PATH_REACT } from '../../api/paths';
import Link from 'next/link';
import cn from 'classnames';
import s from './react.module.css';
import MobileButton from '../../../src/Components/UI/MobileButton/MobileButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
interface MSXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: PostMeta
}



const PostPage: NextPage<never> = ({ post }: { post: MSXPost }): JSX.Element => {
const router = useRouter();
    return (
        <div>
        <Head>
            <title>{post.meta.title}</title>
        </Head>
        <AnimatePresence>

                <motion.div
                    transition={{ type: "spring", stiffness: 65 }}
                    key={router.asPath}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    id="page-transition-container"
                >
                    <h1>{post.meta.title}</h1>

                    <MDXRemote  {...post.source} />
                </motion.div>
            </AnimatePresence>
        <div className={cn(s.edit, 'page_edit')}><a target='_blank' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/react/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{width:'30px',paddingLeft:'5px'}} src='/edit.svg'/></div>
        <div className={cn(s.footer, 'page_footer')}>
            <Link href={post.meta.prev}>{post.meta.prev === 'none'?<span></span>:'Предыдущая страница'}</Link>
            <Link href={post.meta.next}>{post.meta.next === 'none'?'':'Следующая страница'}</Link>
        </div>
        <MobileButton path='/react'/>

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


