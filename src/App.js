import React, { Component } from 'react';
import Header from './Components/Header/Header.component';
import Home from './Components/Home/Home.component';
import FooterComponent from './Components/Footer/Footer.component';
import {Routes, Route} from "react-router-dom";
import './App.css';
import SignPage from './Pages/sigin-in-and-sign-up-page';
import { auth, createUserProfileDocument } from './firebase';
import { onSnapshot } from "firebase/firestore";

export default class App extends Component {

    constructor(){
      super();
      this.state = {
          currentUser: null
    } 
  }

  componentDidMount(){
  //   auth.onAuthStateChanged(user => {
  //     this.setState({currentUser:user})
  //     console.log(user)
  //    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  //      createUserProfileDocument(user);
  //    })

  //    const userRef = createUserProfileDocument(snapShot => {
  //      console.log(snapShot.data());
  //    })
  // })

this.unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
  if(userAuth) {
    const userRef = createUserProfileDocument(userAuth)
    
    userRef.onSnapshot(snapShot => {
      this.setState({
        currentUser: {
          id:snapShot.id,
          ...snapShot.data()
        }
        
      })
      console.log(this.state)
    })
  }
  this.setState({currentUser: userAuth})
})
}
 
  render () {

    return (
      <div className='App'>
        <Header currentUser = {this.state.currentUser} />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='sign-page' element={<SignPage />} />
        </Routes>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
}


