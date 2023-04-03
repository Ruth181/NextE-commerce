import { FC, Fragment } from "react";
import Layout from "../Layout";
import { RelatedItemsCarousel } from "../Carousel/related-items-carousel";

export const CartShoppingBag: FC = () => {
    return (
        <Fragment>
            <Layout className="container-fluid py-3">
                <div className="w-100">
                    <section className="container py-4 py-lg-5" style={{ zIndex: 10 }}>
                        <p className="text-capitalize display-6 fw-lighter">Shopping Bag</p>


                        {/* <!-- table --> */}
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
                                    <tr>
                                        <td id="product-row">
                                            <div className="row">
                                                <div className="col-md-4 py-3">
                                                    <img src="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_V210825.jpg?preset=ProductLarge?preset=Product232x180"
                                                        className="d-block d-lg-inline w-100" />
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="fw-lighter" style={{ fontSize: '15px' }}>
                                                        <p className="text-capitalize pt-3 pb-2 fw-normal">Lunden Dining Arm Chair in
                                                            Nomad
                                                            Navy</p>
                                                        <p className="text-uppercase pb-2 fw-semibold"
                                                            style={{ fontSize: '11px', color: '#707070' }}>
                                                            Sku: 30LNDNNVARCH
                                                        </p>
                                                        <p className="text-capitalize fw-normal">Instock</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-top py-3" style={{ color: '#89331C' }}>$249.99</td>
                                        <td className="align-top py-3">

                                            <div className="d-flex flex-row justify-content-start align-items-center ">
                                                <div style={{ fontSize: '15px' }} className="text-uppercase">QTY:</div>
                                                <select 
                                                    id="qty-select" 
                                                    defaultValue={1}
                                                    className="border-0 shadow-none"
                                                    aria-label=".form-select-sm example">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="1">4</option>
                                                    <option value="2">5</option>
                                                    <option value="3">6</option>
                                                </select>
                                            </div>

                                            <button className="fw-normal 
                      text-capitalize
                      py-3 
                      text-decoration-underline bg-white" style={{ fontSize: '14px', cursor: 'pointer' }}>
                                                Remove
                                            </button>
                                        </td>
                                        <td className="align-top py-3 fw-semibold">$1,743.99</td>
                                    </tr>
                                    <tr>
                                        <td id="product-row">
                                            <div className="row">
                                                <div className="col-md-4 py-3">
                                                    <img src="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_V210825.jpg?preset=ProductLarge?preset=Product232x180"
                                                        className="d-block d-lg-inline w-100" />
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="fw-lighter" style={{ fontSize: '15px' }}>
                                                        <p className="text-capitalize pt-3 pb-2 fw-normal">Lunden Dining Arm Chair in
                                                            Nomad
                                                            Navy</p>
                                                        <p className="text-uppercase pb-2 fw-semibold"
                                                            style={{ fontSize: '11px', color: '#707070' }}>
                                                            Sku: 30LNDNNVARCH
                                                        </p>
                                                        <p className="text-capitalize fw-normal">Instock</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-top py-3" style={{ color: '#89331C' }}>$249.99</td>
                                        <td className="align-top py-3">

                                            <div className="d-flex flex-row justify-content-start align-items-center ">
                                                <div style={{ fontSize: '15px' }} className="text-uppercase">QTY:</div>
                                                <select 
                                                id="qty-select" 
                                                className="border-0 shadow-none"
                                                aria-label=".form-select-sm example"
                                                defaultValue={1}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="1">4</option>
                                                    <option value="2">5</option>
                                                    <option value="3">6</option>
                                                </select>
                                            </div>

                                            <button className="fw-normal 
                                            text-capitalize
                                            py-3 
                                            text-decoration-underline bg-white"
                                                style={{ fontSize: '14px', cursor: 'pointer' }}>
                                                Remove
                                            </button>
                                        </td>
                                        <td className="align-top py-3 fw-semibold">$1,743.99</td>
                                    </tr>
                                    <tr>
                                        <td id="product-row">
                                            <div className="row">
                                                <div className="col-md-4 py-3">
                                                    <img src="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_V210825.jpg?preset=ProductLarge?preset=Product232x180"
                                                        className="d-block d-lg-inline w-100" />
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="fw-lighter" style={{ fontSize: '15px' }}>
                                                        <p className="text-capitalize pt-3 pb-2 fw-normal">Lunden Dining Arm Chair in
                                                            Nomad
                                                            Navy</p>
                                                        <p className="text-uppercase pb-2 fw-semibold"
                                                            style={{ fontSize: '11px', color: '#707070' }}>
                                                            Sku: 30LNDNNVARCH
                                                        </p>
                                                        <p className="text-capitalize fw-normal">Instock</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-top py-3" style={{ color: '#89331C' }}>$249.99</td>
                                        <td className="align-top py-3">

                                            <div className="d-flex flex-row justify-content-start align-items-center ">
                                                <div style={{ fontSize: '15px' }} className="text-uppercase">QTY:</div>
                                                <select 
                                                id="qty-select" 
                                                className="border-0 shadow-none"
                                                aria-label=".form-select-sm example"
                                                defaultValue={1}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="1">4</option>
                                                    <option value="2">5</option>
                                                    <option value="3">6</option>
                                                </select>
                                            </div>

                                            <button className="fw-normal 
                                            text-capitalize
                                            py-3 
                                            text-decoration-underline bg-white"
                                                style={{ fontSize: '14px', cursor: 'pointer' }}>
                                                Remove
                                            </button>
                                        </td>
                                        <td className="align-top py-3 fw-semibold">$1,743.99</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </section>
                    <RelatedItemsCarousel header="More Items" />
                </div>
            </Layout>
        </Fragment>
    );
}