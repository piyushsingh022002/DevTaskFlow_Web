//this user will be used in authentication context and related components
export type User = {
    id: string;
    username: string;
    email: string;
};

//login credentials type
export type LoginCredentials ={
    email : string;
    password: string;
};

//register data type
export type RegisterData = {
    username : string;
    email: string;
    password : string;
    confirmPassword : string;
};

//authentication context type
export type AuthContextType = {
    user : User | null;
    isAuthenticated : boolean;
    loading : boolean;
    login : (credentials : LoginCredentials) => Promise<void>;
    register : (data : RegisterData) => Promise<void>;
    logout : () => void;
};

//Authentication Response types 
export type AuthResponse = {
    user : User | null;
    token? : string;
    success? : string;
    errorMessage? :string;
    
};