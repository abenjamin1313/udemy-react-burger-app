import React from 'react'
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.scss';

export default function NavItems() {
    return (
        <ul className={classes.NavItems}>
            <NavItem link="/" exact>Burger Builder</NavItem>
            <NavItem link="/orders">Orders</NavItem>
        </ul>
    )
}
