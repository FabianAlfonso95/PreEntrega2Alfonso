import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Contador">
      <div
        className="Controles"
        style={{ display: "flex", height: "25px", marginTop: "20px" }}
      >
        <button
          style={{ marginRight: "60px" }}
          className="Button"
          onClick={decrement}
        >
          -
        </button>
        <h4
          style={{ marginTop: "4px", marginRight: "55px" }}
          className="number"
        >
          {quantity}
        </h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          style={{ marginTop: "10px" }}
          className="Button"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
