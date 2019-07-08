import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Onions', type: 'onions'},
    {label: 'Tomatoes', type: 'tomatoes'},
    {label: 'Pepper', type: 'pepper'},
    {label: 'Eggs', type: 'eggs'},
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        {controls.map( ctrl => <BuildControl key={ctrl.label} label={ctrl.label} 
            ingAdded={() => props.ingAdded(ctrl.type)}
            ingRemoved={() => props.ingRemoved(ctrl.type)}/>)}
    </div>
);

export default buildControls;