
    import React, { useState } from 'react';
    import { Menu, Responsive, Dropdown, DropdownMenu, Button, Icon } from 'semantic-ui-react';
    
    function NavBarComponent(props) {
        const [activeItem, setActiveItem] = useState('Laptop Item')
        const [showModal, setShowModal] = useState(false)
    
    
        return (
            <div>
                <Menu pointing secondary>
                    <Responsive as={Menu.Item} minWidth={790}
                        name='Laptop Item'
                        active={activeItem === 'Laptop Item'}
                        onClick={() => setActiveItem('Test Item')}
                    />
                    <Button icon={{name:"bars", inverted:true, color:"green"}}></Button>
                    <Responsive as={Menu.Item} as={Icon} minWidth={790}
                        name='Laptop Item 2'
                        active={activeItem === 'Laptop Item 2'}
                        onClick={() => setActiveItem('Test Item 2')}
                    />
                    <Responsive as={Menu.Item} minWidth={790}
                        name='Laptop Item 3'
                        active={activeItem === 'Laptop Item 3'}
                        onClick={() => setActiveItem('Test Item 3')}
                    />
                    <Menu.Menu position = 'left'>
                        <Responsive as ={Menu.Item} minWidth={790}
                            name = "Sign Out"
                            onClick={() => setShowModal(true)}
                        />
                    </Menu.Menu>
                    <Responsive as ={Menu.Menu} maxWidth={789}  position='left'>
                        <Dropdown
                            item
                            icon ='bars'
                            >
                            <Dropdown.Menu>
                                <Dropdown.Item text='Mobile/Tablet Item 1'/>
                                <Dropdown.Item text='Mobile/Tablet Item 2'/>
                                <Dropdown.Item text='Mobile/Tablet Item 3'/>
                                <Dropdown.Item text='Sign Out'/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Responsive>
                </Menu>
            </div>)
}

export default NavBarComponent;

