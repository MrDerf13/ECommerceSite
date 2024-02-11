import { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [carDex, setCarDex] = useState(0);
  const nextImg = () => {
    setCarDex(carDex + 1);
  };
  useEffect(() => {
    const carInterval = setInterval(nextImg, 4000);
    return () => {
      clearInterval(carInterval);
    };
  }, [carDex]);

  const imgArray = [
    "https://www.intotheam.com/cdn/shop/files/Everyday_Bomber_Mock_Grey_360x.jpg?v=1703100879",
    "https://www.intotheam.com/cdn/shop/files/LunarMolotov_Mens_Tee_Mock_Front_2048x.jpg?v=1687881621",
    "https://www.sisterandsoul.com.au/cdn/shop/products/YOUGOTTHIS-PLUSSIZE-DustyMauveBoxyTee-2_2000x.jpg?v=1637717800",
    "https://www.sisterandsoul.com.au/cdn/shop/products/JOY-ScoppyPeachTee1_2000x.jpg?v=1638746666",
  ];

  return (
    <div className={styles.outerWrapper}>
      <img
        src="src/assets/arrow-left.png"
        alt="next"
        className={styles.arrow}
        onClick={() => {
          setCarDex((carDex + 1) % imgArray.length);
        }}
      />
      <Link to="/best-sellers" className={styles.carouselMain}>
        <img
          src={imgArray[carDex % imgArray.length]}
          alt="carouselImage"
          className={styles.carouselSideImg}
        />
        <img
          src={imgArray[(carDex + 1) % imgArray.length]}
          alt="carouselImage"
          className={styles.carouselMidImg}
        />
        <img
          src={imgArray[(carDex + 2) % imgArray.length]}
          alt="carouselImage"
          className={styles.carouselSideImg}
        />
      </Link>
      <img
        src="src/assets/arrow-right.png"
        alt="previous"
        className={styles.arrow}
        onClick={() => {
          setCarDex(
            carDex - 1 < 0
              ? imgArray.length - 1
              : (carDex - 1) % imgArray.length
          );
        }}
      />
    </div>
  );
};

export default Carousel;
