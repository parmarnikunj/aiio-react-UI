import { useState, useContext } from "react";
import { SubProduct } from "./SubProductList";
import { MyStoreContext } from "../context/MyStore";
import "../styles/subcatagories.css";

export function SubCategories({ productId }) {
  const { subCatagories, selectedSubCatagories, addSubCategory } =
    useContext(MyStoreContext);
  const [searchQuery, setSearchQuery] = useState("");

  const subCatagoriesByProductId = subCatagories?.filter(
    (subCatagory) => subCatagory.productId === productId
  );

  const filteredsubCatagoryArray = subCatagoriesByProductId?.filter(
    (subCatagory) =>
      subCatagory.subCategoryName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  console.log(filteredsubCatagoryArray)

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="subCatagoryContainer">
      <div className="header">
        <h4>Select Subcategories </h4>
      </div>

      <div className="subCatagorySubContainer">
        <input
          className="searchQueryInput"
          placeholder="Search"
          type="text"
          onChange={(e) => handleSearchQuery(e)}
        />
        <div className="subCatagoryList">
          {filteredsubCatagoryArray?.map((subCatagory) => (
            <div className="subCatagory" key={subCatagory.subCategoryId}>
              <label>{subCatagory.subCategoryName}</label>
              <input
                className="subCatagoryInput"
                type="checkbox"
                id={subCatagory.productId}
                name={subCatagory.subCategoryName}
                onClick={() => addSubCategory(subCatagory)}
              />
              {selectedSubCatagories[subCatagory.subCategoryId] && (
                <SubProduct subCategoryId={subCatagory.subCategoryId} />
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="addCatagoryButton">+ ADD SUBCATEGORY</button>
    </div>
  );
}
