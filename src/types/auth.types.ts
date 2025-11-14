export type User = {
    id: string;
    username: string;
    email: string;
}

export type LoginCredentials ={
    email : string;
    password: string;
}

export type RegisterData = {
    name : string;
    email: string;
    password : string;
}

export type AuthContextType = {
    user : User | null;
    isAuthenticated : boolean;
    loading : boolean;
    login : (credentials : LoginCredentials) => Promise<void>;
    register : (data : RegisterData) => Promise<void>;
    logout : () => void;
}