import React from 'react';
import {createContext, useReducer} from 'react';

//setting up sites global variables

export const UseConfig = createContext(null);



export const WebSiteConfig = (props) => {

    
    const [config, dispatchConfig] = useReducer(reducer, {
        debug: true,
        text: "value",
        value: 0,
        breakPoint: "768px"
    })
    
    function reducer (config, action) {
        //change your state "config" based on the "action" relied to whatever element (button, input) is to  be triggered 
       
        
        console.log(action["config"])
        console.log("test")
        
        return(
            action.config ?
            {...config, ...action.config}:
            {...config}
        )
    }
    
    return (
       <UseConfig.Provider value={{
                            config: {config, dispatchConfig},
                            test : "whatever you think is suitable" 
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
        </UseConfig.Provider> 
    );
}
 




