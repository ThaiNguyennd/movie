import React, { Fragment } from "react";
import Banner from "../component/banner/Banner";
import MovieList from "../component/movie/MovieList";

const Home = () => {
  return (
      <Fragment>
      <section className="movies-layout  page-container text-white pb-10">
        <h2 className="text-bold text-3xl capitalize mb-5 ">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout  page-container text-white pb-10 mt-10">
        <h2 className="text-bold text-3xl capitalize mb-5 ">TOP Rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout  page-container text-white pb-10 mt-10">
        <h2 className="text-bold text-3xl capitalize mb-5 ">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default Home;
