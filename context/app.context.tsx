import { createContext, ReactNode } from "react";
import { PostMeta } from "../pages/api/api";


export interface IAppContext {
    posts:PostMeta[]
}

export const AppContext = createContext<IAppContext>({posts:[]});

export const AppContextProvider = ({posts,children}:IAppContext & {children: ReactNode}):JSX.Element => {
    return <AppContext.Provider value={{posts}}>
        {children }
        </AppContext.Provider>;
};