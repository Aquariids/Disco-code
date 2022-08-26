import { createContext, ReactNode, useState } from "react";
import { ISidebarMenu } from "../src/Components/SidebarMenu/SidebarMenu.props";


export interface IAppContext {
    posts:ISidebarMenu[]
    setMenu?: (newMenu:ISidebarMenu[]) => void
}



export const AppContext = createContext<IAppContext>({posts:[]});




export const AppContextProvider = ({posts,children}:IAppContext & {children: ReactNode}):JSX.Element => {

    const [menuState,setMenuState] = useState<ISidebarMenu[]>(posts);
    const setMenu = (newMenu:ISidebarMenu[]) => {
        setMenuState(newMenu);
    }
    return <AppContext.Provider value={{posts: menuState,setMenu}}>
        {children }
        </AppContext.Provider>;
}