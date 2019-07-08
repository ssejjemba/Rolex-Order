import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Rolex from '../../components/Rolex/Rolex';

class RolexBuilder extends Component{

    state = {
        ingredients: {
            onions: 2,
            tomatoes: 1,
            pepper: 1,
            cabbage: 1
        }
    }

    render(){
        const { ingredients } = this.state;
        return(
            <Aux>
                <Rolex ingredients={ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default RolexBuilder;