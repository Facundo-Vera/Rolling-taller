import FormApp from "./components/FormApp";
import "./css/app.css";

const App = () => {
  return (
    <div>
      <h1 className="text-center m-5">Administrador pacientes de veterinaria</h1>
      <div className="contenedor">
        <p>Llenar el formulario para crear una cita</p>
        <FormApp />
      </div>
    </div>
  );
};

export default App;
