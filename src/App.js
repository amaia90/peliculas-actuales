import logo from './logo.svg';
import './App.css';
import { MisRutas } from './rutas/rutas';
import Carrusel from './componentes/Carrusel';
import Letras from './componentes/Letras';

function App() {
  return (
    <div>
      <header className="App-header">
        <Letras />
        

        <div className='carousel'><Carrusel /></div>

      </header>
       <MisRutas /> 
    </div>
    
  );
}

export default App;
