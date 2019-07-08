import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Onions', type: 'onions'},
    {label: 'Tomatoes', type: 'tomatoes'},
    {label: 'Pepper', type: 'pepper'},
    {label: 'Cabbage', type: 'cabbage'},
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        {controls.map( ctrl => <BuildControl key={ctrl.label} label={ctrl.label}/>)}
    </div>
);

export default buildControls;