import React from "react";
import "../css/card.css"

const CardTurnos = ({paciente}) => {
  const { mascota, duenio, fecha, hora, sintomas } = paciente;
  return (
    <div>
      <article  className="tarjeta">
        <header className="head">
          <h1> Mascota: {mascota} </h1>
          <h2>Dueño: {duenio}</h2>
        </header>
        <div>
            <form>
            <div className="mb-3 col-6 d-flex align-items-center m-2" >
          <label className="form-label me-4 ">Fecha:</label>
          <input
            type="text"
            className="form-control "
            placeholder="dd/mm/yyy"
            id="fecha"
            value={fecha}
            readOnly
          />
        </div>
        <div className="mb-3 col-6  d-flex align-items-center m-2"  >
          <label className="form-label me-4 ">Hora:</label>
          <input
            type="text"
            className="form-control m-1"
            placeholder="dd/mm/yyy"
            id="hora"
            value={hora}
            readOnly
          />
        </div>
        <div className="mb-3  d-flex align-items-center m-2">
          <label className="form-label me-2">Sintomas:</label>
          <textarea name="" id="" value={sintomas} readOnly ></textarea>
        </div>
        </form>

        </div>
      </article>
    </div>
  );
};

export default CardTurnos;
