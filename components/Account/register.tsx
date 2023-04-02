import {FC, Fragment} from 'react';
import Layout from '../Layout';
import Link from 'next/link';

export const Register : FC = () => {
    return(
        <Layout className='container py-3'>
            {/* <!-- register Form --> */}
            <div className="container d-flex justify-content-center my-5" style={{zIndex : 10}}>
                <div className="fw-lighter">
                    <div className="header-text p-0">
                        <p className="text-uppercase text-start fs-2 fw-lighter letter-spacing text_primary">
                            Create&nbsp;account
                        </p>
                    </div>
                    <form className='form-input-text-size'>
                        <div className="mb-2 row">
                            <label htmlFor="firstName" className="form-label text-start p-0">First&nbsp;Name</label>
                            <input 
                            type="email" 
                            className="form_control shadow-none col py-2" 
                            id="firstName" 
                            aria-describedby="emailHelp"
                            placeholder="First Name"/>
                        </div>
                        <div className="mb-2 row">
                            <label 
                            htmlFor="lastName" 
                            className="form-label p-0 text-start">Last&nbsp;Name</label>
                            <input 
                            type="email" 
                            className="form_control shadow-none col py-2" id="lastName" aria-describedby="emailHelp"
                            placeholder="Last Name"/>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="exampleInputEmail1" className="form-label p-0 text-start">Email</label>
                            <input type="email" 
                            className="form_control shadow-none py-2 col" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <div className="mb-4 row">
                            <label htmlFor="exampleInputPassword1" className="form-label p-0 text-start">Password</label>
                            <input type="password" 
                            className="form_control shadow-none col py-2" id="exampleInputPassword1"
                            placeholder="Password"/>
                        </div>

                        <div className="row">
                            <button type="submit" 
                            className="btn-primary
                            col
                            text-uppercase"
                            style={{padding : '0.7rem'}}>
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