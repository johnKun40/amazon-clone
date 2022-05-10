import React from 'react';
import SignUp from '../signup/sign-up';
import SignIn from '../signin/sign-in';
import './sigin-in-and-sign-up-page.css';


class SignPage extends React.Component{

  render(){
    return(
        <div className='sign-page'>
          <div>
            <SignUp />
          </div>
          <div>
            <SignIn />
          </div>
        </div>
    )
  }
}

export default SignPage;