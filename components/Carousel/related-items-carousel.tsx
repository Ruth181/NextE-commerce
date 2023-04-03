import Link from "next/link";
import { FC, Fragment } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
    header : string,
    //array
}
export const RelatedItemsCarousel : FC<Props> = ({header}) => {
    return(
        <Fragment>
            <div className="my-5">
                <p className="text-uppercase fw-lighter lead"
                style={{padding : '0px 2.5rem'}}>{header}</p>
             <Swiper
                slidesPerView={3}
                spaceBetween={20}
                grabCursor={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }}
                className="mySwiper"
                style={{padding : '0 2rem'}}
            >
             {[0,1,2,3].map((_ :number) =>
                    <SwiperSlide key={_}>
                        <div className="">
                            <Link href="/sub-section.html"
                            className="text-decoration-none">
                                <div className="">
                                <div className="card border-0">
                                    <div className="img-wrapper">
                                        <object 
                                        data="https://cdn.shopify.com/s/files/1/0507/9017/0795/collections/Category_HomeWallDecor_302x302_2x_99b8b051-006d-4e94-bc7b-0843c357fb82_302x.jpg?v=1672143389" 
                                        className="d-block w-100 h-100"
                                        /> 
                                    </div>
                                    <div className="card-body px-0">
                                    <p className="card-text spacing text-uppercase lead text-muted">Home and wall decor</p>
                                    </div>
                                </div>
                                </div>
                            </Link>
                            </div>
                    </SwiperSlide>
             )}
            </Swiper>
        </div>
        </Fragment>
    );
}