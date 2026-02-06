import LogoInstagram from "../../assets/instagram.png";
import LogoLinkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import LogoWhatsapp from "../../assets/whatsapp.png";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.containerLogoFooter}>
        <img className={styles.imgFooter} src={Logo} alt="Imagem da Logo" />
        <h2>Connect</h2>
      </div>

      <p>
        © 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto
        destinado exclusivamente a fins educativos.
      </p>

      <div className={styles.logoRedesSociais}>
        <img src={LogoWhatsapp} alt="Logo Whatsapp" />
        <img src={LogoInstagram} alt="Logo Whatsapp" />
        <img src={LogoLinkedin} alt="Logo Whatsapp" />
      </div>
    </footer>
  );
}

export default Footer;
