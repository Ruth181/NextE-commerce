import { FC, Fragment } from 'react';
import Layout from '../Layout';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

export const PreviousOrder = () => {
    return (
        <Fragment>
            <Layout className='container'>
                <section className="p-4 p-lg-5" style={{zIndex: 10}}>
                    <p className="text-capitalize display-6 fw-lighter">Previous Orders</p>
                    <div className="mt-5">
                        {/* <!-- table is empty --> */}
                        {/* <div className="w-100 d-flex justify-content-center align-items-center p-5">
                            <div className="w-100 d-flex flex-column align-items-center gap-4">
                                <p className="lead fw-lighter"
                                    style={{fontSize :  '30px'}}>No previous orders yet</p>

                                <Link href="/product-category">
                                    <button className="text-uppercase btn-primary"
                                        style={{padding: '0.8rem', fontSize: '12px'}}>
                                        continue shopping
                                    </button>
                                </Link>
                            </div>
                        </div> */}
                        
                        <div className="table-responsive">
                            <table className="table align-middle fw-lighter">
                                <thead>
                                    <tr>
                                        <th className="fw-semibold" scope="row">Serial No</th>
                                        <th className="fw-semibold">Order No</th>
                                        <th className="fw-semibold">Amount</th>
                                        <th className="fw-semibold">Date</th>
                                        <th className="fw-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td>1</td>
                                        <td id="product-row">
                                            <div className="">
                                                <div className="fw-lighter" style={{fontSize: '15px'}}>
                                                    <p className="text-capitalize pt-3 pb-2 fw-normal">Lunden Dining</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-top py-3" style={{color: '#89331C'}}>$249.99</td>
                                        <td className="align-top py-3">11/2/20</td>
                                        <td className="align-top py-3 list">
                                            <a
                                                className="list-link text-decoration-none"
                                                data-bs-toggle="offcanvas"
                                                href="#offcanvasExample"
                                                role="button"
                                                aria-controls="offcanvasExample">view</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td id="product-row">
                                            <div className="">
                                                <div className="fw-lighter" style={{fontSize: '15px'}}>
                                                    <p className="text-capitalize pt-3 pb-2 fw-normal">Lunden Dining</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-top py-3" style={{color: '#89331C'}}>$249.99</td>
                                        <td className="align-top py-3">11/2/20</td>
                                        <td className="align-top py-3 list">
                                            <a
                                                className="list-link text-decoration-none"
                                                data-bs-toggle="offcanvas"
                                                href="#offcanvasExample"
                                                role="button"
                                                aria-controls="offcanvasExample">
                                                view
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td id="product-row">
                                            <div className="">
                                                <div className="fw-lighter" style={{fontSize: '15px'}}>
                                                    <p className="text-capitalize pt-3 pb-2 fw-normal">Lunden Dining</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-top py-3" style={{color: '#89331C'}}>$249.99</td>
                                        <td className="align-top py-3">11/2/20</td>
                                        <td className="align-top py-3 list">
                                            <a
                                                className="list-link text-decoration-none"
                                                data-bs-toggle="offcanvas"
                                                href="#offcanvasExample"
                                                role="button"
                                                aria-controls="offcanvasExample">
                                                view
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <!-- view details of order from offcanvas --> */}
                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1} id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Order</h5>
                                <button type="button" className="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="w-100">
                                    {/* <!-- first row --> */}
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <img src="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_V210825.jpg?preset=ProductGrande"
                                                className="w-100" />
                                        </div>
                                        <div className="col-6 p-2">
                                            <p className="fw-lighter" style={{fontSize: '15px'}}>Lunden Dining Arm Chair in Nomad Navy</p>
                                            <p style={{color: '#89331C'}}>$249.99</p>

                                            <div className="d-flex justify-content-between my-2">
                                                <div style={{fontSize: '13px'}} className="text-uppercase">QTY:
                                                    <span>1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 border-top position-absolute bottom-0">
                                <div
                                    className="w-100 d-flex justify-content-between bg-white align-items-center border-bottom"
                                    style={{
                                        fontSize : '14px',
                                        padding : '1rem',
                                        letterSpacing : 0
                                    }}>
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
                        {/* <!-- pagination --> */}
                        <section className="d-flex justify-content-center my-4">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination d-flex justify-content-center align-items-center">
                                    <li className="page-item">
                                        <a className="page-link text-black" href="#" aria-label="Previous">
                                            <span aria-hidden="true">
                                                <ChevronLeft/>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="page-item"><Link className="page-link text-black" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link text-black" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link text-black" href="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link text-black" href="#">....</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link text-black" href="#" aria-label="Next">
                                            <span aria-hidden="true">
                                                <ChevronRight/>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </section>
            </Layout>
        </Fragment>
    );
}