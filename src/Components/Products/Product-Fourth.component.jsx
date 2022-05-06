import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Product.style.css';

const ProductFour = ({id, image_One, image_Two, image_Three, image_Four, carouse_Title, card_disc, card_price}) => {

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
            style={{ ...style, display: "block", background: "black", padding: "5px", zIndex:"1"}}
            onClick={onClick}
          />
        );
      }

        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "10px",
          slidesToShow: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          speed: 500
        };
        return (
          <div className="single_carousel" key={id}>
            <h4 className="carousel_title">{carouse_Title}</h4>
            <Slider {...settings}>
              <div>
                <img src={image_One} alt="ooo" className="carousel__imageTwo" />
              </div>
              <div>
                <img src={image_Two} alt="ooo" className="carousel__imageTwo" />
              </div>
              <div>
                <img src={image_Three} alt="ooo" className="carousel__imageTwo" />
              </div>
              <div>
                <img src={image_Four} alt="ooo" className="carousel__imageTwo" />
              </div>
            </Slider>
            <div className="carousel_footer">
            <span><p>{card_disc}</p></span>
            <span>{card_price}</span>
            </div>
          </div>
        );
    
}

export default ProductFour;