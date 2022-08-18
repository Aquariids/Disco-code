import { FunctionComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";


const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
                <Sidebar />
                <div>
                    {children}
                </div>
            <Footer />
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