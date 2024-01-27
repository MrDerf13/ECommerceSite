import Nav from "../../components/Nav/Nav";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.headerBar}>
      <Nav />
      {/* Search */}
      <span>FRÉDÉRIQUÉ</span>
      <div className={styles.cartSearch}>
        <input type="text" className={styles.search} />
        <img
          src="src/assets/search.png"
          alt="search"
          className={styles.searchImg}
        />
        <NavLink to="/cart">
          <img src="src/assets/cart.png" alt="cart" />
        </NavLink>
      </div>
    </header>
  );
  // - Logo and Name
  //     - Menu
  //     - Search Bar
  //     - Log In
  //     - Cart Link
};

export default Header;
