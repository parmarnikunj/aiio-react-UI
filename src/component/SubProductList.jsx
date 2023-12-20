import { useState, useContext } from "react";
import { MyStoreContext } from "../context/MyStore";
import "../styles/subproducts.css";

export function SubProduct({ subCategoryId }) {
  const { subProducts, addSubProduct } = useContext(MyStoreContext);
  const [searchQuery, setSearchQuery] = useState("");
  const subProductArray = subProducts?.filter(
    (subProduct) => subProduct.subCategoryId === subCategoryId
  );

  const filteredSubProductArray = subProductArray?.filter(
    (filteredSubProduct) =>
      filteredSubProduct.subProductName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="subProductContainer">
      <div className="header">
        <h4>Select Sub-Products </h4>
      </div>
      <div className="subProductSubContainer">
        <input
          type="text"
          className="searchQueryInput"
          placeholder="Search"
          onChange={(e) => handleSearchQuery(e)}
        />
        <div className="subProductList">
          {filteredSubProductArray?.map((subProduct) => (
            <div className="subProduct" key={subProduct.subProductId}>
              <label>{subProduct.subProductName}</label>
              <input
                className="subProductInput"
                type="checkbox"
                id={subProduct.subProductId}
                name={subProduct.subProductName}
                onChange={() => addSubProduct(subProduct)}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="addSubProductButton">+ ADD SUB-PRODUCT</button>
    </div>
  );
}
