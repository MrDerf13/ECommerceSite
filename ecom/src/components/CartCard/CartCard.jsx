import styles from "./CartCard.module.scss";
import { useState } from "react";

const CartCard = ({ obj, handleClick }) => {
  const [[size, cartQty]] = Object.entries(obj.qty);

  return (
    <article className={styles.cartCard}>
      <img src={obj.image} alt={obj.name} />
      <h3>
        {obj.name} - {size.toUpperCase()}
      </h3>
      <p>Quantity: {cartQty}</p>
      <p>Product total: ${obj.price * cartQty}</p>
      <img src="src/assets/delete.png" alt="delete" onClick={handleClick} />
    </article>
  );
};

export default CartCard;
