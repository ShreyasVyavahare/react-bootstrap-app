import React from "react";
import prodImg from './productAssets/DetailsPageImages/quartzGritz.png'
import prodImg2 from './productAssets/DetailsPageImages/quartzGritz2.png'
import { Fade } from "react-awesome-reveal";

import Slider from "react-slick";

const quartzGritz = () => {
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
                            <h2 id='heading'>QUARTZ GRITS</h2>
                        </div>
                        <div className="col-lg-6" id="productPageImageContainer" >
                            {/* <img className="productPageImage" src={prodImg}></img> */}
                            <Slider className="imageSlider" {...settings}>
                                <div>
                                    <img src={prodImg}></img>

                                </div>
                                <div>
                                    <img src={prodImg2}></img>

                                </div>

                            </Slider>

                            



                        </div>
                        <div id="productPageDescriptionContainer" className="col-lg-6">
                            <h4 style={{ fontFamily: 'serif' ,margin:'10px'}} >Our range of quartz grits is widely acknowledged in the market for its high chemical and physical properties. In addition to this, the offered range is made using superior grade ingredients with sophisticated machinery at the premises. </h4>
                            <div className="BorderLine" ></div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <h5 style={{ fontWeight: '1000', marginBottom: '20px' }}>Features</h5>
                                        <p>Premium Purity</p>
                                        <p>Superior Fusibility</p>
                                        <p>Precisely Processed</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <h5 style={{ fontWeight: '1000', marginBottom: '20px' }}>Applications:</h5>
                                        <p>Artificial Quartz Stone</p>
                                        <p>Stone Cutting</p>
                                        <p>Sand Blasting</p>
                                        <p>Solid Surface</p>
                                       






                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                  
                                    <p>Paint Stripping</p>
                                        <p>Glass Grinding</p>
                                        <p>Fiber Glass</p>
                                        <p>Micro Graving</p>





                                    </div>
                                </div>
                            </div>


                        </div>
                        <table style={{margin:'10px',borderTop:'1px solid  #d9d9d9' ,marginTop:'50px'}} className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Silica Granules</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Color & Whiteness</th>
                                    <th scope="col">SiO2(Purity)</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Grade-I</th>
                                    <td>0.1-0.4 | 0.1-0.3 | 0.3-0.7 | 0.6-1.2 | 1.2-2.5 | 2.5-4.0 | 4.0-6.0 | 6.0-8.0</td>
                                    <td>Transparent</td>
                                    <td>99.5% min</td>
                                </tr>
                                <tr>
                                    <th scope="row">Grade-II</th>
                                    <td>0.1-0.4 | 0.1-0.3 | 0.3-0.7 | 0.6-1.2 | 1.2-2.5 | 2.5-4.0 | 4.0-6.0 | 6.0-8.0</td>
                                    <td>Transparent</td>
                                    <td>99.5% min</td>
                                </tr>
                                <tr>
                                    <th scope="row">Grade-III</th>
                                    <td>0.1-0.4 | 0.1-0.3 | 0.3-0.7 | 0.6-1.2 | 1.2-2.5 | 2.5-4.0 | 4.0-6.0 | 6.0-8.0</td>
                                    <td>Transparent to Milky White</td>
                                    <td>99%-99.6%</td>
                                </tr>
                            </tbody>
                        </table>
                        <table style={{margin:'10px',borderTop:'1px solid  #d9d9d9'}} className="table table-striped">
                            <thead>
                                <tr>
                           
                                    <th scope="col">Fe2O3</th>
                                    <th scope="col">Iron Free</th>
                                    <th scope="col">Moisture</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0.008%-0.01%</td>
                                    <td>Nil</td>
                                    <td>0.033%</td>
                                   
                                </tr>
                                <tr>
                                    <td >0.008%-0.01%</td>
                                    <td>Nil</td>
                                    <td>0.033%</td>
                                   
                                </tr>
                                <tr>
                                    <td>0.01%</td>
                                    <td>Nil</td>
                                    <td>0.033%</td>
                                    
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </section>
            </Fade>
        
        </div>
    )
}
export default quartzGritz;