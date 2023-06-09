import Image from "next/image";
import { FC, Fragment } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

type Props={
    mainCategories : any[]
}
export const HomeCarousel: FC<Props> = ({mainCategories}) => {
    console.log({mainCategories});
    //const transformData = mainCategories.map((data : any) => data.name.toLowercase)
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
                {mainCategories && mainCategories.map((data : any,_ :number) => {
                    const url : string = data.name.split('?')[0];
                    const name : string = data.name.split('?')[1];

                    return  <SwiperSlide key={_}>
                     <div className="">
                         <a href="/collections/bedroom-furniture.html">
                             <div className="card m-0 rounded-0 text-light">
                                 <object 
                                 data={url.toLowerCase()}
                                 className="card-img h-100 rounded-0"
                                 //alt="BEDROOM"
                                 />
                                 <div className="card-img-overlay display-5 text-uppercase">
                                    <p className="card-text position-absolute bottom-0">{name}</p>
                                 </div>
                             </div>
                         </a>
                     </div>
                    </SwiperSlide>
                }
                )}

                </Swiper>
            </div>
        </Fragment>
    );
}