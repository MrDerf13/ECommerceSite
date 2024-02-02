import { useState, useEffect } from "react";
import { getProducts } from "../../../services/ecom";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts("productData").then((res) => setProductList(res));
  }, []);

  return (
    <main className={styles.homePallette}>
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <div className={styles.homeCategoryWindows}>
        <Link to="/mens" className={styles.homeLinks}>
          <article className={styles.subwindow}>
            <h2>Mens</h2>
            {productList && (
              <img
                src={
                  "https://media.istockphoto.com/id/1253466968/photo/full-length-of-handsome-young-african-man-in-casual-wear.jpg?s=612x612&w=0&k=20&c=J3QNZecx7xJ5Q3MNlQ2vtf-5ZvEMiZBusFfsFMiMfAg="
                }
                alt="mensCatalog"
              />
            )}
          </article>
        </Link>
        <Link to="/womens" className={styles.homeLinks}>
          <article className={styles.subwindow}>
            <h2>Womens</h2>
            <img
              src={
                " https://media.istockphoto.com/id/512492501/photo/african-woman-posing-in-trendy-style.jpg?s=612x612&w=0&k=20&c=s1lNvXucpAEaH4UZWVC56iS4BP4CMovtwn8MLV-5lmg="
              }
              alt="womens"
            />
          </article>
        </Link>
      </div>
    </main>
  );
};

export default Home;
