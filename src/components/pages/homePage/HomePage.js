import React, { useContext,useEffect, useState, useReducer} from 'react';
import { UseConfig } from '../../ressources/useConfig';


const HomePage = () => {
    const {config, dispatchConfig} = useContext(UseConfig).config
    const [state, setState] = useState("initialState")
  
    // console.log(config)
    return (   
        <>
      
            HomePage
        </> );
}
 
export default HomePage;

