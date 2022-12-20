import { DetailedHTMLProps, HTMLAttributes, } from "react";
import { PostMeta } from "../../../pages/api/api";
export interface IMenu extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>    {
    title:string,
    category?:string,
    page:string,
    posts: PostMeta[]
}

