import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { withLayout } from "../../../layout/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Head from "next/head";
// import "highlight.js/styles/a11y-dark.css";
import "highlight.js/styles/dark.css";

import cn from "classnames";
import {
  getAllPosts,
  getPostFromSlug,
  getSlugs,
  MDXPost,
} from "../../api/api";
import { POSTS_PATH_NEXTJS } from "../../api/paths";
import Link from "next/link";
import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";



const PostPage: NextPage<never> = ({ post,}: MDXPost): JSX.Element => {
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
            content={"Основные темы в nextJs, маршрутизация, SSR, и многое другое."}
          />
          <meta
            property="og:description"
            content={"Разбираемся в nextJs"}
          />

          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://discocode.ru/js" />
          {/* <meta
            property="og:image"
            content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seancdavis.com%2Fposts%2Frun-loop-n-times-javascript%2F&psig=AOvVaw3_1bJy-ASlokQV8SIxMjzi&ust=1665134220667000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi09r-iy_oCFQAAAAAdAAAAABAI"
          /> */}
          <meta property="og:site_name" content="DiscoCode" />
          <meta property="og:locale" content="ru_Ru" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:author" content="Дмитрий черномашенцев" />
          <meta property="og:section" content="nextJs" />
          <meta property="og:tag" content="next, nextJs, js" />
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
              href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/${post.meta.slug}.mdx`}
            >
              {" "}
              Отредактировать эту страницу
            </a>
            <img
              style={{ width: "30px", paddingLeft: "5px" }}
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
          </div>
        </AnimationContainer>
      </div>
    </>
  );
};

export default withLayout(PostPage);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { next } = params as { next: string };
  const { content, meta } = getPostFromSlug(next, POSTS_PATH_NEXTJS);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
   
  }
  );

  const posts = getAllPosts(POSTS_PATH_NEXTJS).map((post) => post.meta);
  return { props: { post: { source: mdxSource, meta }, posts },revalidate: 10 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs(POSTS_PATH_NEXTJS).map((next) => ({ params: { next } }));

  return {
    paths,
    fallback: false,
  };
};
