import React from 'react';
import PropTypes from 'prop-types';
import './Bandera.css';
import { render } from '@testing-library/react';

class Bandera extends React.Component{
  render(){
    return (<div className="Bandera">
    Bandera {this.props.pais}
    <p>{this.props.contador}</p>
    <button onClick={()=>{this.props.incrementar()}}>Incrementar Contador</button>
  </div>);
  }
} 


export default Bandera;
