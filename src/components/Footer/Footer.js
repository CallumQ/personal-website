import {Icon} from 'semantic-ui-react';
import React from 'react';
import "../Footer/Footer.css";

const Footer = () => (
    <footer className="footer">
        <a target="_blank" href="https://github.com/CallumQ"><Icon name='github'/></a>
        <a target="_blank" href="https://uk.linkedin.com/in/callum-q-563194136"><Icon name='linkedin'/></a>
        <a target="_blank" href="https://medium.com/@callumrussellquigley"><Icon name='medium'/></a>
    </footer>
);

export default Footer;
