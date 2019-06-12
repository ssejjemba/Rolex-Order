import React from 'react';
import classes from './Rolex.module.css';
import RolexIngredient from './RolexIngredient/RolexIngredient';

const rolex = () => (
    <div className={classes.Rolex}>
        <RolexIngredient type="chappatti-top"/>
        <RolexIngredient type="onions"/>
        <RolexIngredient type="tomatoes"/>
        <RolexIngredient type="cabbage"/>
        <RolexIngredient type="chappatti-bottom"/>
    </div>
);

export default rolex;