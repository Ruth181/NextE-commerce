import { FC } from "react";
import Layout from "../Layout";
import { NewArrivals } from "./new-arrivals";
import { HomeCarousel } from "../Carousel/home-carousel";
import { FeaturedItems } from "./featured-items";
import { DiscountedItems } from "./discounted-items";
import { RelatedItemsCarousel } from "../Carousel/related-items-carousel";

const HomeComponent :FC = () => {
    return(
        <Layout className="container-fluid p-0">
            <div>
                <NewArrivals/>
                <section>
                    <p 
                    className="text-black display-6 p-5" 
                    style={{fontSize : '30px', fontWeight : 400}}>
                        Explore
                    </p>
                    <HomeCarousel/>

                    <FeaturedItems/>

                    <DiscountedItems/>

                    <RelatedItemsCarousel header="Frequently viewed"/>
                </section>
            </div>
        </Layout>
    );
}

export default HomeComponent;