export default function Price({ oldPrice, newPrice }) {
  let oldStyle = {
    textDecorationLine: "line-through",
  };
  let newStyle = {
    fontWeight: "bold",
  };
  let priceTag = {
    backgroundColor: "yellow",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    height: "30px",
    textAlign: "center",
  };
  return (
    <div style={priceTag}>
      <span style={oldStyle}>{oldPrice}</span>
      &nbsp; &nbsp;
      <span style={newStyle}>{newPrice}</span>
    </div>
  );
}
