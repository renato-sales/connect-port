import FotoPerfil from "../../assets/perfil1.png";
import styles from "./Perfil.module.scss";

function Perfil() {
  return (
    <section className={styles.containerPerfil}>
      <div className={styles.contentPerfil}>
        <img
          className={styles.imgPerfil}
          src={FotoPerfil}
          alt="Foto do Perfil"
        />
        <div className={styles.contentPerfilInfo}>
          <h2>Renato Sales</h2>
          <p className={styles.pInfo}>Graduado em Ciência da Computação</p>
          <p>
            Desenvolvedor Full Stack em formação, com foco em JavaScript, e
            formado em Ciência da Computação pela Universidade Católica de
            Pernambuco (UNICAP). Possui conhecimentos em desenvolvimento web,
            APIs REST, lógica de programação, git e metodologias ágeis.
            Profissional em transição de carreira, com perfil proativo,
            colaborativo, boa comunicação, trabalho em equipe e foco em
            aprendizado contínuo.
          </p>

          <div className={styles.contentInfo}>
            <ul className={styles.listaContentInfo}>
              <li>Olinda, PE</li>
              <li>renato_sales_@hotmail.com</li>
              <li>Graduado em Dezembro de 2024</li>
            </ul>
          </div>

          <div className={styles.contentInfo}>
            <ul className={styles.contentInfoEstilizacao}>
              <li>Front-end</li>
              <li>Back-end</li>
              <li>Full Stack</li>
              <li>Suporte TI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
