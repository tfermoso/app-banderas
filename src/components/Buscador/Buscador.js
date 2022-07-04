import React from 'react';
import './Buscador.css';

class Buscador extends React.Component {

    render() {
        return (<div>
            <input className='buscador' onChange={
                (e) => {
                    this.props.filtrar(e.currentTarget.value, 12);

                }
            } placeholder='Filtrar'></input><label>{this.props.longitud}</label>
        </div>)
    }
}

export default Buscador;