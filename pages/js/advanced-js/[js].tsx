import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote} from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import "highlight.js/styles/a11y-dark.css";
import cn from 'classnames';
import { getAllPosts, getPostFromSlug, getSlugs, MDXPost } from '../../api/api';
import { POSTS_PATH_ADVANCED_JS, POSTS_PATH_ALGORITHMS_JS, POSTS_PATH_BASIC_JS, POSTS_PATH_INTERVIEW_JS, POSTS_PATH_PRACTICE_JS, POSTS_PATH_UNDER_THE_HOOD_JS } from '../../api/paths';
import Link from 'next/link';
import s from '../pageJs.module.scss';
import AnimationContainer from '../../../src/Components/AnimationContainers/AnimationContainer';

interface Props { post: MDXPost }

const PostPage: NextPage<Props> = ({ post }): JSX.Element => {


    

    return (
        <div className='page'>
            <Head>
                <title>{post.meta.title}</title>
                <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
                <meta name="yandex-verification" content="a99ae512e4f1c330" />
                <meta name='description' content={'Уроки и разборы на продвинутые темы в javascript'} />
                <meta property='og:title' content={post.meta.title} />
                <meta property='og:description' content={'Уроки и разборы на продвинутые темы в javascript'} />
                <meta property='og:type' content={'article'} />
                <meta property='og:image' content='https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:JavaScript-logo.png' />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <AnimationContainer>
                <div className='mdTitle'>
                    <h1>{post.meta.title}</h1>
                </div>

                <MDXRemote  {...post.source} />




                <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/advanced-js/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', height:"30px", paddingLeft: '5px' }} src='/edit.svg' /></div>
                <div className={cn(s.footer, 'page_footer')}>
                    <Link href={post.meta.prev}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая тема'}</Link>
                    <Link href={post.meta.next}>{post.meta.next === 'none' ? <span></span> : 'Следующая тема'}</Link>
                </div>
                <span className="md_date">{post.meta.date}</span>

            </AnimationContainer>

        </div>
    );

};







export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { js } = params as { js: string };
    const { content, meta } = getPostFromSlug(js, POSTS_PATH_ADVANCED_JS);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight
            ]
        }


    });
    
  const posts_Basic_Js = getAllPosts(POSTS_PATH_BASIC_JS).map((post) => post.meta);
  const posts_Advanced_Js = getAllPosts(POSTS_PATH_ADVANCED_JS).map((post) => post.meta);
  const posts_Algorithms_Js = getAllPosts(POSTS_PATH_ALGORITHMS_JS).map((post) => post.meta);
  const posts_Practice_Js = getAllPosts(POSTS_PATH_PRACTICE_JS).map((post) => post.meta);
  const posts_Under_The_Hood_Js = getAllPosts(POSTS_PATH_UNDER_THE_HOOD_JS).map((post) => post.meta);
  const posts_Interview_Js = getAllPosts(POSTS_PATH_INTERVIEW_JS).map((post) => post.meta);

  const AllThemePosts = {posts_Basic_Js,posts_Advanced_Js,posts_Algorithms_Js,posts_Practice_Js,posts_Under_The_Hood_Js,posts_Interview_Js};  
    return { props: { post: { source: mdxSource, meta }, AllThemePosts },revalidate: 60};

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_ADVANCED_JS).map(js => ({ params: { js } }));

    return {
        paths,
        fallback: false
    };
};


