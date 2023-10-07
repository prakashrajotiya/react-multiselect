import { useEffect, useState } from "react";
import "./App.css";
import CheckBox from "./Components/CheckBox";
import { countryList } from "./utils/constant";

function App() {
  const [countriesList, setCountriesList] = useState(countryList);

  const updateCountry = (value) => {
    let localCountriesList = [];
    for (const country of countriesList) {
      if (country.code === value) {
        if (country.hasOwnProperty("checked")) {
          country.checked = !country.checked;
          localCountriesList.push(country);
        } else {
          country["checked"] = true;
          localCountriesList.push(country);
        }
      } else {
        localCountriesList.push(country);
      }
    }
    setCountriesList(localCountriesList);
  };

  // const selectedCountries = countriesList.filter((country)=>country.checked)

  return (
    <div className="country-contianer">
      <div className="country-list">
        {countriesList &&
          countriesList.map((country) => (
            <CheckBox
              key={country.code}
              updateCountry={updateCountry}
              country={country}
            />
          ))}
      </div>
      <div className="country-right">
        <div> <h4>Selected Countries</h4></div>
        <div> github repo link - <a href="https://github.com/prakashrajotiya/react-multiselect" target="_blank" rel="noreferrer" >https://github.com/prakashrajotiya/react-multiselect</a></div>

        <div className="selected-countries-container">
          {countriesList &&
            countriesList.map(
              (country) =>
                country.checked && (
                  <div className="selected-country" key={country.code}>
                    <img
                      src={`https://flagsapi.com/${country.code}/flat/32.png`}
                      alt="country flag"
                      className="country-flag"
                    />
                    {country.name}
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
