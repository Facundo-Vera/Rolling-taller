const FormApp = () => {
  return (
    <div>
    <form>
      <div className="mb-3">
        <label for="name" className="form-label">
          Nombre de la mascota
        </label>
        <input
          type="text"
          className="form-control"
          required
          id="name"
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
        />
      </div>
      <div className="mb-3">
        <label for="fecha" className="form-label">
         Fecha
        </label>
        <input
          type="data"
          className="form-control"
          placeholder="dd/mm/yyy"
          id="fecha"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};

export default FormApp;
