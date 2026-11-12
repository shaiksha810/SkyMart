import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductStore = createContext();

export const ProductContext = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProductsData(response.data);
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Unable to load products. Please try again.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <ProductStore.Provider value={{ productsData, isLoading, error }}>
      {children}
    </ProductStore.Provider>
  );
};
