import React from 'react';
import './Product.style.css';
//import CartButton from '../../cart-button';

const ProductTwo = ({id, card_Title, image_One}) =>{
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


