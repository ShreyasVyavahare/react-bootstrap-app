import React from "react";
import contactImage from '../components/assets/contactImage.png';
import Nav from 'react-bootstrap/Nav';

const Contact =()=>{
    return(
        <div>
        <div className="ContactTopContainer">
            <div className="row">
                <div className="col-lg-6">



                </div>
                <div className="col-lg-6">


                </div>
            </div>

        </div>

        <div className="row">
            <div className="col-lg-6">

            </div>
            <div className="col-lg-6"></div>
        </div>
        <section id="contactSection" className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <p className="text-center w-responsive mx-auto mb-5">
                We strive for transparency and honesty in all of our customer relationships. We know how often questions can come up in this industry, and we’re ready to answer all of them. If there’s something we missed, please reach out to us.
            </p>


            <div className="row">
                <div id="secondContainer" className="col-md-3 text-center">
                    <img className="contactImage" src={contactImage} alt="" />

                </div>

                <div className="col-md-1"></div>

                <div id="firstContainer" className="col-md-8 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" method="POST">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label htmlFor="name">Your name :</label>
                                    <input type="text" id="name" name="name" className="form-control" />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label htmlFor="email">Your email :</label>
                                    <input type="text" id="email" name="email" className="form-control" />

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <label htmlFor="subject">Subject :</label>
                                    <input type="text" id="subject" name="subject" className="form-control" />

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <label htmlFor="message">Your message :</label>
                                    <textarea
                                        type="text"
                                        id="message"
                                        name="message"
                                        rows="2"
                                        className="form-control md-textarea"
                                    ></textarea>

                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="text-center text-md-left">
                        <br></br>
                        <button className="btn btn-primary" onClick={() => document.getElementById('contact-form').submit()}>
                            submit
                        </button>
                    </div>
                    <div className="status"></div>
                </div>


            </div>
            <br></br>
            <br></br>
            <div className="row">


                <div className="col-md-4 text-center">
                    <ul className="list-unstyled mb-0">
                        <li style={{ marginTop: '15px' }}>
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                            <p><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Factory:</span> G-1 26,27 RIICO Industrial Area, Sanwar(Rajasthan)​ 313204<br></br>
                                <span style={{ fontWeight: 'bolder', marginRight: '10px' }}>Office:</span>   302, Vallabh Apartment
                                New Navratna Complex, Bhuwana
                                Udaipur (Rajashan) 313001</p>
                        </li>

                    </ul>
                </div>

                <div className="col-md-4 text-center">
                    <ul className="list-unstyled mb-0">

                        <li>
                            <i className="fas fa-phone mt-4 fa-2x"></i>
                            <Nav.Link href="tel:+919166676663">
                                <p>+91 9166676663</p>
                            </Nav.Link>
                        </li>

                    </ul>
                </div>

                <div className="col-md-4 text-center">
                    <ul className="list-unstyled mb-0">

                        <li>
                            <i className="fas fa-envelope mt-4 fa-2x"></i>
                            <Nav.Link href="mailto: microquartz@live.com">
                                <p> microquartz@live.com</p>
                            </Nav.Link>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.843505035673!2d73.63614687526363!3d24.663514478058342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967fca67c2c1311%3A0x4f188ba7df9f4d6!2sCuarzo!5e0!3m2!1sen!2sin!4v1702622211056!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <br></br>
        <br></br>




    </div>
    )
}
export default Contact