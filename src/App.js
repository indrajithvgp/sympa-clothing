import './App.css';
import React, { Component} from 'react'
import HomePage from './pages/homepage.component.jsx'
import {Switch, Route, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {auth, createUserProfileDocument}  from './firebase/firebase.utils'
import {connect} from 'react-redux'

import setCurrentUser from './redux/user/user.actions'

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
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
        </Switch>     
      </div>
    );
  }
  
}
const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps =dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
