import React from 'react';
import './sign-admin.css';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { firestore } from '../firebase';




const AdminEntry = () => {



    const productEntry = (event) => {
        event.preventDefault();

        const entryArray = [...event.target.elements];

        const formData = entryArray.reduce((accumulator, currentValue) => {
            if (currentValue.id) {
                accumulator[currentValue.id] = currentValue.value;

            }

            return accumulator;
        }, {});
        
        

        firestore.collection("products").add(formData).then(() => {
            window.location.reload();
          });
        
    }




        return(
            <div className='admin-entry'>
                <h3>Add a product</h3>
                <span>Please fill all input fields to add a product</span>

                <form className='admin-entry-form' id='admin-entry-form' onSubmit={productEntry}>
                    <FormInput  type={'text'} id='productName' name="productName" label="Product Name"  required/>
                    <FormInput  type={'url'} id='productImage'  name="productImage" label="Product Image(Url)"  required/>
                    <FormInput  type={'number'} id='productPrize'  name="productPrize" label="Product Prize" required/>
                    <FormInput  type={'text'} id='productDetails'  name="productDetails" label="Product Details"  width='100' height='100' required/>
                        <label className='label-type' for="type">Select type of product:</label>
                        <select className='product-type type-container' name='type' id='productType'>
                            <option  name='productType'>Accessories</option>
                            <option  name='productType'>Electronics</option>
                            <option  name='productType'>Book</option>
                            <option  name='productType'>Sport</option>
                        </select>
                    

                    <div className="button">
                        <CustomButton type={'submit'}>Enter Product</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    

}


export default AdminEntry;

