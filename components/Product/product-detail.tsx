import {FC} from 'react';
import Layout from '../Layout';
import  { ChevronDown, Heart, HeartFill } from 'react-bootstrap-icons';
import { RelatedItemsCarousel } from '../Carousel/related-items-carousel';
import { useRouter, NextRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

type Props={

}

let extractName : string[] = [''];
let extractUUID : string[] = [''];
export const ProductDetail :FC = () =>{

    const router : NextRouter = useRouter();
    const queryString : string = router.query.name as string;

    
    if(typeof queryString !== 'string'){
        return(
            <p></p>
        );
    }

    extractName = queryString.split('?');
    extractUUID = queryString.split('=');
    const { data : queryResponseData, isLoading, isFetched } = useQuery(
        {
            queryKey: ['find-product-by-id'],
            queryFn: async () => {
                return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}product/${extractUUID[1]}`,{
                    headers : {
                        'Content-Type' : 'application/json',
                        //'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
                    }
                }).catch(err => err);
            },
            refetchOnWindowFocus: false
        }
    );
    if(isLoading){
        return <p></p>
    }
    return(
        <Layout className='container-fluid'>
            <section className="w-100" style={{zIndex : 10}}>
                <div className="row">
                    {/* <!-- product images --> */}

                    <section className="col-12 col-md-6 col-xl-7 p-0">
                        {queryResponseData?.data?.data?.imagesForThisProduct.map((val : any, i:number) => 
                            <div key={i} className="w-100 zoom-in"
                                typeof="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#zoomImageCanvas"
                                aria-controls="zoomImageCanvas">
                                <object 
                                data={val.url}
                                className="w-100" 
                                />
                            </div>
                        )}
                    </section>

                    <section className="col-12 col-md-6 col-xl-5 p-4 p-sm-5" style={{letterSpacing: '1px'}}>
                        {/* <!-- Tag --> */}
                        <div className="rounded-4 text-black py-1 px-3"
                            style={{
                                backgroundColor: '#EDECE8', fontSize: '11px', width:'fit-content'
                            }}>
                            <span>New</span>
                        </div>
                        <p className="fw-lighter" style={{fontSize: '40px'}}>
                            {queryResponseData?.data?.data.name}
                        </p>
                        <p className="fw-lighter">
                            <span style={{color: '#89331C'}}>#{queryResponseData?.data?.data?.unitPrice}</span>
                            &emsp;<span style={{color: '#707070', textDecoration: 'line-through'}}>-25%</span>
                        </p>
                        {/* <!-- Quantity select  --> */}
                        <div className="pt-4 pb-2 border-top">

                            <div className="d-flex justify-content-between">
                                <div className="w-25 d-flex flex-row justify-content-start align-items-center">
                                    <div style={{fontSize: '15px'}} className="text-uppercase">QTY:&nbsp;{queryResponseData.data?.data?.quantity}</div>
                                </div>
                                <p className=" text-capitalize text_primary fw-semibold" style={{fontSize: '12px'}}>In&nbsp;Stock</p>
                            </div>
                        </div>

                        {/* <!-- add to bag button --> */}
                        <button
                            style={{padding: '0.7rem', fontSize: '10px'}}
                            className="w-100 text-uppercase btn-primary text-center fw-bold shadow-none"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar-1"
                            aria-controls="offcanvasNavbar-1">
                            <span>Add to bag</span>
                        </button>
                        <button
                            className="bg-white mt-2 text_primary w-100 text-center text-capitalize text-decoration-underline py-2"
                            style={{fontSize: '13px', letterSpacing: '1.5px'}}>
                            <Heart className='icon-dark'/>
                            Add to wishlist
                        </button>

                        {/* <!-- Shopping bag drawer --> */}
                        <div className="offcanvas offcanvas-end "
                            tabIndex={-1}
                            id="offcanvasNavbar-1"
                            aria-labelledby="offcanvasNavbar-1Label">
                            <div className="offcanvas-header border-bottom">
                                <p className="offcanvas-title text-capitalize"
                                    id="offcanvasLabel"
                                    style={{letterSpacing: '1px'}}>Added to your bag</p>
                                <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="w-100">
                                    {/* <!-- first row --> */}
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <object 
                                            data={queryResponseData?.data?.data?.imagesForThisProduct[0].url}
                                            className="w-100" 
                                            />
                                        </div>
                                        <div className="col-6 p-2">
                                            <p className="fw-lighter" style={{fontSize: '15px'}}>{queryResponseData?.data?.data?.name}</p>
                                            <p style={{color: '#89331C'}}>#{queryResponseData?.data?.data?.unitPrice}</p>

                                            <div className="d-flex justify-content-between my-2">
                                                <div className="d-flex flex-row justify-content-center align-items-center">
                                                    <div style={{fontSize: '13px'}} className="text-uppercase">QTY:</div>
                                                    <select id="qty-select"
                                                        className="border-0 shadow-none"
                                                        aria-label=".form-select-sm example"

                                                        >
                                                        <option value="1" selected>1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                        <option value="3">6</option>
                                                    </select>
                                                </div>

                                                <div
                                                    className="fw-normal 
                                                    text-capitalize 
                                                    text-decoration-underline"
                                                    style={{fontSize: '12px', cursor: 'pointer'}}>
                                                    Remove
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 border-top position-absolute bottom-0">
                                <div
                                    className="w-100 d-flex justify-content-between bg-white align-items-center border-bottom"
                                    style={{fontSize: '14px', padding : '1rem', letterSpacing : '0px'}}>
                                    <p>Subtotal (8 items)</p>
                                    <p style={{paddingRight: '5px'}}>$2,742.99</p>
                                </div>
                                <Link href="/cart">
                                    <button
                                        style={{padding: '0.7rem', fontSize: '10px'}}
                                        className="w-100 btn-primary text-uppercase text-center fw-bold
                                        active shadow-none">
                                        View full bag
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <RelatedItemsCarousel header='Related Items'/> */}
            </section>
        </Layout>
    );
}