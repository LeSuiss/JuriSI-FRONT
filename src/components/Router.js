import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage.js'
import AdminLogin from './login/AdminLogin'

const Router = () => {
    return ( 
            
        <Switch>
            <Route exact path="/" component={HomePage}/>

            
            {/* <Route exact path="/adminlogin" component={adminLogin} /> */}
            {/* {localStorage.getItem('userToken')? <Route exact path ="/backOffice" component={admin}/>:''} */}
        </Switch>
      
     );
}
 
export default Router;
