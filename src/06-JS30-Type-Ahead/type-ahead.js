"use strict";
import axios from "axios";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const listOfCities = document.querySelector(".suggestions");
const searchForm = document.querySelector(".search");

let cities = [];

function handleSearch(event) {
  const query = event.target.value;
  displayCities(query);
}

const fetchCities = async () => {
  try {
    const response = await axios.get(`${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

const displayCities = (query) => {
  let citiesToDisplay = cities;

  if (query.length > 0) {
    citiesToDisplay = cities.filter((place) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        place.city.toLowerCase().includes(lowerCaseQuery) ||
        place.state.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }

  let markup = citiesToDisplay
    .map(
      (city) =>
        `<li>${city.city}, ${city.state}
         <span class="population">${city.population}</span>
         </li>`
    )
    .join("");

  listOfCities.innerHTML = markup;
};

searchForm.addEventListener("input", handleSearch);

(async () => {
  cities = await fetchCities();
  displayCities("");
})();
