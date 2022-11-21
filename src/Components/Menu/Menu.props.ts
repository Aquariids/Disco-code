import { DetailedHTMLProps, HTMLAttributes, } from "react";
import { PostMeta } from "../../../pages/api/api";
export interface IMenu extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title:string,
    category?:string,
    dropdown?:boolean,
    page?:string;
    mobileMenu?:boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setMobile?:any;
    mobileTrue?: boolean;
    posts: PostMeta[] | undefined
}

export interface mobileMenuProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setMobile?:any;
    mobile?:boolean;
    mobileMenuActive:boolean;
    sideBarMenuActive:boolean;
    postsBasic: PostMeta[] | undefined;

}