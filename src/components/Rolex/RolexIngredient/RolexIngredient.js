import React, { Component } from 'react';
import classes from './RolexIngredient.module.css';
import PropTypes from 'prop-types';

class RolexIngredient extends Component {

    render(){
        let ingredient = null;

        switch(this.props.type){
            case 'chappatti-bottom':
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case 'chappatti-top':
                    ingredient = (
                        <div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>
                        );
                    break;
            case 'onions':
                    ingredient = <div className={classes.Meat}></div>
                    break;
            case 'eggs':
                    ingredient = <div className={classes.Cheese}></div>
                    break;
            case 'pepper':
                    ingredient = <div className={classes.Salad}></div>
                    break;
            case 'tomatoes':
                    ingredient = <div className={classes.Bacon}></div>
                    break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
    
}

RolexIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default RolexIngredient;