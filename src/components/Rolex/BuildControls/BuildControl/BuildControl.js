import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.ingRemoved} disabled={props.disabled}>LESS</button>
        <button className={classes.More} onClick={props.ingAdded}>MORE</button>
    </div>
)

export default buildControl;