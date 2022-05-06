import React, { Component } from "react";
import Product from "../Products/Product.component";
import ProductTwo from "../Products/Product-Second.component";
import ProductThree from "../Products/Product-Third.component";
import ProductFour from "../Products/Product-Fourth.component";
import BgImage from "./BG-component";
import './Home.style.css';
// import { render } from "@testing-library/react";

export default class Home extends Component {

    render() {
       
        
    return(
        <div className="home">
            <BgImage id={101} image_Two={'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'} image_One={'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'} image_Three={'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'} image_Four={'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'} />
            <div className="home_row">
                <Product id={101} image_One={'https://m.media-amazon.com/images/I/71fPSgwuPzL._AC_SY135_.jpg'} image_Two={'https://m.media-amazon.com/images/I/81A2PPbWgeL._AC_SY270_.jpg'} image_Three={'https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SY135_.jpg'}  image_Four={'https://m.media-amazon.com/images/I/91U1k4sVG1L._AC_SY135_.jpg'} card_Title={'Keep shopping for'} title_One={'Canon Camera'} title_Two={'Canon Camera'} title_Three={'Canon Camera'} title_Four={'Canon Camera'}/>

                <Product id={102} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'} image_Two={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg'} image_Three={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg'}  image_Four={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg'} card_Title={'Shop by Category'} title_One={'Canon Camera'} title_Two={'Canon Camera'} title_Three={'Canon Camera'} title_Four={'Canon Camera'} card_Link={'Shop now'} />

                <ProductTwo id={101} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg'} card_Title={'Health & Personal Care'} card_Link={'Shop now'}/>

                <ProductTwo id={102} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'} card_Title={'Computer & Accessories'} card_Link={'Shop now'}/>

            </div>

            <div className="home_row2">

                <ProductTwo id={104} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg'} card_Title={'Electronics'} card_Link={'See more'}/>

                <ProductTwo id={105} image_One={'https://m.media-amazon.com/images/I/41xKo7HTVcL._AC_SY230_.jpg'} card_Title={'Deal of the day'} card_Link={'See all deals'}/>

                <ProductTwo id={106} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg'} card_Title={'Deals & Promotions'} card_Link={'Shop now'}/>

                <ProductTwo id={107} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'} card_Title={'Beauty picks'} card_Link={'Shop now'}/>

            </div>

            <div className="home_row3">
                <ProductThree id={101} carousel_title={'Related to items you have viewed'}   image_One={'https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SY200_.jpg'} image_Two={'https://m.media-amazon.com/images/I/5117KZln40L._AC_SY200_.jpg'} image_Three={'https://m.media-amazon.com/images/I/71W1KvLH3sL._AC_SY200_.jpg'} image_Four={'https://m.media-amazon.com/images/I/810IK6kUwpS._AC_SY200_.jpg'} image_Five={'https://m.media-amazon.com/images/I/61+NXEMvbrL._AC_SY200_.jpg'} image_Six={'https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SY200_.jpg'} image_Seven={'https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SY200_.jpg'} image_Eight={'https://m.media-amazon.com/images/I/61Igbh+EpbL._AC_SY200_.jpg'}  />
            
            </div>

            <div className="home_row3">
                <ProductThree id={102} carousel_title={'Popular products in Apparel internationally'}   image_One={'https://m.media-amazon.com/images/I/51IqUgNF1eL._AC_SY200_.jpg'} image_Two={'https://m.media-amazon.com/images/I/61Z8sxt9i6L._AC_SY200_.jpg'} image_Three={'https://m.media-amazon.com/images/I/81-0zCXpGQL._AC_SY200_.jpg'} image_Four={'https://m.media-amazon.com/images/I/61gFXe3bkWL._AC_SY200_.jpg'} image_Five={'https://m.media-amazon.com/images/I/71q3EYZvF7L._AC_SY200_.jpg'} image_Six={'https://m.media-amazon.com/images/I/71YlGaAGo3L._AC_SY200_.jpg'} image_Seven={'https://m.media-amazon.com/images/I/51QU1abhg1L._AC_SY200_.jpg'} image_Eight={'https://m.media-amazon.com/images/I/61Igbh+EpbL._AC_SY200_.jpg'}  />
            
            </div>

            <div className="home_row4">

            <ProductTwo id={108} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg'} card_Title={'Kindle E readers'} card_Link={'Shop now'}/>

            <ProductFour id={101} carouse_Title={'Popular products in pc internationally'} image_One={'https://m.media-amazon.com/images/I/31HtN4Vtm+L._AC_SY195_.jpg'} image_Two={'https://m.media-amazon.com/images/I/41Yhy+L-06L._AC_SY195_.jpg'} image_Three={'https://m.media-amazon.com/images/I/41QJc2JwV8L._AC_SY195_.jpg'} image_Four={'https://m.media-amazon.com/images/I/71wrIZujPIL._AC_SY195_.jpg'} card_disc={'Early 2015 Apple MacBook Air with 1.6GHz Intel Core i5 (11.6 inch, 128…'} card_price={'$226.00'} />

            <ProductTwo id={109} image_One={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg'} card_Title={'New Arrivals in Toys'} card_Link={'Shop now'}/>

            <ProductFour id={102} carouse_Title={"Related to items you've viewed"} image_One={'https://m.media-amazon.com/images/I/51HtxA43IcL._AC_SY195_.jpg'} image_Two={'https://m.media-amazon.com/images/I/715YsLWPDXL._AC_SY195_.jpg'} image_Three={'https://m.media-amazon.com/images/I/91dtiigYjoL._AC_SY195_.jpg'} image_Four={'https://m.media-amazon.com/images/I/71XCkJNinWL._AC_SY195_.jpg'} card_disc={'Canon EOS Rebel T7 DSLR Camera and Lens Bundle'} card_price={'$589.00'}  />


            </div>

            
       
        </div>
        
    )
}

}


