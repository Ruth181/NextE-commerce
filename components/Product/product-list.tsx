import { FC, Fragment } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

// this component is the products list, wherever its needed props can be parsed to it to display something new for a new page
export const ProductList :FC = () => {
    // display color Name based on color frame chosen displayColorName
    function displayColorNameOnHover(
        elementId : string,
        colorName : string,
        imageSrc="https://cdn.arhaus.com/product/StandardV2/30LNDNNVARCH_V210825.jpg?preset=ProductGrande"){
        const color = document.getElementById(elementId);
        const colorFrameDiv = document.getElementById('hover-img-container');
        const productImage : HTMLImageElement = document.getElementById('product-image') as HTMLImageElement;
        
        if(color !== null && productImage !== null && colorFrameDiv !== null){
            color.textContent = colorName;
            productImage.src = imageSrc;
            colorFrameDiv.classList.add('show-frame-hover-container');
        }
      
    }
    
    //on mouse out
    function revertToDefaultState(){
        const colorFrameDiv = document.getElementById('hover-img-container');
        if( colorFrameDiv !== null)
        colorFrameDiv.classList.remove('show-frame-hover-container');
    }
    
    function displayColorName(elementId : string,colorName : string,sectionFrameId : string){
        const displayText : HTMLDivElement = document.getElementById(elementId) as HTMLDivElement;
        const sectionChildren : HTMLElement =  document.getElementById(sectionFrameId) as HTMLElement;
        if(displayText !== null && sectionChildren !== null){
            displayText.textContent = colorName;
        
            const frames : HTMLCollectionOf<HTMLElement> = sectionChildren.children as HTMLCollectionOf<HTMLElement>;

            for(let i=0; i<frames.length; i++){
                if(frames[i].style.borderBottom){
                    frames[i].style.borderBottom = '0px';
                }
                frames[i].addEventListener('click', function handleClick(e){
                    frames[i].style.borderBottom = "2px solid #000";
                });
            }
        }
        
        //document.getElementById(colorName).style.borderBottom = '2px solid #000';
    }
    return(
        <Fragment>
            <section className="container py-4" style={{zIndex : 10}}>

                {/* <!-- total count and filter section --> */}
                <section className="container-fluid border-top pt-4">
                    <div className="d-flex flex-row gap-4 justify-content-start justify-content-md-end lead fw-normal align-items-center"
                        style={{fontSize : '11.5px'}}>
                        <div style={{color : '#707070'}}>78&nbsp;pieces</div>
                        <div>Sort</div>
                        <select id="qty-select"
                            className="border-0 shadow-none"
                            aria-label=".form-select-sm example">
                            <option selected>Featured</option>
                            <option value="a-z">Name:A-Z</option>
                            <option value="z-a">Name:Z-A</option>
                            <option value="asc">Price:Low to High</option>
                            <option value="desc">Price:High to Low</option>
                        </select>

                    </div>
                </section>

                {/* <!-- Bedroom furniture images --> */}
                <section className="container-fluid my-5">
                    {/* <!-- grid- image -section --> */}
                    <div id="bedroom-furniture" className="row bg-white text-dark">
                        {[0, 1, 2, 3].map((_: any, i: number) =>
                            <div key={i} className="col-12 col-md-6 col-lg-6 col-xl-4 p-0 px-sm-2">
                                {/* <!-- section contains to images for hover effect --> */}
                                <a href="/products/product-detail.html"
                                    className="text-decoration-none text-reset">
                                    <section className="w-100 hover-animation" style={{ height: '18rem' }}>
                                        <object
                                            className="img-back"
                                            data="https://cdn.arhaus.com/product/StandardV2/45WYLERQN3_J220207.jpg"
                                            width="100%"
                                            height="100%" />
                                        <object
                                            className="img-front"
                                            data="https://cdn.arhaus.com/product/StandardV2/45RIGBCFKGKT_FC210824.jpg"
                                            width="100%"
                                            height="100%" />
                                        {/* <!-- Tag container --> */}
                                        <div className="position-absolute rounded-4 text-black py-1 px-3"
                                            style={{
                                                backgroundColor: '#EDECE8',
                                                fontSize: '11px',
                                                top: '10px',
                                                right: '10px'
                                            }}>
                                            <span>New</span>
                                        </div>
                                    </section>
                                    <section style={{ letterSpacing: '1px', fontSize: '15px' }}
                                        className="py-1 fw-lighter d-flex justify-content-between text-capitalize">
                                        <div>
                                            <p>Rigby Bed</p>
                                            <span id="colorName"
                                                className="text-muted text-uppercase"
                                                style={{ fontSize: '15px' }}>
                                                Ebony
                                            </span>
                                        </div>
                                        <p style={{ color: '#89331C' }}>$2,199.00</p>
                                    </section>
                                </a>
                                {/* <!-- color frames --> */}
                                <section 
                                id="sectionFrame-1" 
                                className="my-2 d-flex flex-row gap-1 align-items-center"
                                style={{maxWidth : '50%'}}>
                                    <div
                                        id='Brown'
                                        style={{ height: '25px', width: '25px'}}
                                        onClick={() => displayColorName('colorName', 'Brown', 'sectionFrame-1')}>
                                        <div
                                            className="border"
                                            onMouseOver={() => displayColorNameOnHover('colorName', 'Brown')}
                                            style={{
                                                width: '100%',
                                                height: '20px',
                                                backgroundColor: '#553D37'
                                            }}></div>
                                    </div>
                                    <div
                                        id="Snow"
                                        style={{ height: '25px', width: '25px' }}
                                        onClick={() => displayColorName('colorName', 'Snow', 'sectionFrame-1')}
                                        onMouseOver={() => displayColorNameOnHover('colorName', 'Snow')}>
                                        <div
                                            className="border"
                                            style={{
                                                width: '100%',
                                                height: '20px',
                                                backgroundColor: '#D6D3D4'
                                            }}></div>
                                    </div>
                                    <div
                                        id="Ebony"
                                        style={{ height: '25px', width: '25px' }}
                                        onClick={() => displayColorName('colorName', 'Ebony', 'sectionFrame-1')}
                                        onMouseOver={() => displayColorNameOnHover('colorName', 'Ebony')}>
                                        <div
                                            className="border"
                                            style={{
                                                width: '100%',
                                                height: '20px',
                                                backgroundColor: '#313131'
                                            }}></div>
                                    </div>
                                </section>
                                <br />
                            </div>
                        )}
                    </div>
                </section>
            </section>
        </Fragment>
    );
}