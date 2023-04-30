import React, {FC} from 'react';
import {Search, Person, BagCheck, Bag, ChevronRight, ChevronLeft} from 'react-bootstrap-icons';
import { NavSearchComponent } from './nav-search-component';
import Link from 'next/link';
import Image from 'next/image';

type Props={
    data : any
}
export const Navbar : FC<Props> = ({data} : any) => {

    const toggleLargeScreenSearchDialog = () : void => {
        const div :HTMLDivElement = document.getElementById('search-div') as HTMLDivElement;
        if(div.style.display === "none"){
          div.style.display = "block";
        }
        // anywhere outside the search div should trigger a close
        document.addEventListener('mouseup', function(e : any) {
          if (!div.contains(e.target)) {
            div.style.display = 'none';
          }
        });
    }
    
    function openResponsiveDrawer(elementId : string){
        const element : HTMLDivElement = document.getElementById(elementId) as HTMLDivElement;
        element.style.width = "100%";
    }
    function closeMenu(elementId : string){
        const element : HTMLDivElement = document.getElementById(elementId) as HTMLDivElement;
        element.style.width = "0%";
    }
    
    return (
        <div className="container-fluid border-bottom  bg-white">
            <div className="container sticky-top pt-2">
                <nav className="navbar navbar-expand-xl p-0">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <Link className="navbar-brand rounded-2 fs-4 d-xl-inline d-none" href="/">
                            <Image src="/siloette.jpeg" alt='' className="rounded-2" width={50} height={50} />
                        </Link>
                        {/* <!-- change positions of element in all breakpoints except xl --> */}
                        <button className="text-start navbar-toggler active shadow-none p-0 d-inline d-xl-none" 
                            type="button" 
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link className="text-end navbar-brand rounded-2 fs-4 d-inline d-xl-none" href="/">
                            <div className="d-flex justify-content-end">
                                <span className="spacing text-dark lead text_primary fw-semibold">Siloette</span>
                                {/* <img src="/images/siloette.jpeg" className="rounded-2" alt="" width="40" height="40"> */}
                            </div>
                        </Link>

                        <div className="offcanvas offcanvas-start w-100" tabIndex={-1} id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <p className="offcanvas-title" id="offcanvasLabel">
                                    {/* <!-- Logo for responsive Nav Drawer --> */}
                                    <Link className="navbar-brand rounded-2 fs-4 d-inline d-xl-none" href="/">
                                        <span className="spacing text-dark lead text_primary text-capitalize fw-semibold">Siloette</span>
                                        {/* <!-- <img src="/images/siloette.jpeg" className="rounded-2" alt="" width="40" height="40"> --> */}
                                    </Link>
                                </p>
                                <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                {/* navbar links */}
                                <ul className="list navbar-nav justify-content-center flex-grow-1 pt-2">
                                    {data && data.map((category : any, i: number) => 
                                        <Link key={i} href={{
                                            pathname :'/product-category',
                                            query : `name=${category.name}?uuid=${category.id}`

                                        }} className="nav-link list-link" aria-current="page">
                                            <hr className="d-block d-xl-none" />
                                            <li className="nav-item d-flex justify-content-between">
                                                <p>{category.name}</p>
                                                <ChevronRight 
                                                className='d-block d-xl-none'
                                                />
                                            </li>
                                        </Link>
                                    )}
                                    <hr className="d-block d-xl-none" />
                                </ul>
                            </div>

                        </div>
                        {/* <!-- navbar icons d-flex flex-row align-items-center gap-3 gap-md-4--> */}
                        <div className="fw-lighter p-0 pt-2">
                            <div className="d-flex justify-content-start justify-content-sm-end list">
                                <div style={{
                                    width: "fit-content"
                                }}
                                    className="d-flex flex-row align-items-center gap-2 gap-md-3 gap-xl-4 list">
                                    <Link href="#" className="text-decoration-none list-link"
                                    onClick={toggleLargeScreenSearchDialog}
                                    // onclick="toggleLargeScreenSearchDialog()"
                                    >
                                        <p style={{
                                            fontSize: '16px'
                                        }}>
                                            <Search className='d-none d-xl-inline'/>
                                        </p>
                                    </Link>
                                    <Link href="/login" className="list-link">
                                        <p style={{ fontSize: "20px" }}>
                                            <Person/>
                                        </p>
                                    </Link>
                                    <Link href="/previous-orders" className="list-link">
                                        <p style={{ fontSize: "20px" }}>
                                            <BagCheck/>
                                        </p>
                                    </Link>
                                    <Link href="/cart" className="list-link">
                                        <p style={{ fontSize: '20px' }}>
                                            <Bag/>
                                            <span className="badge p-0 text-black fw-lighter">2</span>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* responsive Nav bar */}
                    <div className="container-fluid d-block d-xl-none">
                        <div className="d-flex flex-row align-items-center gap-1"
                            style={{
                                backgroundColor: '#f4f4f4',
                                color: '#707070'
                            }}>
                            <span><i className="bi bi-search px-2 input-group-append"></i></span>
                            <input
                                className="bg-search shadow-none w-100"
                                style={{ padding: '0.7rem' }}
                                type="search"
                                placeholder="what are you looking for?"
                                id="example-search-input" />
                        </div>
                    </div>
                </nav>
                <NavSearchComponent/>
            </div>
        </div>
    );
}