import { useRef, useState } from "react";
import Layout from "../Layout";

let currentOTPIndex : number = 0;
let otpString : string = '';

export const OTPComponent = () => {
    const [otp, setOTP]  = useState<string[]>(new Array(6).fill(""));
    const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);

    const otpRef : React.MutableRefObject<any> = useRef(null);

    const handleOtpInputChange = ({target} : React.ChangeEvent<HTMLInputElement>) :void => {
        const { value } = target;
        //getting the last value inside the index; and updating the otp value array using the index from the map
       const newOTP = [...otp];
       newOTP[currentOTPIndex] = value.substring(value.length- 1);
       //if statement to determine if input will forward focus or backward focus
        if(!value) setActiveOtpIndex(currentOTPIndex - 1);
        else  setActiveOtpIndex(currentOTPIndex + 1);
       setOTP(newOTP); 
    }

    const handleKeyEvent = ({key} : React.KeyboardEvent<HTMLInputElement>, index : number) :void =>{
        currentOTPIndex = index;
        if(key === "Backspace") setActiveOtpIndex(currentOTPIndex - 1);
    }

    return(
        <Layout className="container py-3">
              <div 
                className="my-5 d-flex justify-content-center align-items-center"
                style={{zIndex : 10}}>
                <div className="fw-lighter">
                    <div className="text-center p-0">
                        <p className="text-uppercase fs-1 fw-lighter text_primary">
                           VERIFICATION
                        </p>
                        <span>Please type in the One-Time password sent to your email to verify your account</span>
                    </div>
                    {/* md:gap-4 lg:gap-6 xl:gap-8 items-center' */}
                    <form className="form-input-text-size">
                        <div className="mt-5 mb-3 d-flex flex-row gap-auto">
                        {
                        otp && otp.map((_, index : number) =>

                            <input type="text" 
                            key={index}
                            onChange={(e) => handleOtpInputChange(e)}
                            className='text-center'
                            style={{
                                width : 'fit-content',
                                fontSize : '20px',
                                padding :'', 
                                

                            }}
                            ref={index === activeOtpIndex ? otpRef : null}
                            value={otp[index]}
                            onKeyDown={(e) => handleKeyEvent(e, index)}/>
                        )}
                            {/* <label htmlFor="exampleInputEmail1" className="form-label p-0 text-start">Email</label>
                            <input 
                            type="email" 
                            className="form_control shadow-none col py-2" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder="Email"/> */}
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

                        {/* <section className="text-center py-4 text-dark">
                            <Link href="/login" className="text-underline text-reset">
                                Cancel
                            </Link>
                        </section> */}
                    </form>
                </div>
            </div>
        </Layout>   
    );
}