// in src/App.js
import React, {useState, useContext, useEffect} from "react";
import { Admin, ListGuesser, Resource } from 'react-admin';
import { useContextConfig } from '../../../masterConfig';
import simpleRestProvider from 'ra-data-simple-rest';

const AdminHomePage = () => {

    const [config, dispatchConfig] = useContext(useContextConfig).config
    

    return(
    <>
   

    <Admin dataProvider={simpleRestProvider(`${config.dbURL}/admin`)} >
        <Resource name="Articles" list={ListGuesser} />
        <Resource name="Contracts" list={ListGuesser} />
    </Admin>
</>
    )
}

export default AdminHomePage;
