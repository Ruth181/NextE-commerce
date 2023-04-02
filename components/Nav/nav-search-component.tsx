import { FC, Fragment } from "react";

{/* <!-- large screen search dialog above --> */}
export const NavSearchComponent : FC = () => {
    
    return(
        <Fragment>
            <div id="search-div" className="container bg-white position-absolute border-top shadow-sm"
                style={{
                    zIndex: 20,
                    display: 'none',
                    padding: '3rem',
                    overflowY: 'auto',
                    maxHeight: '100vh'
                }}>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <span><i className="bi bi-search input-group-append fa-2x"></i></span>
                    <input className="shadow-none w-100 fs-3 border-0 text-reset fw-lighter"
                        style={{
                            padding: '1rem',
                            outline: 'none',
                            letterSpacing: '2px'
                        }} type="search"
                        placeholder="what are you looking for?" id="example-search-input" />
                </div>
                {/* <!-- search results here --> */}
                {/* <div className="row bg-white text-dark my-2">
                    <a href="#" className="text-decoration-none text-reset">
                        <div className="col-xl-3">
                            <section className="w-100" style={{ height: '16rem' }}>
                                <img src="https://cdn.arhaus.com/product/StandardV2/202255SFLT_CM220901.jpg" width="100%" height="100%" />
                            </section>
                            <section style={{ letterSpacing: '1px', fontSize: '15px' }}
                                className="fw-normal">
                                <p>Kipton Wide Arm Nubuck Leather Sofa</p>
                                <p style={{ color: '#89331C' }}>$7,499.00</p>
                            </section>
                            <br />
                        </div>
                    </a>
                </div> */}
            </div>
        </Fragment>
    );
}