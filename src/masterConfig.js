import React from 'react';
import {createContext, useReducer} from 'react';
import cssVariables from './scss/abstracts/_variables.scss'

//setting up sites global variables

export const useContextConfig = createContext(null);



export const ContextComponent = (props) => {

 
    const [config, dispatchConfig] = useReducer(reducer, {
        dbURL: 'http://localhost:3002',
        debug: true,
        css: cssVariables
    })
    
    
    function reducer (config, action) {
        //change your state "config" based on the "action" relied to whatever element (button, input) is to  be triggered 
       
        

        config.css.color = "green"
        action.config ? config = {...config, ...action.config}:''
        
        return {...config}
    }
    
    return (
       <useContextConfig.Provider value={{
                            config: [config, dispatchConfig]
                            //,AnotherOne : "whatever you think is suitable" 
        }} >
            {config.debug &&   <div 
            style={{
                position:"absolute", 
                top:"50px", 
                right:"10px", 
                zIndex:"400", 
                backgroundColor:"lightgrey", 
                padding: " 20px"}}>
                    <button 
                        onClick={()=>dispatchConfig({ config : {debug: false}, fdqsfd: "fff"})}
                        style={{textAlign:"center", padding: "10px"}}>
                        <h2 >config</h2>
                    </button>
                    <pre>
                        {JSON.stringify(config, undefined, 4)}
                    </pre>
                    </div>
                    }

            {props.children}
        </useContextConfig.Provider> 
    );
}
 




