import "./SideBar.css";
import logo from "../../assets/Tippit Logo.png";
import { FaHome, FaUser } from "react-icons/fa";

const SideBar = () => {
  return (
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
    </aside>
  );
};

export default SideBar;
