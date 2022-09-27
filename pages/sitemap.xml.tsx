import { GetServerSideProps } from "next"
import * as fs from 'fs'
const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://discocode.ru/'

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      // сюда мы будем писать урлы вашего сайта
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };

  
};

export default Sitemap;