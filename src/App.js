import React, {Component, Fragment} from 'react';
import LoginForm from './Components/loginForm';
import {Route, Switch } from 'react-router-dom'; 

import RegisterForm from './Components/Register'
class App extends Component {
   render(){
     return(
       <Fragment>
         
             <Switch>
             
             <Route path="/" exact component={LoginForm}/>
             
             <Route path="/register" exact component = {RegisterForm}/>
             </Switch>
         
       </Fragment> 
     )
   }

}
export default App;
