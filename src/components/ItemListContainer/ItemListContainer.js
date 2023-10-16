// import "./styles.css";

import { useState, useEffect } from "react";
import { getProductos } from "../../Listados/productos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProductoByCategory } from "../../Listados/productos";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductoByCategory : getProductos;

    asyncFunc(categoryId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
