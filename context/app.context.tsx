import { createContext, ReactNode } from "react";
export interface IAppContext {
    AllThemePosts:  any;
}
export const AppContext = createContext<IAppContext>({
    AllThemePosts: [],
});

export const AppContextProvider = ({AllThemePosts,children}:IAppContext & {children: ReactNode}):JSX.Element => {

    return <AppContext.Provider value={{AllThemePosts}}>
                {children }
            </AppContext.Provider>;
};