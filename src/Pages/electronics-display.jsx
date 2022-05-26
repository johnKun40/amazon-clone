import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import '../Components/Home/Home.style.css';
import './electronics-display.css'
import ProductTwo from "../Components/Products/Product-Second.component";


const ElectronicsDisplay = () => {


    
    const [results, setResults] = useState([])

     useEffect(() => {
            firestore.collection("products")
            .where("productType", "==", "Electronics")
            .limit(12)
            .get()
            .then((collections) =>{
            const auto = collections.docs.map((res) => res.data())
            setResults(auto)
           }); 
           
      }, [])

      



  return (
    <div>

        <div className="display_title">
            <span><h1>Electronics</h1></span>
            <span><h4>Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</h4></span>

        </div>

      
        <div className="display_row">

            

                    {
                    results.length > 0 ? (
                    results.map((result) => 
                    <ProductTwo id={result.key} image_One={result.productImage} card_Title={result.productName} card_Link={'Shop now'}/>)
                    ) : (<h1>Loading from firebase</h1>)
                    
                    }
        
        </div>

    </div>
  );
}

export default ElectronicsDisplay;
