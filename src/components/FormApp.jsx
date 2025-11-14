import "../css/form.css";

const FormApp = () => {
  return (
    <div className="container formulario p-5">
      <form className="row">
        <div className="mb-3 col-12">
          <label for="name" className="form-label">
            Nombre de la mascota
          </label>
          <input
            type="text"
            className="form-control"
            required
            id="name"
            placeholder="nombre de mascota"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="duenio" className="form-label">
            Nombre del dueño
          </label>
          <input
            type="text"
            className="form-control"
            id="duenio"
            placeholder="nombre de dueño"
          />
        </div>
        <div className="mb-3 col-6">
          <label for="fecha" className="form-label">
            Fecha
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="dd/mm/yyy"
            id="fecha"
          />
        </div>
        <div className="mb-3 col-6">
          <label for="hora" className="form-label">
            Hora
          </label>
          <input
            type="time"
            className="form-control"
            placeholder="dd/mm/yyy"
            id="hora"
          />
        </div>
        <div className="mb-3">
          <label for="sintoma" className="form-label">
            Sintomas
          </label>
          <input
            type="text"
            className="form-control"
            id="sintoma"
            placeholder="describir sintomas"
          />
        </div>

        <button type="submit" className="btn btn-primary col-2">
          Agregar nueva cita
        </button>
      </form>
    </div>
  );
};

export default FormApp;
