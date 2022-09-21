import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GitUsersAPi.css";

const GitApi = () => {
  let [user, setUser] = useState([]);
  let source = "https://api.github.com/users";

  useEffect(() => {
    let users = async () => {
      let gitusers = await axios.get(source);
      // console.log(gitusers.data);
      setUser(gitusers.data);
    };
    users();
  }, [source]);

  return (
    <div className="usercard_container">
      {user.map(
        ({ id, login, avatar_url, subscriptions_url, organizations_url }) => {
          return (
            <div key={id} className="usercard">
              <img
                className="usercard_img"
                src={avatar_url}
                alt="usersimage"
                height={"200px"}
                width={"200px"}
              />
              <h1 className="usercard_name">{login}</h1>
              <a className="usercard_url" href={subscriptions_url}>
                <button className="btn">Subscribe</button>
              </a>
            </div>
          );
        }
      )}
    </div>
  );
};

export default GitApi;
