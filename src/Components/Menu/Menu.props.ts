import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";
export interface IMenu extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title:string,
    category:string,
    dropdown?:boolean,
    page?:string;
}