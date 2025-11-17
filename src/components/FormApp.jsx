import { useEffect, useState } from "react";
import "../css/form.css";
import CardTurnos from "./CardTurnos";
import GridTurnos from "./GridTurnos"

const FormApp = ({cargarTurno}) => {
  const [inputMascota, setInputMascota] = useState("");
  const [inputDuenio, setInputDuenio] = useState("");
  const [inputFecha, setInputFecha] = useState("");
  const [inputHora, setInputHora] = useState("");
  const [inputSintomas, setInputSintomas] = useState("");

 

  const submit = (e) => {
    e.preventDefault();
    const nuevoTurno = {
      mascota: inputMascota,
      duenio: inputDuenio,
      fecha: inputFecha,
      hora: inputHora,
      sintomas: inputSintomas,
    };
       cargarTurno(nuevoTurno);
       limpiarFormulario();
  };

  const limpiarFormulario =()=>{
     setInputMascota("");
    setInputDuenio("");
    setInputFecha("");
    setInputHora("");
    setInputSintomas("");
  };
 

 

  return (
    <div>
      <div className="container formulario p-5">
        <form className="row" onSubmit={submit}>
          <div className="mb-3 col-12">
            <label className="form-label">Nombre de la mascota</label>
            <input
              type="text"
              className="form-control"
              required
              id="name"
              placeholder="nombre de mascota"
              aria-describedby="emailHelp"
              value={inputMascota}
              onChange={(e) => setInputMascota(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre del dueño</label>
            <input
              type="text"
              className="form-control"
              id="duenio"
              placeholder="nombre de dueño"
              value={inputDuenio}
              onChange={(e) => setInputDuenio(e.target.value)}
            />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Fecha</label>
            <input
              type="date"
          min={new Date().toISOString().slice(0, 10)}
              className="form-control"
              placeholder="dd/mm/yyy"
              id="fecha"
              value={inputFecha}
              onChange={(e) => setInputFecha(e.target.value)}
            />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Hora</label>
            <input
              type="time"
              className="form-control"
              placeholder="dd/mm/yyy"
              id="hora"
              value={inputHora}
              onChange={(e) => setInputHora(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Sintomas</label>
            <input
              type="text"
              className="form-control"
              id="sintoma"
              placeholder="describir sintomas"
              value={inputSintomas}
              onChange={(e) => setInputSintomas(e.target.value)}
            />
          </div>

          <button className="boton col-2">Agregar nueva cita</button>
        </form>
      </div>
    </div>
  );
};

export default FormApp;
