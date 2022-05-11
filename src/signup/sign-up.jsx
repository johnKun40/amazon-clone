import React from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import './sign-up.css';
import { createUserProfileDocument } from "../firebase";
import { auth } from "../firebase";
//import { signInWithGoogle } from "../firebase";


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmpassword} = this.state;

        //check if password match
        if(password !== confirmpassword) {
            alert('Password does not match');
            return;
        }

        //set data to database
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            const signed = await createUserProfileDocument(user, {displayName})

            //let set our state
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            })
            if(signed){
                alert('Registration Successful. Login...')
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
        const {displayName, email, password, confirmpassword} = this.state;
        return (
            <div className="signup">
                <h3>Dont have an account</h3>
                <span>Sign Up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput type={'email'} name='email'  value={email} onChange={this.handleChange} label="Email" required/>

                    <FormInput type={'text'} name='text' onChange={this.handleChange} label="Display Name" required/>

                    <FormInput type={'password'}  name='password'  value={password} onChange={this.handleChange}label="Password" required/>

                    <FormInput type={'password'}  name='confirmpassword'  value={confirmpassword} onChange={this.handleChange}label="Confirm Password" required/>

                    <div className="button">
                        <CustomButton type={'submit'}>Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;

