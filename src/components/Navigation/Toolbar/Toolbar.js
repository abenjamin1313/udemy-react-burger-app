import React from 'react'
import Logo from '../../../components/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.module.scss';

export default function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}
