import React from 'react';
import {Search, Person, BagCheck, Bag, ChevronRight, ChevronLeft} from 'react-bootstrap-icons';
import { NavSearchComponent } from './nav-search-component';
import Link from 'next/link';
import Image from 'next/image';


export const Navbar = () => {
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
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link list-link" aria-current="page"
                                            href="/living-room-furniture.html">
                                            <p>Living</p>
                                        </Link>
                                        {/* <!-- Drop down for nav-menu --> */}
                                        <div className="mega-box border-top d-none d-xl-block">
                                            <div className="container-fluid bg-white" style={{ height: 'fit-content' }}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col py-4">
                                                                <p className="">Seating</p>
                                                                <p><Link href="#" className="list-link">In-Stock Dining</Link></p>
                                                                <p><Link href="#" className="list-link">Dining Chairs</Link></p>
                                                                <p><Link href="#" className="list-link">Counter Stools</Link></p>
                                                                <p><Link href="#" className="list-link">Barstools</Link></p>
                                                                <p><Link href="#" className="list-link">Dining Benches</Link></p>
                                                            </div>
                                                            <div className="col py-4">
                                                                <p className="">TABLES & STORAGE</p>
                                                                <p><Link href="#" className="list-link">Dining Tables</Link></p>
                                                                <p><Link href="#" className="list-link">Buffets, Sideboards, & Hutches</Link></p>
                                                                <p><Link href="#" className="list-link">Bar & Counter Tables</Link></p>
                                                                <p><Link href="#" className="list-link">Touch Up Kits</Link></p>
                                                                <p><Link href="#" className="list-link">Dining Benches</Link></p>
                                                            </div>
                                                            <div className="col py-4">
                                                                <p className="">TABLES & STORAGE</p>
                                                                <p><Link href="#" className="list-link">Dining Tables</Link></p>
                                                                <p><Link href="#" className="list-link">Buffets, Sideboards, & Hutches</Link></p>
                                                                <p><Link href="#" className="list-link">Bar & Counter Tables</Link></p>
                                                                <p><Link href="#" className="list-link">Touch Up Kits</Link></p>
                                                                <p><Link href="#" className="list-link">Dining Benches</Link></p>
                                                            </div>
                                                            {/* <!-- product image here --> */}
                                                            <div className="col">
                                                                <object
                                                                    data="https://cld.accentuate.io/263881883819/1661169627845/Nav_Desktop_AccentChairs_430x350.jpg?v=1672144948401&options=w_430"
                                                                    className="img-thumbnail p-0 border-0 rounded-0 w-100" />
                                                                <Link
                                                                    href="#"
                                                                    className="text-dark"
                                                                    style={{
                                                                        fontSize: '13px',
                                                                        letterSpacing: '1px',
                                                                        fontWeight: '600'
                                                                    }}>
                                                                    <span>Shop items</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight 
                                        className='d-block d-xl-none'
                                        onClick={() => openResponsiveDrawer('lining')}/>
                                    </li>
                                    {/* <!-- responsive super category dropdown menu --> */}
                                    <div className="openResponsiveSubMenu d-inline d-xl-none" id="living">
                                        <div className="container-fluid h-100 bg-white p-0">
                                            <div className="w-100 text-white" style={{
                                                height: '35%'
                                            }}>
                                                <object
                                                    data="https://cdn.shopify.com/s/files/1/0507/9017/0795/collections/expl_carousel_1_2x_03bbfd23-1afe-4302-80be-a3581b92f366_302x.png?v=1672144535"
                                                    className="card-img h-100 rounded-0"
                                                    style={{
                                                        objectFit: 'cover',
                                                    }} />
                                                <div
                                                    className="card-img-overlay text-uppercase p-2"
                                                    style={{
                                                        letterSpacing: '1px',
                                                        fontSize: '12px'
                                                    }}>
                                                    <div
                                                        className="d-flex flex-row gap-2 align-items-center"
                                                        id="close"
                                                        onClick={() => closeMenu('lining')}
                                                    >
                                                        <ChevronLeft className='d-block d-xl-none'/>
                                                        <span>Back</span>
                                                    </div>
                                                    <div style={{ height: '20%' }}></div>
                                                    <div className="my-2" style={{ fontSize: '30px' }}>
                                                        <p className="card-text">Living</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- sub menu --> */}
                                            <div className="row p-4">
                                                <div className="col border-bottom">
                                                    <p className="">Seating</p>
                                                    <p><Link href="#" className="list-link">In-Stock Dining</Link></p>
                                                    <p><Link href="#" className="list-link">Dining Chairs</Link></p>
                                                    <p><Link href="#" className="list-link">Counter Stools</Link></p>
                                                    <p><Link href="#" className="list-link">Barstools</Link></p>
                                                    <p><Link href="#" className="list-link">Dining Benches</Link></p>
                                                </div>
                                            </div>

                                            <div className="row p-4">
                                                <div className="col border-bottom">
                                                    <p className="">Seating</p>
                                                    <p><Link href="#" className="list-link">In-Stock Dining</Link></p>
                                                    <p><Link href="#" className="list-link">Dining Chairs</Link></p>
                                                    <p><Link href="#" className="list-link">Counter Stools</Link></p>
                                                    <p><Link href="#" className="list-link">Barstools</Link></p>
                                                    <p><Link href="#" className="list-link">Dining Benches</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link list-link" href="/product-category">
                                            <p>Dining</p>
                                        </Link>
                                        <ChevronRight className=' d-block d-xl-none icon-dark'/>
                                    </li>
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link  list-link" href="/product-category">
                                            <p>Bedroom</p>
                                        </Link>
                                        <ChevronRight className=' d-block d-xl-none icon-dark'/>
                                    </li>
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link  list-link" href="/product-category">
                                            <p>Lighting</p>
                                        </Link>
                                        <ChevronRight className=' d-block d-xl-none icon-dark'/>
                                    </li>
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link  list-link" href="/product-category">
                                            <p>decor</p>
                                        </Link>
                                        <ChevronRight className=' d-block d-xl-none icon-dark'/>
                                    </li>
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link  list-link" href="/product-category">
                                            <p>rugs</p>
                                        </Link>
                                        <ChevronRight className=' d-block d-xl-none icon-dark'/>
                                    </li>
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link  list-link" href="/product-category">
                                            <p>Outdoor</p>
                                        </Link>
                                        <ChevronRight className=' d-block d-xl-none icon-dark'/>
                                    </li>
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link  list-link" href="/product-category">
                                            <p>office</p>
                                        </Link>
                                        {/* <!-- Drop down for nav-menu --> */}
                                        <div className="mega-box d-none border-top d-xl-block">
                                            <div className="container-fluid bg-white" style={{ height: 'fit-content' }}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col py-4">
                                                                <p className="">OFFICE FURNITURE</p>
                                                                <p><Link href="#" className="list-link">In-Stock Office</Link></p>
                                                                <p><Link href="#" className="list-link">Desks</Link></p>
                                                                <p><Link href="#" className="list-link">Office Chairs</Link></p>
                                                                <p><Link href="#" className="list-link">File Cabinets</Link></p>
                                                                <p><Link href="#" className="list-link">Bookcases & Shelving</Link></p>
                                                            </div>

                                                            <div className="col py-4">
                                                                <p className="">OFFICE FURNITURE</p>
                                                                <p><Link href="#" className="list-link">In-Stock Office</Link></p>
                                                                <p><Link href="#" className="list-link">Desks</Link></p>
                                                                <p><Link href="#" className="list-link">Office Chairs</Link></p>
                                                                <p><Link href="#" className="list-link">File Cabinets</Link></p>
                                                                <p><Link href="#" className="list-link">Bookcases & Shelving</Link></p>
                                                            </div>

                                                            <div className="col py-4">
                                                                <p className="">OFFICE FURNITURE</p>
                                                                <p><Link href="#" className="list-link">In-Stock Office</Link></p>
                                                                <p><Link href="#" className="list-link">Desks</Link></p>
                                                                <p><Link href="#" className="list-link">Office Chairs</Link></p>
                                                                <p><Link href="#" className="list-link">File Cabinets</Link></p>
                                                                <p><Link href="#" className="list-link">Bookcases & Shelving</Link></p>
                                                            </div>
                                                            {/* <!-- product image if image is too big due to limited content give it custom height or set col-4--> */}
                                                            <div className="col">
                                                                <object
                                                                    data="https://cld.accentuate.io/263885455531/1617309684692/Nav_Desktop_Storage_430x350.jpg?v=1672146019209&options=w_430"
                                                                    className="img-thumbnail p-0 border-0 rounded-0 w-100 h-100"
                                                                />
                                                                <Link href="#" className="text-dark"
                                                                    style={{
                                                                        fontSize: '13px',
                                                                        letterSpacing: '1px',
                                                                        fontWeight: 600
                                                                    }}>
                                                                    <span>Shop items</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* onclick="openResponsiveDrawer('office')" */}
                                        <ChevronRight 
                                        className=' d-block d-xl-none icon-dark'/>

                                        {/* <!-- responsive super category dropdown menu --> */}
                                        <div className="openResponsiveSubMenu d-inline d-xl-none" id="office">
                                            <div className="container-fluid h-100 bg-white p-0">
                                                <div className="w-100 text-white"
                                                    style={{ height: '35px' }}>
                                                    <object
                                                        data="https://cld.accentuate.io/263885455531/1617309684692/Nav_Desktop_Storage_430x350.jpg?v=1672146019209&options=w_430"
                                                        className="card-img h-100 rounded-0"
                                                        style={{ objectFit: 'cover' }}
                                                        />
                                                    <div className="card-img-overlay text-uppercase p-2"
                                                        style={{
                                                            letterSpacing: '1px',
                                                            fontSize: '12px'
                                                        }}>
                                                        <div
                                                            className="d-flex flex-row gap-2 align-items-center"
                                                            id="close"
                                                        // onclick="closeMenu('office')"
                                                        >
                                                            <ChevronLeft className=' d-block d-xl-none'/>
                                                            <span>Back</span>
                                                        </div>
                                                        <div style={{
                                                            height: '20%'
                                                        }}></div>
                                                        <div className="my-2" style={{ fontSize: '30px' }}>
                                                            <p className="card-text">Office</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- sub menu --> */}
                                                <div className="row p-4">
                                                    <div className="col border-bottom">
                                                        <p className="">OFFICE FURNITURE</p>
                                                        <p><Link href="#" className="list-link">In-Stock Office</Link></p>
                                                        <p><Link href="#" className="list-link">Desks</Link></p>
                                                        <p><Link href="#" className="list-link">Office Chairs</Link></p>
                                                        <p><Link href="#" className="list-link">File Cabinets</Link></p>
                                                        <p><Link href="#" className="list-link">Bookcases & Shelving</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <hr className="d-block d-xl-none" />
                                    <li className="nav-item d-flex justify-content-between">
                                        <Link className="nav-link  list-link" href="/product-category">
                                            <p>specials</p>
                                        </Link>
                                        <ChevronRight className='d-block d-xl-none icon-dark'/>
                                    </li>
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