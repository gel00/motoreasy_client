export const getTyres = (callback, filters) => {
  let query = new URLSearchParams(filters).toString();
  console.log(query);
  fetch("http://localhost:8080/tyres/?" + query)
    .then((response) => response.json())
    .then((data) => callback(data));
};
