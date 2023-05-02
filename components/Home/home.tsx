import { FC } from "react";
import Layout from "../Layout";
import { NewArrivals } from "./new-arrivals";
import { HomeCarousel } from "../Carousel/home-carousel";
import { FeaturedItems } from "./featured-items";
import { DiscountedItems } from "./discounted-items";
import { RelatedItemsCarousel } from "../Carousel/related-items-carousel";
import { ProductList } from "../Product/product-list";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type props={
    data : any[];
}
const HomeComponent :FC<props> = ({data}) => {

    const { data : queryResponseData, isLoading, isFetched } = useQuery(
        {
            queryKey: ['find-products-under-category'],
            queryFn: async () => {
                return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}product-category/8958d739-aa05-4607-96d6-8fee3dd86142`,{
                    headers : {
                        'Content-Type' : 'application/json',
                        //'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
                    }
                }).catch(err => err);
            },
            refetchOnWindowFocus: false
        }
    );

    if(isLoading){
        return <p></p>
    }
    return(
        <Layout className="container-fluid p-0">
            <div>
                <NewArrivals/>
                <section className="container">
                    <p 
                    className="text-black display-6 pt-5 px-3" 
                    style={{fontSize : '30px', fontWeight : 400}}>
                        Newest Deals
                    </p>
                    <ProductList data={queryResponseData?.data?.data}/>                    
                    {/* <HomeCarousel mainCategories={data}/>

                    <FeaturedItems/>

                    <DiscountedItems/> */}

                    {/* <RelatedItemsCarousel header="Frequently viewed"/> */}
                </section>
            </div>
        </Layout>
    );
}

export default HomeComponent;