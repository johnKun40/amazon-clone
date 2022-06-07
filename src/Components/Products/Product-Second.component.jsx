import React from 'react';
import './Product.style.css';
import { useState } from 'react';
import { firestore} from '../../firebase';
//import CartButton from '../../cart-button';

const ProductTwo = ({id, card_Title, image_One, post, prize}) =>{


    // const [posts] = useState([]);

    // const addToCart = (item) => {
    //     posts.map((pos) => {
    //       if (pos.id === item.id) {
    //       return pos.cart = true
    //       }
    //     })

    //     //firestore.collection('cart').doc(`${item.id}`).set({merge: true })
    // }




   return(
    <div className='Main_DisplayOne'>
        <div className='Box_Three' id={id}>
            <h3 className='Title_BoxThree'>{card_Title}</h3>
            <div className='Product_Six'>
                <img src={image_One} alt='ooo' className='Image_Three'/>
            </div>
            
        </div>
    </div>
   ) 
}

export default ProductTwo;


