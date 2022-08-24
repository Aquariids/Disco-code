import { ParsedUrlQuery } from 'querystring';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IParams extends ParsedUrlQuery {
    slug: string
}

export interface IPropsPostPage extends Record<string,unknown>,DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    content:string,
    slug:string,
    frontmatter: {
        date:string,
        title:string,
        excerpt:string
    }
}




