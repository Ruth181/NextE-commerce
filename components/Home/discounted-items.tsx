import Link from "next/link";
import { FC, Fragment } from "react";

export const DiscountedItems: FC = () => {
    return (
        <Fragment>
            <div className="container-fluid p-0 mt-5"
                //data-aos="zoom-in"
                >
                <div className="row">
                    {/* <!-- 2 images on different screen dimensions --> */}
                    <div className="col-12 col-lg-7 col-xl-8 m-0 rounded-0">
                        <object
                            data="https://cdn.shopify.com/s/files/1/0507/9017/0795/files/1227_SpringLaunch_HP_PolancoHero_HP_Desktop_1920x1080_35f010b8-462f-4095-be45-5d2d40766245_1440x.jpg?v=1671114080"
                            className="w-100 d-none d-lg-inline rounded-0" style={{ maxHeight: '600px' }}
                        />
                        <object
                            data="https://cdn.shopify.com/s/files/1/0507/9017/0795/files/1227_SpringLaunch_HP_PolancoHero_HP_Mobile_375x540_3df1619c-eab2-48db-a475-546197337dd4_375x.jpg?v=1671114083"
                            className="w-100 d-inline d-lg-none rounded-0" style={{ maxHeight: '700px' }}
                        />
                    </div>
                    <div className="col-12 col-lg-5 col-xl-4 p-4 p-xl-5">
                        <p className="text-uppercase fs-6 fw-semibold spacing text-center text-lg-start">Special Offers</p>
                        <p className="display-6 fw-lighter text-center text-lg-start text-uppercase">Discounted Items</p>
                        <p className="lead text-center text-lg-start">
                            Here, every scorch mark, water stain,
                            and natural grain is celebrated
                            for what it imparts—organic character
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start my-4">
                            <Link href="/collections"
                            className="text-decoration-none">
                                <div className="py-2 px-5 
                                rounded-0 
                                text-uppercase discount-btn">
                                    Shop&nbsp;Items
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}