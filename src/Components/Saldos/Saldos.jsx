import "./Saldos.css";

const Saldos = ({ tipo = "Propinas" }) => {
  return (
    <div className="saldos-container">
      {tipo === "Propinas" ? (
        <>
          <div className="saldos-row">
            <span className="saldos-label">Saldo transferido</span>
            <div className="saldos-amount">$ 34,233.50</div>
          </div>
          <div className="saldos-row">
            <span className="saldos-label">Saldo en efectivo</span>
            <div className="saldos-amount">$ 21,395.50</div>
          </div>
        </>
      ) : (
        <>
          <div className="saldos-row">
            <span className="saldos-label">Puesto propina general</span>
            <div className="saldos-amount">#3</div>
          </div>
          <div className="saldos-row">
            <span className="saldos-label">Puesto mejor propina</span>
            <div className="saldos-amount">#1</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Saldos;
