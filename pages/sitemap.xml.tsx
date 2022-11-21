import * as fs from 'fs'
import { GetServerSideProps } from "next";
import { getAllPosts } from './api/api';
import { POSTS_PATH_JS, POSTS_PATH_NEXTJS, POSTS_PATH_PARADIGMS, POSTS_PATH_REACT, POSTS_PATH_TS } from './api/paths';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'http://discocode.ru';

  const metaJs = getAllPosts(POSTS_PATH_JS);
  const metaTs = getAllPosts(POSTS_PATH_TS);
  const metaNextJs = getAllPosts(POSTS_PATH_NEXTJS);
  const metaPr = getAllPosts(POSTS_PATH_PARADIGMS);
  const metaReact = getAllPosts(POSTS_PATH_REACT);


  const dynamicPathsJs = metaJs.map(post => {
    return `${BASE_URL}/js/${post.meta.category}/${post.meta.slug}`;
  });

  const dynamicPathsTs = metaTs.map(post => {
    return `${BASE_URL}/ts/${post.meta.category}/${post.meta.slug}`;
  });
  const dynamicPathsReact = metaReact.map(post => {
    return `${BASE_URL}/react/${post.meta.category}/${post.meta.slug}`;
  });
  const dynamicPathsNextJs = metaNextJs.map(post => {
    return `${BASE_URL}/next-js/${post.meta.category}/${post.meta.slug}`;
  });
  const dynamicPathsPr = metaPr.map(post => {
    return `${BASE_URL}/paradigms/${post.meta.category}/${post.meta.slug}`;
  });
  const staticPaths = fs
    .readdirSync("pages")
    .filter(staticPage => {
      return ![
        "docs",
        "dist",
        "api",
        "_app.tsx",
        "_document.tsx",
        "404.tsx",
        "sitemap.xml.tsx",
      ].includes(staticPage);
    })
    .map(staticPagePath => {
      return `${BASE_URL}/${staticPagePath.split('.')[0]}`;
    })

  const allPaths = [...staticPaths, ...dynamicPathsJs, ...dynamicPathsTs, ...dynamicPathsReact, ...dynamicPathsNextJs, ...dynamicPathsPr];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths.map(url => (
        `<url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`
      )).join("")}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
};

export default Sitemap;