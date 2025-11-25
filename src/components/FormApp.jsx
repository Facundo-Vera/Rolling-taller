import {  useState } from "react";
import "../css/form.css";

const FormApp = ({ cargarTurno }) => {
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

  const limpiarFormulario = () => {
    setInputMascota("");
    setInputDuenio("");
    setInputFecha("");
    setInputHora("");
    setInputSintomas("");
  };

  return (
    <div>
      <div className="container-fluid formulario p-3 p-md-5">
        <form className="row g-3" onSubmit={submit}>
          <div className="mb-3  col-12">
            <label className="form-label ">Nombre de la mascota</label>
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
          <div className="mb-3 col-sm-12 col-lg-6 ">
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
          <div className="mb-3 col-sm-12 col-lg-6 mb-3">
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
            <textarea
              className="form-control"
              rows="4" 
              id="sintoma"
              placeholder="describir sintomas"
              value={inputSintomas}
              onChange={(e) => setInputSintomas(e.target.value)}
            ></textarea>
          </div>

          <button className="boton col-12 col-lg-4 mx-auto mt-3">Agregar nueva cita</button>
        </form>
      </div>
    </div>
  );
};

export default FormApp;
