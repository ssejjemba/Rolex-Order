import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.ingAdded}>MORE</button>
        <button className={classes.Less} onClick={props.ingRemoved}>LESS</button>
    </div>
)

export default buildControl;