import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction, } from "react";
export interface IMenu extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title:string,
    category:string,
    dropdown?:boolean,
    page?:string;
    mobileMenu?:boolean;
    setMobile?:any;
    mobileTrue?: boolean;
}

export interface mobileMenuProps {
    setMobile?:any;
    mobile?:boolean;

}