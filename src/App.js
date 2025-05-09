import logo from './logo.svg';
import './App.css';
import Mensaje from './components/Mensaje';
import ContarCaracteres from './components/Mensaje8';
import MensajeProps from './components/MensajeProps';
import MensajeCondicional from './components/MesajeCondicional';
import MensajeTernario from './components/MensajeCondOperadorTernario';
import ListaEstudiantes from './components/ListaEstudiantes';
import ListaMedicos from './components/ListaMedicos';


function App() {


  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>s
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with GracoSoft
        </a>
      </header>*/}
      <Mensaje />  
      <MensajeProps nombre="Lino" edad={21}/>
      <MensajeCondicional mensajeuno="Debe tributar impuestos" mensajedos="Usted no debe tributar impuestos" edad={21} ingresos={1500} />
      <MensajeTernario nombre= "Lino" mensajeuno="Puede votar, hágalo por MCM" mensajedos="No puede votar, espere ser mayor de edad" edad={21} />
      <ContarCaracteres mensaje="Hola Mundo" />


       <h1>
        Lista de Estudiantes
      </h1>
      <ListaEstudiantes />
      <h1>
        Lista de Estudiantes de medicina
      </h1>
      <ListaMedicos/>
      



    </div>
    
  );
}

export default App;
