import { useContext } from "react";
import "../styles/products.css";
import { MyStoreContext } from "../context/MyStore";

export function DoneModal({ handleCloseModal }) {
  const {
    selectedProducts,
    selectedSubCatagories,
    selectedSubProducts,
  } = useContext(MyStoreContext);

  // get array all keys
  // get the keys whose values are true
  // find product whose key same as productID
  // return productName
  // filter if null

  const productsToDisplay =
      Object.values(selectedProducts)
          .filter((product) => product.isSelected)
          .map((selectedProduct) => selectedProduct.product.productName)

  const subCategoriesToDisplay =
      Object.values(selectedSubCatagories)
          .filter((subCatagory) => subCatagory.isSelected)
          .map((ssc) => ssc.subcategory.subCategoryName )

  const subProductsToDisplay =
      Object.values(selectedSubProducts)
          .filter((subProduct) => subProduct.isSelected)
          .map((ssp) => ssp.subproduct.subProductName)

  return (
    <div className="doneModal">
      <h3>Products </h3>

      {selectedProducts &&
        productsToDisplay.map((productToDisplay) => `${productToDisplay}, `)}

      <h3>Sub Categories</h3>
      {selectedSubCatagories &&
        subCategoriesToDisplay.map((subCatagorie) => `${subCatagorie}, `)}
      <h3>Sub Products</h3>
      {selectedSubProducts &&
        subProductsToDisplay.map((subProduct) => `${subProduct}, `)}
      <button className="saveButton" onClick={() => handleCloseModal(false)}>
        Close
      </button>
    </div>
  );
}
