import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    
    render() {
        const {nombre,cantidad} = this.props.gasto;
        return (
            <div>
                <li className="gastos">
                    <p>
                        {nombre}
                        <span className="gasto">$ {cantidad}</span>
                    </p>
                </li>
            </div>
        );
    }
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;