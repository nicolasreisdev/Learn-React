import { createContext, ReactNode, useEffect, useState } from "react";
// import { api } from '../lib/axios'


interface LoginContextData {
    id: string;
    email: string;
    password: string;
}

interface LoginContextTypes {
    login: LoginContextData[];
}

interface LoginProviderProps {
    children: ReactNode;
}


export const LoginContext = createContext({} as LoginContextTypes);

export function LoginProvider({children}: LoginProviderProps){
    const [login, setLogin] = useState<LoginContextData[]>([]);

    async function loadLogin(){
        const response = await fetch('http://localhost:3000/login')
        const data = await response.json();
        setLogin(data);
        console.log(data)
    }

    // const createIntegration = useCallback(async (query?: string) => {
    //     const responseGetLogin = await api.get('/login', {
    //         params: {

    //         }
    //     }) 
    // })



    useEffect(() => {
        loadLogin();
    },[])
    
    return(
        <LoginContext.Provider value={{login}}>
            {children}
        </LoginContext.Provider>
    )


}