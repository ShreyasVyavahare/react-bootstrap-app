import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { lumpsData } from "./quartzLumpsData";
import prodImg from '../../components/assets/prod.png';


import Slider from "react-slick";

const LumpsDetails = () => {
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
  // const { subproductId } = useParams();
  // const subproduct = lumpsData.subproducts[subproductId];

  let url = window.location.href;
   let lastIndex = url.length;
   let subProductId = url[lastIndex-1]; 
   console.log(subProductId);

  const [subProduct, SetSubProduct] = useState({});
  useEffect(() => {
    SetSubProduct(lumpsData.subproducts[subProductId]);
    if (!subProduct) {
      return <div>Product not found</div>;
    }
    //console.log("Hello");
  }, []);

  console.log(subProduct);

  if (!subProduct) {
     return <div>Subproduct not found</div>;
  }

  const { name, applications, physicalProperties, chemicalProperties,image_url2,image_url3 } = subProduct;

  return (
    <div>
     
      <section className="productSection">
        <div className="row" style={{ marginTop: '60px' }}>
          <div id='headingContainer'>
            <h2 id='heading'>{name}</h2>
          </div>
          <div className="col-lg-6" id="productPageImageContainer">
            {/* <img className="productPageImage" src={image_url2} alt={name} /> */}
            <Slider className="imageSlider" {...settings}>
                                <div>
                                    <img src={image_url2}></img>

                                </div>
                                <div>
                                    <img src={image_url3}></img>

                                </div>

                            </Slider>
          </div>
          <div id="productPageDescriptionContainer" className="col-lg-6">
            <div className="BorderLine"></div>
            <div className="row">
              <div className="col-lg-4">
                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                  <h5 style={{ fontWeight: '1000', marginBottom: '20px' }}>Applications:</h5>
                  {applications && applications.map((app, index) => (
                    <p key={index}>{app}</p>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                </div>
              </div>
            </div>
          </div>
          <h3 style={{ marginTop: '30px' }}>Physical Properties</h3>
          <table style={{ margin: '10px', borderTop: '1px solid  #d9d9d9', marginTop: '20px' }} className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Quartz Lumps</th>
                <th scope="col">Size</th>
                <th scope="col">Color</th>
                <th scope="col">SiO2 %</th>
                <th scope="col">Fe %</th>
                <th scope="col">Surface</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Grade-I</th>
                <td>{physicalProperties?.size}</td>
                <td>{physicalProperties?.color}</td>
                <td>{physicalProperties?.sio2}</td>
                <td>{physicalProperties?.fe}</td>
                <td>{physicalProperties?.surface}</td>
              </tr>
            </tbody>
          </table>
          <h3 style={{ marginTop: '50px' }}>Chemical Properties</h3>
          <table style={{ margin: '10px', borderTop: '1px solid  #d9d9d9' }} className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Parameter</th>
                <td>Fe2O3</td>
                <td>SiO2</td>
                <td>LOI</td>
                <td>CaO</td>
                <td>MgO</td>
                <td>Al2O3</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Test Results</th>
                <td>{chemicalProperties?.fe2o3}</td>
                <td>{chemicalProperties?.sio2}</td>
                <td>{chemicalProperties?.loi}</td>
                <td>{chemicalProperties?.cao}</td>
                <td>{chemicalProperties?.mgo}</td>
                <td>{chemicalProperties?.al2o3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
    </div>
  );
}

export default LumpsDetails;
