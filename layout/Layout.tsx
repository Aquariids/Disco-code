import { FunctionComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import s from './Layout.module.scss';
import { AppContextProvider, IAppContext } from "../context/app.context";
const { wrapper, header, sidebar, footer, body, content } = s;
import cn from 'classnames';
import { useRouter } from "next/router";
import ListMobileMenu from "../src/Components/ListMobileMenu/ListMobileMenu";
import { MDXPost } from "../pages/api/api";
const Layout = ({ children, }: LayoutProps): JSX.Element => {
    
    const router = useRouter();
    const r = router.asPath.split('/').length;
    
    return (
        <>

            <div className={cn(wrapper, {
                [s.wrapperWithoutRightSide]: (r >= 3 && router.asPath.split('/')[1] != 'tests'),
                [s.noneAnimeBgForQuiz]: router.asPath.startsWith('/tests'),
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


interface post {
    post: MDXPost
}

export const withLayout = <T extends Record<string, unknown> & IAppContext & post> (Component: FunctionComponent<T>) => {
    
    return function withLayoutComponent(props: T): JSX.Element {
        
        return (
            <AppContextProvider AllThemePosts={props.AllThemePosts} >
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};