import React, { useState, useContext} from 'react';
import { useContextConfig } from '../../masterConfig';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [config, dispatchConfig] = useContext(useContextConfig).config



    





    
    return (

<div style={{border: `4px ${config.css.color} solid`}}>
fdsqfdqs
<pre>{JSON.stringify(config, undefined,2)}</pre>
</div>



);
}

export default Header;