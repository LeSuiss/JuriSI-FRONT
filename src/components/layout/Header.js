import React, { useState, useContext} from 'react';
import NavBarComponent from './NavBarComponent'
import {Responsive, Container, Button, Icon, Menu} from 'semantic-ui-react'
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
<Menu pointing secondary as={Responsive} minWidth={config.breakPoint}>
          <NavBarComponent   />
</Menu>

<Menu pointing secondary as={Responsive} maxWidth={config.breakPoint-1}>
          <Button
          as={Icon} bar>

          </Button>
          <NavBarComponent   />
</Menu>
</>
);
}

export default Header;