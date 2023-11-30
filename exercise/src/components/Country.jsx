import "../styles/country.css";

export const Country = () => {
  const country = {
    countryName: "Australia",
    capital: "Canberra",
    languages: "English",
    population: 24117360,
    currency: "Australian dollar",
  };

  return (
    <div className="country">
      <div className="country-container">
        <img className="flag" src="https://flagcdn.com/au.svg" />
        <br />
        <p className="country-name">{country.countryName.toUpperCase()}</p>
        <p className="country-info">Capital: {country.capital} </p>
        <p className="country-info">Language: {country.languages} </p>
        <p className="country-info">Population: {country.population} </p>
        <p className="country-info">Currency: {country.currency} </p>
      </div>
    </div>
  );
};
