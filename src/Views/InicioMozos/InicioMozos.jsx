import { useState } from "react";
import Header from "../../Components/Header/Header";
import Monto from "../../Components/Monto/Monto";
import Saldos from "../../Components/Saldos/Saldos";
import HeaderHistorial from "../../Components/HeaderHistorial/HeaderHistorial";
import CardsHistorial from "../../Components/CardsHistorial/CardsHistorial";
import Toggle from "../../Components/Toggle/Toggle";
import "./InicioMozos.css";

const InicioMozos = () => {
  const [activeTab, setActiveTab] = useState("Propinas");
  const [mostrarTodas, setMostrarTodas] = useState(false);

  const handleMostrarTodas = () => {
    setMostrarTodas(true);
  };

  const handleVolver = () => {
    setMostrarTodas(false);
  };

  return (
    <div className="vista-mozos">
      {!mostrarTodas && (
        <div className="vista-mozos-contenedor">
          <Header />
          <div className="vista-mozos-tabs-container">
            <Toggle option1="Propinas" option2="Reseñas" onChange={setActiveTab} />
          </div>
          {activeTab === "Propinas" ? <Monto /> : <Monto tipo="Reseñas" />}
          {activeTab === "Propinas" ? <Saldos /> : <Saldos tipo="Reseñas" />}
        </div>
      )}
      
      <HeaderHistorial 
        onMostrarTodas={handleMostrarTodas} 
        onVolver={handleVolver} 
        mostrarTodas={mostrarTodas} 
      />
      <CardsHistorial tipo={activeTab} mostrarTodas={mostrarTodas} />
    </div>
  );
};

export default InicioMozos;
