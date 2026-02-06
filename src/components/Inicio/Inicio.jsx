import ImgInicial from "../../assets/img-tela-inicial.png";
import styles from "./Inicio.module.scss";

function Inicio() {
  return (
    <section className={styles.containerInicio}>
      <div className={styles.contentTelaInicial}>
        <h1> Projetos Sociais que transformam </h1>
        <div>
          <p>Conectamos sua empresa com projetos sociais impactantes.</p>
          <p>Juntos, criamos mudanças reais na comunidade.</p>
        </div>
      </div>

      <figure>
        <img
          className={styles.imgInicio}
          src={ImgInicial}
          alt="Imagem da tela inicial"
        />
      </figure>
    </section>
  );
}

export default Inicio;
