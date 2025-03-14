import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./Monto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Monto = ({ tipo }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div className="propina-total">
      <h2 className="propina-total-label">
        {tipo === "Reseñas" ? "Promedio de reseñas" : "Total de tus propinas"}
      </h2>
      <div className="propina-total-amount-container">
        {tipo === "Reseñas" ? (
          <>
            <h1 className="propina-total-amount">3.75</h1>
            <FontAwesomeIcon icon={faStar} className="propina-total-star" style={{ fontSize: "30px", color: "#FFBD00", verticalAlign: "middle" }} />
          </>
        ) : (
          <>
            <h1 className={`propina-total-amount ${isBlurred ? "blur" : ""}`}>
              $ 55,625.00
            </h1>
            <button className="eye-button" onClick={toggleBlur}>
              {isBlurred ? <EyeOff className="propina-total-eye-icon" size={24} /> : <Eye className="propina-total-eye-icon" size={24} />}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Monto;
