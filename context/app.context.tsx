import { createContext, ReactNode } from "react";
import { PostMeta } from "../pages/api/api";


export interface IAppContext {
    postsJs?:any,
    postsNextJs?:any
}

export const JsContext = createContext<IAppContext>({postsJs:[]});
export const NextJsContext = createContext<IAppContext>({postsNextJs:[]});


export const AppContextProvider = ({postsJs,postsNextJs,children}:IAppContext & {children: ReactNode}):JSX.Element => {

    return <JsContext.Provider value={{postsJs}}>
        <NextJsContext.Provider value={{postsNextJs}}>
        {children }
        </NextJsContext.Provider>
        </JsContext.Provider>;
};