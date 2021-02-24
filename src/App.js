import './App.css';
import React, { useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {auth, createUserProfileDocument}  from './firebase/firebase.utils'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {checkUserSession} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'


import HomePage from './pages/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component.jsx'

function App({checkUserSession, currentUser}) {

  useEffect(()=>{
    checkUserSession()
  },[checkUserSession]);

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' render={()=>currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
          <Route path='/checkout' component={CheckoutPage}/>
        </Switch>     
      </div>
    );
  
  
}
const mapStateToProps = (state)=>createStructuredSelector({
  currentUser:selectCurrentUser,
})

const mapDispatchToProps = (dispatch)=>({
  checkUserSession:()=>dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
