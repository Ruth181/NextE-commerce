import { Fragment, FC, useState, useEffect } from "react";
import Layout from '../Layout';
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { axiosGetRequest, axiosPostRequest } from "@/utils/util-funtions";
import { NextRouter, useRouter } from "next/router";
import { AuthSuccessResponseInterface } from "@/utils/types";
import { toast } from "react-toastify";

export const ForgotPassword : FC = () => {

    const [email, setEmail] = useState<string>('');

    const [onSuccessResponse, setResponse] = useState<AuthSuccessResponseInterface>({
        token: '',
        userId: '',
        email: '',
    });

    const router : NextRouter = useRouter();
    const [onErrorResponse, setErrorResponse] = useState<any>('');
    
    const path: string = `${process.env.NEXT_PUBLIC_BACKEND_HOST}user/verification/initiate-forgot-password-flow/`;

    const mutation = useMutation(
        {
            mutationFn: (body: any) => axiosGetRequest(`${path}${body}`),
            onSuccess: (data) => console.log({success : data}),
            onError: (error) => setErrorResponse(error)
        }
    );
    
    const { mutate, isSuccess, isError, isLoading } = mutation;

    const forgetPasswordHandler = ({target} : React.ChangeEvent<HTMLInputElement>) => {
        const {value : email} = target;
        console.log({email});
        setEmail(email);
    }

    const onSubmitHandler = (e : React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(email);
        if(isSuccess){
            toast.success('Email Verified',{
                position : 'top-right',
                theme : 'dark'
            });
            router.push('/verification');
        }
        if(isError) toast.error(onErrorResponse?.response?.data?.message,{
            position : 'top-right',
            theme : 'dark'
        });
    }

    useEffect(() => {}, [email]);

    return(
        <Layout className="container py-3"> 
            {/* <!-- Reset Password Form --> */}
            <div 
                className="my-5 d-flex justify-content-center align-items-center"
                style={{zIndex : 10}}>
                <div className="fw-lighter">
                    <div className="text-center p-0">
                        <p className="text-uppercase fs-1 fw-lighter text_primary">
                            RESET YOUR PASSWORD
                        </p>
                        <span>We will send you an email to reset your password</span>
                    </div>
                    <form 
                    className="form-input-text-size"
                    onSubmit={onSubmitHandler}>
                        <div className="mt-5 mb-3 row">
                            <label htmlFor="exampleInputEmail1" className="form-label p-0 text-start">Email</label>
                            <input 
                            type="email" 
                            required
                            className="form_control shadow-none col py-2" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            onChange={forgetPasswordHandler}/>
                        </div>
                        <div className="row">
                            <button 
                            type="submit"
                            disabled={isLoading ? true : false}
                            className="btn-primary 
                            col text-uppercase"
                            style={{padding : '0.7rem'}}>
                                Submit
                            </button>
                        </div>

                        <section className="text-center py-4 text-dark">
                            <Link href="/login" className="text-underline text-reset">
                                Cancel
                            </Link>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
}