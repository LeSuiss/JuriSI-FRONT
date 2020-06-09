import React, {useContext} from 'react';
import './scss/App.scss';
import 'semantic-ui-css/semantic.min.css'

import Router from './components/Router'
import {ContextComponent} from './masterConfig'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
//import color from './scss/abstracts/_variables.scss'


function App() {


    return (
       <> 
        <div className="App" >
            <ContextComponent>
                
                <Header/>
                    <div id="mainContainer">
                        <Router/>
                    </div>
                <Footer/> 

            </ContextComponent>
        </div>
    
    </>)
}

export default App;