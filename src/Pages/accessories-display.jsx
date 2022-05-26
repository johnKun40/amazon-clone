import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import '../Components/Home/Home.style.css';
import './electronics-display.css'
import ProductTwo from "../Components/Products/Product-Second.component";


function AccessoriesDisplay() {


  const [results, setResults] = useState([])

     useEffect(() => {
            firestore.collection("products")
            .where("productType", "==", "Accessories")
            .limit(8)
            .get()
            .then((collections) =>{
            const auto = collections.docs.map((res) => res.data())
            setResults(auto)
           }); 
           
      }, [])



  return (
    <div>

<div className="display_title">
            <span><h1>Accessories</h1></span>
            <span><h4>Shop for bags, accessories and more</h4></span>

        </div>

      
        <div className="display_row">

            

                    {
                    results.length > 0 ? (
                    results.map((result) => 
                    <ProductTwo id={result.key} image_One={result.productImage} card_Title={result.productName} card_Link={'$'+result.productPrize}/>)
                    ) : (<h1>Loading from firebase</h1>)
                    
                    }
        
        </div>
      
    </div>
  );
}

export default AccessoriesDisplay;
