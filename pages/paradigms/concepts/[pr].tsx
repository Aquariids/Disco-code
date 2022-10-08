import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { withLayout } from "../../../layout/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Head from "next/head";
import "highlight.js/styles/a11y-dark.css";
import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";
import cn from "classnames";
import {
  getAllPosts,
  getPostFromSlug,
  getSlugs,
  PostMeta,
} from "../../api/api";
import { POSTS_PATH_PARADIGMS } from "../../api/paths";
import Link from "next/link";

interface MSXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

const PostPage: NextPage<never> = ({
  post,
}: {
  post: MSXPost;
}): JSX.Element => {
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
          content={"Функциональное программирование, ООП, стили написания кода."}
        />
        <meta property="og:title" content="Парадигмы программирования" />
        <meta
          property="og:description"
          content={"Функциональное программирование, ООП, стили написания кода."}
        />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/paradigms" />
        <meta
          property="og:image"
          content="/"
        />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />

        <meta property="og:author" content="Дмитрий черномашенцев" />
        <meta property="og:section" content="Paradigms" />
        <meta property="og:tag" content="OOP, js, paradigms" />
        </Head>

        <AnimationContainer>
          <div className="mdTitle">
            <h1>{post.meta.title}</h1>
          </div>
          <MDXRemote {...post.source} />

          <div className={cn("mainEdit", "page_edit")}>
            <a
              target="_blank"
              rel="noopener"
              href={`https://github.com/Aquariids/Disco-code/blob/main/Content/paradigms/${post.meta.slug}.mdx`}
            >
              {" "}
              Отредактировать эту страницу
            </a>
            <img
              style={{ width: "30px", paddingLeft: "5px" }}
              src="/edit.svg"
            />
          </div>
          <div className={cn("mainFooter", "page_footer")}>
            <Link href={post.meta.prev}>
              {post.meta.prev === "none" ? (
                <span></span>
              ) : (
                "Предыдущая страница"
              )}
            </Link>
            <Link href={post.meta.next}>
              {post.meta.next === "none" ? <span></span> : "Следующая страница"}
            </Link>
          </div>
        </AnimationContainer>
      </div>
    </>
  );
};

export default withLayout(PostPage);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pr } = params as { pr: string };
  const { content, meta } = getPostFromSlug(pr, POSTS_PATH_PARADIGMS);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  const posts = getAllPosts(POSTS_PATH_PARADIGMS).map((post) => post.meta);
  return { props: { post: { source: mdxSource, meta }, posts } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs(POSTS_PATH_PARADIGMS).map((pr) => ({ params: { pr } }));

  return {
    paths,
    fallback: false,
  };
};
