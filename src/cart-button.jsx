import React  from 'react';
import './cart-button.css';

import { useDispatch } from "react-redux";
import { addToCart } from './features/cartSlice';

const CartButton = ({product}) => {

    const dispatch = useDispatch();


    const handleAddToCart = (post) => {
        dispatch(addToCart(post))
  
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