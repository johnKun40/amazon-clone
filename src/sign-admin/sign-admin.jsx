import React from 'react';
import './sign-admin.css';
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { auth } from "../firebase";
//import { useNavigate } from "react-router-dom";




class AdminSign extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
   }

   

   handleSubmit = async event => {
       event.preventDefault();
       const {email, password} = this.state

       


    if(this.state.email !== 'johnkun50@gamil.com' && this.state.password !== 'adebusola'){
            alert('Not an admin')
    }else{

           await auth.signInWithEmailAndPassword(email, password);
           this.setState({email: '', password: ''});
           //alert('Admin logged in');
           window.location.href = '/admin-entry';
          
      
       

    }
   }

   handleChange = event => {
       const {value, name} = event.target;
       this.setState({[name]: value})
   }

    render(){
        return(
            <div className="admin-sign">
                <div>
                <h3>Admin Account</h3>
                <span>SignIn with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type={'email'}  name='email' value={this.state.email} handleChange={this.handleChange} label="email" />
                    <FormInput type={'password'} name='password' value={this.state.password} handleChange={this.handleChange} label="password"/>
                    <div className="buttons">
                    <CustomButton type={'submit'}>Sign In</CustomButton>
                    </div>

                </form>
                </div>
                

            </div>
        )
    }
}

export default AdminSign;
