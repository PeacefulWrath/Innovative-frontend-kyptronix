import React from "react";
import discover from "../../assets/discover.png";
import styles from "../../styles/ProductsStyles.module.css";
import DiscoverImg from '../../assets/DiscoverImg.png'

function Discover() {
  return (
    <>
      <div className={styles.Products__mainWrapper}>
        <img src={discover} alt="discover" />
      </div>

      <div className={styles.Products__mainWrapperTab}>
        <div className={styles.Products__contentMainWrapper}>
          <h2 className={styles.Products__contentHeading}>Discover Our Innovative Product Line</h2>
          <p className={styles.Products__contentPara}>
            Explore our diverse range of cutting-edge products designed to meet
            your needs. From efficiency-boosting tools to groundbreaking
            solutions, we have everything you need to elevate your experience
            and achieve success.
          </p>
          <button className={styles.Products__contentBuyBTN}>Buy Now</button>
        </div>
        <div className={styles.Products__imageMainWrapper}>
          <img src={DiscoverImg} alt="discover" />
        </div>
      </div>
    </>
  );
}

export default Discover;
