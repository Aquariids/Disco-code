import { FunctionComponent, useContext } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import s from './Layout.module.css';
import MdxStyle from './MdxContent.module.css';
import IPost from "../interface/IPost";
import { AppContextProvider } from "../context/app.context";
const { content } = MdxStyle;
const { wrapper, header, sidebar, footer, body, btn } = s;
const Layout = ({children, }: LayoutProps): JSX.Element => {


    
    
    return (
        <>
            <div className={wrapper}>
                <Header className={header} />
                <Sidebar className={sidebar}/>
                <div className={body}>
                    <div className={content}>                        {children}
</div>
                </div>
                <Footer className={footer} />
                {/* <div className={content}> <button className={btn}></button></div> */}
            </div>
        </>
    );
};


export const withLayout = <T extends Record<string, unknown> >(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {

        return (
                <AppContextProvider posts={props.posts}>
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
                </AppContextProvider>
        );
    };
};