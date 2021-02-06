
import React, { createContext, useState, useRef,useEffect, useContext, useReducer } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import AdminPage from './components/pages/admin/AdminPage'

export const dataContext = createContext(null)

const App = ()=>{

    const [state, dispatch] = useReducer(reducer, {} )
    
    function reducer (state, action){
      
        return !!action.payload ? {...state, ...action.payload}:{...state}
    }
    
    return <dataContext.Provider value={[state, dispatch]}>
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin" component={AdminPage} />
               

                
            </Switch>
        </dataContext.Provider>
    
}

export default App;


