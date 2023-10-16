import { useEffect, useState } from "react";
import { getProductoById } from "../../Listados/productos";
import DetalleItem from "../DetalleItem/DetalleItem";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProductos] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductoById(itemId)
      .then((response) => {
        setProductos(response);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div>
      <DetalleItem {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
