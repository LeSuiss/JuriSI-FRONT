import React, {useContext } from 'react';
import { useContextConfig } from '../../masterConfig';
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'


const Header = (props) => {
    const [config, dispatchConfig] = useContext(useContextConfig).config

    return (

        <div style={{ border: `4px ${config.css.color} solid` }}>

            <Menu >
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/admin">admin</Link>
            </Menu>
        </div>



    );
}

export default Header;