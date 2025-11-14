import type { LoginCredentials, RegisterData, User } from "./auth.types";


export async function  login(data : LoginCredentials) : Promise<User> {

    return {
        id: '1',
        username: 'testuser',
        email: data.email
    };
}

export async function register(data: RegisterData): Promise<User> {
  return {
    id: "2",
    username: data.name,
    email: data.email,
  };
}

export function logout(){

    //actual code goes here
    
};