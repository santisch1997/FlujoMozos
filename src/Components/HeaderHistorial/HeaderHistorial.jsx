import "./HeaderHistorial.css"

const HeaderHistorial = () => {
  return (
    <div className="historial-header">
      <h2 className="historial-header-title">Propinas recientes</h2>
      <button className="historial-header-mostrar-todas">
        Mostrar todas
        {/* Icono de flecha */}
        <svg className="historial-header-arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default HeaderHistorial

