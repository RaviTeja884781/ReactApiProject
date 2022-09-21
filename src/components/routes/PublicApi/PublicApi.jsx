import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PublicApi.css";

const PublicApi = () => {
  const [api, setApi] = useState([]);
  let url = "https://api.publicapis.org/entries";

  useEffect(() => {
    let freeApi = async () => {
      let freePublicApi = await axios.get(url);
      setApi(freePublicApi.data.entries);
      console.log(freePublicApi.data.entries);
    };
    freeApi();
  }, []);

  return (
    <div className="publicApis">
      <h1 className="publicApi__heading">Free Public Apis</h1>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>API</th>
            <th>Description</th>
            <th>Auth</th>
            <th>Link</th>
            <th>Category</th>
          </tr>
        </thead>

        {api.map(({ API, Description, Auth, Link, Category }, index) => {
          return (
            <tbody key={Link}>
              <tr>
                <td>{index + 1}</td>
                <td>{API}</td>
                <td>{Description}</td>
                <td>{Auth}</td>
                <td>
                  <a
                    className="anchor"
                    rel="noopener noreferrer"
                    href={Link}
                    target="_blank"
                  >
                    {Link}
                  </a>
                </td>
                <td>{Category}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default PublicApi;
