import React from 'react'
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.scss';

export default function NavItems() {
    return (
        <ul className={classes.NavItems}>
            <NavItem link="/" active>Burger Builder</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>
    )
}
