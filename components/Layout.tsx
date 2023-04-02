import {FC, Fragment} from 'react';
import Footer from './Footer/footer';
import { Navbar } from './Nav/Navbar'

type Props={
    children : JSX.Element,
    className : string
}
const Layout : FC<Props> = ({children, className}) => {

    return(
        <Fragment>
            <Navbar/>
            <main className={`${className}`}>
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
}

export default Layout;