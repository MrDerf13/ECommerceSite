import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import {
  getProductById,
  addToCart,
  updateFavouriteProduct,
} from "../../../services/ecom";

import styles from "./ProductPage.module.scss";
import { RefreshContext } from "../../context/RefreshContextProvider";

const ProductPage = () => {
  const { id } = useParams();
  const formRef = useRef(null);

  const [product, setProduct] = useState(null);
  const { refresh, setRefresh } = useContext(RefreshContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const dataForBackEnd = Object.fromEntries(formData);
    console.log(dataForBackEnd);
    addToCart(product, dataForBackEnd.size, dataForBackEnd.qty);
  };

  useEffect(() => {
    getProductById(id, "productData").then((res) => {
      setProduct(res);
    });
  }, [id, refresh]);

  const handleFavourite = (e) => {
    updateFavouriteProduct(id).then((res) => setRefresh(!refresh));
  };

  return (
    <main className={styles.wholePage}>
      {product && (
        <>
          <div className={styles.halfPage}>
            <h1>{product.name}</h1>
            <button onClick={handleFavourite}>
              {product.favourited ? (
                <span>Remove From Favourites</span>
              ) : (
                <span>Add To Favourites</span>
              )}
            </button>
            <img src={product.image} alt={product.name} />
          </div>

          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className={styles.formHalf}
          >
            <p>${product.price} per unit</p>
            <select id="size" name="size">
              <option value="l">Large</option>
              <option value="m">Medium</option>
              <option value="s">Small</option>
            </select>
            <input type="number" id="qty" name="qty" />
            {/* Disable button if product is already in cart */}
            <button type="submit">Add to cart</button>
          </form>
        </>
      )}
    </main>
  );
};

export default ProductPage;
