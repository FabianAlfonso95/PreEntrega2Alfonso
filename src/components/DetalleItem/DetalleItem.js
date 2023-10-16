import ItemCount from "../ItemCount/ItemCount";
import "./DetalleItem.css";

const DetalleItem = ({ id, nombre, precio, imagen, descripcion }) => {
  return (
    <article className="ArtCont">
      <img src={imagen} alt=""></img>
      <h1>{nombre}</h1>
      <h2>${precio}</h2>
      <p>{descripcion}</p>
      <footer className="FooterItem">
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        ></ItemCount>
      </footer>
    </article>
  );
};

export default DetalleItem;
