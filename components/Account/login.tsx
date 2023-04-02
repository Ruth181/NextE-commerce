import {FC, Fragment} from 'react';
import Layout from '../Layout';
import Link from 'next/link';

export const Login : FC = () => {
    return(
        <Layout className='container py-3'>    
            {/* <!-- Login Form --> */}
            <div className="my-5 d-flex justify-content-center align-items-center"
                style={{zIndex : 10}}>
                <div className="fw-lighter">
                    <form className='form-input-text-size'>
                        <div className="row header-text p-0">
                            <p className="text-uppercase text-start fs-2 fw-lighter text_primary">M&nbsp;Y&ensp;A&nbsp;C&nbsp;C&nbsp;O&nbsp;U&nbsp;N&nbsp;T
                            </p>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="exampleInputEmail1" className="form-label p-0 text-start">Email</label>
                            <input 
                            type="email" 
                            className="form_control shadow-none col py-2" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder="Email"/>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="exampleInputPassword1" className="form-label p-0 text-start">Password</label>
                            <input 
                            type="password" 
                            className="form_control shadow-none col py-2" 
                            id="exampleInputPassword1" 
                            placeholder="Password"/>
                        </div>
                        <section className="text-center pb-4 text-dark">
                            <Link href="/forgot-password" 
                            className="text-underline text-capitalize text-reset">
                                Forgot your password
                            </Link>
                        </section>
                        <div className="row">
                            <button type="submit"
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