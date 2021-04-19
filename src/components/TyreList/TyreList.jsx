import React from "react";
import styles from "./TyreList.module.scss";
import TyreCard from "../TyreCard";

const TyreList = ({ tyreList }) => {
  if (tyreList.length) {
    return (
      <div className={styles["tyre-list"]}>
        {tyreList.map((tyre) => (
          <TyreCard key={tyre["_id"]} tyre={tyre} />
        ))}
      </div>
    );
  } else {
    return <p>No Result</p>;
  }
};

export default TyreList;
