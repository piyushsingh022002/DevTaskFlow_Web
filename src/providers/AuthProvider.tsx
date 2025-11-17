import { useEffect, useState } from "react";
import type { LoginCredentials, RegisterData, User } from "../types/auth.types";
import { AuthContext } from "../context/AuthContext";
import * as authService from "../services/auth.service";

type Props = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !! user;

    useEffect(() => {
        // const storedUser = localStorage.getItem('user');
        // if (storedUser) setUser(JSON.parse(storedUser));
        // setLoading(false);
        const loadUser = async () =>{
            try{
                const user = await authService.AuthService.getMe();
                setUser(user);
            } catch
             {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, []);

    const login = async(data : LoginCredentials) => {
        
        // const loggedInUser = await authService.AuthService.login(data);
        // setUser(loggedInUser);
        // localStorage.setItem('user', JSON.stringify(loggedInUser));
        const response = await authService.AuthService.login(data);
        setUser(response.user);
    };

    const register = async (data: RegisterData) => {
    // const newUser = await authService.AuthService.register(data);
    // setUser(newUser);
    // localStorage.setItem("user", JSON.stringify(newUser));
    const response = await authService.AuthService.register(data);
    setUser(response.user);
    };

    const logout = async () =>{
        // authService.AuthService.logout();
        // setUser(null);
        // localStorage.removeItem('user');
        await authService.AuthService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};