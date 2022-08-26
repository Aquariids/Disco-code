import path from "path";
import * as fs from 'fs';
import { sync } from "glob";
import matter from "gray-matter";
import { POSTS_PATHJS } from "../../src/paths";

export const getSlugs = (): string[] => {
    const paths = sync(`${POSTS_PATHJS}/*.mdx`);

    return paths.map(path => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [slug, _ext] = fileName.split(".");
        return slug;
    });
};
export const getAllPosts = () => {
    const posts = getSlugs().map(slug => getPostFromSlug(slug)).sort((a, b) => {
        if (a.meta.date > b.meta.date) return 1;
        if (a.meta.date < b.meta.date) return -1;
        return 0;


    }).reverse();
    return posts;
};


interface Post {
    content: string,
    meta: PostMeta,

}

export interface PostMeta {
    slug: string;
    excerpt: string;
    date: string;
    title: string

}
export const getPostFromSlug = (slug: string): Post => {
    const postPath = path.join(POSTS_PATHJS, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);

    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt ?? "",
            title: data.title ?? slug,
            date: data.date ?? new Date(),
        },
    };

};

