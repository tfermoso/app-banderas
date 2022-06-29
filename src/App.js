import React from 'react';
import './App.css';
import Bandera from './components/Bandera/Bandera';

function saludar() {
  console.log("Saludando desde función")
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      contador:0,
      nombre:'Inicio',
      datos:[]
    }

  }

  handleClick(){
    let conta=this.state.contador;
    conta++;
    this.setState({contador:conta})
  }
  render() {
    let saludo="hola que tal";
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.props.saludar} >
           {saludo} 
          </p>
          <Bandera incrementar={()=>{this.handleClick()}} pais='España' contador={this.state.contador}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    
  }
}

export default App;
