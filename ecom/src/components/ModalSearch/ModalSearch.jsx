import styles from "./ModalSearch.module.scss";
import { useState } from "react";

const ModalSearch = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);

  const classes = isSearchShown ? styles.search_show : styles.search;

  return (
    <>
      <input type="text" className={classes} />
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
