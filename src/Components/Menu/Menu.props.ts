import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction, } from "react";
export interface IMenu extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title:string,
    category:string,
    dropdown?:boolean,
    page?:string;
    mobileMenu?:boolean;
    setMobile?:Dispatch<SetStateAction<boolean>>;
    mobileTrue?: boolean;
}

export interface mobileMenuProps {
    setMobile?:Dispatch<SetStateAction<boolean>>;
    mobile?:boolean;
}