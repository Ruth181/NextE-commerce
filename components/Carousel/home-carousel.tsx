import Image from "next/image";
import { FC, Fragment } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

type Props={

}
export const HomeCarousel: FC<Props> = () => {
    return (
        <Fragment>
            <div className="bg-white mb-5"
                //data-aos="fade-in"
                >
                
                <Swiper
                slidesPerView={3.2}
                spaceBetween={10}
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
                            <a href="/collections/bedroom-furniture.html">
                                <div className="card m-0 rounded-0 text-light">
                                    <object 
                                    data={"https://cdn.shopify.com/s/files/1/0507/9017/0795/files/HP_Carousel_Bedroom_404x540_0e0a437b-640d-4f9c-8da9-80bd13b3fd41_404x.jpg?v=1674499587"}
                                    className="card-img rounded-0"
                                    //alt="BEDROOM"
                                    />
                                    <div className="card-img-overlay display-5 text-uppercase">
                                        <p className="card-text position-absolute bottom-0">bedroom</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                )}

                </Swiper>
            </div>
        </Fragment>
    );
}