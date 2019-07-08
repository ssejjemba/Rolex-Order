import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Rolex from '../../components/Rolex/Rolex';
import BuildControls from '../../components/Rolex/BuildControls/BuildControls';

class RolexBuilder extends Component{

    state = {
        ingredients: {
            onions: 0,
            tomatoes: 0,
            pepper: 0,
            eggs: 1
        },
        totalPrice: 1000
    }

    addIngredientHandler = type => {
        const ingRef = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = ingRef;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        
    }

    removeIngredientHandler = type => {
        const ingRef = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = ingRef;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        
    }

    render(){
        const { ingredients } = this.state;
        return(
            <Aux>
                <Rolex ingredients={ingredients}/>
                <BuildControls
                    ingAdded = {this.addIngredientHandler}
                    ingRemoved = {this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default RolexBuilder;

const INGREDIENT_PRICE = {
    onions: 100,
    tomatoes: 200,
    pepper: 100,
    eggs: 500
}