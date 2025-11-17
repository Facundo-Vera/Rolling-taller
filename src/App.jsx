import FormApp from "./components/FormApp";
import GridTurnos from "./components/GridTurnos";
import { useEffect,useState } from "react";

import "./css/app.css";

const App = () => {
   const [turno, setTurno] = useState(null);

  //~falta un estado que guarde los turnos si no existe ninguno en el localStorage

  //

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("turno"))
    if (stored.length > 0 ) {
     setTurno(stored)
    }
  }, []);

  //~ limpiar inputs al guardar/cargar  un nuevo turno

  //^guarda turnos cada vez que cambien
  // useEffect(() => {
  //   localStorage.setItem("turno", JSON.stringify(turno));
  // }, [turno]); 

  const cargarTurno=(nuevoTurno)=>{setTurno([...turno, nuevoTurno])};
  return (
    <main>
      <h1 className="text-center m-5">Administrador pacientes de veterinaria</h1>
      <div className="contenedor">
        <div className="contenedor-2"></div>
        <h2>Llenar el formulario para crear una cita</h2>
        <FormApp cargarTurno={cargarTurno} />
      </div>
      <div>
        {
          turno  &&  <GridTurnos turno={turno} />
        }
        
      </div>
    </main>
  );
};

export default App;
