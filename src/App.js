
import * as React from "react";
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from "react-router-dom"
import { fetchUtils, Admin, Resource } from 'react-admin';


import Header from "./components/homePage/layout/Header"
import HomePage from "./components/homePage/index"
import Actionst from './components/homePage/Actionst'
import { createBrowserHistory } from 'history';
import simpleRestProvider from 'ra-data-simple-rest';
import createAdminStore from './Store';
import AdminPage from "./components/admin/AdminPage"
import authProvider from "./components/admin/Authprovider"

const history = createBrowserHistory();
const App = (props) => {
    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const token  = localStorage.getItem('jwt_token');
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };
    const dataProvider = simpleRestProvider(`http://localhost:3002/admin`, httpClient)
   
    const displayAdmin = ()=> <AdminPage        
    authProvider={authProvider}
    dataProvider={dataProvider}
    history={history}
    title="My Admin"
   
/>

return    <Provider store={createAdminStore({ authProvider, dataProvider, history, })} >
<pre> {JSON.stringify(history, undefined, 4)} </pre>
<BrowserRouter>
            <Switch>
              
                   
                <Route exact path="/" component={HomePage} />
                <Route exact path="/actionst" component={Actionst} />
                <Route exact path="/admin" component={displayAdmin} />
            
            </Switch>
</BrowserRouter>
           
           
    </Provider>
}
;

export default App;