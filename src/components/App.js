import React, { Component } from 'react';
import Header from './Header';
import FormularioGastos from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from '../helper';
import ControlPresupuesto from './ControlPresupuesto';
import '../css/App.css';

class App extends Component {

  state = {
    presupuesto:'',
    restante:'',
    gastos:{}  
  }

  //Este es como un documentReady, podemos hacer consultas a API
  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es el Presupuesto?');
    let resultado = validarPresupuesto(presupuesto);

    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      });
    } else {
      this.obtenerPresupuesto();
    }
  }

  agregarGastos = (gasto) => {
    //Tomar una copia del state actual con los ...
    const gastos = { ...this.state.gastos };

    
    this.restarPresupuesto(gasto.cantidad);

    //Agregar gastos al objeto state
    gastos[`gasto${Date.now()}`] = gasto;

    this.setState({gastos:gastos});
  }

  //Restar del presupuesto cuando se ponga una cantidad
  restarPresupuesto = (cantidad) => {
    let restar = Number(cantidad);
    
    //Tomar una copia del state actual
    let restante = Number(this.state.restante);
    
    //lo restamos
    restante -= restar;

    restante = String(restante);

    //agregamos el nuevo state
    this.setState({restante:restante});
  }

  
  render() {
    return (
      <div className="App container">
        <Header titulo="Gastos Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGastos agregarGastos={this.agregarGastos} />
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
              <ControlPresupuesto presupuesto={this.state.presupuesto} restante={this.state.restante} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
