import { FC, Fragment, useEffect } from "react";
import Layout from "../Layout";
import { CategoryCarousel } from "../Carousel/categories-carousel";
import { ProductList } from "./product-list";
import { NextRouter, useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

let extractName : string[] = [''];
let extractUUID : string[] = [''];

export const ProductCategory : FC = () => {
    const router : NextRouter = useRouter();
    const queryString : string = router.query.name as string;

    if(typeof queryString !== 'string'){
        return(
            <p></p>
        );
    }

    useEffect(() => {},[router.query]);

    extractName = queryString.split('?');
    extractUUID = queryString.split('=');
    const { data : queryResponseData, isLoading, isFetched } = useQuery(
        {
            queryKey: ['find-products-under-category'],
            queryFn: async () => {
                return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}product-category/${extractUUID[1]}`,{
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
        <Layout className="container-fluid m-0 py-5">
           <div>
                <p className="text-uppercase lead fw-lighter container pb-3" style={{fontSize : '35px'}}>{extractName[0]}</p>
                {/* <CategoryCarousel/> */}
                <ProductList data={queryResponseData?.data?.data}/>
           </div>

        </Layout>
    );
}