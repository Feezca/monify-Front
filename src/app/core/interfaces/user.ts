export interface RegisterData extends User {
    password: string
}

export interface User{
    username: string,
    email:string
}

export interface LoginData {
    username: string,
    password: string
}