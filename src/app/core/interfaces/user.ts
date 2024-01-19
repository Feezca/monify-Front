export interface RegisterData{
    Username: string,
    Email:string,
    Password: string
}

export interface User{
    id: number,
    username: string,
    email:string,
    conversions:number,
    plan:number,
    state:number,
    role: string
}

export interface updateUserPlan{
    id:number,
    conversions: number,
    plan:number
}


export interface LoginData {
    Username: string,
    Password: string
}