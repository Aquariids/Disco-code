import { createContext, ReactNode } from "react";
import { PostMeta } from "../pages/api/api";


export interface IAppContext {
    postsJs?:any,
    postsNextJs?:any,
    postsTs?:any,
}

export const JsContext = createContext<IAppContext>({postsJs:[]});
export const NextJsContext = createContext<IAppContext>({postsNextJs:[]});
export const TsContext = createContext<IAppContext>({postsTs:[]});



export const AppContextProvider = ({postsJs,postsNextJs,postsTs,children}:IAppContext & {children: ReactNode}):JSX.Element => {

    return <JsContext.Provider value={{postsJs}}>
        <NextJsContext.Provider value={{postsNextJs}}>
            <TsContext.Provider value={{postsTs}}>
                {children }
            </TsContext.Provider>
        </NextJsContext.Provider>
        </JsContext.Provider>;
};