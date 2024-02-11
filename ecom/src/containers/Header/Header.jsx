import Nav from "../../components/Nav/Nav";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import ModalSearch from "../../components/ModalSearch/ModalSearch";

const Header = () => {
  return (
    <header className={styles.headerBar}>
      <Nav />
      {/* Search */}
      <span className={styles.title}>FRÉDÉRIQUÉ</span>
      <div className={styles.cartSearch}>
        <ModalSearch />
        <NavLink to="/cart">
          <img src="src/assets/cart.png" alt="cart" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
