import React from 'react'
import Aux from '../../hoc/Auxilary';
import classes from './Layout.module.scss';

const layout = ( props ) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
