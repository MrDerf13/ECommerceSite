import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ obj }) => {
  return (
    <Link to={`/product/${obj.id}`} className={styles.galleryCard}>
      <img src={obj.image} alt={obj.name} />
      <h2>{obj.name}</h2>
      <h3>${obj.price}</h3>
    </Link>
  );
};

export default ProductCard;
