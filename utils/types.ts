export interface PersonDetails{
    firstName ?: string;
    lastName ?: string;
    phoneNumber ?: string;
    email : string;
    password : string;
}

export interface AuthSuccessResponseInterface{
    userId : string;
    email : string;
    token : string;
} 
export interface AxiosPostInterface{
    path : string;
    body : any;
}
