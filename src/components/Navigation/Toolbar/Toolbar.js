import React from 'react'
import Logo from '../../../components/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';
import classes from './Toolbar.module.scss';

export default function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <DrawToggle clicked={props.drawToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
    )
}
