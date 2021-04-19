import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ searchEventHandler, brandList }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const width = event.target[1].value;
    const profile = event.target[2].value;
    const rim = event.target[3].value;
    let filters = {};
    let brand = event.target[0].value;
    let size = `${width}/${profile} ${rim} 86H`;
    console.log(size);

    if (brand !== "Show all") {
      filters.brand = brand;
    }
    if (rim !== "Any") {
      filters.size = rim;
    }
    searchEventHandler(filters);
  };

  return (
    <form className={styles["search-bar"]} onSubmit={submitHandler}>
      <label htmlFor="brands">Brands</label>
      <select name="brands" id="brands" defaultValue="Show all">
        <option value="Show all">Show all</option>
        {brandList.map((brand, index) => {
          return (
            <option key={brand + index} value={brand}>
              {brand}
            </option>
          );
        })}
      </select>
      <label htmlFor="width">Width</label>
      <select name="width" id="width" disabled>
        <option value="185">185</option>
      </select>
      <label htmlFor="Profile">Profile</label>
      <select name="profile" id="profile" disabled>
        <option value="65">65</option>
      </select>
      <label htmlFor="rim">Rim</label>
      <select name="rim" id="rim" defaultValue="Any">
        <option value="Any">Any</option>
        <option value="R12" disabled>
          R12
        </option>
        <option value="R13" disabled>
          R13
        </option>
        <option value="R14">R14</option>
        <option value="R15">R15</option>
        <option value="R16">R16</option>
        <option value="R17" disabled>
          R17
        </option>
        <option value="R18" disabled>
          R18
        </option>
        <option value="R19" disabled>
          R19
        </option>
        <option value="R20" disabled>
          R20
        </option>
      </select>
      <input type="submit" value="New Search" className={styles.btn} />
    </form>
  );
};

export default SearchBar;
