import React from "react";
import FormInput from "./form-input";
import CustomButton from "./custom-button";
import './sign-up.css';

const SignUp = () => {
    return(
        <div className="signup">
            <h3>Dont have an account</h3>
            <span>Sign Up with your email and password</span>
            <form>
                <FormInput type={'email'}  name='email' label="email" />
                <FormInput type={'password'} name='password'  label="password"/>
                <div className="buttons">
                <CustomButton type={'submit'}>Sign Up</CustomButton>
                <CustomButton type={'submit'}>Sign Up With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignUp;

