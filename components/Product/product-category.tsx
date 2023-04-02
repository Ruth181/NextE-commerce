import { FC, Fragment } from "react";
import Layout from "../Layout";
import { CategoryCarousel } from "../Carousel/categories-carousel";
import { ProductList } from "./product-list";

export const ProductCategory : FC = () => {
    return(
        <Layout className="container-fluid m-0 py-5">
           <div>
                <p className="text-uppercase lead fw-lighter navContainer pb-3" style={{fontSize : '35px'}}>BedRoom Furniture</p>
                <CategoryCarousel/>
                <ProductList/>
           </div>

        </Layout>
    );
}