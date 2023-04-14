import CardRey from './components/cards/CardRey';
import './App.css';
import { useState } from 'react';
import reyes from './api/mockData';


function App() {

  
  const [msj, setmsj] = useState("Por defecto")

  const modificarMsj = () => {
    
  }

  return (
    <div>
      <h1>{msj}</h1>
      <div className="plantilla">
        {
          reyes.map(rey => {
            return (
              <CardRey
                key={rey.id}
                nombre={rey.name}
                vacas={rey.vacas}
                img={rey.img}
              />
            )
          })
        }
      
      </div>
    </div>
  );
}

export default App;
