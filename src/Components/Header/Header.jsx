import { Menu, Bell } from "lucide-react"
import "./Header.css"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      {/* Icono de menú hamburguesa */}
      <Menu className="header-icon" size={32} />

      {/* Logo */}
      <img src={logo} alt="Logo" className="header-logo" />

      {/* Icono de campana de notificaciones */}
      <Bell className="header-icon" size={30} />
    </header>
  )
}

export default Header
