import { Menu, Bell } from "lucide-react"
import "./Header.css"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      {/* Rectángulo solo para desktop */}
      <div className="header-greeting">Hola Santiago!</div>

      {/* Icono hamburguesa */}
      <Menu className="header-icon-hamb" size={32} />

      {/* Logo */}
      <img src={logo} alt="Logo" className="header-logo" />

      {/* Icono notificaciones */}
      <Bell className="header-icon" size={30} />
    </header>
  )
}

export default Header
