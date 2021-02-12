import './App.css';
import React, { Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {auth, createUserProfileDocument}  from './firebase/firebase.utils'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import setCurrentUser from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'


import HomePage from './pages/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'


import Header from './components/header/header.component.jsx'



const HatsPage = (props)=>{
  console.log(props)
  return(
    <div><h1>Hola</h1></div>
  )  
}

class App extends Component{


  unSubscribeFromAuth = null
  componentDidMount() {

    const {setCurrentUser} = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot=>{
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
          })
        
      }else{
        setCurrentUser(userAuth)
      }
      
  })
    
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
          <Route path='/checkout' component={CheckoutPage}/>
        </Switch>     
      </div>
    );
  }
  
}
const mapStateToProps = (state)=>createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps =dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
