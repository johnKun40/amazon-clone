import React from 'react';
import './Product.style.css';

const ProductTwo = ({id, card_Title, image_One, card_Link }) =>{
   return(
    <div className='Main_DisplayOne'>
        <div className='Box_Three' key={id}>
            <h3 className='Title_BoxThree'>{card_Title}</h3>
            <div className='Product_Six'>
                <img src={image_One} alt='ooo' className='Image_Three'/>
            </div>
            <a className='Shop_Now' href='ooooo'>{card_Link}</a>
        </div>
    </div>
   ) 
}

export default ProductTwo;


