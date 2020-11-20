import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './Sidedrawer.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Auxiliary';

const sidedrawer = (props) => {
    let attachedClasses = [Classes.Sidedrawer, Classes.Close];
    if (props.open) {
        attachedClasses = [Classes.Sidedrawer, Classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} Clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={Classes.Logo}>
                    <Logo show={props.open} />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sidedrawer;