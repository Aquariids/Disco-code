import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/mono-blue.css";
import { getAllPosts, getPostFromSlug, getSlugs, PostMeta } from '../../api/api';
import { POSTS_PATH_TS } from '../../api/paths';
import Link from 'next/link';
import s from './ts.module.css';
import cn from 'classnames';
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
            <meta name="yandex-verification" content="a99ae512e4f1c330" />
            <meta name='description' content={'Уроки по typescript, ts статьи,'}/>
            <meta property='og:title' content={post.meta.title}/>
            <meta property='og:description' content={'Уроки и разбор разных тем по typescript'}/>
            <meta property='og:type' content={'article'}/>

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
        <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel ='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/typescript/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{width:'30px',paddingLeft:'5px'}} src='/edit.svg'/></div>
        <div className={cn(s.footer, 'page_footer')}>
            <Link href={post.meta.prev}>{post.meta.prev === 'none'?<span></span>:'Предыдущая страница'}</Link>
            <Link href={post.meta.next}>{post.meta.next === 'none'?<span></span>:'Следующая страница'}</Link>

        </div>

        <MobileButton path='/ts'/>

        </motion.div>
        </AnimatePresence>

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


