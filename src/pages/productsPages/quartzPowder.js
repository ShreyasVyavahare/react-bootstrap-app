import React from "react";

import prodImg from './productAssets/DetailsPageImages/quartzPowder.png'
import prodImg2 from './productAssets/DetailsPageImages/quartzPowder2.png'
import { Fade } from "react-awesome-reveal";

import Slider from "react-slick";

const quartzPowder = () => {
    // slider settings
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
                            <h2 id='heading'>QUARTZ Powder</h2>
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
                            <h4 style={{ fontFamily: 'serif',margin:'10px' }} >Actively engaged in the manufacturing and exporting of premium quality Quartz Powder/Filler, the product is widely appreciated by our clientele for the quality, highly competitive price and bulk quantity. </h4>
                            <div className="BorderLine" ></div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <h5 style={{ fontWeight: '1000', marginBottom: '20px' }}>Features</h5>
                                        <p>Precisely Processed</p>
                                        <p>Enhanced Shelf Life</p>
                                        <p>Accurate Composition</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <h5 style={{ fontWeight: '1000', marginBottom: '20px' }}>Applications:</h5>
                                        <p>Artificial Quartz Stone</p>
                                        <p>Ceramic Industry</p>
                                        <p>Filler in Paint for Coatings</p>
                                        <p>Filler in Rubber Industry</p>








                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <p>Television Picture Tube</p>
                                        <p>Semi- conductors</p>
                                        <p>Silicon Carbide</p>
                                        <p>Abrasives</p>




                                    </div>
                                </div>
                            </div>


                        </div>
                        <table style={{ margin: '10px', borderTop: '1px solid  #d9d9d9', marginTop: '50px' }} className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Quartz Powder</th>
                                    <th scope="col">Mesh Size </th>
                                    <th scope="col">Color & Whiteness</th>



                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Grade-I</th>
                                    <td>200,300,325,400 and 500 mesh</td>

                                    <td>95%-97%</td>

                                </tr>
                                <tr>
                                    <th scope="row">Grade-II</th>
                                    <td>200,300,325,400 and 500 mesh</td>

                                    <td>91%-93%</td>

                                </tr>
                                <tr>
                                    <th scope="row">Grade-III</th>
                                    <td>150,200,325</td>

                                    <td>85%-89%</td>

                                </tr>
                            </tbody>
                        </table>
                        <table style={{ margin: '10px', borderTop: '1px solid  #d9d9d9' }} className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">SiO2(Purity)</th>
                                    <th scope="col">Fe2O3</th>
                                    <th scope="col">Resin test</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>99.5% min</td>
                                    <td>0.01%</td>
                                    <td>Yes</td>

                                </tr>
                                <tr>
                                    <td >99.1% min</td>
                                    <td>0.01%-0.02%</td>
                                    <td>yes</td>

                                </tr>
                                <tr>
                                    <td>98%-99.1%</td>
                                    <td>0.0.2%-0.04%%</td>

                                    <td>N.A%</td>

                                </tr>
                            </tbody>
                        </table>

                    </div>
                </section>
            </Fade>
           
        </div>
    )
}
export default quartzPowder;