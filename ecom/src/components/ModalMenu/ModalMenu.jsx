import { NavLink } from "react-router-dom";
import styles from "./ModalMenu.module.scss";

const ModalMenu = ({ state }) => {
  return (
    <dialog open={state} className={styles.modalMenu}>
      <NavLink to="/home">Home</NavLink>
      <br />
      <NavLink to="/best-sellers">Best Sellers</NavLink>
      <br />
      <NavLink to="/mens">Mens</NavLink>
      <br />
      <NavLink to="/womens">Womens</NavLink>
    </dialog>
  );
};

export default ModalMenu;
