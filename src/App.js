import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/contador';
import { useState } from 'react';



function App() {

  const [numeroClics, setNumeroClics] = useState(0);

  const gestionarClic = () => {
    setNumeroClics(numeroClics + 1);
  }

  const restarClic = () => {
    setNumeroClics(numeroClics - 1)
  }

  const reiniciarContador = () => {
    setNumeroClics(0);
  }

  return (
    <div className="App">
      <div className='contenedor-padre'>

        <Contador
          numeroClics={numeroClics} />

        <div className='contenedor-padre-botones'>

          <Boton
            texto='+ 1'
            siBoton={true}
            gestionarClic={gestionarClic} />

          <Boton
            texto='- 1'
            siBoton={true}
            gestionarClic={restarClic} />


          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            gestionarClic={reiniciarContador} />

        </div>



      </div>
    </div>
  );
}

export default App;
