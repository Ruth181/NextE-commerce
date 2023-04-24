import React, { FC, Fragment, useEffect, useState } from 'react';
import Layout from '../Layout';
import Link from 'next/link';
import { AuthSuccessResponseInterface, PersonDetails } from '@/utils/types';
import { useMutation } from '@tanstack/react-query';
import { axiosPostRequest, showToast, validateEmail, validatePhoneNumberString } from '@/utils/util-funtions';
import { NextRouter, useRouter } from 'next/router';

const initialPerson: PersonDetails = {
    phoneNumber: '',
    email: '',
    password: ''
}

export const Register: FC = () => {
    const { log } = console;
    const path: string = `${process.env.NEXT_PUBLIC_BACKEND_HOST}user/sign-up`;

    const [person, setPerson] = useState<PersonDetails>({ ...initialPerson });
    const [onSuccessResponse, setResponse] = useState<AuthSuccessResponseInterface>({
        token: '',
        userId: '',
        email: '',
    });
    const router : NextRouter = useRouter();
    const [onErrorResponse, setErrorResponse] = useState<any>('');

    const mutation = useMutation({
        mutationFn: (body: any) => axiosPostRequest({ path, body }),
        onSuccess: (data) => setResponse({
            token: data?.data?.data?.token,
            userId: data?.data?.data.userId,
            email: data?.data?.data?.email
        }),
        onError: (error) => setErrorResponse(error)
    });

    const { mutate, isSuccess, isError, isLoading } = mutation;

    const onChangePhoneNumber = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setPerson({ ...person, phoneNumber: value });
    }

    const onChangeEmailHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setPerson({ ...person, email: value });
    }

    const onChangePasswordHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setPerson({ ...person, password: value });
    }

    const onSubmitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        log({ ...person });
        mutate({ ...person });
        const {email, userId, token} = onSuccessResponse;
        log({ onSuccessResponse, onErrorResponse });
        if (isSuccess){
            showToast({ type: "success", message: 'Account Created' });
            localStorage.setItem('token',token);
            localStorage.setItem('userId',userId);
            localStorage.setItem('email', email);
            router.push('/cart');
        }
        if (isError) showToast({ type: "error", message: onErrorResponse?.response?.data?.message });
    }

    useEffect(() => {},[person]);
    
    return (
        <Layout className='container py-3'>
            {/* <!-- register Form --> */}
            <div className="container d-flex justify-content-center my-5" style={{ zIndex: 10 }}>
                <div className="fw-lighter">
                    <div className="header-text p-0">
                        <p className="text-uppercase text-center fs-2 fw-lighter letter-spacing text_primary">
                            Create&nbsp;account
                        </p>
                    </div>
                    <form
                        onSubmit={onSubmitHandler}
                        className='form-input-text-size'>
                        <div className="mb-2 row">
                            <label htmlFor="exampleInputEmail1" className="form-label p-0 text-start">Email</label>
                            <input type="email"
                                className={person.email.length > 2 && !validateEmail(person.email)  
                                    ?'input-error-border shadow-none py-2 col'
                                    :"form_control shadow-none py-2 col"
                                }
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                                placeholder="Email"
                                onChange={onChangeEmailHandler}
                            />
                            <span className={`${person.email.length > 2 && !validateEmail(person.email) ?'visible p-0 text-danger text-start' : 'invisible'}`}
                                style={{
                                    fontSize: '14px'
                                }}>
                                This email is not valid
                            </span>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="phoneNumber" className="form-label text-start p-0">Phone&nbsp;Number</label>
                            <input
                                type="text"
                                className={person.phoneNumber as string !== '' 
                                && !validatePhoneNumberString(person.phoneNumber as string)
                                ? "input-error-border shadow-none py-2 col" 
                                : "form_control shadow-none py-2 col"}
                                id="phoneNumber"
                                maxLength={14}
                                placeholder="+2349086324620"
                                required
                                onChange={onChangePhoneNumber} />
                                  <span className={person.phoneNumber as string !== '' && 
                                  !validatePhoneNumberString(person.phoneNumber as string)
                                    ?'visible text-danger text-start p-0'
                                    :'invisible'
                                }
                                    style={{
                                        fontSize: '14px'
                                    }}>
                                    Number must be 14 characters and begin with +234 
                                </span>
                        </div>
                      
                        <div className="mb-4 row">
                            <label htmlFor="exampleInputPassword1" className="form-label p-0 text-start">Password</label>
                            <input type="password"
                                className={person.password !== '' && person.password.length < 4 
                                ? "input-error-border shadow-none py-2 col"
                                :"form_control shadow-none col py-2"}
                                id="exampleInputPassword1"
                                placeholder="Password"
                                required
                                min={4}
                                onChange={onChangePasswordHandler} />
                            <span className={person.password !== '' && person.password.length < 4
                                ? 'visible p-0 text-danger text-start'
                                : 'invisible'
                            }
                                style={{
                                    fontSize: '14px'
                                }}>
                                Password must have at least 4 characters 
                            </span>
                        </div>

                        <div className="row">
                            <button 
                                type="submit"
                                disabled={validateEmail(person.email) 
                                && validatePhoneNumberString(person.phoneNumber as string) 
                                && person.password.length > 4
                                ||isLoading 
                                ? false : true}
                                className="btn-primary
                                col
                                text-uppercase"
                                style={{ padding: '0.7rem' }}>
                                Create
                            </button>
                        </div>

                        <section className="text-center py-4 text-dark">
                            <Link href="/login"
                                className="text-underline text-reset">
                                Back to Login
                            </Link>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
}