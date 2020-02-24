import React from 'react'
import classes from './NavItem.module.scss';

export default function NavItem(props) {
    return (
        <li className={classes.NavItem}>
            <a 
                href={props.link}
                className={props.active ? classes.active : null}
                >{props.children}</a>
        </li>
    )
}
