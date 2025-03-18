import { useState } from "react";
import Header from "../../Components/Header/Header";
import Monto from "../../Components/Monto/Monto";
import Saldos from "../../Components/Saldos/Saldos";
import HeaderHistorial from "../../Components/HeaderHistorial/HeaderHistorial";
import CardsHistorial from "../../Components/CardsHistorial/CardsHistorial";
import Toggle from "../../Components/Toggle/Toggle";
import SideBar from "../../Components/SideBar/SideBar"; // Import Sidebar
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
    <div className="vista-mozos-wrapper">
      <SideBar /> {/* Sidebar solo visible en desktop */}
      <div className="vista-mozos">
      {!mostrarTodas && (
  <div className="vista-mozos-contenedor">
    <Header />
    <div className="vista-mozos-tabs-container">
      <Toggle option1="Propinas" option2="Reseñas" onChange={setActiveTab} />
    </div>

    {/* Nuevo contenedor para Monto y Saldos */}
    <div className="vista-mozos-monto-saldos">
      {activeTab === "Propinas" ? <Monto /> : <Monto tipo="Reseñas" />}
      {activeTab === "Propinas" ? <Saldos /> : <Saldos tipo="Reseñas" />}
    </div>

  </div>
)}

<div className="historial-desktop-wrapper">
    <HeaderHistorial
      onMostrarTodas={handleMostrarTodas}
      onVolver={handleVolver}
      mostrarTodas={mostrarTodas}
    />
    <CardsHistorial tipo={activeTab} mostrarTodas={mostrarTodas} />
  </div>
</div>
    </div>
  );
};

export default InicioMozos;
