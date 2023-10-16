import Item from "../Item.js/Item";

const ItemList = ({ productos }) => {
  return (
    <div
      className="productos"
      style={{
        width: "1320px",
        height: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: "40px",
        marginTop: "120px",
        position: "absolute",
      }}
    >
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
