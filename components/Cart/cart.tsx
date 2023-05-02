import { FC, Fragment, useState } from "react";
import Layout from "../Layout";
import { RelatedItemsCarousel } from "../Carousel/related-items-carousel";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ReduxSliceGlobalType, ReduxStoreSliceType } from "@/utils/types";

let totalPriceVar : number = 0.0;

export const CartShoppingBag: FC = () => {

    const selector = useSelector((state: any) => state.store.data);

    return (
        <Fragment>
            <Layout className="container-fluid py-3">
                <div className="w-100">
                    <section className="container py-4 py-lg-5" style={{ zIndex: 10 }}>
                        <p className="text-capitalize display-6 fw-lighter">Shopping Bag</p>

                        {selector.length <= 0 ? 
                            <div className="w-100 d-flex justify-centent-center align-items-center p-5">
                            <div className="w-100 d-flex flex-column align-items-center gap-4">
                                <p className="lead fw-lighter"
                                style={{fontSize :'30px'}}>Your bag is currently empty</p>
                  
                                <Link href="/">
                                    <button className="text-uppercase btn-primary"
                                    style={{padding: '0.8rem', fontSize: '12px'}}>
                                        continue shopping
                                    </button>
                                </Link>
                            </div>
                            </div>
                        :
                        <div className="table-responsive">
                            <table className="table align-middle fw-lighter">
                                <thead>
                                    <tr>
                                        <th className="fw-semibold" scope="row">Product</th>
                                        <th className="fw-semibold">Price</th>
                                        <th className="fw-semibold">Quantity</th>
                                        <th className="fw-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {selector && selector.map((data: ReduxStoreSliceType, i: number) =>{
                                        // const price = data.unitPrice * data.quantity;
                                        // totalPriceVar += price;
                                        return(
                                            <tr key={i}>
                                                <td id="product-row">
                                                    <div className="row">
                                                        <div className="col-md-4 py-3">
                                                            <img src={data.url}
                                                                className="d-block d-lg-inline w-100" />
                                                        </div>
                                                        <div className="col-md-7">
                                                            <div className="fw-lighter" style={{ fontSize: '15px' }}>
                                                                <p className="text-capitalize pt-3 pb-2 fw-normal">{data.name}</p>
                                                                <p className="text-capitalize fw-normal">Instock</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-top py-3" style={{ color: '#89331C' }}>#{data.unitPrice}</td>
                                                <td className="align-top py-3">

                                                    <div className="d-flex flex-row justify-content-start align-items-center ">
                                                        <div style={{ fontSize: '15px' }} className="text-uppercase">QTY:&nbsp;{data.quantity}</div>
                                                    </div>

                                                    <button className="fw-normal 
                                                        text-capitalize
                                                        py-3 
                                                        text-decoration-underline bg-white" 
                                                        style={{ fontSize: '14px', cursor: 'pointer' }}>
                                                        Remove
                                                    </button>
                                                </td>
                                                <td className="align-top py-3 fw-semibold">#{data.unitPrice * data.quantity}</td>
                                            </tr>
                                        );
                                    }
                                    )}

                                </tbody>
                            </table>
                        </div>
                        }
                    </section>
                    
                    <div className="w-100 d-flex bg-white justify-content-center align-items-center">
                        <div className="div-checkout my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="fw-lighter">Total</p>
                                <p className="fw-bold">#{totalPriceVar}</p>
                            </div>
                            <Link href="/checkout">
                                <button style={{ padding: ' 0.7rem', fontSize: '10px' }}
                                    className="w-100 text-uppercase text-center fw-bold rounded-0
                                    active shadow-none btn-primary">
                                    CHECKOUT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
}