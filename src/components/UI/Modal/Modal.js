import React from 'react'
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

export default function Modal(props) {
    return (
        <>
            <Backdrop clicked={props.modalClosed} show={props.show} />
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                >
                {props.children}
            </div>
        </>
    )
}
