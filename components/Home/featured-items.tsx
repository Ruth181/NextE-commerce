import Link from "next/link";
import { FC, Fragment } from "react";

export const FeaturedItems: FC = () => {
    return (
        <Fragment>
            <div className="container-fluid p-0 mt-5"
                //data-aos="zoom-in"
                >
                <div className="card m-0 rounded-0 w-100">
                    <object
                        data="https://cdn.shopify.com/s/files/1/0507/9017/0795/files/1.24_HP_Dining_Desktop_1920x1080_14f5db7c-17cf-4f94-be33-b76256411756_1440x.jpg?v=1674500077"
                        className="w-100 card-img d-none d-lg-inline rounded-0" style={{height : '90vh'}}
                    />
                    <object
                        data="https://cdn.shopify.com/s/files/1/0507/9017/0795/files/1.24_HP_Dining_Mobile_375x540_79d3e391-d7fb-4a47-b5c6-f9f3886c0bbf_375x.jpg?v=1674500081"
                        className="w-100 card-img d-inline d-lg-none rounded-0" style={{maxHeight: '90vh'}}
                    />
                    <div className="card-img-overlay d-flex justify-content-center align-items-center align-items-lg-end">
                        <div className="w-auto p-2 text-dark my-5">
                            <p className="text-uppercase fs-6 fw-semibold spacing text-center">Newest Feature</p>
                            <p className="text-uppercase display-6">Featured Items</p>
                            <div className="d-flex justify-content-center">
                                <Link href="/collections"
                                className="text-decoration-none">
                                    <div className="btn-shop-new-arrivals py-2 px-5 rounded-0 text-uppercase">
                                        Shop&nbsp;Items
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}