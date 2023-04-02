import { Fragment, FC } from "react";
import Layout from '../Layout';
import Link from "next/link";

export const ForgotPassword : FC = () => {
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
                    <form className="form-input-text-size">
                        <div className="mt-5 mb-3 row">
                            <label htmlFor="exampleInputEmail1" className="form-label p-0 text-start">Email</label>
                            <input 
                            type="email" 
                            className="form_control shadow-none col py-2" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder="Email"/>
                        </div>
                        <div className="row">
                            <button 
                            type="submit"
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