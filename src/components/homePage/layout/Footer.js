import React from "react";
import { Link } from 'react-router-dom'

import { SocialMediaIconsReact } from 'social-media-icons-react';


const Footer = () => {


    return (
        <footer color="blue" className="font-small pt-4 mt-4">

aaaaaa
            <p />
            <SocialMediaIconsReact icon="twitter" url="https://google.com" />
            <SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle" />


            <div className="footer-copyright text-center py-3">
                {new Date().getFullYear()} Copyright:
          <Link className='ReturnPage' to="/">AIOLIV</Link>
            </div>
        </footer>
    );
}

export default Footer;