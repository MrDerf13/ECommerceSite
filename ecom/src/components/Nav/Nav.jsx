import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { useState } from "react";
import ModalMenu from "../ModalMenu/ModalMenu";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);

  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : `${styles.link}`;
  };

  return (
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
        <NavLink to="/" className={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/best-sellers" className={linkStyles}>
          Best Sellers
        </NavLink>
        <NavLink to="/mens" className={linkStyles}>
          Mens
        </NavLink>
        <NavLink to="/womens" className={linkStyles}>
          Womens
        </NavLink>
        <NavLink to="/favourites" className={linkStyles}>
          Favourites
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
