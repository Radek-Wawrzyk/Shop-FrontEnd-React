import React from 'react';

import Logo from '../../assets/images/Logo.jpg';
import classes from './Logo.scss';

const logo = () => (
    <div className={classes.Logo}>
        <img src={Logo} alt="Logo" />
        <p>Designed by</p>
    </div>
);

export default logo;
