import { NavLink } from "react-router-dom";
import "./.././../styles/header.scss";
export default function Header() {
  return (
    <header>
      <img src="../src/assets/logo/logo-red.png"></img>
      <nav>
        <ul>
          <li className="accueil">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li className="aPropos">
            <NavLink
              to="/a-propos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
