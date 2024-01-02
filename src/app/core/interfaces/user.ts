export interface RegisterData{
    Username: string,
    Email:string,
    Password: string
}

export interface User{
    Id: number,
    Username: string,
    Email:string,
    Conversions:number,
    Plan:number,
    State:number,
    Role: string
}

export interface LoginData {
    Username: string,
    Password: string
}