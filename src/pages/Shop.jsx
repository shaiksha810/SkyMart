import React, { useContext } from "react";
import { ProductStore } from "../contextApi/ProductContext";
import ProductCard from "../components/ProductCard";
import FilterProduct from "../components/FilterProduct";
import ShopFooter from "../components/ShopFooter";

const Shop = () => {
  const { productsData } = useContext(ProductStore);

  return (
    <div>
      <FilterProduct />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 items-start">
        {productsData.map((elem) => (
          <ProductCard key={elem.id} product={elem} />
        ))}

        <ShopFooter />
      </div>
    </div>
  );
};

export default Shop;
