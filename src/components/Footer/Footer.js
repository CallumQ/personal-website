
import React from 'react';
import {Icon} from 'semantic-ui-react';

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <a href="#"><Icon name='github'/></a>
            <a href="#"><Icon name='linkedin'/></a>
            <a href="#"><Icon name='medium'/></a>
        </div>
        <div className="footer-copyright">Copyright © Callum Quigley 2018</div>
    </footer>
);

export default Footer
