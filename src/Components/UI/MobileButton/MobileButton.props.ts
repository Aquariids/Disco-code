import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface MobileButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    setMobile?:any;
    mobile?: boolean;
}