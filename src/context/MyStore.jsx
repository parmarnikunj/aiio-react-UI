import { createContext, useState, useEffect } from "react";

//Shop creation
export const MyStoreContext = createContext("");

// Global Func in Shop
export function MyStoreContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [subCatagories, setSubCatagories] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [selectedSubCatagories, setSelectedSubCatagories] = useState({});
  const [selectedSubProducts, setSelectedSubProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchsubCatagories = async () => {
      try {
        const response = await fetch("./subcategories.json");
        const data = await response.json();
        setSubCatagories(data.subcategories);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchsubCatagories();
  }, []);

  useEffect(() => {
    const fetchsubProducts = async () => {
      try {
        const response = await fetch("./subproducts.json");
        const data = await response.json();
        setSubProducts(data.subproducts);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchsubProducts();
  }, []);

  const addSelectedProduct = (product) => {
    setSelectedProducts({
      ...selectedProducts,
      [product.productId]: {
        isSelected: selectedProducts[product.productId] ? !selectedProducts[product.productId].isSelected : true,
        product
  },
    });
    console.log("productDict : ")
    console.log(selectedProducts)
  };

  const addSubCategory = (subcategory) => {
    setSelectedSubCatagories({
      ...selectedSubCatagories,
      [subcategory.subCategoryId]: {
        isSelected: selectedSubCatagories[subcategory.subCategoryId] ? !selectedSubCatagories[subcategory.subCategoryId].isSelected : true,
        subcategory
  },
    });
    console.log("subcatagory Dict: ")
    console.log(selectedSubCatagories)
  };

  const addSubProduct = (subproduct) => {
    setSelectedSubProducts({
      ...selectedSubProducts,
      [subproduct.subProductId]: {
        isSelected: selectedSubProducts[subproduct.subProductId] ? !selectedSubProducts[subproduct.subProductId] : true,
        subproduct
      }
    });

    console.log("subProductDict:")
    console.log(selectedSubProducts)
  };
  const contextValue = {
    products,
    subCatagories,
    subProducts,
    addSelectedProduct,
    addSubCategory,
    addSubProduct,
    selectedProducts,
    selectedSubCatagories,
    selectedSubProducts,
  };

  return (
    <MyStoreContext.Provider value={contextValue}>
      {props.children}
    </MyStoreContext.Provider>
  );
}
