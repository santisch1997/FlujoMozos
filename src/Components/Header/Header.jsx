import { Menu, Bell } from "lucide-react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";

// Hook para detectar si es mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile(); // detectamos si es mobile

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="header">
        {/* Rectángulo solo para desktop */}
        <div className="header-greeting">Hola Santiago!</div>

        {/* Icono hamburguesa solo en mobile */}
        {isMobile && (
          <Menu className="header-icon-hamb" size={32} onClick={handleSidebarToggle} />
        )}

        {/* Logo */}
        <img src={logo} alt="Logo" className="header-logo" />

        {/* Icono notificaciones */}
        <Bell className="header-icon" size={30} />
      </header>

      {/* Sidebar SOLO en mobile */}
      {isMobile && (
        <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}
    </>
  );
};

export default Header;
