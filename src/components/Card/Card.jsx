import "./Card.module.scss";

function Card({ imagem, titulo, descricao, textoBotao }) {
  return (
    <article>
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button>{textoBotao}</button>
    </article>
  );
}

export default Card;
