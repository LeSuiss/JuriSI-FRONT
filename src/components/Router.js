import React from 'react';
import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homePage/HomePage'
import AdminHomePage from '../components/pages/admin/adminHomePage';

const Router = () => {
    return ( 
        <>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/admin" component={AdminHomePage}/>
            
        </Switch>
</>
    );
}
 
export default Router;
