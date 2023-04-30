export const NewArrivals = () => {
    return (
        <div className="mt-xl-0 container-fluid p-0"
            style={{zIndex: 10}}
            // data-aos="zoom-in"
            // data-aos-duration="1000"
            // data-aos-delay="500"
            >
            <div className="w-100 m-0 rounded-0">
                {/* <!-- image for larger screen --> */}
                <object
                    data="https://origamiportal.s3.us-east-2.amazonaws.com/public/uploads/living-room-decor.jpg"
                    className="w-100 card-img d-none d-lg-inline rounded-0" style={{height: '100vh'}}
                />
                {/* <!-- image for smaller screen --> */}
                <object
                    data="https://origamiportal.s3.us-east-2.amazonaws.com/public/uploads/living-room-2.jpg"
                    className="w-100 card-img d-inline d-lg-none rounded-0" style={{height : '80vh'}}
                />
                <div
                    className="card-img-overlay 
                    d-flex justify-content-center
                    justify-content-lg-start 
                    align-items-center">
                    <div className="w-50 p-2 text-dark my-5 text-center py-1 spacing">
                        <p className="text-uppercase fs-6 fw-semibold">Our most remarkable new<br />collection</p>
                        <p className="text-uppercase display-6">INTRODUCING <br />POLANCO</p>
                        <div className="d-flex justify-content-center my-4">
                            <a href="/collections/living-furniture/living-room-furniture.html"
                            className="text-decoration-none">
                                <div className="btn-shop-new-arrivals py-2 px-5 rounded-0 text-uppercase">
                                    Shop&nbsp;New&nbsp;Arrivals
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}