import React from 'react';
import Classes from './Input.module.css'

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'): inputElement = <input
            className={Classes.InputElement}
            {...props.elementConfig}
            onChange={props.changed} />;
            break;

        case ('textarea'): inputElement = <textarea
            className={Classes.InputElement}
            {...props.elementConfig}
            onChange={props.changed} />;
            break;

        case ('select'): inputElement = <select
            className={Classes.Input}
            value={props.value}
            onChange={props.changed}>
            {props.elementConfig.options.map(option => {
                return <option key={option.value} >{option.displayValue}</option>
            })}
        </select>
            break;

        default: inputElement = <input
            className={Classes.InputElement}
            {...props.elementConfig}
            onChange={props.changed} />;
            break;
    }
    return (
        <div className={Classes.Input}>
            {/* <label className={Classes.Label}>{props.name}</label> */}
            {inputElement}
        </div>
    );
}

export default input;