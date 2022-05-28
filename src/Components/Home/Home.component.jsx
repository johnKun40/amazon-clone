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
import CartButton from "../../cart-button";
//import { useDispatch } from "react-redux";
//import { addToCart } from "../../features/cartSlice";
// import { render } from "@testing-library/react";

const Home = () => {

  //const dispatch = useDispatch();

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
                    id : doc.id
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

    const displayElectronics = () => {
      window.location.href = '/electronics';
    }

    const displayAccessories = () => {
      window.location.href = '/accessories';
    }

    
    
    

    
       
        
    return(
        <div className="home">
            <div className="bg-car">
            <BgImage id={101} image_Two={'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'} image_One={'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'} image_Three={'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'} image_Four={'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'} />
            </div>

            <div className="home-container">
            
                <div  className="home_row">
                  <div onClick={displayElectronics}>
                  <Product id={101} image_One={"https://m.media-amazon.com/images/I/71fPSgwuPzL._AC_SY135_.jpg"} image_Two={'https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_UL320_.jpg'} image_Three={'https://m.media-amazon.com/images/I/61UdeL7aO-L._AC_UL320_.jpg'}  image_Four={'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SY195_.jpg'} card_Title={'Just Electronics'} title_One={'Canon Camera'} title_Two={'HP Laptop'} title_Three={'HP Printer'} title_Four={'Iphone 12'}/>
                  </div>

                  <div onClick={displayAccessories}>
                <Product id={102} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'} image_Two={'https://m.media-amazon.com/images/I/91NA-l8CgdL._AC_SY200_.jpg'} image_Three={'https://m.media-amazon.com/images/I/71iv4SW6InL._AC_SY200_.jpg'}  image_Four={'https://m.media-amazon.com/images/I/91GCnIOo0tL._AC_SX425_.jpg'} card_Title={'Shop for Accessories'} title_One={'Laptop Case'} title_Two={'Brown Bag'} title_Three={'Camera Bag'} title_Four={'Messenger Bag'} />
                </div>

                {posts.length > 0 ? (
                posts.slice(0, 6).map((post) => 
                <div>
                <ProductTwo id={post.id} image_One={post.productImage} card_Title={post.productName} />
                 <CartButton product={post}/>
                </div>)
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
                                <div id={post.id}>
                                    <img src={post.productImage} alt='oooo' className="carousel_image"/>
                                    <CartButton product={post}/>
                                    
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
                                    <div id={post.id} >
                                        <img src={post.productImage} alt='oooo' className="carousel_image"/>
                                        <CartButton product={post}/>
                                    </div>)
                                ) : (<h1>no posts</h1>)
                            }
                        </Slider>
                </div>
                    
                
            </div>

            <div className="home_row4">

            <div className="single_carousel" >
            <h4 className="carousel_title">Popular products in PC internationally</h4>
            <Slider {...settingsTwo}>
                {
                    posts.length > 0 ? (
                        posts.slice(25,29).map((post) =>
                        <div id={post.id} >
                            <img src={post.productImage} alt="ooo" className="carousel__imageTwo" />
                            <span><p>{post.productName}</p></span>
                            <span><p>${post.productPrize}</p></span>
                            <CartButton product={post}/>
                            
                        </div>
                        )
                    ) : (<h1>no posts</h1>)
                } 
              
            </Slider>
          </div>

          {posts.length > 0 ? (
                posts.slice(30, 31).map((post) =>
                <div id={post.id} >
                <ProductTwo id={post.key} image_One={post.productImage} card_Title={post.productName} />
                <CartButton product={post}/>
                </div>)
                ) : (<h1>no posts</h1>)
            }

          <div className="single_carousel" >
            <h4 className="carousel_title">Popular products in Nigeria internationally</h4>
            <Slider {...settingsTwo}>
                {
                    posts.length > 0 ? (
                        posts.slice(32,34).map((post) =>
                        <div id={post.id} >
                            <img src={post.productImage} alt="ooo" className="carousel__imageTwo" />
                            <span><p>{post.productName}</p></span>
                            <span><p>${post.productPrize}</p></span>
                            <CartButton product={post}/>
                        </div>
                        
                        )
                    ) : (<h1>no posts</h1>)
                } 
              
            </Slider>
          </div>

          {posts.length > 0 ? (
                posts.slice(36, 37).map((post) =>
                <div>
                <ProductTwo id={post.id} image_One={post.productImage} card_Title={post.productName} />
                <CartButton product={post}/>
                </div>)
                ) : (<h1>no posts</h1>)
            }


            </div>


            </div>
            
       
        </div>
        
    )


}

export default Home;


