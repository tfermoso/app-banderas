import React from 'react';
import './App.css';
import youtube from './apis/youtube';
import Bandera from './components/Bandera/Bandera';
import Buscador from './components/Buscador/Buscador';

function saludar() {
  console.log("Saludando desde función")
}
function filtrar() {
  let datos = document.getElementById("txtSearch").value;
  console.log(datos);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      nombre: 'Inicio',
      paises: [],
      paisesFiltrados: []

    }
    this.funcionAnonima = (a, b) => {
      this.filtrar(a);
      console.log(b);
    }

  }

  handleClick() {
    let conta = this.state.contador;
    conta++;
    this.setState({ contador: conta })
  }
  prueba(a, b) {
    this.filtrar(a);
    console.log(b)
  }
  componentDidMount() {
    let that = this;
    fetch('https://restcountries.com/v3.1/all')
      .then(function (response) {
        return response.json();
      })
      .then(function (datos) {
        let datosPaises = datos.map((valor, indice) => {
          return {
            nombre: valor.name.common,
            bandera: valor.flags.png
          }
        });
        that.setState({ paises: datosPaises, paisesFiltrados: datosPaises })
      });
  }
  filtrar(e) {
    let paises = this.state.paises;
    let paisesFiltrados = paises.filter((pais) => {
      if (pais.nombre.toLowerCase().indexOf(e.toLowerCase()) >= 0) {
        return pais;
      }
    });
    this.setState({ paisesFiltrados: paisesFiltrados })
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })
    console.log(response.data.items)
    /*
    this.setState({
        videos: response.data.items
    })
    */
};
handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}
  render() {
    //console.log("pintando app"+ this.state.paises.length);
    let paises = this.state.paisesFiltrados;
    let banderas = paises.map((p, i) => {
      return (<Bandera pais={p} key={i} padre={this} incrementar={() => { this.handleClick() }} contador={this.state.contador} />);
    })
    let numeroPaises = this.state.paisesFiltrados.length;
    return (
      <div className="App">
        <header className="App-header">
          {/* <input id="txtSearch" className='buscador' onChange={(e)=>{this.filtrar(e.currentTarget.value)}} placeholder='Filtrar paises'></input>*/}
          <Buscador filtrar={
            (a, b) => {
              this.filtrar(a);
              console.log(b);
            }

          } longitud={numeroPaises} />
          <input onChange={(e)=>{this.handleSubmit(e.currentTarget.value)}}></input>
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
