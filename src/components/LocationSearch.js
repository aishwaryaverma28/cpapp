import { useState } from "react";
import { countryData } from "../utils/constants";
import styles from "./LocationSearch.module.css"

const LocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSuggestions = countryData.filter((country) => {
    const name = Object.values(country)[0].toLowerCase();
    return name.startsWith(searchTerm.toLowerCase());
  });
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(Object.values(suggestion)[0]);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="In which country are you looking for a job?"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button className={styles.searchButton} type="submit">
            Search
          </button>
        </div>
      </form>
      {searchTerm && filteredSuggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {filteredSuggestions.map((country, index) => (
            <li
              className={styles.suggestion}
              onClick={() => handleSuggestionClick(country)}
              key={index}
            >
              {Object.values(country)[0]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;



