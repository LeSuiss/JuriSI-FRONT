// in src/App.js
import React, {useState, useContext, useEffect} from "react";
import { Admin, Resource, fetchUtils} from 'react-admin';
import authProvider from './Authprovider'
import {Listing, Editing, Creating} from './adminTables/Methods'
import simpleRestProvider from 'ra-data-simple-rest';
import Axios from "axios";

const AdminPage = () => {

    const [structure, setStructure] = useState({})

useEffect(() => {
    Axios
        .get('http://localhost:3002/admin/getStructure')
        .then(res=>setStructure(res.data))
        .catch(console.log)
}, [])

    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const token  = localStorage.getItem('jwt_token');
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };

    return <>
    
   { <Admin 
        authProvider={authProvider}
        dataProvider={simpleRestProvider(`http://localhost:3002/admin`, httpClient)} >
        
        { Object.keys(structure).length>0 && Object.entries(structure).map(([key,value])=> 
                <Resource 
                    name={key} 
                    list={Listing(value)} 
                    edit={Editing(value)} 
                    create={Creating(value)}/>
        ) }

    {/*         <Resource name="Contracts" list={ListGuesser} /> */}
            
    </Admin>}
    </>
}

export default AdminPage;
