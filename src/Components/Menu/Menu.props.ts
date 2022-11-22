import { DetailedHTMLProps, HTMLAttributes, } from "react";
import { PostMeta } from "../../../pages/api/api";
import { mobileMenuProps } from "../mobileModalMenu/MobileModalMenu.props";
export interface IMenu extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, mobileMenuProps    {
    title:string,
    category?:string,
    dropdown?:boolean,
    page:string,
    posts: PostMeta[]
    
}

