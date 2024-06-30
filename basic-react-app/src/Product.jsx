import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["2000", "40000", "25000", "4500"];
  let newPrice = ["34000", "56000", "25000", "6500"];
  let description = [
    "8000DPi",
    "intuitive surface",
    "designed for ipad pro",
    "wireless",
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <h6>{description[idx]}</h6>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
export default Product;
