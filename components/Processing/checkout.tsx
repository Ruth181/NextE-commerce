import { CheckoutUserInterface, ReduxStoreSliceType } from "@/utils/types";
import { getToken } from "@/utils/util-funtions";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

let totalPrice: number = 0.0;

export const Checkout: FC = () => {

    const [state, setState] = useState<CheckoutUserInterface>({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state1: '',
        phoneNumber: ''
    });

    const router : NextRouter = useRouter();

    const selector = useSelector((state: any) => state.store.data);
    const mutation = useMutation({
        mutationFn : (payload : any) => {
            return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}order/validate/order-before-payment`, payload,{
               headers:{
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${getToken() as string}`
               },
            })
        },
        onSuccess : data => {
            console.log(data);
            toast.success('Request Sent');
        },
        onError : (err : any)  => {
            if(err?.response?.data?.code === 403){
                toast.error(err?.response?.data?.message);
                router.push('/login');
            }
            toast.error(err?.response?.data?.message);
        }
    });

    const {mutate,isLoading,isSuccess} = mutation;

    const onClickCheckoutHandler = () => {
        //check if user is logged in b4
        //if user is logged in send request  baba yetu & sogno di volare
        if(typeof getToken() !== 'string'){
            alert('Please Sign in before Checking out');
            router.push('/login');
            return;
        }
        const products : any[] = selector?.map(({productId,quantity} : ReduxStoreSliceType) => {
            return{
                productId,
                quantity
            }
        });
        mutate({products : products});
    }

    console.log({selector});
    return (
        <div className="container-fluid">
            <div className="d-flex flex-md-row justify-content-center">
                {/* <!-- checkout form --> */}
                <div className="col-12 col-md-6 bg-white p-3 p-md-5">
                    <p className="display-5 text-center">
                        S&nbsp;i&nbsp;l&nbsp;o&nbsp;u&nbsp;e&nbsp;t&nbsp;t&nbsp;e
                    </p>

                    <div className="w-100 d-block d-md-none border-top border-bottom p-3 my-2"
                        style={{ background: '#eee' }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="lead fw-normal"
                                style={{ fontSize: '20px' }}>
                                <span>Total</span>
                            </div>

                            <div className="display-6 fw-normal">
                                <span>#{totalPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-capitalize text-center" style={{ fontSize: '15px', color: '#707070' }}>
                        <span>cart <ChevronRight style={{ fontSize: '11px' }} /></span>
                        <span>information <ChevronRight style={{ fontSize: '11px' }} /></span>
                        <span>billing <ChevronRight style={{ fontSize: '11px' }} /></span>
                        <span>payment <ChevronRight style={{ fontSize: '11px' }} /></span>
                    </div>
                    <div className="d-block d-lg-flex justify-content-md-between fw-normal text-black my-3">
                        <p style={{ fontSize: '17px' }}>Contact Information</p>
                        <p style={{ fontSize: '15px' }}>Already Have an account?&nbsp;
                            <Link href="/login" className="text-decoration-none text-reset">Login</Link>
                        </p>
                    </div>
                    <div
                    className="col py-3 py-md-5 border-left"
                    //style={{ backgroundColor: '#eee' }}
                    >
                    {selector && selector.map((data: any, i: number) =>
                    {
                        totalPrice += (data.unitPrice * data.quantity);

                        return(
                            <div key={i}
                            className="d-flex justify-content-between align-items-center mb-4">
                            <div className="w-75 d-flex flex-row gap-4 align-items-center">
                                <div
                                    id="img-item"
                                    className="position-relative py-1 py-lg-2 rounded-2 bg-white border">
                                    <object
                                        data={data.url}
                                        className="w-100 h-100"
                                    />
                                    <div
                                        className="img-badge rounded-circle"
                                        style={{ backgroundColor: '#333', color: '#fff' }}>
                                        {data.quantity}
                                    </div>
                                </div>
                                <div className="lead fw-normal"
                                    style={{ fontSize: '16px' }}>
                                    <span>{data.name}</span>
                                </div>
                            </div>
                            <div className="lead fw-normal"
                                style={{ fontSize: '16px' }}>
                                <span>#{data.unitPrice * data.quantity}</span>
                            </div>
                        </div>
                        );
                    }
                    )}
                    <div className="border-top">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="lead"
                                style={{ fontSize: '17px' }}>
                                <span>Total</span>
                            </div>

                            <div className="display-6">
                                <span>#{totalPrice}</span>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center my-4">
                        <Link href="/cart" className="text-decoration-none">
                            <div className="fw-normal text-black">
                                <span><ChevronLeft />Return to cart</span>
                            </div>
                        </Link>
                        <button className="btn-primary p-3 rounded"
                        onClick={onClickCheckoutHandler}>
                            Continue
                        </button>
                    </div>

                </div>
               
            </div>

        </div>
    );
}