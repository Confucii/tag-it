import "./styles/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <ul className="nav-list">
        <li className="nav-elem">
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-three)" : "#ffffff",
            })}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-elem">
          <NavLink
            className="link"
            to="/leaderboard"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-three)" : "#ffffff",
            })}
          >
            Leaderboard
          </NavLink>
        </li>
        <li className="nav-elem">
          <NavLink
            className="link"
            to="/info"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-three)" : "#ffffff",
            })}
          >
            Info
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
