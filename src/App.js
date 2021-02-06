import './App.css';
import React, { Component} from 'react'
import HomePage from './pages/homepage.component.jsx'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {auth, createUserProfileDocument}  from './firebase/firebase.utils'

const HatsPage = (props)=>{
  console.log(props)
  return(
    <div><h1>Hola</h1></div>
  )  
}

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {currentUser:null}
  }
  unSubscribeFromAuth = null
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot=>{
            this.setState({currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
        
      }else{
        this.setState({currentUser:userAuth})
        console.log(this.state)
      }
      
  })
    
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>     
      </div>
    );
  }
  
}

export default App;
