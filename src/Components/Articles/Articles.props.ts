import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface articlesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    category: 'js' | 'other'
}