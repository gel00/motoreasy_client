import React from "react";
import styles from "./TyreList.module.scss";
import TyreCard from "../TyreCard";

const TyreList = ({ tyreList }) => {
  return (
    <div className={styles["tyre-list"]}>
      {tyreList.map((tyre) => (
        <TyreCard key={tyre["_id"]} tyre={tyre} />
      ))}
    </div>
  );
};

export default TyreList;
