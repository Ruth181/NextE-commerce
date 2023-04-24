import axios from "axios";
import { AxiosPostInterface } from "./types";
import { toast } from "react-toastify";

export const axiosPostRequest = async ({path, body} : AxiosPostInterface) : Promise<any> => {
    const response =  await axios.post(path, body, {
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
        }
    });
    
    return response;
}

export const axiosGetRequest = async (path : string) : Promise<any> => {
    const response =  await axios.get(path,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
        }
    });
    
    return response;
}

export function showToast({ type, message }: {type: string, message: string}) {
    if (type === "error") toast.error(message, {
        position : 'top-right',
        theme : 'dark'
    });
    if (type === "success") toast.success(message,{
        position : 'top-right',
        theme : 'dark'
    });
    return;
}

export function validateEmail(email: string): boolean {
    const re =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;
    ///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function validatePhoneNumberString(numberString: string): boolean {
    const pattern = /^[+234][0-9]{10}/g;
    return pattern.test(numberString);
}