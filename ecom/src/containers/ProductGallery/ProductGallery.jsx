import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../../services/ecom";
import { filterProducts } from "../../../services/arrFuncs";
import styles from "./ProductGallery.module.scss";

const ProductGallery = ({ pageName }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts("productData").then((res) => setProductList(res));
  }, []);

  return (
    <div className={styles.gallery}>
      {productList &&
        productList
          .filter((product) => filterProducts(pageName, product))
          .map((product) => <ProductCard obj={product} key={product.id} />)}
    </div>
  );
};

export default ProductGallery;
