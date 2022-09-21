import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitApi from "./components/routes/GitUsersApi/GitApi";
// import Home from "./components/routes/HomePage/Home";
import NavBar from "./components/routes/NavBar/NavBar";
import NewsApi from "./components/routes/NewsApi/NewsApi";
import SuperHeroApi from "./components/routes/SuperHeroApi/SuperHeroApi.jsx";
import UniversityApi from "./components/routes/UniversityApi/UniversityApi";
import CovidApi from "./components/routes/CovidApi/CovidApi";
import PublicApi from "./components/routes/PublicApi/PublicApi";
// import MovieApi from "./components/routes/MoviesApi/MovieApi";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CovidApi />} />
        <Route path="/news" element={<NewsApi />} />
        <Route path="/gitusers" element={<GitApi />} />
        <Route path="/superheros" element={<SuperHeroApi />} />
        <Route path="/uni" element={<UniversityApi />} />
        <Route path="/publicApi" element={<PublicApi />} />
        {/* <Route path="/movies" element={<MovieApi />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
