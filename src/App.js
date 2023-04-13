import Rey from './componente/Rey';
import './App.css';
import {useState} from 'react';

import rey1 from '../src/imagenes/rey1.jpg';
import rey2 from '../src/imagenes/rey2.jpg';
import rey3 from '../src/imagenes/rey3.jpg';
import rey4 from '../src/imagenes/rey4.jpg';


function App() {

  const [msj, setmsj]=useState("Por defecto")

  const prueba = (nombre) => {
    setmsj({nombre})
  }

  

  return (
    <div>
      <h1>{msj}</h1>
      <div className="plantilla">
        <Rey 
          nombre={"Paco"}
          vacas="4"
          img={rey1}
          funcion={prueba}
          
        />
        <Rey 
          nombre={"Paco"}
          vacas="6"
          img={rey2}
        />
        <Rey 
          nombre={"Paco"}
          vacas="3"
          img={rey3}
        />
        <Rey 
          nombre={"Paco"}
          vacas="10"
          img={rey4}
        />
      </div>
    </div>
  );
}

export default App;
