import React from 'react';
import './Product.style.css';

const Product = ({id, title_One, card_Title, title_Two, title_Three, title_Four, image_One, image_Two, image_Three, image_Four, card_Link}) => {
  return (
    <div className='Product'>

            

        <div className='Main_DisplayOne'>

            <div className='Box_One' key={id}>
                <h3 className='Title_BoxOne'>{card_Title}</h3>
                <div className='Item_DisplayOne'>
                    <div className='Item_BoxOne'>
                        <div className='Product_One'>
                        <img src= {image_One} alt='first_product' className='Image_Two'  />
                        <div className='Image_TitleOne'><p>{title_One}</p></div>
                        </div>
                        <div className='Product_One'>
                        <img src={image_Two} alt='first_product' className='Image_Two'/>
                        <div className='Image_TitleOne'><p>{title_Two}</p></div>
                        </div>
                    </div>
                </div>
                <div className='Item_DisplayTwo'>
                    <div className='Item_BoxTwo'>
                        <div className='Product_One'>
                        <img src={image_Three} alt='first_product' className='Image_Two'/>
                        <div className='Image_TitleOne'><p>{title_Three}</p></div>
                        </div>
                        <div className='Product_One'>
                        <img src={image_Four} alt='first_product' className='Image_Two'/>
                        <div className='Image_TitleOne'><p>{title_Four}</p></div>
                        </div>
                    </div>
                </div>
                <a className='Shop_Now' href='ooooo'>{card_Link}</a>
            </div>

            
            



            
            {/* <div className='Box_Two'>
            <h3 className='Title_BoxTwo'>{card_Title}</h3>
                <div className='Item_DisplayThree'>
                    <div className='Item_BoxThree'>
                        <div className='Product_Five'>
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg' alt='first_product' className='Image_One'/>
                            <p>{title_One}</p>
                        </div>
                        <div className='Product_Five'>
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg' alt='first_product' className='Image_One'/>
                            <p>{title_Two}</p>
                        </div>
                    </div>
                    <div className='Item_BoxFour'>
                        <div className='Product_Five'>
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg' alt='first_product' className='Image_One'/>
                            <p>{title_Three}</p>
                        </div>
                        <div className='Product_Five'>
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg' alt='first_product' className='Image_One'/>
                            <p>{title_Four}</p>
                        </div>
                    </div>
                </div>
                <a className='Shop_Now' href='uuuuu'>{card_Link}</a>
            </div> */}
            {/* <div className='Box_Three'>
                <h3 className='Title_BoxThree'>Deals & Promotions</h3>
                <div className='Product_Six'>
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg' alt='ooo' className='Image_Three'/>
                </div>
                <a className='Shop_Now' href='ooooo'>Shop Now</a>
            </div>
            <div className='Box_Three'>
                <h3 className='Title_BoxThree'>Health & Personal Care</h3>
                <div className='Product_Six'>
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg' alt='ooo' className='Image_Three'/>
                </div>
                <a className='Shop_Now' href='ooooo'>Shop Now</a>
            </div>
            <div className='Box_Four'>
                    <h3 className='Title_BoxThree'>Beauty picks</h3>
                    <div className='Product_Six'>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg' alt='ooo' className='Image_Three'/>
                    </div>
                    <a className='Shop_Now' href='ooooo'>Shop Now</a>
                </div>
                <div className='Box_Five'>
                    <h3 className='Title_BoxThree'>Deal of the day</h3>
                    <div className='Product_Six'>
                        <img src='https://m.media-amazon.com/images/I/41af7Gp2b0L._AC_SY230_.jpg' alt='ooo' className='Image_Three'/>
                    </div>
                    <a className='Shop_Now' href='ooooo'>See all deals</a>
                </div>
                <div className='Box_Six'>
                    <h3 className='Title_BoxThree'>Get fit at home</h3>
                    <div className='Product_Six'>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg' alt='ooo' className='Image_Three'/>
                    </div>
                    <a className='Shop_Now' href='ooooo'>Explore Now</a>
                </div>
                <div className='Box_Seven'>
                    <h3 className='Title_BoxThree'>Dresses</h3>
                    <div className='Product_Six'>
                        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg' alt='ooo' className='Image_Three'/>
                    </div>
                    <a className='Shop_Now' href='ooooo'>Shop Now</a>
                </div> */}
        </div>

    </div>
  )
}

export default Product;

