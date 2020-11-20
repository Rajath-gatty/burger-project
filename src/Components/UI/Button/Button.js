import React from 'react';
import Classes from './Button.module.css';

const button = (props) => {
    return (
        <button className={[Classes.Button, Classes[props.btnType]].join(' ')}
            onClick={props.Clicked}>
            {props.children}
        </button>
    );
}

export default button;