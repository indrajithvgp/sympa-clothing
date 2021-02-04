import './App.css';
import HomePage from './pages/homepage.component.jsx'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

const HatsPage = (props)=>{
  console.log(props)
  return(
    <div><h1>Hola</h1></div>
  )  
}

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>     
    </div>
  );
}

export default App;
