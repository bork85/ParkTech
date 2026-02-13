import { getAuthUser } from "@/services/auth/getAuthUser.service";
import { createContext, useContext, useState, useEffect } from "react";

type AuthContextData = {
    user: {
        name: string;
        email: string
    } | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    login: (name: string, email: string, token: string) => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: {children: React.ReactNode}) {

    const [user, setUser] = useState<{name: string, email: string} | null>(() => {
        const stored = localStorage.getItem("@parktech:user");
        return stored ? JSON.parse(stored) : null;
    });
    const [token, setToken] = useState<string | null>(() => {
        const TokenStored = localStorage.getItem("@parktech:token");
        return TokenStored ? TokenStored : null;
    });
    const [isLoading, setIsLoading] = useState(true);
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (user) {
            localStorage.setItem("@parktech:user", JSON.stringify(user));
        } else {
            localStorage.removeItem("@parktech:user");
        }
    }, [user]);

    useEffect(()=> {
        if (token) {
            localStorage.setItem("@parktech:token", token);
        } else {
            localStorage.removeItem("@parktech:token");
        }
    }, [token]);

    useEffect(() => {
        async function getValidAuthUser(){
            try {
                setIsLoading(true)
                await getAuthUser();
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false)
            } finally {
                setIsLoading(false)
            }
        }
        getValidAuthUser();
    },[])

    const login = (name: string, email: string, token: string) => {
        setUser({ name, email });
        setToken(token);
    }

    const logout = () => {
        setUser(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, isLoading, login, logout}}>
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