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
    const [token, setToken] = useState<string | null>(null);

    const isAuthenticated = !!(user && token);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    const login = async (data: LoginCredentials) => {

        // const loggedInUser = await authService.AuthService.login(data);
        // setUser(loggedInUser);
        // localStorage.setItem('user', JSON.stringify(loggedInUser));
        const response = await authService.AuthService.login(data);

        if (response?.token) localStorage.setItem("token", response.token);
        if (response?.user) localStorage.setItem("user", JSON.stringify(response.user));
        setUser(response.user);
        return response;
    };

    //User Register
    const register = async (data: RegisterData) => {
        try {
            const response = await authService.AuthService.register(data);
            if (response?.token && response.user && response.success) {
                //save react State
                setToken(response.token);
                setUser(response.user);
                // Save to localStorage
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", JSON.stringify(response.user));
            } else {
                throw new Error(response.errorMessage || "Registration failed");
            }
        } catch (error: string | unknown) {
            {
                console.error("Registration error:", error);
            }
        }};

        const logout = async () => {
            authService.AuthService.logout();
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