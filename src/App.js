
import * as React from "react";
import { Provider } from 'react-redux';
import {Switch, Route} from "react-router-dom"


import Header from "./components/homePage/layout/Header"
import HomePage from "./components/homePage/index"

import { createHashHistory } from 'history';
import simpleRestProvider from 'ra-data-simple-rest';
import createAdminStore from './components/Store';
import AdminPage from "./components/admin/AdminPage"
import authProvider from "./components/admin/Authprovider"
import Store from "./components/Store";

const history = createHashHistory();
const App = (props) => {
    const dataProvider = simpleRestProvider(`http://localhost:3002/admin`, httpClient)
    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const token  = localStorage.getItem('jwt_token');
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };

return    <Provider store={createAdminStore({ authProvider, dataProvider, history, })} >
<pre> {JSON.stringify(history, undefined, 4)} </pre>
            <Switch>
                <Route exact path="/" component={HomePage} />
                    <AdminPage        
                            authProvider={authProvider}
                            dataProvider={dataProvider}
                            history={history}
                            title="My Admin"
                        />
                

                    
            </Switch>
           
    </Provider>
}
;

export default App;