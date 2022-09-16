import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface MobileButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    mobileActive?:string
}