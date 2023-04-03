import {FC} from 'react';
import Layout from '../Layout';
import  { ChevronDown, Heart, HeartFill } from 'react-bootstrap-icons';
import { RelatedItemsCarousel } from '../Carousel/related-items-carousel';

type Props={

}
export const ProductDetail :FC<Props> = () =>{
    return(
        <Layout className='container-fluid'>
            <section className="w-100" style={{zIndex : 10}}>
                <div className="row">
                    {/* <!-- product images --> */}
                    <section className="col-12 col-md-6 col-xl-7 p-0">
                        <div className="w-100 zoom-in"
                            typeof="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#zoomImageCanvas"
                            aria-controls="zoomImageCanvas">
                            <object 
                            data="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_V210825.jpg?preset=ProductGrande"
                            className="w-100" 
                            />
                        </div>
                        <div className="w-100 zoom-in"
                            typeof='button'
                            data-bs-toggle="offcanvas"
                            data-bs-target="#zoomImageCanvas"
                            aria-controls="zoomImageCanvas">
                            <object 
                            data="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_W210825.jpg?preset=ProductGrande"
                            className="w-100" 
                            />
                        </div>
                    </section>
                    {/* <!-- Zoom image --> */}
                    <div 
                    className="offcanvas offcanvas-top h-100" 
                    tabIndex={-1} id="zoomImageCanvas" 
                    aria-labelledby="offcanvasExampleLabel"
                    >
                        <div className="offcanvas-header border-bottom">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Dinning&nbsp;chair</h5>
                            <button
                            type="button"
                            className="btn-close text-reset shadow-none"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <object 
                            data="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_V210825.jpg?preset=ProductGrande"
                            className="w-100" 
                            />
                        </div>
                    </div>

                    <section className="col-12 col-md-6 col-xl-5 p-4 p-sm-5" style={{letterSpacing: '1px'}}>
                        {/* <!-- Tag --> */}
                        <div className="rounded-4 text-black py-1 px-3"
                            style={{
                                backgroundColor: '#EDECE8', fontSize: '11px', width:'fit-content'
                            }}>
                            <span>New</span>
                        </div>
                        <p className="fw-lighter" style={{fontSize: '40px'}}>
                            Lunden&nbsp;Dining&nbsp;Arm&nbsp;Chair&nbsp;in&nbsp;Nomad&nbsp;Navy
                        </p>
                        <p className="fw-lighter">
                            <span style={{color: '#89331C'}}>$249.99</span>
                            &emsp;<span style={{color: '#707070', textDecoration: 'line-through'}}>$649.00</span>
                        </p>
                        <p className="text-uppercase" style={{fontSize: '10px', color: '#707070'}}>sku&nbsp;:&nbsp;30LNDNNVARCH</p>
                        <p style={{
                            fontSize : '14px',
                            lineHeight : '1.5rem'
                        }}>
                            Bring classic comfort to your dining space.
                            Our Lunden Dining Chair Collection features a minimalistic,
                            midcentury-inspired design. Solid, reinforced hardwood
                            frames in a hand-stained finish complement generously
                            padded upholstery.
                        </p>

                        <div className="py-4 border-top">
                            {/* <!-- color names --> */}
                            <p 
                            className="text-dark text-uppercase lead spacing" 
                            style={{fontSize: '12px', visibility: 'visible'}}>
                                Finish: <span id="colorName" className="text-muted fw-lighter"></span>
                            </p>

                            {/* color frames section */}
                            <section id="sectionFrame-1" className="my-2 d-flex flex-row gap-1 align-items-center">
                                <div
                                    id='Brown'
                                    style={{height: '29px', width: '24px'}}
                                    //onclick="displayColorName('colorName', 'Brown','sectionFrame-1')"
                                    >
                                    <div
                                        className="border"
                                        // onmouseover="displayColorNameOnHover('colorName', 'Brown')"
                                        // onmouseout="revertToDefaultState()"
                                        style={{height: '24px', width: '24px', backgroundColor: '#553D37'}}></div>
                                </div>
                                {/* <!--color frame container pops up on hover --> */}
                                <div className="frame-hover-container" id="hover-img-container">
                                    {/* <!-- for image --> */}
                                    <object 
                                    id="product-image" data=""
                                    style={{height: '100%', width: '100%', objectFit: 'cover'}}
                                    />
                                </div>
                                <div
                                    id="Snow"
                                    style={{height: '29px', width: '24px'}}
                                    // onclick="displayColorName('colorName', 'Snow', 'sectionFrame-1')"
                                    // onmouseover="displayColorNameOnHover('colorName', 'Snow')"
                                    // onmouseout="revertToDefaultState()"
                                    >
                                    <div
                                        className="border"
                                        style={{height: '24px', width: '24px', backgroundColor: '#D6D3D4'}}></div>
                                </div>
                                <div
                                    id="Ebony"
                                    style={{height: '29px', width: '24px'}}
                                    // onclick="displayColorName('colorName', 'Ebony','sectionFrame-1')"
                                    // onmouseover="displayColorNameOnHover('colorName', 'Ebony')"
                                    // onmouseout="revertToDefaultState()"
                                    >
                                    <div
                                    className="border"
                                    style={{height: '24px', width: '24px', backgroundColor: '#313131'}}></div>
                                </div>
                            </section>
                        </div>

                        {/* <!-- Quantity select  --> */}
                        <div className="pt-4 pb-2 border-top">

                            <div className="d-flex justify-content-between">
                                <div className="w-25 d-flex flex-row justify-content-start align-items-center">
                                    <div style={{fontSize: '15px'}} className="text-uppercase">QTY:</div>
                                    <select id="qty-select" 
                                        className="border-0 shadow-none"
                                        aria-label=".form-select-sm example">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                        <option value="3">6</option>
                                    </select>
                                </div>
                                <p className=" text-capitalize text_primary fw-semibold" style={{fontSize: '12px'}}>In&nbsp;Stock</p>
                            </div>
                        </div>

                        {/* <!-- add to bag button --> */}
                        <button
                            style={{padding: '0.7rem', fontSize: '10px'}}
                            className="w-100 text-uppercase btn-primary text-center fw-bold shadow-none"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar-1"
                            aria-controls="offcanvasNavbar-1">
                            <span>Add to bag</span>
                        </button>
                        <button
                            className="bg-white mt-2 text_primary w-100 text-center text-capitalize text-decoration-underline py-2"
                            style={{fontSize: '13px', letterSpacing: '1.5px'}}>
                            <Heart className='icon-dark'/>
                            Add to wishlist
                        </button>

                        {/* <!-- Shopping bag drawer --> */}
                        <div className="offcanvas offcanvas-end "
                            tabIndex={-1}
                            id="offcanvasNavbar-1"
                            aria-labelledby="offcanvasNavbar-1Label">
                            <div className="offcanvas-header border-bottom">
                                <p className="offcanvas-title text-capitalize"
                                    id="offcanvasLabel"
                                    style={{letterSpacing: '1px'}}>Added to your bag</p>
                                <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="w-100">
                                    {/* <!-- first row --> */}
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <object 
                                            data="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_V210825.jpg?preset=ProductGrande"
                                            className="w-100" 
                                            />
                                        </div>
                                        <div className="col-6 p-2">
                                            <p className="fw-lighter" style={{fontSize: '15px'}}>Lunden Dining Arm Chair in Nomad Navy</p>
                                            <p style={{color: '#89331C'}}>$249.99</p>

                                            <div className="d-flex justify-content-between my-2">
                                                <div className="d-flex flex-row justify-content-center align-items-center">
                                                    <div style={{fontSize: '13px'}} className="text-uppercase">QTY:</div>
                                                    <select id="qty-select"
                                                        className="border-0 shadow-none"
                                                        aria-label=".form-select-sm example">
                                                        <option value="1" selected>1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                        <option value="3">6</option>
                                                    </select>
                                                </div>

                                                <div
                                                    className="fw-normal 
                                                    text-capitalize 
                                                    text-decoration-underline"
                                                    style={{fontSize: '12px', cursor: 'pointer'}}>
                                                    Remove
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 border-top position-absolute bottom-0">
                                <div
                                    className="w-100 d-flex justify-content-between bg-white align-items-center border-bottom"
                                    style={{fontSize: '14px', padding : '1rem', letterSpacing : '0px'}}>
                                    <p>Subtotal (8 items)</p>
                                    <p style={{paddingRight: '5px'}}>$2,742.99</p>
                                </div>
                                <a href="/cart.html">
                                    <button
                                        style={{padding: '0.7rem', fontSize: '10px'}}
                                        className="w-100 btn-primary text-uppercase text-center fw-bold
                                        active shadow-none">
                                        View full bag
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* <!-- accordion of details, care,dimensions,protection section --> */}
                        <div className="d-block accordion p-0 my-5" id="accordionExample1">

                            <div className="px-3 py-2 border-top rounded-0 border-0">
                                <div className="card-header bg-white border-0 bg-primary" id="headingOne-1">
                                    <button className="w-100 d-flex justify-content-between align-items-center bg-white px-0 py-2 spacing"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne-1"
                                        aria-expanded="false"
                                        aria-controls="collapseOne-1">
                                        <span className="text-uppercase fw-normal" style={{fontSize: '12px'}}>Details</span>
                                        <ChevronDown className='icon-dark'/>
                                    </button>
                                </div>

                                <div id="collapseOne-1"
                                    className="collapse"
                                    aria-labelledby="headingOne-1"
                                    data-parent="#accordionExample1">
                                    <section className="fw-lighter card-body"
                                        style={{color: '#000', textTransform: "capitalize"}}>
                                        {/* <!-- list of details --> */}
                                        <p style={{fontSize : '13px'}}>Lunden&#39;s frame is built using solid, reinforced hardwood.</p>

                                        <p style={{fontSize : '13px'}}>Square and curved legs are lacquered for added protection and subtle sheen.</p>

                                        <p style={{fontSize : '13px'}}>Curved backrest wraps around for added support.</p>
                                        <p style={{fontSize : '13px'}}>Frame support system features flexible elastic webbing.</p>
                                        <p style={{fontSize : '13px'}}>Our sustainably certified Crypton®
                                            Nomad Performance Fabrics are easy to clean,
                                            soft, and durable—engineered with stain-, odor-,
                                            and moisture-resistant technology in every fiber.
                                        </p>
                                        <p style={{fontSize : '13px'}}>Seat measures 19.5&#34; h.Arms measure: 24&#34;</p>
                                    </section>
                                </div>
                            </div>
                            <div className="px-3 py-2 border-top rounded-0 border-0">
                                <div className="card-header bg-white border-0" id="headingTwo-2">
                                    <button className="w-100 d-flex justify-content-between align-items-center bg-white px-0 py-2"
                                        style={{letterSpacing: '2px'}} type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo-2" aria-expanded="false" aria-controls="collapseTwo-2">
                                        <span className="text-uppercase fw-normal" style={{fontSize: '12px'}}>care</span>
                                        <ChevronDown className='icon-dark'/>
                                    </button>

                                </div>
                                <div id="collapseTwo-2" className="collapse" aria-labelledby="headingTwo-2" data-parent="#accordionExample1">
                                    <section 
                                        className="fw-lighter card-body" 
                                        style={{color: "#000", textTransform: "capitalize"}}>
                                        <p style={{fontSize : '13px'}}>
                                            Arhaus collections are crafted by artisans from around the
                                            world and are expertly designed to withstand everyday use.
                                            However, as even the best-made furnishings and décor are not indestructible,
                                            normal wear and tear will reflect use and care.
                                        </p>
                                        <p style={{fontSize : '13px'}}>Depending on the fabric selected for your upholstery,
                                            certain standard cleaning
                                            codes may be designated, indicating how to care for it.
                                        </p>
                                        <p style={{fontSize : '13px'}}>Pieces upholstered in Crypton® Nomad Fabrics are code SW:
                                            Spot-clean using distilled water or water-based cleaning agents.
                                            Foam from a mild detergent or mild dry-cleaning solvents can also be used.
                                        </p>
                                        <p style={{fontSize : '13px'}}>Crypton® fabrics can be cleaned using clear,
                                            mild detergent and water. Do not bleach.
                                            For tough stains, rub with a soft brush.
                                            Blot with a clean towel, rinsing thoroughly; let air-dry.
                                        </p>
                                    </section>
                                </div>
                            </div>

                           <div className="px-3 py-2 border-top rounded-0 border-0">
                                <div className="card-header  bg-white border-0" id="headingThree-3">
                                    <button className="w-100 d-flex justify-content-between align-items-center bg-white px-0 py-2"
                                        style={{letterSpacing: '2px'}} type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree-3" aria-expanded="false" aria-controls="collapseThree-3">
                                        <span className="text-uppercase fw-normal" style={{fontSize : '12px'}}>Dimensions</span>
                                        <ChevronDown className='icon-dark'/>
                                    </button>
                                </div>
                                <div id="collapseThree-3" className="collapse" aria-labelledby="headingThree-3"
                                    data-parent="#accordionExample1">
                                    <section className="fw-lighter card-body py-2"
                                        style={{color: "#000", textTransform: "capitalize"}}>
                                        <div
                                            className="border-top d-flex justify-content-between align-items-center text-uppercase">
                                            <p style={{fontSize : '13px'}}>Width</p>
                                            <p style={{fontSize : '13px'}}>23&#34;</p>
                                        </div>
                                        <div className="border-top w-100 d-flex justify-content-between align-items-center text-uppercase">
                                            <p style={{fontSize : '13px'}}>Height</p>
                                            <p style={{fontSize : '13px'}}>37.5&#34;</p>
                                        </div>
                                        <div className="border-top w-100 d-flex justify-content-between align-items-center text-uppercase">
                                            <p style={{fontSize : '13px'}}>Depth</p>
                                            <p style={{fontSize : '13px'}}>25&#34;</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <RelatedItemsCarousel header='Related Items'/>
            </section>
        </Layout>
    );
}