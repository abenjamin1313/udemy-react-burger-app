import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
    <div>
        <img className={classes.Logo} alt="Burger Logo" src={burgerLogo} />
    </div>
);

export default logo;