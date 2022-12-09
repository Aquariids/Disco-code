import type { GetStaticProps, NextPage } from "next";
import { withLayout } from "../../layout/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Head from "next/head";
import "highlight.js/styles/dark.css";
import AnimationContainer from "../../src/Components/AnimationContainers/AnimationContainer";
import cn from "classnames";
import {
  getPostFromSlug,
  MDXPost,

} from "../api/api";
import { POSTS_PATH_WEB } from "../api/paths";
import Link from "next/link";


const PostPage: NextPage<never> = ({
  post,
}: MDXPost): JSX.Element => {
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
          content={"Как работает web - request & response, что за HTTP запросы и ответы, TCP/IP"}
        />
        <meta
          property="og:description"
          content={"Как работает web - request & response, что за HTTP запросы и ответы, TCP/IP"}
        />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/web-request&response" />
        <meta
          property="og:image"
          content="/"
        />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />

        <meta property="og:author" content="Дмитрий Черномашенцев" />
        <meta property="og:section" content="web-request&response" />
        <meta property="og:tag" content="HTTP, js, web,request,response" />
        </Head>

        <AnimationContainer>
          <div className="mdTitle">
            <h1>{post.meta.title}</h1>
          </div>
          <MDXRemote {...post.source} />
          <div className={cn('mainEdit', "page_edit")}>
            <a
              target="_blank"
              rel="noopener"
              href={`https://github.com/Aquariids/Disco-code/blob/main/Content/web/${post.meta.slug}.mdx`}
            >
              {" "}
              Отредактировать эту страницу
            </a>
            <img
              style={{ width: "30px", height:"30px",paddingLeft: "5px" }}
              src="/edit.svg"
            />
          </div>
          <div className={cn('mainFooter', "page_footer")}>
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
            <span className="md_date">{post.meta.date}</span>
          </div>
        </AnimationContainer>
      </div>
    </>
  );
};

export default withLayout(PostPage);

export const getStaticProps: GetStaticProps = async () => {
  const { content, meta } = getPostFromSlug('request&response', POSTS_PATH_WEB);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });


  
  return { props: { post: { source: mdxSource, meta } },revalidate: 60 };
};


