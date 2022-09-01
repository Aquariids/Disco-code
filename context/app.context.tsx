import { createContext, ReactNode, useState } from "react";
import { PostMeta } from "../pages/api/api";


export interface IAppContext {
    posts:PostMeta[]
    setMenu?: (newMenu:PostMeta[]) => void
}



export const AppContext = createContext<IAppContext>({posts:[]});




export const AppContextProvider = ({posts,children}:IAppContext & {children: ReactNode}):JSX.Element => {

    const [menuState,setMenuState] = useState<PostMeta[]>(posts);
    const setMenu = (newMenu:PostMeta[]) => {
        setMenuState(newMenu);
    };
    return <AppContext.Provider value={{posts: menuState,setMenu}}>
        {children }
        </AppContext.Provider>;
};