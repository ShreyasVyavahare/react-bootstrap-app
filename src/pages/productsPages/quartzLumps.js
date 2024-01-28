import React from "react";
import { lumpsData } from "./quartzLumpsData";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import img1 from '../../components/assets/product1.png'
import img2 from './productAssets/slider/pebbles/sliderImg1.png';
import img from './productAssets/slider/pebbles/sliderImg2.png';
import { Fade } from "react-awesome-reveal";

const quartzLumps = ()=>{
    const { subproducts } = lumpsData;
    return(
        <div>
            <Fade direction="right" triggerOnce>
      <div id='sliderContainer'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"> {/* Adjusted for a 3-second interval */}
      

     
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
         
        </div>
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
            
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
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
    </Fade>
         
      
        <div id='headingContainer' style={{marginTop:'70px',marginBottom:'-30px'}} >
        <h2 id='heading' > Quartz Lumps</h2>
      </div>
      <br></br>
      <p className='text-center' id='homeSubtext' style={{ marginBottom: '50px', marginLeft: '30px', marginRight: '30px' }}>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      </p>
<div className='row' id='row' style={{marginTop:'50px',marginBottom:'50px'}}>
  {subproducts.map((subproduct, index) => (
    <div className='col-lg-4' id='imgContainer' key={index}>
      <a href={`/product/${index}`}>
        <img className='prodImg' src={subproduct.image_url} alt={`Product ${index}`} />
      </a>
  
      <Nav.Link  href={`/product/${index}`}> <p id='productName'>{subproduct.name}</p></Nav.Link>
    </div>
  ))}
</div>

      
      
      </div>
    )
}
export default quartzLumps;