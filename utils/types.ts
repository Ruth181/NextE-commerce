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

export interface CheckoutUserInterface{
    email : string;
    firstName : string;
    lastName : string;
    address : string;
    city : string;
    state1 : string;
    phoneNumber : string;
}

export interface ReduxStoreSliceType{
    productId : string;
    name : string;
    url : string;
    unitPrice : number;
    quantity : number;
}

export interface ReduxSliceGlobalType{
    data : ReduxStoreSliceType[];
}