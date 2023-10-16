const CartWidge = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src="/cart.svg" alt="" height="40x" width="50px" />
      </div>
      <p
        style={{
          position: "absolute",
          backgroundColor: "black",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "240px",
          top: "0",
        }}
      >
        3
      </p>
    </div>
  );
};

export default CartWidge;
