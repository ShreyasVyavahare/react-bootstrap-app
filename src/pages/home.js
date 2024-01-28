
import { Fade } from "react-awesome-reveal";
import Strength2 from "../components/strength2";

import React, { useState, useEffect } from 'react';
import img1 from '../components/assets/img1.png';
import img2 from '../components/assets/img2.png';
import img3 from '../components/assets/img3.png';
import Products from "../components/productsComponent";

const Home =()=>{

    const [showModal, setShowModal] = useState(true);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();
    // Add your logic to handle form submission
  };

  // useEffect to show the modal on component mount
  useEffect(() => {
    setShowModal(true);
  }, []);

    return(
        <>

        {/* carousel */}

        <div id='sliderContainer'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"> {/* Adjusted for a 3-second interval */}
      

     
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            
            <div className="carousel-caption d-none d-md-block">
              <h2>World of silica</h2>
              <p style={{fontWeight:'bolder' ,color:'black'}}>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Powdered perfection</h2>
              <p style={{fontWeight:'bolder' ,color:'black'}}>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Every particle matters</h2>
              <p style={{fontWeight:'bolder' ,color:'black'}}>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
   
        {/* carousel */}

        <Fade> <div id='headingContainer'>
  
        <h1 id='heading' style={{ marginTop: '40px' ,color:'#6709c0'}}>
        Discover endless quartz possibilities
        </h1>
        <br />
      </div>

      <p className='text-center' id='homeSubtext' style={{ marginBottom: '50px', marginLeft: '30px', marginRight: '30px' }}>
      Inspired by nature, Micro Quartz crafts top-tier mineral products tailored to every demand.    </p></Fade>
      <br></br>
      <br></br>
      <br></br>
{/* products */}
<Products></Products>
<Strength2></Strength2>


     {/* modal */}
        <div  className='modal' tabIndex='-1' role='dialog' style={{ display: showModal ? 'block' : 'none', }}>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Connect with us</h5>
              <button type='button' style={{backgroundColor:'transparent' ,border:'none'}} className='close' onClick={handleModalClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
            <form id="contact-form" name="contact-form" method="POST">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label htmlFor="name">Your name :</label>
                                        <input type="text" id="name" name="name" className="form-control" />

                                    </div>
                                </div>
                               
                            </div>
                          <div className='row'>
                          <div className="col-md-12">
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
            </div>
          </div>
        </div>
      </div>


        </>
    )
}
export default Home
