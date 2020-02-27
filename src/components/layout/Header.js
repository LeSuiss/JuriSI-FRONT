import React, { useState, useContext} from 'react';
import NavBarComponent from './NavBarComponent'
import {Responsive, Container} from 'semantic-ui-react'
import { UseConfig } from '../ressources/useConfig';



const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {config, dispatchConfig} = useContext(UseConfig).config




    // (() => {
    //     const dropElement = document.getElementsByClassName('dropdown-item')
    //     for (let element of dropElement) {
    //         element.classList.add('hvr-shutter-out-vertical')
    //     };
    // })()


    return (
<>


<Container as={Responsive} style={{ margin: 220 }} minWidth="590" content="test"> 
      <NavBarComponent   />
        </Container>
  </>          
    );
}

export default Header;