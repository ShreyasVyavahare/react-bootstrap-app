import React from "react";
import { Fade } from "react-awesome-reveal";
import Nav from 'react-bootstrap/Nav';
import img from './productAssets/slider/slabs/sliderImg1.png';
import img2 from './productAssets/slider/slabs/sliderImg2.png';
import img3 from './productAssets/slider/slabs/sliderImg3.png';
import { abc } from "./slabsData";


const Slabs = () => {
  const { data } = abc;

  console.log("Hello");

  return (
    
    <div>
      <Fade direction="down">
      <div id='sliderContainer'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"> {/* Adjusted for a 3-second interval */}
      

     
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
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
     
      <div id='headingContainer'>
        <h1 id='heading' style={{ marginTop: '40px' }}>
          Quartz Slabs
        </h1>
        <br />
      </div>

      <p className='text-center' id='homeSubtext' style={{ marginBottom: '50px', marginLeft: '30px', marginRight: '30px' }}>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      </p>
      <Fade >
        <div className='row' id='row' style={{ marginTop: '50px', marginBottom: '50px' }}>
          {data.map((product, index) => (
           <div key={index} className='col-lg-4' id='imgContainer'>
            
           {/* <a href={`/calacatta/product/${index}`}>
           { console.log(product.image_url)}
           </a>  */}
           {/* microquartz\src\pages\productsPages\productAssets\NaturalSeries */}
           <Nav.Link  href={`/calacatta/product/${index}`}>
           <img className='prodImg' src={product.image_url} loading="lazy" />
             <p id='productName'>{product.product_name}</p>
           </Nav.Link>
         </div>

          ))}

        </div>
      </Fade>
     

    </div>
  );
};

export default Slabs;
