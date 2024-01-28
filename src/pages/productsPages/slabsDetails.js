import React, { useEffect, useState } from "react";
import { useLocation,useSearchParams } from "react-router-dom";
import { abc } from "./slabsData";
import prodImg from "../../components/assets/prod.png";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

function SlabsDetails() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

   let url = window.location.href;
   let lastIndex = url.length;
   let productId = url[lastIndex-1]; 
   console.log(productId);
//   for (const [key, value] of productId) {
//     if (value != "") {
//       console.log({ key, value });
//     }
//   }

  const [product, SetProduct] = useState({});
  useEffect(() => {
    SetProduct(abc.data[productId]);
    if (!product) {
      return <div>Product not found</div>;
    }
    //console.log("Hello");
  }, []);

  console.log(product);

    const {
      product_name,
      description,
      primary_colour,
      vein,
      category,
      image_url,
      image_url2,
      slider_img,
      slider_img2,
      slider_img3,
    } = product;

  return (
    <div>
        <Fade duration={2000} triggerOnce>
        <section className="productSection">
          <div className="row" style={{ marginTop: "60px" }}>
            <div id="headingContainer">
              <h2 id="heading">{product_name}</h2>
            </div>
            <div className="col-lg-6" id="productPageImageContainer">
              {/* <img className="slabPageImage" src={product.image_url2}></img> */}
              <Slider className="imageSlider" {...settings}>
                <div>
                  <img className="slabImages" src={product.image_url2}></img>
                </div>
                <div>
                  <img className="slabImages" src={product.image_url}></img>
                </div>
              </Slider>
            </div>
            <div id="productPageDescriptionContainer" className="col-lg-6">
              <h4 style={{ fontFamily: "serif", margin: "10px" }}>
                {description}
              </h4>
              <div className="BorderLine"></div>

              <div className="row">
                <div className="col-lg-6">
                  <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px" }}>
                      Primary colour:{" "}
                    </h5>
                    <p>{primary_colour}</p>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px" }}>
                      Vein:{" "}
                    </h5>
                    <p>{vein}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px" }}>
                      Category:{" "}
                    </h5>
                    <p>{category}</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={{ marginLeft: "30px", marginTop: "30px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}

export default SlabsDetails;
