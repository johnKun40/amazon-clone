import React from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import './sign-up.css';
//import { signInWithGoogle } from "../firebase";


class SignUp extends React.Component {

   constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            conpassword: ''
        }
   }

//    handleSubmit = event => {
//        event.preventDefault();
//        this.setState({name: '', email: '', password: '', conpassword: ''})
//    }

//    handleChange = event => {
//        const {value, nam} = event.target;
//        this.setState({[nam]: value})
//    }

    render(){
        return(
            <div className="signup">
                <h3>Create account</h3>
                <span>Sign Up with your email and password</span>
                <form>
                    <FormInput type={'text'}  name='name' label="Your Name" />
                    <FormInput type={'email'}   name='email' label="Email" />
                    <FormInput type={'password'}  name='password' placeholder='at least 6 characters'  label="Password"/>
                    <FormInput type={'password'}  name='conpassword' label="Confirm Password"/>
                    <div className="buttons">
                    <CustomButton type={'submit'}>Sign Up</CustomButton>
                    <CustomButton type={'submit'}>Sign Up With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;

