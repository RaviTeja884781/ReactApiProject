import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UniversityApi.css";
const UniversityApi = () => {
  const [university, setUniversity] = useState([]);

  useEffect(() => {
    let Data = async () => {
      let universityData = await axios.get(
        "http://universities.hipolabs.com/search?country=United+States"
      );
      setUniversity(universityData.data);
    };
    Data();
  }, []);
  return (
    <div className="universityApi">
      <h1 className="universityApi__heading">Top Universites in Usa</h1>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Country</th>
            <th>Alpha Two Code</th>
            <th>Web Pages</th>
          </tr>
        </thead>
        {university.map(
          ({ name, country, alpha_two_code, web_pages }, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{country}</td>
                  <td>{alpha_two_code}</td>
                  <td>
                    <a className="anchor" href={web_pages} target={"_blank"}>
                      {web_pages}
                    </a>
                  </td>
                </tr>
              </tbody>
            );
          }
        )}
      </table>
    </div>
  );
};

export default UniversityApi;
