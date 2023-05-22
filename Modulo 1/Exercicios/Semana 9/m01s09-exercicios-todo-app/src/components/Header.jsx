/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const Header = () => 
  (
    <header className="header bg-body-secondary">
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul className="navbar-nav ">
          <li className="nav-item me-auto">
            <Link className="nav-link active" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quem-sou">Quem sou</Link>
          </li>
        </ul>
      </nav>
    </header>
  );


export default Header;
