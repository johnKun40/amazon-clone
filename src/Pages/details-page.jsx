import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";
import './details-page.css';
import CartButton from "../cart-button";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const DetailsPage = () => {



    const [ arrs] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const dispatch = useDispatch();
   


    const handleAddToCart = (post) => {
        dispatch(addToCart(post))

        firestore.collection('cart').doc(params.id).set({
          merge: true,
          productName : post.productName,
          productPrize: post.productPrize,
          productImage: post.productImage,
          productDetials: post.productDetails  })
  
      }
    
   useEffect (() => {

        firestore.collection("products")
            .doc(params.id)
            .get()
            .then(doc => {

                arrs.push(doc.data())
                setLoading(false);
              console.log(arrs)
            })

            return arrs
            
   }, [loading])

   if (loading) {
    return <h1>loading firebase data...</h1>;
}

  return (
    <div>
            {
            arrs.length > 0  ? (
            arrs.slice(0, 1).map((arr) => 
            <div className="container">

                <div className="details-container">

                    <div className="details-one">
                        <p className="product-name">{arr.productName}</p>
                        <img className="details-image" src={arr.productImage} alt="oooo" />
                    </div>

                    <div className="details-two">
                       <p className="product-details">{arr.productDetails}</p> 
                           <span>Price: ${arr.productPrize}</span>

                          <p className="button"><button onClick={() => handleAddToCart(arr)} className='cart-button'>Add to Cart</button></p> 
                       

                    </div>

                </div> 
            </div>)
            ) : (<h1>no posts</h1>)
            }
    </div>
  );
}

export default DetailsPage;
