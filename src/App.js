import './App.css';
import HomePage from './pages/homepage.component.jsx'
import {Switch, Route} from 'react-router-dom'

const HatsPage = (props)=>{
  console.log(props)
  return(
    <div><h1>Hola</h1></div>
  )  
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>     
    </div>
  );
}

export default App;
