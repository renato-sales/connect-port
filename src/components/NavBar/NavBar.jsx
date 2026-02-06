import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Acoes from "../AcoesDaConnect/AcoesDaConnect";
import Inicio from "../Inicio/Inicio";
import Perfil from "../Perfil/Perfil";
import QuemSomos from "../QuemSomos/QuemSomos";

import Logo from "../../assets/logo.png";
import FotoDoPerfil from "../../assets/perfil1.png";

import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <BrowserRouter>
      <nav className={styles.navBar}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/"> Início </Link>
          </li>
          <li>
            <Link to="/acoes"> Ações da Connect</Link>
          </li>
          <li>
            <Link to="/quemSomos"> Quem Somos </Link>
          </li>
        </ul>

        <Link to="/perfil">
          <img
            className={styles.imgPerfil}
            src={FotoDoPerfil}
            alt="Foto do perfil"
          />
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
