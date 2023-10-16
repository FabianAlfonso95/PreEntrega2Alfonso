import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <article className="ArtContenedor">
      <img src={imagen} alt=""></img>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <footer className="FootLink">
        <Link to={`/item/${id}`} className="EnLink">
          Me Interesa!
        </Link>
      </footer>
    </article>
  );
};

export default Item;
