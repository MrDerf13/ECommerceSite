import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { useState } from "react";
import ModalMenu from "../ModalMenu/ModalMenu";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    //Nav bar
    //     - Best sellers
    //     - Mens
    //     - Womens
    <>
      <img
        src="src/assets/menu.png"
        alt="menu"
        className={styles.navBarImg}
        onClick={() => {
          setIsMenu(!isMenu);
        }}
      />
      <ModalMenu state={isMenu} />
      <nav className={styles.navBar}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/best-sellers">Best Sellers</NavLink>
        <NavLink to="/mens">Mens</NavLink>
        <NavLink to="/womens">Womens</NavLink>
      </nav>
    </>
  );
};

export default Nav;
