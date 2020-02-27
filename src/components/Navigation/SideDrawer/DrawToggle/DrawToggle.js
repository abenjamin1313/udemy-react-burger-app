import React from 'react'
import classes from './DrawToggle.module.scss';

const DrawToggle = (props) => (
    <div className={classes.DrawToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawToggle;
