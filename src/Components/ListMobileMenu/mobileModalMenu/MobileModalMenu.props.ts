export interface mobileModalMenuProps {
    ts?:'ts',
    js?:'js',
    react?:'react';
    paradigms?:'paradigms'
    nextJs?:'next-js'
    htmlCss?: 'html-css',
    
}

    type TODO_ANY = any;

export interface mobileMenuProps {
    mobileMenu?:boolean;
    mobileTrue?: boolean;
    mobile?:boolean;
    setMobile?:React.Dispatch<React.SetStateAction<boolean>> | TODO_ANY;

}