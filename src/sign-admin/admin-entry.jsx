import React from 'react';
import './sign-admin.css';
import { createAdminEntryData } from "../firebase";
import FormInput from '../form-input';
import CustomButton from '../custom-button';



class AdminEntry extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            productImage: '',
            productDetails: '',
            productPrize: '',
            productName: ''
        }
    }

    handleSubmit = async event => {

        

        event.preventDefault();
        const {productDetails, productImage, productName, productPrize} = this.state;

        
       

        //set data to database
        try {
            //const {products} = await auth.createAdminEntryData(productName, productDetails);
            const added =  createAdminEntryData({productImage, productName, productDetails, productPrize})

            //let set our state
            this.setState({
                productImage: '',
                productName: '',
                productDetails: '',
                productPrize: ''
            })
            if(added){
                alert('product added')
            }
        }catch (error){
            console.error(error);
        }
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]:value})
    }






    render() {
        const {productImage, productDetails, productPrize, productName} = this.state;
        return(
            <div className='admin-entry'>
                <h3>Add a product</h3>
                <span>Please fill all input fields to add a product</span>

                <form className='admin-entry-form' onSubmit={this.handleSubmit}>
                    <FormInput  type={'text'} value={productName} name="productName" label="Product Name" onChange={this.handleChange} required/>
                    <FormInput  type={'url'} value={productImage} name="productImage" label="Product Image(Url)" onChange={this.handleChange} required/>
                    <FormInput  type={'number'} value={productPrize} name="productPrize" label="Product Prize" onChange={this.handleChange} required/>
                    <FormInput  type={'text'} value={productDetails} name="productDetails" label="Product Details" onChange={this.handleChange} width='100' height='100' required/>

                    <div className="button">
                        <CustomButton type={'submit'}>Enter Product</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }

}


export default AdminEntry;

