export const getBrands = (callback) => {
  fetch("http://localhost:8080/brands")
    .then((response) => response.json())
    .then((data) => {
      const brands = data.map((brand) => brand.title);
      return callback(brands);
    });
};
