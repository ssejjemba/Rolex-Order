import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Rolex from '../../components/Rolex/Rolex';

class RolexBuilder extends Component{

    render(){
        return(
            <Aux>
                <Rolex />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default RolexBuilder;