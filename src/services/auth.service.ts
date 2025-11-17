import type {
   LoginCredentials,
   RegisterData,
   User,
   AuthResponse 
  } from "../types/auth.types";
import api from "../api/api";

const AUTH_ENDPOINT = "/auth";
export const AuthService = {
  
  //User Registeration
  register: async (data: RegisterData) : Promise<AuthResponse> =>{
    const res = await api.post<AuthResponse>(`${AUTH_ENDPOINT}/register`, data);

    if(res.data.token){
      localStorage.setItem("access_token", res.data.token);
    }

    return res.data;
  },

  //User Login
  login: async(data:LoginCredentials) : Promise<AuthResponse> =>{
    const res = await api.post<AuthResponse>(`${AUTH_ENDPOINT}/login`, data);

    if(res.data.token){
      localStorage.setItem("access_token", res.data.token);
    }

    return res.data;
  },

  //User Logout
  logout: async() : Promise<void> =>{
    await api.post(`${AUTH_ENDPOINT}/logout`);
    localStorage.removeItem("access_token");
  }, 

  //Get current logged in user
  getMe: async() : Promise<User> =>{
    const res = await api.get<User>(`${AUTH_ENDPOINT}/me`);
    return res.data;
  }
}
