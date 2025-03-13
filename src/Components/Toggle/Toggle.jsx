import React, { useState } from "react";
import "./Toggle.css";

const Toggle = ({ option1 = "Propinas", option2 = "Reseñas", onChange }) => {
  const [isSelected, setIsSelected] = useState(true);

  const handleToggle = () => {
    const newSelection = !isSelected;
    setIsSelected(newSelection);
    // Llamamos a la función onChange para notificar el cambio
    onChange(newSelection ? option1 : option2); // Pasa la opción seleccionada al padre
  };

  return (
    <div className="toggle" onClick={handleToggle}>
      <div className={`toggle-option ${isSelected ? "selected" : ""}`}>
        <span>{option1}</span>
      </div>
      <div className={`toggle-option ${!isSelected ? "selected" : ""}`}>
        <span>{option2}</span>
      </div>
    </div>
  );
};

export default Toggle;
