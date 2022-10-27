import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface MobileButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setMobile?:any;
    mobile?: boolean;
}