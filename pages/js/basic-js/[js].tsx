import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { withLayout } from "../../../layout/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Head from "next/head";
import "highlight.js/styles/a11y-dark.css";
import cn from "classnames";
import { getAllPosts, getPostFromSlug, getSlugs, MDXPost } from "../../api/api";
import { POSTS_PATH_ADVANCED_JS, POSTS_PATH_ALGORITHMS_JS, POSTS_PATH_BASIC_JS, POSTS_PATH_PRACTICE_JS, POSTS_PATH_UNDER_THE_HOOD_JS } from "../../api/paths";
import Link from "next/link";
import s from "../pageJs.module.css";
import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";

const PostPage: NextPage<never> = ({ post }: MDXPost): JSX.Element => {

  
  return (
    <>
      <div className="page">
        <Head>
          <title>{post.meta.title}</title>
          <meta property="og:title" content={post.meta.title} />
          <meta
            name="google-site-verification"
            content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
          />

          <meta name="yandex-verification" content="a99ae512e4f1c330" />
          <meta
            name="description"
            content={"Уроки и разборы по базовым темам в javascript"}
          />
          <meta
            property="og:description"
            content={"Уроки и разборы по базовым темам в javascript"}
          />

          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://discocode.ru/js" />
          <meta
            property="og:image"
            content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seancdavis.com%2Fposts%2Frun-loop-n-times-javascript%2F&psig=AOvVaw3_1bJy-ASlokQV8SIxMjzi&ust=1665134220667000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi09r-iy_oCFQAAAAAdAAAAABAI"
          />
          <meta property="og:site_name" content="DiscoCode" />
          <meta property="og:locale" content="ru_Ru" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:author" content="Дмитрий черномашенцев" />
          <meta property="og:section" content="JavaScript" />
          <meta property="og:tag" content="JavaScript, js" />
        </Head>

        <AnimationContainer>
          <div className="mdTitle">
            <h1>{post.meta.title}</h1>
          </div>

          <MDXRemote {...post.source} />

          <div className={cn(s.edit, "page_edit")}>
            <a
              target="_blank"
              rel="noopener"
              href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/basic-js/${post.meta.slug}.mdx`}
            >
              {" "}
              Отредактировать эту страницу
            </a>
            <img
              style={{ width: "30px", paddingLeft: "5px" }}
              src="/edit.svg"
            />
          </div>
          {/* <div>
          <div>
            <a
              target="_blank"
              rel="noopener"
              href={`https://telegram.me/share/url?url=https://discocode.ru/js/basicjs/${post.meta.slug}`}
            >
              Поделиться с друзьями
              </a></div>
          </div> */}
          <div className={cn(s.footer, "page_footer")}>
            <Link href={post.meta.prev}>
              {post.meta.prev === "none" ? (
                <span></span>
              ) : (
                "Предыдущая тема"
              )}
            </Link>
            <Link href={post.meta.next}>
              {post.meta.next === "none" ? <span></span> : "Следующая тема"}
            </Link>
          </div>
        </AnimationContainer>
      </div>
    </>
  );
};

export default withLayout(PostPage);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { js } = params as { js: string };
  const { content, meta } = getPostFromSlug(js, POSTS_PATH_BASIC_JS);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug, // добавляет заголовку id ввиде самого заголовка
        [rehypeAutolinkHeadings, { behavior: "wrap" }], // внутрь заголовка добавляет тег а c id в виде имени заголовка
        rehypeHighlight,
      ],
    },
  });

  const posts_Basic_Js = getAllPosts(POSTS_PATH_BASIC_JS).map((post) => post.meta);
  const posts_Advanced_Js = getAllPosts(POSTS_PATH_ADVANCED_JS).map((post) => post.meta);
  const posts_Algorithms_Js = getAllPosts(POSTS_PATH_ALGORITHMS_JS).map((post) => post.meta);
  const posts_Practice_Js = getAllPosts(POSTS_PATH_PRACTICE_JS).map((post) => post.meta);
  const posts_Under_The_Hood_Js = getAllPosts(POSTS_PATH_UNDER_THE_HOOD_JS).map((post) => post.meta);
  const AllThemePosts = {posts_Basic_Js,posts_Advanced_Js,posts_Algorithms_Js,posts_Practice_Js,posts_Under_The_Hood_Js};  

  

  return {
    props: { post: { source: mdxSource, meta }, AllThemePosts },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs(POSTS_PATH_BASIC_JS).map((js) => ({ params: { js } }));

  return {
    paths,
    fallback: false,
  };
};
