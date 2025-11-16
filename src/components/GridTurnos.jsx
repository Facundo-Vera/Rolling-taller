import CardTurnos from "./CardTurnos";
import "../css/grid.css";

const GridTurnos = ({ turno}) => {
  return (
    <div className="listado-turnos gap-5">
      {turno.map((paciente,index) => (
        <CardTurnos paciente={paciente}  key={index}/>
      ))}
    </div>
  );
};

export default GridTurnos;
