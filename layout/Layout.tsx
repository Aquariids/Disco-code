import { FunctionComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import s from './Layout.module.css';

const {wrapper,header,sidebar,footer,body} = s;
const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={wrapper}>
            <Header className={header} /><br/>
                <Sidebar className={sidebar} />
                <div className={body}>
                    {children}
                </div>
            <Footer className={footer}/>
        </div>
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