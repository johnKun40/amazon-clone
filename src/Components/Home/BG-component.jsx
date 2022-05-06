import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.style.css';
//import { baseUrl } from "./config";

const BgImage = ({id,image_One,image_Two,image_Three,image_Four}) =>{

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", padding: "5px", marginRight:"40px",zIndex:"1"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", padding: "5px", marginLeft:"40px",zIndex:"1" }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: "linear"
      };

    return(

        <div className='bg_carousel' key={id}>
          <Slider {...settings}>
            <div>
              <img src={image_One} alt='oooo' className='bgimg_home' />
            </div>
            <div>
              <img src={image_Two} alt='oooo' className='bgimg_home' />
            </div>
            <div>
              <img src={image_Three} alt='oooo' className='bgimg_home' />
            </div>
            <div>
              <img src={image_Four} alt='oooo' className='bgimg_home' />
            </div>
          </Slider>
        </div>
       
    )
}

export default BgImage;
