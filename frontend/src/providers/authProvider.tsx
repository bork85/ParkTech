import { createContext, useContext } from "react";

type AuthContextData = {
    user: {
        name: string;
        email: string
    },
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: {children: React.ReactNode}) {
    const user = {
        name: "USUARIO LOGADO",
        email: "testesNovos@teste.com"
    }
    const isAuthenticated = true;
    return (
        <AuthContext.Provider value={{user, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    
    if(!context){
        throw new Error("useAuth must be used within the context AuthProvider");
    }

    return context;
}