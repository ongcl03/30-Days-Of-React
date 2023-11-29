import "../styles/population.css";

const tenHighestPopulation = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "USA", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russia", population: 146599183 },
  { country: "Japan", population: 126960000 },
];

export const Population = () => {
  const [{ population: maxPopulation }] = tenHighestPopulation;

  return (
    <div className="population-container">
      {tenHighestPopulation.map((countryObj) => {
        return (
          <div class="stats-container">
            <div className="country">{countryObj.country.toUpperCase()}</div>
            <div className="bar-container">
              <div
                className="bar"
                style={{
                  width: `${(countryObj.population / maxPopulation) * 100}%`,
                }}
              ></div>
              <div className="population">{countryObj.population}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
