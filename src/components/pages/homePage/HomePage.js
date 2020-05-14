import React, { useContext,useEffect, useState, useReducer, useRef} from 'react';
import { UseConfig } from '../../ressources/useConfig';


const HomePage = () => {
    const test = useRef()
    const [config, dispatchConfig] = useContext(UseConfig).config
    const [state, setState] = useState("initialState")
  

    return(
        <div >
aaaaaaaaaa
            <pre>{JSON.stringify(config, undefined, 2)}</pre>
            AAAAAAAAAA
        </div>
    )
}
 
export default HomePage;

