import {Fragment, FC} from 'react';
import {ChevronUp, ArrowRight, Facebook, Instagram, Pinterest, Twitter, Youtube, ChevronDown} from 'react-bootstrap-icons';

const Footer : FC = () => {

    return(
        <Fragment>
            <footer className='container-fluid border-top form-input-text-size'>
                <div className='container'>
                    {/* <!-- back to top in small screen view --> */}
                    <section
                        className="d-flex justify-content-center align-items-center d-xl-none border-top w-100 px-3 row"
                        style={{ marginTop: '4rem' }}>
                        <a href="#" className="text-decoration-none text-reset">
                            <div className="d-flex justify-content-between text-dark text-uppercase bg-white"
                                style={{ paddingTop: '1rem', cursor: 'pointer' }}>
                                <p style={{ letterSpacing: '1px', fontSize: '12px' }}>Back&nbsp;to&nbsp;top</p>
                                <ChevronUp className='icon-dark' />
                            </div>
                        </a>
                    </section>
                    <div className="w-100 row">
                        {/* <!-- footer content section large screen view --> */}
                        <div
                            className="col-xl-8 d-none d-xl-inline"
                            style={{
                                padding: '4rem 0',
                                height: 'auto',
                                borderRight: '1px solid #eee',
                            }}>
                            <div className="w-100 d-flex justify-content-xl-between gap-4">
                                {/* <!-- Our company section --> */}
                                <div className="footerItemsSpacing">
                                    <p className="text-uppercase fw-normal">OUR COMPANY</p>
                                    {/* <!-- list under this category --> */}
                                    <section className="fw-lighter list text_primary"
                                        style={{
                                            letterSpacing: '1px',
                                            textTransform: 'capitalize'
                                        }}>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>About Us</p>
                                            </a>
                                        </div>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Careers</p>
                                            </a>
                                        </div>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Sustainability</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Social responsibility</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>press inquiries</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Investor Relations</p>
                                            </a>
                                        </div>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Contact Us</p>
                                        </a>
                                        <li>866-427-4287</li>
                                        <li><a href="#" className="text-reset">shop@arhaus.com</a></li>
                                    </section>
                                </div>
                                {/* <!-- customer care --> */}
                                <div className="footerItemsSpacing">
                                    <p className="text-uppercase fw-normal">CUSTOMER CARE</p>
                                    <section className="fw-lighter list text_primary"
                                        style={{ letterSpacing: '1px', textTransform: 'capitalize' }}>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Worry free protection plan</p>
                                            </a>
                                        </div>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Limited warranty</p>
                                            </a>
                                        </div>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Returns & exchanges</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Delivery & Shipping</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Catalog Unsubscribe</p>
                                            </a>
                                        </div>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Do not sell my personal <br />information</p>
                                            </a>
                                        </div>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Policy rights</p>
                                            </a>
                                        </div>
                                    </section>
                                </div>
                                {/* <!-- resources --> */}
                                <div className="footerItemsSpacing">
                                    <p className="text-uppercase fw-normal">RESOURCES</p>
                                    <section className="fw-lighter list text_primary"
                                        style={{ letterSpacing: '1px', textTransform: 'capitalize' }}>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>FAQ</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>catalogs & subscriptions</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Archarge credit card</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Arhaus Business</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Arhaus Trade Program</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Arhaus contact sales</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Design services</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>care guide</p>
                                            </a>
                                        </div>

                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Assembly Guides</p>
                                            </a>
                                        </div>
                                        <div style={{ width: 'fit-content' }}>
                                            <a href="#" className="text-decoration-none list-link">
                                                <p>Room Planer</p>
                                            </a>
                                        </div>
                                    </section>
                                </div>

                                {/* <!-- Local store section --> */}
                                <div className='px-2' style={{ letterSpacing: '2px' }}>
                                    <p className="text-uppercase fw-normal" style={{ fontSize: '12px' }}>YOUR LOCAL STORE</p>
                                    <div className="w-100 mb-4">
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0507/9017/0795/files/Footer_Store_200x133_2x_3d7975df-9dfe-451e-ba7d-38e0425c1ae8_200x133.jpg?v=1633449583"
                                            className="w-100" />
                                    </div>
                                    <section className="fw-lighter text_primary"
                                        style={{
                                            fontSize: '12px',
                                            letterSpacing: '1px',
                                            textTransform: 'capitalize'
                                        }}>
                                        <a href="#" className="text-reset">find the nearest store</a>
                                        <br />
                                        <a href="#" className="text-reset">more stores near you</a>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* <!-- news letter section border-top --> */}
                        <div className="col my-xl-5">
                            <div className="w-100 p-4 p-xl-3">
                                <p className="text-uppercase" style={{fontSize : '14px'}}>Newsletter</p>
                                <p className="fw-lighter" style={{fontSize : '13px'}}>
                                    Sign up for promotions, decorating tips and more from our team.
                                </p>

                                <div className="input-border w-100 d-flex justify-content-between align-items-center">
                                    <input type="text" placeholder="email newsletter" className="border-0"/>
                                        <ArrowRight className='icon-dark mx-2'/>
                                </div>
                                {/* <!-- social icons --> */}
                                <div className="w-100 xl:w-50 d-flex flex-row justify-content-center justify-content-xl-start gap-3 my-4"
                                style={{fontSize : '20px'}}>
                                    <Facebook className='icon-dark'/>
                                    <Twitter className='icon-dark'/>
                                    <Instagram className='icon-dark'/>
                                    <Pinterest className='icon-dark'/>
                                    <Youtube className='icon-dark'/>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- responsive content section in small screen --> */}

                        <div className="d-block d-xl-none accordion p-0 m-0" id="accordionExample">

                            <div className="px-3 py-2 footerItemsSpacing border-top rounded-0 border-0">
                                <div className="card-header bg-white border-0" id="headingOne">
                                    <button className="w-100 d-flex justify-content-between align-items-center bg-white py-3"
                                        type="button"
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne">
                                        <span className="text-uppercase fw-normal" style={{fontSize : '12px'}}>Our company</span>
                                        <ChevronDown className='icon-dark' style={{fontSize : '15px'}}/>
                                    </button>
                                </div>

                                <div id="collapseOne"
                                     className="collapse" 
                                     aria-labelledby="headingOne" 
                                     data-parent="#accordionExample">
                                    <section className="fw-lighter card-body px-2"
                                        style={{
                                            fontSize : '12px',
                                            letterSpacing : '1px',
                                            textTransform : 'capitalize'
                                        }}>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>About Us</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Careers</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Sustainability</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Social responsibility</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>press inquiries</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Investor Relations</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Contact Us</p>
                                        </a>
                                        <li>866-427-4287</li>
                                        <li><a href="#" className="text-reset">shop@arhaus.com</a></li>
                                    </section>
                                </div>
                            </div>
                            <div className="px-3 py-2 footerItemsSpacing border-top rounded-0 border-0">
                                <div className="card-header bg-white border-0" id="headingTwo">
                                    <button className="w-100 d-flex justify-content-between align-items-center bg-white py-3"
                                         type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        <span className="text-uppercase fw-normal" style={{fontSize : '12px'}}>Customer care</span>
                                        <ChevronDown className='icon-dark' style={{fontSize : '15px'}}/>
                                    </button>

                                </div>
                                <div id="collapseTwo" className="collapse px-2" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <section className="fw-lighter card-body"
                                        style={{
                                            fontSize : '12px',
                                            letterSpacing : '1px',
                                            textTransform : 'capitalize'
                                        }}>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Worry free protection plan</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Limited warranty</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Returns & exchanges</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Delivery & Shipping</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Catalog Unsubscribe</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Do not sell my personal <br />information</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Policy rights</p>
                                        </a>
                                    </section>
                                </div>
                            </div>

                            <div className="px-3 footerItemsSpacing py-2 border-top rounded-0 border-0">
                                <div className="card-header  bg-white border-0" id="headingThree">
                                    <button className="w-100 d-flex justify-content-between align-items-center bg-white py-3"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        <span className="text-uppercase fw-normal" style={{fontSize : '12px'}}>RESOURCES</span>
                                        <ChevronDown className='icon-dark' style={{fontSize : '15px'}}/>
                                    </button>
                                </div>
                                <div id="collapseThree" className="collapse px-2" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <section className="fw-lighter card-body"
                                        style={{
                                            fontSize : '12px',
                                            letterSpacing : '1px',
                                            textTransform : 'capitalize'
                                        }}>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>FAQ</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>catalogs & subscriptions</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Archarge credit card</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Arhaus Business</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Arhaus Trade Program</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Arhaus contact sales</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Design services</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>care guide</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Assembly Guides</p>
                                        </a>
                                        <a href="#" className="text-decoration-none text-reset">
                                            <p>Room Planer</p>
                                        </a>
                                    </section>
                                </div>
                            </div>
                            <div className="px-3 footerItemsSpacing py-2 border-top rounded-0 border-0">
                                <div className="card-header  bg-white border-0" id="headingFour">
                                    <button className="w-100 d-flex justify-content-between align-items-center bg-white py-3"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        <span className="text-uppercase fw-normal" style={{fontSize : '12px'}}>YOUR LOCAL STORE</span>
                                        <ChevronDown className='icon-dark' style={{fontSize : '15px'}}/>
                                    </button>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div className="w-100 mb-4">
                                        <img
                                        src="https://cdn.shopify.com/s/files/1/0507/9017/0795/files/Footer_Store_200x133_2x_3d7975df-9dfe-451e-ba7d-38e0425c1ae8_200x133.jpg?v=1633449583"
                                        style={{objectFit : 'contain',padding:'1rem'}} />
                                    </div>
                                    <section className="fw-lighter card-body px-3"
                                        style={{letterSpacing: '1px', textTransform: 'capitalize'}}>
                                        <a href="#" className="text-reset">find the nearest store</a>
                                        <br />
                                        <a href="#" className="text-reset">more stores near you</a>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* <!-- terms, conditions and policy sections --> */}
                        <section className="border-top w-100 py-2">
                            <div className="d-flex flex-column flex-xl-row fw-lighter gap-4"
                            style={{fontSize : '11px'}}>
                                <a href="#">
                                    <button className="shadow bg-white d-none d-xl-inline rounded-circle mx-2 p-2"
                                        style={{
                                            outline : 'none',
                                            width : 'fit-content',
                                            height : 'fit-content'
                                        }}>
                                        <a href="#"><ChevronUp className='icon-dark'/></a>
                                    </button>
                                </a>

                                <div className="d-flex flex-column flex-xl-row list p-2 gap-4">
                                    <a href="#" className="text-decoration-none list-link">
                                        <p>Terms & conditions</p>
                                    </a>
                                    <a href="#" className="text-decoration-none list-link">
                                        <p>Privacy policy</p>
                                    </a>
                                    <a href="#" className="text-decoration-none list-link">
                                        <p>Accessibility</p>
                                    </a>
                                    <a href="#" className="text-decoration-none list-link">
                                        <p>promotions</p>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>


            </footer>
        </Fragment>
    );
}

export default Footer;