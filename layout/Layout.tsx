import { FunctionComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import s from './Layout.module.css';
import { AppContextProvider, IAppContext } from "../context/app.context";
const { wrapper, header, sidebar, footer, body, content } = s;
import cn from 'classnames';
import { useRouter } from "next/router";
import ListMobileMenu from "../src/Components/mobileModalMenu/ListMobileMenu/ListMobileMenu";
const Layout = ({ children, }: LayoutProps): JSX.Element => {
    
    const router = useRouter();
    const r = router.asPath.split('/').length;
    
    return (
        <>

            <div className={cn(wrapper, {
                [s.wrapper2]: (r >= 3)
            })}>
                <Header className={header} />
                <Sidebar className={sidebar} />
                <div className={body}>
                    <div className={content}>
                    <ListMobileMenu />
                        {children}
                    </div>
                </div>
                <Footer className={footer} />
            </div>

        </>

    );
};


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
    console.log("(👍≖‿‿≖)👍 ✿ file: Layout.tsx ✿ line 43 ✿ withLayoutComponent ✿ props", props)

        return (
            <AppContextProvider
                postsTs={props.postsTs}
                postsNextJs={props.postsNextJs}
                postsJs={props.postsJs}>
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};