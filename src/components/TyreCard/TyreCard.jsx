import React from "react";
import styles from "./TyreCard.module.scss";

const TyreCard = ({ tyre }) => {
  return (
    <div className={styles.tyre}>
      <img
        className={styles["brand-logo"]}
        src={tyre.brand.logo}
        alt={tyre.brand.title}
      />
      <img className={styles["tyre-pic"]} src={tyre.image} alt={tyre.title} />
      <h4>
        {tyre.brand.title} {tyre.title}
      </h4>
      <h5>{tyre.size}</h5>
      <p className={styles.price}>£{tyre.price.toFixed(2)}</p>
      <select name="amount" id={tyre["_id"] + "amount"} defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <button className={styles.btn}>Buy</button>
    </div>
  );
};

export default TyreCard;
