import React from "react";

import prodImg from './productAssets/DetailsPageImages/microSilica.png'
import { Fade } from "react-awesome-reveal";

import Slider from "react-slick";

const MicroSilica = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        fade:true

    };
    return (
        <div>
          
            <Fade duration={2000} triggerOnce>
            <section className="productSection">
                <div className="row" style={{ marginTop: '60px' }}>
                    <div id='headingContainer'>
                        <h2 id='heading'>Microfine Silica Powder</h2>
                    </div>
                    <div className="col-lg-6" id="productPageImageContainer" >
                        {/* <img className="productPageImage" src={prodImg}></img> */}
                        <Slider className="imageSlider" {...settings}>
                                <div>
                                    <img src={prodImg}></img>

                                </div>
                                <div>
                                    <img src={prodImg}></img>

                                </div>

                            </Slider>




                    </div>
                    <div id="productPageDescriptionContainer" className="col-lg-6">
                        <h4 style={{fontFamily:'serif',margin:'10px'}} >Microfine Silica powder is highly micronized form of Silica Powder with particle size of 800-1000 Mesh or 10-20 Microns. </h4>
                        <div className="BorderLine" ></div>
                        
                        <div className="row">
                            <div className="col-lg-4">
                                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                    <h5 style={{ fontWeight: '1000',marginBottom:'20px' }}>Features</h5>
                                    <p>Precisely Processed</p>
                                    <p>Uniformity in Composition</p>
                                    <p>Fine Particle Size</p>
                                </div>
                            </div>
                            <div className="col-lg-4">

                                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                    <h5 style={{ fontWeight: '1000',marginBottom:'20px' }}>Applications:</h5>
                                    <p>Paints and Coatings</p>
                                    <p>  Ceramics</p>

                                    <p>Epoxy Resin</p>
                                    <p>Road Marking Paints</p>
                                    <p>Plastic Filler</p>




                                </div>
                            </div>
                            <div className="col-lg-4">

                                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                    <h5 style={{ fontWeight: '1000' ,marginBottom:'20px' }}>Particle Size:</h5>
                                    <p>800-1000 Mesh</p>
                                    



                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            </Fade>
      
        </div>
    )
}
export default MicroSilica;