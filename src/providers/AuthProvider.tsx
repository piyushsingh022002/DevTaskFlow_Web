import { useEffect, useState } from "react";
import type { LoginCredentials, RegisterData, User } from "../types/auth.types";
import { AuthContext } from "../context/AuthContext";
import * as authService from "../types/auth.service";

type Props = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !! user;

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
        setLoading(false);
    }, []);

    const login = async(data : LoginCredentials) => {
        
        const loggedInUser = await authService.login(data);
        setUser(loggedInUser);
        localStorage.setItem('user', JSON.stringify(loggedInUser));
    };

    const register = async (data: RegisterData) => {
    const newUser = await authService.register(data);
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    };

    const logout = () =>{
        authService.logout();
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};