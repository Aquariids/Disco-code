import { getAllPosts } from "./api";
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { POSTS_PATH_JS, POSTS_PATH_NEXTJS, POSTS_PATH_PARADIGMS, POSTS_PATH_REACT, POSTS_PATH_TS } from "./paths";


export default async (req: { headers: { host: any; }; },res: { writeHead: (arg0: number, arg1: { "Content-Type": string; }) => void; end: (arg0: string) => void; }) => {
    const metaJs = getAllPosts(POSTS_PATH_JS).map((post) => post.meta);
    const metaTs = getAllPosts(POSTS_PATH_TS).map((post) => post.meta);
    const metaNextJs = getAllPosts(POSTS_PATH_NEXTJS).map((post) => post.meta);
    const metaPr = getAllPosts(POSTS_PATH_PARADIGMS).map((post) => post.meta);
    const metaReact = getAllPosts(POSTS_PATH_REACT).map((post) => post.meta);


    const links:string[] = [];

    
    const stream = new SitemapStream({ hostname: `https://discocode.ru/` });
    metaJs.forEach((post)=> {
        stream.write({
            url:`/js/${post.category}/${post.slug}`,
            changefreq:"daily",
            priority:0.9
        });
    });
    metaTs.forEach((post)=> {
        stream.write({
            url:`/ts/${post.category}/${post.slug}`,
            changefreq:"daily",
            priority:0.9
        });
    });
    metaNextJs.forEach((post)=> {
        stream.write({
            url:`/next-js/${post.category}/${post.slug}`,
            changefreq:"daily",
            priority:0.9
        });
    });
    metaReact.forEach((post)=> {
        stream.write({
            url:`/react/${post.category}/${post.slug}`,
            changefreq:"daily",
            priority:0.9
        });
    });
    metaPr.forEach((post)=> {
        stream.write({
            url:`/paradigms/${post.category}/${post.slug}`,
            changefreq:"daily",
            priority:0.9
        });
    });

    res.writeHead(200,{
        "Content-Type":"application/xml"
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data)=> data.toString());

    res.end(xmlString);
    
};

