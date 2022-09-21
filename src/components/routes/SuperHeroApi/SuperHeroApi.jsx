import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SuperHeroApi.css";

const SuperHeroApi = () => {
  let [hero, setHero] = useState([]);
  const source = "https://akabab.github.io/superhero-api/api/all.json";

  useEffect(() => {
    const heros = async () => {
      let superhero = await axios.get(source);
      setHero(superhero.data);
      // console.log(superhero.data);
    };
    heros();
  }, [source]);

  return (
    <div className="superherocard">
      {hero.map(
        ({ id, name, powerstats, appearance, images, biography, work }) => {
          return (
            <div key={id} className="card">
              <div className="card__heading">
                <h3>{name}</h3>
              </div>
              <div className="card__body">
                <div className="card__div-1">
                  <div className="card__div-1-1">
                    <img
                      src={images.sm}
                      alt="SuperHero"
                      width={200}
                      height={210}
                    />
                  </div>
                  <div className="card__div-1-2">
                    <ul type="square">
                      <li>Intelligence:{powerstats.intelligence}</li>
                      <li>Strength:{powerstats.strength}</li>
                      <li>Speed:{powerstats.speed}</li>
                      <li>Durability:{powerstats.durability}</li>
                      <li>Power:{powerstats.power}</li>
                      <li>Combat:{powerstats.combat}</li>
                    </ul>
                  </div>
                </div>
                <div className="card__div-2">
                  <div className="card__div-2-1">
                    <ul type="square">
                      <li>Gender:{appearance.gender}</li>
                      <li>Race:{appearance.race}</li>
                      <li>
                        Height:{appearance.height.slice(0, 4).join(" inch, ")}
                      </li>
                      <li>
                        Weight:{appearance.weight.slice(0, 4).join(" , ")}
                      </li>
                      <li>EyeColor:{appearance.eyeColor}</li>
                      <li>HairColor:{appearance.hairColor}</li>
                    </ul>
                  </div>
                  <div className="card__div-2-2">
                    <ul type="square">
                      <li>FullName:{biography.fullName}</li>
                      <li>AlterEgos:{biography.alterEgos}</li>
                      <li>Aliases:{biography.aliases.slice(0, 1)}</li>
                      <li>PlaceOfBirth:{biography.placeOfBirth}</li>
                      <li>FirstAppearance:{biography.firstAppearance}</li>
                      <li>Publisher:{biography.publisher}</li>
                      <li>Alignment:{biography.alignment}</li>
                    </ul>
                  </div>
                  <div className="card__div-2-3">
                    <p>Work:{work.occupation}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default SuperHeroApi;
