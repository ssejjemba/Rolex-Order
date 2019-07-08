import React from 'react';
import classes from './Rolex.module.css';
import RolexIngredient from './RolexIngredient/RolexIngredient';

const rolex = (props) => {

    let transformedIng = Object.keys(props.ingredients)
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <RolexIngredient key={igKey + i} type={igKey}/>
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        },[]);

    if(transformedIng.length === 0){
        transformedIng = <p>Please start adding ingredients!!</p>
    }

    return(
        <div className={classes.Rolex}>
            <RolexIngredient type="chappatti-top"/>
            {transformedIng}
            <RolexIngredient type="chappatti-bottom"/>
        </div>
    )
    
}

export default rolex;