// in src/App.js
import React, {useState, useContext, useEffect} from "react";
import { Admin, Resource, fetchUtils} from 'react-admin';
import authProvider from './Authprovider'
import {Listing, Editing, Creating} from './adminTables/Methods'
import simpleRestProvider from 'ra-data-simple-rest';
import Axios from "axios";

const AdminPage = (props) => {

    const [structure, setStructure] = useState({})

useEffect(() => {
    Axios
        .get('http://localhost:3002/admin/getStructure')
        .then(res=>setStructure(res.data))
        .catch(console.log)
}, [])

    return <Admin 
            authProvider={props.authProvider}
            dataProvider={props.dataProvider} 
            history = {props.history}
        >
        { Object.keys(structure).length>0 && 
        Object.entries(structure)
            .map(([key,value])=> 
                <Resource 
                    name={key} 
                    list={Listing({table:key, fields:value})} 
                    edit={Editing({table:key, fields:value})} 
                    create={Creating({table:key, fields:value})}/>
            ) 
        }
    </Admin>
    
}

export default AdminPage;
