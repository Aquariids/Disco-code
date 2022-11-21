import { getAllPosts } from "./api";
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { POSTS_PATH_JS } from "./paths";


export default async (req: { headers: { host: any; }; }, res: { writeHead: (arg0: number, arg1: { "Content-Type": string; }) => void; end: (arg0: any) => void; }) => {
    const meta = getAllPosts(POSTS_PATH_JS).map((post) => post.meta);


    const links:string[] = [];

    
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    meta.forEach((post)=> {
        stream.write({
            url:`/${post.category}/${post.slug}`,
            changefreq:"daily",
            priority:0.9
        });
    });

    res.writeHead(200,{
        "Content-Type":"application/xml"
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data: { toString: () => any; })=> data.toString());

    res.end(xmlString);
};

