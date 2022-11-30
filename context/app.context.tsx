import { createContext, ReactNode } from "react";
type TODO_ANY = any;
export interface IAppContext {
    AllThemePosts: TODO_ANY;

}
export const AppContext = createContext<IAppContext>({AllThemePosts:[]});

export const AppContextProvider = ({AllThemePosts,children}:IAppContext & {children: ReactNode}):JSX.Element => {

    return <AppContext.Provider value={{AllThemePosts}}>
                {children }
            </AppContext.Provider>;
};