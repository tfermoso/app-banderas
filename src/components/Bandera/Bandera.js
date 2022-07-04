import React from 'react';
import PropTypes from 'prop-types';
import './Bandera.css';
import { render } from '@testing-library/react';

class Bandera extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }

  }
  incrementar() {
    //console.log(this.props.padre)
    let contadorPadre = this.props.padre.state.contador;
    contadorPadre++;
    //this.props.padre.setState({ contador: contadorPadre });
    let conta = ++this.state.contador;
    this.setState({ contador: conta })
  }

  render() {
    //console.log("renderizando..");
    return (<div className="Bandera">
      <p className='nombre'>{this.props.pais.nombre}</p>
      <img src={this.props.pais.bandera}></img>
      <div className='contador contadorAPP'>
        <p>{this.props.contador}</p>
        <button onClick={() => { this.props.incrementar() }}>Incrementar Contador</button>
      </div>
      <div className='contador contadorBandera'>
        <p>{this.state.contador}</p>
        <button onClick={() => { this.incrementar() }}>Contador Bandera</button>
      </div>
    </div>);
  }
}


export default Bandera;
