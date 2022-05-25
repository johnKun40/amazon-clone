import React, { useEffect, useState } from "react";
import Product from "../Products/Product.component";
import ProductTwo from "../Products/Product-Second.component";
import BgImage from "./BG-component";
import './Home.style.css';
import '../Products/Product.style.css'
import { firestore } from "../../firebase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { render } from "@testing-library/react";

const Home = ({image_One}) => {

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

    
   
    const settings = {
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

      const settingsTwo = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500
    };

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = firestore.collection("products").onSnapshot((querySnapshot) =>
        {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id
                });
            });
            setPosts(getPostsFromFirebase);
            setLoading(false);
        });
        return () => subscriber();
    }, [loading]);

    if (loading) {
        return <h1>loading firebase data...</h1>;
    }
    

    
       
        
    return(
        <div className="home">
            <div className="bg-car">
            <BgImage id={101} image_Two={'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'} image_One={'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'} image_Three={'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'} image_Four={'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'} />
            </div>

            <div className="home-container">
            
                <div className="home_row">
                <Product id={101} image_One={"https://m.media-amazon.com/images/I/71fPSgwuPzL._AC_SY135_.jpg"} image_Two={'https://m.media-amazon.com/images/I/81A2PPbWgeL._AC_SY270_.jpg'} image_Three={'https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SY135_.jpg'}  image_Four={'https://m.media-amazon.com/images/I/91U1k4sVG1L._AC_SY135_.jpg'} card_Title={'Keep shopping for'} title_One={'Canon Camera'} title_Two={'Canon Camera'} title_Three={'Canon Camera'} title_Four={'Canon Camera'}/>

                <Product id={102} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'} image_Two={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg'} image_Three={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg'}  image_Four={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg'} card_Title={'Shop by Category'} title_One={'Canon Camera'} title_Two={'Canon Camera'} title_Three={'Canon Camera'} title_Four={'Canon Camera'} />

                {posts.length > 0 ? (
                posts.slice(0, 6).map((post) =>
                <ProductTwo id={post.key} image_One={post.productImage} card_Title={post.productName} card_Link={'Shop now'}/>)
                ) : (<h1>no posts</h1>)
                }

    

            </div>

            <div className="home_row3">
                
            <div className="carousel">
                   <span> <h2 className="carousel__title">Popular products in Apparel internationally</h2></span>
                    <Slider {...settings} >
                        {
                        posts.length > 0 ? (
                            posts.slice(7, 15).map((post) =>
                                <div>
                                    <img src={post.productImage} alt='oooo' className="carousel_image"/>
                                </div>)
                            ) : (<h1>no posts</h1>)
                        }
                    </Slider>
            </div>
                
            
            </div>

            <div className="home_row3">
                
                <div className="carousel">
                       <span> <h2 className="carousel__title">Related to items you have viewed</h2></span>
                        <Slider {...settings} >
                            {
                            posts.length > 0 ? (
                                posts.slice(16, 24).map((post) =>
                                    <div>
                                        <img src={post.productImage} alt='oooo' className="carousel_image"/>
                                    </div>)
                                ) : (<h1>no posts</h1>)
                            }
                        </Slider>
                </div>
                    
                
            </div>

            <div className="home_row4">

            <div className="single_carousel" >
            <h4 className="carousel_title">Popular products in pc internationally</h4>
            <Slider {...settingsTwo}>
                {
                    posts.length > 0 ? (
                        posts.slice(25,29).map((post) =>
                        <div>
                            <img src={post.productImage} alt="ooo" className="carousel__imageTwo" />
                            <span><p>{post.productName}</p></span>
                            <span><p>${post.productPrize}</p></span>
                            
                        </div>
                        )
                    ) : (<h1>no posts</h1>)
                } 
              
            </Slider>
          </div>

          {posts.length > 0 ? (
                posts.slice(30, 31).map((post) =>
                <ProductTwo id={post.key} image_One={post.productImage} card_Title={post.productName} card_Link={'Shop now'}/>)
                ) : (<h1>no posts</h1>)
            }

          <div className="single_carousel" >
            <h4 className="carousel_title">Popular products in Nigeria internationally</h4>
            <Slider {...settingsTwo}>
                {
                    posts.length > 0 ? (
                        posts.slice(32,34).map((post) =>
                        <div>
                            <img src={post.productImage} alt="ooo" className="carousel__imageTwo" />
                            <span><p>{post.productName}</p></span>
                            <span><p>${post.productPrize}</p></span>
                            
                        </div>
                        )
                    ) : (<h1>no posts</h1>)
                } 
              
            </Slider>
          </div>

          {posts.length > 0 ? (
                posts.slice(36, 37).map((post) =>
                <ProductTwo id={post.key} image_One={post.productImage} card_Title={post.productName} card_Link={'Shop now'}/>)
                ) : (<h1>no posts</h1>)
            }


            </div>


            </div>
            
       
        </div>
        
    )


}

export default Home;


