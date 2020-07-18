// in src/App.js
import React, {useState, useContext, useEffect} from "react";
import { Admin, Resource } from 'react-admin';
import { useContextConfig } from '../../../masterConfig';
import {ArticleList, ArticleEdit, ArticleCreate} from './adminTables/ArticleMethods'
import simpleRestProvider from 'ra-data-simple-rest';

const AdminHomePage = () => {

    const [config, dispatchConfig] = useContext(useContextConfig).config
    

    return(
    <>
   

    <Admin dataProvider={simpleRestProvider(`${config.dbURL}/admin`)} >
        <Resource 
            name="Articles" 
            list={ArticleList} 
            edit={ArticleEdit} 
            create={ArticleCreate}/>
{/*         <Resource name="Contracts" list={ListGuesser} /> */}
        
    </Admin>
</>
    )
}

export default AdminHomePage;
