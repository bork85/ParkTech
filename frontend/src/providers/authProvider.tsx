import { createContext, useContext, useState, useEffect } from "react";

type AuthContextData = {
    user: {
        name: string;
        email: string
    } | null,
    isAuthenticated: boolean,
    login: (name: string, email: string) => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: {children: React.ReactNode}) {

    const [user, setUser] = useState<{name: string, email: string} | null>(() => {
        const stored = localStorage.getItem("@parktech:user");
        return stored ? JSON.parse(stored) : null;
    });
    
    const isAuthenticated = !!user;

    useEffect(() => {
        if (user) {
            localStorage.setItem("@parktech:user", JSON.stringify(user));
        } else {
            localStorage.removeItem("@parktech:user");
        }
    }, [user]);

    const login = (name: string, email: string) => {
        setUser({ name, email });
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, logout}}>
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