import React, { useState, useContext} from 'react';
import MobileNavBar from './navbars/MobileNavbar'
import {Responsive, Container, Button, Icon, Menu} from 'semantic-ui-react'
import { UseConfig } from '../ressources/useConfig';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [config, dispatchConfig] = useContext(UseConfig).config



    // (() => {
    //     const dropElement = document.getElementsByClassName('dropdown-item')
    //     for (let element of dropElement) {
    //         element.classList.add('hvr-shutter-out-vertical')
    //     };
    // })()

    return (

<>
<Responsive pointing secondary minWidth={config.breakPoint}>
          <MobileNavBar   />
</Responsive>

<Responsive pointing secondary style={{border:"solid 1px red"}} maxWidth={config.breakPoint-1}>
          <Button
          as={Icon} bar>

          </Button>
          <MobileNavBar   />
</Responsive>
</>
);
}

export default Header;