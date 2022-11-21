import { createContext, ReactNode } from "react";
import { PostMeta } from "../pages/api/api";


export interface IAppContext {
    postsJs?:any,
    basicJs?:PostMeta[]
}

export const AppContext = createContext<IAppContext>({postsJs:[]});
export const basicJsContext = createContext<IAppContext>({basicJs:[]});


export const AppContextProvider = ({postsJs,basicJs,children}:IAppContext & {children: ReactNode}):JSX.Element => {

    return <AppContext.Provider value={{postsJs}}>
        <basicJsContext.Provider value={{basicJs}}>
        {children }
        </basicJsContext.Provider>
        </AppContext.Provider>;
};