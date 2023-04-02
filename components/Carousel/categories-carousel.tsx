import { FC, Fragment } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export const CategoryCarousel : FC = () => {
    return(
        <Fragment>
             <Swiper
                slidesPerView={4}
                spaceBetween={10}
                grabCursor={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    992:{
                        slidesPerView : 3.5,
                        spaceBetween:10
                    },
                    1200:{
                        slidesPerView : 4.5,
                        spaceBetween:10
                    }
                }}
                className="mySwiper"
                style={{padding : '0 2rem'}}
            >
                {[0,1,2,3,4].map((_:number) => 
                    <SwiperSlide key={_}>
                        <div className="">
                            <a href="/sub-section.html" className="text-decoration-none">
                                <div className="card border-0">
                                    <div className="img-wrapper"
                                    ><object data="https://cdn.shopify.com/s/files/1/0507/9017/0795/collections/Category_Nightstands_302x302_2x_7a0d7b55-4209-4051-aa37-2fab5e809962_302x.jpg?v=1672143203" 
                                    className="d-block w-100 h-100" /> </div>
                                    <div className="card-body px-0">
                                        <p className="spacing text-uppercase lead text-muted">Nightstands</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </Fragment>
    );
}