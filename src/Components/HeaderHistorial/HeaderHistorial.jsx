import { ChevronLeft, ChevronRight } from "lucide-react";
import "./HeaderHistorial.css";

const HeaderHistorial = ({ onMostrarTodas, onVolver, mostrarTodas }) => {
  return (
    <div className="historial-header">
      {mostrarTodas && (
        <button className="historial-header-back-button" onClick={onVolver}>
          <ChevronLeft size={24} />
        </button>
      )}
      <h2 className="historial-header-title">{mostrarTodas ? "Inicio" : "Propinas recientes"}</h2>
      {!mostrarTodas && (
        <button className="historial-header-mostrar-todas" onClick={onMostrarTodas}>
          Mostrar todas
          <ChevronRight className="historial-header-arrow-icon" size={20} />
        </button>
      )}
    </div>
  );
};

export default HeaderHistorial;
