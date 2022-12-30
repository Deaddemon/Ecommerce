import { useState } from "react";
import { createContext } from "react";




export const LoginContext = createContext(null);
export const ContextProvider = ( {children}) =>{

    const [ loginAccount , setLoginAccount] = useState('');


    return (
        <LoginContext.Provider  value={{ loginAccount , setLoginAccount}}>
        
            {children}
        </LoginContext.Provider>
    )


}


 