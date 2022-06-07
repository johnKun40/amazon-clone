import React, { Component } from 'react';
import Header from './Components/Header/Header.component';
import Home from './Components/Home/Home.component';
import FooterComponent from './Components/Footer/Footer.component';
import {Routes, Route} from "react-router-dom";
import './App.css';
import SignPage from './Pages/sigin-in-and-sign-up-page';
import { auth, createUserProfileDocument } from './firebase';
import AdminSign from './sign-admin/sign-admin';
import DetailsPage from './Pages/details-page';
import AdminEntry from './sign-admin/admin-entry';
import ElectronicsDisplay from './Pages/electronics-display';
import AccessoriesDisplay from './Pages/accessories-display';
import ScrollToTop from './Components/scrollToTheTop';
import Cart from './Pages/cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





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
    
     userRef.onSnapshot(querySnapshot =>
    {
      this.setState({
        currentUser: {
          id:querySnapshot.id,
          ...querySnapshot.data()
        }
        
      })
      
      console.log(this.state)
    });
  
    
  }
  this.setState({currentUser: userAuth})
})





}
 
  render () {

    

    return (
      
      <div className='App'>
        <ToastContainer/>
        <Header currentUser = {this.state.currentUser}  />
        <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='sign-page' element={<SignPage />} />
          <Route exact path="/details-page/:id" element={  <DetailsPage /> } />
          <Route exact path="/cart-page" element={  <Cart /> } />
          <Route path='/admin-signin' element={<AdminSign />} />
          <Route path='/admin-entry' element={<AdminEntry />} />
          <Route path='/electronics' element={<ElectronicsDisplay />}/>
          <Route path='/accessories' element={<AccessoriesDisplay />}/>
        </Routes>
        </ScrollToTop>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
}


