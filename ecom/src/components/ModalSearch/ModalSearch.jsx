import styles from "./ModalSearch.module.scss";
import { useState, useEffect } from "react";
import { getProducts } from "../../../services/ecom";

const ModalSearch = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts("productData").then((res) =>
      setProductList(res).filter((p) => {
        p.name.includes();
      })
    );
  }, []);

  const classes = isSearchShown ? styles.search_show : styles.search;

  return (
    <>
      <input type="text" className={classes} onInput={"p"} />
      <img
        src="src/assets/search.png"
        alt="search"
        className={styles.searchImg}
        onClick={() => {
          setIsSearchShown(!isSearchShown);
        }}
      />
    </>
  );
};

export default ModalSearch;
