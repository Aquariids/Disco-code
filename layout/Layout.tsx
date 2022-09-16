import { FunctionComponent, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import s from './Layout.module.css';
import { AppContextProvider, IAppContext } from "../context/app.context";
const { wrapper, header, sidebar, footer, body, content} = s;
import cn from 'classnames';
import { useRouter } from "next/router";
import ModalMenu from "../src/Components/Modal/ModalMenu";
import MobileButton from "../src/Components/UI/MobileButton/MobileButton";
import Menu from "../src/Components/Menu/Menu";
const Layout = ({children, }: LayoutProps): JSX.Element => {

    const router = useRouter();
    
    return (
        <>

            <div className={cn(wrapper,{
                [s.wrapper2]: router.asPath.length > 18
            })}>
                <Header className={header} />
                <Sidebar className={sidebar} />
                <div className={body}>
                    <div className={content}>  
                    {/* <div className={cn(s.menu, {
                        [s.showmenu]: mobileActive === true
                    })}>
                    <Menu title="Базовый JavaScript" category='basicjs' page='js'/>
                    <Menu title="Продвинутый JavaScript" category='advancedjs' page='js'/>
                    </div> */}
                        {children}
                    </div>
                </div>
                <Footer className={footer} />
            </div>

        </>

    );
};


export const withLayout = <T extends Record<string, unknown>& IAppContext>(Component: FunctionComponent<T>) => {
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