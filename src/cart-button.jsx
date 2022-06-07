import React  from 'react';
import './cart-button.css';
import { firestore } from './firebase';

import { useDispatch } from "react-redux";
import { addToCart } from './features/cartSlice';
import { useParams } from "react-router-dom";

const CartButton = ({product, productDetails, productPrize, productImage, productName}) => {

    const dispatch = useDispatch();
    const params = useParams();


    const handleAddToCart = (post) => {
        dispatch(addToCart(post))

        firestore.collection('cart').doc(params.id).set({merge: true, productName : {productName}, productPrize: {productPrize}, productImage: {productImage}, productDetails: {productDetails} })
  
      }

    // const [cart, setCart] = useState([])

    // const addToCart = (post) => {
    //     console.log('we are adding')
    //     setCart([...cart, post]);
        
    // };


  return (
    <button onClick={() => handleAddToCart({product})} className='cart-button'>Add to Cart</button>
  );
}

export default CartButton;
