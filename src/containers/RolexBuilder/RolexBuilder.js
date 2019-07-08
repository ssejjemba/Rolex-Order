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
            eggs: 0
        },
        totalPrice: 1000,
        purchasable: false
    }

    updatePurchaseState = ingrediates => {
        const sum = Object.keys(ingrediates)
            .map(igKey => {
                return ingrediates[igKey]
            }).reduce((sum, el) => {
                return sum + el
            }, 0);

            this.setState({ purchasable: sum > 0})
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

        this.updatePurchaseState(updatedIngredients);
        
    }

    removeIngredientHandler = type => {
        const ingRef = this.state.ingredients[type] - 1;
        if(ingRef <= -1) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = ingRef;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);
        
    }

    render(){
        const { ingredients, totalPrice, purchasable } = this.state;
        const disabledInfo = {
            ...ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Rolex ingredients={ingredients}/>
                <BuildControls
                    ingAdded = {this.addIngredientHandler}
                    ingRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={totalPrice}
                    purchasable={purchasable}
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