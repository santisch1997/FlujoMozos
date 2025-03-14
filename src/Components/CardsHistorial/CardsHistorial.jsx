import "./CardsHistorial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardsHistorial = ({ tipo = "Propinas", mostrarTodas }) => {
  // Datos de ejemplo para propinas y reseñas
  const propinas = Array(20).fill({
    fecha: "8 de Agosto",
    hora: "6:54 pm",
    monto: "+ 7550",
  });

  const reseñas = Array(20).fill({
    fecha: "8 de Agosto",
    hora: "6:54 pm",
    promedio: (Math.random() * (5 - 3) + 3).toFixed(1), // Genera promedios entre 3.0 y 5.0
  });

  const datos = tipo === "Propinas" ? propinas : reseñas;
  const datosMostrados = mostrarTodas ? datos : datos.slice(0, 5); // Mostrar solo 5 si no se presionó "Mostrar Todas"

  return (
    <div className="cards-historial-container">
      {datosMostrados.map((item, index) => (
        <div key={index} className="cards-historial-card">
          <div className="cards-historial-info">
            <h3 className="cards-historial-fecha">{item.fecha}</h3>
            <p className="cards-historial-hora">{item.hora}</p>
          </div>
          <div className={`cards-historial-monto ${tipo === "Reseñas" ? "reseña" : ""}`}>
            {tipo === "Propinas" ? (
              item.monto
            ) : (
              <>
                {item.promedio}{" "}
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "20px", color: "#FFBD00" }} />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsHistorial;
