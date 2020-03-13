import React, { useContext,useEffect, useState, useReducer, useRef} from 'react';
import { UseConfig } from '../../ressources/useConfig';
import Quill from 'quill/core';

import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow';

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';


Quill.register({
  'modules/toolbar': Toolbar,
  'themes/snow': Snow,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/header': Header
});




const HomePage = () => {
    const test = useRef()
    const {config, dispatchConfig} = useContext(UseConfig).config
    const [state, setState] = useState("initialState")
  

    var Quill1 = new Quill('#editor', {
        theme: 'snow',
         modules: {
            imageResize: {
              displaySize: true
            },
           toolbar: [
             [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
             ['bold', 'italic', 'underline', 'strike'],
             [{ 'color': [] }, { 'background': [] }], 
             [{ 'align': [] }],
             ['link', 'image'],
             
             ['clean']  
           ]
        }
    });

    Quill1.container = test

    console.log(Quill1.options.container)
    return (   
        <>
        <input id='editor' ref={test} style={{width:"500Px", border:"solid 1px red", height:"500Px"}}>
            
        </input>
      <img id='editor' ref={test}       style={{width:'100px', left:'100px'}} src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687" alt=''/>
            HomePage
        </> );
}
 
export default HomePage;

