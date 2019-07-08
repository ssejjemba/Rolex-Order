import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import NumberFormat from 'react-number-format';

const controls = [
    {label: 'Onions', type: 'onions'},
    {label: 'Tomatoes', type: 'tomatoes'},
    {label: 'Pepper', type: 'pepper'},
    {label: 'Eggs', type: 'eggs'},
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Total price: <strong><NumberFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'UGX '} suffix={'/='} /></strong></p>
        {controls.map( ctrl => <BuildControl key={ctrl.label} label={ctrl.label} 
            disabled={props.disabled[ctrl.type]}
            ingAdded={() => props.ingAdded(ctrl.type)}
            ingRemoved={() => props.ingRemoved(ctrl.type)}/>)}
        <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER</button>
    </div>
);

export default buildControls;