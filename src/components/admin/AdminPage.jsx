// in src/App.js
import React, {useState, useEffect} from "react";
import { Admin, Resource} from 'react-admin';
import {Listing, Editing, Creating} from './adminTables/Methods'
import Axios from "axios";

const AdminPage = ({authProvider, dataProvider, history}) => {

    const [structure, setStructure] = useState({})

useEffect(() => Axios
                .get('http://localhost:3002/admin/getStructure')
                .then(res=>setStructure(res.data))
                .catch(console.log)
, [])

    return <Admin authProvider={authProvider} dataProvider={dataProvider} history = {history} >
            {Object.keys(structure).length>0 && 
                Object.entries(structure).map(([table,fields])=> 
                    <Resource 
                        name={table} 
                        list={Listing({table:table, fields:fields})} 
                        edit={Editing({table:table, fields:fields})} 
                        create={Creating({table:table, fields:fields})} /> )
            }
            </Admin>
    
}

export default AdminPage;
