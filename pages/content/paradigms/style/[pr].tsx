import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { withLayout } from "../../../../layout/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Head from "next/head";
import "highlight.js/styles/dark.css";
import AnimationContainer from "../../../../src/Components/AnimationContainers/AnimationContainer";
import cn from "classnames";
import {
  getAllPosts,
  getPostFromSlug,
  getSlugs,
  MDXPost,

} from "../../../api/api";
import { POSTS_PATH_PARADIGMS_STYLE } from "../../../api/paths";
import Link from "next/link";
import Breadcrumbs from "../../../../src/Components/Breadcrumbs/Breadcrumbs";
import { mapParadigms } from "../../../../src/Components/Breadcrumbs/BreadcrumbsMap";
import { PARADIGMS } from "../../../api/pages";


interface Props { post: MDXPost }


const PostPage: NextPage<Props> = ({
  post,
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

          <meta property="og:author" content="Дмитрий Черномашенцев" />
          <meta property="og:section" content="Paradigms" />
          <meta property="og:tag" content="OOP, js, paradigms" />
        </Head>
        <Breadcrumbs  slug = {post.meta.title} page={PARADIGMS} map={mapParadigms} theme={"Парадигмы программирования"}/>

        <AnimationContainer>
          <div className="mdTitle">
            <h1>{post.meta.title}</h1>
          </div>
          <MDXRemote {...post.source} />

          <div className={cn('mainEdit', "page_edit")}>
            <a
              target="_blank"
              rel="noopener"
              href={`https://github.com/Aquariids/Disco-code/blob/main/Content/paradigms/style/${post.meta.slug}.mdx`}
            >
              {" "}
              Отредактировать эту страницу
            </a>
            <img
              style={{ width: "30px", height: "30px", paddingLeft: "5px" }}
              src="/edit.svg"
            />
          </div>
          <div className={cn('mainFooter', "page_footer")}>
          <Link href={`/content${post.meta.prev}`}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая тема'}</Link>
          <Link href={`/content${post.meta.next}`}>{post.meta.next === 'none' ? <span></span> : 'Следующая тема'}</Link>
          </div>
        </AnimationContainer>
      </div>
    </>
  );
};

export default withLayout(PostPage);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pr } = params as { pr: string };
  const { content, meta } = getPostFromSlug(pr, POSTS_PATH_PARADIGMS_STYLE);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  const post_Style_Paradigms = getAllPosts(POSTS_PATH_PARADIGMS_STYLE).map((post) => post.meta);
  const AllThemePosts = { post_Style_Paradigms };

  return { props: { post: { source: mdxSource, meta }, AllThemePosts }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs(POSTS_PATH_PARADIGMS_STYLE).map((pr) => ({ params: { pr } }));

  return {
    paths,
    fallback: false,
  };
};

