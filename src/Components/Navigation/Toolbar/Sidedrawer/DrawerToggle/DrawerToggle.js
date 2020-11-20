import React from 'react';
import Classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={Classes.DrawerToggle} onClick={props.Clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;