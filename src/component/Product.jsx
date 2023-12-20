import { useContext } from "react";
import "../styles/products.css";
import { MyStoreContext } from "../context/MyStore";

const Product = ({ product }) => {
  const { addSelectedProduct } = useContext(MyStoreContext);
  return (
    <div className="product" key={product.productId}>
      <label htmlFor={product.productName}>{product.productName}</label>
      <input
        className="productInput"
        type="checkbox"
        id={product.productId}
        name={product.productName}
        onClick={() => {
          addSelectedProduct(product);
        }}
      />
    </div>
  );
};

export default Product;
