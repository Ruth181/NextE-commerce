import {FC, Fragment, useEffect, useState} from 'react';
import Layout from '../Layout';
import Link from 'next/link';
import { AuthSuccessResponseInterface, PersonDetails } from '@/utils/types';
import { useMutation } from '@tanstack/react-query';
import { axiosPostRequest, showToast } from '@/utils/util-funtions';
import { NextRouter, useRouter } from 'next/router';
import { toast } from 'react-toastify';

export const Login : FC = () => {

    const [user, setUser] = useState<Partial<PersonDetails>>({
        email : '',
        password : ''
    });
    const [onSuccessResponse, setResponse] = useState<AuthSuccessResponseInterface>({
        token: '',
        userId: '',
        email: '',
    });
    const router : NextRouter = useRouter();
    const [onErrorResponse, setErrorResponse] = useState<any>('');
    
    const path: string = `${process.env.NEXT_PUBLIC_BACKEND_HOST}auth/login`;

    const mutation = useMutation(
        {
            mutationFn: (body: any) => axiosPostRequest({ path, body }),
            onSuccess: (data) => setResponse({
                token: data?.data?.data?.token,
                userId: data?.data?.data.userId,
                email: data?.data?.data?.email
            }),
            onError: (error) => setErrorResponse(error)
        }
    );

    const { mutate, isSuccess, isError, isLoading } = mutation;


    const onChangeEmailForLoginHandler = ({target} : React.ChangeEvent<HTMLInputElement>) => {
        const {value : email} = target;
        setUser({...user, email});
    }

    const onChangePasswordForLoginHandler = ({target} : React.ChangeEvent<HTMLInputElement>) => {
        const { value : password } = target;
        setUser({...user, password});
    }

    const onSubmitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({ ...user});
        if (isSuccess){
            const {email, userId, token} = onSuccessResponse;
            //showToast({ type: "success", message: 'Login Successful' });
            toast.success('Login Successful',{
                position : 'top-right',
                theme : 'dark'
            });
            localStorage.setItem('userId', userId);
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
            //router.push('/cart');
        }
        if (isError) toast.error(onErrorResponse?.response?.data?.message , {
            position : 'top-right',
            theme : 'dark'
        });
        //showToast({ type: "error", message: onErrorResponse?.response?.data?.message });
    }

    useEffect(() => {},[user]);
    return(
        <Layout className='container py-3'>    
            {/* <!-- Login Form --> */}
            <div className="my-5 d-flex justify-content-center align-items-center"
                style={{zIndex : 10}}>
                <div className="fw-lighter">
                    <form className='form-input-text-size'
                    onSubmit={onSubmitHandler}>
                        <div className="row header-text p-0">
                            <p className="text-uppercase text-center fs-2 fw-lighter text_primary">M&nbsp;Y&ensp;A&nbsp;C&nbsp;C&nbsp;O&nbsp;U&nbsp;N&nbsp;T
                            </p>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="exampleInputEmail1" className="form-label p-0 text-start">Email</label>
                            <input 
                            type="email" 
                            required
                            className="form_control shadow-none col py-2" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            onChange={onChangeEmailForLoginHandler}/>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="exampleInputPassword1" className="form-label p-0 text-start">Password</label>
                            <input 
                            type="password" 
                            required
                            className="form_control shadow-none col py-2" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                            onChange={onChangePasswordForLoginHandler}/>
                        </div>
                        <section className="text-center pb-4 text-dark">
                            <Link href="/forgot-password" 
                            className="text-underline text-capitalize text-reset">
                                Forgot your password
                            </Link>
                        </section>
                        <div className="row">
                            <button 
                                type="submit"
                                disabled={isLoading ? true : false}
                                className="btn-primary col text-uppercase"
                                style={{padding : '0.7rem'}}>
                                Sign In
                            </button>
                        </div>

                        <section className="text-center py-4 text-dark">
                            <Link href="/register" 
                            className="text-underline
                            text-reset">
                                Create account
                            </Link>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
}