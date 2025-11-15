import React from "react";

const CardTurnos = ({paciente}) => {
  const { mascota, duenio, fecha, hora, sintomas } = paciente;
  return (
    <div>
      <article>
        <header>
          <h1> Mascota: {mascota} </h1>
          <h2>Dueño: {duenio}</h2>
        </header>
        <div>
            <form>
            <div className="mb-3 col-6">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            placeholder="dd/mm/yyy"
            id="fecha"
            value={fecha}
          />
        </div>
        <div className="mb-3 col-6" >
          <label className="form-label">Hora</label>
          <input
            type="time"
            className="form-control"
            placeholder="dd/mm/yyy"
            id="hora"
            value={hora}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sintomas</label>
          <input
            type="text"
            className="form-control"
            id="sintoma"
            placeholder="describir sintomas"
            value={sintomas}
          />
        </div>
        </form>
        </div>
      </article>
    </div>
  );
};

export default CardTurnos;
