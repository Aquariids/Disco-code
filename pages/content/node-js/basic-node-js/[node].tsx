import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { withLayout } from "../../../../layout/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Head from "next/head";
import s from '.././pageNodeJs.module.scss';

import "highlight.js/styles/devibeans.css";


import cn from "classnames";
import {
  getAllPosts,
  getPostFromSlug,
  getSlugs,
  MDXPost,
} from "../../../api/api";
import { POSTS_PATH_BASIC_NODEJS,} from "../../../api/paths";
import Link from "next/link";
import AnimationContainer from "../../../../src/Components/AnimationContainers/AnimationContainer";
import Breadcrumbs from "../../../../src/Components/Breadcrumbs/Breadcrumbs";
import { NODE_JS } from "../../../api/pages";
import { mapNodeJs } from "../../../../src/Components/Breadcrumbs/BreadcrumbsMap";



interface Props { post: MDXPost }

const PostPage: NextPage<Props> = ({post}): JSX.Element => {
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
            content={"Онлайн руководство по node js"}
          />
          <meta
            property="og:description"
            content={"Разбираем базовые темы node.js"}
          />

          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://discocode.ru/node-js" />
          {/* <meta
            property="og:image"
            content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seancdavis.com%2Fposts%2Frun-loop-n-times-javascript%2F&psig=AOvVaw3_1bJy-ASlokQV8SIxMjzi&ust=1665134220667000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi09r-iy_oCFQAAAAAdAAAAABAI"
          /> */}
          <meta property="og:site_name" content="DiscoCode" />
          <meta property="og:locale" content="ru_Ru" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:author" content="Дмитрий Черномашенцев" />
          <meta property="og:section" content="nodeJs" />
          <meta property="og:tag" content="node, nodeJs, js,javascript" />
        </Head>
        <Breadcrumbs page={NODE_JS} theme="Node.js" slug = {post.meta.title} map={mapNodeJs}/>

        <AnimationContainer>
          <div className="mdTitle">
            <h1>{post.meta.title}</h1>
          </div>
          <MDXRemote {...post.source} />


          <div className={cn(s.edit, "page_edit")}>
            <a
              target="_blank"
              rel="noopener"
              href={`https://github.com/Aquariids/Disco-code/blob/main/Content/node-js/basic-node-js/${post.meta.slug}.mdx`}
            >
              {" "}
              Отредактировать эту страницу
            </a>
            <img
              style={{ width: "30px", height:"30px", paddingLeft: "5px" }}
              src="/edit.svg"
            />
          </div>
          <div className={cn(s.footer, "page_footer")}>
          <Link href={`/content${post.meta.prev}`}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая тема'}</Link>
          <Link href={`/content${post.meta.next}`}>{post.meta.next === 'none' ? <span></span> : 'Следующая тема'}</Link>
          </div>
          <span className="md_date">{post.meta.date}</span>

        </AnimationContainer>
      </div>
    </>
  );
};

export default withLayout(PostPage);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { node } = params as { node: string };
  const { content, meta } = getPostFromSlug(node, POSTS_PATH_BASIC_NODEJS);
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

  const posts_Basic_Node_Js = getAllPosts(POSTS_PATH_BASIC_NODEJS).map((post) => post.meta);
  const AllThemePosts = {posts_Basic_Node_Js,};
  
  return { props: { post: { source: mdxSource, meta }, AllThemePosts },revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs(POSTS_PATH_BASIC_NODEJS).map((node) => ({ params: { node } }));

  return {
    paths,
    fallback: false,
  };
};
