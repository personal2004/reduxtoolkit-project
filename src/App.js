import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header/Header";
import { Home } from "./component/Home/Home";
import { MovieDetails } from "./component/MovieDetails/MovieDetails";
import { PageNotFound } from "./component/PageNotFound/PageNotFound";
import { Footer } from "./component/Footer/Footer";
import "./App.scss";
import FavouriteListing from "./component/FavoriteListing/FavouriteListing";

function App() {
  return (
    <div className="App">
      <Router className='app__container'>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
          <Route path="/favourite" element={<FavouriteListing/>}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
