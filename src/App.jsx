import "./App.css";
import SearchBar from "./components/Searchbar";
import TyreList from "./components/TyreList";
import styles from "./App.module.scss";
import React, { useState, useEffect } from "react";
import { getTyres } from "./services/FetchTyres.js";
import { getBrands } from "./services/FetchBrands.js";

function App() {
  const [tyreList, setTyreList] = useState([]);
  const searchEventHandler = async (filters) => {
    await getTyres(setTyreList, filters);
  };

  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    getBrands((brands) => setBrandList(brands));
  }, []);

  return (
    <div className={styles.App}>
      <header className="App-header">
        <h1>
          motor<span className={styles.green}>easy</span> techtest
        </h1>
      </header>
      <main>
        <SearchBar
          brandList={brandList}
          searchEventHandler={searchEventHandler}
        ></SearchBar>
        <TyreList tyreList={tyreList}></TyreList>
      </main>
    </div>
  );
}

export default App;
