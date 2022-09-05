import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface IMenu extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title:string,
    category:string,
}