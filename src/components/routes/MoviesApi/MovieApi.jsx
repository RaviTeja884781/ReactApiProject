import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieApi = () => {
  const [movie, setMovie] = useState([]);
  let url = "http://www.omdbapi.com/?s=avengers&apikey=cc9a816";

  useEffect(() => {
    try {
      let moviesData = async () => {
        let moviekey = await axios.get(url);
        setMovie(moviekey.data.Search);
        console.log(moviekey.data.Search);
      };
      moviesData();
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  return (
    <div>
      {movie.map(({ Title, Year, Poster, imdbID }) => {
        return (
          <div key={imdbID}>
            <div className="movie__img">
              <img src={Poster} alt="poster" />
            </div>
            <div className="movie__title">{Title}</div>
            <div className="movie__year">{Year}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieApi;
