import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormularioGastos extends Component {
    
    nombreGastos = React.createRef();
    cantidadGastos = React.createRef();

    crearGastos = (e) => {
        e.preventDefault();
        const gasto = {
            nombre: this.nombreGastos.current.value,
            cantidad: this.cantidadGastos.current.value
        }

        this.props.agregarGastos(gasto);
        e.currentTarget.reset();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.crearGastos}>
                    <h2>Agrega tus gastos aqui</h2>
                    <div className="campo">
                        <label>Nombre Gasto</label>
                        <input ref={this.nombreGastos} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                    </div>

                    <div className="campo">
                        <label>Cantidad</label>
                        <input ref={this.cantidadGastos} className="u-full-width" type="text" placeholder="Ej. 300" />
                    </div>

                    <input className="button-primary u-full-width" type="submit" value="Agregar" />
                </form>
            </div>
        );
    }
}

FormularioGastos.propTypes = {
    agregarGastos: PropTypes.func.isRequired
}

export default FormularioGastos;