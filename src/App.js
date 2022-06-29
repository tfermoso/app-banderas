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
      paises:[]

    }

  }

  handleClick(){
    let conta=this.state.contador;
    conta++;
    this.setState({contador:conta})
  }
  componentDidMount(){
    let that=this;
    fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json();
      })
      .then(function(datos){
        let datosPaises=datos.map((valor,indice)=>{
          return {
            nombre:valor.name.common,
            bandera:valor.flags.png
          }  
        });
        that.setState({paises: datosPaises})
      });
  }
  render() {
    console.log("pintando app"+ this.state.paises.length);
    let saludo="hola que tal";
    let paises=this.state.paises;
    let banderas=paises.map((p,i)=>{
      return (<Bandera pais={p} key={i} padre={this} incrementar={()=>{this.handleClick()}} contador={this.state.contador}/>);
    })
    return (
      <div className="App">
        <header className="App-header">
          <input className='buscador' placeholder='Filtrar pais'></input>
          <div className="banderas">{banderas}</div>
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
