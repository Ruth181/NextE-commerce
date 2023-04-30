import {FC, Fragment} from 'react';
import Footer from './Footer/footer';
import { Navbar } from './Nav/Navbar'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type Props={
    children : JSX.Element,
    className : string
}
const Layout : FC<Props> = ({children, className}) => {

    const { data : queryResponseData, isLoading, isFetched } = useQuery(
        {
            queryKey: ['find-product-categories'],
            queryFn: async () => {
                return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}product-category?pageNumber=1&pageSize=10`,{
                    headers : {
                        'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
                    }
                }).catch(err => err);
            },
            refetchOnWindowFocus: false
        }
    );
    return(
        <Fragment>
            <Navbar data={queryResponseData?.data?.data}/>
            <main className={`${className}`}>
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
}

export default Layout;

// export async function getServerSideProps(){
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}product-category?pageNumber=1&pageSize=10`,
//     {
//       headers:{
//         'Content-Type' : 'application/json',
//         'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
//       },
//       //httpsAgent: httpsAgent,
//     }).catch(err => err);
  
//     const {data} = await response.data;
//     return{
//       props:{
//         data
//       }
//     }
// }