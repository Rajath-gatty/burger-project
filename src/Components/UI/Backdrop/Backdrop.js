import React from 'react';
import Classes from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={Classes.Backdrop} onClick={props.Clicked}></div> : null
)

export default backdrop;