import "./SideBar.css";
import logo from "../../assets/Tippit Logo.png";
import { FaHome, FaUser } from "react-icons/fa";
import { X } from "lucide-react";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Tippit Logo" />
        </div>
        <div className="sidebar-label active">
          <FaHome className="sidebar-icon" />
          Inicio
        </div>
        <div className="sidebar-label">
          <FaUser className="sidebar-icon" />
          Ver Mi Perfil
        </div>
        {/* Solo en mobile mostramos la cruz */}
        <button className="close-btn" onClick={onClose}>
          <X size={26} />
        </button>
      </aside>
    </div>
  );
};

export default SideBar;
