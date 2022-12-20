import { createContext, ReactNode } from "react";
export interface IAppContext {
    AllThemePosts:  any;
}
interface IMobileContext {
    propsMobile: any;
}

export const AppContext = createContext<IAppContext>({
    AllThemePosts: [],
});

export const MobileContext = createContext<IMobileContext>({propsMobile: []});


export const AppContextProvider = ({AllThemePosts,children}:IAppContext & {children: ReactNode}):JSX.Element => {

    return <AppContext.Provider value={{AllThemePosts}}>
                {children }
            </AppContext.Provider>;
};