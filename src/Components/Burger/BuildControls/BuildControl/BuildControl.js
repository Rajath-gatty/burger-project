import React from 'react';
import Classes from './BuildControl.module.css'

const buildcontrol = (props) => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button
                className={Classes.Less}
                disabled={props.disabled}
                onClick={props.remove}>Less</button>

            <button
                className={Classes.More}
                onClick={props.added}>More</button>
        </div>
    );
}

export default buildcontrol;