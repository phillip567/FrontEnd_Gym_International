import { useState, useContext, createContext } from "react"

const AuthContext = createContext({ children });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(true);
    }

export function AuthContext() {
    return (
        <AuthContext.Provider value = {{ isLoggedIn, toggleLogin }}>
                { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}