import { useState } from "react";
import ImgAulas from "../../assets/aulas.png";
import ImgConecta from "../../assets/conecta.png";
import ImgEsporte from "../../assets/esporte.png";
import ImgFamilia from "../../assets/familia.png";
import ImgFuturo from "../../assets/futuro.png";
import ImgMutirao from "../../assets/mutirao.png";
import Card from "../Card/Card";
import styles from "./AcoesDaConnect.module.scss";

function AcoesDaConnect() {
  const [cards, setCards] = useState([
    {
      imagem: ImgMutirao,
      titulo: "Mutirão de reciclagem",
      descricao:
        "Coletar materiais recicláveis e orientar sobre descarte consciente.",
      textoBotao: "Quero participar",
    },
    {
      imagem: ImgAulas,
      titulo: "Aulas de Tecnologia",
      descricao:
        "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
      textoBotao: "Quero participar",
    },
    {
      imagem: ImgEsporte,
      titulo: "Esporte e Inclusão",
      descricao:
        "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
      textoBotao: "Quero participar",
    },
    {
      imagem: ImgFamilia,
      titulo: "Instituto grande familia",
      descricao:
        "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
      textoBotao: "Quero Doar",
    },
    {
      imagem: ImgFuturo,
      titulo: "Projeto Futuro na Escola",
      descricao:
        "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
      textoBotao: "Quero Doar",
    },
    {
      imagem: ImgConecta,
      titulo: "Instituto Conecta Jovem",
      descricao:
        "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.",
      textoBotao: "Quero Doar",
    },
  ]);

  return (
    <section className={styles.containerAcoes}>
      <div className={styles.TituloParagrafo}>
        <h2>Ações da Connect</h2>
        <p>
          Junte-se a quem acredita na mudança. Apoie, participe e transforme
          vidas através de ações sociais que geram impacto real nas comunidades.
        </p>
      </div>

      <div className={styles.containerCards}>
        {cards.map((card, index) => (
          <Card
            key={index}
            imagem={card.imagem}
            titulo={card.titulo}
            descricao={card.descricao}
            textoBotao={card.textoBotao}
          />
        ))}
      </div>
    </section>
  );
}

export default AcoesDaConnect;
