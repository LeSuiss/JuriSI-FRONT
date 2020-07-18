import React, { useContext,useEffect, useState, useReducer, useRef} from 'react';
import { useContextConfig } from '../../../masterConfig';
import Test from './Test'

const HomePage = () => {
    const [config, dispatchConfig] = useContext(useContextConfig).config
    const Reference = useRef()
    
    useEffect(() => {
    
}, [Reference])

    return(
        <div >
aaaaaaaaaa
            <pre ref={Reference}>{JSON.stringify(config, undefined, 2)}</pre>
            AAAAAAAAAA
            {console.log(Reference)}
            <button onClick={()=>console.log(Reference)}>fds</button>
            <Test Reference={Reference}/>
        </div>
    )
}
 
export default HomePage;

