import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Product.style.css';


const ProductThree = ({id, carousel_link, carousel_title, image_One}) => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", padding: "5px", zIndex:"1"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", padding: "5px", zIndex:"1" }}
            onClick={onClick}
          />
        );
      }
   
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
        return (
            
            <div className="carousel" key={id}>
                   <span> <h2 className="carousel__title">{carousel_title}</h2> <a className="carousel__link" href="oo">{carousel_link}</a> </span>
                    <Slider {...settings} >
                        <div>
                            <img src={image_One} alt='oooo' className="carousel_image"/>
                        </div>
                        <div>
                            <img src={image_One} alt='oooo' className="carousel_image"/>
                        </div>
                        <div>
                            <img src={image_One} alt='oooo' className="carousel_image"/>
                        </div>
                        <div>
                            <img src={image_One} alt='oooo' className="carousel_image"/>
                        </div>
                        <div>
                            <img src={image_One} alt='oooo' className="carousel_image"/>
                        </div>
                        <div>
                            <img src={image_One} alt='oooo' className="carousel_image"/>
                        </div>
                        <div>
                            <img src={image_One} alt='oooo' className="carousel_image"/>
                        </div>
                        <div>
                            <img src={image_One} alt='oooo' className="carousel_image"/>
                        </div>
                    </Slider>
            </div>
        );
      }


export default ProductThree;
  



