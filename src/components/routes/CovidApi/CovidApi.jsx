import React, { useEffect, useState } from "react";
import "./CovidApi.css";

const CovidApi = () => {
  //! useState hook.
  let [infected, setInfected] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let source = "https://data.covid19india.org/data.json";

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = infected.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(infected);
    }
  };

  //! useEffect hook.
  useEffect(() => {
    let covidData = async () => {
      let covidInfected = await fetch(source);
      covidInfected = await covidInfected.json();
      let Data = covidInfected.statewise;
      setInfected(Data);
    };
    covidData();
  }, [source]);

  return (
    <div className="covidapidata">
      <div className="covidapidata__header">
        <h1>Live Covid Data</h1>
        <div className="covidapidata__searchbar">
          <input
            type="search"
            placeholder="search..."
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td>S.no</td>
            <td>State</td>
            <td>Active</td>
            <td>Confirmed</td>
            <td>Recovered</td>
            <td>Deaths</td>
            <td>LastUpdatedTime</td>
          </tr>
        </thead>
        {searchInput.length > 1
          ? filteredResults.map(
              (
                {
                  statecode,
                  state,
                  active,
                  confirmed,
                  recovered,
                  deaths,
                  lastupdatedtime,
                },
                index
              ) => {
                return (
                  <tbody key={statecode}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{state}</td>
                      <td>{active}</td>
                      <td>{confirmed}</td>
                      <td>{recovered}</td>
                      <td>{deaths}</td>
                      <td>{lastupdatedtime}</td>
                    </tr>
                  </tbody>
                );
              }
            )
          : infected.map(
              (
                {
                  statecode,
                  state,
                  active,
                  confirmed,
                  recovered,
                  deaths,
                  lastupdatedtime,
                },
                index
              ) => {
                return (
                  <tbody key={statecode}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{state}</td>
                      <td>{active}</td>
                      <td>{confirmed}</td>
                      <td>{recovered}</td>
                      <td>{deaths}</td>
                      <td>{lastupdatedtime}</td>
                    </tr>
                  </tbody>
                );
              }
            )}
      </table>
    </div>
  );
};

export default CovidApi;
