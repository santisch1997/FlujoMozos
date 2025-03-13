"use client"

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

  return (
    <div className="vista-mozos">
      {/* Contenedor con fondo oscuro y bordes redondeados */}
      <div className="vista-mozos-contenedor">
        <Header />

        {/* Tabs */}
        <div className="vista-mozos-tabs-container">
          <Toggle option1="Propinas" option2="Reseñas" onChange={setActiveTab} />
        </div>

        {/* Contenido dinámico según el toggle */}
        {activeTab === "Propinas" ? <Monto /> : <Monto tipo="Reseñas" />}
        {activeTab === "Propinas" ? <Saldos /> : <Saldos tipo="Reseñas" />}
      </div>

      {/* Secciones con fondo blanco */}
      <HeaderHistorial />
      <CardsHistorial tipo={activeTab} />
    </div>
  );
};

export default InicioMozos;