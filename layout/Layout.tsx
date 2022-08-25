import { FunctionComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import s from './Layout.module.css';
import MdxStyle from './MdxContent.module.css';
const {content} = MdxStyle;
const {wrapper,header,sidebar,footer,body,btn} = s;
const Layout = ({children,...props}: LayoutProps): JSX.Element => {
    return (
        <>
        <div className={wrapper}>
        <Header className={header} />
        <Sidebar className={sidebar} />
                <div className={body}>
                    <div className={content}>                    {children}
</div>
            </div>
            <Footer className={footer}/>
            {/* <div className={content}> <button className={btn}></button></div> */}
        </div>
</>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        
        return (
            <Layout>
                
                <Component {...props} />
            </Layout>
        );
    };
};