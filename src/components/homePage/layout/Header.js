import React, {useContext } from 'react';
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'


const Header = (props) => {

    return (

        <div style={{ border: `4px blue solid` }}>

            <Menu >
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/admin">admin</Link>
            </Menu>
        </div>



    );
}

export default Header;